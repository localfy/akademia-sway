import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ServiceSchema } from "@/components/SchemaOrg";
import { IconAward, IconBook, IconCalendar, IconChat, IconCurrency, IconLocation, IconPlay } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Szkolenie DYNAMIKA 2.0 Pole Dance | Akademia Sway — Poznań",
  description:
    "DYNAMIKA 2.0 — feniksy, salta i zaawansowana dynamika pole dance. Program, katalog figur, dla kogo. Akademia Sway Joanna Olejniczak, Poznań.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/szkolenia/dynamika-2-0",
    images: [{ url: "/group-dynamika.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/szkolenia/dynamika-2-0",
  },

};
const program = [
  "Skupimy się na zrozumieniu najważniejszych zasad, które przeniosą dynamikę na wyższy poziom",
  "Przerobimy triki bazujące na ruchu po kole i po wahadle, poznacie wiele wprawek oraz utrudnień — od najłatwiejszych do tych bardziej złożonych",
  "Dowiecie się jak robić feniksy, przeanalizujemy różnice między nimi oraz rozłożymy ruch na czynniki pierwsze",
  "Nauczycie się różnych salt z użyciem rurki — przerobimy podstawy oraz jego progresje",
  "Omówimy jak powinno pracować ciało w tych trikach oraz dobierzemy odpowiednie ćwiczenia na rozgrzewkę",
  "Uświadomicie sobie błędy, które można popełnić oraz metody jak ich uniknąć",
  "Nauczycie się również jak asekurować kursantów przy dynamicznych elementach",
];

const katalogFigur = {
  feniksy: [
    "True Grip Phoenix po wahadle",
    "Twisted Grip Phoenix po wahadle na 1",
    "Twisted Grip Phoenix po wahadle na 2",
    "Twisted Grip Phoenix po wahadle ze śruby",
    "Twisted Grip Phoenix po kole",
    "Twisted Grip wahadło na 2 (nabieg po kole)",
    "Twisted Grip po kole na 2",
    "Chinese Phoenix",
    "Feniksy z góry po wahadle/po kole",
  ],
  salta: [
    "Salto w chwycie Tape Grip",
    "Salto z góry",
    "Salto do siadu",
    "Salto do V-ki",
    "Salto w chwycie Baseball Grip",
  ],
};

const faq = [
  {
    q: "Czy muszę ukończyć ABC DYNAMIKI żeby zapisać się na DYNAMIKA 2.0?",
    a: "ABC DYNAMIKI to świetna baza, ale nie jest warunkiem koniecznym. Ważne jest, żebyś była na poziomie minimum średniozaawansowanym, miała dobrze opanowane spiny na 1 ręce i rozumiała ruch po kole oraz po wahadle.",
  },
  {
    q: "Czy muszę umieć feniksy i salta żeby przyjść?",
    a: "Nie musisz umieć wykonywać ich samodzielnie. Masz mieć za sobą próby tych elementów — podstawowych wersji salt i feniksów. Podczas szkolenia pojawią się zarówno uproszczenia, jak i utrudnienia. Nawet jeśli nie wykonasz wszystkiego od razu, zdobędziesz mnóstwo wskazówek i materiału do dalszej pracy.",
  },
  {
    q: "Ile trwa szkolenie?",
    a: "DYNAMIKA 2.0 trwa 5,5 godziny teorii i praktyki (wstępne godziny 12:30–18:00). To intensywny dzień pracy nad zaawansowaną dynamiką.",
  },
  {
    q: "Czy jest zniżka dla uczestników ABC DYNAMIKI?",
    a: "Tak — uczestnicy poprzedniej edycji ABC DYNAMIKI otrzymują rabat -50 zł od ceny szkolenia.",
  },
  {
    q: "Czy mogę kupić sam skrypt bez udziału w szkoleniu?",
    a: "Nie ma takiej możliwości. Skrypt to dodatek do szkolenia: ważny, ale i nieodłączny. Zapraszamy po wiedzę teoretyczną i praktyczną — właśnie w takiej formie przynosi najlepsze efekty!",
  },
];

