import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Szkolenia dla Instruktorów Pole Dance | Akademia Sway",
  description:
    "Wszystkie szkolenia Akademii Sway: BASIC, INTERMEDIATE, ADVANCED, ABC DYNAMIKI i DYNAMIKA 2.0. Jednodniowe szkolenia dla instruktorów pole dance. Poznań.",
  openGraph: {
    title: "Szkolenia dla Instruktorów | Akademia Sway",
    description:
      "Profesjonalne szkolenia dla instruktorów pole dance. Technika, metodyka, dynamika. Zapisz się już dziś.",
    images: [{ url: "/group-basic.jpg", width: 1200, height: 630 }],
    url: "https://akademia-sway.pl/szkolenia",
  },
  alternates: { canonical: "https://akademia-sway.pl/szkolenia" },
};

const szkolenia = [
  {
    slug: "basic",
    name: "BASIC",
    level: "Poziom podstawowy",
    price: "999 zł",
    duration: "1 dzień",
    desc: "Fundament każdego instruktora pole dance. Szkolenie BASIC to kompleksowe wprowadzenie do metodyki nauczania, zasad bezpieczeństwa na sali i struktury idealnej lekcji. Idealne dla tych, którzy dopiero zaczynają swoją drogę instruktorską.",
    tags: ["Metodyka", "Bezpieczeństwo", "Struktura lekcji"],
    image: "/joanna-5.jpg",
    forWho: "Przyszli i początkujący instruktorzy bez doświadczenia w prowadzeniu grup",
  },
  {
    slug: "intermediate",
    name: "INTERMEDIATE",
    level: "Poziom średniozaawansowany",
    price: "1099 zł",
    duration: "1 dzień",
    desc: "Szkolenie dla instruktorów, którzy mają już podstawy i chcą pracować efektywniej z grupami mieszanymi. Nauczysz się budować progresje ćwiczeń, motywować kursantów i dostosowywać program do różnych poziomów.",
    tags: ["Praca z grupą", "Progresje", "Motywacja"],
    image: "/joanna-6.jpg",
    forWho: "Instruktorzy z podstawowym doświadczeniem, prowadzący już własne grupy lub przygotowujący się do tego",
  },
  {
    slug: "advanced",
    name: "ADVANCED",
    level: "Poziom zaawansowany",
    price: "1199 zł",
    duration: "1 dzień",
    desc: "Dla doświadczonych instruktorów, którzy chcą wznieść swój warsztat na najwyższy poziom. Zaawansowane techniki nauczania, troubleshooting problemów na sali i budowanie autorskiego programu szkoleń.",
    tags: ["Zaawansowane techniki", "Troubleshooting", "Program autorski"],
    image: "/joanna-4.jpg",
    forWho: "Doświadczeni instruktorzy z co najmniej 2 latami praktyki w prowadzeniu grup",
  },
  {
    slug: "abc-dynamiki",
    name: "ABC DYNAMIKI",
    level: "Poziom podstawowy",
    price: "649 zł",
    duration: "1 dzień",
    desc: "Wprowadzenie do świata dynamiki w pole dance. Szkolenie skupia się na bezpiecznym wprowadzeniu podstaw rzutów i łapań, zasadach pracy w parach oraz metodyce nauczania elementów dynamicznych w grupach.",
    tags: ["Dynamika", "Rzuty i łapania", "Praca w parach"],
    image: "/joanna-3.jpg",
    forWho: "Instruktorzy, którzy chcą wprowadzić elementy dynamiczne do swojego repertuaru",
    upcoming: true,
    upcomingDate: "28 marca 2025",
  },
  {
    slug: "dynamika-2-0",
    name: "DYNAMIKA 2.0",
    level: "Poziom zaawansowany",
    price: "699 zł",
    duration: "1 dzień",
    desc: "Kontynuacja ABC Dynamiki dla tych, którzy opanowali podstawy i są gotowi na więcej. Zaawansowane elementy dynamiczne, choreografia dynamiczna i profesjonalna praca w duetach na scenie.",
    tags: ["Zaawansowana dynamika", "Choreografia", "Duety"],
    image: "/joanna-2.jpg",
    forWho: "Instruktorzy po szkoleniu ABC Dynamiki lub z własnym doświadczeniem w dynamice",
  },
];

