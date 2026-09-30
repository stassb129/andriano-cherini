import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { articles } from "@/data/journal";
import { LOCALES, localizePath } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly"; lastModified?: string; images?: string[] };

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/collection", priority: 0.9, changeFrequency: "weekly" },
    ...products.map((p) => ({
      path: `/collection/${p.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: p.images.slice(0, 4),
    })),
    { path: "/heritage", priority: 0.6, changeFrequency: "yearly" },
    { path: "/atelier", priority: 0.6, changeFrequency: "yearly" },
    { path: "/journal", priority: 0.5, changeFrequency: "monthly" },
    ...articles.map((a) => ({
      path: `/journal/${a.slug}`,
      priority: 0.5,
      changeFrequency: "yearly" as const,
      lastModified: a.published,
      images: [a.cover],
    })),
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  ];

  return entries.flatMap((e) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(localizePath(e.path, locale)),
      lastModified: e.lastModified ?? new Date(),
      changeFrequency: e.changeFrequency,
      priority: e.priority,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, absoluteUrl(localizePath(e.path, l))])),
      },
      images: e.images?.map(absoluteUrl),
    })),
  );
}
