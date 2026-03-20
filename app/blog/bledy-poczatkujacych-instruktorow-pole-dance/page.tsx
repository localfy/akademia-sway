import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "5 błędów początkujących instruktorów pole dance | Sway",
  description:
    "5 typowych błędów początkujących instruktorów pole dance i jak ich unikać. Szkolenia pole dance Poznań. Joanna Olejniczak, Akademia Sway.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/blog/bledy-poczatkujacych-instruktorow-pole-dance",
    images: [{ url: "/group-intermediate.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/blog/bledy-poczatkujacych-instruktorow-pole-dance",
  },

};
const bledy = [
  {
    num: "01",
    title: "Uczysz tak, jak Ciebie uczono",
    desc: `To chyba najczęstszy błąd i jednocześnie najbardziej zrozumiały. Masz za sobą lata trenowania u różnych instruktorek. Twój mózg "zapisał" pewien sposób prowadzenia zajęć jako normalny, bo to jedyny, jaki zna z własnego doświadczenia.

Problem? Twoja instruktorka mogła uczyć w sposób, który działał dla Ciebie, ale nie musi działać dla każdego. Mogła też uczyć w sposób, który był nieoptymalny — ale skoro skończyłaś na dobrym poziomie, nie musiałaś tego widzieć.

Kiedy sama zaczęłam uczyć, przez wiele miesięcy kopiowałam styl mojej pierwszej instruktorki. Nie dlatego, że go analizowałam i uznałam za dobry — po prostu to jedyne "nauczanie", które znałam od środka. Dopiero kiedy zainwestowałam w edukację metodyczną, zobaczyłam, co robiłam automatycznie i co mogłam robić lepiej.

Rozwiązanie: aktywnie szukaj wiedzy o pedagogice i metodyce — nie tylko o technice pole dance. Obserwuj innych instruktorów z nastawieniem analitycznym, nie tylko podziwiającym.`,
  },
  {
    num: "02",
    title: "Skupiasz się na tym, co pokazujesz, a nie na tym, czego uczysz",
    desc: `Jako dobra tancerka i instruktorka, naturalnie chcesz pokazać piękne elementy. Doskonale wykonana demonstracja jest ważna — ale to tylko jeden element procesu nauczania.

Widziałam wiele instruktorek, które cudownie demonstrują element, a potem stoją z boku i czekają, aż kursantki "jakoś to złożą". Brakuje korekty, wyjaśnienia krok po kroku, asekuracji, komunikacji zwrotnej.

Kursantki nie potrzebują instruktorki, która robi najpiękniejsze elementy na sali. Potrzebują instruktorki, która sprawi, że SAME będą mogły robić coraz lepsze elementy. To fundamentalna różnica.

Rozwiązanie: zanim wejdziesz na salę, zapytaj siebie: jak poprowadzę kursantkę przez ten element krok po kroku? Jakie są typowe błędy? Jak będę korygować? Co zrobię, jeśli ktoś nie rozumie?`,
  },
  {
    num: "03",
    title: "Zaniedbujesz bezpieczeństwo pod presją grupy",
    desc: `To jest błąd, który może mieć poważne konsekwencje — i dlatego mówię o nim wprost.

Grupy mają swoje dynamiki. Kiedy kursantki są podekscytowane, kiedy kilka osób "chce już próbować" trudniejszego elementu, kiedy widzisz, że entuzjazm grupy jest wysoki — presja, żeby przyspieszyć, może być ogromna.

Ale Ty jesteś instruktorką. Twoja odpowiedzialność polega na tym, żeby nie pozwolić tej presji dyktować programu zajęć — szczególnie w kwestiach bezpieczeństwa.

Sama kiedyś przyspieszyłam za szybko z elementem, bo "wszystkie były gotowe". Jedna z kursantek naciągnęła nadgarstek. Nic poważnego — ale tamta lekcja nauczyła mnie więcej niż lata bez wypadków.

Rozwiązanie: miej jasne kryteria gotowości do każdego elementu i trzymaj się ich. Tłumacz kursantkom, dlaczego idziesz krok po kroku — większość to doceni. Te, które nie docenią, prawdopodobnie docenią bezpieczeństwo po pierwszym wypadku, którego uniknęłaś dzięki swojemu podejściu.`,
  },
  {
    num: "04",
    title: "Nie budujesz struktury — prowadzisz improwizację",
    desc: `Rozumiem pokusę: jesteś artystką, czujesz energię grupy, wolisz płynąć z chwilą. Ale kiedy jesteś instruktorką, "płynięcie z chwilą" bez struktury to przepis na nierówną jakość zajęć, przypadkowe progresje i kursantki, które nie wiedzą, do czego zmierzają.

Dobra lekcja ma strukturę: rozgrzewka ukierunkowana na to, co ćwiczysz → wprowadzenie elementów przygotowawczych → element główny → czas na powtórki i korektę → cool-down. To nie jest gorset — to ramy, w których możesz być kreatywna.

Kiedy nie masz planu, łatwo o pominięcie czegoś ważnego, zbyt długie skupienie się na jednym elemencie i zaburzenie proporcji lekcji, albo brak postępu w grupie — bo każde zajęcia to coś innego bez logicznej ciągłości.

Rozwiązanie: planuj lekcje wcześniej. Nie muszą to być szczegółowe scenariusze — wystarczy szkielet z głównymi blokami i elementami. Planowanie zajmuje 10 minut, a oszczędza godziny chaosu.`,
  },
  {
    num: "05",
    title: "Nie inwestujesz w swój ciągły rozwój",
    desc: `To błąd, który ujawnia się dopiero po jakimś czasie — ale jego konsekwencje są poważne.

Często słyszę od instruktorek: "Nie ma czasu na szkolenia". "Nie mam na to pieniędzy". "Prowadzę tyle zajęć, że nie potrzebuję się szkolić". A potem po roku, dwóch, trzech — stagnacja. Brak nowych pomysłów, poczucie wypalenia, kursantki, które nie widzą już postępu.

Środowisko pole dance zmienia się szybko. Nowe techniki, nowe badania, nowe podejścia pedagogiczne. Instruktorka, która przestaje się uczyć, zostaje w tyle — nawet jeśli przez jakiś czas tego nie widzi.

Mój własny błąd na początku kariery? Przez pierwszy rok skupiałam się wyłącznie na budowaniu bazy kursantów i doskonaleniu techniki własnej. Zupełnie zaniedbałam edukację metodyczną. Kiedy w końcu zainwestowałam w pierwsze szkolenie pedagogiczne — byłam zdumiona, jak wiele rzeczy robiłam instynktownie, które można było robić o wiele lepiej z odpowiednią wiedzą.

Rozwiązanie: traktuj szkolenia jak część kosztu prowadzenia działalności instruktorskiej. Przynajmniej jedno szkolenie metodyczne rocznie — to minimum. Więcej, jeśli chcesz się naprawdę rozwijać.`,
  },
];

