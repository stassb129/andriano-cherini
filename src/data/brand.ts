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
    title: { en: "The start", ru: "Начало" },
    text: {
      en: "Andriano Cherini founds a small brand in the Marche. The aim: classic men's shoes that stay comfortable until evening.",
      ru: "Андриано Черини основывает небольшой бренд в Марке. Цель — классические мужские туфли, в которых удобно до вечера.",
    },
    image: "/images/atelier/master.jpg",
    caption: { en: "Fermo, 2014", ru: "Фермо, 2014" },
  },
  {
    year: "2016",
    title: { en: "The Fermo Derby", ru: "Fermo Derby" },
    text: {
      en: "A warm cap-toe derby — formal enough for the office, warm enough for winter streets. Open lacing, polished leather, soft lining.",
      ru: "Тёплые дерби с мыском — достаточно строгие для офиса и достаточно тёплые для зимы. Открытая шнуровка, полированная кожа, мягкая подкладка.",
    },
    image: "/images/collection/fermo-derby-nero/08.jpg",
    caption: { en: "Fermo Derby", ru: "Fermo Derby" },
  },
  {
    year: "2018",
    title: { en: "ComfortForma", ru: "ComfortForma" },
    text: {
      en: "The last is redesigned and the Ammortizzo heel insert is introduced. A classic shape outside, a softer step inside.",
      ru: "Колодку переработали и добавили вставку Ammortizzo. Снаружи классическая форма, внутри более мягкий шаг.",
    },
    image: "/images/collection/fermo-derby-moro/10.jpg",
    caption: { en: "Ammortizzo heel", ru: "Каблук Ammortizzo" },
  },
  {
    year: "2021",
    title: { en: "The Urbino Oxford", ru: "Urbino Oxford" },
    text: {
      en: "A closed-laced Oxford in croc-embossed leather joins the Fermo. Two silhouettes, each in black and dark brown.",
      ru: "К Fermo присоединяется оксфорд на закрытой шнуровке из кожи с тиснением под крокодила. Два силуэта, каждый в чёрном и тёмно-коричневом.",
    },
    image: "/images/collection/urbino-oxford-nero/05.jpg",
    caption: { en: "Urbino Oxford", ru: "Urbino Oxford" },
  },
  {
    year: "2026",
    title: { en: "The collection today", ru: "Коллекция сегодня" },
    text: {
      en: "Two models in two colours: the Fermo Derby and the Urbino Oxford. We keep refining lasts, leather and comfort.",
      ru: "Две модели в двух цветах: Fermo Derby и Urbino Oxford. Мы продолжаем дорабатывать колодки, кожу и комфорт.",
    },
    image: "/images/collection/urbino-oxford-moro/04.jpg",
    caption: { en: "Urbino Oxford, 2026", ru: "Urbino Oxford, 2026" },
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
    title: { en: "The idea", ru: "Идея" },
    text: {
      en: "Working in the footwear industry, Andriano keeps hearing the same thing: the shoes look right, but feet are tired by evening. He starts working on a brand built around comfort.",
      ru: "Работая в обувной индустрии, Андриано постоянно слышит одно и то же: туфли выглядят хорошо, но к вечеру ноги устают. Он начинает работать над брендом, построенным вокруг комфорта.",
    },
  },
  {
    year: "2014",
    title: { en: "Founding", ru: "Основание" },
    text: {
      en: "Cherini is founded in the Marche: a small team and a focus on classic shoes built for all-day comfort.",
      ru: "В Марке основан Cherini: небольшая команда и фокус на классических туфлях, в которых удобно весь день.",
    },
  },
  {
    year: "2016",
    title: { en: "Fermo Derby", ru: "Fermo Derby" },
    text: {
      en: "The warm cap-toe derby — open lacing, polished leather, soft lining — for the office and winter streets.",
      ru: "Тёплые дерби с мыском — открытая шнуровка, полированная кожа, мягкая подкладка — для офиса и зимней улицы.",
    },
    image: "/images/collection/fermo-derby-moro/03.jpg",
  },
  {
    year: "2018",
    title: { en: "Comfort technologies", ru: "Технологии комфорта" },
    text: {
      en: "The ComfortForma last and the Ammortizzo heel go into production and become the technical basis of the collection.",
      ru: "Колодка ComfortForma и каблук Ammortizzo идут в производство и становятся технической основой коллекции.",
    },
    image: "/images/collection/urbino-oxford-nero/10.jpg",
  },
  {
    year: "2021",
    title: { en: "Urbino Oxford", ru: "Urbino Oxford" },
    text: {
      en: "The Urbino joins the Fermo: a closed-laced Oxford in croc-embossed leather.",
      ru: "К Fermo присоединяется Urbino — оксфорд на закрытой шнуровке из кожи с тиснением под крокодила.",
    },
    image: "/images/collection/urbino-oxford-nero/05.jpg",
  },
  {
    year: "2026",
    title: { en: "Today", ru: "Сегодня" },
    text: {
      en: "Two models in two colours — four variants in total.",
      ru: "Две модели в двух цветах — четыре варианта.",
    },
    image: "/images/collection/fermo-derby-moro/05.jpg",
  },
];

