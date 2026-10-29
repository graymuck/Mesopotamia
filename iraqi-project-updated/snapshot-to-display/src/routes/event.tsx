import { pageMeta, languageFrom } from "@/lib/seo";
import { SEO_PAGES } from "@/data/seo-content";
import { createFileRoute } from "@tanstack/react-router";
import { useId, useState, type FormEvent } from "react";
import { useI18n, usePageMeta } from "@/lib/i18n";
import { PageHero } from "@/components/site";
import { submitContactMessage } from "@/lib/contact-email";
import { CULTURAL_EVENTS } from "@/data/events";
import hero from "@/assets/hero-iraq.jpg";

export const Route = createFileRoute("/event")({
  head: ({ match }) => pageMeta("/event", languageFrom(match.search.lang)),
  component: EventPage,
});

const FAQ = [
  { q: "Do I need a ticket?", a: "No, admission is free." },
  { q: "Can I buy food there?", a: "Food will be distributed for free." },
  { q: "Can I take photos?", a: "Yes, you can take photos." },
];

function EventPage() {
  const { txt, lang } = useI18n();
  const uid = useId();
  usePageMeta(SEO_PAGES["/event"]!.title, SEO_PAGES["/event"]!.description);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [submission, setSubmission] = useState<"idle" | "sending" | "submitted" | "activation-required" | "failed">("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submission === "sending") return;
    const form = e.currentTarget;
    const f = new FormData(form);
    const err: Record<string, string> = {};
    if (!String(f.get("name")).trim()) err["name"] = txt("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(String(f.get("email")))) err["email"] = txt("Please enter a valid email.");
    if (String(f.get("message")).trim().length < 5) err["message"] = txt("Please write a short message.");
    setErrors(err);
    if (!Object.keys(err).length) {
      setSubmission("sending");
      try {
        const result = await submitContactMessage(String(f.get("name")), String(f.get("email")), String(f.get("message")));
        setSubmission(result);
        if (result === "submitted") form.reset();
      } catch {
        setSubmission("failed");
      }
    }
  };

  const field = "mt-1 w-full rounded-lg border border-input bg-card px-3 py-2";

  return (
    <>
      <PageHero img={hero} title={{ en: "Event Info", ar: "معلومات الفعالية" }} intro={{ en: "Everything you need to join us.", ar: "كل ما تحتاجه للانضمام إلينا." }} />
      <section className="container-x py-12" aria-labelledby="events-heading">
        <h2 id="events-heading" className="text-fluid-h2 mb-6">{txt("Events")}</h2>
        {CULTURAL_EVENTS.map((event) => (
          <article key={event.id} aria-labelledby={event.id + "-title"} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}
            className="rounded-2xl border-t-4 border-gold bg-card p-6 text-start shadow-soft sm:p-8">
            <h3 id={event.id + "-title"} className="max-w-4xl text-2xl text-lapis dark:text-gold sm:text-3xl">{txt(event.title)}</h3>
            <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{txt(event.description)}</p>
            <dl className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
              {([
                ["Date", event.date],
                ["Time", event.time],
                ["Venue", event.venue],
                ["Address", event.address],
              ] as const).map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm font-semibold text-turquoise">{txt(label)}</dt>
                  <dd className="mt-1 leading-7">{txt(value)}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>
      <section className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-fluid-h2 mb-6">{txt("FAQ")}</h2>
          {FAQ.map((f) => (
            <details key={f.q} className="mb-3 rounded-xl bg-card p-4 shadow-soft">
              <summary className="cursor-pointer font-semibold">{txt(f.q)}</summary>
              <p className="mt-2 text-muted-foreground">{txt(f.a)}</p>
            </details>
          ))}
        </div>
        <div id="contact" className="scroll-mt-24">
          <h2 className="text-fluid-h2 mb-6">{txt("Contact")}</h2>
            <form noValidate onSubmit={submit} aria-busy={submission === "sending"} className="space-y-4">
              {(["name", "email"] as const).map((n) => (
                <label key={n} className="block">
                  {txt(n)}
                  <input name={n} type={n === "email" ? "email" : "text"} autoComplete={n} dir={n === "email" ? "ltr" : undefined} className={`${field} ${n === "email" && lang === "ar" ? "text-end" : ""}`} aria-invalid={!!errors[n]} aria-describedby={errors[n] ? `${uid}-${n}` : undefined} />
                  {errors[n] && <span id={`${uid}-${n}`} role="alert" className="text-sm text-destructive">{errors[n]}</span>}
                </label>
              ))}
              <label className="block">
                {txt("Message")}
                <textarea name="message" rows={4} className={field} aria-invalid={!!errors["message"]} aria-describedby={errors["message"] ? `${uid}-message` : undefined} />
                {errors["message"] && <span id={`${uid}-message`} role="alert" className="text-sm text-destructive">{errors["message"]}</span>}
              </label>
              <button type="submit" disabled={submission === "sending"} className="rounded-full bg-turquoise px-6 py-3 font-semibold text-primary-foreground disabled:cursor-wait disabled:opacity-60">{txt(submission === "sending" ? "Sending…" : "Send")}</button>
              {submission === "submitted" && <p role="status" className="rounded-lg bg-turquoise/15 p-4">{txt("Your message has been submitted. Thank you!")}</p>}
              {submission === "activation-required" && <p role="status" className="rounded-lg bg-gold/15 p-4">{txt("Email delivery is awaiting confirmation by the site owner. Please try again later.")}</p>}
              {submission === "failed" && <p role="alert" className="rounded-lg bg-destructive/10 p-4 text-destructive">{txt("Your message could not be submitted. Please try again. Your text has been kept.")}</p>}
            </form>
        </div>
      </section>
    </>
  );
}
