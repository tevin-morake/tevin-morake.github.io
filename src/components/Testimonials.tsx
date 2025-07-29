"use client";

import { testimonials } from "@/data/mockHomeData";
import Link from "next/link";

export default function Testimonials() {
  // Show only the first 3 testimonials on the homepage
  const featuredTestimonials = testimonials.slice(0, 3);

  // Create initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  // Generate avatar colors based on name - using hero gradient
  const getAvatarColor = () => {
    // Use the same gradient as hero section for consistency
    return 'bg-gradient-to-r from-black to-gray-600';
  };

  return (
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

        {/* Testimonials Grid */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-gray-200"
            >
              {/* Quote */}
              <blockquote className="mb-6 text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Project Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-bold text-black bg-gray-100 rounded-full font-inter">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm font-inter mr-4 ${getAvatarColor()}`}>
                  {getInitials(testimonial.name)}
                </div>

                {/* Name and Title */}
                <div>
                  <div className="text-lg font-bold text-black font-inter">
                    {testimonial.name}
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
  );
}
