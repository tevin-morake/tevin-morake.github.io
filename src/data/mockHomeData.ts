// Example mock data for the homepage. Replace with API data in the future.

export const hero = {
  title: "Pragmatic Solutions. For complex digital problems.",
  subtitle: "Senior full-stack architect connecting vision to technology.",
  description:
    "Transforming complex business challenges into elegant digital solutions through strategic architecture and modern development practices.",
  videoPlaceholder: {
    title: "Featured Work",
    description: "Watch how we solve complex problems",
  },
};

export const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include payment processing, inventory management, and analytics dashboard.",
    link: "https://github.com/tevin-morake/ecommerce-platform",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    name: "Task Management SaaS",
    description:
      "Modern project management application built with Next.js and TypeScript. Real-time collaboration, team workspaces, and advanced reporting.",
    link: "https://github.com/tevin-morake/task-management",
    image: "/projects/task-manager.png",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
  },
  {
    id: 3,
    name: "Financial Dashboard",
    description:
      "Real-time financial analytics platform with data visualization. Built with React, D3.js, and Python backend for complex financial calculations.",
    link: "https://github.com/tevin-morake/finance-dashboard",
    image: "/projects/finance.png",
    tech: ["React", "D3.js", "Python", "FastAPI"],
  },
  {
    id: 4,
    name: "Healthcare Portal",
    description:
      "HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    link: "https://github.com/tevin-morake/healthcare-portal",
    image: "/projects/healthcare.jpg",
    tech: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
  },
  {
    id: 5,
    name: "Mobile Banking App",
    description:
      "Cross-platform mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    link: "https://github.com/tevin-morake/mobile-banking",
    image: "/projects/banking.jpg",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
  },
  {
    id: 6,
    name: "AI Content Generator",
    description:
      "Machine learning-powered content creation tool with natural language processing and automated SEO optimization.",
    link: "https://github.com/tevin-morake/ai-content-generator",
    image: "/projects/ai-content.jpg",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
  },
];

export const about = {
  title: "About Me",
  subtitle: "Building digital solutions that matter",
  description:
    "I'm a senior full-stack developer with 8+ years of experience transforming complex business challenges into elegant, scalable solutions. My approach combines strategic thinking with hands-on development, ensuring every project delivers both technical excellence and real business value.",
  personalNote:
    "When I'm not coding, you'll find me exploring the latest tech trends, mentoring junior developers, or working on open-source projects that push the boundaries of what's possible.",
  image: "/about/tevin-profile.jpg",
  stats: [
    {
      label: "Years Experience",
      value: "10+",
    },
    {
      label: "Projects Completed",
      value: "50+",
    },
    {
      label: "Technologies Mastered",
      value: "20+",
    },
    {
      label: "Team Lead Experience",
      value: "3 Years",
    },
  ],
};

export const contact = {
  title: "Let's Build Something Great Together",
  subtitle: "Ready to transform your ideas into exceptional digital solutions?",
  description:
    "Whether you need a consultation, want to discuss a project, or are interested in collaboration opportunities, I'd love to hear from you.",
  email: "hello@tevinmorake.dev",
  phone: "+27 12 345 6789",
  location: "Johannesburg, South Africa",
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tevin-morake",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/tevin-morake",
      icon: "github",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/tevin_morake",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:hello@tevinmorake.dev",
      icon: "email",
    },
  ],
  calendlyUrl: "https://calendly.com/tevinmorake",
};

export const testimonials = [
  {
    id: 1,
    name: "A. Du Plessis",
    title: "Senior Product Owner",
    company: "",
    avatar: "/avatars/sarah.jpg",
    quote:
      "Tevin's technical intuition is matched only by his ability to bring people together around a vision.",
    rating: 5,
    project: "Team Leadership",
  },
  {
    id: 2,
    name: "M. Mahlangu",
    title: "Tech Lead",
    company: "",
    avatar: "/avatars/marcus.jpg",
    quote:
      "A digital architect who turns complexity into clarity. Partnering with Tevin is always transformative.",
    rating: 5,
    project: "System Architecture",
  },
  {
    id: 3,
    name: "L. Ndlovu",
    title: "Engineering Manager",
    company: "",
    avatar: "/avatars/emily.jpg",
    quote:
      "His code is clean, his thinking precise, and his results consistently exceed expectations.",
    rating: 5,
    project: "Code Quality",
  },
  {
    id: 4,
    name: "N. Dlamini",
    title: "CTO",
    company: "",
    avatar: "/avatars/david.jpg",
    quote:
      "Strategic, thoughtful, and honest — exactly what you want in a senior engineer.",
    rating: 5,
    project: "Technical Strategy",
  },
];

export const articles = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt:
      "A comprehensive guide to architecting microservices that can handle enterprise-level traffic while maintaining code quality and developer experience.",
    publishedDate: "2024-12-15",
    readTime: "8 min read",
    category: "Architecture",
    slug: "scalable-microservices-nodejs-docker",
    featured: true,
    image: "/blogs/microservices-architecture.png",
  },
  {
    id: 2,
    title: "The Future of Full-Stack Development in 2025",
    excerpt:
      "Exploring emerging technologies, frameworks, and methodologies that will shape how we build web applications in the coming year.",
    publishedDate: "2024-12-08",
    readTime: "6 min read",
    category: "Technology Trends",
    slug: "future-fullstack-development-2025",
    featured: false,
    image: "/blogs/fullstack-future.png",
  },
  {
    id: 3,
    title: "Implementing Zero-Downtime Deployments with CI/CD",
    excerpt:
      "Learn how to implement robust deployment strategies that ensure your applications remain available during updates and releases.",
    publishedDate: "2024-11-28",
    readTime: "10 min read",
    category: "DevOps",
    slug: "zero-downtime-deployments-cicd",
    featured: false,
    image: "/blogs/cicd-deployment.png",
  },
  {
    id: 4,
    title: "Database Optimization Strategies for High-Traffic Applications",
    excerpt:
      "Performance tuning techniques and architectural patterns to handle millions of requests while maintaining data consistency.",
    publishedDate: "2024-11-20",
    readTime: "12 min read",
    category: "Database",
    slug: "database-optimization-high-traffic",
    featured: true,
    image: "/blogs/database-optimization.png",
  },
  {
    id: 5,
    title: "Security Best Practices for Modern Web Applications",
    excerpt:
      "Essential security measures every developer should implement to protect applications from common vulnerabilities and attacks.",
    publishedDate: "2024-11-10",
    readTime: "9 min read",
    category: "Security",
    slug: "security-best-practices-web-apps",
    featured: false,
    image: "/blogs/web-security.jpg",
  },
  {
    id: 6,
    title: "From Monolith to Microservices: A Migration Strategy",
    excerpt:
      "A step-by-step approach to breaking down monolithic applications into scalable, maintainable microservices without disrupting business operations.",
    publishedDate: "2024-10-25",
    readTime: "15 min read",
    category: "Architecture",
    slug: "monolith-to-microservices-migration",
    featured: false,
    image: "/blogs/monolith-migration.jpg",
  },
];
