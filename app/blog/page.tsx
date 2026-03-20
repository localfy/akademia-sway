import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog — Wiedza dla Instruktorów Pole Dance | Sway",
  description:
    "Blog Akademii Sway: artykuły o metodyce nauczania pole dance, dynamice, błędach instruktorów i ścieżce kariery. Wiedza od Joanna Olejniczak.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/blog",
    images: [{ url: "/group-basic.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/blog",
  },

};
const articles = [
  {
    slug: "jak-zostac-instruktorem-pole-dance",
    title: "Jak zostać instruktorem pole dance? Kompletny przewodnik 2026",
    excerpt:
      "Marzysz o tym, żeby uczyć pole dance? Przeczytaj, jak wygląda ścieżka kariery instruktora, czego warto się nauczyć i jakich błędów unikać na początku drogi.",
    date: "15 lutego 2026",
    category: "Kariera",
    readTime: "8 min",
    image: "/joanna-5.jpg",
    keywords: ["kursy instruktorskie pole dance", "jak zostać instruktorem pole dance"],
  },
  {
    slug: "dynamika-w-pole-dance",
    title: "Dynamika w pole dance — czym jest i od czego zacząć?",
    excerpt:
      "Dynamika to jeden z najbardziej spektakularnych aspektów pole dance — i jeden z najtrudniejszych do bezpiecznego nauczania. Wyjaśniam, czym jest, jak wygląda progresja i jak przygotować kursantów.",
    date: "5 marca 2026",
    category: "Technika",
    readTime: "10 min",
    image: "/joanna-3.jpg",
    keywords: ["dynamika pole dance", "rzuty i łapania pole dance"],
  },
  {
    slug: "bledy-poczatkujacych-instruktorow-pole-dance",
    title: "5 błędów początkujących instruktorów pole dance (i jak ich uniknąć)",
    excerpt:
      "Każda instruktorka na początku popełnia błędy. Ja też je popełniałam. Opisuję 5 najczęstszych — i tłumaczę, jak ich unikać, żeby Twoje zajęcia były bezpieczne, efektywne i inspirujące.",
    date: "20 marca 2026",
    category: "Metodyka",
    readTime: "7 min",
    image: "/joanna-6.jpg",
    keywords: ["szkolenia pole dance Poznań", "instruktor pole dance"],
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/joanna-6.jpg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-3">Blog</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Wiedza dla instruktorów
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-xl leading-relaxed">
              Piszę o metodyce nauczania, dynamice, rozwoju kariery i codziennych wyzwaniach pracy instruktora pole dance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Artykuły */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {articles.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.1}>
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="bg-surface border border-white/10 hover:border-accent/30 rounded overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 overflow-hidden aspect-video md:aspect-auto">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="bg-background/40 border border-white/20 text-accent text-xs font-body px-2.5 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="text-white text-xs font-body">{article.date}</span>
                          <span className="text-white text-xs font-body">{article.readTime} czytania</span>
                        </div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                          {article.title}
                        </h2>
                        <p className="text-white font-body text-sm leading-relaxed">{article.excerpt}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm font-body font-semibold group-hover:gap-3 transition-all">
                        <span className="bg-background/40 border border-white/20 text-accent px-3 py-1 rounded">Czytaj dalej →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Chcesz się rozwijać?
            </h2>
            <p className="text-text-muted font-body mb-8">
              Blog to tylko wstęp. Prawdziwa zmiana dzieje się na sali — sprawdź moje szkolenia.
            </p>
            <Link
              href="/szkolenia"
              className="inline-block px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
            >
              Zobacz szkolenia
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
