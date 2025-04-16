import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vjbfluxierkgtxmoxvax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqYmZsdXhpZXJrZ3R4bW94dmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NDU0NzUsImV4cCI6MjA2MDQyMTQ3NX0.ZTBr4YD4eurnYt9z3cbrnhFUA-mDOTw-Awt87XaBDQ8';

export const supabase = createClient(supabaseUrl, supabaseKey);
