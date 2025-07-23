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
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-100 lg:px-12">
      <a href="#home" className="flex items-center">
        <Image src="/logo.png" alt="Tevin Morake Logo" width={90} height={90} priority />
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-bold text-gray-600 transition-colors hover:text-gray-900 font-inter"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <a
          href="#work"
          className="px-4 py-2 text-sm font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
        >
          View My Work
        </a>
      </div>
      {/* Mobile Hamburger Menu */}
      <button
        className="flex flex-col items-center justify-center w-8 h-8 md:hidden focus:outline-none"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span 
          className={`block w-5 h-0.5 bg-gray-800 mb-1 transition-transform ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`} 
        />
        <span 
          className={`block w-5 h-0.5 bg-gray-800 mb-1 transition-opacity ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`} 
        />
        <span 
          className={`block w-5 h-0.5 bg-gray-800 transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`} 
        />
      </button>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 z-40 flex flex-col w-full py-6 bg-white shadow-lg top-full md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-6 pt-4">
            <a
              href="#work"
              className="block w-full px-4 py-2 text-sm font-medium text-center text-white transition-colors bg-black rounded-full hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              View My Work
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
