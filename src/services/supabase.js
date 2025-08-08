import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://otmarkaplrvunqhtenrr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90bWFya2FwbHJ2dW5xaHRlbnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NzEyNjAsImV4cCI6MjA2OTU0NzI2MH0.XORzM6uXZ6YLstjiLjHMtI_Ix6E3V5Jw99fjsw8C0ho";

const supabase = createClient(supabaseUrl, supabaseKey);

// ✅ default export
export default supabase;
export { supabaseUrl };
