"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Articles from "@/components/Articles";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AbutiChatbot from "@/components/AbutiChatbot";

export default function Home() {
  const isChatbotEnabled = process.env.NEXT_PUBLIC_ENABLE_CHATBOT === 'true';

  useEffect(() => {
    // Clear the session variable when homepage loads
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('fromHome');
    }
  }, []);

  return (
    <main className="flex-1">
      <Hero />
      <Work />
      <Articles />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      {isChatbotEnabled && <AbutiChatbot />}
    </main>
  );
}
