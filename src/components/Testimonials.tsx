"use client";

import { testimonials } from "@/data/mockHomeData";

export default function Testimonials() {
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
    <section className="min-h-screen px-4 py-16 bg-gray-50 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter">
            What My Colleagues Say
          </h2>
          <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
            Testimonies from those who've worked alongside me
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
              <blockquote className="mb-6 text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                "{testimonial.quote}"
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
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm font-inter mr-4 ${getAvatarColor(testimonial.name)}`}>
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
          <div className="mb-4">
            <p className="text-lg font-medium text-black font-inter">
              Ready to work together and create something exceptional?
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
