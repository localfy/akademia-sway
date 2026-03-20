import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ServiceSchema } from "@/components/SchemaOrg";
import { IconAward, IconBook, IconCalendar, IconChat, IconPlay } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Szkolenie INTERMEDIATE dla Instruktorów | Akademia Sway",
  description:
    "Szkolenie INTERMEDIATE — inverty, asekuracja i technika na poziomie średniozaawansowanym. Katalog figur, program, dla kogo. Akademia Sway, Poznań.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/szkolenia/intermediate",
    images: [{ url: "/group-intermediate.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/szkolenia/intermediate",
  },

};
const program = [
  "Jak wprowadzać odwrócone figury",
  "Jakie są bezpieczne wejścia oraz zejścia z invertów",
  "Jak radzić sobie kiedy mamy wymieszany poziom",
  "Co to progresja i regresja i jak ich używać",
  "Jakie są najczęstsze błędy oraz jak ich unikać",
  "Co zawiera dobry plan treningowy i jak go stworzyć",
  "Jak bezpiecznie asekurować odwrócone figury",
  "Na co zwracać uwagę oraz jak tłumaczyć pozycje na rurce najczęściej sprawiające problemy — czyli wszystko o technice wykonywanych figur",
  "Jak wprowadzać figury na spinning pole",
  "Jak przygotować kursantów do trudniejszych figur typu shoulder mount oraz handspring",
];

const dlaKogo = [
  "Są instruktorami na poziomie BASIC (lub planują być) i chcą wiedzieć jak przygotować swoich kursantów do kolejnych etapów",
  "Prowadzą wyższe poziomy, jednak chcą poznać aktualną w świecie pole dance metodykę nauczania",
  "Chcą rozwinąć swoje umiejętności gdyż stawiają na profesjonalizm świadczonych przez nich usług",
  "Pragną poznać technikę bazowych figur z poziomu średniozaawansowanego oraz bezpieczną asekurację",
  "Chcą dowiedzieć się jak prowadzić kursantów tak by zminimalizować ryzyko kontuzji (ich i swoich)",
  "Mają jakiekolwiek wątpliwości dotyczące prowadzenia zajęć lub chcą sprawdzić i usystematyzować swoją wiedzę",
];

const katalogFigur = {
  lewaKolumna: ["scorpio", "gemini", "inverted crucyfix", "ballerina", "archer", "reiko", "russian layback", "dragonfly", "jade", "iguana", "bow & arrow"],
  prawaKolumna: ["V-ka", "umbrella", "butterfly", "open butterfly", "duchess", "brass monkey", "shoulder mount", "pole handstand", "inverted D", "handspring", "open layback"],
};

const faq = [
  {
    q: "Czy muszę być instruktorem żeby zapisać się na INTERMEDIATE?",
    a: "Nie musisz być aktywnym instruktorem — szkolenie jest dla obecnych oraz przyszłych instruktorów pole dance. Ważne jest, żebyś znała figury z poziomu podstawowego i miała solidne podstawy techniczne.",
  },
  {
    q: "Jaki poziom techniczny jest wymagany?",
    a: "Twoje umiejętności powinny pozwalać na samodzielne wykonywanie figur z poziomu podstawowego. Powinieneś znać m.in. podstawowe spiny i mieć za sobą pierwsze próby invertów. Na szkoleniu omówimy katalog figur INTERMEDIATE — nie musisz ich umieć, ale warto mieć solidne podstawy.",
  },
  {
    q: "Ile trwa szkolenie?",
    a: "Szkolenie INTERMEDIATE obejmuje 1 dzień szkoleniowy — 9 godzin teorii i praktyki. To intensywny dzień pracy z techniką invertów, asekuracją i metodyką nauczania.",
  },
  {
    q: "Co jeśli w mojej grupie są kursanci o różnym poziomie?",
    a: "Praca z grupą o wymieszanym poziomie to jeden z kluczowych tematów tego szkolenia. Dowiesz się jak planować zajęcia i dobierać ćwiczenia, gdy w grupie są zarówno osoby początkujące, jak i bardziej zaawansowane.",
  },
  {
    q: "Czy mogę kupić sam skrypt bez udziału w szkoleniu?",
    a: "Nie ma takiej możliwości. Skrypt to dodatek do szkolenia: ważny, ale i nieodłączny. Zapraszamy po wiedzę teoretyczną i praktyczną — właśnie w takiej formie przynosi najlepsze efekty!",
  },
];

