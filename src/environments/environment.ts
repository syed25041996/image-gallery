export const environment = {
  production: false,
};

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hnxbugvhdjafwrdexpax.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhueGJ1Z3ZoZGphZndyZGV4cGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MDMyNTYsImV4cCI6MTk5NjM3OTI1Nn0.-PS8hbUZ6D3v04nCg6yRbeTMqB8zC6EoxhnP3d7mUZk';
export const supabase = createClient(supabaseUrl, supabaseKey);
