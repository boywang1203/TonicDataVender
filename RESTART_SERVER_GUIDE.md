# How to Restart Your Development Server

After updating your environment variables, you need to restart your development server to load the new values.

## Step 1: Stop the Current Server
In your terminal where the development server is running, press:
- **Ctrl + C** (Windows/Linux)
- **Cmd + C** (Mac)

You'll see something like:
```
^C
Local:   http://localhost:5173/
```

## Step 2: Start the Server Again
Run one of these commands depending on your setup:

### If you're using npm:
```bash
npm run dev
```

### If you're using yarn:
```bash
yarn dev
```

### If you're using pnpm:
```bash
pnpm dev
```

### Alternative commands (if the above don't work):
```bash
npm start
# or
yarn start
# or
pnpm start
```

## Step 3: Verify the Server Started
You should see output similar to:
```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Step 4: Test Your Application
1. Open your browser to the local URL (usually `http://localhost:5173/`)
2. Try asking the chatbot a question like "What tables do you have?"
3. The chatbot should now connect to your Supabase database instead of showing setup instructions

## Troubleshooting

### If the server won't start:
- Make sure you're in the correct project directory
- Check that your `.env` file is in the project root (same level as `package.json`)
- Verify your environment variables don't have any extra spaces or quotes

### If environment variables still aren't loading:
- Double-check your `.env` file format
- Make sure variable names start with `VITE_`
- Try clearing your browser cache and refreshing the page

### Common Error Messages:
- **"command not found"**: Try `npx vite` instead
- **"port already in use"**: Try a different port with `npm run dev -- --port 3001`