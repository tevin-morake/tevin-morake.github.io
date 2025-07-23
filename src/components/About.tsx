"use client";

import { about } from "@/data/mockHomeData";

export default function About() {
  return (
    <section className="min-h-screen px-4 py-16 bg-white sm:px-6 lg:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter">
            {about.title}
          </h2>
          <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
            {about.subtitle}
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Profile image placeholder with hero gradient */}
              <div className="flex items-center justify-center overflow-hidden w-80 h-80 rounded-2xl bg-gradient-to-r from-black to-gray-600">
                <div className="text-6xl font-bold text-white font-inter">
                  TM
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute w-24 h-24 bg-gray-100 rounded-full -top-4 -right-4 opacity-60"></div>
              <div className="absolute w-16 h-16 bg-gray-200 rounded-full -bottom-6 -left-6 opacity-40"></div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="flex flex-col justify-center">
            {/* Main Description */}
            <div className="mb-8">
              <p className="mb-6 text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                {about.description}
              </p>
              <p className="text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                {about.personalNote}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {about.stats.map((stat, index) => (
                <div key={index} className="p-4 text-center bg-gray-50 rounded-xl">
                  <div className="mb-1 text-2xl font-bold text-black font-inter">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-block px-8 py-4 text-base font-bold text-center text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
              >
                Let's Work Together
              </a>
              <a
                href="/cv/tevin-morake-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-base font-bold text-center text-black transition-colors bg-gray-100 rounded-full hover:bg-gray-200 font-inter"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy & Values Section */}
        <div className="mt-20">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Philosophy */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-black to-gray-600">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black font-inter">My Philosophy</h3>
              <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                Great software isn't just about clean code—it's about understanding the human problem behind every technical challenge and crafting solutions that truly make a difference.
              </p>
            </div>

            {/* Approach */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-black to-gray-600">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black font-inter">My Approach</h3>
              <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                I believe in rapid prototyping, continuous feedback, and iterative improvement. Every project starts with deep listening and ends with measurable impact.
              </p>
            </div>

            {/* Passion */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-black to-gray-600">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black font-inter">What Drives Me</h3>
              <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                The moment when complex requirements transform into intuitive user experiences. I'm passionate about mentoring others and contributing to open-source communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
