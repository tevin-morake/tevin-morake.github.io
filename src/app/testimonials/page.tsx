"use client";

import { testimonials } from "@/data/mockHomeData";
import Link from "next/link";

export default function TestimonialsPage() {
  // Create initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  // Generate avatar colors based on name - using hero gradient
  const getAvatarColor = (name: string) => {
    // Use the same gradient as hero section for consistency
    return 'bg-gradient-to-r from-black to-gray-600';
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter">
              All Testimonials
            </h1>
            <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              Hear from colleagues, clients, and collaborators who've experienced firsthand 
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
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <svg className="w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="mb-6 text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base font-inter mr-4 ${getAvatarColor(testimonial.name)}`}>
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="mb-6">
              <p className="text-xl font-medium text-black font-inter">
                Ready to work together and create something exceptional?
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
