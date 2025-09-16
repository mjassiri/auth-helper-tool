# Supabase Auth Debugger

A minimal **Next.js + Supabase** app to quickly spot common auth setup issues.  
Helps confirm that your environment variables and Supabase project are wired up correctly before you waste time debugging.  

## ✅ What it checks
- Supabase URL present and well-formatted  
- Supabase anon key present and sane length  
- Project reachable (no fetch/API errors)  
- Session check (is a valid session cookie set?)  

---

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourname/supabase-auth-debugger.git
cd supabase-auth-debugger
pnpm install
```

## **Create your local env file:**

```bash
cp .env.example .env.local
```

Fill in .env.local with your own Supabase project URL and anon key.

Start the dev server:

```bash
pnpm dev
```

## **Example Result
<img width="498" height="246" alt="Screenshot 2025-09-16 at 14 20 47" src="https://github.com/user-attachments/assets/38da31ab-27ff-48e4-8b95-30bb910b59af" />

