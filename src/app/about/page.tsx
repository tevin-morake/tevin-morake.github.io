"use client";

import { about } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Enhanced counter hook for animated stats
const useCounter = (end: number) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, isInView]);

  return { count, ref };
};

// Extended about data for the detailed page
const extendedAbout = {
  philosophies: [
    {
      title: "Code as Communication",
      description: "I believe code is primarily written for humans, not machines. Every line should tell a story, every function should have a clear purpose, and every architecture should be self-documenting.",
      icon: "💬"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so must we. I dedicate time daily to learning new concepts, experimenting with emerging technologies, and challenging my existing assumptions.",
      icon: "📚"
    },
    {
      title: "User-Centric Development",
      description: "Behind every technical requirement is a human need. I always start by understanding the user's journey and pain points before diving into technical solutions.",
      icon: "👥"
    },
    {
      title: "Collaborative Excellence",
      description: "The best solutions emerge from diverse perspectives. I value open communication, constructive feedback, and the collective wisdom of cross-functional teams.",
      icon: "🤝"
    }
  ],
  skillCards: [
    {
      front: {
        title: "Frontend",
        icon: "🎨",
        tech: ["React", "Next.js", "TypeScript"]
      },
      back: {
        description: "Creating intuitive, responsive user interfaces with modern frameworks and cutting-edge design patterns.",
        experience: "10+ Years",
        highlight: "Pixel-perfect responsive design"
      }
    },
    {
      front: {
        title: "Backend",
        icon: "⚡",
        tech: ["Node.js", "Laravel", "PostgreSQL"]
      },
      back: {
        description: "Building scalable server architectures and robust APIs that power complex business logic.",
        experience: "8+ Years",
        highlight: "Microservices architecture"
      }
    },
    {
      front: {
        title: "Cloud & DevOps",
        icon: "☁️",
        tech: ["AWS", "Docker", "CI/CD"]
      },
      back: {
        description: "Deploying and maintaining cloud infrastructure with automated testing and deployment pipelines.",
        experience: "6+ Years",
        highlight: "Zero-downtime deployments"
      }
    },
    {
      front: {
        title: "Mobile",
        icon: "📱",
        tech: ["React Native", "Flutter", "iOS"]
      },
      back: {
        description: "Cross-platform mobile applications that deliver native performance and user experience.",
        experience: "5+ Years",
        highlight: "App Store optimization"
      }
    },
    {
      front: {
        title: "AI & Machine Learning",
        icon: "🤖",
        tech: ["Python", "TensorFlow", "OpenAI"]
      },
      back: {
        description: "Integrating intelligent features and automation into applications using modern AI frameworks.",
        experience: "3+ Years",
        highlight: "RAG implementations"
      }
    },
    {
      front: {
        title: "Design & UX",
        icon: "✨",
        tech: ["Figma", "Adobe XD", "Prototyping"]
      },
      back: {
        description: "User-centered design thinking combined with technical implementation expertise.",
        experience: "7+ Years",
        highlight: "Design system creation"
      }
    }
  ],
  interests: [
    {
      category: "Technology",
      items: ["AI/Machine Learning", "Cloud Architecture", "DevOps Culture", "Open Source Contributions", "Emerging Web Standards"],
      icon: "⚙️"
    },
    {
      category: "Personal Growth",
      items: ["Technical Writing", "Mentoring Developers", "Public Speaking", "Community Building", "Leadership Development"],
      icon: "🌱"
    },
    {
      category: "Creative Pursuits",
      items: ["Photography", "Music Production", "Digital Art", "Creative Writing", "Design Thinking"],
      icon: "🎭"
    },
    {
      category: "Lifestyle",
      items: ["Hiking & Nature", "Cooking", "Reading", "Travel", "Fitness & Wellness"],
      icon: "🏃"
    }
  ],
  values: [
    {
      title: "Integrity",
      description: "Honest communication about capabilities, timelines, and challenges. I believe trust is built through transparency.",
      icon: "🎯"
    },
    {
      title: "Excellence",
      description: "Striving for quality in every deliverable, from code architecture to user experience to team collaboration.",
      icon: "⭐"
    },
    {
      title: "Growth Mindset",
      description: "Embracing challenges as opportunities to learn and viewing failures as stepping stones to mastery.",
      icon: "📈"
    },
    {
      title: "Impact",
      description: "Focusing on solutions that create meaningful value for users, businesses, and the broader tech community.",
      icon: "💎"
    }
  ]
};

