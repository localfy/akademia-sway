import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ServiceSchema } from "@/components/SchemaOrg";
import { IconAward, IconBook, IconPlay, IconChat } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Szkolenie ADVANCED dla Instruktorów Pole Dance | Sway",
  description:
    "Szkolenie ADVANCED — technika, asekuracja i metodyka na poziomie zaawansowanym. Handspring, Deadlift, Zeskoki, Regrips. Akademia Sway, Poznań.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/szkolenia/advanced",
    images: [{ url: "/group-advanced.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/szkolenia/advanced",
  },

};
const program = [
  "Jak wprowadzać figury z poziomu ADVANCED",
  "Jak wykonać elementy dynamiczne oraz siłowe — ćwiczenia i wprawki, które przygotują Ciebie i Twoich kursantów do trudniejszych trików",
  "Jak z głową prowadzić swoich podopiecznych — nauczysz się analizować, kiedy grupa jest gotowa na dane figury",
  "Czym jest progresja i regresja i jak z nich korzystać",
  "Jak asekurować, dbając zarówno o bezpieczeństwo kursanta, jak i swoje",
  "Jakie są najczęstsze błędy oraz jak ich unikać",
  "Na co zwracać uwagę oraz jak tłumaczyć pozycje na rurce najczęściej sprawiające problemy — czyli wszystko o technice wykonywanych figur",
  "Jak radzić z grupą o zróżnicowanym poziomie",
];

const dlaKogo = [
  "Chcą wiedzieć jak przygotować siebie i/lub swoich kursantów do wyzwań z poziomu ADVANCED i prowadzić ich rozwój w sposób bezpieczny oraz świadomy",
  "Stawiają na profesjonalizm świadczonych usług i chcą poznać nową metodykę nauczania — by mieć konkretne narzędzia do pracy z podopiecznymi",
  "Chcą rozwijać własne umiejętności, zarówno pod kątem techniki, jak i prowadzenia zajęć",
  "Pragną poznać technikę bazowych figur z poziomu zaawansowanego oraz sposoby bezpiecznej asekuracji",
  "Chcą dowiedzieć się, jak prowadzić kursantów, by zminimalizować ryzyko kontuzji (w tym również u siebie)",
  "Mają jakiekolwiek wątpliwości dotyczące prowadzenia zajęć lub wykonywania figur wymienionych w programie i chcą usystematyzować swoją wiedzę",
];

const katalogFigur = {
  handspring: ["twisted grip", "cup grip", "true grip", "elbow grip", "football grip", "forearm grip"],
  inne: ["BRASS PENCIL", "IRON X", "DEADLIFT", "MUSCLE-UP", "PRESS TO POLE HANDSTAND", "REIKO ONE HAND"],
  zeskoki: ["gemini flip", "butterfly flip", "sneaky V flip", "split flip", "shoulder mount flip", "layback flip", "box split flip"],
  pozostale: ["BACK FLIP (salto)", "SHOULDER MOUNT REGRIPS", "HANDSPRING REGRIPS", "AERIAL HANDSPRING", "FULL MOON"],
};

const faq = [
  {
    q: "Jaki poziom jest wymagany?",
    a: "Na szkolenie mogą się zapisać osoby, które mają opanowane pozycje z poziomu średniozaawansowanego oraz są w stanie wykonać figury takie jak shoulder mount, handspring czy podstawowe zeskoki. Nie trzeba potrafić robić samodzielnie wszystkich figur z listy — otrzymasz materiały by się ich nauczyć i wiedzieć jak je wytłumaczyć swoim podopiecznym.",
  },
  {
    q: "Czy to szkolenie tylko dla instruktorów?",
    a: "Szkolenie jest dedykowane głównie instruktorom, ale też osobom które chcą rozwinąć się na poziomie ADVANCED i zrozumieć technikę zaawansowanych figur. Szkolenie pole dance dla instruktorów i nie tylko.",
  },
  {
    q: "Ile trwa szkolenie?",
    a: "Szkolenie ADVANCED trwa 9 godzin — to intensywny, pełny dzień pracy z techniką, asekuracją i metodyką na najwyższym poziomie.",
  },
  {
    q: "Co jeśli nie znam wszystkich figur z katalogu?",
    a: "Nie musisz znać wszystkich figur z listy. Otrzymasz materiały, które pozwolą Ci się ich nauczyć lub poprawić ich jakość, a jednocześnie dowiedzieć się jak je wytłumaczyć podopiecznym dbając o bezpieczeństwo.",
  },
  {
    q: "Czy mogę kupić sam skrypt bez udziału w szkoleniu?",
    a: "Nie ma takiej możliwości. Skrypt to dodatek do szkolenia: ważny, ale i nieodłączny. Zapraszamy po wiedzę teoretyczną i praktyczną — właśnie w takiej formie przynosi najlepsze efekty!",
  },
];

