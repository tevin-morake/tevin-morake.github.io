/* eslint-disable react/no-unescaped-entities */
"use client";

import { about } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Simplified counter hook for animated stats
const useCounter = (end: number) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, isInView]);

  return { count, ref };
};

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Call useCounter for each stat at the top level
  const stat1Counter = useCounter(10); // Years Experience
  const stat2Counter = useCounter(50); // Projects Completed
  const stat3Counter = useCounter(20); // Technologies Mastered
  const stat4Counter = useCounter(3);  // Team Lead Experience

  const counters = [stat1Counter, stat2Counter, stat3Counter, stat4Counter];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatNumericValue = (value: string) => {
    const match = value.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  return (
    <section 
      ref={sectionRef}
      className="px-4 py-32 bg-white sm:px-6 lg:px-8 lg:py-40" 
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Streamlined */}
        <div className={`mb-20 text-center lg:mb-24 transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-4'
        }`}>
          <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter" style={{ fontSize: '39px', letterSpacing: '-0.04em' }}>
            {about.title}
          </h2>
          <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '25px' }}>
            {about.subtitle}
          </p>
        </div>

        <div className={`grid gap-16 mb-16 lg:grid-cols-2 lg:gap-24 transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0' : 'translate-y-8'
        }`}>
          {/* Left Column - Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className={`overflow-hidden shadow-2xl w-96 h-96 rounded-2xl transition-all duration-500 ${
                imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              } group-hover:shadow-3xl group-hover:scale-105 group-hover:shadow-gray-400/30`}>
                <Image
                  src="/about/abuti.jpg"
                  alt="Tevin Morake - About Me"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-gray-900/30 to-transparent group-hover:opacity-100"></div>
              </div>
              
              {/* Subtle decorative elements with theme colors */}
              <div className="absolute w-24 h-24 transition-all duration-500 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 -top-4 -right-4 opacity-20 group-hover:opacity-40 group-hover:from-gray-300 group-hover:to-gray-400 animate-pulse"></div>
              <div className="absolute w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 -bottom-6 -left-6 opacity-30 group-hover:opacity-50 group-hover:from-gray-400 group-hover:to-gray-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Status indicator with dual availability */}
              <div className="absolute cursor-pointer bottom-4 right-4 group/status">
                <div className="flex items-center gap-2 px-3 py-1 transition-all duration-300 border border-gray-100 rounded-full shadow-lg bg-white/95 backdrop-blur-sm hover:shadow-xl hover:bg-white group-hover/status:scale-110">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700 transition-colors group-hover/status:text-black">
                    Available
                  </span>
                </div>
                
                {/* Expandable tooltip on hover */}
                <div className="absolute right-0 invisible w-48 p-3 mb-2 transition-all duration-300 transform translate-y-2 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 bottom-full group-hover/status:opacity-100 group-hover/status:visible group-hover/status:translate-y-0">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Full-time opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Independent consulting</span>
                    </div>
                    <div className="pt-2 text-xs text-gray-500 border-t border-gray-100">
                      Let's discuss your project
                    </div>
                  </div>
                  {/* Arrow pointer */}
                  <div className="absolute w-0 h-0 border-t-4 border-l-4 border-r-4 top-full right-4 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Compact Content */}
          <div className="flex flex-col justify-center">
            {/* Main Description */}
            <div className="mb-8">
              <p className="mb-6 text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999', letterSpacing: '-0.06em' }}>
                {about.description}
              </p>
              <p className="text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999', letterSpacing: '-0.06em' }}>
                {about.personalNote}
              </p>
            </div>

            {/* Enhanced Stats Grid with animations */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {about.stats.map((stat, index) => {
                const counter = counters[index];
                
                return (
                  <div 
                    key={index} 
                    ref={counter.ref}
                    className={`group p-6 text-center bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 transform ${
                      isVisible ? 'translate-y-0' : 'translate-y-4'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="mb-2 text-3xl font-bold text-black transition-colors duration-300 font-inter group-hover:text-gray-700">
                      {stat.value.includes('+') ? `${counter.count}+` : counter.count.toString()}
                    </div>
                    <div className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick skills preview - Compact */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {['React & Next.js', 'Node.js & Laravel', 'AWS & DevOps'].map((skill, index) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white hover:shadow-md transform ${
                      isVisible ? 'translate-y-0' : 'translate-y-2'
                    }`}
                    style={{ transitionDelay: `${1200 + index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced but Compact Call-to-Action */}
        <div className={`text-center transition-all duration-700 delay-1000 ${
          isVisible ? 'translate-y-0' : 'translate-y-4'
        }`}>
          <div className="mb-6">
            <p className="mb-2 text-lg font-medium text-gray-700">
              Want the full story?
            </p>
            <p className="text-sm text-gray-500">
              Dive deeper into my journey, values, and what drives my passion for building exceptional software
            </p>
          </div>
          
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 text-base font-bold text-black transition-all duration-300 transform border-2 border-black rounded-full group hover:bg-black hover:text-white font-inter hover:shadow-xl hover:scale-105 hover:border-gray-800"
          >
            <span>Get to know me better</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
