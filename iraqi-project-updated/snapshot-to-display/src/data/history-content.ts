import source from "./history-content-ar.md?raw";
import translations from "./history-content-translations.json";
import type { Lang } from "@/lib/i18n";

type LocalizedText = Record<Lang, string>;

export type HistoryTopic = {
  id: string;
  date: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  photo: string;
  fullText: LocalizedText;
};

const metadata: Omit<HistoryTopic, "fullText">[] = [
  {
    id: "introduction",
    date: {
      en: "From the first cities to 1921",
      ar: "من أولى المدن إلى عام ١٩٢١",
      ru: "От первых городов до 1921 года",
    },
    title: {
      en: "A continuous civilizational story",
      ar: "تمهيد",
      ru: "Непрерывная история цивилизации",
    },
    summary: {
      en: "On the Tigris and Euphrates, some of the first cities, writing systems and written laws emerged. This is a journey from Sumer to the modern Iraqi state, tracing how each generation built on what came before.",
      ar: "على ضفاف دجلة والفرات وُلدت أولى المدن، وأولى الكتابات، وأولى القوانين المدوّنة. هذه رحلة في تاريخ العراق من سومر إلى قيام الدولة الحديثة، تُظهر كيف بنى كل جيلٍ على ما تركه من قبله.",
      ru: "На берегах Тигра и Евфрата возникли одни из первых городов, письменностей и письменных законов. Это путь от Шумера до современного Ирака, показывающий, как каждое поколение опиралось на достижения предшественников.",
    },
    photo: "Ziggurat of Ur",
  },
  {
    id: "geography",
    date: {
      en: "From the 6th millennium BCE",
      ar: "منذ الألف السادس قبل الميلاد",
      ru: "С VI тысячелетия до н. э.",
    },
    title: {
      en: "Land and people",
      ar: "الفصل الأول: الأرض والإنسان — الجغرافيا التي صنعت حضارة",
      ru: "Земля и люди",
    },
    summary: {
      en: "The rivers brought fertile soil, but their unpredictable floods made irrigation a shared challenge. Organizing water helped shape administration and the state, while shortages of stone and metal encouraged long-distance trade, accounting and writing.",
      ar: "منح النهران العراق تربةً خصبة، لكن فيضانهما العنيف أجبر الناس على التعاون في الريّ، ومن هذا التعاون وُلدت الإدارة والدولة. وفقر البلاد بالحجر والمعادن دفع أهلها إلى التجارة، ومن التجارة جاءت الحاجة إلى الحساب والكتابة.",
      ru: "Реки принесли плодородную почву, но непредсказуемые разливы сделали орошение общей задачей. Организация водоснабжения способствовала появлению управления и государства, а нехватка камня и металлов — развитию торговли, счёта и письменности.",
    },
    photo: "Old Basra",
  },
  {
    id: "sumer",
    date: {
      en: "c. 4th millennium BCE",
      ar: "نحو الألف الرابع قبل الميلاد",
      ru: "Около IV тысячелетия до н. э.",
    },
    title: {
      en: "Sumer: the dawn of civilization",
      ar: "الفصل الثاني: فجر الحضارة — سومر",
      ru: "Шумер: заря цивилизации",
    },
    summary: {
      en: "In southern Iraq, cities such as Uruk and Ur grew around the 4th millennium BCE. Scribes developed cuneiform on clay tablets, schools emerged, and temples and ziggurats became centers of city life.",
      ar: "في جنوب العراق، نحو الألف الرابع قبل الميلاد، قامت أولى المدن الكبرى مثل أوروك وأور. وهناك اخترع الكتبة الكتابة المسمارية على ألواح الطين، ونشأت أولى المدارس. وكان المعبد وزقّورته قلب المدينة: يدير الاقتصاد والتعليم والحكم.",
      ru: "На юге Ирака около IV тысячелетия до н. э. выросли крупные города, такие как Урук и Ур. Писцы создали клинопись на глиняных табличках, появились школы, а храмы и зиккураты стали центрами городской жизни.",
    },
    photo: "Ziggurat of Ur",
  },
  {
    id: "akkadian",
    date: {
      en: "c. 2334–2154 BCE",
      ar: "نحو ٢٣٣٤–٢١٥٤ قبل الميلاد",
      ru: "Около 2334–2154 годов до н. э.",
    },
    title: {
      en: "Akkad and the first empire",
      ar: "الفصل الثالث: العصر الأكدي — أول إمبراطورية",
      ru: "Аккад и первая империя",
    },
    summary: {
      en: "Around 2334 BCE, Sargon united Sumer and Akkad under a central authority. His daughter Enheduanna became the earliest known author by name, and the later Third Dynasty of Ur continued the region’s administrative and legal traditions.",
      ar: "بعد قرونٍ من الحروب بين المدن، وحّد سرجون الأكدي سومر وأكد (نحو ٢٣٣٤ ق.م) وأسّس أول إمبراطورية في التاريخ. وابتكر أدوات للحكم نسخها من بعده كل الإمبراطوريات، وكانت ابنته إنخيدوانا أول مؤلِّفةٍ معروفة بالاسم في التاريخ.",
      ru: "Около 2334 года до н. э. Саргон объединил Шумер и Аккад под властью центра. Его дочь Энхедуанна стала первым известным автором, чьё имя сохранилось, а последующая III династия Ура развивала административные и правовые традиции региона.",
    },
    photo: "Akkadian bronze head",
  },
  {
    id: "old-babylonian",
    date: {
      en: "c. 1792–1750 BCE",
      ar: "نحو ١٧٩٢–١٧٥٠ قبل الميلاد",
      ru: "Около 1792–1750 годов до н. э.",
    },
    title: {
      en: "Old Babylon and Hammurabi’s law",
      ar: "الفصل الرابع: العصر البابلي القديم — حمورابي والقانون",
      ru: "Старый Вавилон и законы Хаммурапи",
    },
    summary: {
      en: "Under Hammurabi, Babylon rose to lead central and southern Mesopotamia. His celebrated law code set out rules for trade, family life, work and injury, while written contracts and a sophisticated economy shaped daily life.",
      ar: "صعدت بابل، المدينة المتواضعة، إلى الزعامة في عهد الملك حمورابي (نحو ١٧٩٢–١٧٥٠ ق.م). وخلّد اسمه بشريعته المنقوشة على مسلّةٍ من الحجر، وهي أشهر وثيقةٍ قانونيةٍ في العالم القديم، ومعها اقتصادٌ نشطٌ وعقودٌ مكتوبة.",
      ru: "При Хаммурапи Вавилон стал ведущей державой центральной и южной Месопотамии. Его знаменитый свод законов охватывал торговлю, семейную жизнь, труд и ответственность, а письменные договоры сопровождали развитую экономику.",
    },
    photo: "Ishtar Gate",
  },
  {
    id: "assyria",
    date: {
      en: "c. 911–609 BCE",
      ar: "نحو ٩١١–٦٠٩ قبل الميلاد",
      ru: "Около 911–609 годов до н. э.",
    },
    title: {
      en: "Assyria: military power and imperial organization",
      ar: "الفصل الخامس: آشور — الدولة العسكرية والتنظيم الإمبراطوري",
      ru: "Ассирия: военная держава и имперское управление",
    },
    summary: {
      en: "Assyria grew from a northern trading city into a major empire supported by a professional army and tightly organized provinces. In Nineveh, Ashurbanipal’s library gathered more than 30,000 tablets and helped preserve the Epic of Gilgamesh.",
      ar: "من مدينةٍ تجاريةٍ صغيرة في الشمال صارت آشور أعظم إمبراطورية في الشرق القديم (٩١١–٦٠٩ ق.م) بجيشها الحديدي وإدارتها المحكمة. وفي عاصمتها نينوى جمع الملك آشوربانيبال أكبر مكتبةٍ في العالم القديم، وبها حُفظت ملحمة جلجامش.",
      ru: "Ассирия превратилась из северного торгового города в крупную империю с профессиональной армией и организованными провинциями. В Ниневии библиотека Ашшурбанапала собрала более 30 000 табличек и помогла сохранить «Эпос о Гильгамеше».",
    },
    photo: "Lamassu of Nineveh",
  },
  {
    id: "neo-babylonian",
    date: { en: "612–539 BCE", ar: "٦١٢–٥٣٩ قبل الميلاد", ru: "612–539 годы до н. э." },
    title: {
      en: "The Neo-Babylonian revival",
      ar: "الفصل السادس: بابل الحديثة — نهضةٌ أخيرةٌ وعلمٌ وعمارة",
      ru: "Нововавилонское возрождение",
    },
    summary: {
      en: "After Nineveh fell in 612 BCE, Babylon rose again under Nebuchadnezzar II. Its Ishtar Gate and monumental architecture accompanied major advances in astronomy, mathematics and medicine before Cyrus entered the city in 539 BCE.",
      ar: "بعد سقوط نينوى سنة ٦١٢ ق.م قامت الإمبراطورية البابلية الحديثة وبلغت ذروتها مع نبوخذنصّر الثاني، فصارت بابل أعظم مدن العالم، بوّابة عشتار وأسوارها وزقّورتها. وفي عهدها بلغ الفلك والرياضيات قمّةً لم تُدرَك إلا بعد قرون.",
      ru: "После падения Ниневии в 612 году до н. э. Вавилон вновь возвысился при Навуходоносоре II. Ворота Иштар и монументальная архитектура соседствовали с достижениями астрономии, математики и медицины; в 539 году до н. э. в город вступил Кир.",
    },
    photo: "Ishtar Gate",
  },
  {
    id: "achievements",
    date: { en: "Ancient Mesopotamia", ar: "بلاد الرافدين القديمة", ru: "Древняя Месопотамия" },
    title: {
      en: "Mesopotamian achievements",
      ar: "الفصل السابع: المنجز الحضاري الرافدي — الكتابة والعلم والأدب والفنّ",
      ru: "Достижения Месопотамии",
    },
    summary: {
      en: "Mesopotamia’s legacy includes writing, written law, the base-60 system, astronomy, mathematics, literature and distinctive architecture. These achievements show how knowledge accumulated across generations and communities.",
      ar: "خلاصة ما أعطاه العراق القديم للإنسانية: الكتابة، والقانون المكتوب، والنظام الستّيني، وأسس الفلك والرياضيات، وملحمة جلجامش، والزقّورة. وهذا هو معنى «التراكم الحضاري» الذي يميّز تاريخ البلاد.",
      ru: "Наследие Месопотамии включает письменность, письменное право, шестидесятеричную систему, астрономию, математику, литературу и самобытную архитектуру. Оно показывает, как знания накапливались поколениями и разными общинами.",
    },
    photo: "Akkadian bronze head",
  },
  {
    id: "classical-empires",
    date: {
      en: "539 BCE–7th century CE",
      ar: "من ٥٣٩ قبل الميلاد إلى القرن السابع الميلادي",
      ru: "539 год до н. э. — VII век н. э.",
    },
    title: {
      en: "From the Achaemenids to the Sasanians",
      ar: "الفصل الثامن: العصور الكلاسيكية — من الأخمينيين إلى الساسانيين",
      ru: "От Ахеменидов до Сасанидов",
    },
    summary: {
      en: "For roughly a thousand years, Achaemenid, Seleucid, Parthian and Sasanian powers ruled Iraq. The region remained an economic center and a meeting place for Jewish, Christian, Mandaean, Manichaean and Zoroastrian traditions.",
      ar: "نحو ألف عام حكمت العراق إمبراطورياتٌ كبرى: الفرس الأخمينيون، فالسلوقيون الإغريق، فالفرثيون، فالساسانيون. فقد العراق استقلاله لكنه بقي قلب هذه الإمبراطوريات الاقتصادي، وصار أرضاً تتجاور فيها اليهودية والمسيحية والمندائية والمانوية والزرادشتية.",
      ru: "Около тысячи лет Ираком правили Ахемениды, Селевкиды, Парфяне и Сасаниды. Регион оставался экономическим центром и местом сосуществования иудейских, христианских, манихейских, мандейских и зороастрийских традиций.",
    },
    photo: "Arch of Ctesiphon",
  },
  {
    id: "early-islamic",
    date: { en: "From c. 636 CE", ar: "من نحو ٦٣٦ للميلاد", ru: "Примерно с 636 года н. э." },
    title: {
      en: "The Islamic conquest and new cities",
      ar: "الفصل التاسع: الفتح الإسلامي وتمصير الأمصار",
      ru: "Исламское завоевание и основание новых городов",
    },
    summary: {
      en: "After the Battle of al-Qadisiyyah around 636 CE, Kufa and Basra were founded as new centers. They became hubs of Arabic grammar, language, law and learning, while earlier administrative and intellectual traditions continued to shape the region.",
      ar: "بعد معركة القادسية (نحو ٦٣٦م) دخل العراق في الحضارة الإسلامية الجديدة. أسّس المسلمون مدينتي الكوفة والبصرة، فصارتا مهد علوم النحو واللغة والفقه. ولم يقطع الفتح التراكم الحضاري، بل واصله وبنى عليه.",
      ru: "После битвы при аль-Кадисии около 636 года были основаны Куфа и Басра. Они стали центрами арабской грамматики, языка, права и учёности, продолжая прежние административные и интеллектуальные традиции региона.",
    },
    photo: "Old Basra",
  },
  {
    id: "abbasid-baghdad",
    date: {
      en: "Founded in 762 CE",
      ar: "تأسّست سنة ٧٦٢ للميلاد",
      ru: "Основана в 762 году н. э.",
    },
    title: {
      en: "Abbasid Baghdad and the flowering of knowledge",
      ar: "الفصل العاشر: بغداد العباسية — عاصمة العالم ونهضة المعرفة",
      ru: "Аббасидский Багдад и расцвет знаний",
    },
    summary: {
      en: "Caliph al-Mansur founded Baghdad as the Round City in 762 CE. It became a major center of translation, scholarship, medicine, mathematics, literature and trade, where scholars developed knowledge drawn from many traditions.",
      ar: "في سنة ٧٦٢م بنى الخليفة المنصور بغداد «مدينة السلام» على شكلٍ دائريٍّ فريد، فصارت خلال قرنٍ أعظم مدينةٍ في العالم. وفي «بيت الحكمة» ترجم العلماء تراث الأمم وأبدعوا فيه: الخوارزمي في الجبر، والرازي في الطبّ، وغيرهم.",
      ru: "В 762 году халиф аль-Мансур основал Багдад как Круглый город. Он стал крупным центром переводов, науки, медицины, математики, литературы и торговли, где учёные развивали знания разных традиций.",
    },
    photo: "Round City of Baghdad",
  },
  {
    id: "mongols-ottomans",
    date: {
      en: "From 1258 through Ottoman rule",
      ar: "من ١٢٥٨ إلى العهد العثماني",
      ru: "С 1258 года до османского периода",
    },
    title: {
      en: "From the Mongols to the Ottomans",
      ar: "الفصل الحادي عشر: من المغول إلى العثمانيين — انكسارٌ وتحوّل",
      ru: "От монголов до османов",
    },
    summary: {
      en: "The Mongols captured Baghdad in 1258, ending the Abbasid caliphate and damaging irrigation systems. Later, Iraq became contested by Ottoman and Safavid powers before coming under Ottoman rule for roughly three centuries.",
      ar: "سقطت بغداد بيد المغول سنة ١٢٥٨م وانتهت الخلافة العباسية وتضرّر الريّ والزراعة، ودخل العراق قروناً من التراجع. ثم صار ساحة صراعٍ بين العثمانيين والصفويين حتى استقرّ تحت الحكم العثماني نحو ثلاثة قرون.",
      ru: "В 1258 году монголы захватили Багдад, положив конец Аббасидскому халифату и повредив ирригационные системы. Позднее Ирак стал ареной соперничества османов и Сефевидов, а затем около трёх столетий находился под османской властью.",
    },
    photo: "Old Baghdad",
  },
  {
    id: "modern-state",
    date: { en: "1920–1932", ar: "١٩٢٠–١٩٣٢", ru: "1920–1932 годы" },
    title: {
      en: "The birth of the modern Iraqi state",
      ar: "الفصل الثاني عشر: ولادة الدولة العراقية الحديثة",
      ru: "Рождение современного Ирака",
    },
    summary: {
      en: "After British occupation and the 1920 revolt, Faisal I was crowned on 23 August 1921, uniting the former Ottoman provinces. Iraq entered the League of Nations as an independent state in 1932, while the new country worked to build shared institutions.",
      ar: "بعد الحرب العالمية الأولى احتلّت بريطانيا العراق، فاندلعت ثورة العشرين التي شارك فيها السنّة والشيعة معاً. وفي ٢٣ آب ١٩٢١ تُوِّج فيصل الأول ملكاً فوُلدت الدولة العراقية الحديثة، ونال العراق استقلاله وانضمّ إلى عصبة الأمم سنة ١٩٣٢.",
      ru: "После британской оккупации и восстания 1920 года Фейсал I был коронован 23 августа 1921 года, объединив бывшие османские провинции. В 1932 году Ирак вступил в Лигу Наций как независимое государство, продолжая создавать общие институты.",
    },
    photo: "Baghdad, 20th century",
  },
  {
    id: "iraq-today",
    date: {
      en: "1921 to the present",
      ar: "من ١٩٢١ إلى اليوم",
      ru: "С 1921 года по настоящее время",
    },
    title: {
      en: "Iraq from 1921 to the present",
      ar: "العراق من ١٩٢١ إلى اليوم",
      ru: "Ирак с 1921 года до наших дней",
    },
    summary: {
      en: "Iraq moved from monarchy to republic in 1958, then endured wars, sanctions and the upheavals after 2003. Its 2005 constitution established a federal parliamentary system; reconstruction and political, economic and social challenges continue.",
      ar: "من المملكة الهاشمية إلى جمهورية ١٩٥٨، ثم حروبٍ وحصارٍ وتحوّلاتٍ كبرى بعد ٢٠٠٣، ودستور ٢٠٠٥ الذي أقام نظاماً فيدرالياً برلمانياً. واليوم يسير العراق في طريق إعادة الإعمار والاستقرار النسبي رغم التحدّيات.",
      ru: "Ирак прошёл путь от монархии к республике в 1958 году, пережил войны, санкции и потрясения после 2003 года. Конституция 2005 года установила федеративную парламентскую систему; восстановление страны и политические, экономические и социальные задачи продолжаются.",
    },
    photo: "Baghdad, 20th century",
  },
  {
    id: "conclusion",
    date: {
      en: "A heritage built across generations",
      ar: "إرثٌ بنته أجيالٌ متعاقبة",
      ru: "Наследие многих поколений",
    },
    title: {
      en: "The meaning of accumulated heritage",
      ar: "الفصل الثالث عشر: خاتمة — في معنى التراكم الحضاري",
      ru: "Смысл накопленного наследия",
    },
    summary: {
      en: "Iraq’s history is a story of knowledge and culture passed between generations, peoples and faiths. From clay tablets to paper and Babylonian astronomy to Baghdad’s scholars, its heritage is cumulative rather than the achievement of one community alone.",
      ar: "تاريخ العراق قصة تراكمٍ حضاريٍّ لا ينقطع: من اللوح الطيني إلى الورق، ومن الفلكي البابلي إلى الخوارزمي. والحضارة ليست إنجاز قومٍ واحدٍ أو دينٍ واحد، بل ثمرة أجيالٍ وأقوامٍ وأديانٍ عبر الزمن.",
      ru: "История Ирака — это передача знаний и культуры между поколениями, народами и верованиями. От глиняных табличек до бумаги, от вавилонской астрономии до учёных Багдада — это общее наследие, созданное многими.",
    },
    photo: "Akkadian bronze head",
  },
];

