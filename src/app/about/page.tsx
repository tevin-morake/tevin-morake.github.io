"use client";

import { about } from "@/data/mockHomeData";
import Link from "next/link";

// Extended about data for the detailed page
const extendedAbout = {
  philosophies: [
    {
      title: "Code as Communication",
      description: "I believe code is primarily written for humans, not machines. Every line should tell a story, every function should have a clear purpose, and every architecture should be self-documenting."
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so must we. I dedicate time daily to learning new concepts, experimenting with emerging technologies, and challenging my existing assumptions."
    },
    {
      title: "User-Centric Development",
      description: "Behind every technical requirement is a human need. I always start by understanding the user's journey and pain points before diving into technical solutions."
    },
    {
      title: "Collaborative Excellence",
      description: "The best solutions emerge from diverse perspectives. I value open communication, constructive feedback, and the collective wisdom of cross-functional teams."
    }
  ],
  interests: [
    {
      category: "Technology",
      items: ["AI/Machine Learning", "Cloud Architecture", "DevOps Culture", "Open Source Contributions", "Emerging Web Standards"]
    },
    {
      category: "Personal Growth",
      items: ["Technical Writing", "Mentoring Developers", "Public Speaking", "Community Building", "Leadership Development"]
    },
    {
      category: "Creative Pursuits",
      items: ["Photography", "Music Production", "Digital Art", "Creative Writing", "Design Thinking"]
    },
    {
      category: "Lifestyle",
      items: ["Hiking & Nature", "Cooking", "Reading", "Travel", "Fitness & Wellness"]
    }
  ],
  values: [
    {
      title: "Integrity",
      description: "Honest communication about capabilities, timelines, and challenges. I believe trust is built through transparency."
    },
    {
      title: "Excellence",
      description: "Striving for quality in every deliverable, from code architecture to user experience to team collaboration."
    },
    {
      title: "Growth Mindset",
      description: "Embracing challenges as opportunities to learn and viewing failures as stepping stones to mastery."
    },
    {
      title: "Impact",
      description: "Focusing on solutions that create meaningful value for users, businesses, and the broader tech community."
    }
  ],
  workStyle: {
    approach: "I thrive in collaborative environments where ideas can be freely exchanged and iterated upon. My approach combines strategic thinking with hands-on execution, ensuring that technical decisions align with business objectives.",
    strengths: ["System Architecture", "Team Leadership", "Problem Solving", "Technical Communication", "Agile Methodologies"],
    tools: ["Next.js/React", "Node.js", "TypeScript", "AWS/Cloud", "Docker/Kubernetes", "PostgreSQL/MongoDB", "Git/CI/CD"]
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter">
              Get to Know Me Better
            </h1>
            <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              Beyond the code and technical expertise lies a passion for continuous learning, 
              meaningful collaboration, and creating solutions that truly make a difference.
            </p>
            

          </div>

          {/* Profile Section */}
          <div className="grid gap-16 mb-20 lg:grid-cols-2 lg:gap-24">
            {/* Left Column - Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Profile image placeholder with hero gradient */}
                <div className="flex items-center justify-center overflow-hidden w-80 h-80 rounded-2xl bg-gradient-to-r from-black to-gray-600">
                  <div className="text-6xl font-bold text-white font-inter">
                    TM
                  </div>
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

          {/* My Philosophy Section */}
          <section className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black font-inter">
                My Philosophy
              </h2>
              <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                The principles that guide my approach to technology, collaboration, and continuous growth.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {extendedAbout.philosophies.map((philosophy, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="mb-4 text-xl font-bold text-black font-inter">
                    {philosophy.title}
                  </h3>
                  <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                    {philosophy.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values Section */}
          <section className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black font-inter">
                Core Values
              </h2>
              <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                The fundamental beliefs that shape how I work, collaborate, and contribute to every project.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {extendedAbout.values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-black to-gray-600">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black font-inter">
                    {value.title}
                  </h3>
                  <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Interests & Hobbies Section */}
          <section className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black font-inter">
                Interests & Hobbies
              </h2>
              <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                The diverse interests that fuel my creativity and keep me inspired outside of work.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {extendedAbout.interests.map((interest, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="mb-4 text-lg font-bold text-black font-inter">
                    {interest.category}
                  </h3>
                  <ul className="space-y-2">
                    {interest.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Work Style Section */}
          <section className="mb-20">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black font-inter">
                How I Work
              </h2>
              <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                My approach to collaboration, problem-solving, and delivering exceptional results.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Approach */}
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-black font-inter">
                  My Approach
                </h3>
                <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                  {extendedAbout.workStyle.approach}
                </p>
              </div>

              {/* Strengths */}
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-black font-inter">
                  Key Strengths
                </h3>
                <ul className="space-y-2">
                  {extendedAbout.workStyle.strengths.map((strength, index) => (
                    <li key={index} className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                      • {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-black font-inter">
                  Favorite Tools
                </h3>
                <ul className="space-y-2">
                  {extendedAbout.workStyle.tools.map((tool, index) => (
                    <li key={index} className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                      • {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-6">
              <p className="text-xl font-medium text-black font-inter">
                Ready to collaborate and create something amazing together?
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
