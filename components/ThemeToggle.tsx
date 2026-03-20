"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"default" | "v2">("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sway-theme") || "default";
    apply(saved);
    setTheme(saved as "default" | "v2");
    setMounted(true);
  }, []);

  const apply = (t: string) => {
    if (t === "v2") {
      document.documentElement.setAttribute("data-theme", "v2");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const toggle = () => {
    const next = theme === "default" ? "v2" : "default";
    setTheme(next);
    localStorage.setItem("sway-theme", next);
    apply(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:border-accent/60 transition-all duration-300 group"
      title="Podgląd kolorystyki"
    >
      {/* Swatch A */}
      <span
        className="w-3 h-3 rounded-full transition-all duration-300"
        style={{
          backgroundColor: "#0F1A10",
          boxShadow: theme === "default" ? "0 0 0 2px rgb(201 164 108)" : "none",
        }}
      />
      {/* Swatch B */}
      <span
        className="w-3 h-3 rounded-full transition-all duration-300"
        style={{
          backgroundColor: "#3D5240",
          boxShadow: theme === "v2" ? "0 0 0 2px rgb(201 164 108)" : "none",
        }}
      />
      <span className="text-xs font-body text-text-muted group-hover:text-text-secondary transition-colors">
        {theme === "default" ? "Motyw A" : "Motyw B"}
      </span>
    </button>
  );
}
