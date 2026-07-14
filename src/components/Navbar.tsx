"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#menu", label: "Menu" },
  { href: "#book", label: "Booking" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/70 bg-ink/85 shadow-[0_10px_40px_-32px_rgba(201,162,75,0.7)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 text-cream transition-all duration-300 hover:text-gold"
        >
          <Image
            src={site.logo}
            alt={`${site.shortName} logo`}
            width={42}
            height={40}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
          <span className="hidden font-serif text-base font-semibold tracking-[0.12em] sm:inline sm:text-xl sm:tracking-[0.15em]">
            {site.wordmark}
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button group inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Book a Table</span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream/80 transition-colors duration-300 hover:border-gold/50 hover:text-gold md:hidden"
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        } transition-all duration-300 ease-out`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-line bg-ink/92 p-3 shadow-[0_24px_70px_-50px_rgba(201,162,75,0.7)] backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-cream/75 transition-colors duration-300 hover:bg-gold/10 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
