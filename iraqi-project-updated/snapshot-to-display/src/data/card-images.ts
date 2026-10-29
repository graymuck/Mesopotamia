/** Curated local assets. Attribution and reuse terms: /image-credits.html */
export type CardPhoto = { src: string; small: string; alt: string; position: string; fit?: "cover" | "contain"; caption?: Record<"en" | "ar" | "ru", string> };
export const CARD_IMAGES: Record<string, CardPhoto> = {
  "history-heritage": {
  "src": "/images/cards/history-heritage-supplied.webp",
  "small": "/images/cards/history-heritage-supplied-480.webp",
  "alt": "Aerial view of a turquoise split-dome monument beside a lake, landscaped grounds and the surrounding city",
  "position": "50% 50%",
  "fit": "contain",
  "caption": {
    "en": "A monument and its surrounding landscape",
    "ar": "نصب تذكاري والمناظر المحيطة به",
    "ru": "Монумент и окружающий ландшафт"
  }
},
  "history-achievements": {
  "src": "/images/cards/history-achievements-supplied.webp",
  "small": "/images/cards/history-achievements-supplied-480.webp",
  "alt": "A lion depicted in glazed-brick relief, surrounded by blue and gold bricks and floral patterns",
  "position": "50% 50%",
  "fit": "contain",
  "caption": {
    "en": "Lion relief in glazed brick",
    "ar": "نقش بارز لأسد على الآجر المزجّج",
    "ru": "Рельеф льва на глазурованном кирпиче"
  }
},
  "food-masgouf": {
    "src": "/images/cards/food-masgouf-supplied.webp",
    "small": "/images/cards/food-masgouf-supplied-480.webp",
    "alt": "Grilled Iraqi masgouf fish on a platter with tomatoes, onions, pickles and lemon",
    "position": "50% 50%"
  },
  "food-dolma": {
    "src": "/images/cards/food-dolma-supplied.webp",
    "small": "/images/cards/food-dolma-supplied-480.webp",
    "alt": "Iraqi dolma with stuffed vine leaves and onions, meat, broad beans and lemon on a platter",
    "position": "50% 50%"
  },
  "food-kubba": {
    "src": "/images/cards/food-kubba.webp",
    "small": "/images/cards/food-kubba-480.webp",
    "alt": "Kubba cut open to show its meat filling",
    "position": "50% 50%"
  },
  "food-tashreeb": {
    "src": "/images/cards/food-tashreeb-supplied.webp",
    "small": "/images/cards/food-tashreeb-supplied-480.webp",
    "alt": "Iraqi tashreeb with pieces of meat and chickpeas served over bread on a platter",
    "position": "50% 50%"
  },
  "food-rice": {
    "src": "/images/cards/food-rice-supplied.webp",
    "small": "/images/cards/food-rice-supplied-480.webp",
    "alt": "A platter of Iraqi biryani rice with meat, peas and potatoes, accompanied by salad and pickles",
    "position": "50% 50%"
  },
  "food-samoon": {
    "src": "/images/cards/food-samoon-supplied.webp",
    "small": "/images/cards/food-samoon-supplied-480.webp",
    "alt": "A pile of golden-brown Iraqi samoon bread with its distinctive diamond shape",
    "position": "50% 50%"
  },
  "food-kahi": {
    "src": "/images/cards/food-kahi-supplied.webp",
    "small": "/images/cards/food-kahi-supplied-480.webp",
    "alt": "Two golden, flaky Iraqi kahi pastries served on a patterned white plate",
    "position": "50% 50%"
  },
  "food-kleicha": {
    "src": "/images/cards/food-kleicha.webp",
    "small": "/images/cards/food-kleicha-480.webp",
    "alt": "Iraqi date-filled kleicha cookies arranged on a plate",
    "position": "50% 50%"
  },
  "food-baklava": {
    "src": "/images/cards/food-baklava-supplied.webp",
    "small": "/images/cards/food-baklava-supplied-480.webp",
    "alt": "An assortment of golden and green pistachio baklava arranged on a round metal tray",
    "position": "50% 50%"
  },
  "food-tea": {
    "src": "/images/cards/food-tea.webp",
    "small": "/images/cards/food-tea-480.webp",
    "alt": "Iraqi tea in an istikan glass at Al-Shahbander cafe, Baghdad",
    "position": "50% 50%"
  },
  "community-muslims": {
  "src": "/images/cards/community-muslims-supplied.webp",
  "small": "/images/cards/community-muslims-supplied-480.webp",
  "alt": "A brick mosque with an ornamented minaret and dome beneath a softly clouded sky",
  "position": "50% 50%",
  "fit": "contain"
},
  "community-yazidis": {
    "src": "/images/cards/community-yazidis.webp",
    "small": "/images/cards/community-yazidis-480.webp",
    "alt": "Conical temple roofs at the Yazidi sanctuary of Lalish",
    "position": "50% 50%"
  },
  "history-ur": {
    "src": "/images/cards/history-ur.webp",
    "small": "/images/cards/history-ur-480.webp",
    "alt": "The stepped brick Ziggurat of Ur in southern Iraq",
    "position": "50% 50%"
  },
  "history-ishtar": {
    "src": "/images/cards/history-ishtar.webp",
    "small": "/images/cards/history-ishtar-480.webp",
    "alt": "Reconstruction of Babylon’s Ishtar Gate at the Pergamon Museum, Berlin",
    "position": "50% 50%",
    "caption": {
      "en": "Ishtar Gate reconstruction, Pergamon Museum, Berlin",
      "ar": "إعادة بناء بوابة عشتار، متحف بيرغامون، برلين",
      "ru": "Реконструкция ворот Иштар, Пергамский музей, Берлин"
    }
  },
  "history-arch": {
    "src": "/images/cards/history-arch.webp",
    "small": "/images/cards/history-arch-480.webp",
    "alt": "The monumental brick arch of Taq Kasra at Ctesiphon, Iraq",
    "position": "50% 50%"
  },
  "history-round": {
  "src": "/images/cards/history-round-supplied.webp",
  "small": "/images/cards/history-round-supplied-480.webp",
  "alt": "Artist’s impression of Abbasid Baghdad as a circular walled city with a central golden-domed building",
  "position": "50% 50%",
  "fit": "contain",
  "caption": {
    "en": "Artist’s impression of Abbasid Baghdad’s Round City",
    "ar": "تصوّر فني لمدينة بغداد المدورة في العصر العباسي",
    "ru": "Художественное представление Круглого города Багдада эпохи Аббасидов"
  }
},
  "history-modern": {
  "src": "/images/cards/history-modern-supplied.webp",
  "small": "/images/cards/history-modern-supplied-480.webp",
  "alt": "An ornate pointed brick arch with carved geometric and calligraphic decoration",
  "position": "50% 50%",
  "fit": "contain",
  "caption": {
    "en": "Decorative brickwork and carved architectural detail",
    "ar": "تفاصيل معمارية منحوتة وزخارف من الآجر",
    "ru": "Декоративная кирпичная кладка и резные архитектурные детали"
  }
},
  "history-tablet": {
    "src": "/images/cards/history-tablet.webp",
    "small": "/images/cards/history-tablet-480.webp",
    "alt": "Early Mesopotamian clay tablet recording a grain transaction, displayed in the British Museum",
    "position": "50% 50%",
    "fit": "contain",
    "caption": {
      "en": "Mesopotamian grain-accounting tablet (British Museum)",
      "ar": "لوح مسماري لتسجيل الحبوب من بلاد الرافدين (المتحف البريطاني)",
      "ru": "Месопотамская табличка учёта зерна (Британский музей)"
    }
  },
  "history-babylon": {
  "src": "/images/cards/history-babylon-supplied.webp",
  "small": "/images/cards/history-babylon-supplied-480.webp",
  "alt": "Illustration imagining ancient Babylon, with a blue-glazed gateway, monumental buildings and people",
  "position": "50% 50%",
  "fit": "contain",
  "caption": {
    "en": "Artist’s impression of ancient Babylon",
    "ar": "تصوّر فني لمدينة بابل القديمة",
    "ru": "Художественное представление древнего Вавилона"
  }
},
  "history-old-baghdad": {
    "src": "/images/cards/history-old-baghdad.webp",
    "small": "/images/cards/history-old-baghdad-480.webp",
    "alt": "Street scene in Baghdad photographed in 1918",
    "position": "50% 50%"
  },
  "history-today": {
  "src": "/images/cards/history-today-supplied.webp",
  "small": "/images/cards/history-today-supplied-480.webp",
  "alt": "Historical image of a seated man and a standing uniformed officer at an outdoor ceremony, with spectators on balconies",
  "position": "50% 50%",
  "fit": "contain",
  "caption": {
    "en": "Historical ceremonial scene",
    "ar": "مشهد من مراسم تاريخية",
    "ru": "Историческая церемония"
  }
},
  "tourism-ur": {
    "src": "/images/cards/history-ur.webp",
    "small": "/images/cards/history-ur-480.webp",
    "alt": "The Ziggurat of Ur in Dhi Qar, Iraq",
    "position": "50% 50%"
  },
  "tourism-babylon": {
    "src": "/images/cards/tourism-babylon.webp",
    "small": "/images/cards/tourism-babylon-480.webp",
    "alt": "A view across the archaeological site of Babylon, Iraq",
    "position": "50% 50%"
  },
  "tourism-hatra": {
    "src": "/images/cards/tourism-hatra.webp",
    "small": "/images/cards/tourism-hatra-480.webp",
    "alt": "Stone walls and gateways at the ancient city of Hatra, Iraq",
    "position": "50% 50%"
  },
  "tourism-nineveh-nimrud": {
    "src": "/images/cards/tourism-nineveh-nimrud.webp",
    "small": "/images/cards/tourism-nineveh-nimrud-480.webp",
    "alt": "Damaged gateway documented during a UNESCO mission to Nineveh in 2017",
    "position": "50% 50%"
  },
  "tourism-aqar-quf": {
    "src": "/images/cards/tourism-aqar-quf.webp",
    "small": "/images/cards/tourism-aqar-quf-480.webp",
    "alt": "The surviving brick ziggurat at Aqar Quf, Dur-Kurigalzu",
    "position": "50% 50%"
  },
  "tourism-uruk": {
    "src": "/images/cards/tourism-uruk.webp",
    "small": "/images/cards/tourism-uruk-480.webp",
    "alt": "The surviving ziggurat platform at the archaeological site of Uruk",
    "position": "50% 50%"
  },
  "tourism-kish": {
    "src": "/images/cards/tourism-kish.webp",
    "small": "/images/cards/tourism-kish-480.webp",
    "alt": "Brick passage at the ruined ziggurat of Kish, Tell al-Uhaymir",
    "position": "50% 50%"
  },
  "tourism-taq-kasra": {
    "src": "/images/cards/tourism-taq-kasra.webp",
    "small": "/images/cards/tourism-taq-kasra-480.webp",
    "alt": "Taq Kasra and the surviving palace facade at Ctesiphon",
    "position": "50% 50%"
  },
  "tourism-mustansiriya": {
    "src": "/images/cards/tourism-mustansiriya.webp",
    "small": "/images/cards/tourism-mustansiriya-480.webp",
    "alt": "Arched courtyard of the Mustansiriya Madrasah in Baghdad",
    "position": "50% 50%"
  },
  "tourism-kirkuk-citadel": {
    "src": "/images/cards/tourism-kirkuk-citadel.webp",
    "small": "/images/cards/tourism-kirkuk-citadel-480.webp",
    "alt": "View over the historic Kirkuk Citadel",
    "position": "50% 50%"
  },
  "tourism-mar-mattai": {
    "src": "/images/cards/tourism-mar-mattai.webp",
    "small": "/images/cards/tourism-mar-mattai-480.webp",
    "alt": "Carved entrance of Mar Mattai Monastery in northern Iraq",
    "position": "50% 50%"
  },
  "tourism-ahmad-awa": {
    "src": "/images/cards/tourism-ahmad-awa.webp",
    "small": "/images/cards/tourism-ahmad-awa-480.webp",
    "alt": "Ahmed Awa waterfall cascading through the green valley near Halabja",
    "position": "50% 50%"
  },
  "tourism-akre": {
    "src": "/images/cards/tourism-akre.webp",
    "small": "/images/cards/tourism-akre-480.webp",
    "alt": "The town of Akre beneath its rocky mountain slopes",
    "position": "50% 50%"
  },
  "tourism-gali-ali-bag": {
    "src": "/images/cards/tourism-gali-ali-bag.webp",
    "small": "/images/cards/tourism-gali-ali-bag-480.webp",
    "alt": "Geli Ali Beg waterfall flowing through its rocky gorge",
    "position": "50% 50%"
  },
  "tourism-shanidar": {
    "src": "/images/cards/tourism-shanidar.webp",
    "small": "/images/cards/tourism-shanidar-480.webp",
    "alt": "The entrance to Shanidar Cave in the mountains of northern Iraq",
    "position": "50% 50%"
  },
  "food-coffee": {
    "src": "/images/cards/food-coffee.webp",
    "small": "/images/cards/food-coffee-480.webp",
    "alt": "Arabic coffee served in a small cup beside a dallah coffee pot",
    "position": "50% 50%"
  },
  "community-christians": {
  "src": "/images/cards/community-christians-supplied.webp",
  "small": "/images/cards/community-christians-supplied-480.webp",
  "alt": "Christian clergy and a congregation worshipping in a church with colorful stained glass and a decorated altar",
  "position": "50% 50%",
  "fit": "contain"
},
  "community-mandaeans": {
    "src": "/images/cards/community-mandaeans.webp",
    "small": "/images/cards/community-mandaeans-480.webp",
    "alt": "Historical photograph of a Mandaean infant baptism in Iraq",
    "position": "50% 50%"
  },
  "community-kakai": {
    "src": "/images/cards/community-kakai.webp",
    "small": "/images/cards/community-kakai-480.webp",
    "alt": "The Yarsani Kakai shrine of Walid at Shah Hayas, Wardik, Iraq",
    "position": "50% 50%"
  },
  "community-zoroastrians": {
    "src": "/images/cards/community-zoroastrians.webp",
    "small": "/images/cards/community-zoroastrians-480.webp",
    "alt": "Faravahar, a symbol associated with Zoroastrian heritage (illustration; not a photograph of an Iraqi temple)",
    "position": "50% 50%",
    "fit": "contain"
  },
  "history-akkadian": {
    "src": "/images/cards/history-akkadian-supplied.webp",
    "small": "/images/cards/history-akkadian-supplied-480.webp",
    "alt": "Black-and-white photograph of the bronze head of an Akkadian ruler, showing its detailed beard and damaged eye",
    "position": "50% 50%",
    "fit": "contain"
  },
  "history-lamassu": {
    "src": "/images/cards/history-lamassu.webp",
    "small": "/images/cards/history-lamassu-480.webp",
    "alt": "Assyrian human-headed winged bull from Khorsabad, displayed in the British Museum",
    "position": "50% 50%",
    "caption": {
      "en": "Assyrian lamassu from Khorsabad, British Museum",
      "ar": "لاماسو آشوري من خورسباد، المتحف البريطاني",
      "ru": "Ассирийский ламассу из Хорсабада, Британский музей"
    }
  },
  "history-basra": {
    "src": "/images/cards/history-basra.webp",
    "small": "/images/cards/history-basra-480.webp",
    "alt": "Historical view of Basra from the Shatt al-Arab, published in 1915",
    "position": "50% 50%",
    "caption": {
      "en": "Basra from the Shatt al-Arab, historical illustration (1915)",
      "ar": "البصرة من شط العرب، رسم تاريخي (١٩١٥)",
      "ru": "Басра со стороны Шатт-эль-Араб, историческая иллюстрация (1915)"
    }
  },
  "tourism-erbil-citadel": {
    "src": "/images/cards/tourism-erbil-citadel.webp",
    "small": "/images/cards/tourism-erbil-citadel-480.webp",
    "alt": "Aerial view of the circular citadel mound in Erbil",
    "position": "50% 50%"
  },
  "tourism-ukhaidir": {
    "src": "/images/cards/tourism-ukhaidir.webp",
    "small": "/images/cards/tourism-ukhaidir-480.webp",
    "alt": "Brick courtyard and walls of Al-Ukhaidir Fortress",
    "position": "50% 50%"
  },
  "tourism-qasr-al-ashaq": {
    "src": "/images/cards/tourism-qasr-al-ashaq.webp",
    "small": "/images/cards/tourism-qasr-al-ashaq-480.webp",
    "alt": "The exterior walls of Qasr al-Ashaq near Samarra",
    "position": "50% 50%"
  },
  "tourism-mudhafaria": {
    "src": "/images/cards/tourism-mudhafaria.webp",
    "small": "/images/cards/tourism-mudhafaria-480.webp",
    "alt": "The Mudhafaria Minaret in Minaret Park, Erbil",
    "position": "50% 50%"
  },
  "tourism-marshes": {
    "src": "/images/cards/tourism-marshes.webp",
    "small": "/images/cards/tourism-marshes-480.webp",
    "alt": "A mashoof boat among green reeds in the Chibayish marshes of southern Iraq",
    "position": "50% 50%",
    "caption": {
      "en": "A mashoof boat in the marshes of southern Iraq",
      "ar": "قارب مشحوف في أهوار جنوب العراق",
      "ru": "Лодка машхуф в болотах южного Ирака"
    }
  },
  "tourism-mount-sara": {
    "src": "/images/cards/tourism-mount-sara.webp",
    "small": "/images/cards/tourism-mount-sara-480.webp",
    "alt": "The rugged peaks of Mount Sara near Lake Dukan",
    "position": "50% 50%"
  },
  "tourism-sulav": {
    "src": "/images/cards/tourism-sulav.webp",
    "small": "/images/cards/tourism-sulav-480.webp",
    "alt": "Mountain valley at Sulav near Amedi in northern Iraq",
    "position": "50% 50%"
  },
  "tourism-duhok-lake": {
    "src": "/images/cards/tourism-duhok-lake.webp",
    "small": "/images/cards/tourism-duhok-lake-480.webp",
    "alt": "Duhok Dam and its reservoir at sunrise",
    "position": "50% 50%"
  },
  "tourism-korek": {
    "src": "/images/cards/tourism-korek.webp",
    "small": "/images/cards/tourism-korek-480.webp",
    "alt": "Cable cars on the green slopes of Korek Mountain",
    "position": "50% 50%"
  },
  "tourism-bekhal": {
    "src": "/images/cards/tourism-bekhal.webp",
    "small": "/images/cards/tourism-bekhal-480.webp",
    "alt": "Bekhal waterfall and its steep green mountain valley",
    "position": "50% 50%"
  },
  "tourism-shanashil": {
    "src": "/images/cards/tourism-shanashil.webp",
    "small": "/images/cards/tourism-shanashil-480.webp",
    "alt": "A historic shanasheel house beside Basra’s Al-Ashar canal",
    "position": "50% 50%"
  },
  "tourism-mutanabbi": {
    "src": "/images/cards/tourism-mutanabbi.webp",
    "small": "/images/cards/tourism-mutanabbi-480.webp",
    "alt": "Booksellers and pedestrians on Al-Mutanabbi Street in Baghdad",
    "position": "50% 50%"
  },
  "tourism-qashla": {
    "src": "/images/cards/tourism-qashla.webp",
    "small": "/images/cards/tourism-qashla-480.webp",
    "alt": "The Qushla clock tower and garden in Baghdad",
    "position": "50% 50%"
  },
  "tourism-saffafeen": {
    "src": "/images/cards/tourism-saffafeen.webp",
    "small": "/images/cards/tourism-saffafeen-480.webp",
    "alt": "Copper wares displayed at Souk al-Safafeer in Baghdad",
    "position": "50% 50%"
  },
  "tourism-imam-ali": {
    "src": "/images/cards/tourism-imam-ali.webp",
    "small": "/images/cards/tourism-imam-ali-480.webp",
    "alt": "Illuminated golden dome and minarets of Imam Ali Mosque in Najaf",
    "position": "50% 50%"
  },
  "tourism-imam-hussein": {
    "src": "/images/cards/tourism-imam-hussein.webp",
    "small": "/images/cards/tourism-imam-hussein-480.webp",
    "alt": "The interior of Imam Husayn Shrine in Karbala",
    "position": "50% 50%"
  },
  "tourism-al-abbas": {
    "src": "/images/cards/tourism-al-abbas.webp",
    "small": "/images/cards/tourism-al-abbas-480.webp",
    "alt": "The dome and minarets of Al-Abbas Shrine in Karbala",
    "position": "50% 50%"
  },
  "tourism-kadhimiya": {
    "src": "/images/cards/tourism-kadhimiya.webp",
    "small": "/images/cards/tourism-kadhimiya-480.webp",
    "alt": "Golden domes and minarets of Al-Kadhimiya Mosque in Baghdad",
    "position": "50% 50%"
  },
  "tourism-abu-hanifa": {
    "src": "/images/cards/tourism-abu-hanifa.webp",
    "small": "/images/cards/tourism-abu-hanifa-480.webp",
    "alt": "Abu Hanifa Mosque in Baghdad illuminated at night",
    "position": "50% 50%"
  },
  "tourism-kufa": {
    "src": "/images/cards/tourism-kufa.webp",
    "small": "/images/cards/tourism-kufa-480.webp",
    "alt": "Courtyard and golden domes of the Great Mosque of Kufa",
    "position": "50% 50%"
  },
  "tourism-sahla": {
    "src": "/images/cards/tourism-sahla.webp",
    "small": "/images/cards/tourism-sahla-480.webp",
    "alt": "Worshippers in the main courtyard of Al-Sahlah Mosque in Kufa",
    "position": "50% 50%"
  },
  "community-jews": {
    "src": "/images/cards/community-jews.webp",
    "small": "/images/cards/community-jews-480.webp",
    "alt": "Historical photograph of the shrine of Ezekiel in al-Kifl, Iraq",
    "position": "50% 50%"
  },
  "tourism-dokan-lake": {
    "src": "/images/cards/tourism-dokan-lake.webp",
    "small": "/images/cards/tourism-dokan-lake-480.webp",
    "alt": "Lake Dukan surrounded by hills in the Kurdistan Region of Iraq",
    "position": "50% 50%"
  },
  "tourism-national-museum": {
    "src": "/images/cards/tourism-national-museum.webp",
    "small": "/images/cards/tourism-national-museum-480.webp",
    "alt": "The National Museum of Iraq in Baghdad",
    "position": "50% 50%"
  },
  "gift-math": {
    "src": "/images/cards/gift-math.webp",
    "small": "/images/cards/gift-math-480.webp",
    "alt": "Plimpton 322, a Babylonian mathematical tablet",
    "position": "50% 50%",
    "fit": "contain"
  },
  "gift-law": {
    "src": "/images/cards/gift-law.webp",
    "small": "/images/cards/gift-law-480.webp",
    "alt": "The stele of the Code of Hammurabi displayed in the Louvre Museum",
    "position": "50% 50%",
    "fit": "contain"
  },
  "tourism-malwiya": {
    "src": "/images/cards/tourism-malwiya.webp",
    "small": "/images/cards/tourism-malwiya-480.webp",
    "alt": "The spiral Malwiya minaret at Samarra",
    "position": "50% 50%"
  },
  "tourism-sarchenar": {
    "src": "/images/cards/tourism-sarchenar.webp",
    "small": "/images/cards/tourism-sarchenar-480.webp",
    "alt": "Gardens and water at Sarchenar resort in Sulaymaniyah",
    "position": "50% 50%"
  },
  "community-bahai": {
    "src": "/images/cards/community-bahai.webp",
    "small": "/images/cards/community-bahai-480.webp",
    "alt": "Nine-pointed star, a symbol of the Bahai Faith (illustration; not a photograph of a Baghdad site)",
    "position": "50% 50%",
    "fit": "contain"
  },
  "gift-library": {
    "src": "/images/cards/gift-library.webp",
    "small": "/images/cards/gift-library-480.webp",
    "alt": "The Flood Tablet from the Library of Ashurbanipal, displayed in the British Museum",
    "position": "50% 50%",
    "fit": "contain"
  }
};

export const HISTORY_IMAGES: Record<string, string> = {
  "introduction": "history-tablet",
  "geography": "tourism-marshes",
  "sumer": "history-ur",
  "akkadian": "history-akkadian",
  "old-babylonian": "history-ishtar",
  "assyria": "history-lamassu",
  "neo-babylonian": "history-babylon",
  "achievements": "history-achievements",
  "classical-empires": "history-arch",
  "early-islamic": "history-basra",
  "abbasid-baghdad": "history-round",
  "mongols-ottomans": "history-old-baghdad",
  "modern-state": "history-modern",
  "iraq-today": "history-today",
  "conclusion": "history-heritage"
};
