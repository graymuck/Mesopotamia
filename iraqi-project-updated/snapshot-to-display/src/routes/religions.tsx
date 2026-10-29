import { pageMeta, languageFrom } from "@/lib/seo";
import { SEO_PAGES } from "@/data/seo-content";
import { createFileRoute } from "@tanstack/react-router";
import { Divider, PageHero, Reveal } from "@/components/site";
import { CardImage } from "@/components/card-image";
import { useI18n, usePageMeta } from "@/lib/i18n";
import hero from "@/assets/hero-iraq.jpg";

export const Route = createFileRoute("/religions")({
  head: ({ match }) => pageMeta("/religions", languageFrom(match.search.lang)),
  component: Religions,
});

const GROUPS = [
  { name: "Muslims", text: "Islam is the faith of most Iraqis, followed by both Sunni and Shia communities. Iraq holds deep significance in Islamic history and scholarship.", where: "Throughout Iraq", place: "Shrines of Najaf and Karbala; Abu Hanifa Mosque, Baghdad" },
  { name: "Christians", text: "Chaldean, Assyrian, Syriac, Armenian and other churches trace their roots to the earliest centuries of Christianity, many keeping Aramaic in their liturgy.", where: "Nineveh Plain, Baghdad, Erbil, Basra", place: "Historic churches and monasteries of the Nineveh Plain" },
  { name: "Yazidis", text: "Yazidis follow an ancient monotheistic faith centered on God and the Peacock Angel, Tawûsê Melek, passed down largely through oral tradition.", where: "Sinjar and the Shekhan region", place: "Lalish, their holiest temple valley" },
  { name: "Mandaeans", text: "Mandaeans follow a Gnostic faith that honors John the Baptist. Flowing water and baptism are central to their worship.", where: "Historically the southern marshes and riverbanks; Baghdad", place: "Riverside mandi (temples)" },
  { name: "Kakai (Yarsan)", text: "The Kakai describe their faith as an esoteric tradition rooted in sacred poetry and music, centered on devotion and inner truth.", where: "Kirkuk, Nineveh and Halabja areas", place: "Shrines in the Daquq area" },
  { name: "Jews (historical community)", text: "Jews lived in Mesopotamia for over 2,500 years, since the Babylonian exile, and contributed greatly to Baghdad's culture and commerce.", where: "Historically Baghdad, Basra, Mosul and beyond", place: "Tomb of the Prophet Ezekiel, al-Kifl" },
  { name: "Baháʼís", text: "Baháʼu'lláh, founder of the Baháʼí Faith, lived in Baghdad for about ten years, where his mission was declared in the Garden of Ridván.", where: "Small communities in several cities", place: "Garden of Ridván, Baghdad" },
  { name: "Zoroastrians", text: "One of the world's oldest faiths, Zoroastrianism has a small community in the Kurdistan Region that has become more visible in recent years.", where: "Kurdistan Region", place: "Community centers in Sulaymaniyah" },
];

const IMAGES = ["muslims", "christians", "yazidis", "mandaeans", "kakai", "jews", "bahai", "zoroastrians"];

function Religions() {
  const { txt } = useI18n();
  usePageMeta(SEO_PAGES["/religions"]!.title, SEO_PAGES["/religions"]!.description);
  return (
    <>
      <PageHero img={hero} title={{ en: "Religions & Communities", ar: "الأديان والمجتمعات" }} intro={{ en: "For millennia, many faiths have shared the land between the rivers.", ar: "منذ آلاف السنين، تقاسمت أديان كثيرة الأرض بين النهرين." }} />
      <section className="container-x grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => (
          <Reveal as="article" key={g.name} className="group lift overflow-hidden rounded-2xl bg-card shadow-soft">
            <div className="overflow-hidden"><CardImage imageKey={"community-" + IMAGES[i]} /></div>
            <div className="p-5">
              <h2 className="text-xl">{txt(g.name)}</h2>
              <p className="mt-2 text-muted-foreground">{txt(g.text)}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <Divider />
      <section className="container-x">
        <p className="prose-w mx-auto text-center text-lg">
          {txt("Over thousands of years, this mosaic of communities has shaped Iraq's music, food, festivals, architecture and languages — a shared heritage that belongs to all who call it home.")}
        </p>
      </section>
    </>
  );
}
