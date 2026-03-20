import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import TrainingCardStack from "@/components/TrainingCardStack";
import { IconLightning, IconCalendar, IconBook, IconUsers, IconChat, IconPlay, IconAward, IconLocation, IconClock, IconLightbulb } from "@/components/Icons";


export const metadata: Metadata = {
  title: "Akademia Sway | Szkolenia dla Instruktorów Pole Dance Poznań",
  description:
    "Akademia Sway Joanna Olejniczak — jednodniowe szkolenia dla instruktorów pole dance w Poznaniu. Technika, metodyka, praktyka. Zapisz się już dziś.",
  openGraph: {
    title: "Akademia Sway | Szkolenia dla Instruktorów Pole Dance Poznań",
    description:
      "Jednodniowe szkolenia dla instruktorów pole dance. BASIC, INTERMEDIATE, ADVANCED i dynamika. Poznań.",
    images: [{ url: "/joanna-3.jpg", width: 1200, height: 630 }],
    url: "https://akademia-sway.pl",
  },
  alternates: { canonical: "https://akademia-sway.pl" },
};

const szkolenia = [
  {
    slug: "basic",
    name: "BASIC",
    desc: "Fundament każdego instruktora. Metodyka, bezpieczeństwo i struktura lekcji od podstaw.",
    level: "Poziom początkujący",
  },
  {
    slug: "intermediate",
    name: "INTERMEDIATE",
    desc: "Praca z grupą mieszaną, progresje ćwiczeń i skuteczne techniki motywowania kursantów.",
    level: "Poziom średniozaawansowany",
  },
  {
    slug: "advanced",
    name: "ADVANCED",
    desc: "Zaawansowane techniki nauczania, troubleshooting i budowanie autorskiego programu szkoleń.",
    level: "Poziom zaawansowany",
  },
  {
    slug: "abc-dynamiki",
    name: "ABC DYNAMIKI",
    desc: "Wprowadzenie do dynamiki w pole dance — podstawy rzutów, łapań i bezpieczeństwa pracy w parach.",
    level: "Poziom podstawowy",
  },
  {
    slug: "dynamika-2-0",
    name: "DYNAMIKA 2.0",
    desc: "Zaawansowane elementy dynamiczne, choreografia i praca w duetach na najwyższym poziomie.",
    level: "Poziom zaawansowany",
  },
];

const features = [
  {
    icon: <IconLightning className="w-6 h-6" />,
    title: "Praktyka ponad teorię",
    desc: "Skupiam się na tym, co naprawdę działa na sali — żadnych zbędnych teorii bez pokrycia.",
  },
  {
    icon: <IconCalendar className="w-6 h-6" />,
    title: "Jednodniowe szkolenia",
    desc: "Przystępna formuła bez wielomiesięcznych zobowiązań. Jeden intensywny dzień — realne efekty.",
  },
  {
    icon: <IconBook className="w-6 h-6" />,
    title: "Skrypt + nagrania",
    desc: "Nie tylko notatki — kompendia wiedzy z rysunkami, definicjami, planami treningowymi i spisami figur. Stworzone tak, by łatwo wracać do treści i skutecznie utrwalać wiedzę.",
  },
  {
    icon: <IconUsers className="w-6 h-6" />,
    title: "Wsparcie po szkoleniu",
    desc: "Dołączasz do grupy wsparcia — pytaj, konsultuj, dziel się wątpliwościami bez limitu czasowego.",
  },
];

