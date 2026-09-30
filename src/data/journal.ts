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
  readTime: Loc;
  excerpt: Loc;
  cover: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "the-start-2014",
    title: {
      en: "How Cherini started in 2014",
      ru: "Как Cherini начался в 2014",
    },
    category: { en: "Story", ru: "История" },
    date: { en: "September 2026", ru: "Сентябрь 2026" },
    readTime: { en: "4 min", ru: "4 мин" },
    excerpt: {
      en: "A short note on leaving mass footwear and building a brand around form and comfort.",
      ru: "Короткая заметка о выходе из масс-маркета и бренде вокруг формы и комфорта.",
    },
    cover: "/images/atelier/master.jpg",
    body: [
      {
        type: "p",
        text: {
          en: "Andriano Cherini spent years in mass footwear hearing the same complaint: the shoe looked right, the feet were tired by evening. In 2014 he started a small brand in the Marche with one brief — classic men's shoes you can wear all day.",
          ru: "Андриано Керини годы работал в масс-маркете и слышал одно и то же: туфля выглядит правильно, а к вечеру стопы устали. В 2014 он запустил небольшой бренд в Марке с одним брифом — классические мужские туфли на весь день.",
        },
      },
      {
        type: "quote",
        text: {
          en: "Forma e comfort — that line still sits under the crest.",
          ru: "Forma e comfort — эта строка до сих пор под гербом.",
        },
        by: "Andriano Cherini",
      },
      {
        type: "p",
        text: {
          en: "First pairs shipped under the Cherini name. A year later the crest arrived: lion, unicorn, and the motto. The story never needed a century of folklore — only a clear idea and a collection that keeps getting sharper.",
          ru: "Первые пары ушли под именем Cherini. Через год появился герб: лев, единорог и девиз. Истории не нужен был век фольклора — только ясная идея и коллекция, которая становится точнее.",
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
    readTime: { en: "3 min", ru: "3 мин" },
    excerpt: {
      en: "Classic silhouette outside. Softened step inside — the technical core since 2018.",
      ru: "Снаружи классический силуэт. Внутри мягче шаг — техническое ядро с 2018.",
    },
    cover: "/images/atelier/stitching.jpg",
    body: [
      {
        type: "p",
        text: {
          en: "In 2018 the last was redrawn. ComfortForma gave room in the forefoot and a secure heel. Ammortizzo — a cushioning insert in the heel — cut impact for long days on hard floors.",
          ru: "В 2018 колодку пересобрали. ComfortForma дала свободу в носке и плотную пятку. Ammortizzo — амортизирующая вставка в каблуке — снизила удар на длинных днях по твёрдому полу.",
        },
      },
      {
        type: "h",
        text: {
          en: "Invisible on purpose",
          ru: "Невидимы нарочно",
        },
      },
      {
        type: "p",
        text: {
          en: "You do not see these details in a photo. You feel them after eight hours. That is the point of the brand: form first, comfort always.",
          ru: "На фото этих деталей не видно. Их чувствуешь через восемь часов. В этом смысл бренда: сначала форма, всегда комфорт.",
        },
      },
    ],
  },
  {
    slug: "fermo-derby",
    title: {
      en: "The Fermo Derby since 2016",
      ru: "Fermo Derby с 2016",
    },
    category: { en: "Collection", ru: "Коллекция" },
    date: { en: "July 2026", ru: "Июль 2026" },
    readTime: { en: "3 min", ru: "3 мин" },
    excerpt: {
      en: "How a winter derby with shearling became the face of the house.",
      ru: "Как зимние дерби с овчиной стали лицом дома.",
    },
    cover: "/images/product/fermo-marble.jpg",
    body: [
      {
        type: "p",
        text: {
          en: "The Fermo Derby arrived in 2016: pebble-grain vamp, polished cap, merino shearling, ComfortForma and Ammortizzo. Formal enough for the office, warm enough for the walk there.",
          ru: "Fermo Derby появились в 2016: фактурная союзка, полированный мысок, мериносовая овчина, ComfortForma и Ammortizzo. Достаточно строгие для офиса и достаточно тёплые для дороги до него.",
        },
      },
      {
        type: "image",
        src: "/images/product/fermo-lining.jpg",
        caption: {
          en: "Shearling lining — the winter detail that stayed.",
          ru: "Овчина — зимняя деталь, которая осталась.",
        },
      },
      {
        type: "p",
        text: {
          en: "It is still the signature model. Everything else in the collection — oxfords, loafers, boots — grows from the same idea.",
          ru: "Это до сих пор фирменная модель. Всё остальное в коллекции — оксфорды, лоферы, ботинки — растёт из той же идеи.",
        },
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