export default function AdvancedPage() {
  return (
    <>
            <ServiceSchema
        name="Szkolenie ADVANCED dla instruktorów pole dance"
        description="Jednodniowe szkolenie dla instruktorów pole dance. Technika, metodyka, asekuracja. Akademia Sway Joanna Olejniczak, Poznań."
        price="1199"
        url="https://akademia-sway.pl/szkolenia/advanced"
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/group-advanced.jpg')",
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
              <span className="text-accent">ADVANCED</span>
            </div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Szkolenie dla instruktorów</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Szkolenie ADVANCED
            </h1>
            <p className="text-text-secondary font-body text-lg leading-relaxed max-w-2xl">
              Praktyka & Technika & Asekuracja na poziomie ADVANCED. Dla instruktorów i osób, które chcą wznieść swoje umiejętności oraz wiedzę metodyczną na najwyższy poziom.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Czas trwania:</span>
                <span className="text-text-muted ml-1">9 h</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Cena:</span>
                <span className="text-text-muted ml-1">1199 zł (-100 zł dla uczestników BASIC & INTERMEDIATE)</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Wymagania:</span>
                <span className="text-text-muted ml-1">Poziom średniozaawansowany+</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Program */}
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Program</h2>
            <p className="text-accent text-xs tracking-widest uppercase font-body mb-6">Praktyka & Technika & Asekuracja</p>
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

          {/* Dla kogo */}
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Dla kogo?</h2>
            <div className="bg-surface border border-white/10 rounded p-6 mb-6 space-y-4 text-text-muted font-body text-sm leading-relaxed">
              <p>Na szkolenie mogą się zapisać osoby, które mają opanowane pozycje z poziomu średniozaawansowanego oraz są w stanie wykonać figury takie jak shoulder mount, handspring czy podstawowe zeskoki.</p>
              <p>Nie trzeba potrafić robić samodzielnie wszystkich figur z listy — otrzymasz materiały by się ich nauczyć/poprawić ich jakość oraz wiedzieć jak je wytłumaczyć swoim podopiecznym równocześnie dbając o bezpieczeństwo swoje i ich.</p>
              <p className="text-white font-semibold">Otrzymasz materiały, które przeniosą Twoje umiejętności oraz wiedzę na wyższy poziom. Będzie dużo teorii i jeszcze więcej praktyki!</p>
            </div>
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

          {/* Katalog figur */}
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Katalog figur</h2>
            <p className="text-text-muted font-body text-sm mb-6">Na szkoleniu omówimy figury/triki z poziomu ADVANCED, ich regresje & progresje oraz asekuracje. Między innymi pozycje takie jak:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface rounded p-6">
                <h3 className="text-accent font-body font-semibold text-xs tracking-widest uppercase mb-3">Handspring</h3>
                <ul className="space-y-1">
                  {katalogFigur.handspring.map((f) => (
                    <li key={f} className="text-text-muted font-body text-sm">{f}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
                  {katalogFigur.inne.map((f) => (
                    <li key={f} className="text-text-muted font-body text-sm list-none">{f}</li>
                  ))}
                </div>
              </div>
              <div className="bg-surface rounded p-6">
                <h3 className="text-accent font-body font-semibold text-xs tracking-widest uppercase mb-3">Zeskoki</h3>
                <ul className="space-y-1">
                  {katalogFigur.zeskoki.map((f) => (
                    <li key={f} className="text-text-muted font-body text-sm">{f}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
                  {katalogFigur.pozostale.map((f) => (
                    <li key={f} className="text-text-muted font-body text-sm list-none">{f}</li>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Co otrzymujesz */}
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Co otrzymujesz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <IconAward className="w-6 h-6" />, title: "Certyfikat", desc: "Każdy uczestnik otrzymuje certyfikat ukończenia szkolenia Akademii Sway." },
                { icon: <IconBook className="w-6 h-6" />, title: "Skrypt ADVANCED", desc: "To nie tylko notatki — to kompleksowe wsparcie do pracy po szkoleniu. Zawiera uporządkowanie i uzupełnienie wiedzy, zdjęcia/rysunki ilustrujące omawiane zagadnienia, definicje i rozwinięcia kluczowych pojęć oraz plany treningowe lub spisy figur. Skrypty Akademii Sway to kompendia wiedzy — stworzone tak, by można było łatwo wrócić do omawianych treści i skutecznie utrwalać wiedzę." },
                { icon: <IconPlay className="w-6 h-6" />, title: "Nagrania z zajęć", desc: "Wróć do omawianych figur i ćwiczeń w dowolnym momencie — ucz się i powtarzaj we własnym tempie." },
                { icon: <IconChat className="w-6 h-6" />, title: "Wsparcie po szkoleniu", desc: "Dostęp do grupy uczestników — pytaj, rozwiaj wątpliwości i wymieniaj się doświadczeniami." },
              ].map((item, i) => (
                <div key={i} className="bg-surface-2 gold-border-top p-6 rounded">
                  <div className="w-10 h-10 text-accent mb-4 flex items-center justify-center">{item.icon}</div>
                  <h3 className="font-heading text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* FAQ */}
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

          {/* CTA */}
          <AnimatedSection>
            <div className="bg-surface-2 border border-accent/20 rounded p-8 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                Gotowa na poziom ADVANCED?
              </h2>
              <p className="text-text-muted font-body mb-6 max-w-lg mx-auto">
                Napisz do mnie — podaj imię, nazwisko, telefon i informację, że interesuje Cię szkolenie ADVANCED.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akademia.sway@gmail.com?subject=Zapis na szkolenie ADVANCED"
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