export default function BlogPost3() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/joanna-6.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm font-body text-text-muted mb-6">
              <Link href="/" className="hover:text-accent transition-colors">Strona główna</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-accent">5 błędów instruktorów</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-accent/10 text-accent text-xs font-body px-2.5 py-1 rounded">Metodyka</span>
              <span className="text-text-muted text-xs font-body">20 marca 2026</span>
              <span className="text-text-muted text-xs font-body">7 min czytania</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              5 błędów początkujących instruktorów pole dance (i jak ich uniknąć)
            </h1>
            <p className="text-text-secondary font-body text-lg leading-relaxed">
              Każda instruktorka na początku popełnia błędy. Ja też je popełniałam. Opisuję 5 najczęstszych — uczciwie, z własnego doświadczenia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-2 text-text-muted font-body leading-relaxed mb-10">
              <p>
                Zanim przejdę do listy, małe zastrzeżenie: te błędy popełniałam — lub obserwowałam u innych — z pełnym przekonaniem, że robię dobrze. Nie wynikały z lenistwa ani braku zaangażowania. Wynikały z braku wiedzy i doświadczenia, które buduje się latami.
              </p>
              <p>
                Piszę to nie po to, żeby kogoś zawstydzić — ale po to, żeby może kilka osób, które zaczynają drogę instruktorską lub są na jej początku, mogło uniknąć tych samych potknięć.
              </p>
            </div>

            <div className="space-y-10">
              {bledy.map((blad, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-surface rounded overflow-hidden">
                    <div className="gold-border-top p-6">
                      <div className="flex items-start gap-4">
                        <span className="font-heading text-4xl font-bold text-accent/30 leading-none shrink-0">
                          {blad.num}
                        </span>
                        <div>
                          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
                            {blad.title}
                          </h2>
                          <div className="space-y-3 text-text-muted font-body text-sm leading-relaxed">
                            {blad.desc.split("\n\n").map((para, j) => (
                              <p key={j}>{para}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-12 space-y-6 text-text-muted font-body leading-relaxed">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Co z tym wszystkim zrobić?
              </h2>
              <p>
                Dobre wieści: każdy z tych błędów jest do naprawienia. Żaden z nich nie dyskwalifikuje Cię jako instruktorki. Świadomość błędu to już połowa drogi do jego korekty.
              </p>
              <p>
                Najlepszym rozwiązaniem, które znam — i które sama stosuję — jest regularne szkolenie metodyczne. Nie dlatego, że papier robi z Ciebie lepszą instruktorkę. Ale dlatego, że świadome uczenie się metodyki, w bezpiecznym środowisku, z feedbackiem od kogoś z doświadczeniem, przyspiesza Twój rozwój wielokrotnie.
              </p>
              <p>
                Dlatego prowadzę Akademię Sway — miejsce, gdzie możesz zdobyć tę wiedzę w jeden intensywny dzień, zabrać ją ze sobą w postaci skryptu i nagrań i mieć wsparcie po szkoleniu, kiedy pojawiają się pytania w praktyce.
              </p>
              <p>
                Jeśli rozpoznałaś któryś z tych błędów — zapraszam Cię. Jeśli nie rozpoznałaś żadnego — przyjedź sprawdzić, bo może masz martwe pole widzenia. To też bywa częste.
              </p>
              <p>
                Dobry instruktor to nie ten, kto nie popełnia błędów — to ten, kto je widzi i aktywnie nad nimi pracuje. Każde szkolenie metodyczne to nie tylko nowa wiedza, ale też szansa na zresetowanie nawyków, które weszły na autopilota. Właśnie po to istnieje Akademia Sway — żeby dać Ci narzędzia, których sama musiałam szukać przez wiele lat. Zaczynasz od BASIC i budujesz dalej. Krok po kroku, figura po figurze, z pełnym rozumieniem tego, co i dlaczego robisz.
              </p>
            </div>

            <div className="mt-12 bg-surface border border-accent/20 rounded p-8">
              <h3 className="font-heading text-xl font-bold text-white mb-2">Gotowa unikać tych błędów?</h3>
              <p className="text-text-muted font-body text-sm mb-4">
                Szkolenia Akademii Sway są zaprojektowane tak, żeby adresować każdy z tych błędów bezpośrednio. Zacznij od BASIC lub sprawdź pełną ofertę.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/szkolenia/basic"
                  className="px-6 py-2.5 bg-accent text-background font-semibold text-sm rounded transition-all duration-200 hover:bg-accent-hover font-body"
                >
                  Szkolenie BASIC
                </Link>
                <Link
                  href="/szkolenia"
                  className="px-6 py-2.5 border border-white/20 text-text-secondary font-semibold text-sm rounded transition-all duration-200 hover:border-accent hover:text-accent font-body"
                >
                  Wszystkie szkolenia
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </>
  );
}
