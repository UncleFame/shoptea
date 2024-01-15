// Use the JS library to download a file.

import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocHlkdXJld2VsZmxnanNjaHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3OTMzODAsImV4cCI6MjAyMDM2OTM4MH0.rS-obZ5XFGz9DIPFF9B8buZnImFNAk2k239TQUaPD_8';
const SUPABASE_URL = 'https://dhpydurewelflgjschzb.supabase.co';

const { data, error } = await supabase.storage.from('avatars').download('public/avatar1.png')
