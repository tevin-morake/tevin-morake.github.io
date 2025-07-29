"use client";

import { contact } from "@/data/mockHomeData";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="px-4 py-32 bg-gray-50 sm:px-6 lg:px-8 lg:py-40" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center lg:mb-24">
          <h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter" style={{ fontSize: '39px', letterSpacing: '-0.04em' }}>
            {contact.title}
          </h2>
          <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999', }}>
            {contact.subtitle}
          </p>
          <p className="max-w-2xl mx-auto mt-2 text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999',  }}>
            {contact.description}
          </p>
        </div>

        {/* Contact Me Button */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
          >
            Contact me
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
