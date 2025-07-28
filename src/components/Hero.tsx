"use client";

import { hero } from "@/data/mockHomeData";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen px-4 pt-24 pb-16 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Text Content */}
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl font-inter">
            {hero.title}
          </h1>
          <p className="max-w-3xl mx-auto mb-16 text-lg font-normal leading-relaxed sm:text-xl lg:text-2xl font-inter" style={{ color: '#999999' }}>
            {hero.subtitle}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden shadow-2xl aspect-video rounded-2xl bg-gradient-to-r from-black to-gray-900" style={{ borderRight: '2px solid #999999' }}>
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src="/about/abuti.jpg"
                  alt="Tevin Morake - Hero Image"
                  width={500}
                  height={600}
                  // layout="responsive"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
