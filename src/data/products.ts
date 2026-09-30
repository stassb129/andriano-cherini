import type { Loc } from "@/i18n/dictionaries";

export type Category = "Derby" | "Oxford";

export type Spec = { label: Loc; value: Loc };

export type Product = {
  slug: string;
  /** Same shoe in different colours shares a family — used for the colour switcher. */
  family: string;
  name: string;
  model: Loc;
  category: Category;
  colour: Loc;
  swatch: string;
  badge?: Loc;
  tagline: Loc;
  description: Loc;
  story: Loc;
  features: Loc[];
  specs: Spec[];
  images: string[];
  ozonUrl: string;
};

export const CATEGORIES: Category[] = ["Derby", "Oxford"];

export const CATEGORY_LABEL: Record<Category, Loc> = {
  Derby: { en: "Derbies", ru: "Дерби" },
  Oxford: { en: "Oxfords", ru: "Оксфорды" },
};

export const OZON_BRAND = "https://www.ozon.ru/search/?text=Andriano+Cherini";

const gallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/collection/${slug}/${String(i + 1).padStart(2, "0")}.jpg`);

const NERO: Loc = { en: "Black", ru: "Чёрный" };
const MORO: Loc = { en: "Dark brown", ru: "Тёмно-коричневый" };

const specs = (colour: Loc): Spec[] => [
  { label: { en: "Insole material", ru: "Материал стельки" }, value: { en: "Leather", ru: "Кожа" } },
  {
    label: { en: "Sole material", ru: "Материал подошвы обуви" },
    value: {
      en: "Rubber, TPE (thermoplastic elastomer)",
      ru: "Резина, ТЭП (полимерный термопластичный материал)",
    },
  },
  { label: { en: "Season", ru: "Сезон" }, value: { en: "All seasons", ru: "На любой сезон" } },
  { label: { en: "Brand country", ru: "Страна бренда" }, value: { en: "Italy", ru: "Италия" } },
  { label: { en: "Colour", ru: "Цвет" }, value: colour },
];

const FERMO = {
  family: "fermo",
  name: "Fermo",
  model: { en: "Cap-Toe Derby", ru: "Дерби с мыском" },
  category: "Derby" as Category,
  tagline: {
    en: "The signature derby — formal outside, warm and soft inside.",
    ru: "Фирменная модель — строгая снаружи, тёплая и мягкая внутри.",
  },
  description: {
    en: "A cap-toe derby in polished leather with open lacing and a soft fur lining. The treaded sole keeps its grip on wet streets while the silhouette stays office-ready.",
    ru: "Дерби с мыском из полированной кожи, открытая шнуровка и мягкая меховая подкладка. Протекторная подошва держит на мокрой улице, а силуэт остаётся уместным в офисе.",
  },
  story: {
    en: "Named after Fermo, the town where the brand began. It is the shoe Andriano had in mind from the start: classic lines and comfort that lasts until evening.",
    ru: "Модель названа в честь Фермо — города, где начался бренд. Именно такую пару Андриано задумывал с самого начала: классические линии и комфорт до вечера.",
  },
  features: [
    { en: "Cap toe in polished leather", ru: "Мысок из полированной кожи" },
    { en: "Open derby lacing", ru: "Открытая шнуровка дерби" },
    { en: "Soft fur lining", ru: "Мягкая меховая подкладка" },
    { en: "Leather insole", ru: "Кожаная стелька" },
    { en: "Treaded rubber sole", ru: "Протекторная резиновая подошва" },
  ],
};

const URBINO = {
  family: "urbino",
  name: "Urbino",
  model: { en: "Croc-Embossed Oxford", ru: "Оксфорд с тиснением под крокодила" },
  category: "Oxford" as Category,
  tagline: {
    en: "A closed-laced Oxford with a bold croc-embossed leather.",
    ru: "Оксфорд на закрытой шнуровке с выразительной фактурой под крокодила.",
  },
  description: {
    en: "An Oxford in polished croc-embossed leather with closed lacing and a warm fur lining. A slim profile and a clean sole edge — suited to the office and to evening wear.",
    ru: "Оксфорд из полированной кожи с тиснением под крокодила, закрытая шнуровка и тёплая меховая подкладка. Узкий силуэт и аккуратный край подошвы — уместен и в офисе, и вечером.",
  },
  story: {
    en: "Named after Urbino in the Marche, a Renaissance town known for its clear proportions. The same restraint, with a leather texture that catches the light.",
    ru: "Модель названа в честь Урбино в Марке — ренессансного города с ясными пропорциями. Та же сдержанность, но с фактурой кожи, которая играет на свету.",
  },
  features: [
    { en: "Croc-embossed polished leather", ru: "Полированная кожа с тиснением под крокодила" },
    { en: "Closed Oxford lacing", ru: "Закрытая оксфордская шнуровка" },
    { en: "Soft fur lining", ru: "Мягкая меховая подкладка" },
    { en: "Leather insole", ru: "Кожаная стелька" },
    { en: "Rubber heel insert", ru: "Резиновая набойка на каблуке" },
  ],
};

export const products: Product[] = [
  {
    ...FERMO,
    slug: "fermo-derby-nero",
    colour: NERO,
    swatch: "#0c0c0e",
    badge: { en: "Signature", ru: "Фирменная" },
    specs: specs(NERO),
    images: gallery("fermo-derby-nero", 11),
    ozonUrl: OZON_BRAND,
  },
  {
    ...FERMO,
    slug: "fermo-derby-moro",
    colour: MORO,
    swatch: "#3a2620",
    specs: specs(MORO),
    images: gallery("fermo-derby-moro", 11),
    ozonUrl: OZON_BRAND,
  },
  {
    ...URBINO,
    slug: "urbino-oxford-nero",
    colour: NERO,
    swatch: "#0c0c0e",
    specs: specs(NERO),
    images: gallery("urbino-oxford-nero", 12),
    ozonUrl: OZON_BRAND,
  },
  {
    ...URBINO,
    slug: "urbino-oxford-moro",
    colour: MORO,
    swatch: "#3a2620",
    specs: specs(MORO),
    images: gallery("urbino-oxford-moro", 12),
    ozonUrl: OZON_BRAND,
  },
];

export const SIGNATURE_SLUG = "fermo-derby-nero";

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getVariants(product: Product) {
  return products.filter((p) => p.family === product.family);
}
