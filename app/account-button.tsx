"use client";

import Link from "next/link";
import type { Language } from "./content";
import { authCopy } from "./auth-copy";
import { useAuth } from "./auth-context";

export function AccountButton({ language }: { language: Language }) {
  const { user, profile, ready } = useAuth();
  const copy = authCopy[language];
  const label = !ready ? copy.account : user ? (profile?.display_name || user.email || copy.account) : copy.signIn;

  return <Link className={`account-button ${user ? "signed-in" : ""}`} href="/account" title={copy.account}>
    <span className={`account-dot ${user && profile?.sync_enabled ? "cloud" : ""}`}>{user ? "✓" : "○"}</span>
    <span>{label}</span>
  </Link>;
}
