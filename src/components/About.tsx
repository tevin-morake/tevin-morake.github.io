"use client";

import { about } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";

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

        <div className="grid gap-16 mb-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Profile image */}
              <div className="overflow-hidden shadow-2xl w-96 h-96 rounded-2xl">
                <Image
                  src="/about/abuti.jpg"
                  alt="Tevin Morake - About Me"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
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
          </div>
        </div>

        {/* Get to Know Me Better Button */}
        <div className="mb-16 text-center">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 text-base font-bold text-black transition-colors border-2 border-black rounded-full hover:bg-black hover:text-white font-inter"
          >
            Get to know me better
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-bold text-center text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
            >
              Let&apos;s Work Together
            </Link>
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
    </section>
  );
}