export default function AboutPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  // Call useCounter for each stat at the top level
  const stat1Counter = useCounter(10); // Years Experience
  const stat2Counter = useCounter(50); // Projects Completed
  const stat3Counter = useCounter(20); // Technologies Mastered
  const stat4Counter = useCounter(3);  // Team Lead Experience

  const counters = [stat1Counter, stat2Counter, stat3Counter, stat4Counter];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate skill cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % extendedAbout.skillCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleCardFlip = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  const getVisibleCards = () => {
    const cards = extendedAbout.skillCards;
    const totalCards = cards.length;
    const visibleIndices = [];
    
    for (let i = 0; i < 3; i++) {
      visibleIndices.push((currentSkillIndex + i) % totalCards);
    }
    
    return visibleIndices.map(index => ({ ...cards[index], originalIndex: index }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Matching Homepage About UX */}
      <section 
        ref={sectionRef}
        className="px-4 pt-24 pb-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header - Matching homepage style */}
          <div className={`mb-20 text-center lg:mb-24 transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0' : 'translate-y-4'
          }`}>
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter" style={{ fontSize: '39px', letterSpacing: '-0.04em' }}>
              Get to Know Me Better
            </h1>
            <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '25px' }}>
              Beyond the code and technical expertise lies a passion for continuous learning, 
              meaningful collaboration, and creating solutions that truly make a difference.
            </p>
          </div>

          {/* Main Profile Section - Enhanced from homepage */}
          <div className={`grid gap-16 mb-20 lg:grid-cols-2 lg:gap-24 transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0' : 'translate-y-8'
          }`}>
            {/* Left Column - Enhanced Profile Image matching homepage */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className={`overflow-hidden shadow-2xl w-96 h-96 rounded-2xl transition-all duration-500 ${
                  imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                } group-hover:shadow-3xl group-hover:scale-105 group-hover:shadow-gray-400/30`}>
                  <Image
                    src="/about/abuti.jpg"
                    alt="Tevin Morake - About Me"
                    width={384}
                    height={384}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    priority
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-gray-900/30 to-transparent group-hover:opacity-100"></div>
                </div>
                
                {/* Subtle decorative elements matching homepage */}
                <div className="absolute w-24 h-24 transition-all duration-500 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 -top-4 -right-4 opacity-20 group-hover:opacity-40 group-hover:from-gray-300 group-hover:to-gray-400 animate-pulse"></div>
                <div className="absolute w-16 h-16 transition-all duration-500 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 -bottom-6 -left-6 opacity-30 group-hover:opacity-50 group-hover:from-gray-400 group-hover:to-gray-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Enhanced status indicator */}
                <div className="absolute cursor-pointer bottom-4 right-4 group/status">
                  <div className="flex items-center gap-2 px-3 py-1 transition-all duration-300 border border-gray-100 rounded-full shadow-lg bg-white/95 backdrop-blur-sm hover:shadow-xl hover:bg-white group-hover/status:scale-110">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700 transition-colors group-hover/status:text-black">
                      Available
                    </span>
                  </div>
                  
                  {/* Expandable tooltip */}
                  <div className="absolute right-0 invisible w-48 p-3 mb-2 transition-all duration-300 transform translate-y-2 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 bottom-full group-hover/status:opacity-100 group-hover/status:visible group-hover/status:translate-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Full-time opportunities</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Independent consulting</span>
                      </div>
                      <div className="pt-2 text-xs text-gray-500 border-t border-gray-100">
                        Let&apos;s discuss your project
                      </div>
                    </div>
                    <div className="absolute w-0 h-0 border-t-4 border-l-4 border-r-4 top-full right-4 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced content matching homepage */}
            <div className="flex flex-col justify-center">
              {/* Main Description */}
              <div className="mb-8">
                <p className="mb-6 text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999', letterSpacing: '-0.06em' }}>
                  {about.description}
                </p>
                <p className="text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999', letterSpacing: '-0.06em' }}>
                  {about.personalNote}
                </p>
              </div>

              {/* Enhanced Stats Grid with animations matching homepage */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {about.stats.map((stat, index) => {
                  const counter = counters[index];
                  
                  return (
                    <div 
                      key={index} 
                      ref={counter.ref}
                      className={`group p-6 text-center bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 transform ${
                        isVisible ? 'translate-y-0' : 'translate-y-4'
                      }`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      <div className="mb-2 text-3xl font-bold text-black transition-colors duration-300 font-inter group-hover:text-gray-700">
                        {stat.value.includes('+') ? `${counter.count}+` : counter.count.toString()}
                      </div>
                      <div className="text-sm font-medium font-inter" style={{ color: '#999999' }}>
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies - Interactive Flip Cards Carousel */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black font-inter">
              Skills & Technologies
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              Explore my technical expertise across different domains. Click on any card to learn more.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Display */}
            <div className="flex justify-center gap-6 mb-8 overflow-hidden">
              {getVisibleCards().map((card, displayIndex) => (
                <div
                  key={`${card.originalIndex}-${currentSkillIndex}`}
                  className={`flip-card cursor-pointer transition-all duration-500 ${
                    displayIndex === 1 ? 'scale-110 z-10' : 'scale-95 opacity-75'
                  }`}
                  onClick={() => toggleCardFlip(card.originalIndex)}
                  style={{
                    perspective: '1000px',
                    width: '280px',
                    height: '320px'
                  }}
                >
                  <div
                    className={`flip-card-inner w-full h-full transition-transform duration-700 ${
                      flippedCards.has(card.originalIndex) ? 'rotate-y-180' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute flex flex-col items-center justify-center w-full h-full p-6 text-center bg-white border border-gray-200 shadow-lg flip-card-face flip-card-front rounded-2xl"
                      style={{
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="mb-4 text-4xl">{card.front.icon}</div>
                      <h3 className="mb-4 text-xl font-bold text-black font-inter">
                        {card.front.title}
                      </h3>
                      <div className="space-y-2">
                        {card.front.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-block px-3 py-1 mr-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 text-xs text-gray-500 font-inter">
                        Click to flip
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute flex flex-col justify-center w-full h-full p-6 text-white shadow-lg flip-card-face flip-card-back bg-gradient-to-br from-black to-gray-800 rounded-2xl"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="text-center">
                        <h3 className="mb-4 text-xl font-bold font-inter">
                          {card.front.title}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed text-gray-300 font-inter">
                          {card.back.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Experience:</span>
                            <span className="font-medium">{card.back.experience}</span>
                          </div>
                          <div className="pt-2 border-t border-gray-600">
                            <div className="mb-1 text-xs text-gray-400">Highlight:</div>
                            <div className="text-sm font-medium text-white">
                              {card.back.highlight}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2">
              {extendedAbout.skillCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkillIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSkillIndex 
                      ? 'bg-black scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to skill ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Philosophy Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black font-inter">
              My Philosophy
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              The principles that guide my approach to technology, collaboration, and continuous growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {extendedAbout.philosophies.map((philosophy, index) => (
              <div 
                key={index} 
                className="p-8 transition-all duration-300 border border-gray-100 group bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl hover:scale-105 hover:border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    {philosophy.icon}
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black transition-colors duration-300 font-inter group-hover:text-gray-700">
                      {philosophy.title}
                    </h3>
                    <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                      {philosophy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black font-inter">
              Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              The fundamental beliefs that shape how I work, collaborate, and contribute to every project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {extendedAbout.values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 rounded-full bg-gradient-to-br from-black to-gray-600 group-hover:scale-110 group-hover:shadow-xl">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black transition-colors duration-300 font-inter group-hover:text-gray-700">
                  {value.title}
                </h3>
                <p className="text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests & Hobbies Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black font-inter">
              Interests & Hobbies
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              The diverse interests that fuel my creativity and keep me inspired outside of work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {extendedAbout.interests.map((interest, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-300 border border-gray-100 group bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl hover:scale-105 hover:border-gray-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {interest.icon}
                  </span>
                  <h3 className="text-lg font-bold text-black transition-colors duration-300 font-inter group-hover:text-gray-700">
                    {interest.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {interest.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm font-medium transition-colors duration-300 font-inter group-hover:text-gray-600" style={{ color: '#999999' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-black font-inter">
              Ready to collaborate and create something amazing together?
            </h2>
            <p className="text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              Whether you&apos;re looking for a technical partner, a team leader, or someone to bring your vision to life, I&apos;d love to hear about your project.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-black rounded-full hover:bg-gray-800 font-inter hover:shadow-xl hover:scale-105"
            >
              <span>Let&apos;s Work Together</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white font-inter hover:shadow-xl hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