export const values = [
  {
    title: { en: "One clear idea", ru: "Одна ясная идея" },
    text: {
      en: "Classic shoes should look right and stay comfortable after eight hours. Everything else is secondary.",
      ru: "Классические туфли должны хорошо выглядеть и оставаться удобными через восемь часов. Остальное вторично.",
    },
  },
  {
    title: { en: "Comfort inside", ru: "Комфорт внутри" },
    text: {
      en: "ComfortForma, Ammortizzo, warm lining, grippy soles — invisible from the outside, noticeable by evening.",
      ru: "ComfortForma, Ammortizzo, тёплая подкладка, цепкая подошва — снаружи не видно, к вечеру заметно.",
    },
  },
  {
    title: { en: "A focused collection", ru: "Сдержанная коллекция" },
    text: {
      en: "Two silhouettes, four variants — each one refined over time.",
      ru: "Два силуэта, четыре варианта — и каждый мы дорабатываем со временем.",
    },
  },
];

export type Technology = {
  id: string;
  name: string;
  title: Loc;
  text: Loc;
  stat: Loc;
  statLabel: Loc;
};

export const technologies: Technology[] = [
  {
    id: "ammortizzo",
    name: "Ammortizzo",
    title: { en: "Cushioning", ru: "Амортизация" },
    text: {
      en: "An insert in the heel softens each step and reduces the load on the joints.",
      ru: "Вставка в каблуке смягчает шаг и снижает нагрузку на суставы.",
    },
    stat: { en: "2018", ru: "2018" },
    statLabel: { en: "year introduced", ru: "год внедрения" },
  },
  {
    id: "comfortforma",
    name: "ComfortForma",
    title: { en: "Comfortable last", ru: "Удобная колодка" },
    text: {
      en: "Room for the toes and a secure heel — a formal silhouette with an everyday fit.",
      ru: "Свободно пальцам, плотно в пятке — строгий силуэт с повседневной посадкой.",
    },
    stat: { en: "2018", ru: "2018" },
    statLabel: { en: "year introduced", ru: "год внедрения" },
  },
  {
    id: "lining",
    name: "Pelliccia",
    title: { en: "Fur lining", ru: "Меховая подкладка" },
    text: {
      en: "A soft, warm lining that keeps feet comfortable in the cold months.",
      ru: "Мягкая тёплая подкладка, в которой комфортно в холодное время года.",
    },
    stat: { en: "Warm", ru: "Тепло" },
    statLabel: { en: "inside", ru: "внутри" },
  },
  {
    id: "grip",
    name: "Thermo-Grip",
    title: { en: "Treaded sole", ru: "Протекторная подошва" },
    text: {
      en: "A rubber and TPE sole that grips on wet and cold surfaces.",
      ru: "Подошва из резины и ТЭП, которая держит на мокрой и холодной поверхности.",
    },
    stat: { en: "All", ru: "Все" },
    statLabel: { en: "seasons", ru: "сезоны" },
  },
  {
    id: "fit",
    name: "Tenuta",
    title: { en: "Secure fit", ru: "Надёжная посадка" },
    text: {
      en: "A firm heel counter and balanced lacing keep the foot in place all day.",
      ru: "Плотный задник и продуманная шнуровка держат стопу весь день.",
    },
    stat: { en: "All day", ru: "Весь день" },
    statLabel: { en: "stable fit", ru: "устойчивая посадка" },
  },
  {
    id: "leather",
    name: "Pelle",
    title: { en: "Leather insole", ru: "Кожаная стелька" },
    text: {
      en: "A leather insole that breathes and adapts to the foot over time.",
      ru: "Кожаная стелька дышит и со временем принимает форму стопы.",
    },
    stat: { en: "100%", ru: "100%" },
    statLabel: { en: "leather", ru: "кожа" },
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
    title: { en: "Last & pattern", ru: "Колодка и лекала" },
    text: {
      en: "Every model starts with a last. Patterns are cut along the grain of the leather.",
      ru: "Каждая модель начинается с колодки. Лекала раскладывают по направлению волокон кожи.",
    },
    image: "/images/atelier/pattern.jpg",
    duration: { en: "Design", ru: "Дизайн" },
  },
  {
    n: "02",
    title: { en: "Leather", ru: "Кожа" },
    text: {
      en: "Leather is selected for density and finish.",
      ru: "Кожу отбирают по плотности и качеству выделки.",
    },
    image: "/images/atelier/leather-roll.jpg",
    duration: { en: "Selection", ru: "Отбор" },
  },
  {
    n: "03",
    title: { en: "Cutting", ru: "Раскрой" },
    text: {
      en: "The upper parts are cut and prepared for stitching — clean edges, even pieces.",
      ru: "Детали верха кроят и готовят к сборке — чистые края, ровные детали.",
    },
    image: "/images/atelier/cutting.jpg",
    duration: { en: "Cutting", ru: "Раскрой" },
  },
  {
    n: "04",
    title: { en: "Stitching", ru: "Сборка верха" },
    text: {
      en: "The pieces are stitched into the upper with dense, even seams.",
      ru: "Детали сшивают в заготовку верха плотным ровным швом.",
    },
    image: "/images/atelier/stitching.jpg",
    duration: { en: "Stitching", ru: "Строчка" },
  },
  {
    n: "05",
    title: { en: "Lasting", ru: "Затяжка" },
    text: {
      en: "The upper is pulled over the last so the leather takes its shape, then left to rest before soling.",
      ru: "Верх затягивают на колодку, чтобы кожа приняла форму, и дают ей отлежаться перед прикреплением подошвы.",
    },
    image: "/images/collection/urbino-oxford-moro/07.jpg",
    duration: { en: "Rest", ru: "Выдержка" },
  },
  {
    n: "06",
    title: { en: "Sole & heel", ru: "Подошва и каблук" },
    text: {
      en: "The sole and heel are attached, with the Ammortizzo insert inside the heel.",
      ru: "Прикрепляют подошву и каблук со вставкой Ammortizzo внутри.",
    },
    image: "/images/atelier/sanding.jpg",
    duration: { en: "Build", ru: "Сборка" },
  },
  {
    n: "07",
    title: { en: "Finishing", ru: "Отделка" },
    text: {
      en: "Edges, polishing and a final check.",
      ru: "Обработка урезов, полировка и финальная проверка.",
    },
    image: "/images/atelier/knife.jpg",
    duration: { en: "Finish", ru: "Отделка" },
  },
  {
    n: "08",
    title: { en: "Packing", ru: "Упаковка" },
    text: {
      en: "Each pair is inspected and packed.",
      ru: "Каждую пару проверяют и упаковывают.",
    },
    image: "/images/collection/fermo-derby-nero/07.jpg",
    duration: { en: "Packing", ru: "Упаковка" },
  },
];

