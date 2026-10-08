import type { Loc } from "@/i18n/dictionaries";

export type Block =
  | { type: "p"; text: Loc }
  | { type: "h"; text: Loc }
  | { type: "quote"; text: Loc; by?: string }
  | { type: "image"; src: string; caption?: Loc };

export type Article = {
  slug: string;
  title: Loc;
  category: Loc;
  date: Loc;
  /** ISO date for structured data and the sitemap. */
  published: string;
  readTime: Loc;
  excerpt: Loc;
  cover: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "the-start-2014",
    title: {
      en: "How Cherini started",
      ru: "Как появился Cherini",
    },
    category: { en: "Story", ru: "История" },
    date: { en: "September 2026", ru: "Сентябрь 2026" },
    published: "2026-09-01",
    readTime: { en: "3 min", ru: "3 мин" },
    excerpt: {
      en: "How the brand was founded in 2014 and why comfort became its core.",
      ru: "Как бренд появился в 2014 году и почему комфорт стал его основой.",
    },
    cover: "/images/collection/fermo-derby-moro/08.jpg",
    body: [
      {
        type: "p",
        text: {
          en: "Andriano Cherini worked in the footwear industry for years and kept hearing the same complaint: the shoes look right, but feet are tired by evening. In 2014 he founded a small brand in the Marche with one task — classic men's shoes you can wear all day.",
          ru: "Андриано Черини много лет работал в обувной индустрии и постоянно слышал одно и то же: туфли выглядят хорошо, но к вечеру ноги устают. В 2014 году он основал небольшой бренд в Марке с одной задачей — классические мужские туфли, которые можно носить весь день.",
        },
      },
      {
        type: "quote",
        text: {
          en: "Forma e comfort — form and comfort, always together.",
          ru: "Forma e comfort — форма и комфорт, всегда вместе.",
        },
        by: "Andriano Cherini",
      },
      {
        type: "p",
        text: {
          en: "The collection stays small: the Fermo Derby and the Urbino Oxford, each in black and dark brown. Four variants, each one refined over time.",
          ru: "Коллекция остаётся небольшой: Fermo Derby и Urbino Oxford, каждая в чёрном и тёмно-коричневом. Четыре варианта, и каждый мы продолжаем дорабатывать.",
        },
      },
    ],
  },
  {
    slug: "comfortforma",
    title: {
      en: "Why ComfortForma and Ammortizzo matter",
      ru: "Зачем нужны ComfortForma и Ammortizzo",
    },
    category: { en: "Technology", ru: "Технологии" },
    date: { en: "August 2026", ru: "Август 2026" },
    published: "2026-08-01",
    readTime: { en: "3 min", ru: "3 мин" },
    excerpt: {
      en: "A classic silhouette outside, a softer step inside — the technical basis of the collection since 2018.",
      ru: "Снаружи классический силуэт, внутри более мягкий шаг — техническая основа коллекции с 2018 года.",
    },
    cover: "/images/collection/urbino-oxford-moro/09.jpg",
    body: [
      {
        type: "p",
        text: {
          en: "In 2018 the last was redesigned. ComfortForma gave more room in the forefoot and a secure heel. Ammortizzo, a cushioning insert in the heel, softens each step on long days on hard floors.",
          ru: "В 2018 году колодку переработали. ComfortForma дала больше свободы в носочной части и плотную посадку в пятке. Ammortizzo — амортизирующая вставка в каблуке — смягчает шаг, когда весь день проводишь на твёрдом полу.",
        },
      },
      {
        type: "h",
        text: {
          en: "Invisible by design",
          ru: "Незаметны снаружи",
        },
      },
      {
        type: "p",
        text: {
          en: "These details are not visible in a photo. They become noticeable after a full day. That is the idea of the brand: form and comfort together.",
          ru: "На фотографии этих деталей не видно. Они заметны к концу дня. В этом идея бренда: форма и комфорт вместе.",
        },
      },
    ],
  },
  {
    slug: "fermo-derby",
    title: {
      en: "The Fermo Derby since 2016",
      ru: "Fermo Derby с 2016 года",
    },
    category: { en: "Collection", ru: "Коллекция" },
    date: { en: "July 2026", ru: "Июль 2026" },
    published: "2026-07-01",
    readTime: { en: "3 min", ru: "3 мин" },
    excerpt: {
      en: "How a warm cap-toe derby became the brand's signature model.",
      ru: "Как тёплые дерби с мыском стали фирменной моделью бренда.",
    },
    cover: "/images/collection/fermo-derby-moro/04.jpg",
    body: [
      {
        type: "p",
        text: {
          en: "The Fermo Derby appeared in 2016: a textured vamp, a polished cap toe, a warm fur lining, the ComfortForma last and the Ammortizzo heel. Formal enough for the office, warm enough for winter streets.",
          ru: "Fermo Derby появились в 2016 году: фактурная союзка, полированный мысок, тёплая меховая подкладка, колодка ComfortForma и каблук Ammortizzo. Достаточно строгие для офиса и достаточно тёплые для зимы.",
        },
      },
      {
        type: "image",
        src: "/images/collection/fermo-derby-moro/09.jpg",
        caption: {
          en: "The fur lining of the Fermo.",
          ru: "Меховая подкладка Fermo.",
        },
      },
      {
        type: "p",
        text: {
          en: "It is still the signature model. The Urbino Oxford, which joined it later, follows the same idea.",
          ru: "Это по-прежнему фирменная модель. Urbino Oxford, появившийся позже, построен на той же идее.",
        },
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
