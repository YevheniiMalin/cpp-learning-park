"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useAuth, type UserProfile } from "../auth-context";
import { createStudentSignupClient, supabase } from "../lib/supabase";

type ProgressRow = { user_id: string; course: "cpp" | "python"; completed: unknown };
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const makePassword = () => {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
};

export default function AdminPage() {
  const { user, profile, ready } = useAuth();
  const [students, setStudents] = useState<UserProfile[]>([]);
  const [progress, setProgress] = useState<ProgressRow[]>([]);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState(() => typeof window === "undefined" ? "" : makePassword());
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    if (profile?.role !== "admin") return;
    const [profilesResult, progressResult] = await Promise.all([
      supabase.from("profiles").select("id,email,display_name,role,sync_enabled,created_at,updated_at").order("created_at", { ascending: false }),
      supabase.from("course_progress").select("user_id,course,completed"),
    ]);
    setStudents((profilesResult.data ?? []) as UserProfile[]);
    setProgress((progressResult.data ?? []) as ProgressRow[]);
  }, [profile?.role]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  const counts = useMemo(() => {
    const result = new Map<string, { cpp: number; python: number }>();
    progress.forEach((row) => {
      const current = result.get(row.user_id) ?? { cpp: 0, python: 0 };
      current[row.course] = Array.isArray(row.completed) ? row.completed.length : 0;
      result.set(row.user_id, current);
    });
    return result;
  }, [progress]);

  const createStudent = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const signupClient = createStudentSignupClient();
    const { data, error } = await signupClient.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { display_name: displayName.trim() },
        emailRedirectTo: `${window.location.origin}${publicBasePath}/account/`,
      },
    });

    if (error || !data.user) {
      setMessage(error?.message || "Account could not be created.");
      setBusy(false);
      return;
    }

    const { error: activateError } = await supabase.from("profiles").update({
      display_name: displayName.trim() || email.split("@")[0],
      sync_enabled: true,
    }).eq("id", data.user.id);

    if (activateError) setMessage(`Account created, but synchronization could not be enabled: ${activateError.message}`);
    else {
      setMessage("Student account created. Give the student the email and temporary password shown above.");
      setEmail("");
      setDisplayName("");
      setPassword(makePassword());
      await load();
    }
    setBusy(false);
  };

  const toggleSync = async (student: UserProfile) => {
    setBusy(true);
    const { error } = await supabase.from("profiles").update({ sync_enabled: !student.sync_enabled }).eq("id", student.id);
    setMessage(error ? error.message : student.sync_enabled ? "Synchronization disabled." : "Synchronization enabled.");
    await load();
    setBusy(false);
  };

  if (!ready) return <main className="admin-page"><p>Loading…</p></main>;
  if (!user || profile?.role !== "admin") return <main className="admin-page"><section className="admin-denied"><h1>Administrator access required</h1><p>This page is available only to the course owner.</p><Link href="/account">← Account</Link></section></main>;

  return <main className="admin-page">
    <header className="admin-topbar"><Link href="/">&lt;/&gt; Code Knowledge Park</Link><div><span>{user.email}</span><Link href="/account">Account</Link></div></header>
    <section className="admin-heading"><p className="kicker">ADMINISTRATION</p><h1>Students and progress</h1><p>Create student accounts manually, pause synchronization and see completed exercises.</p></section>
    <section className="admin-layout">
      <form className="student-form" onSubmit={createStudent}>
        <h2>Create student</h2>
        <label>Name<input required value={displayName} onChange={(event) => setDisplayName(event.target.value)} /></label>
        <label>Email<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label>
        <label>Temporary password<div className="password-row"><input required minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} /><button type="button" onClick={() => setPassword(makePassword())}>Generate</button></div></label>
        <button className="account-primary" disabled={busy}>Create account <span>→</span></button>
        <p>The student may change this password after signing in. If email confirmation is enabled in Supabase, they must also confirm the message sent to their email.</p>
      </form>

      <div className="student-list">
        <div className="student-list-heading"><h2>Accounts</h2><span>{students.filter((student) => student.role === "student").length} students</span></div>
        {students.filter((student) => student.role === "student").map((student) => {
          const studentProgress = counts.get(student.id) ?? { cpp: 0, python: 0 };
          return <article className="student-row" key={student.id}>
            <div><strong>{student.display_name || student.email}</strong><small>{student.email}</small></div>
            <div className="student-progress"><span>C++ <b>{studentProgress.cpp}/60</b></span><span>Python <b>{studentProgress.python}/60</b></span></div>
            <button className={student.sync_enabled ? "active" : ""} disabled={busy} onClick={() => void toggleSync(student)}>{student.sync_enabled ? "Sync on" : "Sync off"}</button>
          </article>;
        })}
        {!students.some((student) => student.role === "student") && <p className="empty-students">No student accounts yet.</p>}
      </div>
    </section>
    {message && <div className="admin-toast" role="status">{message}</div>}
  </main>;
}
