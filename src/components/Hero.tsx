"use client";

import { hero } from "@/data/mockHomeData";

export default function Hero() {
  return (
    <section className="min-h-screen px-4 pt-24 pb-16 bg-white sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Text Content */}
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl font-inter">
            {hero.title}
          </h1>
          <p className="mx-auto mb-16 max-w-3xl text-lg font-normal leading-relaxed sm:text-xl lg:text-2xl font-inter" style={{ color: '#999999' }}>
            {hero.subtitle}
          </p>
        </div>

        {/* Video/Media Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden shadow-2xl aspect-video rounded-2xl bg-gradient-to-r from-black to-gray-600" style={{ borderRight: '2px solid #999999' }}>
            <div className="flex items-center justify-center h-full">
              {/* Geometric Logo - Square, Circle, Triangle */}
              <div className="flex items-center space-x-4">
                {/* Square */}
                <div className="w-12 h-12 bg-white sm:h-16 sm:w-16"></div>
                {/* Circle */}
                <div className="w-12 h-12 bg-white rounded-full sm:h-16 sm:w-16"></div>
                {/* Triangle */}
                <div className="relative w-12 h-12 sm:h-16 sm:w-16">
                  <div 
                    className="absolute inset-0 bg-white"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
