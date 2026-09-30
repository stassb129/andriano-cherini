"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";
import { localizePath } from "./config";

const STORAGE_KEY = "ac-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Prefixes an internal path with the current locale. */
  href: (path: string) => string;
  t: Dictionary;
  L: <T extends { en: string; ru: string }>(value: T) => string;
};

const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
  }, [locale]);

  const setLocale = useCallback(
    (l: Locale) => {
      if (l === locale) return;
      const target = localizePath(pathname || "/", l) + window.location.search + window.location.hash;
      router.push(target, { scroll: false });
    },
    [locale, pathname, router],
  );

  const href = useCallback((path: string) => localizePath(path, locale), [locale]);
  const t = dictionaries[locale] as Dictionary;
  const L = useCallback(<T extends { en: string; ru: string }>(value: T) => value[locale], [locale]);

  const value = useMemo(() => ({ locale, setLocale, href, t, L }), [locale, setLocale, href, t, L]);

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
