# Supabase Setup Guide

Follow these steps to connect your database chatbot to Supabase:

## 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign in with GitHub/Google or create an account
4. Click "New Project"
5. Choose your organization and enter project details
6. Wait for the project to be created (takes ~2 minutes)

## 2. Get Your Project Credentials
1. Go to your project dashboard
2. Click on "Settings" in the left sidebar
3. Click on "API"
4. Copy the following values:
   - **Project URL** (looks like `https://abcdefghijk.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

## 3. Configure Environment Variables
1. Create a `.env` file in your project root (if it doesn't exist)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the values with your actual Supabase project URL and anon key.

## 4. Create Sample Tables (Optional)
To test the chatbot, create some sample tables in your Supabase project:

1. Go to the "Table Editor" in your Supabase dashboard
2. Click "Create a new table"
3. Create a simple table like:

**Table: users**
- `id` (int8, primary key, auto-increment)
- `name` (text)
- `email` (text)
- `created_at` (timestamptz, default: now())

4. Add some sample data to test the chatbot

## 5. Set Row Level Security (Optional)
If you want to restrict access:

1. Go to "Authentication" → "Policies"
2. Enable RLS on your tables
3. Create policies to allow public read access for testing:

```sql
-- Allow public read access to users table
CREATE POLICY "Public read access" ON users
FOR SELECT USING (true);
```

## 6. Test the Connection
1. Restart your development server
2. Try asking the chatbot:
   - "What tables do you have?"
   - "Show me the users table"
   - "How many users are there?"

## Troubleshooting

### Common Issues:
- **"Supabase client not available"**: Check your .env file and restart the dev server
- **"No accessible tables found"**: Create some tables or check RLS policies
- **"Row Level Security"**: Either disable RLS or create appropriate policies

### Environment Variables Not Loading?
- Make sure your .env file is in the project root
- Restart your development server after adding variables
- Check that variable names start with `VITE_` for Vite projects

### Still having issues?
Check the browser console for detailed error messages and ensure your Supabase project is active.