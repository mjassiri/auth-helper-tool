import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })
  const { data, error } = await supabase.auth.getSession()

  return NextResponse.json({
    hasSession: !!data?.session,
    error: error?.message ?? null,
  })
}
