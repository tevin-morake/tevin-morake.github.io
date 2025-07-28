"use client";

import { projects } from "@/data/mockHomeData";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter">
              All Projects
            </h1>
            <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              A comprehensive showcase of my work spanning various technologies, industries, 
              and challenges. Each project represents a unique solution crafted with precision and purpose.
            </p>
            

          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
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
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
