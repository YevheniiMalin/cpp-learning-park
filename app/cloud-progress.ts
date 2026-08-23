"use client";

import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { useAuth } from "./auth-context";
import { supabase } from "./lib/supabase";

type Course = "cpp" | "python";
type SyncState = "guest" | "disabled" | "syncing" | "synced" | "error";

type CloudProgressOptions = {
  course: Course;
  loaded: boolean;
  completed: number[];
  codes: string[];
  starters: string[];
  activeStation: number;
  activeTask: number;
  setCompleted: Dispatch<SetStateAction<number[]>>;
  setCodes: Dispatch<SetStateAction<string[]>>;
  setActiveStation: Dispatch<SetStateAction<number>>;
  setActiveTask: Dispatch<SetStateAction<number>>;
};

type ProgressRow = {
  completed: unknown;
  codes: unknown;
  active_station: number;
  active_task: number;
};

const validCompleted = (value: unknown) => Array.isArray(value)
  ? value.filter((item): item is number => Number.isInteger(item) && Number(item) >= 0 && Number(item) < 60)
  : [];

const validCodes = (value: unknown, length: number) => Array.isArray(value) && value.length === length && value.every((item) => typeof item === "string")
  ? value as string[]
  : null;

export function useCloudProgress(options: CloudProgressOptions) {
  const { user, profile, ready } = useAuth();
  const [syncState, setSyncState] = useState<SyncState>("guest");
  const initializedFor = useRef("");
  const latest = useRef(options);

  useEffect(() => {
    latest.current = options;
  }, [options]);

  useEffect(() => {
    if (!ready || !options.loaded) return;
    if (!user) {
      initializedFor.current = "";
      return;
    }
    if (!profile?.sync_enabled) {
      initializedFor.current = "";
      return;
    }

    const syncKey = `${user.id}:${options.course}`;
    if (initializedFor.current === syncKey) return;
    let cancelled = false;

    const initialize = async () => {
      setSyncState("syncing");
      const { data, error } = await supabase
        .from("course_progress")
        .select("completed,codes,active_station,active_task")
        .eq("user_id", user.id)
        .eq("course", options.course)
        .maybeSingle<ProgressRow>();

      if (cancelled) return;
      if (error) {
        setSyncState("error");
        return;
      }

      const current = latest.current;
      const previousOwner = window.localStorage.getItem(`${options.course}-park-cloud-owner`);
      const canMergeLocal = !previousOwner || previousOwner === user.id;
      const remoteCompleted = validCompleted(data?.completed);
      const mergedCompleted = canMergeLocal
        ? Array.from(new Set([...remoteCompleted, ...current.completed])).sort((a, b) => a - b)
        : remoteCompleted;
      const remoteCodes = validCodes(data?.codes, current.codes.length);
      const mergedCodes = remoteCodes
        ? current.codes.map((code, index) => canMergeLocal && code !== current.starters[index] ? code : remoteCodes[index])
        : current.codes;
      const station = data && !canMergeLocal ? Math.max(0, Math.min(5, data.active_station ?? 0)) : current.activeStation;
      const task = data && !canMergeLocal ? Math.max(0, Math.min(9, data.active_task ?? 0)) : current.activeTask;

      initializedFor.current = syncKey;
      window.localStorage.setItem(`${options.course}-park-cloud-owner`, user.id);
      current.setCompleted(mergedCompleted);
      current.setCodes(mergedCodes);
      current.setActiveStation(station);
      current.setActiveTask(task);

      const { error: saveError } = await supabase.from("course_progress").upsert({
        user_id: user.id,
        course: options.course,
        completed: mergedCompleted,
        codes: mergedCodes,
        active_station: station,
        active_task: task,
      }, { onConflict: "user_id,course" });

      if (!cancelled) setSyncState(saveError ? "error" : "synced");
    };

    void initialize();
    return () => { cancelled = true; };
  }, [ready, options.loaded, user, profile?.sync_enabled, options.course]);

  useEffect(() => {
    if (!user || !profile?.sync_enabled) return;
    const syncKey = `${user.id}:${options.course}`;
    if (initializedFor.current !== syncKey) return;

    const timer = window.setTimeout(() => {
      setSyncState("syncing");
      void supabase.from("course_progress").upsert({
        user_id: user.id,
        course: options.course,
        completed: options.completed,
        codes: options.codes,
        active_station: options.activeStation,
        active_task: options.activeTask,
      }, { onConflict: "user_id,course" }).then(({ error }) => setSyncState(error ? "error" : "synced"));
    }, 700);

    return () => window.clearTimeout(timer);
  }, [user, profile?.sync_enabled, options.course, options.completed, options.codes, options.activeStation, options.activeTask]);

  if (ready && !user) return "guest";
  if (ready && user && !profile?.sync_enabled) return "disabled";
  return syncState;
}
