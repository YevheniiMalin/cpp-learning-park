"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { languageOptions, type Language } from "./content";
import { portalCopy } from "./portal-content";
import { AccountButton } from "./account-button";
import { authCopy } from "./auth-copy";
import { useAuth } from "./auth-context";
import { supabase } from "./lib/supabase";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const readProgress = (key: string) => {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value.filter((item) => Number.isInteger(item) && item >= 0 && item < 60).length : 0;
  } catch {
    return 0;
  }
};

export default function Portal() {
  const { user, profile, ready } = useAuth();
  const [language, setLanguage] = useState<Language>("en");
  const [progress, setProgress] = useState({ cpp: 0, python: 0 });
  const [loaded, setLoaded] = useState(false);
  const copy = portalCopy[language];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = (window.localStorage.getItem("learning-park-language") || window.localStorage.getItem("cpp-park-language")) as Language | null;
      if (saved && languageOptions.some((option) => option.code === saved)) setLanguage(saved);
      setProgress({ cpp: readProgress("cpp-park-completed-60"), python: readProgress("python-park-completed-60") });
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    if (loaded) {
      window.localStorage.setItem("learning-park-language", language);
      window.localStorage.setItem("cpp-park-language", language);
      window.localStorage.setItem("python-park-language", language);
    }
  }, [language, loaded]);

  useEffect(() => {
    if (!loaded || !ready || !user || !profile?.sync_enabled) return;
    let active = true;

    void supabase
      .from("course_progress")
      .select("course,completed,codes")
      .eq("user_id", user.id)
      .then(({ data }) => {
        if (!active || !data) return;
        const next = { cpp: readProgress("cpp-park-completed-60"), python: readProgress("python-park-completed-60") };

        data.forEach((row) => {
          if (row.course !== "cpp" && row.course !== "python") return;
          const course = row.course as "cpp" | "python";
          const completedKey = `${course}-park-completed-60`;
          const codesKey = `${course}-park-codes-60`;
          const ownerKey = `${course}-park-cloud-owner`;
          const previousOwner = window.localStorage.getItem(ownerKey);
          const remoteCompleted = Array.isArray(row.completed)
            ? row.completed.filter((item) => Number.isInteger(item) && Number(item) >= 0 && Number(item) < 60) as number[]
            : [];
          let localCompleted: number[] = [];
          try {
            const parsed = JSON.parse(window.localStorage.getItem(completedKey) || "[]");
            if (Array.isArray(parsed)) localCompleted = parsed.filter((item) => Number.isInteger(item) && item >= 0 && item < 60);
          } catch { /* Keep empty local progress. */ }
          const merged = !previousOwner || previousOwner === user.id
            ? Array.from(new Set([...remoteCompleted, ...localCompleted])).sort((a, b) => a - b)
            : remoteCompleted;
          window.localStorage.setItem(completedKey, JSON.stringify(merged));
          if ((!window.localStorage.getItem(codesKey) || previousOwner !== user.id) && Array.isArray(row.codes)) {
            window.localStorage.setItem(codesKey, JSON.stringify(row.codes));
          }
          window.localStorage.setItem(ownerKey, user.id);
          next[course] = merged.length;
        });
        setProgress(next);
      });

    return () => { active = false; };
  }, [loaded, ready, user, profile?.sync_enabled]);

  const courses = [
    { slug: "cpp", badge: "C++", name: copy.cppName, description: copy.cppDesc, topics: copy.cppTopics, completed: progress.cpp, className: "cpp" },
    { slug: "python", badge: "Py", name: copy.pythonName, description: copy.pythonDesc, topics: copy.pythonTopics, completed: progress.python, className: "python" },
  ];

  return <main className="portal-page">
    <header className="portal-topbar">
      <a className="brand" href="#courses" aria-label={copy.brand}>
        <span className="brand-mark portal-mark">&lt;/&gt;</span>
        <span className="brand-copy"><strong>{copy.brand}</strong><small>{copy.brandSub}</small></span>
      </a>
      <div className="portal-actions">
        <div className="language-switcher" role="group" aria-label={copy.language}>
          {languageOptions.map((option) => <button key={option.code} title={option.label} className={language === option.code ? "active" : ""} onClick={() => setLanguage(option.code)}>{option.short}</button>)}
        </div>
        <AccountButton language={language} />
      </div>
    </header>

    <section className="portal-hero" aria-label={copy.brand}>
      <Image className="portal-hero-image" src={`${publicBasePath}/portal-hero.jpg`} width={1200} height={630} priority alt="Code Knowledge Park: C++ and Python learning routes" />
    </section>

    <section className="portal-courses" id="courses" aria-labelledby="course-title">
      <p className="kicker" id="course-title">{copy.choose}</p>
      <div className="course-grid">
        {courses.map((course, index) => <Link className={`course-card ${course.className}`} href={`/${course.slug}`} key={course.slug}>
          <div className="course-card-top"><span className="course-index">0{index + 1}</span><span className="course-badge">{course.badge}</span></div>
          <div className="course-card-copy">
            <h2>{course.name}</h2><p>{course.description}</p>
            <div className="topic-chips">{course.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
          </div>
          <div className="course-card-bottom">
            <span><b>{copy.progress}:</b> {course.completed} / 60</span>
            <strong>{copy.openCourse} <i>↗</i></strong>
          </div>
        </Link>)}
      </div>
      <p className="portal-save-note"><span>●</span>{user && profile?.sync_enabled ? authCopy[language].cloudOn : copy.savedLocally}</p>
    </section>

    <footer className="portal-footer"><span className="brand-mark portal-mark">&lt;/&gt;</span><p>{copy.footer}</p><a href="#courses">↑</a></footer>
  </main>;
}
