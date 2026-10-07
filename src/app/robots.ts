import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/** NEXT_PUBLIC_SITE_ENV (any host) wins, then Vercel's VERCEL_ENV; defaults to production. */
function isProductionSite(): boolean {
  const siteEnv = process.env.NEXT_PUBLIC_SITE_ENV;
  if (siteEnv) return siteEnv === "production";
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === "production";
  return true;
}

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL.replace(/^https?:\/\//, ""),
  };
}
