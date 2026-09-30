export type Locale = "en" | "ru";
export type Loc = { en: string; ru: string };

export type Dictionary = {
  nav: {
    collection: string;
    heritage: string;
    atelier: string;
    contact: string;
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
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
  };
  common: {
    viewAll: string;
    allShoes: string;
    ourStory: string;
    subscribe: string;
    email: string;
    backTop: string;
    privacy: string;
    terms: string;
    instagram: string;
  };
  footer: {
    letter: string;
    letterTitle: string;
    letterBody: string;
    thanks: string;
    collection: string;
    house: string;
    bottega: string;
    fermoDerby: string;
    oxfords: string;
    heritage: string;
    atelier: string;
    contact: string;
    copy: string;
  };
  heritage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string[];
    crestEyebrow: string;
    crestTitle: string;
    crestLead: string;
    crestA: string;
    crestName: string;
    crestMotto: string;
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
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string[];
    whereEyebrow: string;
    whereTitle: string;
    whereIntro: string;
    writeEyebrow: string;
    writeTitle: string;
    writeBody: string;
    name: string;
    message: string;
    send: string;
    thanks: string;
    faqEyebrow: string;
    faqTitle: string;
  };
  collectionPage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string[];
    featureEyebrow: string;
    featureTitle: string;
    featureLead: string;
    featureCta: string;
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
    ozon: string;
    inquire: string;
    inquireHint: string;
    details: string;
    care: string;
    careBody: string;
    delivery: string;
    deliveryBody: string;
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
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      homeAria: "Andriano Cherini — home",
      themeLight: "Light theme",
      themeDark: "Dark theme",
    },
    brand: { tagline: "Fermo · 2014", motto: "Forma e comfort" },
    hero: {
      est: "Est. 2014",
      place: "Fermo · Marche · Italia",
      handmade: "Handmade",
      kicker: "The Fermo Derby · Inverno 2026",
      lead: "Classic men's shoes with modern cushioning — built for long workdays.",
      cta: "Discover the Fermo",
      story: "Our story",
      scroll: "Scroll",
      leather: "Choose the leather",
      rotate: "Rotate",
      titleSr: "Andriano Cherini — men's dress shoes",
    },
    manifesto: {
      eyebrow: "Why we started",
      aside: "Andriano Cherini founded the brand in 2014 after years in mass-market footwear.",
      text: "The brief was simple: *formal shoes that stay comfortable until evening.* Classic lines, careful finishing, and technology you feel — not a museum story, a working brand from Fermo.",
      sign: "Andriano Cherini",
      link: "Read the story",
      placeEyebrow: "Le Marche, Italia",
      placeLead: "We work in the Marche — one of Europe's densest footwear regions — between the mountains and the Adriatic.",
    },
    chapters: {
      eyebrow: "The story",
      title: "How Cherini",
      titleAccent: "began.",
      intro: "From a small start in 2014 to a focused collection of classic shoes — one clear line: form and comfort.",
      hint: "Scroll to continue",
      chapter: "Chapter",
      end: "…and we keep refining the same idea today.",
      aria: "Brand story",
    },
    signature: {
      eyebrow: "Signature model",
      title: "The Fermo\n*Derby.*",
      since: "Since",
      cta: "View the Fermo",
      details: ["Merino shearling lining", "Ammortizzo cushioned heel", "Thermo-grip sole"],
    },
    anatomy: {
      aria: "Anatomy of the Fermo Derby",
      eyebrow: "Details",
      eyebrowSide: "Inside the shoe",
      title: "Four details you feel",
      titleAccent: "before you see.",
      steps: [
        {
          label: "The cap",
          title: "Polished box calf",
          text: "A clean cap toe finished by hand — the face of every Fermo.",
          stat: "Mirror finish",
        },
        {
          label: "The lining",
          title: "Natural shearling",
          text: "Warm merino lining that breathes — built for cold streets and heated offices.",
          stat: "14 mm pile",
        },
        {
          label: "The last",
          title: "ComfortForma",
          text: "Room in the forefoot, a secure heel — a formal shape with everyday comfort.",
          stat: "Since 2018",
        },
        {
          label: "The heel",
          title: "Ammortizzo",
          text: "A cushioning insert in the heel softens each step and eases the joints.",
          stat: "−32% impact",
        },
      ],
    },
    collection: {
      eyebrow: "Collection 2026",
      title: "Shoes for\n*good days.*",
      intro: "Two models in two colours — a cap-toe derby and a croc-embossed Oxford. Classic lines, warm lining, comfort until evening.",
      viewAll: "View the collection",
    },
    numbers: {
      eyebrow: "In short",
      title: "A small brand.\n*Clear* choices.",
      items: [
        { value: 2014, suffix: "", label: "year the brand was founded" },
        { value: 2, suffix: "", label: "models in the current collection" },
        { value: 32, suffix: "%", label: "less heel impact with Ammortizzo" },
        { value: 6, suffix: "", label: "core technologies in every pair" },
      ],
    },
    tech: {
      eyebrow: "Technology",
      title: "Comfort inside\na *classic.*",
      intro: "Six invisible details developed since 2014. You don't see them — you feel them after a long day.",
      tag: "Ammortizzo heel · less load on the joints",
    },
    mosaic: {
      eyebrow: "The workshop",
      title: "Where the\n*collection* is born.",
      lead: "A quiet workshop outside Fermo. Patterns, lasts, leather and careful finishing.",
      body: "We develop a clear collection, refine the lasts, and ship shoes built for real days — not for show.",
      cta: "See how we work",
    },
    quote: {
      text: "A shoe is finished only when its owner forgets he is wearing it.",
      role: "Founder · since 2014",
    },
    contact: {
      eyebrow: "Contact",
      title: "Questions about\nthe *collection?*",
      lead: "Write to us about sizes, shipping or a model you have in mind. We answer within two working days.",
      cta: "Get in touch",
    },
    common: {
      viewAll: "View the collection",
      allShoes: "All shoes",
      ourStory: "Our story",
      subscribe: "Subscribe",
      email: "Your email",
      backTop: "Back to top ↑",
      privacy: "Privacy",
      terms: "Terms",
      instagram: "Instagram",
    },
    footer: {
      letter: "Write to us",
      letterTitle: "A short note is enough.",
      letterBody: "Model, size, city — we reply by email within two working days.",
      thanks: "Thank you. Your mail client should open shortly.",
      collection: "Collection",
      house: "Brand",
      bottega: "Contact",
      fermoDerby: "The Fermo Derby",
      oxfords: "The Urbino Oxford",
      heritage: "Story",
      atelier: "Workshop",
      contact: "Contact",
      copy: "© 2026 Andriano Cherini · Fermo since 2014",
    },
    heritage: {
      eyebrow: "Story · Since 2014",
      title: "One idea.\n*Form and comfort.*",
      intro:
        "Andriano Cherini started the brand in 2014 in the Marche footwear region. The goal was never nostalgia — it was a classic shoe you can wear all day.",
      meta: ["Founded 2014", "Fermo, Marche", "Classic + comfort", "Forma e comfort"],
      crestEyebrow: "The crest · 2015",
      crestTitle: "Lion and\n*unicorn.*",
      crestLead:
        "A year after the first pairs shipped, the crest was drawn: the lion for craft, the unicorn for rare leather — and a short line beneath, Forma e comfort.",
      crestA: "Founder's initials on every last.",
      crestName: "The name as it first appeared on the insole.",
      crestMotto: "Form and comfort — still the brief.",
      timeEyebrow: "Timeline",
      timeTitle: "From idea\nto *collection.*",
      timeIntro: "A short timeline of how the brand grew — without myths, without a century of folklore.",
      valuesEyebrow: "What we keep",
      valuesTitle: "Three simple\n*rules.*",
      next: "Inside the workshop",
      nextEyebrow: "Next",
    },
    atelierPage: {
      eyebrow: "Workshop · Fermo",
      title: "How a pair\nis *made.*",
      intro: "Patterns, lasting, finishing and the comfort details that sit inside every Cherini.",
      meta: ["Clear process", "Comfort tech", "Classic finish"],
      ruleEyebrow: "Approach",
      ruleTitle: "Collection first.\n*Comfort always.*",
      ruleLead: "We develop lasts and models as a line — then produce carefully. Classic look outside, comfort inside.",
      stepsEyebrow: "Process",
      stepsTitle: "From hide\nto *polish.*",
      stepsIntro: "The main stages behind every pair in the collection.",
      leatherEyebrow: "Materials",
      leatherTitle: "Leather we\n*trust.*",
      leatherIntro: "Full-grain calf, shearling for winter models, soles chosen for grip and longevity.",
      promiseEyebrow: "Aftercare",
      promiseTitle: "Built to be\n*worn and kept.*",
      promiseLead: "Care notes ship with every pair. Ask us about resoling and seasonal maintenance.",
      next: "Contact us",
      nextEyebrow: "Next",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Write to\nthe *brand.*",
      intro: "Sizes, shipping, availability — we answer by email within two working days.",
      meta: ["atelier@andrianocherini.com", "Fermo · Italia"],
      whereEyebrow: "Presence",
      whereTitle: "Where to\n*find us.*",
      whereIntro: "Brand office, partner store and online orders — one catalogue, one story.",
      writeEyebrow: "Message",
      writeTitle: "Send a note.",
      writeBody: "Tell us your size, city and the model you are looking at.",
      name: "Name",
      message: "Message",
      send: "Send",
      thanks: "Thank you. Your mail client should open shortly.",
      faqEyebrow: "FAQ",
      faqTitle: "Quick answers.",
    },
    collectionPage: {
      eyebrow: "Collection · 2026",
      title: "Two models.\nOne *idea.*",
      intro: "A cap-toe derby and a croc-embossed Oxford, each in black and dark brown. Classic silhouettes, warm lining, all-day comfort.",
      meta: ["2 models", "2 colours", "Since 2014", "On Ozon"],
      featureEyebrow: "Signature · Since 2016",
      featureTitle: "The Fermo,\n*up close.*",
      featureLead: "Polished cap toe, soft fur lining, treaded sole — the derby the brand is known for.",
      featureCta: "View the Fermo",
      careEyebrow: "With every pair",
      careTitle: "Simple care.\n*Clear* answers.",
      care: [
        { title: "Where to buy", text: "The collection is sold on Ozon — delivery and returns follow Ozon's terms." },
        { title: "Sizes", text: "Not sure about the size? Write to us before you order — we answer by email." },
        { title: "Care", text: "Brush after wear, cream in tone, trees between wears. The leather will thank you." },
      ],
      filterAll: "All shoes",
      filterNote: "Sizes EU 39 – 46",
      filterShowing: "Showing",
      editorial: "Buy fewer shoes. Choose a brand that stays with them.",
      editorialBy: "Andriano Cherini, 2014",
    },
    productUi: {
      collection: "Collection",
      about: "About the product",
      colour: "Colour",
      ozon: "View on Ozon",
      inquire: "Ask about this model",
      inquireHint: "Our shoes are sold on Ozon. Questions about size or fit — write to us.",
      details: "Details",
      care: "Care",
      careBody:
        "Brush after wear and let the pair rest a day. Neutral or matching cream on the leather; use shoe trees and dry away from radiators.",
      delivery: "Where to buy",
      deliveryBody:
        "Andriano Cherini is available on Ozon — delivery, payment and returns follow Ozon's terms. This site is for information only.",
      storyEyebrow: "The model",
      colours: "colours",
    },
    journalPage: {
      eyebrow: "Notes",
      title: "Short notes\nfrom the *brand.*",
      intro: "How Cherini started, why comfort sits inside the classic, and what the Fermo Derby means.",
      meta: ["Since 2014", "Fermo", "Forma e comfort"],
      nextEyebrow: "Next",
      next: "Write to us",
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
      contact: "Контакты",
      menu: "Меню",
      close: "Закрыть",
      homeAria: "Andriano Cherini — на главную",
      themeLight: "Светлая тема",
      themeDark: "Тёмная тема",
    },
    brand: { tagline: "Фермо · 2014", motto: "Forma e comfort" },
    hero: {
      est: "С 2014",
      place: "Фермо · Марке · Италия",
      handmade: "Ручная отделка",
      kicker: "Fermo Derby · Inverno 2026",
      lead: "Классические мужские туфли с современной амортизацией — для длинного рабочего дня.",
      cta: "Смотреть Fermo",
      story: "История бренда",
      scroll: "Листайте",
      leather: "Выберите кожу",
      rotate: "Вращать",
      titleSr: "Andriano Cherini — классическая мужская обувь",
    },
    manifesto: {
      eyebrow: "Зачем мы начали",
      aside: "Андриано Керини основал бренд в 2014 году после работы в масс-маркете.",
      text: "Бриф был простой: *классические туфли, в которых удобно до вечера.* Чистый силуэт, аккуратная отделка и технологии, которые чувствуешь — не музейная легенда, а рабочий бренд из Фермо.",
      sign: "Андриано Керини",
      link: "Читать историю",
      placeEyebrow: "Марке, Италия",
      placeLead: "Мы работаем в Марке — одном из самых плотных обувных регионов Европы — между горами и Адриатикой.",
    },
    chapters: {
      eyebrow: "История",
      title: "Как появился",
      titleAccent: "Cherini.",
      intro: "От старта в 2014 до собранной коллекции классики — одна линия: форма и комфорт.",
      hint: "Листайте дальше",
      chapter: "Глава",
      end: "…и ту же идею мы уточняем до сих пор.",
      aria: "История бренда",
    },
    signature: {
      eyebrow: "Фирменная модель",
      title: "Fermo\n*Derby.*",
      since: "С",
      cta: "Открыть Fermo",
      details: ["Подкладка из овчины", "Каблук Ammortizzo", "Подошва Thermo-grip"],
    },
    anatomy: {
      aria: "Анатомия Fermo Derby",
      eyebrow: "Детали",
      eyebrowSide: "Внутри туфли",
      title: "Четыре детали,",
      titleAccent: "которые чувствуешь.",
      steps: [
        {
          label: "Мысок",
          title: "Полированный бокс-каф",
          text: "Чистый мысок с ручной отделкой — лицо каждой пары Fermo.",
          stat: "Зеркальный блеск",
        },
        {
          label: "Подкладка",
          title: "Натуральная овчина",
          text: "Тёплая дышащая мериносовая подкладка — для холода на улице и тепла в офисе.",
          stat: "Ворс 14 мм",
        },
        {
          label: "Колодка",
          title: "ComfortForma",
          text: "Свобода в носке, плотная пятка — классический силуэт с повседневным комфортом.",
          stat: "С 2018",
        },
        {
          label: "Каблук",
          title: "Ammortizzo",
          text: "Амортизирующая вставка смягчает шаг и снижает нагрузку на суставы.",
          stat: "−32% удар",
        },
      ],
    },
    collection: {
      eyebrow: "Коллекция 2026",
      title: "Туфли для\n*хороших дней.*",
      intro: "Две модели в двух цветах — дерби с мыском и оксфорд с тиснением под крокодила. Классические линии, тёплая подкладка, комфорт до вечера.",
      viewAll: "Вся коллекция",
    },
    numbers: {
      eyebrow: "Коротко",
      title: "Небольшой бренд.\n*Понятные* решения.",
      items: [
        { value: 2014, suffix: "", label: "год основания бренда" },
        { value: 2, suffix: "", label: "модели в актуальной коллекции" },
        { value: 32, suffix: "%", label: "меньше ударной нагрузки с Ammortizzo" },
        { value: 6, suffix: "", label: "ключевых технологий в паре" },
      ],
    },
    tech: {
      eyebrow: "Технологии",
      title: "Комфорт внутри\n*классики.*",
      intro: "Шесть незаметных решений с 2014 года. Их не видно — их чувствуешь в конце длинного дня.",
      tag: "Каблук Ammortizzo · меньше нагрузки на суставы",
    },
    mosaic: {
      eyebrow: "Мастерская",
      title: "Где рождается\n*коллекция.*",
      lead: "Тихая мастерская под Фермо. Лекала, колодки, кожа и аккуратная отделка.",
      body: "Мы собираем понятную коллекцию, уточняем колодки и отправляем туфли для реальных дней — без лишнего театра.",
      cta: "Как мы работаем",
    },
    quote: {
      text: "Ботинок готов только тогда, когда хозяин забывает, что он на нём.",
      role: "Основатель · с 2014",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Вопросы по\n*коллекции?*",
      lead: "Напишите про размер, доставку или модель. Отвечаем в течение двух рабочих дней.",
      cta: "Написать нам",
    },
    common: {
      viewAll: "Вся коллекция",
      allShoes: "Все модели",
      ourStory: "История",
      subscribe: "Подписаться",
      email: "Ваш email",
      backTop: "Наверх ↑",
      privacy: "Конфиденциальность",
      terms: "Условия",
      instagram: "Instagram",
    },
    footer: {
      letter: "Напишите нам",
      letterTitle: "Короткого письма достаточно.",
      letterBody: "Модель, размер, город — отвечаем по почте в течение двух рабочих дней.",
      thanks: "Спасибо. Сейчас должен открыться почтовый клиент.",
      collection: "Коллекция",
      house: "Бренд",
      bottega: "Контакты",
      fermoDerby: "Fermo Derby",
      oxfords: "Urbino Oxford",
      heritage: "История",
      atelier: "Мастерская",
      contact: "Контакты",
      copy: "© 2026 Andriano Cherini · Фермо с 2014",
    },
    heritage: {
      eyebrow: "История · С 2014",
      title: "Одна идея.\n*Форма и комфорт.*",
      intro:
        "Андриано Керини основал бренд в 2014 году в обувном регионе Марке. Цель была не ностальгия — а классическая туфля на весь день.",
      meta: ["Основан в 2014", "Фермо, Марке", "Классика + комфорт", "Forma e comfort"],
      crestEyebrow: "Герб · 2015",
      crestTitle: "Лев и\n*единорог.*",
      crestLead:
        "Через год после первых отгрузок появился герб: лев — ремесло, единорог — редкая кожа — и короткая строка Forma e comfort.",
      crestA: "Инициалы основателя на каждой колодке.",
      crestName: "Имя, как оно впервые легло на стельку.",
      crestMotto: "Форма и комфорт — бриф до сих пор.",
      timeEyebrow: "Хроника",
      timeTitle: "От идеи\nк *коллекции.*",
      timeIntro: "Короткая линия роста бренда — без мифов и «столетней» легенды.",
      valuesEyebrow: "Что держим",
      valuesTitle: "Три простых\n*правила.*",
      next: "В мастерскую",
      nextEyebrow: "Дальше",
    },
    atelierPage: {
      eyebrow: "Мастерская · Фермо",
      title: "Как делают\n*пару.*",
      intro: "Лекала, затяжка, отделка и комфортные решения внутри каждой модели Cherini.",
      meta: ["Понятный процесс", "Комфорт-технологии", "Классическая отделка"],
      ruleEyebrow: "Подход",
      ruleTitle: "Сначала коллекция.\n*Всегда комфорт.*",
      ruleLead: "Мы развиваем колодки и модели как линейку — и аккуратно производим. Снаружи классика, внутри комфорт.",
      stepsEyebrow: "Процесс",
      stepsTitle: "От кожи\nк *полировке.*",
      stepsIntro: "Основные этапы за каждой парой в коллекции.",
      leatherEyebrow: "Материалы",
      leatherTitle: "Кожа,\nкоторой *доверяем.*",
      leatherIntro: "Кали полный зерна, овчина для зимы, подошвы с упором на сцепление и срок службы.",
      promiseEyebrow: "После покупки",
      promiseTitle: "Сделаны,\nчтобы *носить.*",
      promiseLead: "С каждой парой — карточка по уходу. Пишите про перетяжку и сезонное обслуживание.",
      next: "Написать нам",
      nextEyebrow: "Дальше",
    },
    contactPage: {
      eyebrow: "Контакты",
      title: "Напишите\n*бренду.*",
      intro: "Размер, доставка, наличие — отвечаем по почте в течение двух рабочих дней.",
      meta: ["atelier@andrianocherini.com", "Фермо · Италия"],
      whereEyebrow: "Где мы",
      whereTitle: "Как нас\n*найти.*",
      whereIntro: "Офис бренда, партнёрский магазин и онлайн-заказы — один каталог, одна история.",
      writeEyebrow: "Сообщение",
      writeTitle: "Короткое письмо.",
      writeBody: "Укажите размер, город и модель, которая интересует.",
      name: "Имя",
      message: "Сообщение",
      send: "Отправить",
      thanks: "Спасибо. Сейчас должен открыться почтовый клиент.",
      faqEyebrow: "FAQ",
      faqTitle: "Короткие ответы.",
    },
    collectionPage: {
      eyebrow: "Коллекция · 2026",
      title: "Две модели.\nОдна *идея.*",
      intro: "Дерби с мыском и оксфорд с тиснением под крокодила — каждая в чёрном и тёмно-коричневом. Классический силуэт, тёплая подкладка, комфорт на весь день.",
      meta: ["2 модели", "2 цвета", "С 2014", "На Ozon"],
      featureEyebrow: "Фирменная · С 2016",
      featureTitle: "Fermo\n*вблизи.*",
      featureLead: "Полированный мысок, мягкая меховая подкладка, протекторная подошва — дерби, по которой узнают бренд.",
      featureCta: "Открыть Fermo",
      careEyebrow: "С каждой парой",
      careTitle: "Простой уход.\n*Понятные* ответы.",
      care: [
        { title: "Где купить", text: "Коллекция продаётся на Ozon — доставка и возврат по правилам Ozon." },
        { title: "Размер", text: "Сомневаетесь в размере? Напишите нам до заказа — ответим по почте." },
        { title: "Уход", text: "Щётка после носки, крем в тон, колодки между носками. Коже это нравится." },
      ],
      filterAll: "Все модели",
      filterNote: "Размеры EU 39 – 46",
      filterShowing: "Показано",
      editorial: "Покупайте меньше обуви. Выбирайте бренд, который остаётся с ней.",
      editorialBy: "Андриано Керини, 2014",
    },
    productUi: {
      collection: "Коллекция",
      about: "О товаре",
      colour: "Цвет",
      ozon: "Смотреть на Ozon",
      inquire: "Спросить об этой модели",
      inquireHint: "Наша обувь продаётся на Ozon. Вопросы по размеру и посадке — напишите нам.",
      details: "Детали",
      care: "Уход",
      careBody:
        "Чистите щёткой после носки и давайте паре отдохнуть день. Нейтральный или крем в тон; используйте колодки и сушите вдали от батарей.",
      delivery: "Где купить",
      deliveryBody:
        "Andriano Cherini продаётся на Ozon — доставка, оплата и возврат по правилам Ozon. Этот сайт носит информационный характер.",
      storyEyebrow: "О модели",
      colours: "цвета",
    },
    journalPage: {
      eyebrow: "Заметки",
      title: "Короткие заметки\nот *бренда.*",
      intro: "Как появился Cherini, почему комфорт внутри классики, и что значит Fermo Derby.",
      meta: ["С 2014", "Фермо", "Forma e comfort"],
      nextEyebrow: "Дальше",
      next: "Написать нам",
      back: "← Заметки",
    },
    preloader: { motto: "Forma e comfort" },
    marquee: ["Forma e comfort", "Фермо · 2014", "Ammortizzo", "ComfortForma"],
  },
};
