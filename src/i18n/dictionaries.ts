export type Locale = "en" | "ru";
export type Loc = { en: string; ru: string };

export type Dictionary = {
  nav: {
    collection: string;
    heritage: string;
    atelier: string;
    menu: string;
    close: string;
    homeAria: string;
    themeLight: string;
    themeDark: string;
  };
  brand: { tagline: string; motto: string };
  hero: {
    est: string;
    place: string;
    handmade: string;
    kicker: string;
    lead: string;
    cta: string;
    story: string;
    scroll: string;
    leather: string;
    rotate: string;
    titleSr: string;
  };
  manifesto: {
    eyebrow: string;
    aside: string;
    text: string;
    sign: string;
    link: string;
    placeEyebrow: string;
    placeLead: string;
  };
  chapters: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    hint: string;
    chapter: string;
    end: string;
    aria: string;
  };
  signature: {
    eyebrow: string;
    title: string;
    since: string;
    cta: string;
    details: [string, string, string];
  };
  anatomy: {
    aria: string;
    eyebrow: string;
    eyebrowSide: string;
    title: string;
    titleAccent: string;
    steps: {
      label: string;
      title: string;
      text: string;
      stat: string;
    }[];
  };
  collection: {
    eyebrow: string;
    title: string;
    intro: string;
    viewAll: string;
  };
  numbers: {
    eyebrow: string;
    title: string;
    items: { value: number; suffix: string; label: string }[];
  };
  tech: {
    eyebrow: string;
    title: string;
    intro: string;
    tag: string;
  };
  mosaic: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    cta: string;
  };
  quote: { text: string; role: string };
  common: {
    viewAll: string;
    allShoes: string;
    ourStory: string;
    backTop: string;
  };
  footer: {
    placeEyebrow: string;
    placeTitle: string;
    placeBody: string;
    collection: string;
    house: string;
    place: string;
    since: string;
    modelA: string;
    modelB: string;
    modelC: string;
    heritage: string;
    atelier: string;
    copy: string;
  };
  heritage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string[];
    modelsEyebrow: string;
    modelsTitle: string;
    modelsLead: string;
    modelsA: string;
    modelsB: string;
    modelsC: string;
    modelsColours: string;
    timeEyebrow: string;
    timeTitle: string;
    timeIntro: string;
    valuesEyebrow: string;
    valuesTitle: string;
    next: string;
    nextEyebrow: string;
  };
  atelierPage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string[];
    ruleEyebrow: string;
    ruleTitle: string;
    ruleLead: string;
    stepsEyebrow: string;
    stepsTitle: string;
    stepsIntro: string;
    leatherEyebrow: string;
    leatherTitle: string;
    leatherIntro: string;
    promiseEyebrow: string;
    promiseTitle: string;
    promiseLead: string;
    next: string;
    nextEyebrow: string;
  };
  collectionPage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string[];
    showcaseEyebrow: string;
    showcaseCta: string;
    showcasePlace: string;
    showcaseHandmade: string;
    careEyebrow: string;
    careTitle: string;
    care: { title: string; text: string }[];
    filterAll: string;
    filterNote: string;
    filterShowing: string;
    editorial: string;
    editorialBy: string;
  };
  productUi: {
    collection: string;
    about: string;
    colour: string;
    details: string;
    care: string;
    careBody: string;
    storyEyebrow: string;
    colours: string;
  };
  journalPage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string[];
    nextEyebrow: string;
    next: string;
    back: string;
  };
  preloader: { motto: string };
  marquee: string[];
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      collection: "Collection",
      heritage: "Story",
      atelier: "Workshop",
      menu: "Menu",
      close: "Close",
      homeAria: "Andriano Cherini — home",
      themeLight: "Light theme",
      themeDark: "Dark theme",
    },
    brand: { tagline: "Fermo · 2014", motto: "Forma e comfort" },
    hero: {
      est: "Since 2014",
      place: "Fermo · Marche · Italia",
      handmade: "Handcrafted",
      kicker: "Classico Derby",
      lead: "Classic men's shoes, made by hand in Italy.",
      cta: "Explore the collection",
      story: "Our story",
      scroll: "Scroll",
      leather: "Choose the leather",
      rotate: "Rotate",
      titleSr: "Andriano Cherini — men's dress shoes",
    },
    manifesto: {
      eyebrow: "Why we started",
      aside: "Andriano Cherini founded the brand in 2014 after years in the footwear industry.",
      text: "One clear task: *classic shoes with form and comfort together.* Clean lines, careful finishing and considered comfort inside.",
      sign: "Andriano Cherini",
      link: "Read the story",
      placeEyebrow: "Le Marche, Italia",
      placeLead: "The brand comes from the Marche, Italy's historic footwear region between the Apennines and the Adriatic.",
    },
    chapters: {
      eyebrow: "The story",
      title: "How Cherini",
      titleAccent: "began.",
      intro: "From 2014 to today — one idea: form and comfort.",
      hint: "Scroll to continue",
      chapter: "Chapter",
      end: "The idea has not changed.",
      aria: "Brand story",
    },
    signature: {
      eyebrow: "Signature model",
      title: "The Classico\n*Derby.*",
      since: "Since",
      cta: "View the Classico",
      details: ["Fur lining", "Grained panels", "Treaded sole"],
    },
    anatomy: {
      aria: "Classico Derby details",
      eyebrow: "Details",
      eyebrowSide: "The construction",
      title: "Four details",
      titleAccent: "up close.",
      steps: [
        {
          label: "The cap",
          title: "Polished leather",
          text: "A clean cap toe with a hand-finished shine.",
          stat: "Hand finish",
        },
        {
          label: "The lining",
          title: "Fur lining",
          text: "A soft, warm lining for the cold months.",
          stat: "Warm inside",
        },
        {
          label: "The last",
          title: "ComfortForma",
          text: "Room in the forefoot and a secure heel — a formal shape for everyday wear.",
          stat: "Since 2018",
        },
        {
          label: "The heel",
          title: "Ammortizzo",
          text: "A cushioning insert in the heel softens each step.",
          stat: "Softer step",
        },
      ],
    },
    collection: {
      eyebrow: "Collection 2026",
      title: "Classic,\n*for every day.*",
      intro: "Derbies and Oxfords — Classico, Caiman, Apron — with finishes described on each model.",
      viewAll: "View the collection",
    },
    numbers: {
      eyebrow: "In short",
      title: "A small brand.\n*Clear* choices.",
      items: [
        { value: 2014, suffix: "", label: "year the brand was founded" },
        { value: 6, suffix: "", label: "comfort technologies" },
        { value: 12, suffix: "", label: "years of one idea" },
        { value: 1, suffix: "", label: "workshop in Fermo" },
      ],
    },
    tech: {
      eyebrow: "Technology",
      title: "Comfort inside\na *classic.*",
      intro: "Six details developed since 2014. Invisible from the outside, clear when you walk.",
      tag: "Ammortizzo · cushioned heel",
    },
    mosaic: {
      eyebrow: "The workshop",
      title: "How the\n*collection* takes shape.",
      lead: "Patterns, lasts, leather and careful finishing.",
      body: "We refine every model we make — and leave room for new collections when they are ready.",
      cta: "How we work",
    },
    quote: {
      text: "A good shoe is one you forget about while you walk.",
      role: "Founder",
    },
    common: {
      viewAll: "View the collection",
      allShoes: "All shoes",
      ourStory: "Our story",
      backTop: "Back to top ↑",
    },
    footer: {
      placeEyebrow: "Fermo · Italia",
      placeTitle: "A brand from\nthe *Marche.*",
      placeBody: "Andriano Cherini has been making classic men's shoes in Fermo since 2014.",
      collection: "Collection",
      house: "Brand",
      place: "Origin",
      since: "Since 2014",
      modelA: "Classico",
      modelB: "Caiman",
      modelC: "Apron",
      heritage: "Story",
      atelier: "Workshop",
      copy: "© 2026 Andriano Cherini · Fermo since 2014",
    },
    heritage: {
      eyebrow: "Story · Since 2014",
      title: "One idea.\n*Form and comfort.*",
      intro:
        "Andriano Cherini founded the brand in 2014 in the Marche. The aim: classic shoes with form and comfort together.",
      meta: ["Founded 2014", "Fermo, Marche", "Forma e comfort"],
      modelsEyebrow: "The collection",
      modelsTitle: "The line\n*today.*",
      modelsLead:
        "Classico, Caiman and Apron — derby and Oxford silhouettes. New collections join as they are ready.",
      modelsA: "Cap-toe derby with grained panels and a warm lining.",
      modelsB: "Closed-laced Oxford with a marble grain — finishes on the model page.",
      modelsC: "Apron-toe derby with burnished natural leather.",
      modelsColours: "Finishes vary by model — colours are added as the line grows.",
      timeEyebrow: "Timeline",
      timeTitle: "From idea\nto *collection.*",
      timeIntro: "Key dates in the brand's history.",
      valuesEyebrow: "Principles",
      valuesTitle: "Three simple\n*rules.*",
      next: "Inside the workshop",
      nextEyebrow: "Next",
    },
    atelierPage: {
      eyebrow: "Workshop · Fermo",
      title: "How a pair\nis *made.*",
      intro: "Patterns, lasting, finishing and the comfort details inside every pair.",
      meta: ["Process", "Comfort", "Finishing"],
      ruleEyebrow: "Approach",
      ruleTitle: "A focused line.\n*No compromise.*",
      ruleLead: "We develop lasts and models as one line and refine them over time. Classic outside, comfortable inside.",
      stepsEyebrow: "Process",
      stepsTitle: "From leather\nto *finish.*",
      stepsIntro: "The main stages behind every pair.",
      leatherEyebrow: "Materials",
      leatherTitle: "Materials\nwe *choose.*",
      leatherIntro: "High-quality natural leather, warm lining, soles chosen for grip and durability.",
      promiseEyebrow: "Care",
      promiseTitle: "Made to\n*walk in.*",
      promiseLead: "With regular care the leather keeps its look for years.",
      next: "The collection",
      nextEyebrow: "Next",
    },
    collectionPage: {
      eyebrow: "Collection · 2026",
      title: "One idea.\nSeveral *lines.*",
      intro: "Classico, Caiman and Apron — classic lines, warm lining, high-quality natural leather. More as they arrive.",
      meta: ["Classico", "Caiman", "Apron"],
      showcaseEyebrow: "Collection / Classic",
      showcaseCta: "View the model",
      showcasePlace: "Fermo Marche · Italia",
      showcaseHandmade: "Handcrafted / Dal 2014",
      careEyebrow: "Good to know",
      careTitle: "Materials\nand *care.*",
      care: [
        { title: "Leather", text: "High-quality natural leather — smooth or textured. Finishes are named on each model." },
        { title: "Fit", text: "The ComfortForma last leaves room for the toes and holds the heel — a formal silhouette with an everyday fit." },
        { title: "Care", text: "Brush after wear, use a cream in the shoe's colour, keep shoe trees inside between wears." },
      ],
      filterAll: "All shoes",
      filterNote: "Sizes EU 39–46",
      filterShowing: "Showing",
      editorial: "Form outside. Comfort inside.",
      editorialBy: "Andriano Cherini · Fermo",
    },
    productUi: {
      collection: "Collection",
      about: "About the product",
      colour: "Colour",
      details: "Details",
      care: "Care",
      careBody:
        "Brush after wear and let the pair rest for a day. Use a neutral cream or one in the shoe's colour, keep shoe trees inside, dry away from radiators.",
      storyEyebrow: "The model",
      colours: "colours",
    },
    journalPage: {
      eyebrow: "Notes",
      title: "Short notes\nfrom the *brand.*",
      intro: "The brand's beginnings, its comfort technologies and the Classico Derby.",
      meta: ["Since 2014", "Fermo", "Forma e comfort"],
      nextEyebrow: "Next",
      next: "The collection",
      back: "← Notes",
    },
    preloader: { motto: "Forma e comfort" },
    marquee: ["Forma e comfort", "Fermo · 2014", "Ammortizzo", "ComfortForma"],
  },
  ru: {
    nav: {
      collection: "Коллекция",
      heritage: "История",
      atelier: "Мастерская",
      menu: "Меню",
      close: "Закрыть",
      homeAria: "Andriano Cherini — на главную",
      themeLight: "Светлая тема",
      themeDark: "Тёмная тема",
    },
    brand: { tagline: "Фермо · 2014", motto: "Forma e comfort" },
    hero: {
      est: "С 2014",
      place: "Fermo · Marche · Italia",
      handmade: "Ручная работа",
      kicker: "Classico Derby",
      lead: "Классические мужские туфли, созданные вручную в Италии.",
      cta: "Открыть коллекцию",
      story: "История бренда",
      scroll: "Листайте",
      leather: "Выберите кожу",
      rotate: "Вращать",
      titleSr: "Andriano Cherini — классическая мужская обувь",
    },
    manifesto: {
      eyebrow: "С чего всё началось",
      aside: "Андриано Черини основал бренд в 2014 году после нескольких лет работы в обувной индустрии.",
      text: "Одна ясная задача: *классические туфли, где форма и комфорт идут вместе.* Чистые линии, аккуратная отделка и продуманный комфорт внутри.",
      sign: "Андриано Черини",
      link: "Читать историю",
      placeEyebrow: "Марке, Италия",
      placeLead: "Бренд родом из Марке — исторического обувного региона Италии между Апеннинами и Адриатикой.",
    },
    chapters: {
      eyebrow: "История",
      title: "Как появился",
      titleAccent: "Cherini.",
      intro: "С 2014 года и до сегодня — одна идея: форма и комфорт.",
      hint: "Листайте дальше",
      chapter: "Глава",
      end: "Идея не изменилась.",
      aria: "История бренда",
    },
    signature: {
      eyebrow: "Фирменная модель",
      title: "Classico\n*Derby.*",
      since: "С",
      cta: "Открыть Classico",
      details: ["Меховая подкладка", "Зернистые панели", "Протекторная подошва"],
    },
    anatomy: {
      aria: "Детали Classico Derby",
      eyebrow: "Детали",
      eyebrowSide: "Конструкция",
      title: "Четыре детали",
      titleAccent: "крупным планом.",
      steps: [
        {
          label: "Мысок",
          title: "Полированная кожа",
          text: "Аккуратный мысок с блеском, доведённым вручную.",
          stat: "Ручная полировка",
        },
        {
          label: "Подкладка",
          title: "Меховая подкладка",
          text: "Мягкая и тёплая подкладка для холодного сезона.",
          stat: "Тепло внутри",
        },
        {
          label: "Колодка",
          title: "ComfortForma",
          text: "Свободно в носочной части, плотно в пятке — строгая форма для каждого дня.",
          stat: "С 2018",
        },
        {
          label: "Каблук",
          title: "Ammortizzo",
          text: "Амортизирующая вставка в каблуке смягчает каждый шаг.",
          stat: "Мягкий шаг",
        },
      ],
    },
    collection: {
      eyebrow: "Коллекция 2026",
      title: "Классика\n*на каждый день.*",
      intro: "Дерби и оксфорды — Classico, Caiman, Apron; отделки описаны на страницах моделей.",
      viewAll: "Вся коллекция",
    },
    numbers: {
      eyebrow: "Коротко",
      title: "Небольшой бренд.\n*Понятные* решения.",
      items: [
        { value: 2014, suffix: "", label: "год основания бренда" },
        { value: 6, suffix: "", label: "технологий комфорта" },
        { value: 12, suffix: "", label: "лет одной идеи" },
        { value: 1, suffix: "", label: "мастерская в Фермо" },
      ],
    },
    tech: {
      eyebrow: "Технологии",
      title: "Комфорт внутри\n*классики.*",
      intro: "Шесть решений, которые мы развиваем с 2014 года. Снаружи их не видно — они заметны в ходьбе.",
      tag: "Ammortizzo · амортизирующий каблук",
    },
    mosaic: {
      eyebrow: "Мастерская",
      title: "Как складывается\n*коллекция.*",
      lead: "Лекала, колодки, кожа и аккуратная отделка.",
      body: "Мы дорабатываем каждую модель — и оставляем место для новых коллекций, когда они будут готовы.",
      cta: "Как мы работаем",
    },
    quote: {
      text: "Хорошие туфли — те, о которых забываешь, пока в них ходишь.",
      role: "Основатель",
    },
    common: {
      viewAll: "Вся коллекция",
      allShoes: "Все модели",
      ourStory: "История",
      backTop: "Наверх ↑",
    },
    footer: {
      placeEyebrow: "Фермо · Италия",
      placeTitle: "Бренд из\n*Марке.*",
      placeBody: "Andriano Cherini делает классические мужские туфли в Фермо с 2014 года.",
      collection: "Коллекция",
      house: "Бренд",
      place: "Происхождение",
      since: "С 2014",
      modelA: "Classico",
      modelB: "Caiman",
      modelC: "Apron",
      heritage: "История",
      atelier: "Мастерская",
      copy: "© 2026 Andriano Cherini · Фермо с 2014",
    },
    heritage: {
      eyebrow: "История · С 2014",
      title: "Одна идея.\n*Форма и комфорт.*",
      intro:
        "Андриано Черини основал бренд в 2014 году в Марке. Цель — классические туфли, где форма и комфорт идут вместе.",
      meta: ["Основан в 2014", "Фермо, Марке", "Forma e comfort"],
      modelsEyebrow: "Коллекция",
      modelsTitle: "Линия\n*сегодня.*",
      modelsLead:
        "Classico, Caiman и Apron — дерби и оксфорды. Новые коллекции появляются по мере готовности.",
      modelsA: "Дерби с мыском, зернистыми боками и тёплой подкладкой.",
      modelsB: "Оксфорд на закрытой шнуровке с мраморной фактурой — отделки на странице модели.",
      modelsC: "Дерби с мыском-фартуком из патинированной натуральной кожи.",
      modelsColours: "Отделки зависят от модели — цвета добавляем по мере пополнения линии.",
      timeEyebrow: "Хроника",
      timeTitle: "От идеи\nк *коллекции.*",
      timeIntro: "Ключевые даты в истории бренда.",
      valuesEyebrow: "Принципы",
      valuesTitle: "Три простых\n*правила.*",
      next: "В мастерскую",
      nextEyebrow: "Дальше",
    },
    atelierPage: {
      eyebrow: "Мастерская · Фермо",
      title: "Как делают\n*пару.*",
      intro: "Лекала, затяжка, отделка и решения для комфорта внутри каждой пары.",
      meta: ["Процесс", "Комфорт", "Отделка"],
      ruleEyebrow: "Подход",
      ruleTitle: "Сдержанная линия.\n*Без компромиссов.*",
      ruleLead: "Мы развиваем колодки и модели как единую линию и дорабатываем их со временем. Снаружи классика, внутри комфорт.",
      stepsEyebrow: "Процесс",
      stepsTitle: "От кожи\nк *отделке.*",
      stepsIntro: "Основные этапы работы над каждой парой.",
      leatherEyebrow: "Материалы",
      leatherTitle: "Материалы,\nкоторые мы *выбираем.*",
      leatherIntro: "Высококачественная натуральная кожа, тёплая подкладка, подошвы с хорошим сцеплением и долгим сроком службы.",
      promiseEyebrow: "Уход",
      promiseTitle: "Сделаны,\nчтобы в них *ходить.*",
      promiseLead: "При регулярном уходе кожа сохраняет вид годами.",
      next: "Коллекция",
      nextEyebrow: "Дальше",
    },
    collectionPage: {
      eyebrow: "Коллекция · 2026",
      title: "Одна идея.\nНесколько *линий.*",
      intro: "Classico, Caiman и Apron — классические линии, тёплая подкладка, высококачественная натуральная кожа. Дальше — по мере появления.",
      meta: ["Classico", "Caiman", "Apron"],
      showcaseEyebrow: "Коллекция / Classic",
      showcaseCta: "Смотреть модель",
      showcasePlace: "Fermo Marche · Italia",
      showcaseHandmade: "Handcrafted / Dal 2014",
      careEyebrow: "Полезно знать",
      careTitle: "Материалы\nи *уход.*",
      care: [
        { title: "Кожа", text: "Высококачественная натуральная кожа — гладкая или фактурная. Отделки названы на страницах моделей." },
        { title: "Посадка", text: "Колодка ComfortForma даёт свободу пальцам и держит пятку — строгий силуэт с повседневной посадкой." },
        { title: "Уход", text: "Чистите щёткой после носки, используйте крем в цвет обуви, храните с колодками." },
      ],
      filterAll: "Все модели",
      filterNote: "Размеры EU 39–46",
      filterShowing: "Показано",
      editorial: "Снаружи форма. Внутри комфорт.",
      editorialBy: "Andriano Cherini · Фермо",
    },
    productUi: {
      collection: "Коллекция",
      about: "О модели",
      colour: "Цвет",
      details: "Детали",
      care: "Уход",
      careBody:
        "Чистите щёткой после носки и давайте паре отдохнуть день. Используйте нейтральный крем или крем в цвет обуви, храните с колодками, сушите вдали от батарей.",
      storyEyebrow: "О модели",
      colours: "цвета",
    },
    journalPage: {
      eyebrow: "Заметки",
      title: "Короткие заметки\nот *бренда.*",
      intro: "О том, как появился бренд, о технологиях комфорта и о модели Classico.",
      meta: ["С 2014", "Фермо", "Forma e comfort"],
      nextEyebrow: "Дальше",
      next: "Коллекция",
      back: "← Заметки",
    },
    preloader: { motto: "Forma e comfort" },
    marquee: ["Forma e comfort", "Фермо · 2014", "Ammortizzo", "ComfortForma"],
  },
};
