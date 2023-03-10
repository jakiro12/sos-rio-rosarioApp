import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient('https://wfddjlxzpohmcjgnclbg.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZGRqbHh6cG9obWNqZ25jbGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NjU5OTQsImV4cCI6MTk5MzM0MTk5NH0.92tm_u4IKqx7ojMUyfLMDCzXsQfj1RxpH7IoD-KyQGw')