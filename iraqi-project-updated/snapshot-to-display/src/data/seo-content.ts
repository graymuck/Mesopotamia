import type { Lang } from "@/lib/i18n";
export const SEO_PAGES: Record<string, { title: Record<Lang, string>; description: Record<Lang, string> }> = {
  "/": {
    "title": {
      "en": "Mesopotamia Nights — Discover Iraq's history, food & languages",
      "ar": "ليالي بلاد الرافدين — اكتشف تاريخ العراق وطعامه ولغاته",
      "ru": "Ночи Месопотамии — история, кухня и языки Ирака"
    },
    "description": {
      "en": "Where civilization began, a feast awaits. An Iraqi cultural event of history, flavor, faith and language.",
      "ar": "حيث بدأت الحضارة، تنتظركم مائدة. فعالية ثقافية عراقية عن التاريخ والنكهة والإيمان واللغة.",
      "ru": "Там, где зародилась цивилизация, вас ждёт пир. Иракское культурное мероприятие об истории, вкусах, вере и языках."
    }
  },
  "/history": {
    "title": {
      "en": "History of Iraq — From Sumer to the modern state | Mesopotamia Nights",
      "ar": "تاريخ العراق — من سومر إلى الدولة الحديثة | ليالي بلاد الرافدين",
      "ru": "История Ирака — от Шумера до наших дней | Ночи Месопотамии"
    },
    "description": {
      "en": "A timeline of Mesopotamia and Iraq: Sumer, Akkad, Babylon, Assyria, Abbasid Baghdad and modern Iraq.",
      "ar": "خط زمني لبلاد الرافدين والعراق: سومر وأكد وبابل وآشور وبغداد العباسية والعراق الحديث.",
      "ru": "Хронология Месопотамии и Ирака: Шумер, Аккад, Вавилон, Ассирия, Багдад Аббасидов и современный Ирак."
    }
  },
  "/food": {
    "title": {
      "en": "Iraqi Food — Masgouf, Dolma, Kleicha & more | Mesopotamia Nights",
      "ar": "الطعام العراقي — مسكوف ودولمة وكليجة وغيرها | ليالي بلاد الرافدين",
      "ru": "Иракская кухня — масгуф, долма, клейча и другое | Ночи Месопотамии"
    },
    "description": {
      "en": "Discover Iraqi dishes: masgouf, dolma, kubba, tashreeb, samoon, kahi, kleicha and cardamom tea.",
      "ar": "اكتشف الأطباق العراقية: المسكوف والدولمة والكبة والتشريب والصمون والكاهي والكليجة وشاي الهيل.",
      "ru": "Узнайте об иракской кухне: масгуф, долма, кубба, ташриб, самун, кахи, клейча и чай с кардамоном."
    }
  },
  "/religions": {
    "title": {
      "en": "Religions & Communities of Iraq | Mesopotamia Nights",
      "ar": "أديان العراق ومجتمعاته | ليالي بلاد الرافدين",
      "ru": "Религии и общины Ирака | Ночи Месопотамии"
    },
    "description": {
      "en": "Muslims, Christians, Yazidis, Mandaeans, Kakai, Jews, Baháʼís and Zoroastrians: the communities that shaped Iraq.",
      "ar": "المسلمون والمسيحيون والإيزيديون والمندائيون والكاكائيون واليهود والبهائيون والزرادشتيون: المجتمعات التي صاغت العراق.",
      "ru": "Мусульмане, христиане, езиды, мандеи, какаи, евреи, бахаи и зороастрийцы: общины, сформировавшие Ирак."
    }
  },
  "/languages": {
    "title": {
      "en": "Languages of Iraq — Say peace | Mesopotamia Nights",
      "ar": "لغات العراق — قل «سلام» | ليالي بلاد الرافدين",
      "ru": "Языки Ирака — скажите «мир» | Ночи Месопотамии"
    },
    "description": {
      "en": "Arabic, Kurdish, Turkmen, Syriac and Armenian: learn to say peace in the languages of Iraq.",
      "ar": "العربية والكردية والتركمانية والسريانية والأرمنية: تعلّم كيف تقول «سلام» بلغات العراق.",
      "ru": "Арабский, курдский, туркменский, сирийский и армянский: узнайте, как сказать «мир» на языках Ирака."
    }
  },
  "/tourism": {
    "title": {
      "en": "Tourism in Iraq — Ancient Sites, Citadels & Mountains | Mesopotamia Nights",
      "ar": "السياحة في العراق — المواقع الأثرية والقلاع والجبال | ليالي بلاد الرافدين",
      "ru": "Туризм в Ираке — древние памятники, цитадели и горы | Ночи Месопотамии"
    },
    "description": {
      "en": "Explore Iraq's archaeological sites, historic architecture, natural landscapes, cultural landmarks and spiritual heritage.",
      "ar": "اكتشف المواقع الأثرية والعمارة التاريخية والمناظر الطبيعية والمعالم الثقافية والتراث الروحي في العراق.",
      "ru": "Археологические памятники, историческая архитектура, природа, культурные места и духовное наследие Ирака."
    }
  },
  "/event": {
    "title": {
      "en": "Don Region Cultures Festival — November 5 | Mesopotamia Nights",
      "ar": "مهرجان ثقافات شعوب الدون — 5 نوفمبر | ليالي بلاد الرافدين",
      "ru": "Фестиваль национальных культур народов Дона — 5 ноября"
    },
    "description": {
      "en": "Discover the Festival of National Cultures of the Peoples of the Don Region. Exhibitions open November 5 at 12:00 PM, DSTU Congress Hall, second floor, Rostov-on-Don.",
      "ar": "تعرّف على مهرجان الثقافات الوطنية لشعوب منطقة الدون. تبدأ المعارض في 5 نوفمبر الساعة 12:00 ظهرًا، بالطابق الثاني من قاعة المؤتمرات بجامعة دون الحكومية التقنية في روستوف على الدون.",
      "ru": "Фестиваль национальных культур народов Дона. Выставки открываются 5 ноября в 12:00 на 2-м этаже Конгресс-холла ДГТУ, площадь Гагарина, 1, Ростов-на-Дону."
    }
  }
};
