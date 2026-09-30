"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

const STORAGE_KEY = "ac-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
  L: <T extends { en: string; ru: string }>(value: T) => string;
};

const LocaleCtx = createContext<Ctx | null>(null);

function readStored(): Locale {
  if (typeof window === "undefined") return "en";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === "ru" || raw === "en") return raw;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("ru") ? "ru" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(readStored());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "ru" ? "ru" : "en";
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const t = dictionaries[locale] as Dictionary;
  const L = useCallback(<T extends { en: string; ru: string }>(value: T) => value[locale], [locale]);

  const value = useMemo(() => ({ locale, setLocale, t, L }), [locale, setLocale, t, L]);

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
