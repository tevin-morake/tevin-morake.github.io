"use client";

import { testimonials } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { truncateText, getInitials, getAvatarColor, normalizeTextLength } from "@/utils/testimonialUtils";
import Footer from "@/components/Footer";

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
    'skilled', 'hardworking', 'quality work', 'passion', 'insight', 'mentorship', 'medical industry',
    'detail-oriented', 'methodical', 'reliable', 'dedicated', 'talented', 'high-stakes', 'critical',
    'accountable', 'proactive', 'leadership', 'mentoring', 'meticulous', 'thoughtful', 'thorough','principled','reliability', 'lead'
  ];
  
  let highlightedText = text;
  keyPhrases.forEach(phrase => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, `<span class="quote-highlight">$&</span>`);
  });
  
  return highlightedText;
};

type SortField = 'name' | 'company' | 'project' | 'created_at';
type SortOrder = 'asc' | 'desc';

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [filters, setFilters] = useState({
    company: '',
    project: '',
  });
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Get unique values for filters
  const companies = useMemo(() => {
    return Array.from(new Set(testimonials.map(t => t.company).filter(Boolean))).sort();
  }, []);

  // Filter and sort testimonials
  const filteredAndSortedTestimonials = useMemo(() => {
    const filtered = testimonials.filter(testimonial => {
      if (filters.company && testimonial.company !== filters.company) return false;
      if (filters.project && testimonial.project !== filters.project) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'company':
          aValue = (a.company || '').toLowerCase();
          bValue = (b.company || '').toLowerCase();
          break;
        case 'project':
          aValue = a.project.toLowerCase();
          bValue = b.project.toLowerCase();
          break;
        case 'created_at':
          aValue = new Date(a.created_at).getTime();
          bValue = new Date(b.created_at).getTime();
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filters, sortField, sortOrder]);

  const clearFilters = () => {
    setFilters({ company: '', project: '' });
    setSortField('created_at');
    setSortOrder('desc');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-black font-inter hero-title">
              All Testimonials
            </h1>
            <p className="max-w-3xl mx-auto leading-relaxed font-inter section-subheader" style={{fontSize: '27px', letterSpacing: '-0.06em'}}>
              Hear from colleagues, clients, and collaborators who&apos;ve experienced firsthand 
              the impact of working together on challenging projects and innovative solutions.
            </p>
          </div>

          {/* Elegant Filter & Sort Controls */}
          <div className="mb-12">
            {/* Filter Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {/* Company Filter Pills */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilters(prev => ({ ...prev, company: '' }))}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all font-inter ${
                    !filters.company 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All Companies
                </button>
                {companies.map(company => (
                  <button
                    key={company}
                    onClick={() => setFilters(prev => ({ ...prev, company }))}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all font-inter ${
                      filters.company === company
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {company}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Filter Pills */}
            {/* <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <button
                onClick={() => setFilters(prev => ({ ...prev, project: '' }))}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all font-inter ${
                  !filters.project 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Projects
              </button>
              {projects.map(project => (
                <button
                  key={project}
                  onClick={() => setFilters(prev => ({ ...prev, project }))}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all font-inter ${
                    filters.project === project
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {project}
                </button>
              ))}
            </div> */}

            {/* Sort Controls & Results */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 font-inter">Sort by:</span>
                <div className="flex items-center gap-2">
                  {(['created_at', 'name', 'company', /* 'project' */] as SortField[]).map(field => (
                    <button
                      key={field}
                      onClick={() => setSortField(field)}
                      className={`px-3 py-1 text-sm font-medium rounded-lg transition-all font-inter ${
                        sortField === field
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {field === 'created_at' ? 'Date' : field.charAt(0).toUpperCase() + field.slice(1)}
                    </button>
                  ))}
                  <button
                    onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                    className="p-2 text-gray-600 transition-all rounded-lg hover:bg-gray-100 font-inter"
                    title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {sortOrder === 'asc' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 font-inter">
                  {filteredAndSortedTestimonials.length} testimonial{filteredAndSortedTestimonials.length !== 1 ? 's' : ''}
                </span>
                {(filters.company || filters.project || sortField !== 'created_at' || sortOrder !== 'desc') && (
                  <button
                    onClick={clearFilters}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-black font-inter"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col h-full"
              >
                <div className="relative flex flex-col justify-between h-full p-8 bg-white border border-gray-100 testimonial-card testimonial-entrance rounded-2xl hover:border-gray-200">
                  {/* Quote */}
                  <div className="relative flex-1 mb-6">
                    {(() => {
                      const { truncated, needsTruncation } = truncateText(testimonial.quote);
                      const normalizedText = normalizeTextLength(needsTruncation ? truncated : testimonial.quote, 150);
                      return (
                        <>
                          <blockquote 
                            className={`text-base font-normal leading-relaxed font-inter ${needsTruncation ? 'cursor-pointer' : ''}`}
                            style={{ color: '#999999', letterSpacing: '-0.07em', minHeight: '100px' }}
                            onClick={() => {
                              if (needsTruncation) {
                                setSelectedTestimonial(testimonial);
                              }
                            }}
                            dangerouslySetInnerHTML={{ 
                              __html: highlightKeyPhrases(normalizedText)
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

                    {/* Bottom Section - Project and Author */}
                    <div className="mt-auto">
                      {/* Project Context */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-black rounded-full">
                          {testimonial.project}
                        </div>
                        <div className="text-xs text-gray-500 font-inter">
                          {new Date(testimonial.created_at).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short' 
                          })}
                        </div>
                      </div>                    {/* Author */}
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
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="mb-6">
              <p className="text-xl font-medium text-black font-inter">
                Ready to work together and create something exceptional?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
            >
              Let&apos;s Collaborate
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

      <Footer />
    </main>
  );
}
