export function checkEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  return {
    hasUrl: !!url,
    hasKey: !!key,
    urlFormatOk: url?.startsWith("https://") ?? false,
    keyLengthOk: key ? key.length > 20 : false,
  }
}
