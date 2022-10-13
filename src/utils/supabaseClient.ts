import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bzydxhmfhlpbtepnrzex.supabase.co" || "";
const supabaseKey =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6eWR4aG1maGxwYnRlcG5yemV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2NjY3MzYsImV4cCI6MTk4MTI0MjczNn0.l-WxueBwxUYCEKJz1lP9v3yFd0XTwVGPqNf95UtUF9Y " ||
  "";

export const supabase = createClient(supabaseUrl, supabaseKey);
