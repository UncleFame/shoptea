// loginsystem.js

import { createClient } from "@supabase/supabase-js";
import {Auth} from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocHlkdXJld2VsZmxnanNjaHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3OTMzODAsImV4cCI6MjAyMDM2OTM4MH0.rS-obZ5XFGz9DIPFF9B8buZnImFNAk2k239TQUaPD_8';
const SUPABASE_URL = 'https://dhpydurewelflgjschzb.supabase.co';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function loginWithGoogle() {
    
   
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo : 'http://localhost:3000/Register'
            }
        });


        // if (error) {
        //     console.error('Google login error:', error);
        //     navigate("/Register");
        // } else {
        //     // Navigate to the "/Register" route on successful login
        //     navigate("/");
        // }
    } catch (error) {
        console.error('Error during Google login:', error.message);
    }
}

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

