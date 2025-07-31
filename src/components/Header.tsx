"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Unified navigation structure that works across all pages
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "Blogs", href: "/articles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const logoHref = "/";
  const ctaHref = "/contact";

  // Simple function to determine if a link is active based on pathname only
  const isLinkActive = (link: typeof navigationLinks[0]) => {
    if (link.name === "Home") {
      return pathname === "/";
    }
    return pathname === link.href;
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-100 lg:px-12">
      <a href={logoHref} className="flex items-center no-underline" style={{ textDecoration: 'none' }}>
        <Image src="/logo.png" alt="Tevin Morake Logo" width={90} height={90} priority />
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden gap-8 md:flex">
        {navigationLinks.map((link) => {
          const isActive = isLinkActive(link);
          return (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors font-inter no-underline ${
                isActive 
                  ? "text-black" 
                  : "text-gray-400 hover:text-gray-700"
              }`}
              style={{ textDecoration: 'none' }}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <a
          href={ctaHref}
          className="px-4 py-2 text-sm font-bold text-white no-underline transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
          style={{ textDecoration: 'none' }}
        >
          View My Resumè
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
          {navigationLinks.map((link) => {
            const isActive = isLinkActive(link);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-6 py-3 text-base font-medium transition-colors hover:bg-gray-50 no-underline ${
                  isActive 
                    ? "text-black font-bold bg-gray-50 border-r-4 border-black" 
                    : "text-gray-400 hover:text-gray-700"
                }`}
                style={{ textDecoration: 'none' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <div className="px-6 pt-4">
            <a
              href={ctaHref}
              className="block w-full px-4 py-2 text-sm font-medium text-center text-white no-underline transition-colors bg-black rounded-full hover:bg-gray-800"
              style={{ textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              View My Resumè
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
