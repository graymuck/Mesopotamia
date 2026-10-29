import { ThemeToggle } from "@/components/theme-toggle";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/contact-email";
import { LANGUAGE_OPTIONS, useI18n, type L } from "@/lib/i18n";
import hero from "@/assets/hero-iraq.jpg";
import zig from "@/assets/ziggurat-ur.jpg";
import food from "@/assets/masgouf.jpg";
import calli from "@/assets/calligraphy.jpg";

export const NAV = [
  { to: "/", key: "nav.home", img: hero },
  { to: "/history", key: "nav.history", img: zig },
  { to: "/tourism", key: "nav.tourism", img: zig },
  { to: "/food", key: "nav.food", img: food },
  { to: "/religions", key: "nav.religions", img: hero },
  { to: "/languages", key: "nav.languages", img: calli },
  { to: "/event", key: "nav.event", img: hero },
] as const;

/** Event details — replace placeholders with real info. */
export const EVENT = {
  date: "[DATE / TIME]",
  venue: "[CITY, VENUE, ADDRESS]",
  entry: "[FREE / PRICE]",
  contact: CONTACT_EMAIL,
};

/** Header language picker: English, Arabic and Russian, each written in its own language. */
function LanguageSelector() {
  const { lang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const cur = LANGUAGE_OPTIONS.find((o) => o.code === lang) ?? LANGUAGE_OPTIONS[0]!;

  useEffect(() => {
    if (!open) return;
    wrap.current?.querySelector<HTMLElement>('[aria-checked="true"]')?.focus();
    const onDown = (e: MouseEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btn.current?.focus(); }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const items = Array.from(wrap.current?.querySelectorAll<HTMLElement>('[role="menuitemradio"]') ?? []);
        const i = items.indexOf(document.activeElement as HTMLElement);
        items[(i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length]?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div ref={wrap} className="relative">
      <button
        ref={btn}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${t("nav.language")}: ${cur.label}`}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 items-center gap-1.5 rounded-full border border-gold/60 px-3 text-sm hover:bg-gold/20"
      >
        <span aria-hidden className="text-base leading-none">{cur.flag}</span>
        <span className="font-semibold">{cur.short}</span>
        <svg viewBox="0 0 12 12" className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M2 4l4 4 4-4" /></svg>
      </button>
      {open && (
        <div role="menu" aria-label={t("nav.language")} className="absolute end-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-card p-1 text-card-foreground shadow-soft">
          {LANGUAGE_OPTIONS.map((o) => (
            <Link
              to="."
              search={prev => ({ ...prev, lang: o.code })}
              key={o.code}
              role="menuitemradio"
              aria-checked={o.code === lang}
              lang={o.code}
              dir={o.code === "ar" ? "rtl" : "ltr"}
              onClick={() => { setOpen(false); btn.current?.focus(); }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-start hover:bg-muted focus:bg-muted focus:outline-none ${o.code === lang ? "font-semibold text-turquoise" : ""}`}
            >
              <span aria-hidden className="text-xl leading-none">{o.flag}</span>
              <span className="flex-1">{o.label}</span>
              {o.code === lang && <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M3 8.5l3.2 3L13 4.5" /></svg>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState<string>(hero);
  const burger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const first = panel.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panel.current) {
        const els = Array.from(panel.current.querySelectorAll<HTMLElement>("a,button"));
        const f = els[0]!, l = els[els.length - 1]!;
        if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus(); }
        else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      burger.current?.focus();
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-ink">
        {t("nav.skip")}
      </a>
      <header className="fixed inset-x-0 top-0 z-[60] bg-lapis/85 text-lapis-foreground backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-2 font-display text-lg">
            <Star /> <span className="truncate">{t("event.name")}</span>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <Link to="/event" className="hidden rounded-full bg-turquoise px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110 sm:inline-block">
              {t("nav.visit")}
            </Link>
            <button
              ref={burger}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={t("nav.menu")}
              onClick={() => setOpen((o) => !o)}
              className="relative z-[70] grid h-11 w-11 place-items-center rounded-full hover:bg-lapis-foreground/10"
            >
              <span className="relative block h-4 w-6">
                <span className={`absolute inset-x-0 top-0 h-0.5 bg-current transition ${open ? "top-[7px] rotate-45" : ""}`} />
                <span className={`absolute inset-x-0 top-[7px] h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transition ${open ? "bottom-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.menu")}
        className={`fixed inset-0 z-[55] bg-lapis text-lapis-foreground transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
      >
        <img src={bg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity" />
        <div ref={panel} className="container-x relative flex h-full flex-col justify-center gap-2 pt-16" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          {NAV.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                onMouseEnter={() => setBg(n.img)}
                onFocus={() => setBg(n.img)}
                aria-current={active ? "page" : undefined}
                className={`w-fit font-display text-[clamp(1.75rem,5vw,3.5rem)] transition hover:text-gold focus:text-gold ${active ? "text-gold" : ""}`}
              >
                {t(n.key)}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Star({ className = "h-5 w-5 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 1l2.6 6.3L21 5l-2.3 6.4L23 12l-4.3 1.6L21 19l-6.4-2.3L12 23l-2.6-6.3L3 19l2.3-6.4L1 12l4.3-1.6L3 5l6.4 2.3z" />
    </svg>
  );
}

export function Divider() {
  return (
    <div className="container-x my-14 flex items-center gap-4 text-gold" aria-hidden>
      <span className="h-px flex-1 bg-gold/50" />
      <svg viewBox="0 0 120 20" className="h-5 w-28" fill="currentColor">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${10 + i * 25} 2 l6 8 -6 8 -6 -8z`} opacity={i === 2 ? 1 : 0.55} />
        ))}
      </svg>
      <span className="h-px flex-1 bg-gold/50" />
    </div>
  );
}

export function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "article" | "section" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("is-visible"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e) return;
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag ref={ref as any} className={`reveal ${className}`}>{children}</Tag>;
}

/** Gradient placeholder for photos not yet available. Swap for <img> when real photos arrive. */
export function PhotoPlaceholder({ label, tone = "lapis", className = "" }: { label: string; tone?: "lapis" | "clay" | "gold"; className?: string }) {
  const { txt } = useI18n();
  const toneCls = tone === "clay" ? "from-clay to-gold" : tone === "gold" ? "from-gold to-turquoise" : "from-lapis to-turquoise";
  return (
    <div role="img" aria-label={label} className={`zoom-img relative grid aspect-[4/3] place-items-center bg-gradient-to-br ${toneCls} ${className}`}>
      <Star className="absolute h-24 w-24 text-lapis-foreground/15" />
      <span className="relative rounded-full bg-lapis/50 px-3 py-1 text-xs text-lapis-foreground">{txt("Photo")}: {txt(label)}</span>
    </div>
  );
}

export function PageHero({ title, intro, img }: { title: L; intro: L; img?: string }) {
  const { tr } = useI18n();
  return (
    <section className="relative overflow-hidden bg-lapis pb-16 pt-32 text-lapis-foreground">
      {img && <img src={img} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />}
      <div className="absolute inset-0 bg-hero" aria-hidden />
      <div className="container-x relative">
        <h1 className="text-fluid-hero">{tr(title)}</h1>
        <p className="prose-w mt-4 text-lg opacity-90">{tr(intro)}</p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { t, txt, lang } = useI18n();
  return (
    <footer className="mt-20 bg-lapis py-12 text-lapis-foreground">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <p className="flex items-center gap-2 font-display text-xl"><Star /> {t("event.name")}</p>
          <p className="mt-2 text-sm opacity-80">{t("footer.rights")}</p>
        </div>
        <nav aria-label={t("footer.explore")}>
          <h2 className="text-gold">{t("footer.explore")}</h2>
          <ul className="mt-1 space-y-1 text-sm">
            {NAV.slice(1).map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-85 hover:text-gold hover:opacity-100">{t(n.key)}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-gold">{t("footer.contact")}</h2>
          <Link to="/event" hash="contact" className="block text-sm opacity-80 hover:text-gold">{txt("Send a message")}</Link>
        </div>
      </div>
      <div className="container-x mt-10 flex flex-col items-start justify-between gap-5 border-t border-lapis-foreground/15 pt-6 text-sm sm:flex-row sm:items-center">
        <div className="min-w-0 space-y-2 text-start leading-relaxed">
          <p>{txt("Website developed by")} <bdi lang={lang}>{txt("Almohammed Zaid Ali")}</bdi></p>
          <p>{txt("Email:")} <a href={`mailto:${CONTACT_EMAIL}`} className="break-all underline decoration-lapis-foreground/40 underline-offset-4 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><bdi dir="ltr">{CONTACT_EMAIL}</bdi></a></p>
        </div>
        <a href="#main" className="shrink-0 hover:text-gold">↑ {t("footer.top")}</a>
      </div>
    </footer>
  );
}
