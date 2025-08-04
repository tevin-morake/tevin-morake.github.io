"use client";

import { hero } from "@/data/mockHomeData";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Component mount animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen px-4 pt-24 pb-16 overflow-hidden bg-white sm:px-6 lg:px-8" 
      id="home"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-br from-gray-100 to-gray-200 mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute rounded-full top-40 right-10 w-72 h-72 bg-gradient-to-br from-gray-100 to-gray-200 mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute rounded-full -bottom-32 left-20 w-72 h-72 bg-gradient-to-br from-gray-100 to-gray-200 mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Hero Text Content with Staggered Animation */}
        <div className="text-center">
          <h1 className={`text-black font-inter hero-title transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {hero.title}
          </h1>
          
          <p className={`max-w-3xl mx-auto font-inter hero-subtitle mb-16 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {hero.subtitle}
          </p>
        </div>

        {/* Enhanced Hero Image Section with Parallax */}
        <div className={`relative max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-1100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative group">
            {/* Main Image Container with Parallax */}
            <div 
              className="overflow-hidden transition-all duration-500 border-r-2 shadow-2xl aspect-video rounded-2xl bg-gradient-to-r from-black to-gray-900 border-muted group-hover:shadow-3xl"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div 
                  className="flex items-center justify-center w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                  }}
                >
                  <Image
                    src="/about/abuti.jpg"
                    alt="Tevin Morake - Senior Full-Stack Architect"
                    width={500}
                    height={600}
                    className="object-contain transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-100"></div>
            </div>

            {/* Floating Decorative Elements */}
            <div 
              className="absolute w-20 h-20 transition-all duration-500 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 -top-6 -right-6 opacity-60 group-hover:opacity-80 animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
              }}
            ></div>
            <div 
              className="absolute w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 -bottom-8 -left-8 opacity-40 group-hover:opacity-60 animate-pulse"
              style={{
                animationDelay: '2s',
                transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
              }}
            ></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-1300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="relative w-6 h-10 border-2 border-gray-300 rounded-full">
              <div className="absolute w-1 h-3 transform -translate-x-1/2 bg-gray-400 rounded-full top-2 left-1/2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
