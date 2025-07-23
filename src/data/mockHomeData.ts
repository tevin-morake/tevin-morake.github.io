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
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    name: "Task Management SaaS",
    description:
      "Modern project management application built with Next.js and TypeScript. Real-time collaboration, team workspaces, and advanced reporting.",
    link: "https://github.com/tevin-morake/task-management",
    image: "/projects/task-manager.jpg",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
  },
  {
    id: 3,
    name: "Financial Dashboard",
    description:
      "Real-time financial analytics platform with data visualization. Built with React, D3.js, and Python backend for complex financial calculations.",
    link: "https://github.com/tevin-morake/finance-dashboard",
    image: "/projects/finance.jpg",
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
  description: "I'm a senior full-stack developer with 8+ years of experience transforming complex business challenges into elegant, scalable solutions. My approach combines strategic thinking with hands-on development, ensuring every project delivers both technical excellence and real business value.",
  personalNote: "When I'm not coding, you'll find me exploring the latest tech trends, mentoring junior developers, or working on open-source projects that push the boundaries of what's possible.",
  image: "/about/tevin-profile.jpg",
  stats: [
    {
      label: "Years Experience",
      value: "8+"
    },
    {
      label: "Projects Completed",
      value: "50+"
    },
    {
      label: "Technologies Mastered",
      value: "20+"
    },
    {
      label: "Team Lead Experience",
      value: "3 Years"
    }
  ]
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
