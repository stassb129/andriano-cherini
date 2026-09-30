import type { Loc } from "@/i18n/dictionaries";

export type Chapter = {
  year: string;
  title: Loc;
  text: Loc;
  image: string;
  caption: Loc;
};

export const chapters: Chapter[] = [
  {
    year: "2014",
    title: { en: "The start", ru: "Старт" },
    text: {
      en: "Andriano Cherini leaves mass-market footwear and starts a small brand in the Marche. The brief: classic men's shoes that stay comfortable until evening.",
      ru: "Андриано Керини уходит из масс-маркета и запускает небольшой бренд в Марке. Бриф: классические мужские туфли, в которых удобно до вечера.",
    },
    image: "/images/atelier/master.jpg",
    caption: { en: "Fermo region, 2014", ru: "Регион Фермо, 2014" },
  },
  {
    year: "2015",
    title: { en: "Name and crest", ru: "Имя и герб" },
    text: {
      en: "The first pairs ship under the Cherini name. The crest appears: lion, unicorn, and the line Forma e comfort.",
      ru: "Первые пары уходят под именем Cherini. Появляется герб: лев, единорог и строка Forma e comfort.",
    },
    image: "/images/atelier/tools.jpg",
    caption: { en: "Crest, 2015", ru: "Герб, 2015" },
  },
  {
    year: "2016",
    title: { en: "The Fermo Derby", ru: "Fermo Derby" },
    text: {
      en: "A winter derby with shearling lining becomes the signature model — formal enough for the office, warm enough for the walk there.",
      ru: "Зимние дерби с овчиной становятся визитной карточкой — достаточно строгие для офиса и достаточно тёплые для дороги до него.",
    },
    image: "/images/product/fermo-lining.jpg",
    caption: { en: "First Fermo run", ru: "Первый тираж Fermo" },
  },
  {
    year: "2018",
    title: { en: "ComfortForma", ru: "ComfortForma" },
    text: {
      en: "The last is redrawn and the Ammortizzo heel insert arrives. Classic shape outside, softer step inside.",
      ru: "Колодку пересобирают, появляется вставка Ammortizzo. Снаружи классика, внутри мягче шаг.",
    },
    image: "/images/atelier/marking.jpg",
    caption: { en: "ComfortForma last", ru: "Колодка ComfortForma" },
  },
  {
    year: "Today",
    title: { en: "A clear collection", ru: "Понятная коллекция" },
    text: {
      en: "Two models, two colours, one idea. We keep refining lasts, leather and comfort.",
      ru: "Две модели, два цвета, одна идея. Мы продолжаем уточнять колодки, кожу и комфорт.",
    },
    image: "/images/atelier/workshop.jpg",
    caption: { en: "Collection, 2026", ru: "Коллекция, 2026" },
  },
];

