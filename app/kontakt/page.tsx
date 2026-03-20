import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Kontakt | Akademia Sway — Szkolenia Pole Dance Poznań",
  description:
    "Skontaktuj się z Akademią Sway — Joanna Olejniczak. Email: akademia.sway@gmail.com, telefon: 509 100 912. Poznań, ul. Jeansowa 18.",
  openGraph: {
    type: "website",
    url: "https://akademia-sway.pl/kontakt",
    images: [{ url: "/joanna-3.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://akademia-sway.pl/kontakt",
  },

};
const contactMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
    label: "Email",
    value: "akademia.sway@gmail.com",
    href: "mailto:akademia.sway@gmail.com",
    desc: "Odpowiadam zazwyczaj tego samego dnia",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    ),
    label: "Telefon",
    value: "509 100 912",
    href: "tel:+48509100912",
    desc: "Pn–Pt, godz. 10:00–19:00",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label: "Instagram",
    value: "@akademia.sway",
    href: "https://www.instagram.com/akademia.sway",
    desc: "Wiadomość bezpośrednia — szybka odpowiedź",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/joanna-7.jpg')" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-white text-xs tracking-[0.3em] uppercase font-body mb-3">Kontakt</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Napisz do mnie
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-xl mx-auto leading-relaxed">
              Masz pytania o szkolenia, terminy lub chcesz się zapisać? Odezwij się — odpowiadam szybko.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Karty kontaktu */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((item) => (
              <AnimatedSection key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center bg-surface border border-white/10 rounded p-8 hover:border-accent/40 transition-all duration-200 h-full"
                >
                  <div className="w-16 h-16 bg-accent/25 rounded-full flex items-center justify-center text-accent mb-4 group-hover:bg-accent/40 transition-colors border border-accent/30">
                    {item.icon}
                  </div>
                  <p className="text-accent text-xs font-body tracking-widest uppercase mb-2 font-semibold">{item.label}</p>
                  <p className="text-white font-body font-semibold text-sm mb-2 group-hover:text-accent transition-colors">
                    {item.value}
                  </p>
                  <p className="text-white/70 font-body text-xs leading-relaxed">{item.desc}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Jak się zapisać */}
          <AnimatedSection>
            <div className="bg-surface border border-white/10 rounded p-8 mb-12">
              <h2 className="font-heading text-xl font-bold text-white mb-6 text-center">Jak się zapisać na szkolenie?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { step: "1", text: "Wybierz szkolenie i termin który Cię interesuje" },
                  { step: "2", text: "Napisz do mnie — email, telefon lub IG" },
                  { step: "3", text: "Podaj imię, nazwisko i numer telefonu" },
                  { step: "4", text: "Zaliczka (100 zł) rezerwuje Twoje miejsce" },
                ].map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-heading font-bold text-xl shrink-0">
                      {item.step}
                    </div>
                    <p className="text-white font-body text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-background pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-white/70 font-body text-sm text-center mb-4">Studio Sway — ul. Jeansowa 18, Poznań</p>
            <div className="rounded overflow-hidden border border-white/10 h-72 lg:h-80">
              <iframe
                src="https://maps.google.com/maps?q=Studio+Sway+pole+dance+Pozna%C5%84&output=embed&hl=pl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Akademia Sway — ul. Jeansowa 18, Poznań"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
