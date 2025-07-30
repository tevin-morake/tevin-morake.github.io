"use client";

import { projects } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  // Show only the first 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="px-4 py-20 bg-white sm:px-6 lg:px-8 lg:py-24" id="work">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="mb-6 text-black font-inter section-header">
            Selected Work
          </h2>
          <p className="max-w-3xl mx-auto font-inter section-subheader">
            A curated collection of projects that showcase strategic thinking, 
            technical excellence, and results-driven solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative overflow-hidden transition-all duration-500 group bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:border-gray-200 hover:-translate-y-2"
            >
              {/* Project Image with Enhanced Overlay */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3}
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    title="View Live Project"
                  >
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      title="View Source Code"
                    >
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Project Category Badge */}
                {project.category && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.category}
                  </div>
                )}

                {/* Quick View Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <h4 className="font-bold text-lg mb-1">{project.name}</h4>
                    <p className="text-sm text-white/90 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-black transition-colors font-inter group-hover:text-gray-700">
                    {project.name}
                  </h3>
                  {project.status && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  )}
                </div>
                
                <p className="mb-4 text-base font-normal leading-relaxed font-inter text-muted line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Stack */}
                {project.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Enhanced Project Actions */}
                <div className="flex items-center justify-between">
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
                  
                  {project.completedDate && (
                    <span className="text-xs text-gray-500 font-inter">
                      {new Date(project.completedDate).getFullYear()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View All Projects Button */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <Link
              href="/projects"
              className="group inline-flex items-center px-8 py-4 text-base font-bold text-black transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 font-inter"
            >
              View all my projects
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-600 font-inter">
              Explore {projects.length}+ innovative solutions
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
