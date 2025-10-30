import { SupabaseClient } from "@supabase/supabase-js";

export const supabase = new SupabaseClient(
    "https://ltpkjageptpynecfrzlu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0cGtqYWdlcHRweW5lY2Zyemx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMDAzNDIsImV4cCI6MjA3Njg3NjM0Mn0.uVWvNcAo5fPKJKFgF7NJXW2dmA6ufSneeALGS4eKX50"
)

export const logoutFromSupabase = async () => {
    const {error } = await supabase.auth.signOut()
    console.log(error)
}