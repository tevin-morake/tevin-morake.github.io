"use client";

import { hero } from "@/data/mockHomeData";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen px-4 pt-24 pb-16 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Text Content */}
        <div className="text-center">
          <h1 className="font-bold text-black font-inter" style={{ fontSize: '39px', letterSpacing: '-0.04em' }}>
            {hero.title}
          </h1>
          <p className="max-w-3xl mx-auto mb-16 font-inter" style={{ color: '#999999', fontWeight: 700, fontSize: '35px', letterSpacing: '-0.04em' }}>
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
