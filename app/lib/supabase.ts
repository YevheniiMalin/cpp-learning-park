import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://cuiawzvslzppzkvzuzbq.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ysyxQ2_BNameWSZzhIu4lQ_xB25zS00";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storageKey: "code-knowledge-park-auth",
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const createStudentSignupClient = () => createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
