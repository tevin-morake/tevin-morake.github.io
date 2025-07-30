"use client";

import { testimonials } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { truncateText, getInitials, getAvatarColor } from "@/utils/testimonialUtils";

// Company logos mapping
const companyLogos: Record<string, string> = {
  "Swipe iX": "/company-logos/swipe-logo.png",
  "Rapidtrade": "/company-logos/rapidtrade.png",
  "Media24": "/company-logos/media24.png",
  "Accenture": "/company-logos/accenture.png",
};

// Helper function to highlight key phrases
const highlightKeyPhrases = (text: string) => {
  const keyPhrases = [
    'full stack', 'great teammate', 'problem-solving', 'sharp', 'collaborative',
    'skilled', 'hardworking', 'quality work', 'passion', 'insight',
    'detail-oriented', 'methodical', 'reliable', 'dedicated', 'talented',
    'accountable', 'proactive', 'leadership', 'mentoring'
  ];
  
  let highlightedText = text;
  keyPhrases.forEach(phrase => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, `<span class="quote-highlight">$&</span>`);
  });
  
  return highlightedText;
};

export default function Testimonials() {
  // Show only the first 3 testimonials on the homepage
  const featuredTestimonials = testimonials.slice(0, 3);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linkedinPreview, setLinkedinPreview] = useState<{id: number, show: boolean}>({id: 0, show: false});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle swipe for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      
      const diff = startX - currentX;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0 && currentIndex < featuredTestimonials.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else if (diff < 0 && currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
      }
      
      isDragging = false;
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, featuredTestimonials.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < featuredTestimonials.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.key === 'Escape' && selectedTestimonial) {
        setSelectedTestimonial(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, featuredTestimonials.length, selectedTestimonial]);

  const handleLinkedinHover = (id: number, show: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (show) {
      setLinkedinPreview({id, show: true});
    } else {
      timeoutRef.current = setTimeout(() => {
        setLinkedinPreview({id: 0, show: false});
      }, 300);
    }
  };

  return (
    <>
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-8 lg:py-24" id="testimonials">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center lg:mb-20">
            <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter" style={{ fontSize: '39px', letterSpacing: '-0.04em' }}>
              What My Colleagues Say
            </h2>
            <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '25px' }}>
              Testimonies from those who&apos;ve worked alongside me
            </p>
          </div>

          {/* Progress Indicators for Desktop */}
          <div className="justify-center hidden mb-8 md:flex">
            <div className="flex gap-2">
              {featuredTestimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div 
            ref={containerRef}
            className="grid gap-8 mb-16 testimonials-grid md:grid-cols-3"
          >
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative p-8 bg-white border border-gray-100 testimonial-card testimonial-entrance rounded-2xl hover:border-gray-200"
              >
                {/* Quote */}
                <div className="relative mb-6">
                  {(() => {
                    const { truncated, needsTruncation } = truncateText(testimonial.quote);
                    return (
                      <>
                        <blockquote 
                          className={`text-base font-normal leading-relaxed font-inter ${needsTruncation ? 'cursor-pointer' : ''}`}
                          style={{ color: '#999999', letterSpacing: '-0.07em' }}
                          onClick={() => {
                            if (needsTruncation) {
                              setSelectedTestimonial(testimonial);
                            }
                          }}
                          dangerouslySetInnerHTML={{ 
                            __html: highlightKeyPhrases(needsTruncation ? truncated : testimonial.quote)
                          }}
                        />
                        
                        {needsTruncation && (
                          <button
                            onClick={() => setSelectedTestimonial(testimonial)}
                            className="mt-2 text-sm font-medium text-black hover:text-gray-700"
                          >
                            Read full testimonial
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* Project Context */}
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-black rounded-full">
                  {testimonial.project}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextElementSibling) {
                            (target.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div 
                      className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white"
                      style={{ 
                        backgroundColor: getAvatarColor(),
                        display: testimonial.avatar ? 'none' : 'flex'
                      }}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-base font-bold text-black font-inter">
                        {testimonial.name}
                      </div>
                      {testimonial.linkedin && (
                        <div className="relative">
                          <a
                            href={testimonial.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition-colors hover:text-blue-600"
                            aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                            onMouseEnter={() => handleLinkedinHover(testimonial.id, true)}
                            onMouseLeave={() => handleLinkedinHover(testimonial.id, false)}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          
                          {/* LinkedIn Preview */}
                          {linkedinPreview.show && linkedinPreview.id === testimonial.id && (
                            <div className="absolute left-0 mb-2 linkedin-preview show bottom-full">
                              <div className="text-sm font-medium">{testimonial.name}</div>
                              <div className="text-xs text-gray-600">{testimonial.title}</div>
                              <div className="text-xs text-gray-500">{testimonial.company}</div>
                              <div className="mt-1 text-xs text-blue-600">View LinkedIn Profile</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                        {testimonial.title}
                      </div>
                    </div>
                    {testimonial.company && (
                      <div className="flex items-center gap-2">
                        {companyLogos[testimonial.company] && (
                          <Image 
                            src={companyLogos[testimonial.company]} 
                            alt={`${testimonial.company} logo`}
                            width={20}
                            height={20}
                            className="company-logo"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        )}
                        <div className="text-sm font-medium text-black font-inter">
                          {testimonial.company}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Indicators */}
          <div className="swipe-indicator md:hidden">
            {featuredTestimonials.map((_, index) => (
              <div
                key={index}
                className={`swipe-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* View All Testimonials Button */}
          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center px-6 py-3 text-base font-bold text-black transition-colors border-2 border-black rounded-full hover:bg-black hover:text-white font-inter"
            >
              View all testimonials
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Full Testimonial Modal */}
      {selectedTestimonial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-bold">Full Testimonial</h3>
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="p-2 text-gray-400 hover:text-gray-600"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <blockquote 
              className="mb-6 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: highlightKeyPhrases(selectedTestimonial.quote)
              }}
            />
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
                {selectedTestimonial.avatar ? (
                  <Image
                    src={selectedTestimonial.avatar}
                    alt={selectedTestimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div 
                    className="flex items-center justify-center w-full h-full font-bold text-white"
                    style={{ backgroundColor: getAvatarColor() }}
                  >
                    {getInitials(selectedTestimonial.name)}
                  </div>
                )}
              </div>
              <div>
                <div className="font-bold">{selectedTestimonial.name}</div>
                <div className="text-sm text-gray-600">{selectedTestimonial.title}</div>
                <div className="text-sm font-medium">{selectedTestimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
