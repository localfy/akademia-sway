import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ServiceSchema } from "@/components/SchemaOrg";
import { IconAward, IconBook, IconCalendar, IconChat, IconCurrency, IconLocation, IconPlay } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Szkolenie ABC Dynamiki Pole Dance | Akademia Sway",
  description:
    "ABC Dynamiki — wprowadzenie do dynamiki w pole dance. Podstawy rzutów, łapań i bezpieczeństwa. Najbliższy termin: 28 marca 2026. Akademia Sway, Poznań.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/szkolenia/abc-dynamiki",
    images: [{ url: "/group-abc.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/szkolenia/abc-dynamiki",
  },

};
const faq = [
  {
    q: "Czym jest dynamika w pole dance?",
    a: "Dynamika to techniki oparte na impulście ruchu — spiny, wymachy, nabiegi, wskoki i wachlarze. Elementy dynamiczne sprawiają, że jazda na rurce nabiera energii i spektakularności. Na tym szkoleniu uczysz się jak bezpiecznie wprowadzać dynamikę u siebie i swoich kursantów.",
  },
  {
    q: "Czy potrzebuję partnera na szkolenie?",
    a: "Nie — na szkoleniu pracujemy w parach, ale dobieramy je wspólnie na miejscu. Przyjdź sama lub ze znajomą z branży.",
  },
  {
    q: "Jaki poziom jest potrzebny?",
    a: "Twoje umiejętności powinny być na poziomie minimum średnim. Musisz znać bazowe obroty na 1 ręce — nie muszą być opanowane idealnie, czyszczeniem tych elementów zajmiemy się właśnie na szkoleniu.",
  },
  {
    q: "Czy to szkolenie tylko dla instruktorów?",
    a: "Szkolenie ABC DYNAMIKI jest dedykowane głównie instruktorom, ale także kursantom, którzy chcą dowiedzieć się jak poprawić dynamikę u siebie. Nawet jeśli nie zrobisz wszystkiego, wyjdziesz z mnóstwem wskazówek i materiału na przyszłość.",
  },
  {
    q: "Czy mogę kupić sam skrypt bez udziału w szkoleniu?",
    a: "Nie ma takiej możliwości. Skrypt to dodatek do szkolenia: ważny, ale i nieodłączny. Zapraszamy po wiedzę teoretyczną i praktyczną — właśnie w takiej formie przynosi najlepsze efekty!",
  },
];