export type TimelineEntry = {
  year: string;
  title: Loc;
  text: Loc;
  image?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2012–13",
    title: { en: "The brief", ru: "Бриф" },
    text: {
      en: "Working in mass footwear, Andriano keeps hearing the same thing: beautiful shoes, tired feet by evening. He starts sketching a brand built around comfort.",
      ru: "В масс-маркете Андриано снова слышит одно и то же: красивые туфли, а к вечеру стопы устали. Он начинает набрасывать бренд вокруг комфорта.",
    },
  },
  {
    year: "2014",
    title: { en: "Brand launch", ru: "Запуск бренда" },
    text: {
      en: "Cherini starts in the Marche footwear belt. First models, first online orders, a small workshop team.",
      ru: "Cherini стартует в обувном поясе Марке. Первые модели, первые онлайн-заказы, небольшая команда.",
    },
    image: "/images/atelier/master.jpg",
  },
  {
    year: "2015",
    title: { en: "Crest and voice", ru: "Герб и голос" },
    text: {
      en: "The crest is finalized. Packaging, care cards and the motto Forma e comfort become the brand face.",
      ru: "Герб утверждён. Упаковка, карточки ухода и девиз Forma e comfort становятся лицом бренда.",
    },
    image: "/images/brand/crest.jpg",
  },
  {
    year: "2016",
    title: { en: "Fermo Derby", ru: "Fermo Derby" },
    text: {
      en: "The shearling winter derby sells through and becomes the signature silhouette of the house.",
      ru: "Зимние дерби с овчиной расходятся и закрепляются как фирменный силуэт дома.",
    },
    image: "/images/product/fermo-lining.jpg",
  },
  {
    year: "2018",
    title: { en: "Comfort tech", ru: "Комфорт-технологии" },
    text: {
      en: "ComfortForma last and Ammortizzo heel enter production — the technical core of later collections.",
      ru: "В производство входят колодка ComfortForma и каблук Ammortizzo — техническое ядро следующих коллекций.",
    },
    image: "/images/atelier/marking.jpg",
  },
  {
    year: "2021",
    title: { en: "Wider collection", ru: "Шире коллекция" },
    text: {
      en: "Oxfords, loafers and boots join the line. Same idea: classic look, day-long wear.",
      ru: "В линейку входят оксфорды, лоферы и ботинки. Та же идея: классика и носка на весь день.",
    },
    image: "/images/shoes/brown-oxford-top.jpg",
  },
  {
    year: "2026",
    title: { en: "Today", ru: "Сегодня" },
    text: {
      en: "A focused catalogue, clear technologies, and direct contact with the brand.",
      ru: "Собранный каталог, понятные технологии и прямой контакт с брендом.",
    },
    image: "/images/atelier/workshop.jpg",
  },
];

export const values = [
  {
    title: { en: "One clear idea", ru: "Одна ясная идея" },
    text: {
      en: "Formal shoes should look right and feel right after eight hours. Everything else is secondary.",
      ru: "Классические туфли должны выглядеть уместно и оставаться удобными через восемь часов. Остальное вторично.",
    },
  },
  {
    title: { en: "Technology inside", ru: "Технологии внутри" },
    text: {
      en: "ComfortForma, Ammortizzo, shearling, grip soles — invisible from the outside, obvious by evening.",
      ru: "ComfortForma, Ammortizzo, овчина, цепкие подошвы — снаружи не видно, к вечеру очевидно.",
    },
  },
  {
    title: { en: "A real collection", ru: "Реальная коллекция" },
    text: {
      en: "We sell finished models from the catalogue. Simple questions, clear answers.",
      ru: "Мы продаём готовые модели из каталога. Простые вопросы, понятные ответы.",
    },
  },
];

export type Technology = {
  id: string;
  name: string;
  title: Loc;
  text: Loc;
  stat: string;
  statLabel: Loc;
};

