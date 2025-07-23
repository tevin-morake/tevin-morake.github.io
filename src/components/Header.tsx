"use client";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-8 py-4 flex items-center justify-between bg-white/80 dark:bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-black/10 dark:border-white/10">
      <a href="#home" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Tevin Morake Logo" width={40} height={40} priority />
        <span className="sr-only">Tevin Morake Home</span>
      </a>
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="block w-6 h-0.5 bg-foreground mb-1 transition-transform" style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
        <span className={`block w-6 h-0.5 bg-foreground mb-1 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
        <span className="block w-6 h-0.5 bg-foreground transition-transform" style={{ transform: menuOpen ? "-rotate-45 translateY(-7px)" : "none" }} />
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-lg font-medium text-foreground hover:text-primary w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
