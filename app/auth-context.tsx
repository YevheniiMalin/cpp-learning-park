"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "./lib/supabase";

export type UserProfile = {
  id: string;
  email: string;
  display_name: string | null;
  role: "student" | "admin";
  sync_enabled: boolean;
  created_at: string;
  updated_at: string;
};

type AuthContextValue = {
  user: User | null;
  profile: UserProfile | null;
  ready: boolean;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [ready, setReady] = useState(false);

  const loadProfile = useCallback(async (nextUser: User | null) => {
    setUser(nextUser);
    if (!nextUser) {
      setProfile(null);
      setReady(true);
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("id,email,display_name,role,sync_enabled,created_at,updated_at")
      .eq("id", nextUser.id)
      .maybeSingle<UserProfile>();

    setProfile(data ?? null);
    setReady(true);
  }, []);

  const refreshProfile = useCallback(async () => {
    await loadProfile(user);
  }, [loadProfile, user]);

  useEffect(() => {
    let active = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (active) void loadProfile(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) void loadProfile(session?.user ?? null);
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, [loadProfile]);

  const value = useMemo(() => ({ user, profile, ready, refreshProfile }), [user, profile, ready, refreshProfile]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
