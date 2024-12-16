import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uioxugtlgudsoxwvfnsb.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY_ANON;

export const supabase = createClient(supabaseUrl, supabaseKey);