export default function SzkoleniaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Oferta</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Moje szkolenia
            </h1>
            <p className="text-text-muted font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Każde szkolenie to intensywny dzień pracy, który przekłada się na realne efekty w Twojej codziennej praktyce jako instruktorki.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Szkolenia lista */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {szkolenia.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.1}>
              <div className="bg-surface border border-white/10 hover:border-accent/30 rounded overflow-hidden transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                    <img
                      src={s.image}
                      alt={`Szkolenie ${s.name} — Akademia Sway`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {s.upcoming && (
                      <div className="absolute top-4 left-4 bg-accent text-background text-xs font-bold font-body px-3 py-1 rounded">
                        Najbliższy termin: {s.upcomingDate}
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-label-dark text-xs tracking-widest uppercase font-body font-semibold">
                          {s.level}
                        </span>
                        <span className="text-white/30">·</span>
                        <span className="text-white text-xs font-body">{s.duration}</span>
                        <span className="ml-auto text-label-dark font-heading font-bold text-2xl">
                          {s.price}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wide">
                        {s.name}
                      </h2>
                      <p className="text-white font-body text-sm leading-relaxed mb-4">
                        {s.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-background/40 border border-white/20 text-accent text-xs font-body px-3 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/80 text-xs font-body italic border-l-2 border-accent/30 pl-3">
                        {s.forWho}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Link
                        href={`/szkolenia/${s.slug}`}
                        className="flex-1 px-6 py-3 bg-accent text-background font-semibold text-sm tracking-wide rounded text-center transition-all duration-200 hover:bg-accent-hover font-body"
                      >
                        Dowiedz się więcej
                      </Link>
                      <a
                        href={`mailto:akademia.sway@gmail.com?subject=Zapis na szkolenie ${s.name}`}
                        className="flex-1 px-6 py-3 border border-white/20 text-text-secondary font-semibold text-sm tracking-wide rounded text-center transition-all duration-200 hover:border-accent hover:text-accent font-body"
                      >
                        Zapisz się
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ: Szkolenie vs Kurs */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Często pytacie</p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">Pytania i odpowiedzi</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-4">
              {[
                {
                  q: "Czym różni się szkolenie od kursu instruktorskiego?",
                  a: "Kurs instruktorski porusza bardzo dużo wątków: anatomia, historia pole dance, etyka instruktora, selfcare, wzorce ruchowe itp. Trwa 2–3 dni lub dłużej, kończy się egzaminem i kosztuje ok. 2500–3500 zł. Na naszym szkoleniu skupiamy się na NAJWAŻNIEJSZYCH zagadnieniach: asekuracja, rozgrzewkowe ABC, budowa planu treningowego, technika figur z omówieniem błędów, progresje i regresje. Szkolenie jest krótsze i tańsze — znajdziesz na nim najistotniejsze informacje i uporządkujesz wiedzę. Jest zarówno dla osób planujących prowadzić zajęcia, jak i dla tych, które już je prowadzą.",
                },
                {
                  q: "Czy mogę prowadzić zajęcia bez legitymacji?",
                  a: "Polskie prawo NIE reguluje w żaden sposób uprawnień wymaganych do prowadzenia treningów — nie musisz mieć żadnych legitymacji, ukończonych kursów pole dance ani certyfikatów, aby być instruktorem. Ważne jest jednak, aby stawiać na profesjonalizm i dbać o bezpieczeństwo kursantów. Umiejętności instruktorskie to nie to, czy potrafisz triki z poziomu master — to wiedza jak NAUCZAĆ, jak asekurować, eliminować błędy i przygotować dobry plan treningowy.",
                },
                {
                  q: "Nie wiem, które szkolenie wybrać — od czego zacząć?",
                  a: "Jeśli jesteś na początku drogi instruktorskiej lub chcesz usystematyzować podstawy — zacznij od BASIC. Jeśli masz już doświadczenie z grupami na poziomie podstawowym i chcesz wprowadzać odwrócone figury — INTERMEDIATE. Jeśli interesuje Cię dynamika — ABC DYNAMIKI to idealny start. W razie wątpliwości napisz do mnie — dobierzemy odpowiedni poziom do Twojego doświadczenia.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-surface border border-white/10 rounded p-6">
                  <h3 className="font-body font-semibold text-white mb-2 text-sm">{item.q}</h3>
                  <p className="text-text-muted font-body text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Nie wiesz, które szkolenie wybrać?
            </h2>
            <p className="text-text-muted font-body mb-8 leading-relaxed">
              Napisz do mnie — chętnie pomogę dopasować odpowiedni poziom do Twojego doświadczenia i celów.
            </p>
            <a
              href="mailto:akademia.sway@gmail.com?subject=Pytanie o szkolenia"
              className="inline-block px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
            >
              Napisz do mnie
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
