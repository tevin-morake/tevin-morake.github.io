"use client";

import { testimonials } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { truncateText, getInitials, getAvatarColor } from "@/utils/testimonialUtils";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

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

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative p-8 transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-gray-200"
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
                          onMouseEnter={() => needsTruncation && setActiveTooltip(testimonial.id)}
                          onMouseLeave={() => setActiveTooltip(null)}
                          onClick={() => {
                            // Toggle tooltip on mobile (touch devices)
                            if (needsTruncation) {
                              setActiveTooltip(activeTooltip === testimonial.id ? null : testimonial.id);
                            }
                          }}
                        >
                          &ldquo;{truncated}&rdquo;
                        </blockquote>

                        {/* Tooltip for full quote */}
                        {needsTruncation && activeTooltip === testimonial.id && (
                          <div className="absolute z-10 max-w-sm p-4 mt-2 text-sm font-normal leading-relaxed text-white bg-black rounded-lg shadow-lg font-inter">
                            <div className="relative">
                              &ldquo;{testimonial.quote}&rdquo;
                              {/* Tooltip arrow */}
                              <div className="absolute w-0 h-0 border-b-4 border-l-4 border-r-4 border-transparent -top-6 left-4 border-b-black"></div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* Project Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-bold text-black bg-gray-100 rounded-full font-inter">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  {/* Avatar */}
                  <div className="relative w-12 h-12 mr-4">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        width={48}
                        height={48}
                        className="object-cover w-12 h-12 rounded-full"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm font-inter ${getAvatarColor()}`}>
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                  </div>

                  {/* Name and Title */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold text-black font-inter">
                        {testimonial.name}
                      </div>
                      {testimonial.linkedin && (
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 transition-colors hover:text-blue-600"
                          aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                      {testimonial.title}
                    </div>
                    {testimonial.company && (
                      <div className="text-sm font-medium text-black font-inter">
                        {testimonial.company}
                      </div>
                    )}
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
      <Footer />
    </main>
  );
}
