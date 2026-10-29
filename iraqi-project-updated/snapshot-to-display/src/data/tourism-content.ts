import urZiggurat from "@/assets/ziggurat-ur.jpg";

export type TourismCategory = "archaeology" | "architecture" | "nature" | "culture" | "religious";
export type TourismDestination = {
  id: string;
  name: string;
  region: string;
  category: TourismCategory;
  description: string;
  image?: string;
};

export const TOURISM_CATEGORIES: TourismCategory[] = [
  "archaeology",
  "architecture",
  "nature",
  "culture",
  "religious",
];

export const TOURISM_DESTINATIONS: TourismDestination[] = [
  {
    id: "ur",
    name: "Ziggurat of Ur",
    region: "Dhi Qar Governorate",
    category: "archaeology",
    image: urZiggurat,
    description:
      "A massive stepped pyramid (ziggurat) built by the Sumerians over 4,000 years ago for worshipping the moon god Nanna. It is one of the best-preserved ancient mud-brick structures in the world and is located near the birthplace of Prophet Abraham.",
  },
  {
    id: "babylon",
    name: "Babylon Archaeological Site",
    region: "Babil Governorate",
    category: "archaeology",
    description:
      "The heart of the Babylonian Empire and home to King Hammurabi and Nebuchadnezzar II. The site includes ruins of ancient palaces, the famous stone Lion of Babylon, traces of the Ishtar Gate (and its site replica), and remnants of the Processional Way.",
  },
  {
    id: "hatra",
    name: "Hatra",
    region: "Nineveh Governorate",
    category: "archaeology",
    description:
      "A UNESCO World Heritage site featuring a fortified stone city built by an ancient Arab kingdom. It uniquely blends Roman, Hellenistic, and Eastern architecture with soaring arches, grand temples, and relief sculptures.",
  },
  {
    id: "nineveh-nimrud",
    name: "Nineveh & Nimrud",
    region: "Nineveh Governorate",
    category: "archaeology",
    description:
      "Capitals of the Neo-Assyrian Empire. Nimrud (Kalhu) and Nineveh feature ancient city walls, royal palaces, and the iconic Lamassu (human-headed winged bull statues carved to guard royal gates).",
  },
  {
    id: "aqar-quf",
    name: "Ziggurat of Aqar Quf / Dur-Kurigalzu",
    region: "Baghdad Governorate",
    category: "archaeology",
    description:
      "A massive 3,400-year-old ziggurat built out of mud bricks and reed matting by the Kassites, serving as the central religious site for their capital city near modern-day Baghdad.",
  },
  {
    id: "uruk",
    name: "Uruk / Warka",
    region: "Muthanna Governorate",
    category: "archaeology",
    description:
      "One of the earliest true cities in human history and the legendary realm of Gilgamesh. Uruk is widely considered the birthplace of cuneiform writing and features ancient temple platforms and Sumerian ruins.",
  },
  {
    id: "kish",
    name: "Kish / Tell al-Uhaymir",
    region: "Babil Governorate",
    category: "archaeology",
    description:
      "An ancient Sumerian and Akkadian city-state that played a crucial role in early Mesopotamian unification. It holds the remains of ziggurats and palaces dating back to the 3rd millennium BCE.",
  },
  {
    id: "shanidar",
    name: "Shanidar Cave",
    region: "Erbil Governorate",
    category: "archaeology",
    description:
      "A famous prehistoric archaeological site in the mountains of Kurdistan where well-preserved Neanderthal skeletons were discovered, offering key insights into early human history.",
  },
  {
    id: "taq-kasra",
    name: "Taq Kasra / Arch of Ctesiphon",
    region: "Baghdad Governorate / Madain",
    category: "architecture",
    description:
      "The remaining hall of the Sasanian imperial palace complex. It features the largest single-span unreinforced brick vault (arch) in the world.",
  },
  {
    id: "malwiya",
    name: "Malwiya Mosque of Samarra & Abu Dulaf",
    region: "Saladin Governorate",
    category: "architecture",
    description:
      "The 9th-century capital of the Abbasid Caliphate. The site features the iconic Malwiya Minaret, a 52-meter-tall spiral tower with an external winding ramp, along with the nearby Abu Dulaf Mosque.",
  },
  {
    id: "mustansiriya",
    name: "Mustansiriya Madrasah",
    region: "Baghdad Governorate",
    category: "architecture",
    description:
      "Established in 1227 CE during the Abbasid Era, this is one of the oldest Islamic universities in the world. It features a central courtyard, intricate brickwork motifs, and traditional study halls.",
  },
  {
    id: "erbil-citadel",
    name: "Erbil Citadel",
    region: "Erbil Governorate",
    category: "architecture",
    description:
      "A UNESCO World Heritage site situated atop an ancient tell in central Erbil. Considered one of the oldest continuously inhabited human settlements on Earth, it features traditional alleyways, historic houses, and the Kurdish Textile Museum.",
  },
  {
    id: "kirkuk-citadel",
    name: "Kirkuk Citadel",
    region: "Kirkuk Governorate",
    category: "architecture",
    description:
      "Built on an ancient mound dating back to the 3rd millennium BCE, this citadel contains layer upon layer of history, including Assyrian foundations, Ottoman-era residences, and the Green Dome.",
  },
  {
    id: "ukhaidir",
    name: "Al-Ukhaidir Fortress",
    region: "Karbala Governorate",
    category: "architecture",
    description:
      "A massive, isolated desert fortress built during the early Abbasid period. It is renowned for its high defensive walls, rounded towers, and early Islamic military architecture.",
  },
  {
    id: "qasr-al-ashaq",
    name: "Qasr al-Ashaq",
    region: "Saladin Governorate",
    category: "architecture",
    description:
      "A historic Abbasid palace located on the west bank of the Tigris in Samarra, showcasing residential caliphal architecture and decorative brick arches.",
  },
  {
    id: "mudhafaria",
    name: "Mudhafaria Minaret / Choly Minaret",
    region: "Erbil Governorate",
    category: "architecture",
    description:
      "A 12th-century standalone minaret built during the Begteginid dynasty, celebrated for its complex geometric brick patterns and glazed tiles.",
  },
  {
    id: "mar-mattai",
    name: "Mar Mattai Monastery",
    region: "Nineveh Governorate - Mount Alfaf / Maqloub",
    category: "architecture",
    description:
      "Founded in the 4th century CE, this is one of the oldest operating Christian monasteries in the world, carved directly into the mountain cliffside.",
  },
  {
    id: "marshes",
    name: "The Mesopotamian Marshes / Ahwar",
    region: "Dhi Qar, Maysan, & Basra Governorates",
    category: "nature",
    description:
      "A UNESCO World Heritage wetland ecosystem in southern Iraq. Known for its unique biodiversity, migratory birds, traditional reed houses (Mudhifs), and traditional Mashhoof canoe trips.",
  },
  {
    id: "ahmad-awa",
    name: "Ahmad Awa Resort",
    region: "Sulaymaniyah",
    category: "nature",
    description: "Famous for its mountain waterfalls, dense foliage, and streams.",
  },
  {
    id: "dokan-lake",
    name: "Dokan Lake",
    region: "Sulaymaniyah",
    category: "nature",
    description:
      "The largest man-made lake in Iraq, surrounded by mountain views and water activities.",
  },
  {
    id: "sarchenar",
    name: "Sarchenar",
    region: "Sulaymaniyah",
    category: "nature",
    description: "A cool, green retreat popular for summer leisure.",
  },
  {
    id: "mount-sara",
    name: "Mount Sara",
    region: "Sulaymaniyah",
    category: "nature",
    description: "A cool, green retreat popular for summer leisure.",
  },
  {
    id: "akre",
    name: "Akre (Akre Citadel & Town)",
    region: "Duhok",
    category: "nature",
    description: "Famous for houses built into the mountainside and vibrant Newroz celebrations.",
  },
  {
    id: "sulav",
    name: "Sulav Waterfalls",
    region: "Duhok",
    category: "nature",
    description: "Picturesque landscapes offering mountain views and cold spring water.",
  },
  {
    id: "duhok-lake",
    name: "Duhok Lake",
    region: "Duhok",
    category: "nature",
    description: "Picturesque landscapes offering mountain views and cold spring water.",
  },
  {
    id: "korek",
    name: "Korek Mountain",
    region: "Erbil mountain region",
    category: "nature",
    description:
      "A high-altitude peak accessible by cable car (teleferik), offering snow activities in winter and mountain breezes in summer.",
  },
  {
    id: "gali-ali-bag",
    name: "Gali Ali Bag",
    region: "Erbil mountain region",
    category: "nature",
    description: "A landmark natural gorge featuring riverside dining.",
  },
  {
    id: "bekhal",
    name: "Bekhal Waterfalls",
    region: "Erbil mountain region",
    category: "nature",
    description: "A landmark waterfall featuring riverside dining.",
  },
  {
    id: "shanashil",
    name: "Basra Shanashil",
    region: "Basra Governorate",
    category: "culture",
    description:
      "Traditional Ottoman-era merchant houses characterized by intricate wooden bay windows (Shanashil) extending over narrow streets and canals near Shat Al-Arab.",
  },
  {
    id: "mutanabbi",
    name: "Al-Mutanabbi Street",
    region: "Baghdad Governorate",
    category: "culture",
    description:
      "The historic literary heart of Baghdad, lined with bookstores, outdoor markets, and the classic Shabandar Cafe. The street leads to the historic Ottoman-era clock tower at Al-Qashla square.",
  },
  {
    id: "qashla",
    name: "Al-Qashla",
    region: "Baghdad Governorate",
    category: "culture",
    description: "A historic Ottoman-era clock tower at Al-Qashla square.",
  },
  {
    id: "saffafeen",
    name: "Souk al-Saffafeen",
    region: "Baghdad Governorate",
    category: "culture",
    description:
      "A centuries-old copper market near Al-Rasheed Street, famous for the rhythmic sound of coppersmiths hammering handcrafted metal vessels.",
  },
  {
    id: "national-museum",
    name: "National Museum of Iraq",
    region: "Baghdad Governorate",
    category: "culture",
    description:
      "One of the premier antiquities museums in the Middle East, housing thousands of priceless artifacts spanning 5,000 years of Mesopotamian history.",
  },
  {
    id: "imam-ali",
    name: "Imam Ali Mosque",
    region: "Najaf",
    category: "religious",
    description: "A major Islamic architectural landmark.",
  },
  {
    id: "imam-hussein",
    name: "Imam Hussein Shrine",
    region: "Karbala",
    category: "religious",
    description: "An important spiritual and historical shrine.",
  },
  {
    id: "al-abbas",
    name: "Al-Abbas Shrine",
    region: "Karbala",
    category: "religious",
    description: "An important spiritual and historical shrine.",
  },
  {
    id: "kadhimiya",
    name: "Al-Kadhimiya Mosque",
    region: "Baghdad",
    category: "religious",
    description: "A key historical mosque featuring a gold dome and Islamic tilework.",
  },
  {
    id: "abu-hanifa",
    name: "Abu Hanifa Mosque",
    region: "Baghdad",
    category: "religious",
    description: "A key historical mosque featuring a gold dome and Islamic tilework.",
  },
  {
    id: "kufa",
    name: "Al-Kufa Mosque",
    region: "Najaf",
    category: "religious",
    description: "One of the oldest extant Islamic gathering sites.",
  },
  {
    id: "sahla",
    name: "Al-Sahla Mosque",
    region: "Najaf",
    category: "religious",
    description: "One of the oldest extant Islamic gathering sites.",
  },
];
