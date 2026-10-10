import type { Loc } from "@/i18n/dictionaries";

/**
 * Collection assets: `public/andreano_cherini_collection/`
 * Layout: `model_N/color_M/{1..n}.png`
 * Skip `old/` (source archive only). Empty `model_*` folders stay offline until
 * photos appear — then add an entry to `catalog` below.
 *
 * Framing:
 * - Hero + product stage use `object-fit: contain` so the full pair is always visible.
 * - Set `frame` (CSS object-position) per model/colour for thumbs & cards only.
 * - Prefer landscape studio shots with breathing room around the shoes (like the mock).
 */
export const COLLECTION_ROOT = "/andreano_cherini_collection";

export type Category = "Derby" | "Oxford";

export type Spec = { label: Loc; value: Loc };

export type Product = {
  slug: string;
  /** Same shoe in different colours shares a family — used for the colour switcher. */
  family: string;
  /** Folder key, e.g. model_1 — for future tooling. */
  modelFolder: string;
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
  /**
   * Focal point when a crop is unavoidable (cards, thumbs).
   * CSS object-position, e.g. "58% 52%". Hero/product stages use contain — full pair visible.
   */
  frame: string;
};

export const CATEGORIES: Category[] = ["Derby", "Oxford"];

export const CATEGORY_LABEL: Record<Category, Loc> = {
  Derby: { en: "Derbies", ru: "Дерби" },
  Oxford: { en: "Oxfords", ru: "Оксфорды" },
};

const NERO: Loc = { en: "Black", ru: "Чёрный" };
const MORO: Loc = { en: "Dark brown", ru: "Тёмно-коричневый" };
const BLU: Loc = { en: "Navy", ru: "Тёмно-синий" };
const MARBLE_NERO: Loc = { en: "Black marble", ru: "Чёрный мрамор" };
const MARBLE_MORO: Loc = { en: "Brown marble", ru: "Коричневый мрамор" };
/** When blue Caiman photos land: `{ en: "Blue marble", ru: "Синий мрамор" }` */

type ColourDef = {
  colorFolder: string;
  slug: string;
  colour: Loc;
  swatch: string;
  count: number;
  badge?: Loc;
  /** Override model frame for this colour if the crop needs a nudge. */
  frame?: string;
};

type ModelDef = {
  modelFolder: string;
  family: string;
  name: string;
  model: Loc;
  category: Category;
  tagline: Loc;
  description: Loc;
  story: Loc;
  features: Loc[];
  /** Default object-position for thumbs/cards. Tune when adding a new model. */
  frame?: string;
  colours: ColourDef[];
};

const DEFAULT_FRAME = "50% 55%";

function gallery(modelFolder: string, colorFolder: string, count: number) {
  return Array.from(
    { length: count },
    (_, i) => `${COLLECTION_ROOT}/${modelFolder}/${colorFolder}/${i + 1}.png`,
  );
}

const specs = (colour: Loc): Spec[] => [
  { label: { en: "Upper", ru: "Верх" }, value: { en: "Natural leather", ru: "Натуральная кожа" } },
  { label: { en: "Lining", ru: "Подкладка" }, value: { en: "Fur", ru: "Мех" } },
  {
    label: { en: "Sole", ru: "Подошва" },
    value: { en: "Rubber / TPE", ru: "Резина / ТЭП" },
  },
  { label: { en: "Season", ru: "Сезон" }, value: { en: "Cold season", ru: "Холодный сезон" } },
  { label: { en: "Origin", ru: "Происхождение" }, value: { en: "Italy", ru: "Италия" } },
  { label: { en: "Colour", ru: "Цвет" }, value: colour },
];

