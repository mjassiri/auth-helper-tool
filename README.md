Supabase Auth Debugger

A minimal Next.js + Supabase app to quickly spot common auth setup issues.
Helps confirm that your environment variables and Supabase project are wired up correctly before you waste time debugging.

What it checks

✅ Supabase URL present and well-formatted

✅ Supabase anon key present and sane length

✅ Project reachable (no fetch/API errors)

✅ Session check (is a valid session cookie set?)

Getting Started

Clone the repo and install dependencies:

git clone https://github.com/yourname/supabase-auth-debugger.git
cd supabase-auth-debugger
pnpm install


Create your local env file:

cp .env.example .env.local


Fill in .env.local with your own Supabase project URL and anon key.

Start the dev server:

pnpm dev


Open http://localhost:3000
 to view the debugger.

📝 Notes

.env.local is git-ignored — your keys are never published.

.env.example is just a template you can share safely.

No data is stored — everything runs locally against your Supabase project.
