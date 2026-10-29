import { pageMeta, languageFrom } from "@/lib/seo";
import { SEO_PAGES } from "@/data/seo-content";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/site";
import { CardImage } from "@/components/card-image";
import { useI18n, usePageMeta } from "@/lib/i18n";
import food from "@/assets/masgouf.jpg";

export const Route = createFileRoute("/food")({
  head: ({ match }) => pageMeta("/food", languageFrom(match.search.lang)),
  component: Food,
});

type Cat = "Breakfast" | "Mains" | "Street food" | "Sweets" | "Drinks";
const CATS: ("All" | Cat)[] = ["All", "Breakfast", "Mains", "Street food", "Sweets", "Drinks"];

const DISHES: { ar: string; en: string; tags: Cat[]; story: string; long: string; ing: string }[] = [
  { ar: "مسكوف", en: "Masgouf", tags: ["Mains"], story: "Carp split open and slow-grilled beside an open fire on the Tigris banks.", long: "The pride of Baghdad's riverside. The fish is butterflied, propped up beside a wood fire and cooked slowly until smoky and tender, then served with bread, pickles and onions.", ing: "Carp, salt, tamarind or tomato, onion, lemon" },
  { ar: "دولمة", en: "Dolma", tags: ["Mains"], story: "Vine leaves and vegetables stuffed with rice and spiced meat.", long: "A family-table centerpiece: onions, peppers, courgettes and vine leaves packed with seasoned rice, then simmered together and flipped onto a big platter.", ing: "Vine leaves, onion, rice, lamb, tomato, pomegranate molasses" },
  { ar: "كبة", en: "Kubba", tags: ["Mains", "Street food"], story: "Crisp rice or bulgur shells with a spiced filling, with many regional versions.", long: "From the flat Mosul kubba to the rice-shell kubbat halab, every city has its own shape and filling of minced meat, onion, nuts and raisins.", ing: "Bulgur or rice, minced meat, onion, almonds, spices" },
  { ar: "تشريب", en: "Tashreeb", tags: ["Mains"], story: "Lamb stew poured over torn bread — pure home comfort.", long: "Layers of bread soak up a rich broth of lamb, chickpeas and dried lime. Often eaten on cold mornings or during Ramadan.", ing: "Lamb, flatbread, chickpeas, dried lime, onion" },
  { ar: "تمن / برياني", en: "Timman & Biryani", tags: ["Mains"], story: "Fragrant spiced rice dishes at the heart of every feast.", long: "Iraqi biryani mixes rice with vermicelli, potatoes, nuts and baharat spices, while plain timman accompanies almost every stew.", ing: "Rice, vermicelli, chicken or lamb, nuts, baharat" },
  { ar: "صمون", en: "Samoon", tags: ["Street food"], story: "Diamond-shaped bread, fresh from the stone oven.", long: "Crusty outside and soft inside, samoon is stuffed with falafel, eggs or kebab at street stalls across the country.", ing: "Flour, yeast, salt, water" },
  { ar: "كاهي وقيمر", en: "Kahi with date syrup", tags: ["Breakfast"], story: "Flaky pastry with clotted cream and date syrup.", long: "A beloved Baghdad breakfast: layered, buttery pastry topped with thick buffalo-milk cream (geymar) and date syrup or sugar syrup.", ing: "Pastry, geymar cream, date syrup" },
  { ar: "كليجة", en: "Kleicha", tags: ["Sweets"], story: "Date-filled cookies scented with cardamom, made for Eid.", long: "Families gather to shape kleicha before Eid. The dough is perfumed with cardamom and filled with dates, nuts or sugar.", ing: "Flour, butter, dates, cardamom, sesame" },
  { ar: "بقلاوة / زلابية", en: "Baklava & Zlabia", tags: ["Sweets"], story: "Syrup-soaked pastries that shine on every sweet tray.", long: "Layers of nut-filled pastry and crisp fried spirals of zlabia, both bathed in fragrant syrup.", ing: "Filo, nuts, butter, syrup" },
  { ar: "شاي عراقي", en: "Iraqi tea with cardamom", tags: ["Drinks"], story: "Strong, sweet and served in small istikan glasses.", long: "Tea is the language of hospitality — brewed dark, often with cardamom, and offered to every guest.", ing: "Black tea, cardamom, sugar" },
  { ar: "قهوة عربية", en: "Arabic coffee", tags: ["Drinks"], story: "Bitter cardamom coffee, poured as a sign of welcome.", long: "Lightly roasted coffee with cardamom, served in tiny cups at gatherings and celebrations.", ing: "Coffee, cardamom, saffron (optional)" },
];

