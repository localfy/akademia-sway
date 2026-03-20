import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { IconTarget, IconBook, IconLightning, IconMedal } from "@/components/Icons";

export const metadata: Metadata = {
  title: "O mnie — Joanna Olejniczak | Akademia Sway Poznań",
  description:
    "Joanna Olejniczak — twórczyni Akademii Sway. 10+ lat w pole dance, zawodniczka i trenerka instruktorów. Poznań.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/o-mnie",
    images: [{ url: "/joanna-7.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/o-mnie",
  },

};
export default function OMniePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/joanna.jpg')",
            backgroundPosition: "center 15%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <AnimatedSection>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-body mb-4">
              Joanna Olejniczak
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Cześć,<br />jestem <span className="text-gradient">Joanna</span>
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-xl leading-relaxed">
              Instruktorka pole dance, zawodniczka i twórczyni Akademii Sway — miejsca, w którym instruktorzy uczą się, jak uczyć dobrze.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Moja historia */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-accent" />
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-body">Moja historia</p>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
              Jak zaczęła się Akademia Sway
            </h2>
            <div className="space-y-5 text-text-muted font-body leading-relaxed text-base">
              <p>
                Z pole dance zetknęłam się w 2016 roku — i choć brzmi to jak klisza, naprawdę zakochałam się od pierwszego drążka. To była miłość od razu skomplikowana: pole dance jest wymagający technicznie, fizycznie i emocjonalnie. Wymaga cierpliwości, odwagi i gotowości do upadania i wstawania — dosłownie i w przenośni.
              </p>
              <p>
                Przez pierwsze lata uczyłam się od różnych instruktorek — każda miała inny styl, inne podejście, inne metody. Część z nich była genialna. Część — mimo najlepszych intencji — uczyła w sposób, który mógł prowadzić do kontuzji lub frustracji. I to właśnie tamte doświadczenia sprawiły, że zaczęłam myśleć o metodyce poważnie.
              </p>
              <p>
                Kiedy sama zaczęłam uczyć, szybko zorientowałam się, że umieć coś zrobić to zupełnie inna umiejętność niż umieć to nauczyć. Pole dance jest szczególnie zdradliwy w tym sensie — technika, którą Twoje ciało opanowało intuicyjnie, kursantce może sprawiać problem z powodów, których na pierwszy rzut oka nie widzisz. I tu zaczyna się prawdziwa praca instruktora.
              </p>
              <p>
                Startowałam w zawodach — solo i w duecie — co nauczyło mnie dyscypliny, pracy nad detalem i radzenia sobie z presją. Ale zawody to też świetna lekcja pokory: nagle widzisz siebie z zewnątrz, porównujesz z najlepszymi, rozumiesz, gdzie są luki. Te lekcje przeniosłam wprost do swojej pracy z kursantami i instruktorkami.
              </p>
              <p>
                Akademię Sway założyłam, bo widziałam realną potrzebę: instruktorki w Polsce były świetne technicznie, ale brakowało im narzędzi metodycznych. Wiedziały, co robić — ale nie zawsze, jak to przekazać. Moje szkolenia to odpowiedź na tę lukę. Nie uczę Cię, jak tańczyć — uczę Cię, jak uczyć tańczyć.
              </p>
              <p>
                Każde szkolenie, które prowadzę, jest wynikiem lat obserwacji, praktyki i rozmów z instruktorkami z całej Polski. Nie ma w nim teorii dla teorii — jest to, co realnie działa na sali, co przetestowałam na sobie i z innymi.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filozofia */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-accent" />
              <p className="text-label-dark text-xs tracking-[0.3em] uppercase font-body">Moja filozofia</p>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
              Jak uczę i dlaczego
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <IconTarget className="w-6 h-6" />,
                  title: "Technika przede wszystkim",
                  desc: "Wierzę, że solidna technika jest podstawą bezpiecznego i satysfakcjonującego pole dance. Bez niej nawet spektakularny element staje się ryzykiem. Uczę przez pryzmat ciała — anatomii, biomechaniki, świadomości ruchu.",
                },
                {
                  icon: <IconBook className="w-6 h-6" />,
                  title: "Analiza, nie intuicja",
                  desc: "Zamiast mówić 'po prostu to poczuj', wolę rozebrać element na części pierwsze i zrozumieć, co go blokuje. Taki analityczny styl nauczania sprawia, że kursantki nie tylko uczą się elementu — one rozumieją, dlaczego coś działa.",
                },
                {
                  icon: <IconLightning className="w-6 h-6" />,
                  title: "Bezpieczeństwo bez kompromisów",
                  desc: "W pole dance granica między postępem a kontuzją bywa cienka. Dlatego każde szkolenie kładzie ogromny nacisk na zasady bezpieczeństwa, asekurację i podejmowanie świadomych decyzji — zarówno dla instruktora, jak i kursantów.",
                },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-background gold-border-top p-6 rounded h-full">
                    <div className="w-10 h-10 text-accent mb-4 flex items-center justify-center">{item.icon}</div>
                    <h3 className="font-heading text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-text-muted font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Doświadczenie */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-accent" />
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-body">Doświadczenie</p>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
              Moje doświadczenie w liczbach
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: "10+", label: "lat w pole dance" },
                { number: "5", label: "różnych szkoleń w ofercie" },
                { number: "100+", label: "przeszkolonych instruktorek" },
                { number: "1★", label: "zawody solo i duet" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="text-center p-6 bg-surface rounded border border-white/10">
                    <p className="font-heading text-3xl sm:text-4xl font-bold text-accent mb-2">
                      {stat.number}
                    </p>
                    <p className="text-text-muted font-body text-xs">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <div className="space-y-4 text-text-muted font-body leading-relaxed">
              <p>
                Przez ponad 10 lat trenowałam pole dance, przechodząc przez wszystkie etapy — od absolutnej początkującej, przez zawodniczkę startującą w polskich zawodach, po doświadczoną instruktorkę i trenerkę instruktorów.
              </p>
              <p>
                Prowadziłam warsztaty w studiach w całej Polsce. Każdy wyjazd to nowe środowisko, nowe kursantki, nowe wyzwania — i za każdym razem wynosiłam z niego coś, co wzbogacało moje szkolenia.
              </p>
              <p>
                Startuję również w zawodach — solo i w duecie. Wiem, co to znaczy przygotowywać się do prezentacji pod okiem sędziów, pracować nad detalem i radzić sobie z presją. Te doświadczenia bezpośrednio przekładają się na to, czego uczę — bo wiem, jak wygląda pole dance od środka, nie tylko z zewnątrz.
              </p>
              <p>
                Akademia Sway to mój autorski projekt — miejsce, które budowałam świadomie, z myślą o instruktorkach, które chcą się rozwijać serio. Nie jako hobby, ale jako profesjonalistki.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["/joanna-7.jpg", "/joanna-3.jpg", "/joanna-4.jpg", "/joanna-5.jpg", "/joanna-6.jpg", "/joanna-2.jpg"].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded bg-surface">
                  <img
                    src={src}
                    alt={`Joanna Olejniczak — pole dance ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Sprawdź moje szkolenia
            </h2>
            <p className="text-text-muted font-body mb-8 max-w-lg mx-auto leading-relaxed">
              Jeśli jesteś instruktorką pole dance lub dopiero planujesz nią zostać — jedno z moich szkoleń jest właśnie dla Ciebie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/szkolenia"
                className="px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105 font-body"
              >
                Sprawdź szkolenia
              </Link>
              <Link
                href="/kontakt"
                className="px-8 py-3.5 border border-white/20 text-text-secondary font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:border-accent hover:text-accent font-body"
              >
                Napisz do mnie
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
