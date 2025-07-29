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
              className="relative overflow-hidden transition-all duration-300 group bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 3} // Prioritize first 3 images
                />
                <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/10" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-black transition-colors font-inter group-hover:text-gray-700">
                  {project.name}
                </h3>
                <p className="mb-4 text-base font-normal leading-relaxed font-inter text-muted">
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
