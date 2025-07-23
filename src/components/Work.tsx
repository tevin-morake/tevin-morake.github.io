"use client";

import { projects } from "@/data/mockHomeData";

export default function Work() {
  return (
    <section className="min-h-screen px-4 py-16 bg-white sm:px-6 lg:px-8" id="work">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter mb-6">
            Selected Work
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
            A curated collection of projects that showcase strategic thinking, 
            technical excellence, and results-driven solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600 font-inter">
                      Project {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black font-inter mb-3 group-hover:text-gray-700 transition-colors">
                  {project.name}
                </h3>
                <p className="text-base font-normal leading-relaxed font-inter mb-4" style={{ color: '#999999' }}>
                  {project.description}
                </p>
                
                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-black hover:text-gray-700 transition-colors font-inter"
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-black rounded-full hover:bg-gray-800 transition-colors font-inter"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