const opinie = [
  {
    name: "Uczestniczka szkolenia",
    city: "Polska",
    text: "Uważam, że ogrom przekazanej wiedzy jest ogromny! Aż jestem w szoku, że za taką cenę otrzymałam taką jakość. Dzielisz się wszystkim w sposób naturalny, zrozumiały i przyjemny w odbiorze. Skupiasz uwagę, motywujesz i wspierasz, a do tego masz fenomenalną wiedzę. Jesteś cudownym trenerem, świetnym pedagogiem i znakomitym sportowcem. Szacun Asia!",
  },
  {
    name: "Uczestniczka szkolenia",
    city: "Polska",
    text: "Było wszystko czego potrzebowałam. Super poprowadzone od podstaw, które są bardzo często pomijane. Nawet po kilku latach bycia instruktorem można było sobie odświeżyć wiedzę, nabrać nowych inspiracji. Atmosfera świetna, bez rywalizacji. Rozłożenie elementów na najmniejsze czynniki — super. Sposoby asekuracji — to co pokazałaś było super!",
  },
  {
    name: "Uczestniczka szkolenia",
    city: "Polska",
    text: "Asia jest tytanem pracy, trenerką z ogromnym doświadczeniem, która potrafi przekazywać wiedzę i krok po kroku uczyć nowych rzeczy. Bardzo czujnie wyłapuje błędy i potrafi je korygować. Przyjazna atmosfera, bez oceniania, ze swobodą wypowiedzi i zadawania pytań — na maksa polecam!",
  },
  {
    name: "Uczestniczka szkolenia",
    city: "Polska",
    text: "Nawet jak się niby wszystko w teorii wie, to ilość informacji powala! Super szkolenie, totalnie warto się wybrać. Polecam z całego serca!",
  },
  {
    name: "Uczestniczka szkolenia",
    city: "Polska",
    text: "Technika w praktyce i teorii, dużo wprawek, regresji i progresji; asekuracja i rozgrzewka. 10/10",
  },
  {
    name: "Uczestniczka szkolenia",
    city: "Polska",
    text: "Tłumaczone na chłopski rozum, wszystko jasne. Świetnie i przejrzyście napisany skrypt, który będzie dużą pomocą!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/joanna-3.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <AnimatedSection>
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-body mb-4">
              Joanna Olejniczak
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Akademia{" "}
              <span className="text-gradient">Sway</span>
            </h1>
            <p className="text-xl sm:text-2xl text-text-secondary font-heading italic mb-4">
              Szkolenia dla instruktorów pole dance
            </p>
            <p className="text-base sm:text-lg text-text-muted font-body max-w-xl mx-auto mb-10 leading-relaxed">
              Rozwijaj swoje umiejętności i ucz innych świadomie, technicznie, z pasją.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/szkolenia"
                className="px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
              >
                Zobacz szkolenia
              </Link>
              <Link
                href="/o-mnie"
                className="px-8 py-3.5 border border-white/40 text-white font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:border-accent hover:text-accent font-body"
              >
                O mnie
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* DLACZEGO AKADEMIA SWAY */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">
              Dlaczego warto
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Dlaczego Akademia Sway?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-surface-2 gold-border-top p-6 rounded h-full hover:bg-surface transition-colors duration-200">
                  <div className="w-10 h-10 text-accent mb-4 flex items-center justify-center">{f.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-text-muted text-sm font-body leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SZKOLENIA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-label-dark text-xs tracking-[0.3em] uppercase font-body mb-3">
              Oferta
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Moje szkolenia
            </h2>
            <p className="text-white font-body mt-4 max-w-xl mx-auto">
              Każde szkolenie to jednodniowa, intensywna sesja pełna wiedzy, praktyki i narzędzi, które zaczniesz stosować następnego dnia.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {szkolenia.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.1}>
                <div className="group bg-background border border-white/10 hover:border-accent/50 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <p className="text-accent text-xs tracking-widest uppercase font-body mb-2">
                      {s.level}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-wide">
                      {s.name}
                    </h3>
                    <p className="text-text-muted text-sm font-body leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href={`/szkolenia/${s.slug}`}
                      className="inline-flex items-center gap-2 text-accent text-sm font-body font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Dowiedz się więcej
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/szkolenia"
              className="inline-block px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
            >
              Wszystkie szkolenia
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* O JOANNIE */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="/joanna.jpg"
                  alt="Joanna Olejniczak — Akademia Sway"
                  className="w-full rounded object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 rounded bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-accent/10 border border-accent/30 rounded px-4 py-3">
                  <p className="text-accent font-heading text-sm font-bold">10+ lat</p>
                  <p className="text-white/70 text-xs font-body">doświadczenia w pole dance</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">
                O mnie
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Cześć, jestem{" "}
                <span className="text-gradient">Joanna</span>
              </h2>
              <p className="text-text-muted font-body leading-relaxed mb-4">
                Prowadzę Akademię Sway — miejsce, gdzie instruktorzy pole dance zdobywają wiedzę, pewność siebie i konkretne narzędzia do pracy z kursantami. Moją misją jest przekazywanie techniki w sposób bezpieczny, świadomy i inspirujący.
              </p>
              <p className="text-text-muted font-body leading-relaxed mb-4">
                Tańczę i uczę od 2016 roku — ponad 10 lat. Startowałam w zawodach solo i duet, prowadziłam warsztaty w całej Polsce i znam z własnego doświadczenia, czego naprawdę potrzebuje instruktor na początku drogi.
              </p>
              <p className="text-text-muted font-body leading-relaxed mb-8">
                Wierzę, że świetny instruktor to nie tylko ktoś, kto umie — to ktoś, kto potrafi uczyć innych tak, żeby chcieli wracać.
              </p>
              <Link
                href="/o-mnie"
                className="inline-block px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
              >
                Poznaj moją historię
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* OPINIE */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-label-dark text-xs tracking-[0.3em] uppercase font-body mb-3">
              Opinie
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Co mówią instruktorki?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opinie.map((o, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background border border-white/10 rounded p-6 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary font-body text-sm leading-relaxed italic mb-4">
                    &ldquo;{o.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold font-heading">
                      {o.name[0]}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold font-body">{o.name}</p>
                      <p className="text-text-muted text-xs font-body">{o.city}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NAJBLIŻSZE SZKOLENIE */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-surface-2 border border-accent/20 rounded p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-2">
                  Najbliższe szkolenie
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                  ABC DYNAMIKI — 28 marca 2025
                </h2>
                <p className="text-text-muted font-body max-w-xl leading-relaxed">
                  Wprowadzenie do dynamiki w pole dance. Podstawy rzutów, łapań i bezpieczeństwa pracy w parach. Szkolenie jednodniowe, intensywne — dla instruktorów gotowych poszerzyć swój warsztat.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm font-body text-text-muted">
                  <span className="flex items-center gap-1.5"><IconLocation className="w-4 h-4 text-accent shrink-0" /> Poznań</span>
                  <span className="flex items-center gap-1.5"><IconClock className="w-4 h-4 text-accent shrink-0" /> Jeden dzień intensywny</span>
                  <span className="flex items-center gap-1.5"><IconLightbulb className="w-4 h-4 text-accent shrink-0" /> Skrypt + nagrania w cenie</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-w-fit">
                <a
                  href="mailto:akademia.sway@gmail.com?subject=Zapis na ABC DYNAMIKI 28.03"
                  className="px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded text-center transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body whitespace-nowrap"
                >
                  Zapisz się
                </a>
                <a
                  href="https://www.instagram.com/akademia.sway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border border-white/20 text-text-secondary font-semibold text-sm tracking-wide rounded text-center transition-all duration-200 hover:border-accent hover:text-accent font-body whitespace-nowrap"
                >
                  Śledź na IG
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      

      {/* GALERIA ZE SZKOLEŃ */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="text-label-dark text-xs tracking-[0.3em] uppercase font-body mb-3">Społeczność</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Zdjęcia ze szkoleń</h2>
            <p className="text-text-muted font-body mt-3">Każde szkolenie kończy się tak samo — uśmiechem i skryptem w rękach.</p>
          </AnimatedSection>
          <AnimatedSection>
            <TrainingCardStack /></AnimatedSection>
        </div>
      </section>

      {/* KALENDARZ SZKOLEŃ */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-label-dark text-xs tracking-[0.3em] uppercase font-body mb-3">Terminarz</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Kalendarz szkoleń 2026</h2>
            <p className="text-text-muted font-body mt-4">Zarezerwuj miejsce zanim się wypełni.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
              {[
                
                { date: "25.01", name: "SZKOLENIE ADVANCED", desc: "Handspring & Deadlift & Zeskoki & Regripy · 1199 zł", hours: "9 h", status: "odbyło się", slug: "advanced" },
                { date: "28.03", name: "SZKOLENIE ABC DYNAMIKI", desc: "Podstawy dynamiki & Progresje · 599/649 zł", hours: "5 h", status: "zapisy otwarte", slug: "abc-dynamiki" },
                { date: "29.03", name: "SZKOLENIE BASIC", desc: "Plan Treningowy, Asekuracja, Technika · 999 zł", hours: "9 h", status: "zapisy otwarte", slug: "basic" },
                { date: "18.04", name: "SZKOLENIE DYNAMIKA 2.0", desc: "Feniksy, Salta i ich wariacje & Asekuracja · 699 zł", hours: "5,5 h", status: "zapisy otwarte", slug: "dynamika-2-0" },
                { date: "26.04", name: "SZKOLENIE INTERMEDIATE", desc: "Technika, Asekuracja, Inverty & Progresje", hours: "9 h", status: "zapisy otwarte", slug: "intermediate" },
              ].map((item) => (
                <Link key={item.slug} href={`/szkolenia/${item.slug}`} className="group flex items-center gap-4 bg-background border border-white/10 rounded p-4 hover:border-accent/40 transition-all duration-200">
                  <div className="shrink-0 w-14 h-14 bg-accent/10 rounded flex flex-col items-center justify-center">
                    <span className="text-accent font-heading font-bold text-sm leading-none">{item.date.split(".")[0]}</span>
                    <span className="text-accent/60 font-body text-xs">.{item.date.split(".")[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-body font-semibold text-sm group-hover:text-accent transition-colors">{item.name}</p>
                    <p className="text-text-muted font-body text-xs mt-0.5">{item.desc} · {item.hours}</p>
                  </div>
                  <div className="shrink-0">
                    <span className={`text-xs font-body px-2 py-1 rounded ${item.status === "ostatnie miejsca" ? "bg-red-500/20 text-red-400" : "bg-accent/10 text-accent"}`}>
                      {item.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/kontakt" className="inline-block px-8 py-3 bg-accent text-background font-semibold text-sm rounded hover:bg-accent-hover transition-colors font-body">
                Zapisz się na szkolenie
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
