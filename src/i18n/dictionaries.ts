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
      est: "Since 2014",
      place: "Fermo · Marche · Italia",
      handmade: "Handcrafted",
      kicker: "Fermo Derby",
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
      text: "One task from the start: *classic shoes that stay comfortable all day.* Clean lines, careful finishing and considered comfort inside.",
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
      title: "The Fermo\n*Derby.*",
      since: "Since",
      cta: "View the Fermo",
      details: ["Fur lining", "Ammortizzo heel", "Treaded sole"],
    },
    anatomy: {
      aria: "Fermo Derby details",
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
      intro: "A cap-toe derby and a croc-embossed Oxford, each in black and dark brown.",
      viewAll: "View the collection",
    },
    numbers: {
      eyebrow: "In short",
      title: "A small brand.\n*Clear* choices.",
      items: [
        { value: 2014, suffix: "", label: "year the brand was founded" },
        { value: 2, suffix: "", label: "models in the collection" },
        { value: 2, suffix: "", label: "colours for each model" },
        { value: 6, suffix: "", label: "comfort technologies" },
      ],
    },
    tech: {
      eyebrow: "Technology",
      title: "Comfort inside\na *classic.*",
      intro: "Six details developed since 2014. Invisible from the outside, noticeable by the end of the day.",
      tag: "Ammortizzo · cushioned heel",
    },
    mosaic: {
      eyebrow: "The workshop",
      title: "How the\n*collection* takes shape.",
      lead: "Patterns, lasts, leather and careful finishing.",
      body: "We keep the collection small and refine every model rather than adding new ones.",
      cta: "How we work",
    },
    quote: {
      text: "A good shoe is one you forget you are wearing.",
      role: "Founder",
    },
    contact: {
      eyebrow: "Contact",
      title: "Questions about\nthe *collection?*",
      lead: "Write to us about sizes or a specific model. We reply within two working days.",
      cta: "Write to us",
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
      letterBody: "Model and size — we reply by email within two working days.",
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
        "Andriano Cherini founded the brand in 2014 in the Marche. The aim: a classic shoe you can wear all day.",
      meta: ["Founded 2014", "Fermo, Marche", "Forma e comfort"],
      crestEyebrow: "The crest · 2015",
      crestTitle: "Lion and\n*unicorn.*",
      crestLead:
        "The crest was drawn in 2015: the lion stands for craft, the unicorn for fine leather. The ribbon below reads Tradizioni secolari.",
      crestA: "The founder's initials.",
      crestName: "The name as it appears on the insole.",
      crestMotto: "Centuries-old traditions — a nod to the shoemaking heritage of the Marche.",
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
      ruleTitle: "Few models.\n*Done well.*",
      ruleLead: "We develop lasts and models as one line and refine them over time. Classic outside, comfortable inside.",
      stepsEyebrow: "Process",
      stepsTitle: "From leather\nto *finish.*",
      stepsIntro: "The main stages behind every pair.",
      leatherEyebrow: "Materials",
      leatherTitle: "Materials\nwe *choose.*",
      leatherIntro: "Smooth and textured leather, warm lining, soles chosen for grip and durability.",
      promiseEyebrow: "Care",
      promiseTitle: "Made to be\n*worn.*",
      promiseLead: "With regular care the leather keeps its look for years. Questions about care — write to us.",
      next: "Contact us",
      nextEyebrow: "Next",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Write to\nthe *brand.*",
      intro: "Sizes, models, care — we reply by email within two working days.",
      meta: ["atelier@andrianocherini.com", "Fermo · Italia"],
      whereEyebrow: "Where",
      whereTitle: "Where to\n*find us.*",
      whereIntro: "The brand office in Fermo and the official store on Ozon.",
      writeEyebrow: "Message",
      writeTitle: "Write to us.",
      writeBody: "Tell us the model and your usual size.",
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
      intro: "A cap-toe derby and a croc-embossed Oxford, each in black and dark brown.",
      meta: ["2 models", "2 colours", "Since 2014", "On Ozon"],
      featureEyebrow: "Signature · Since 2016",
      featureTitle: "The Fermo,\n*up close.*",
      featureLead: "Polished cap toe, fur lining, treaded sole — the brand's signature derby.",
      featureCta: "View the Fermo",
      careEyebrow: "Good to know",
      careTitle: "Buying\n*and care.*",
      care: [
        { title: "Where to buy", text: "The collection is sold on Ozon. Delivery and returns follow Ozon's terms." },
        { title: "Sizes", text: "Not sure about the size? Write to us before ordering." },
        { title: "Care", text: "Brush after wear, use a cream in the shoe's colour, keep shoe trees inside between wears." },
      ],
      filterAll: "All shoes",
      filterNote: "Sizes EU 39–46",
      filterShowing: "Showing",
      editorial: "Fewer pairs, chosen well.",
      editorialBy: "Andriano Cherini",
    },
    productUi: {
      collection: "Collection",
      about: "About the product",
      colour: "Colour",
      ozon: "View on Ozon",
      inquire: "Ask about this model",
      inquireHint: "Sold on Ozon. Questions about size or fit — write to us.",
      details: "Details",
      care: "Care",
      careBody:
        "Brush after wear and let the pair rest for a day. Use a neutral cream or one in the shoe's colour, keep shoe trees inside, dry away from radiators.",
      delivery: "Where to buy",
      deliveryBody:
        "Andriano Cherini is sold on Ozon. Delivery, payment and returns follow Ozon's terms. This website is for information only.",
      storyEyebrow: "The model",
      colours: "colours",
    },
    journalPage: {
      eyebrow: "Notes",
      title: "Short notes\nfrom the *brand.*",
      intro: "The brand's beginnings, its comfort technologies and the Fermo Derby.",
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
      place: "Fermo · Marche · Italia",
      handmade: "Ручная работа",
      kicker: "Fermo Derby",
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
      text: "С самого начала одна задача: *классические туфли, в которых удобно весь день.* Чистые линии, аккуратная отделка и продуманный комфорт внутри.",
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
      title: "Fermo\n*Derby.*",
      since: "С",
      cta: "Открыть Fermo",
      details: ["Меховая подкладка", "Каблук Ammortizzo", "Протекторная подошва"],
    },
    anatomy: {
      aria: "Детали Fermo Derby",
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
      intro: "Дерби с мыском и оксфорд с тиснением под крокодила — каждая модель в чёрном и тёмно-коричневом цвете.",
      viewAll: "Вся коллекция",
    },
    numbers: {
      eyebrow: "Коротко",
      title: "Небольшой бренд.\n*Понятные* решения.",
      items: [
        { value: 2014, suffix: "", label: "год основания бренда" },
        { value: 2, suffix: "", label: "модели в коллекции" },
        { value: 2, suffix: "", label: "цвета для каждой модели" },
        { value: 6, suffix: "", label: "технологий комфорта" },
      ],
    },
    tech: {
      eyebrow: "Технологии",
      title: "Комфорт внутри\n*классики.*",
      intro: "Шесть решений, которые мы развиваем с 2014 года. Снаружи их не видно — они заметны к концу дня.",
      tag: "Ammortizzo · амортизирующий каблук",
    },
    mosaic: {
      eyebrow: "Мастерская",
      title: "Как складывается\n*коллекция.*",
      lead: "Лекала, колодки, кожа и аккуратная отделка.",
      body: "Мы держим коллекцию небольшой и дорабатываем каждую модель, а не добавляем новые.",
      cta: "Как мы работаем",
    },
    quote: {
      text: "Хорошие туфли — те, о которых забываешь, пока их носишь.",
      role: "Основатель",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Вопросы\nпо *коллекции?*",
      lead: "Напишите о размере или конкретной модели. Ответим в течение двух рабочих дней.",
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
      letterBody: "Модель и размер — ответим по почте в течение двух рабочих дней.",
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
        "Андриано Черини основал бренд в 2014 году в Марке. Цель — классические туфли, которые можно носить весь день.",
      meta: ["Основан в 2014", "Фермо, Марке", "Forma e comfort"],
      crestEyebrow: "Герб · 2015",
      crestTitle: "Лев и\n*единорог.*",
      crestLead:
        "Герб появился в 2015 году: лев символизирует ремесло, единорог — хорошую кожу. На ленте внизу — надпись Tradizioni secolari.",
      crestA: "Инициалы основателя.",
      crestName: "Имя бренда на стельке.",
      crestMotto: "«Вековые традиции» — отсылка к обувному ремеслу Марке.",
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
      ruleTitle: "Немного моделей.\n*Сделанных хорошо.*",
      ruleLead: "Мы развиваем колодки и модели как единую линию и дорабатываем их со временем. Снаружи классика, внутри комфорт.",
      stepsEyebrow: "Процесс",
      stepsTitle: "От кожи\nк *отделке.*",
      stepsIntro: "Основные этапы работы над каждой парой.",
      leatherEyebrow: "Материалы",
      leatherTitle: "Материалы,\nкоторые мы *выбираем.*",
      leatherIntro: "Гладкая и фактурная кожа, тёплая подкладка, подошвы с хорошим сцеплением и долгим сроком службы.",
      promiseEyebrow: "Уход",
      promiseTitle: "Сделаны,\nчтобы *носить.*",
      promiseLead: "При регулярном уходе кожа сохраняет вид годами. Вопросы по уходу — напишите нам.",
      next: "Написать нам",
      nextEyebrow: "Дальше",
    },
    contactPage: {
      eyebrow: "Контакты",
      title: "Напишите\n*бренду.*",
      intro: "Размеры, модели, уход — ответим по почте в течение двух рабочих дней.",
      meta: ["atelier@andrianocherini.com", "Фермо · Италия"],
      whereEyebrow: "Где мы",
      whereTitle: "Как нас\n*найти.*",
      whereIntro: "Офис бренда в Фермо и официальный магазин на Ozon.",
      writeEyebrow: "Сообщение",
      writeTitle: "Напишите нам.",
      writeBody: "Укажите модель и размер, который обычно носите.",
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
      intro: "Дерби с мыском и оксфорд с тиснением под крокодила — каждая модель в чёрном и тёмно-коричневом цвете.",
      meta: ["2 модели", "2 цвета", "С 2014", "На Ozon"],
      featureEyebrow: "Фирменная · С 2016",
      featureTitle: "Fermo\n*вблизи.*",
      featureLead: "Полированный мысок, меховая подкладка, протекторная подошва — фирменная модель бренда.",
      featureCta: "Открыть Fermo",
      careEyebrow: "Полезно знать",
      careTitle: "Покупка\n*и уход.*",
      care: [
        { title: "Где купить", text: "Коллекция продаётся на Ozon. Доставка и возврат — по правилам Ozon." },
        { title: "Размер", text: "Сомневаетесь в размере — напишите нам до заказа." },
        { title: "Уход", text: "Чистите щёткой после носки, используйте крем в цвет обуви, храните с колодками." },
      ],
      filterAll: "Все модели",
      filterNote: "Размеры EU 39–46",
      filterShowing: "Показано",
      editorial: "Меньше пар, но выбранных точно.",
      editorialBy: "Андриано Черини",
    },
    productUi: {
      collection: "Коллекция",
      about: "О товаре",
      colour: "Цвет",
      ozon: "Смотреть на Ozon",
      inquire: "Спросить об этой модели",
      inquireHint: "Продаётся на Ozon. Вопросы о размере и посадке — напишите нам.",
      details: "Детали",
      care: "Уход",
      careBody:
        "Чистите щёткой после носки и давайте паре отдохнуть день. Используйте нейтральный крем или крем в цвет обуви, храните с колодками, сушите вдали от батарей.",
      delivery: "Где купить",
      deliveryBody:
        "Andriano Cherini продаётся на Ozon. Доставка, оплата и возврат — по правилам Ozon. Сайт носит информационный характер.",
      storyEyebrow: "О модели",
      colours: "цвета",
    },
    journalPage: {
      eyebrow: "Заметки",
      title: "Короткие заметки\nот *бренда.*",
      intro: "О том, как появился бренд, о технологиях комфорта и о модели Fermo Derby.",
      meta: ["С 2014", "Фермо", "Forma e comfort"],
      nextEyebrow: "Дальше",
      next: "Написать нам",
      back: "← Заметки",
    },
    preloader: { motto: "Forma e comfort" },
    marquee: ["Forma e comfort", "Фермо · 2014", "Ammortizzo", "ComfortForma"],
  },
};
