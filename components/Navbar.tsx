"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/szkolenia", label: "Szkolenia" },
  { href: "/cennik", label: "Cennik" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-heading text-xl lg:text-2xl font-bold text-white tracking-wide">
              Akademia <span className="text-accent">Sway</span>
            </span>
            <span className="text-xs text-text-muted tracking-widest uppercase font-body">
              Joanny Olejniczak
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 font-body ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-secondary hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/kontakt"
              className="ml-4 px-5 py-2 bg-accent text-background text-sm font-semibold tracking-wide rounded transition-all duration-200 hover:bg-accent-hover hover:scale-105"
            >
              Zapisz się
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otwórz menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-surface border-t border-white/10 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-body transition-colors duration-200 ${
                pathname === link.href ? "text-accent" : "text-text-secondary hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="mt-2 px-5 py-2.5 bg-accent text-background text-sm font-semibold text-center rounded"
          >
            Zapisz się
          </Link>
          <div className="pt-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