const ART: Record<string, string> = {
  Masgouf: "masgouf", Dolma: "dolma", Kubba: "kubba", Tashreeb: "tashreeb", "Timman & Biryani": "rice", Samoon: "samoon",
  "Kahi with date syrup": "kahi", Kleicha: "kleicha", "Baklava & Zlabia": "baklava", "Iraqi tea with cardamom": "tea", "Arabic coffee": "coffee",
};

function Food() {
  const { lang, txt } = useI18n();
  usePageMeta(SEO_PAGES["/food"]!.title, SEO_PAGES["/food"]!.description);
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState<(typeof DISHES)[number] | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) dlg.current?.showModal();
    else dlg.current?.close();
  }, [open]);
  const list = DISHES.filter((d) => cat === "All" || d.tags.includes(cat));

  return (
    <>
      <PageHero img={food} title={{ en: "Food", ar: "الطعام" }} intro={{ en: "In Iraq, a guest is never just fed — they are welcomed to a shared table that keeps on filling.", ar: "في العراق، الضيف لا يُطعَم فحسب، بل يُرحَّب به على مائدة لا تفرغ." }} />
      <section className="container-x py-12">
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={txt("Filter dishes")}>
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "border-clay bg-clay text-primary-foreground" : "border-border bg-card hover:border-clay"}`}>
              {txt(c)}
            </button>
          ))}
        </div>
        <div key={cat} className="grid gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => (
            <button key={d.en} onClick={() => setOpen(d)} className="group lift overflow-hidden rounded-2xl bg-card text-start shadow-soft">
              <div className="overflow-hidden"><CardImage imageKey={"food-" + ART[d.en]} /></div>
              <div className="p-5">
                <p className="font-display text-2xl text-clay" role={lang === "ar" ? "heading" : undefined} aria-level={lang === "ar" ? 2 : undefined}><span lang="ar" dir="rtl">{d.ar}</span></p>
                {lang !== "ar" && <h2 className="text-xl">{txt(d.en)}</h2>}
                <p className="mt-1 line-clamp-2 text-muted-foreground">{txt(d.story)}</p>
                <span className="mt-3 inline-block rounded-full bg-muted px-3 py-0.5 text-xs">{d.tags.map((x) => txt(x)).join(" · ")}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-clay p-8 text-primary-foreground md:flex-row md:items-center">
          <p className="font-display text-2xl">{txt("Taste it at the event")}</p>
          <Link to="/event" className="rounded-full bg-sand px-6 py-3 font-semibold text-ink">{txt("Event info")}</Link>
        </div>
      </section>

      <dialog ref={dlg} aria-labelledby="dish-title" onClose={() => setOpen(null)} onClick={(e) => e.target === dlg.current && setOpen(null)}
        className="m-auto w-[min(92vw,40rem)] max-h-[92vh] overflow-y-auto rounded-2xl bg-card p-0 text-card-foreground backdrop:bg-lapis/70">
        {open && (
          <div>
            <div className="mx-auto max-w-md"><CardImage imageKey={"food-" + ART[open.en]} sizes="(min-width: 448px) 448px, 92vw" /></div>
            <div className="p-6">
              {lang !== "ar" && <p className="font-display text-3xl text-clay"><span lang="ar" dir="rtl">{open.ar}</span></p>}
              <h2 id="dish-title" className="text-2xl">{lang === "ar" ? open.ar : txt(open.en)}</h2>
              <p className="mt-3">{txt(open.long)}</p>
              <h3 className="mt-4 text-lg text-turquoise">{txt("Main ingredients")}</h3>
              <p className="text-muted-foreground">{txt(open.ing)}</p>
              <button onClick={() => setOpen(null)} className="mt-6 rounded-full bg-lapis px-5 py-2 text-lapis-foreground">{txt("Close")}</button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
