function assertValue<T>(
  v: T | undefined,
  errorMessage: string,
  serverOnly = false
): T {
  if (
    (typeof window === "undefined" ? serverOnly : !serverOnly) &&
    v === undefined
  ) {
    throw new Error(errorMessage);
  }

  return v!;
}
export const REVALIDATE_DURATION =
  Number(process.env.REVALIDATE_DURATION) || 10;
const defaultUrl = typeof window !== "undefined" ? window.location.href : "";
let vercelUrl = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : "";
if (vercelUrl && !vercelUrl?.startsWith("https://")) {
  vercelUrl = `https://${vercelUrl}`;
}
const siteUrl = vercelUrl || defaultUrl;
const baseUrl = siteUrl.endsWith("/")
  ? siteUrl.slice(0, siteUrl.length - 1)
  : siteUrl;
export const NEXT_PUBLIC_APP_URL = baseUrl;
export const SANITY_API_TOKEN = assertValue(
  process.env.SANITY_API_TOKEN,
  "Missing environment variable: SANITY_API_TOKEN",
  true
);
export const SANITY_WRITE_TOKEN = assertValue(
  process.env.SANITY_WRITE_TOKEN,
  "Missing environment variable: SANITY_WRITE_TOKEN",
  true
);
export const NEXT_PUBLIC_HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || ''
export const NEXT_PUBLIC_HUBSPOT_CONTACT_FORMGUID_ID = process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORMGUID_ID || ''