export default function IntermediatePage() {
  return (
    <>
            <ServiceSchema
        name="Szkolenie INTERMEDIATE dla instruktorów pole dance"
        description="Jednodniowe szkolenie dla instruktorów pole dance. Technika, metodyka, asekuracja. Akademia Sway Joanna Olejniczak, Poznań."
        price="1099"
        url="https://akademia-sway.pl/szkolenia/intermediate"
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/group-intermediate.jpg')",
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
              <span className="text-accent">INTERMEDIATE</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-accent text-background text-xs font-bold font-body px-3 py-1 rounded mb-4">
              <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> Najbliższy termin:</span> 26 kwietnia 2026
            </div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Szkolenie dla instruktorów</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Szkolenie Intermediate
            </h1>
            <p className="text-text-secondary font-body text-lg leading-relaxed max-w-2xl">
              Inverty & Asekuracja & Technika na poziomie INTERMEDIATE. Dla obecnych i przyszłych instruktorów, którzy chcą pewnie prowadzić kursantów przez odwrócone figury i zaawansowaną metodykę.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Czas trwania:</span>
                <span className="text-text-muted ml-1">9 h</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Cena:</span>
                <span className="text-text-muted ml-1">do potwierdzenia</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Poziom:</span>
                <span className="text-text-muted ml-1">BASIC+</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Program</h2>
            <p className="text-accent text-xs tracking-widest uppercase font-body mb-6">Inverty & Asekuracja & Technika</p>
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
            <p className="text-text-muted font-body text-sm mb-4">Szkolenie jest dla osób, które:</p>
            <div className="space-y-3">
              {dlaKogo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">›</span>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Katalog figur</h2>
            <p className="text-text-muted font-body text-sm mb-6">Na szkoleniu omówimy bazowe figury z poziomu INTERMEDIATE, ich progresje oraz regresje. Między innymi pozycje takie jak:</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface rounded p-6">
                <ul className="space-y-2">
                  {katalogFigur.lewaKolumna.map((f) => (
                    <li key={f} className="text-text-muted font-body text-sm">{f}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface rounded p-6">
                <ul className="space-y-2">
                  {katalogFigur.prawaKolumna.map((f) => (
                    <li key={f} className="text-text-muted font-body text-sm">{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Co otrzymujesz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <IconAward className="w-6 h-6" />, title: "Certyfikat", desc: "Każdy uczestnik otrzymuje certyfikat ukończenia szkolenia Akademii Sway." },
                { icon: <IconBook className="w-6 h-6" />, title: "Obszerny skrypt", desc: "To nie tylko notatki — to kompleksowe wsparcie do pracy po szkoleniu. Zawiera uporządkowanie i uzupełnienie wiedzy, zdjęcia/rysunki ilustrujące omawiane zagadnienia, definicje kluczowych pojęć oraz katalog figur z regresami i progresami." },
                { icon: <IconPlay className="w-6 h-6" />, title: "Nagrania z zajęć", desc: "Wróć do omawianych technik i figur w dowolnym momencie — ucz się we własnym tempie po szkoleniu." },
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
                <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> 26 kwietnia 2026</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                Gotowa na INTERMEDIATE?
              </h2>
              <p className="text-text-muted font-body mb-6 max-w-lg mx-auto text-sm">
                Napisz do mnie — podaj imię, nazwisko i telefon. Ilość miejsc ograniczona, decyduje kolejność zgłoszeń.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akademia.sway@gmail.com?subject=Zapis na szkolenie INTERMEDIATE 26.04"
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
