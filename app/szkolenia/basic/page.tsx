import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ServiceSchema } from "@/components/SchemaOrg";
import { IconAward, IconBook, IconCalendar, IconChat, IconPlay } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Szkolenie BASIC dla Instruktorów Pole Dance | Akademia Sway",
  description:
    "Szkolenie BASIC — plan treningowy, asekuracja i technika od podstaw. Katalog 36 figur, egzamin online, certyfikat. Akademia Sway Joanna Olejniczak, Poznań.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/szkolenia/basic",
    images: [{ url: "/group-basic.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/szkolenia/basic",
  },

};
const program = [
  "Jak zaplanować pierwsze 6 miesięcy zajęć",
  "Jak wprowadzać statyk na zajęciach",
  "Jakie są najczęstsze błędy oraz jak ich unikać",
  "Jak dopasować rozgrzewkę do poziomu uczestników",
  "Jak wprowadzać figury na zajęciach",
  "Jak budować świadomość ciała u kursantów",
  "Jak radzić sobie kiedy mamy wymieszany poziom",
  "Co to progresja i regresja oraz jak ich używać",
  "Co zawiera dobry plan treningowy i jak go stworzyć",
  "Czy asekuracja na poziomie podstawowym jest potrzebna, kiedy i jak ją stosować",
  "Na co zwracać uwagę oraz jak tłumaczyć pozycje na rurce najczęściej sprawiające problemy — czyli wszystko o technice wykonywanych figur",
];

const katalogFigur = [
  ["basic climb", "side climb", "front hook", "back hook", "fireman", "side fireman", "seats", "drama queen", "peter pan", "pike", "fun kick", "diva"],
  ["jasmine", "scissors", "hobbit", "genie", "ballerina", "helloboy's", "martini", "stargazer", "superman", "cupid", "layback", "crucyfix"],
  ["pencil", "angel", "jamilla", "craddle", "lotos", "embrance", "piruet", "attitude", "reverse attitude", "headstand", "circle spin", "chair spin"],
];

const faq = [
  {
    q: "Czy muszę mieć doświadczenie instruktorskie?",
    a: "Nie — szkolenie jest zarówno dla obecnych instruktorów, jak i dla osób, które chcą nimi zostać. Ważne jest, żebyś miała bardzo dobrze opanowane podstawowe figury i spiny oraz określała swój poziom jako minimum średniozaawansowany.",
  },
  {
    q: "Czy w Polsce trzeba mieć uprawnienia żeby prowadzić pole dance?",
    a: "Polskie prawo nie reguluje uprawnień wymaganych do prowadzenia treningów pole dance — nie musisz mieć żadnych legitymacji ani ukończonych kursów. Ważne jest jednak, by stawiać na profesjonalizm i dbać o bezpieczeństwo kursantów. Właśnie po to jest to szkolenie.",
  },
  {
    q: "Co z egzaminem — czy muszę do niego przystąpić?",
    a: "Egzamin jest opcją dodatkową dla chętnych. Nie jest obligatoryjny — każda uczestniczka samodzielnie decyduje czy chce sprawdzić swoją wiedzę. Egzamin odbywa się 3–4 tygodnie po szkoleniu, trwa ok. 45–60 min online i kosztuje 220 zł (poprawka 80 zł). Każda osoba, która go zda, otrzymuje spersonalizowaną legitymację.",
  },
  {
    q: "Ile trwa szkolenie?",
    a: "Szkolenie BASIC trwa 9 godzin teorii i praktyki — to jeden pełny dzień intensywnej nauki.",
  },
  {
    q: "Czy mogę prowadzić zajęcia bez legitymacji?",
    a: "Polskie prawo NIE reguluje w żaden sposób uprawnień wymaganych do prowadzenia treningów — nie musisz mieć żadnych legitymacji, ukończonych kursów pole dance, przebytych warsztatów ani certyfikatów, aby być instruktorem i prowadzić zajęcia. Ważne jest jednak, aby stawiać na profesjonalizm świadczonych usług. Jako trenerzy jesteśmy odpowiedzialni za naszych kursantów i ich bezpieczeństwo. Umiejętności instruktorskie nie dotyczą tego, czy potrafisz triki z poziomu master — jeżeli prowadzisz zajęcia na poziomie podstawowym, musisz potrafić NAUCZAĆ innych figur z tego poziomu, wiedzieć jak asekurować, eliminować błędy i przygotować dobry plan treningowy.",
  },
  {
    q: "Czym różni się szkolenie Akademii Sway od kursu instruktorskiego?",
    a: "Kurs instruktorski porusza bardzo dużo wątków: anatomia, historia pole dance, etyka instruktora, selfcare, wzorce ruchowe itp. Trwa 2-3 dni lub dłużej, kończy się egzaminem i kosztuje ok. 2500–3500 zł. Na naszym szkoleniu skupiamy się na NAJWAŻNIEJSZYCH zagadnieniach: asekuracja, rozgrzewkowe ABC, budowa planu treningowego, technika figur z omówieniem błędów, progresje i regresje. Szkolenie jest krótsze i tańsze — znajdziesz na nim najistotniejsze informacje i uporządkujesz wiedzę. Jest zarówno dla osób planujących prowadzić zajęcia, jak i dla tych, które już je prowadzą.",
  },
  {
    q: "Czy mogę kupić sam skrypt bez udziału w szkoleniu?",
    a: "Nie ma takiej możliwości. Skrypt to dodatek do szkolenia: ważny, ale i nieodłączny. Zapraszamy po wiedzę teoretyczną i praktyczną — właśnie w takiej formie przynosi najlepsze efekty!",
  },
];