export const technologies: Technology[] = [
  {
    id: "ammortizzo",
    name: "Ammortizzo",
    title: { en: "Cushioning", ru: "Амортизация" },
    text: {
      en: "A heel insert softens impact and reduces load on the joints — movement without fatigue.",
      ru: "Вставка в каблуке смягчает удар и снижает нагрузку на суставы — движение без усталости.",
    },
    stat: "−32%",
    statLabel: { en: "heel impact", ru: "удар в пятке" },
  },
  {
    id: "comfortforma",
    name: "ComfortForma",
    title: { en: "Comfortable last", ru: "Удобная колодка" },
    text: {
      en: "Room for the toes, a secure heel — formal silhouette with everyday fit.",
      ru: "Место для пальцев, плотная пятка — классический силуэт с повседневной посадкой.",
    },
    stat: "2018",
    statLabel: { en: "introduced", ru: "введена" },
  },
  {
    id: "shearling",
    name: "Pelliccia",
    title: { en: "Shearling lining", ru: "Овчина" },
    text: {
      en: "Natural merino lining for winter models — warm outdoors, breathable indoors.",
      ru: "Натуральная мериносовая подкладка для зимы — тепло на улице, без духоты в помещении.",
    },
    stat: "14 mm",
    statLabel: { en: "pile", ru: "ворс" },
  },
  {
    id: "grip",
    name: "Thermo-Grip",
    title: { en: "All-weather sole", ru: "Всесезонная подошва" },
    text: {
      en: "Flexible rubber compound with grip on wet stone and a leather waist for a classic profile.",
      ru: "Гибкий резиновый компаунд с сцеплением на мокром камне и кожаной шейкой для классики.",
    },
    stat: "−20°C",
    statLabel: { en: "stays flexible", ru: "остаётся гибкой" },
  },
  {
    id: "fit",
    name: "Tenuta",
    title: { en: "Secure fit", ru: "Надёжная посадка" },
    text: {
      en: "A firm heel counter and balanced lacing keep the foot in place through the day.",
      ru: "Плотный задник и продуманная шнуровка держат стопу на месте весь день.",
    },
    stat: "All day",
    statLabel: { en: "stable hold", ru: "стабильная фиксация" },
  },
  {
    id: "leather",
    name: "Pieno Fiore",
    title: { en: "Full-grain leather", ru: "Кожа полного зерна" },
    text: {
      en: "Selected calf that breathes and takes a patina — built to look better with wear.",
      ru: "Отобранный теленок, который дышит и берёт патину — со временем выглядит только лучше.",
    },
    stat: "Selected",
    statLabel: { en: "hides only", ru: "только отбор" },
  },
];

export type CraftStep = {
  n: string;
  title: Loc;
  text: Loc;
  image: string;
  duration: Loc;
};

export const craftSteps: CraftStep[] = [
  {
    n: "01",
    title: { en: "Last & pattern", ru: "Колодка и лекало" },
    text: {
      en: "Every model starts from a last. Patterns are cut to follow the grain of the leather.",
      ru: "Каждая модель начинается с колодки. Лекала кроят по направлению зерна кожи.",
    },
    image: "/images/atelier/marking.jpg",
    duration: { en: "Design", ru: "Дизайн" },
  },
  {
    n: "02",
    title: { en: "Leather", ru: "Кожа" },
    text: {
      en: "Hides are selected for density and finish. Winter models get shearling; summer models stay lighter.",
      ru: "Кожу отбирают по плотности и отделке. Зимним моделям — овчина, летним — легче.",
    },
    image: "/images/atelier/leather-roll.jpg",
    duration: { en: "Selection", ru: "Отбор" },
  },
  {
    n: "03",
    title: { en: "Cutting", ru: "Раскрой" },
    text: {
      en: "Uppers are cut and prepared for closing — clean edges, consistent panels.",
      ru: "Верх кроят и готовят к сборке — чистые края, ровные детали.",
    },
    image: "/images/atelier/cutting.jpg",
    duration: { en: "Cutting", ru: "Раскрой" },
  },
  {
    n: "04",
    title: { en: "Closing", ru: "Сборка верха" },
    text: {
      en: "Pieces are stitched into the upper. Seams stay dense and even.",
      ru: "Детали сшивают в верх. Шов остаётся плотным и ровным.",
    },
    image: "/images/atelier/stitching.jpg",
    duration: { en: "Stitching", ru: "Строчка" },
  },
  {
    n: "05",
    title: { en: "Lasting", ru: "Затяжка" },
    text: {
      en: "The upper is lasted so the leather learns the shape — then rests before soling.",
      ru: "Верх затягивают на колодку, чтобы кожа запомнила форму — затем дают отдых перед подошвой.",
    },
    image: "/images/atelier/hands-leather.jpg",
    duration: { en: "Rest", ru: "Отдых" },
  },
  {
    n: "06",
    title: { en: "Sole & heel", ru: "Подошва и каблук" },
    text: {
      en: "Sole and heel are built; Ammortizzo sits inside the heel block where the model needs it.",
      ru: "Собирают подошву и каблук; Ammortizzo ставят в каблук там, где модели это нужно.",
    },
    image: "/images/atelier/sanding.jpg",
    duration: { en: "Build", ru: "Сборка" },
  },
  {
    n: "07",
    title: { en: "Finishing", ru: "Отделка" },
    text: {
      en: "Edges, polish and final checks — the shoe leaves ready to wear.",
      ru: "Края, полировка и финальная проверка — туфля уходит готовой к носке.",
    },
    image: "/images/atelier/knife.jpg",
    duration: { en: "Finish", ru: "Финиш" },
  },
  {
    n: "08",
    title: { en: "Pack & ship", ru: "Упаковка" },
    text: {
      en: "Trees, bag, care card — then the pair goes to the customer.",
      ru: "Колодки, мешок, карточка ухода — и пара уходит к покупателю.",
    },
    image: "/images/atelier/tools.jpg",
    duration: { en: "Ship", ru: "Отправка" },
  },
];

