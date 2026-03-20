import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Cennik Szkoleń | Akademia Sway — Szkolenia Pole Dance Poznań",
  description:
    "Cennik szkoleń Akademii Sway: BASIC, INTERMEDIATE, ADVANCED, ABC DYNAMIKI, DYNAMIKA 2.0. Ceny od 599 zł. Poznań. Skontaktuj się aby potwierdzić aktualny cennik.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/cennik",
    images: [{ url: "/joanna-3.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/cennik",
  },

};
const szkolenia = [
  {
    name: "BASIC",
    price: "999",
    level: "Poziom podstawowy",
    desc: "Fundament każdego instruktora — metodyka, bezpieczeństwo, struktura lekcji.",
    href: "/szkolenia/basic",
    included: ["Skrypt szkolenia", "Nagrania z zajęć", "Dostęp do grupy wsparcia", "Certyfikat uczestnictwa"],
  },
  {
    name: "INTERMEDIATE",
    price: "1099",
    level: "Poziom średniozaawansowany",
    desc: "Praca z grupą mieszaną, progresje ćwiczeń, motywowanie kursantów.",
    href: "/szkolenia/intermediate",
    included: ["Skrypt szkolenia", "Nagrania z zajęć", "Dostęp do grupy wsparcia", "Certyfikat uczestnictwa"],
  },
  {
    name: "ADVANCED",
    price: "1199",
    level: "Poziom zaawansowany",
    desc: "Zaawansowane techniki nauczania, troubleshooting i budowanie autorskiego programu.",
    href: "/szkolenia/advanced",
    featured: true,
    included: [
      "Skrypt szkolenia ADVANCED",
      "Nagrania z zajęć",
      "Dostęp do grupy ADVANCED",
      "Certyfikat uczestnictwa",
      "Konsultacja 30 min po szkoleniu",
    ],
  },
  {
    name: "ABC DYNAMIKI",
    price: "599",
    level: "Dynamika — poziom podstawowy",
    desc: "Wprowadzenie do dynamiki: rzuty, łapania, praca w parach, bezpieczeństwo.",
    href: "/szkolenia/abc-dynamiki",
    included: ["Skrypt ABC Dynamiki", "Nagrania HD", "Dostęp do grupy wsparcia", "Certyfikat uczestnictwa"],
  },
  {
    name: "DYNAMIKA 2.0",
    price: "699",
    level: "Dynamika — poziom zaawansowany",
    desc: "Zaawansowane elementy dynamiczne, choreografia, praca w duetach.",
    href: "/szkolenia/dynamika-2-0",
    included: [
      "Skrypt DYNAMIKA 2.0",
      "Nagrania HD ze slow-motion",
      "Dostęp do grupy zaawansowanych",
      "Certyfikat uczestnictwa",
    ],
  },
];

const dodatkowe = [
  { name: "Konsultacja online", price: "150", unit: "/ 60 min", desc: "Indywidualna konsultacja metodyczna lub techniczna przez video call." },
  { name: "Konsultacja stacjonarna", price: "200", unit: "/ 60 min", desc: "Spotkanie w Poznaniu — praca z konkretnym problemem metodycznym lub technicznym." },
  { name: "Szkolenie wyjazdowe", price: "Do uzgodnienia", unit: "", desc: "Prowadzę szkolenia poza Poznaniem przy zebranej grupie chętnych — skontaktuj się po wycenę." },
];

export default function CennikPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/joanna-4.jpg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Cennik</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Inwestycja w swój rozwój
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-xl mx-auto leading-relaxed">
              Każde szkolenie to jednodniowy intensywny dzień pracy. Ceny zawierają skrypt, nagrania i wsparcie po szkoleniu.
            </p>
            <p className="mt-4 text-sm font-body text-white/60 italic">
              * Ceny mogą ulec zmianie. Skontaktuj się aby potwierdzić aktualny cennik.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Szkolenia */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">Szkolenia dla instruktorów</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {szkolenia.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.1}>
                <div className="relative h-full flex flex-col rounded overflow-hidden border border-white/20 bg-white hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-accent text-xs tracking-widest uppercase font-body mb-1 font-semibold">{s.level}</p>
                    <h3 className="font-heading text-xl font-bold text-label-dark mb-1">{s.name}</h3>
                    <p className="text-text-muted font-body text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex items-end gap-1 mb-6">
                      <span className="font-heading text-4xl font-bold text-label-dark">{s.price}</span>
                      <span className="text-accent text-lg font-body mb-1">zł</span>
                      <span className="text-text-muted text-sm font-body mb-1 ml-1">/ osoba</span>
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {s.included.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm font-body text-text-muted">
                          <span className="text-accent shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className="block px-6 py-3 text-center font-semibold text-sm tracking-wide rounded transition-all duration-200 font-body border border-accent/50 text-accent hover:bg-accent hover:text-background"
                    >
                      Dowiedz się więcej
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pakiet i rabaty */}
      <section className="py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-background border border-accent/20 rounded p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-accent text-xs tracking-widest uppercase font-body mb-2">Oferta specjalna</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Pakiet 3 szkoleń — rabat 10%</h3>
                <p className="text-text-muted font-body text-sm leading-relaxed max-w-lg">
                  Jeśli planujesz uczestniczyć w 3 lub więcej szkoleniach, przysługuje Ci zniżka 10% od łącznej ceny. Skontaktuj się ze mną, żeby ustalić szczegóły i terminy.
                </p>
              </div>
              <a
                href="mailto:akademia.sway@gmail.com?subject=Zapytanie o pakiet 3 szkoleń"
                className="shrink-0 px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover font-body"
              >
                Zapytaj o pakiet
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dodatkowe usługi */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">Dodatkowe usługi</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dodatkowe.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-surface border border-white/10 rounded p-6 h-full hover:border-accent/30 transition-colors">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{d.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-accent font-heading font-bold text-2xl">{d.price}</span>
                    {d.unit && <span className="text-text-muted text-sm font-body"> {d.unit}</span>}
                    {!d.unit && <span className="text-text-muted text-sm font-body"> zł</span>}
                  </div>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ cennik */}
      <section className="py-12 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-white">Pytania o płatności</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { q: "Jak wygląda proces zapisu i płatności?", a: "Wyślij mi wiadomość z datą szkolenia, imieniem, nazwiskiem i telefonem. Potwierdzę Twoje miejsce i wyślę dane do przelewu. Wpłata zaliczki (100 zł) rezerwuje miejsce — reszta płatna najpóźniej tydzień przed szkoleniem." },
              { q: "Czy mogę zrezygnować i odzyskać wpłatę?", a: "Rezygnacja do 14 dni przed szkoleniem — zwrot zaliczki w całości. Rezygnacja do 7 dni — zaliczka bezzwrotna, ale można ją przenieść na inny termin. W przypadkach losowych — rozmawiajmy indywidualnie." },
              { q: "Czy wystawiam faktury?", a: "Tak — wystawiam faktury na osoby prowadzące działalność gospodarczą. Poinformuj mnie o tym przy zapisie." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background rounded p-6">
                  <h3 className="font-body font-semibold text-white mb-2 text-sm">{item.q}</h3>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Gotowa się zapisać?</h2>
            <p className="text-text-muted font-body mb-8">
              Napisz do mnie — ustalimy termin i dopiszemy Cię do listy uczestniczek.
            </p>
            <a
              href="mailto:akademia.sway@gmail.com?subject=Zapytanie o szkolenie"
              className="inline-block px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
            >
              Skontaktuj się ze mną
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