export const leathers = [
  {
    name: { en: "Smooth leather", ru: "Гладкая кожа" },
    origin: { en: "Polished finish", ru: "Полированная отделка" },
    text: {
      en: "Dense leather for polished toes and clean formal lines.",
      ru: "Плотная кожа для полированных мысков и строгих линий.",
    },
    image: "/images/collection/fermo-derby-nero/03.jpg",
  },
  {
    name: { en: "Textured leather", ru: "Фактурная кожа" },
    origin: { en: "Grain and croc emboss", ru: "Зернистая и под крокодила" },
    text: {
      en: "Grain on the Fermo, croc embossing on the Urbino — texture that hides small scuffs.",
      ru: "Зернистая фактура у Fermo и тиснение под крокодила у Urbino — фактура скрывает мелкие потёртости.",
    },
    image: "/images/collection/urbino-oxford-nero/03.jpg",
  },
  {
    name: { en: "Fur lining", ru: "Меховая подкладка" },
    origin: { en: "Both models", ru: "Обе модели" },
    text: {
      en: "A soft, warm lining for the cold months.",
      ru: "Мягкая тёплая подкладка для холодного времени года.",
    },
    image: "/images/collection/urbino-oxford-moro/12.jpg",
  },
  {
    name: { en: "Rubber & TPE", ru: "Резина и ТЭП" },
    origin: { en: "Sole", ru: "Подошва" },
    text: {
      en: "A durable sole with good grip on wet streets.",
      ru: "Износостойкая подошва с хорошим сцеплением на мокрой улице.",
    },
    image: "/images/collection/urbino-oxford-moro/11.jpg",
  },
];
