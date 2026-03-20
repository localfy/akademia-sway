"use client";

export default function ContactForm() {
  return (
    <form
      action="mailto:akademia.sway@gmail.com"
      method="get"
      encType="text/plain"
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-body font-medium text-text-secondary mb-1.5">
            Imię i nazwisko *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-surface border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
            placeholder="Anna Kowalska"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-body font-medium text-text-secondary mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-surface border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
            placeholder="anna@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-body font-medium text-text-secondary mb-1.5">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-surface border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
          placeholder="+48 500 000 000"
        />
      </div>
      <div>
        <label htmlFor="szkolenie" className="block text-sm font-body font-medium text-text-secondary mb-1.5">
          Jakie szkolenie Cię interesuje?
        </label>
        <select
          id="szkolenie"
          name="szkolenie"
          className="w-full bg-surface border border-white/20 rounded px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-accent transition-colors"
        >
          <option value="">-- wybierz szkolenie --</option>
          <option value="BASIC">BASIC</option>
          <option value="INTERMEDIATE">INTERMEDIATE</option>
          <option value="ADVANCED">ADVANCED</option>
          <option value="ABC DYNAMIKI">ABC DYNAMIKI</option>
          <option value="DYNAMIKA 2.0">DYNAMIKA 2.0</option>
          <option value="Nie wiem jeszcze">Nie wiem jeszcze</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-body font-medium text-text-secondary mb-1.5">
          Wiadomość *
        </label>
        <textarea
          id="message"
          name="body"
          required
          rows={5}
          className="w-full bg-surface border border-white/20 rounded px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Napisz coś o sobie, swoim doświadczeniu i pytaniach..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-3.5 bg-accent text-background font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-[1.01] font-body"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}
