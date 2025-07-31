"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/utils/analytics";

// Unified navigation structure that works across all pages
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/articles" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
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

  // Handle click animation
  const handleLinkClick = (linkName: string) => {
    setClickedItem(linkName);
    // Track navigation click
    trackEvent.menuClick(linkName);
    // Clear the animation state after the animation completes
    setTimeout(() => {
      setClickedItem(null);
    }, 150);
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
          const isClicked = clickedItem === link.name;
          return (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all duration-150 font-inter no-underline transform ${
                isActive 
                  ? "text-black" 
                  : "text-gray-400 hover:text-gray-700"
              } ${
                isClicked ? "scale-95" : "scale-100 hover:scale-105"
              }`}
              style={{ textDecoration: 'none' }}
              onClick={() => handleLinkClick(link.name)}
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
          className={`px-4 py-2 text-sm font-bold text-white no-underline transition-all duration-150 bg-black rounded-full hover:bg-gray-800 font-inter transform ${
            clickedItem === 'CTA' ? 'scale-95' : 'scale-100 hover:scale-105'
          }`}
          style={{ textDecoration: 'none' }}
          onClick={() => {
            handleLinkClick('CTA');
            trackEvent.ctaClick('View My Resume', 'Header Desktop');
          }}
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
            const isClicked = clickedItem === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-6 py-3 text-base font-medium transition-all duration-150 hover:bg-gray-50 no-underline transform ${
                  isActive 
                    ? "text-black font-bold bg-gray-50 border-r-4 border-black" 
                    : "text-gray-400 hover:text-gray-700"
                } ${
                  isClicked ? "scale-95" : "scale-100"
                }`}
                style={{ textDecoration: 'none' }}
                onClick={() => {
                  handleLinkClick(link.name);
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            );
          })}
          <div className="px-6 pt-4">
            <a
              href={ctaHref}
              className={`block w-full px-4 py-2 text-sm font-medium text-center text-white no-underline transition-all duration-150 bg-black rounded-full hover:bg-gray-800 transform ${
                clickedItem === 'CTA-mobile' ? 'scale-95' : 'scale-100'
              }`}
              style={{ textDecoration: 'none' }}
              onClick={() => {
                handleLinkClick('CTA-mobile');
                trackEvent.ctaClick('View My Resume', 'Header Mobile');
                setMenuOpen(false);
              }}
            >
              View My Resumè
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