export default function Dynamika20Page() {
  return (
    <>
            <ServiceSchema
        name="Szkolenie DYNAMIKA 2.0 — zaawansowana dynamika pole dance"
        description="Jednodniowe szkolenie dla instruktorów pole dance. Technika, metodyka, asekuracja. Akademia Sway Joanna Olejniczak, Poznań."
        price="699"
        url="https://akademia-sway.pl/szkolenia/dynamika-2-0"
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/group-dynamika.jpg')",
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
              <span className="text-accent">DYNAMIKA 2.0</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-accent text-background text-xs font-bold font-body px-3 py-1 rounded mb-4">
              <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> Najbliższy termin:</span> 18 kwietnia 2026
            </div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Szkolenie zaawansowane</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dynamika 2.0
            </h1>
            <p className="text-text-secondary font-body text-lg leading-relaxed max-w-2xl">
              Feniksy, salta i zaawansowana dynamika. Jeśli znasz podstawy ruchu na statyku i chcesz przenieść swoją dynamikę na wyższy poziom — to szkolenie jest dla Ciebie. Poziom: od średniego po zaawansowany.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Czas trwania:</span>
                <span className="text-text-muted ml-1">5,5 h (12:30–18:00)</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Cena:</span>
                <span className="text-text-muted ml-1">699 zł (-50 zł dla uczestników ABC DYNAMIKI)</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded px-4 py-2 text-sm font-body">
                <span className="text-accent font-semibold">Poziom:</span>
                <span className="text-text-muted ml-1">Średniozaawansowany / zaawansowany</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">O szkoleniu</h2>
            <div className="space-y-4 text-text-muted font-body leading-relaxed">
              <p>
                Jeśli znasz już podstawowe spiny na statyku i chcesz przenieść swoją dynamikę na wyższy poziom — dowiedzieć się jak uczyć innych trudniejszych trików, na co zwracać uwagę pod kątem techniki, a także jak eliminować najczęstsze błędy — to niniejsze szkolenie będzie dla Ciebie.
              </p>
              <p>
                Będzie dużo teorii i jeszcze więcej praktyki: wiele wprawek, regresji oraz progresji, mnóstwo ćwiczeń, które będą do wypracowania &ldquo;w domu&rdquo;. Rozłożymy każdy ruch na czynniki pierwsze, tak byś mogła przede wszystkim zrozumieć: co, jak i dlaczego.
              </p>
              <p className="font-semibold text-white">
                Otrzymasz materiały, które przeniosą Twoją dynamikę i Twoich kursantów na zdecydowanie wyższy poziom. To szkolenie to prawdziwa esencja praktycznej wiedzy w pigułce!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">Program</h2>
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
              <p>Na ABC DYNAMIKI przerobiłyśmy podstawy wraz z najważniejszymi zasadami, różne nabiegi czy bazowe spiny — zarówno po kole, jak i po wahadle. <strong className="text-white">DYNAMIKA 2.0 to kolejny etap!</strong> Znajdziesz tutaj już bardziej złożone elementy, takie jak feniksy czy salta w różnych wariantach.</p>
              <p>Szkolenie jest dedykowane głównie <strong className="text-white">instruktorom</strong>, ale także <strong className="text-white">kursantom</strong>, którzy chcą zrozumieć ruch.</p>
              <p>Jeśli chcesz wziąć udział, Twoje umiejętności powinny być na poziomie minimum średnim/zaawansowanym. Jeśli byłaś na ABC DYNAMIKI — to idealnie, bo masz już solidną bazę pod trudniejsze triki. Konieczne jest natomiast dobre opanowanie bazowych obrotów na jednej ręce oraz wcześniejsze próby elementów, które będziemy omawiać.</p>
              <p>Podczas szkolenia pojawią się zarówno uproszczenia, jak i utrudnienia dynamicznych elementów. Nawet jeśli nie wykonasz wszystkiego od razu, zdobędziesz mnóstwo wskazówek i materiału do dalszej pracy w przyszłości!</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Katalog figur</h2>
            <p className="text-text-muted font-body text-sm mb-6">Regresje, progresje i asekuracje omawianych elementów:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface rounded p-6">
                <h3 className="text-accent font-body font-semibold text-xs tracking-widest uppercase mb-4">Feniksy</h3>
                <ul className="space-y-2">
                  {katalogFigur.feniksy.map((f) => (
                    <li key={f} className="text-text-muted font-body text-sm">{f}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface rounded p-6">
                <h3 className="text-accent font-body font-semibold text-xs tracking-widest uppercase mb-4">Salta</h3>
                <ul className="space-y-2">
                  {katalogFigur.salta.map((f) => (
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
                { icon: <IconBook className="w-6 h-6" />, title: "Obszerny skrypt", desc: "To nie tylko notatki — to kompleksowe wsparcie do pracy po szkoleniu. Zawiera uporządkowanie i uzupełnienie wiedzy, zdjęcia/rysunki ilustrujące omawiane zagadnienia, definicje i rozwinięcia kluczowych pojęć oraz plany treningowe lub spisy figur." },
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
                <span className="inline-flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-accent shrink-0" /> 18 kwietnia 2026 · 12:30–18:00</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                Gotowa na wyższy poziom dynamiki?
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-body text-text-muted mb-4">
                <span className="inline-flex items-center gap-1.5"><IconCurrency className="w-4 h-4 text-accent shrink-0" /> 699 zł (uczestnicy ABC DYNAMIKI: 649 zł)</span>
                <span className="inline-flex items-center gap-1.5"><IconLocation className="w-4 h-4 text-accent shrink-0" /> Poznań, Studio Sway</span>
                <span>⚡ Wpłata rezerwacyjna 30%</span>
              </div>
              <p className="text-text-muted font-body mb-6 max-w-lg mx-auto text-sm">
                Ilość miejsc ograniczona — decyduje kolejność zgłoszeń. Napisz podając imię, nazwisko i telefon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akademia.sway@gmail.com?subject=Zapis na szkolenie DYNAMIKA 2.0 18.04"
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