export const leathers = [
  {
    name: { en: "Box Calf", ru: "Бокс-каф" },
    origin: { en: "Marche / Tuscany", ru: "Марке / Тоскана" },
    text: {
      en: "Dense calf for polished toes and clean formal lines.",
      ru: "Плотный теленок для полированных мысков и чистой классики.",
    },
    image: "/images/atelier/leather-roll-2.jpg",
  },
  {
    name: { en: "Pebble-Grain", ru: "Пыльник" },
    origin: { en: "Tuscany", ru: "Тоскана" },
    text: {
      en: "Textured calf that hides scuffs — used on the Fermo vamp.",
      ru: "Фактурная кожа, которая скрывает потёртости — на союзке Fermo.",
    },
    image: "/images/atelier/hands-leather.jpg",
  },
  {
    name: { en: "Merino Shearling", ru: "Мериносовая овчина" },
    origin: { en: "Italy", ru: "Италия" },
    text: {
      en: "Soft graphite pile for winter lining.",
      ru: "Мягкий графитовый ворс для зимней подкладки.",
    },
    image: "/images/product/fermo-lining.jpg",
  },
  {
    name: { en: "Sole leather & rubber", ru: "Подошвенная кожа и резина" },
    origin: { en: "Selected mills", ru: "Отобранные фабрики" },
    text: {
      en: "Leather waist with grip rubber for wet streets.",
      ru: "Кожаная шейка и цепкая резина для мокрых улиц.",
    },
    image: "/images/atelier/leather-roll.jpg",
  },
];

export type Boutique = {
  city: string;
  name: Loc;
  address: string;
  hours: Loc;
  phone: string;
  image: string;
  note: Loc;
};

export const boutiques: Boutique[] = [
  {
    city: "Fermo",
    name: { en: "Brand office", ru: "Офис бренда" },
    address: "Contrada San Michele 14, 63900 Fermo",
    hours: { en: "Mon – Fri · 10:00 – 18:00", ru: "Пн – Пт · 10:00 – 18:00" },
    phone: "+39 0734 000 121",
    image: "/images/italy/stone-house.jpg",
    note: {
      en: "Correspondence, wholesale and collection questions.",
      ru: "Переписка, опт и вопросы по коллекции.",
    },
  },
  {
    city: "Milano",
    name: { en: "Partner store", ru: "Партнёрский магазин" },
    address: "Via della Spiga 22, 20121 Milano",
    hours: { en: "Mon – Sat · 10:00 – 19:30", ru: "Пн – Сб · 10:00 – 19:30" },
    phone: "+39 02 0000 2014",
    image: "/images/italy/canal.jpg",
    note: {
      en: "Current collection available to view and buy.",
      ru: "Актуальная коллекция — посмотреть и купить.",
    },
  },
  {
    city: "Online",
    name: { en: "Web shop", ru: "Интернет-магазин" },
    address: "atelier@andrianocherini.com",
    hours: { en: "Orders daily", ru: "Заказы ежедневно" },
    phone: "+39 0734 000 121",
    image: "/images/product/fermo-marble.jpg",
    note: {
      en: "Full catalogue, sizes and shipping.",
      ru: "Полный каталог, размеры и доставка.",
    },
  },
];
