import type { Locale } from "./dictionaries";

export const LOCALES: readonly Locale[] = ["ru", "en"];
/** Served without a URL prefix; English lives under /en. */
export const DEFAULT_LOCALE: Locale = "ru";

export function isLocale(value: string | undefined): value is Locale {
  return value === "ru" || value === "en";
}

/** "/en/collection" → "/collection", "/en" → "/". */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|ru)(?=\/|$)/);
  if (!match) return pathname || "/";
  return pathname.slice(match[0].length) || "/";
}

/** Adds the locale prefix to an internal path ("/collection" → "/en/collection" for English). */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/")) return path;
  const base = stripLocale(path);
  if (locale === DEFAULT_LOCALE) return base;
  return base === "/" ? `/${locale}` : `/${locale}${base}`;
}
