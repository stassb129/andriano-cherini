import type { Metadata } from "next";
import type { Loc, Locale } from "@/i18n/dictionaries";
import { DEFAULT_LOCALE, LOCALES, isLocale, localizePath } from "@/i18n/config";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://andrianocherini.com").replace(/\/$/, "");
export const SITE_NAME = "Andriano Cherini";
export const DEFAULT_OG_IMAGE = "/og.jpg";

const OG_LOCALE: Record<Locale, string> = { ru: "ru_RU", en: "en_GB" };

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
}

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

type PageSeo = {
  locale: Locale;
  /** Path without locale prefix, e.g. "/collection". */
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  /** Skip the "— Andriano Cherini" title template. */
  absoluteTitle?: boolean;
};

export function pageMetadata({ locale, path, title, description, image, type = "website", absoluteTitle }: PageSeo): Metadata {
  const url = localizePath(path, locale);
  const languages = Object.fromEntries(LOCALES.map((l) => [l, localizePath(path, l)]));
  const images = [{ url: image ?? DEFAULT_OG_IMAGE, alt: title }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": localizePath(path, DEFAULT_LOCALE) },
    },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((i) => i.url),
    },
  };
}

/** Static page titles and descriptions, kept short for search snippets. */
export const PAGE_SEO: Record<"home" | "collection" | "heritage" | "atelier" | "journal", { title: Loc; description: Loc }> = {
  home: {
    title: {
      en: "Andriano Cherini — Italian Men's Shoes since 2014",
      ru: "Andriano Cherini — итальянская мужская обувь с 2014 года",
    },
    description: {
      en: "Classic men's shoes from Fermo, Italy: the Fermo cap-toe derby and the Urbino Oxford with fur lining and cushioned heel.",
      ru: "Классические мужские туфли из Фермо, Италия: дерби Fermo и оксфорд Urbino с меховой подкладкой и амортизацией в каблуке.",
    },
  },
  collection: {
    title: { en: "Collection — Men's Derby and Oxford Shoes", ru: "Коллекция — мужские дерби и оксфорды" },
    description: {
      en: "The Fermo cap-toe derby and the Urbino croc-embossed Oxford in black and dark brown. Leather insole, fur lining, rubber and TPE sole.",
      ru: "Дерби Fermo с мыском и оксфорд Urbino с тиснением под крокодила в чёрном и тёмно-коричневом цвете. Кожаная стелька, меховая подкладка, подошва из резины и ТЭП.",
    },
  },
  heritage: {
    title: { en: "Brand Story", ru: "История бренда" },
    description: {
      en: "Andriano Cherini — a shoe brand from Fermo, founded in 2014. The models, the timeline and the principles behind the collection.",
      ru: "Andriano Cherini — обувной бренд из Фермо, основанный в 2014 году. Модели, хроника и принципы, на которых построена коллекция.",
    },
  },
  atelier: {
    title: { en: "Workshop — How the Shoes Are Made", ru: "Мастерская — как делают туфли" },
    description: {
      en: "How a Cherini shoe is made: last and pattern, leather, cutting, stitching, lasting, sole and finishing. Materials and comfort technologies.",
      ru: "Как делают туфли Cherini: колодка и лекала, кожа, раскрой, сборка верха, затяжка, подошва и отделка. Материалы и технологии комфорта.",
    },
  },
  journal: {
    title: { en: "Notes", ru: "Заметки" },
    description: {
      en: "Short notes from Andriano Cherini: how the brand started, comfort technologies and the Fermo Derby.",
      ru: "Короткие заметки Andriano Cherini: как появился бренд, технологии комфорта и модель Fermo Derby.",
    },
  },
};

export function staticPageMetadata(key: keyof typeof PAGE_SEO, locale: Locale, path: string, image?: string): Metadata {
  const seo = PAGE_SEO[key];
  return pageMetadata({
    locale,
    path,
    title: seo.title[locale],
    description: seo.description[locale],
    image,
    absoluteTitle: key === "home",
  });
}