export default function BasicPage() {
  return (
    <>
            <ServiceSchema
        name="Szkolenie BASIC dla instruktorów pole dance"
        description="Jednodniowe szkolenie dla instruktorów pole dance. Technika, metodyka, asekuracja. Akademia Sway Joanna Olejniczak, Poznań."
        price="999"
        url="https://akademia-sway.pl/szkolenia/basic"
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/group-basic.jpg')",
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
              <span className="text-accent">BASIC</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-accent text-background text-xs font-bold font-body px-3 py-1 rounded mb-4">
              <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> Najbliższy termin:</span> 29 marca 2026
            </div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Szkolenie dla instruktorów</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Szkolenie Basic
            </h1>
            <p className="text-text-secondary font-body text-lg leading-relaxed max-w-2xl">
              Plan Treningowy & Asekuracja & Technika na poziomie BASIC. Dla obecnych i przyszłych instruktorów pole dance, którzy chcą prowadzić zajęcia profesjonalnie i z głową.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Czas trwania:</span>
                <span className="text-text-muted ml-1">9 h</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Cena:</span>
                <span className="text-text-muted ml-1">999 zł</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Poziom:</span>
                <span className="text-text-muted ml-1">Minimum średniozaawansowany</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Program</h2>
            <p className="text-accent text-xs tracking-widest uppercase font-body mb-6">Plan Treningowy & Asekuracja & Technika</p>
            <p className="text-text-muted font-body mb-6">Na szkoleniu dowiesz się:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface rounded p-4">
                  <span className="text-accent mt-0.5 shrink-0">›</span>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Dla kogo?</h2>
            <div className="bg-surface border border-white/10 rounded p-6 space-y-4 text-text-muted font-body text-sm leading-relaxed">
              <p>
                Szkolenie jest dla osób, które chciałyby zostać instruktorem pole dance teraz lub w przyszłości, oraz dla osób, które już prowadzą zajęcia, jednak chcą przenieść swoją metodykę nauczania na wyższy poziom.
              </p>
              <p>
                Choć polskie prawo nie reguluje w żaden sposób uprawnień wymaganych do prowadzenia treningów — nie musisz mieć żadnych legitymacji ani ukończonych kursów pole dance — ważne jest, by stawiać na profesjonalizm świadczonych usług. Jako trenerzy jesteśmy odpowiedzialni za naszych kursantów i ich bezpieczeństwo.
              </p>
              <p>
                Jeśli pojawiają się jakiekolwiek wątpliwości czy pytania odnośnie prowadzenia zajęć, chcesz dowiedzieć się więcej o tym jak planować lekcje, jak bezpiecznie asekurować, a także na co zwracać uwagę — by Twoi podopieczni ćwiczyli bezpiecznie oraz skutecznie — to będzie to szkolenie dla Ciebie.
              </p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white font-semibold mb-2">Kto może się zapisać?</p>
                <p>
                  Jeżeli masz bardzo dobrze opanowane podstawowe figury oraz spiny i określasz swój poziom pole dance na minimum średniozaawansowany — możesz wziąć udział w tym szkoleniu.
                </p>
                <p className="mt-3">
                  Dobry instruktor powinien wiedzieć jak tłumaczyć by nauczyć oraz jak kierować rozwojem swoich kursantów. Nie musi być rurkowym &ldquo;wyjadaczem&rdquo; — ważne jest, by cały czas poszerzać swoje umiejętności oraz wiedzę, czyli dbać również o własny progres.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Katalog figur</h2>
            <p className="text-text-muted font-body text-sm mb-6">Na szkoleniu omówimy bazowe figury z poziomu BASIC, ich progresje oraz regresje. Między innymi pozycje takie jak:</p>
            <div className="grid grid-cols-3 gap-3">
              {katalogFigur.map((kolumna, ci) => (
                <div key={ci} className="bg-surface rounded p-4">
                  <ul className="space-y-2">
                    {kolumna.map((f) => (
                      <li key={f} className="text-text-muted font-body text-sm">{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-surface border border-accent/20 rounded p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 text-accent shrink-0 flex items-center justify-center"><IconAward className="w-6 h-6" /></div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-white mb-1">Egzamin — opcja dodatkowa</h2>
                  <p className="text-accent text-xs tracking-widest uppercase font-body mb-3">Jest to opcja dodatkowa, dla chętnych</p>
                  <p className="text-text-muted font-body text-sm leading-relaxed mb-4">
                    Egzamin nie jest obligatoryjny — każda uczestniczka samodzielnie decyduje czy chce sprawdzić swoją wiedzę i umiejętności. Każda osoba, która przystąpi do egzaminu, otrzymuje <strong className="text-white">spersonalizowaną legitymację</strong>.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Termin", value: "3–4 tygodnie po szkoleniu" },
                      { label: "Formuła", value: "Online, ok. 45–60 min" },
                      { label: "Koszt", value: "220 zł (poprawka 80 zł)" },
                      { label: "Zakres", value: "Rozgrzewka, katalog figur, plan zajęć" },
                    ].map((item) => (
                      <div key={item.label} className="bg-background rounded p-3">
                        <p className="text-accent text-xs font-body mb-1">{item.label}</p>
                        <p className="text-text-muted font-body text-xs leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Co otrzymujesz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <IconAward className="w-6 h-6" />, title: "Certyfikat", desc: "Każdy uczestnik otrzymuje certyfikat ukończenia szkolenia Akademii Sway." },
                { icon: <IconBook className="w-6 h-6" />, title: "Obszerny skrypt", desc: "To nie tylko notatki — to kompleksowe wsparcie do pracy po szkoleniu. Zawiera uporządkowanie wiedzy, zdjęcia/rysunki ilustrujące omawiane zagadnienia, definicje pojęć oraz plany treningowe." },
                { icon: <IconPlay className="w-6 h-6" />, title: "Nagrania z zajęć", desc: "Wróć do omawianych technik w dowolnym momencie — ucz się we własnym tempie po szkoleniu." },
                { icon: <IconChat className="w-6 h-6" />, title: "Wsparcie na grupie", desc: "Dostęp do grupy uczestników — pytaj, rozwiaj wątpliwości i wymieniaj się doświadczeniami po szkoleniu." },
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
                <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> 29 marca 2026 · 9 h · 999 zł</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                Zrób pierwszy krok jako instruktorka
              </h2>
              <p className="text-text-muted font-body mb-6 max-w-lg mx-auto text-sm">
                Napisz do mnie — podaj imię, nazwisko i telefon. Ilość miejsc ograniczona, decyduje kolejność zgłoszeń.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akademia.sway@gmail.com?subject=Zapis na szkolenie BASIC 29.03"
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
