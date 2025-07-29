"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const homeNavLinks = [
  { name: "Work", href: "#work" },
  { name: "Blog", href: "/articles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const otherPageNavLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/articles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Determine which navigation links to show based on current page
  const isHomePage = pathname === "/";
  const navLinks = isHomePage ? homeNavLinks : otherPageNavLinks;
  const logoHref = isHomePage ? "#home" : "/";
  const ctaHref = "/contact";

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-100 lg:px-12">
     
    </header>
  );
}
