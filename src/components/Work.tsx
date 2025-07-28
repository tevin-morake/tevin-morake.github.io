"use client";

import { projects } from "@/data/mockHomeData";
import Link from "next/link";

export default function Work() {
  // Show only the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="min-h-screen px-4 py-16 bg-white sm:px-6 lg:px-8" id="work">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-black font-inter" style={{ fontFamily: 'Inter', fontSize: '35px', letterSpacing: '-0.03em' }}>
            Selected Work
          </h2>
          <p className="max-w-3xl mx-auto font-inter" style={{ color: '#999999', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '25px' }}>
            A curated collection of projects that showcase strategic thinking, 
            technical excellence, and results-driven solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative overflow-hidden transition-all duration-300 group bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-r from-black to-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-300 font-inter">
                      Project {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-black transition-colors font-inter group-hover:text-gray-700">
                  {project.name}
                </h3>
                <p className="mb-4 text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                  {project.description}
                </p>
                
                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-black transition-colors hover:text-gray-700 font-inter"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 text-base font-bold text-black transition-colors border-2 border-black rounded-full hover:bg-black hover:text-white font-inter"
          >
            View all my projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>


      </div>
    </section>
  );
}