export default function AbcDynamikiPage() {
  return (
    <>
            <ServiceSchema
        name="Szkolenie ABC DYNAMIKI — podstawy dynamiki w pole dance"
        description="Jednodniowe szkolenie dla instruktorów pole dance. Technika, metodyka, asekuracja. Akademia Sway Joanna Olejniczak, Poznań."
        price="599"
        url="https://akademia-sway.pl/szkolenia/abc-dynamiki"
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/group-abc.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm font-body text-text-muted mb-6">
              <Link href="/" className="hover:text-accent transition-colors">Strona główna</Link>
              <span>/</span>
              <Link href="/szkolenia" className="hover:text-accent transition-colors">Szkolenia</Link>
              <span>/</span>
              <span className="text-accent">ABC DYNAMIKI</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-accent text-background text-xs font-bold font-body px-3 py-1 rounded mb-4">
              <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> Najbliższy termin:</span> 28 marca 2026
            </div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Szkolenie specjalistyczne</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ABC Dynamiki
            </h1>
            <p className="text-text-secondary font-body text-lg leading-relaxed max-w-2xl">
              Jeśli chcesz wiedzieć jak uczyć innych latania na statycznej rurce — od zupełnych podstaw po poziom średniozaawansowany — to szkolenie jest dla Ciebie. Dużo techniki, regresji i progresji, ćwiczenia do pracy w domu i obszerny skrypt.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Czas trwania:</span>
                <span className="text-text-muted ml-1">5 h (12:30–17:30)</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Cena:</span>
                <span className="text-text-muted ml-1">599 zł / 649 zł</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Dla kogo:</span>
                <span className="text-text-muted ml-1">Instruktorzy + kursanci (poziom średni)</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
              O szkoleniu
            </h2>
            <div className="space-y-4 text-text-muted font-body leading-relaxed">
              <p>
                Szkolenie ABC DYNAMIKI jest dedykowane głównie instruktorom, ale także kursantom, którzy chcą dowiedzieć się jak poprawić dynamikę u siebie. Jeśli chcesz wiedzieć jak uczyć innych latania na statycznej rurce od zupełnych podstaw po poziom średniozaawansowany, na co zwracać uwagę jeżeli chodzi o technikę, a także jak eliminować najczęstsze błędy — to szkolenie będzie właśnie dla Ciebie.
              </p>
              <p>
                Będzie dużo techniki, wiele regresji oraz progresji, mnóstwo ćwiczeń, które będą do wypracowania &ldquo;w domu&rdquo;. Każdy dostanie również obszerny skrypt, który pomoże uprządkować wiedzę ze szkolenia.
              </p>
              <p className="font-semibold text-white">
                Podsumowując — dostaniesz materiały, które przeniosą dynamikę, Twoją i Twoich kursantów, na wyższy poziom. To szkolenie to esencja praktycznej wiedzy w pigułce.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
              Program szkolenia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Skupimy się na zrozumieniu najważniejszych zasad, zaczynając od zupełnych podstaw",
                "Rozłożymy dynamiczne ruchy na czynniki pierwsze",
                "Poznacie wiele progresji spinów na statyku — od najłatwiejszych do bardziej złożonych",
                "Opanujecie różne nabiegi, wskoki i wymachy",
                "Poznacie różnice między ruchem po kole i po wahadle",
                "Dowiecie się, jak wprowadzić statyk na treningach oraz jakie wprawki stosować podczas rozgrzewki",
                "Uświadomicie sobie błędy, które można popełnić, oraz metody jak ich uniknąć. Nauczycie się również jak asekurować kursantów przy dynamicznych elementach",
                "Spróbujecie dynamicznych ruchów — przykładowo takich jak swingi czy wachlarze (leg fans)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface rounded p-4">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Dla kogo?</h2>
            <div className="bg-surface border border-accent/20 rounded p-6 space-y-4 text-text-muted font-body leading-relaxed">
              <p>
                Szkolenie ABC DYNAMIKI jest dedykowane głównie dla <strong className="text-white">instruktorów</strong>, ale także <strong className="text-white">kursantów</strong>, którzy chcą dowiedzieć się jak poprawić dynamikę u siebie.
              </p>
              <p>
                Jeśli chcesz się zapisać, Twoje umiejętności powinny być na poziomie minimum średnim. Musisz znać bazowe obroty na 1 ręce — oczywiście nie muszą być opanowane idealnie. Czyszczeniem tych elementów zajmiemy się właśnie na szkoleniu.
              </p>
              <p>
                Będą uproszczenia oraz utrudnienia różnych spinów — i nawet jeśli nie zrobisz wszystkiego, to będziesz mieć mnóstwo wskazówek i materiału na przyszłość!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Co otrzymujesz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <IconAward className="w-6 h-6" />, title: "Certyfikat", desc: "Każdy uczestnik otrzymuje certyfikat ukończenia szkolenia Akademii Sway." },
                { icon: <IconBook className="w-6 h-6" />, title: "Obszerny skrypt", desc: "To nie tylko notatki — to kompleksowe wsparcie do pracy po szkoleniu. Zawiera uporządkowanie i uzupełnienie wiedzy, zdjęcia/rysunki ilustrujące omawiane zagadnienia, definicje i rozwinięcia kluczowych pojęć oraz plany treningowe lub spisy figur. Skrypty Akademii Sway to kompendia wiedzy — stworzone tak, by można było łatwo wrócić do omawianych treści i skutecznie utrwalać wiedzę." },
                { icon: <IconPlay className="w-6 h-6" />, title: "Nagrania z zajęć", desc: "Możliwość powrotu do omawianych technik i ćwiczeń — ucz się we własnym tempie po szkoleniu." },
                { icon: <IconChat className="w-6 h-6" />, title: "Wsparcie na grupie", desc: "Dostęp do grupy uczestników — możesz zadawać pytania i rozwiać wątpliwości po szkoleniu." },
              ].map((item, i) => (
                <div key={i} className="bg-surface-2 gold-border-top p-6 rounded">
                  <div className="w-10 h-10 text-accent mb-4 flex items-center justify-center">{item.icon}</div>
                  <h3 className="font-heading text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Najczęstsze pytania</h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="bg-surface rounded p-6">
                  <h3 className="font-body font-semibold text-white mb-2 text-sm">{item.q}</h3>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-surface-2 border border-accent/20 rounded p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold font-body px-3 py-1 rounded mb-4">
                <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> Najbliższy termin:</span> 28 marca 2026
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                Gotowa na dynamikę?
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-body text-text-muted mb-6">
                <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> 28.03 · 12:30–17:30</span>
                <span className="inline-flex items-center gap-1.5"><IconLocation className="w-4 h-4 text-accent shrink-0" /> Poznań, Studio Sway</span>
                <span className="inline-flex items-center gap-1.5"><IconCurrency className="w-4 h-4 text-accent shrink-0" /> 649 zł</span>
                <span>⚡ Wpłata rezerwacyjna 30%</span>
              </div>
              <p className="text-text-muted font-body mb-6 max-w-lg mx-auto text-sm">
                Ilość miejsc ograniczona — decyduje kolejność zgłoszeń. Napisz podając imię, nazwisko i telefon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akademia.sway@gmail.com?subject=Zapis na ABC Dynamiki 28.03"
                  className="px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover font-body"
                >
                  Zapisz się przez email
                </a>
                <a
                  href="https://www.instagram.com/akademia.sway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border border-white/20 text-text-secondary font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:border-accent hover:text-accent font-body"
                >
                  Napisz na Instagram
                </a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
