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
  "Media24": "/company-logos/media24.jpeg",
  "Accenture": "/company-logos/accenture.png",
  "Resend": "/company-logos/resend.png",
  "Rain": "/company-logos/rain.png",
};

// Helper function to highlight key phrases
const highlightKeyPhrases = (text: string) => {
  const keyPhrases = [
    'full stack', 'great teammate', 'problem-solving', 'sharp', 'collaborative',
    'skilled', 'hardworking', 'quality work', 'passion', 'insight',
    'detail-oriented', 'methodical', 'reliable', 'dedicated', 'talented',
    'accountable', 'proactive', 'leadership', 'mentoring', 'meticulous', 'thoughtful', 'thorough'
  ];
  
  let highlightedText = text;
  keyPhrases.forEach(phrase => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, `<span class="quote-highlight">$&</span>`);
  });
  
  return highlightedText;
};

export default function Testimonials() {
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
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
        if (diff > 0 && currentPage < totalPages - 1) {
          setCurrentPage(prev => prev + 1);
        } else if (diff < 0 && currentPage > 0) {
          setCurrentPage(prev => prev - 1);
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
  }, [currentPage, totalPages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
        setCurrentPage(prev => prev + 1);
      } else if (e.key === 'Escape' && selectedTestimonial) {
        setSelectedTestimonial(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, selectedTestimonial]);

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
              {Array.from({ length: totalPages }, (_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentPage ? 'bg-black' : 'bg-gray-300'}`}
                  onClick={() => setCurrentPage(index)}
                />
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="relative mb-16">
            {/* Left Arrow */}
            <button
              onClick={() => currentPage > 0 && setCurrentPage(prev => prev - 1)}
              className={`absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-black border-2 border-black transition-all duration-200 hover:bg-gray-800 hover:border-gray-800 hover:scale-105 ${
                currentPage === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
              }`}
              disabled={currentPage === 0}
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => currentPage < totalPages - 1 && setCurrentPage(prev => prev + 1)}
              className={`absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-black border-2 border-black transition-all duration-200 hover:bg-gray-800 hover:border-gray-800 hover:scale-105 ${
                currentPage === totalPages - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
              }`}
              disabled={currentPage === totalPages - 1}
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonials Container */}
            <div 
              ref={containerRef}
              className="overflow-hidden"
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentPage * 100}%)`,
                }}
              >
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <div 
                  key={pageIndex}
                  className="grid flex-shrink-0 w-full gap-8 md:grid-cols-3"
                  style={{ minWidth: '100%' }}
                >
                  {testimonials.slice(pageIndex * testimonialsPerPage, (pageIndex + 1) * testimonialsPerPage).map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex flex-col h-full px-4 md:px-0"
                    >
                  <div className="relative flex flex-col h-full p-8 bg-white border border-gray-100 testimonial-card testimonial-entrance rounded-2xl hover:border-gray-200">
                    {/* Quote */}
                    <div className="relative flex-1 mb-6">
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
                                className="mt-2 text-sm font-medium text-black cursor-pointer hover:text-gray-700"
                              >
                                Read full testimonial
                              </button>
                            )}
                          </>
                        );
                      })()}
                    </div>

                    {/* Project Context */}
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-black rounded-full">
                        {testimonial.project}
                      </div>
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
                                className="transition-colors cursor-pointer"
                                style={{ color: '#0A66C2' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = '#004182';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = '#0A66C2';
                                }}
                                aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </a>
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
                    </div>
                  ))}
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Mobile Swipe Indicators */}
          <div className="mb-8 swipe-indicator md:hidden">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                className={`swipe-dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(index)}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer modal-overlay"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-bold text-black">Full Testimonial</h3>
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="p-2 text-gray-400 transition-colors rounded-full hover:text-black hover:bg-gray-100"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Project Context in Modal */}
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-black rounded-full">
              {selectedTestimonial.project}
            </div>
            
            <blockquote 
              className="mb-6 text-lg leading-relaxed text-gray-700"
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
              <div className="flex-1">
                <div className="font-bold text-black">{selectedTestimonial.name}</div>
                <div className="text-sm text-gray-600">{selectedTestimonial.title}</div>
                {selectedTestimonial.company && (
                  <div className="flex items-center gap-2 mt-1">
                    {companyLogos[selectedTestimonial.company] && (
                      <Image 
                        src={companyLogos[selectedTestimonial.company]} 
                        alt={`${selectedTestimonial.company} logo`}
                        width={20}
                        height={20}
                        className="company-logo"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                    <div className="text-sm font-medium text-black">{selectedTestimonial.company}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
