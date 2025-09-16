"use client"

import { useEffect, useState } from "react"
import { checkEnv } from "@/lib/checks"

export default function Home() {
  const [sessionCheck, setSessionCheck] = useState<string>("loading...")

  useEffect(() => {
    fetch("/api/session")
      .then(res => res.json())
      .then(data => setSessionCheck(JSON.stringify(data)))
      .catch(err => setSessionCheck("error: " + err.message))
  }, [])

  const env = checkEnv()

  return (
    <main className="p-8 font-mono text-sm">
      <h1 className="text-xl font-bold mb-4">Supabase Auth Debugger</h1>
      <ul className="space-y-2">
        <li>✅ Env URL present: {String(env.hasUrl)}</li>
        <li>✅ Env key present: {String(env.hasKey)}</li>
        <li>✅ URL format ok: {String(env.urlFormatOk)}</li>
        <li>✅ Key length ok: {String(env.keyLengthOk)}</li>
        <li>✅ Session check: {sessionCheck}</li>
      </ul>
    </main>
  )
}
