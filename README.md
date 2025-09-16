# Supabase Auth Debugger

A tiny Next.js + Supabase tool that checks common auth misconfigs:
- Env vars present and correctly formatted
- Supabase key length sanity check
- Session cookie set or not

## Setup
```bash
git clone ...
cd supabase-auth-debugger
cp .env.example .env.local
pnpm install
pnpm dev