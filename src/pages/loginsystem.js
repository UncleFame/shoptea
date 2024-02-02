import { createClient } from "@supabase/supabase-js";
import { getCurrentUser } from "../models/users";

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocHlkdXJld2VsZmxnanNjaHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3OTMzODAsImV4cCI6MjAyMDM2OTM4MH0.rS-obZ5XFGz9DIPFF9B8buZnImFNAk2k239TQUaPD_8';
const SUPABASE_URL = 'https://dhpydurewelflgjschzb.supabase.co';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);




export async function logout() {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error('Logout error:', error);
        } else {
            console.log('Logout successful');
        }
    } catch (error) {
        console.error('Error during logout:', error.message);
    }
}