/** Register a model here when its `color_*` folders have photos. */
const catalog: ModelDef[] = [
  {
    modelFolder: "model_1",
    family: "classico",
    name: "Classico",
    model: { en: "Cap-Toe Derby", ru: "Дерби с мыском" },
    category: "Derby",
    tagline: {
      en: "Polished toe, grained panels, warm lining.",
      ru: "Полированный мысок, зернистые бока, тёплая подкладка.",
    },
    description: {
      en: "A classic derby in high-quality natural leather: smooth cap and heel, pebbled sides, open lacing and a fur lining. A treaded sole for wet streets.",
      ru: "Классические дерби из высококачественной натуральной кожи: гладкий мысок и пятка, зернистые бока, открытая шнуровка и меховая подкладка. Протекторная подошва для мокрой улицы.",
    },
    story: {
      en: "The everyday formal line of the collection — clear proportions, mixed leather textures, comfort inside.",
      ru: "Повседневная классика коллекции — ясные пропорции, сочетание фактур кожи, комфорт внутри.",
    },
    frame: "52% 58%",
    features: [
      { en: "Cap toe in polished leather", ru: "Мысок из полированной кожи" },
      { en: "Pebbled side panels", ru: "Зернистые боковые панели" },
      { en: "Fur lining", ru: "Меховая подкладка" },
      { en: "Treaded rubber sole", ru: "Протекторная подошва" },
    ],
    colours: [
      { colorFolder: "color_1", slug: "classico-nero", colour: NERO, swatch: "#0c0c0e", count: 7, badge: { en: "Classic", ru: "Классика" } },
      { colorFolder: "color_2", slug: "classico-moro", colour: MORO, swatch: "#3a2620", count: 5 },
    ],
  },
  {
    modelFolder: "model_2",
    family: "caiman",
    name: "Caiman",
    model: { en: "Marble Oxford", ru: "Оксфорд с мраморной фактурой" },
    category: "Oxford",
    tagline: {
      en: "Closed lacing, marble grain, fur inside.",
      ru: "Закрытая шнуровка, мраморная фактура, мех внутри.",
    },
    description: {
      en: "A closed-laced Oxford in high-quality natural leather with a marble grain and warm fur lining. A narrower, more formal profile.",
      ru: "Оксфорд на закрытой шнуровке из высококачественной натуральной кожи с мраморной фактурой и тёплой меховой подкладкой. Более узкий, строгий силуэт.",
    },
    story: {
      en: "The grain reads like marble — black, brown or blue — rather than scale. Texture first, with the same comfort idea as the rest of the line.",
      ru: "Фактура ближе к мрамору — чёрному, коричневому или синему — чем к чешуе. Главное — рисунок кожи, с тем же подходом к комфорту, что и у всей линии.",
    },
    frame: "50% 60%",
    features: [
      { en: "Marble-grain leather", ru: "Кожа с мраморной фактурой" },
      { en: "Closed Oxford lacing", ru: "Закрытая оксфордская шнуровка" },
      { en: "Fur lining", ru: "Меховая подкладка" },
      { en: "Leather insole", ru: "Кожаная стелька" },
    ],
    colours: [
      { colorFolder: "color_1", slug: "caiman-moro", colour: MARBLE_MORO, swatch: "#3a2620", count: 5 },
      { colorFolder: "color_2", slug: "caiman-nero", colour: MARBLE_NERO, swatch: "#0c0c0e", count: 4 },
    ],
  },
  {
    modelFolder: "model_3",
    family: "apron",
    name: "Apron",
    model: { en: "Apron Derby", ru: "Дерби с фартуком" },
    category: "Derby",
    tagline: {
      en: "Apron toe, burnished leather, soft lining.",
      ru: "Мысок-фартук, патинированная кожа, мягкая подкладка.",
    },
    description: {
      en: "An apron-toe derby in high-quality natural leather with open lacing and a soft lining. Burnished tones at the toe and heel.",
      ru: "Дерби с мыском-фартуком из высококачественной натуральной кожи, открытая шнуровка и мягкая подкладка. Патина на мыске и пятке.",
    },
    story: {
      en: "A softer silhouette in the line — the apron stitch and colour depth set it apart from the Classico.",
      ru: "Более мягкий силуэт в линии — шов фартука и глубина цвета отличают его от Classico.",
    },
    frame: "48% 58%",
    features: [
      { en: "Apron toe stitch", ru: "Шов мыска-фартука" },
      { en: "Burnished natural leather", ru: "Патинированная натуральная кожа" },
      { en: "Open derby lacing", ru: "Открытая шнуровка дерби" },
      { en: "Soft lining", ru: "Мягкая подкладка" },
    ],
    colours: [
      { colorFolder: "color_1", slug: "apron-moro", colour: MORO, swatch: "#3a2620", count: 6 },
      { colorFolder: "color_2", slug: "apron-blu", colour: BLU, swatch: "#1a2744", count: 4 },
    ],
  },
];

export const products: Product[] = catalog.flatMap((m) =>
  m.colours.map((c) => ({
    slug: c.slug,
    family: m.family,
    modelFolder: m.modelFolder,
    name: m.name,
    model: m.model,
    category: m.category,
    colour: c.colour,
    swatch: c.swatch,
    badge: c.badge,
    tagline: m.tagline,
    description: m.description,
    story: m.story,
    features: m.features,
    specs: specs(c.colour),
    images: gallery(m.modelFolder, c.colorFolder, c.count),
    frame: c.frame ?? m.frame ?? DEFAULT_FRAME,
  })),
);

/** First colour of each model — for previews and the signature block. */
export const SIGNATURE_SLUG = "classico-nero";

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getVariants(product: Product) {
  return products.filter((p) => p.family === product.family);
}

/** One product per family (primary colour). */
export function getFamilies() {
  const seen = new Set<string>();
  return products.filter((p) => {
    if (seen.has(p.family)) return false;
    seen.add(p.family);
    return true;
  });
}
