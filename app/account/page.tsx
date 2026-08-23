"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { authCopy } from "../auth-copy";
import { useAuth } from "../auth-context";
import { languageOptions, type Language } from "../content";
import { supabase } from "../lib/supabase";

export default function AccountPage() {
  const { user, profile, ready } = useAuth();
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("learning-park-language") as Language | null;
    return saved && languageOptions.some((option) => option.code === saved) ? saved : "en";
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const copy = authCopy[language];

  useEffect(() => {
    document.documentElement.lang = language === "uk" ? "uk" : language;
    window.localStorage.setItem("learning-park-language", language);
  }, [language]);

  const signIn = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setMessage(error ? error.message : "");
    setBusy(false);
  };

  const changePassword = async (event: FormEvent) => {
    event.preventDefault();
    if (newPassword.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setMessage(error ? error.message : copy.passwordSaved);
    if (!error) setNewPassword("");
    setBusy(false);
  };

  return <main className="account-page">
    <header className="account-topbar">
      <Link className="brand" href="/"><span className="brand-mark portal-mark">&lt;/&gt;</span><span className="brand-copy"><strong>CODE KNOWLEDGE PARK</strong><small>{copy.account}</small></span></Link>
      <div className="language-switcher" role="group">
        {languageOptions.map((option) => <button key={option.code} className={language === option.code ? "active" : ""} onClick={() => setLanguage(option.code)}>{option.short}</button>)}
      </div>
    </header>

    <section className="account-shell">
      <div className="account-intro">
        <p className="kicker">{user ? copy.signedIn : copy.guestTitle}</p>
        <h1>{user ? copy.cloudTitle : copy.signIn}</h1>
        <p>{user ? (profile?.sync_enabled ? copy.cloudOn : copy.cloudOff) : copy.accountText}</p>
        <Link className="account-back-link" href="/">← {copy.back}</Link>
      </div>

      <div className="account-card">
        {!ready ? <p>{copy.loading}</p> : !user ? <form onSubmit={signIn}>
          <label>{copy.email}<input type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} /></label>
          <label>{copy.password}<input type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} /></label>
          <button className="account-primary" disabled={busy}>{busy ? copy.signingIn : copy.enter}<span>→</span></button>
          <p className="account-help">{copy.guestText}</p>
        </form> : <div className="account-details">
          <div className="account-avatar">{(profile?.display_name || user.email || "U").slice(0, 1).toUpperCase()}</div>
          <strong>{profile?.display_name || user.email}</strong>
          <span>{user.email}</span>
          <div className={`sync-badge ${profile?.sync_enabled ? "enabled" : ""}`}><i>●</i>{profile?.sync_enabled ? copy.cloudOn : copy.cloudOff}</div>
          <form className="password-form" onSubmit={changePassword}>
            <h2>{copy.changePassword}</h2>
            <label>{copy.newPassword}<input type="password" autoComplete="new-password" minLength={8} required value={newPassword} onChange={(event) => setNewPassword(event.target.value)} /></label>
            <button className="account-secondary" disabled={busy}>{copy.savePassword}</button>
          </form>
          {profile?.role === "admin" && <Link className="admin-link" href="/admin">{copy.admin} →</Link>}
          <button className="signout-button" onClick={() => void supabase.auth.signOut()}>{copy.signOut}</button>
        </div>}
        {message && <p className="account-message" role="status">{message}</p>}
      </div>
    </section>
  </main>;
}
