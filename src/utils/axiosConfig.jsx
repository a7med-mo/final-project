import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_SUPABASE_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "apikey": import.meta.env.VITE_SUPABASE_API_KEY,
        "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
    },
});
