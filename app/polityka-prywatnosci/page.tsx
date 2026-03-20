import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Akademia Sway — Szkolenia Poznań",
  description:
    "Polityka prywatności Akademii Sway — informacje o przetwarzaniu danych osobowych uczestników szkoleń. RODO. Joanna Olejniczak, Poznań.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/polityka-prywatnosci",
    images: [{ url: "/joanna-3.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/polityka-prywatnosci",
  },

};
export default function PolitykaPrywatnosci() {
  return (
    <>
      <section className="pt-32 pb-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-label-dark text-xs tracking-[0.3em] uppercase font-body mb-3">Dokument prawny</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Polityka prywatności
            </h1>
            <p className="text-text-muted font-body text-sm">
              Ostatnia aktualizacja: 1 stycznia 2024
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose-custom space-y-8 text-text-muted font-body leading-relaxed text-sm">

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">1. Administrator danych</h2>
                <p>
                  Administratorem Twoich danych osobowych jest Joanna Olejniczak prowadząca działalność pod nazwą <strong className="text-white">Sway pole &amp; aerial sports</strong>, ul. Jeansowa 18, Poznań, NIP: 7831904251, email: akademia.sway@gmail.com.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">2. Jakie dane zbieramy?</h2>
                <p>Możemy zbierać następujące dane osobowe:</p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li className="flex items-start gap-2"><span className="text-accent shrink-0">·</span> Imię i nazwisko</li>
                  <li className="flex items-start gap-2"><span className="text-accent shrink-0">·</span> Adres e-mail</li>
                  <li className="flex items-start gap-2"><span className="text-accent shrink-0">·</span> Numer telefonu</li>
                  <li className="flex items-start gap-2"><span className="text-accent shrink-0">·</span> Informacje przekazane w korespondencji (formularz kontaktowy, e-mail)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">3. W jakim celu przetwarzamy dane?</h2>
                <p>Twoje dane przetwarzamy w celu:</p>
                <ul className="mt-2 space-y-1 ml-4">
                  {[
                    "Realizacji zgłoszeń na szkolenia i obsługi zapisów (art. 6 ust. 1 lit. b RODO — niezbędność do zawarcia umowy)",
                    "Odpowiedzi na zapytania przesłane przez formularz kontaktowy lub e-mail (art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes administratora)",
                    "Wystawiania faktur i dokumentacji finansowej (art. 6 ust. 1 lit. c RODO — obowiązek prawny)",
                    "Przesyłania informacji o nadchodzących szkoleniach — wyłącznie po wyrażeniu zgody (art. 6 ust. 1 lit. a RODO)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">4. Jak długo przechowujemy dane?</h2>
                <p>
                  Dane przetwarzane w celu realizacji szkoleń przechowujemy przez okres niezbędny do wykonania umowy, a następnie przez okres wymagany przepisami prawa (np. przepisy podatkowe — 5 lat). Dane z korespondencji — przez okres niezbędny do obsługi zapytania i przez maksymalnie 12 miesięcy po jego zamknięciu.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">5. Twoje prawa</h2>
                <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
                <ul className="mt-2 space-y-1 ml-4">
                  {[
                    "Prawo dostępu do swoich danych",
                    "Prawo do sprostowania danych",
                    "Prawo do usunięcia danych ('prawo do bycia zapomnianym')",
                    "Prawo do ograniczenia przetwarzania",
                    "Prawo do przenoszenia danych",
                    "Prawo do sprzeciwu wobec przetwarzania",
                    "Prawo do cofnięcia zgody (gdy przetwarzanie odbywa się na jej podstawie)",
                    "Prawo do wniesienia skargi do organu nadzorczego (Prezes UODO)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  Aby skorzystać z powyższych praw, skontaktuj się ze mną: akademia.sway@gmail.com
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">6. Odbiorcy danych</h2>
                <p>
                  Twoje dane mogą być przekazywane podmiotom świadczącym usługi techniczne i administracyjne (np. hosting serwisu, obsługa płatności), wyłącznie w zakresie niezbędnym do realizacji tych usług i na podstawie odpowiednich umów powierzenia przetwarzania danych.
                </p>
                <p className="mt-2">
                  Nie sprzedajemy i nie udostępniamy Twoich danych osobowych podmiotom trzecim w celach marketingowych.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">7. Pliki cookies</h2>
                <p>
                  Strona może używać plików cookies w celu zapewnienia prawidłowego działania oraz analizy ruchu (Google Analytics z zanonimizowanym IP). Możesz zarządzać ustawieniami cookies w swojej przeglądarce — blokowanie cookies może wpłynąć na działanie niektórych funkcji strony.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">8. Kontakt</h2>
                <p>
                  W sprawach dotyczących ochrony danych osobowych możesz kontaktować się ze mną pod adresem: akademia.sway@gmail.com lub telefonicznie: +48 509 100 912.
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
