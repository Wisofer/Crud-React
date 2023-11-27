import { createClient } from "@supabase/supabase-js";

const { VITE_APP_URL_SUPABASE, VITE_APP_URL_SUPABASE_TOKEN } = import.meta.env;

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  VITE_APP_URL_SUPABASE,
  VITE_APP_URL_SUPABASE_TOKEN
);