const parsedSections = [
  ...source.matchAll(
    /^## ([٠-٩]+)\. ([^\n]+)\r?\n\r?\n\*\*الشرح المبسّط:\*\* ([\s\S]*?)\r?\n\r?\n\*\*الشرح الكامل:\*\*\r?\n\r?\n([\s\S]*?)(?=\r?\n---\r?\n|\r?\n## |\r?\n# الجزء)/gm,
  ),
];

if (parsedSections.length !== metadata.length) {
  throw new Error(`Expected ${metadata.length} history sections, found ${parsedSections.length}.`);
}

export const HISTORY_TOPICS: HistoryTopic[] = metadata.map((topic, index) => {
  const section = parsedSections[index];
  if (!section) throw new Error(`Missing source content for history topic ${topic.id}.`);
  const fullText = section[4] ?? "";
  const translatedText = translations as Record<"en" | "ru", Record<string, string>>;
  return {
    ...topic,
    fullText: {
      ar: fullText.trim(),
      en: translatedText.en[topic.id] ?? "",
      ru: translatedText.ru[topic.id] ?? "",
    },
  };
});

export function formatHistoryArticle(markdown: string) {
  return markdown.replace(/^\*\*([^*]+?)[.:]\*\*\s*/gm, "### $1\n\n");
}
