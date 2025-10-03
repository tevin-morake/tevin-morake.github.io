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
    id: 7,
    name: "Portfolio Website",
    description:
      "Modern portfolio website built with Next.js 14, featuring responsive design, advanced filtering, testimonials management, and optimized performance. Showcases full-stack development capabilities with TypeScript and Tailwind CSS.",
    link: "https://tevin-morake.github.io",
    github: "https://github.com/tevin-morake/tevin-morake.github.io",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "ESLint",
      "Vercel",
    ],
    category: "Full-Stack",
    status: "completed",
    completedDate: "2025-07-30",
  },
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include payment processing, inventory management, and analytics dashboard.",
    link: "https://github.com/tevin-morake/ecommerce-platform",
    github: "https://github.com/tevin-morake/ecommerce-platform",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Express",
      "JWT",
    ],
    category: "Full-Stack",
    status: "completed",
    completedDate: "2024-03-15",
  },
  {
    id: 2,
    name: "Task Management SaaS",
    description:
      "Modern project management application built with Next.js and TypeScript. Real-time collaboration, team workspaces, and advanced reporting.",
    link: "https://github.com/tevin-morake/task-management",
    github: "https://github.com/tevin-morake/task-management",
    image: "/projects/task-manager.png",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "WebSocket",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    category: "SaaS",
    status: "completed",
    completedDate: "2024-06-20",
  },
  {
    id: 3,
    name: "Financial Dashboard",
    description:
      "Real-time financial analytics platform with data visualization. Built with React, D3.js, and Python backend for complex financial calculations.",
    link: "https://github.com/tevin-morake/finance-dashboard",
    github: "https://github.com/tevin-morake/finance-dashboard",
    image: "/projects/finance.png",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis", "Docker"],
    category: "Analytics",
    status: "completed",
    completedDate: "2024-05-10",
  },
  {
    id: 4,
    name: "Healthcare Portal",
    description:
      "HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    link: "https://github.com/tevin-morake/healthcare-portal",
    github: "https://github.com/tevin-morake/healthcare-portal",
    image: "/projects/default.png",
    tech: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Socket.io", "AWS"],
    category: "Healthcare",
    status: "in-progress",
    completedDate: "2024-08-01",
  },
  {
    id: 5,
    name: "Mobile Banking App",
    description:
      "Cross-platform mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    link: "https://github.com/tevin-morake/mobile-banking",
    github: "https://github.com/tevin-morake/mobile-banking",
    image: "/projects/default.png",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Stripe",
    ],
    category: "Mobile",
    status: "completed",
    completedDate: "2024-04-25",
  },
  {
    id: 6,
    name: "AI Content Generator",
    description:
      "Machine learning-powered content creation tool with natural language processing and automated SEO optimization.",
    link: "https://github.com/tevin-morake/ai-content-generator",
    github: "https://github.com/tevin-morake/ai-content-generator",
    image: "/projects/default.png",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "OpenAI",
      "Redis",
    ],
    category: "AI/ML",
    status: "in-progress",
    completedDate: "2024-07-15",
  },
];

export const about = {
  title: "About Me",
  subtitle: "Building digital solutions that matter",
  description:
    "I'm a senior full-stack developer with 10+ years of experience transforming complex business challenges into elegant, scalable solutions. My approach combines strategic thinking with hands-on development, ensuring every project delivers both technical excellence and real business value.",
  personalNote:
    "When I'm not coding, you'll find me exploring the latest tech trends, mountain biking on a trail, playing soulful melodies on my guitar or enjoying a good anime episode.",
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
      name: "X",
      url: "https://x.com/tevin_morake",
      icon: "x",
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
    id: 24,
    name: "Bhekimpilo Ndlela",
    title: "Software Engineer",
    company: "Entelect",
    avatar: "/testimonials/bheki.jpeg",
    linkedin: "https://www.linkedin.com/in/bhekimpilo-ndlela-9883727b/",
    quote:
      "I had the privilege of working with Tevin when I first started my career, and he was my Senior Software Engineer at the time(I reported to him). From day one, Tevin was incredibly supportive and approachable. He always took the time to guide me whenever I was stuck, whether it was project-related challenges or general issues at work.\nWhat stands out about Tevin is not just his technical expertise, but also his patience, kindness, and genuine willingness to help others. He is the kind of teammate who values collaboration and goes the extra mile to ensure his colleagues and juniors succeed. Beyond being a great mentor, Tevin is a wonderful person to work with, professional, reliable, and friendly.\nOver time, Tevin went from being a senior colleague to a true friend, and I feel fortunate to have had the opportunity to learn from him. Any team would be lucky to have Tevin as part of it.",

    project: "Supportive & approachable",
    created_at: "2025-09-19",
  },
  {
    id: 25,
    name: "Deon Heunis",
    title: "Product, Technology & Business Leader",
    company: "Open Access Energy",
    avatar: "/testimonials/deon.jpeg",
    linkedin: "https://www.linkedin.com/in/deonheunis/",
    quote:
      "I had the pleasure of managing Tevin during his time at Swipe iX, where he worked as a Full Stack Cloud Engineer. Tevin consistently impressed me with his strong technical knowledge, problem-solving ability, and commitment to producing quality work.\nHe has a great attitude and approaches challenges with enthusiasm, always eager to learn and improve. His work was not only reliable and consistent but also demonstrated a depth of understanding across both frontend and backend systems, as well as cloud infrastructure.\nTevin is the kind of engineer who lifts the standard of the entire team. He is dependable, collaborative, and always pushing himself to grow. I would highly recommend him to any organisation looking for a skilled and dedicated engineer who delivers results.",

    project: "Dependable & committed",
    created_at: "2025-08-20",
  },
  {
    id: 23,
    name: "Gaynor Johnson",
    title: "Head of Software Solutions",
    company: "Media24",
    avatar: "/testimonials/gaynor.jpeg",
    linkedin: "https://www.linkedin.com/in/gaynorjohnson/",
    quote:
      "I have been working with Tevin since I hired him in 2022 and have always been pleased about our decision to do that. A highly skilled developer who thinks out of the box and takes on every challenge meticulously. I have watched him grow as he explores new ways of working, of coding and learning new frameworks. Tevin has been at the forefront of some of Swipe’s AI driven projects and I am excited about his bright future.\nTevin has worked across 10 very different client projects over the last 3 years and has received multiple kudos for his work, including Coca-Cola Beverages Africa, Capfin and Hyprop. I recommend him for any type of project and digital transformation you want to achieve.",

    project: "Meticulous lifelong learner",
    created_at: "2025-08-20",
  },
  {
    id: 22,
    name: "Daniel Cilliers",
    title: "Software Developer at Hailer",
    company: "Hailer",
    avatar: "/testimonials/daniel.jpeg",
    linkedin: "https://www.linkedin.com/in/daniel-cilliers-91ba1516a/",
    quote:
      "I had the pleasure of working with Tevin and I can confidently say he is an exceptional fullstack developer who brings both technical expertise and genuine collaborative spirit to any team.\nTevin has a deep knowledge of development combined with his natural ability to share insights in a way that elevated everyone around him. He consistently demonstrated a hardworking attitude while maintaining a friendly, approachable demeanor that made him a joy to collaborate with.\nTevin can break down complex technical concepts and sharing his knowledge. His willingness to help others, whether troubleshooting challenging problems or offering fresh perspectives on development approaches, made him an invaluable team member. The interesting insights he brought to our projects often led to more innovative and effective solutions.\nHe's the kind of professional who not only delivers excellent work but also makes the workplace better for everyone.\nI would highly recommend Tevin to any organization looking for a skilled, knowledgeable, and genuinely collaborative development professional. He would be a tremendous asset to any team.",

    project: "Workplace team player",
    created_at: "2025-08-12",
  },
  {
    id: 21,
    name: "Herman Warren",
    title: "Versatile Commercial Leader | Engaging Speaker",
    company: "Hela Network",
    avatar: "/testimonials/herman.jpeg",
    linkedin: "https://www.linkedin.com/in/hermanwarren/",
    quote:
      "I led an internal project at CCBA to conceptualise and launch The Oracle, a high-profile portal designed to give our commercial leaders real-time information and actionable insights. Tevin, as part of the SwipeiX team we partnered with, played a pivotal role in the project’s success. He expertly integrated multiple internal and external data sources, embedded AI-driven tools and collaborated seamlessly with third-party technical teams to ensure smooth data feed integration. His ability to program a platform that was not only functionally robust but also visually appealing and intuitively navigable was instrumental in delivering a successful launch. Tevin’s technical expertise, proactive approach, and collaborative spirit made him an invaluable contributor to the project’s success.",

    project: "Proactive & Collaborative",
    created_at: "2025-08-06",
  },
  {
    id: 20,
    name: "Sonny Kabaso",
    title: "Software Engineer",
    company: "nCino Inc",
    avatar: "/testimonials/sonny.jpeg",
    linkedin: "https://www.linkedin.com/in/sonny-kabaso-151992129/",
    quote:
      "Working with Tevin has been a consistently excellent experience. He brings not only strong technical skills as a software engineer but also clear communication, thoughtful problem-solving, and a genuine commitment to delivering high-quality work. Whether we were collaborating on backend systems or tackling complex product requirements, Tevin always approached challenges with a calm, focused mindset and a sharp eye for detail. He's the kind of engineer you can trust to take ownership and get things done right.",

    project: "Clear communicator",
    created_at: "2025-08-06",
  },
  {
    id: 19,
    name: "Dietrich Kuhn",
    title: "Software Developer",
    company: "Runninghill Software Development",
    // avatar: "/testimonials/shephard.jpeg",
    linkedin: "https://www.linkedin.com/in/dietrich-kuhn-6ab355b7",
    quote:
      "I had the pleasure of working with Tevin, and he was truly a great person to work with. He has a natural talent for knowledge sharing and mentoring junior developers, always doing so in a supportive and approachable way.\nHe brings a wealth of experience across multiple languages and systems and consistently demonstrates a strong sense of ownership over the teams and projects he's involved in. He stays fully committed, continuously looking for ways to improve the codebase while adhering to best practices and coding standards. He's someone who sets high standards for himself and is always focused on growth, both personally and within the team. His passion for self-improvement inspires those around him to keep learning and stay current in the ever-evolving tech space.\nOn top of that, his communication skills make him a great asset in any client-facing situation. He adapts quickly to different team environments and methodologies, always finding ways to contribute value as fast as possible. He's also the kind of person who doesn’t hesitate to step outside his core responsibilities when needed to help get projects over the line.\nIn short, a reliable, knowledgeable, and collaborative team player — someone who’s there through both the highs and the lows. Any team would be lucky to have him.",

    project: "Supportive & approachable",
    created_at: "2025-08-05",
  },
  {
    id: 18,
    name: "Shephard Marufu",
    title: "Software Engineer | ML Engineer | Robotics & VR enthusiast",
    company: "Sand Technologies",
    avatar: "/testimonials/shephard.jpeg",
    linkedin: "https://www.linkedin.com/in/shephard-marufu-09068b110",
    quote:
      "Working with Tevin Morake was a truly exceptional experience. As a colleague, I had the pleasure of seeing his incredible skills firsthand. Tevin is a 10x fullstack software engineer who consistently delivers high-quality work and elevates the entire team.\nHis expertise spans the entire development lifecycle, from robust backend development using Golang, Node.js, and Next.js to building dynamic and responsive user interfaces with React and Angular.js. What truly sets him apart is his deep understanding of modern development practices, including CI/CD and DevOps, which he uses to build efficient and scalable systems.\nBeyond his technical prowess, Tevin is a forward-thinker. His proficiency in prompt engineering is a testament to his commitment to staying at the forefront of technology. He is an invaluable asset to any team, and I highly recommend him. Any organization would be lucky to have him.",

    project: "10x fullstack engineer",
    created_at: "2025-08-05",
  },
  {
    id: 17,
    name: "Rory Enslin",
    title: "Co-Founder | 8 X AWS Certified ",
    company: "Rapidtrade",
    avatar: "/testimonials/rory.jpeg",
    linkedin: "https://www.linkedin.com/in/rory-enslin-67758411/",
    quote:
      "I worked with Tevin for many years as he came into the work place and started working. He took initiative in his work and rose through the ranks to be a senior member of the team. He added value to the team and when he had the experience - I was able to hand over complex tasks for our customers that involved designing and implementing custom solutions for our clients. I always found him to be well mannered and a good communicator with team members and customers.",

    project: "Hardworking & Well-Mannered",
    created_at: "2025-08-04",
  },
  {
    id: 16,
    name: "Fanelesibonge Ngcobo",
    title: "Software Engineer",
    company: "Old Mutual iWyze",
    avatar: "/testimonials/fanele.jpeg",
    linkedin: "https://www.linkedin.com/in/fanelesibonge-ngcobo-a72681187/",
    quote:
      "It was a pleasure to work with Tevin. They is an exceptionally skilled software developer whose deep expertise was a tremendous asset to our team.\nHis technical prowess was instrumental in solving complex problems and was a driving force behind the design and development of our most innovative and futuristic applications.\nBeyond his significant technical contributions, Tevin is also a natural mentor. He consistently demonstrated a genuine willingness to help sharpen the skills of their colleagues, making a significant positive impact on the team's overall growth and development.\nHis combination of high-level skill and collaborative spirit makes them an invaluable member of any software development team.",

    project: "Mentorship & Team Impact",
    created_at: "2025-08-04",
  },
  {
    id: 15,
    name: "Paul Reigh",
    title: "Senior Digital Project Manager",
    company: "Defijn",
    avatar: "/testimonials/paul.JPG",
    linkedin: "https://www.linkedin.com/in/paulreich2/",
    quote:
      "I had the pleasure of working with Tevin for over two years at SwipeiX, where he served as senior fullstack developer on several complex web builds. Tevin consistently delivered high-quality code, solved problems proactively, and brought a calm, thoughtful presence to the team. Whether tackling backend integrations or refining front-end interactions, Tevin always balanced technical skill with a great sense of collaboration. I’d gladly work with him again.",

    project: "Trust & High regard",
    created_at: "2025-08-03",
  },
  {
    id: 14,
    name: "Katlego Komeke",
    title: "Technical Lead",
    company: "iKhokha",
    avatar: "/testimonials/kat.jpeg",
    linkedin: "https://www.linkedin.com/in/katlehokomeke/",
    quote:
      'Tevin is an absolute super hard worker and possibly the most knowledgable person with Angular I know. I greatly appreciate his wise words and wisdom that he has shared with me over the years.\nMy favorite quote from him is: "Don\'t be afraid to ask questions even if you feel stupid asking." \nI highly recommend him, he is Awesome.',

    project: "Gratitude & Admiration",
    created_at: "2025-08-01",
  },
  {
    id: 13,
    name: "Lydron Mohohlo",
    title: "Technical Support Specialist (Digital Messaging)",
    company: "AWS",
    avatar: "/testimonials/lydron.jpeg",
    linkedin: "https://www.linkedin.com/in/lydron-mohohlo-b85548b6/",
    quote:
      "Tevin is a smart, creative, diligent and capable Full Stack Developer with over more than a decade of experience in the field. He has worked on multi-national and international projects and I fully recommend him for any of your Development needs",

    project: "Support & Mentorship",
    created_at: "2025-08-01",
  },
  {
    id: 12,
    name: "Khapha Levis Leshabane",
    title: "Full-stack Developer",
    company: "Old Mutual iWyze",
    avatar: "/testimonials/khapha.jpeg",
    linkedin: "https://www.linkedin.com/in/khapha-levis-leshabane-578a626b",
    quote:
      "Tevin Morake is an outstanding colleague and a pleasure to work with. When I joined Runninghill Software Development in January 2021, Tevin was my assigned buddy and he provided invaluable guidance, helping me navigate the complexities of the contracting world.\nOur professional relationship grew as we were assigned to the same project at Old Mutual iWyze. We collaborated closely, and our team's hard work was recognized with multiple company awards and positive feedback from the client. Tevin's expertise and dedication were key to our success.\nBeyond his technical skills, Tevin is a supportive mentor and a great friend. I learned a lot from him and would highly recommend him to anyone looking for a skilled and reliable professional.",

    project: "Support & Mentorship",
    created_at: "2025-08-01",
  },
  {
    id: 11,
    name: "Shaun Enslin",
    title: "Co-Founder & Managing Director",
    company: "Rapidtrade",
    avatar: "/testimonials/shaun.png",
    linkedin: "https://www.linkedin.com/in/shaun-enslin-4984bb14b/",
    quote:
      "I had the pleasure of working with Tevin, a principled and dedicated professional whose work ethic and integrity stood out from day one. Tevin is not only a talented programmer and designer but also someone who brings thoughtfulness and precision to every project—an essential quality, especially in the high-stakes environment of the medical industry where accuracy is critical.\nBeyond his technical contributions, Tevin has had a meaningful impact through his mentorship of younger developers. He consistently took the time to share his knowledge, foster growth, and guide others toward excellence. His ability to lead by example and uplift those around him speaks volumes about his character and commitment to the craft. He continued to mentor young programmers and designers even after he moved on to better opportunities and has remained a good friend of our organisation.\nAny team would be fortunate to have Tevin. He brings a rare blend of technical skill, reliability, and heart to his work.",

    project: "Principled & Reliable",
    created_at: "2025-07-31",
  },
  {
    id: 10,
    name: "Nina Sawyer",
    title: "Senior Product & Project Manager",
    company: "Rain",
    avatar: "/testimonials/nina.png",
    linkedin: "https://www.linkedin.com/in/nina-sawyer-a04869166",
    quote:
      "I have had the pleasure of working with Tevin on 3 client projects while at Swipe. His meticulous attention to detail and thoughtful planning made my role as his project manager productive and seamless. I could trust that the feedback that he gives me is thorough and well-researched. He takes great care in his work and I look forward to the day that we work together again. Tevin is an asset to any team!",

    project: "Meticulous & Detail-Oriented",
    created_at: "2025-07-31",
  },
  {
    id: 9,
    name: "Rasool Booley",
    title: "QA Engineer",
    company: "Swipe iX",
    avatar: "/testimonials/rasool.jpeg",
    linkedin: "https://www.linkedin.com/in/rasool-booley-949599139",
    quote:
      "Working with Tevin has been a great experience. He brings not only deep technical knowledge but also a thoughtful, collaborative approach to how we operate and make decisions. As a QA, I appreciated how willing he was to explain technical issues, walk through workflows, and openly discuss potential solutions while considering all the variables. Tevin is a true team player. He is approachable, collaborative, and always ready to step in to resolve challenges or share his knowledge. His ability to lead while staying grounded in teamwork made a real impact on our team's success.",

    project: "Approachable & Collaborative",
    created_at: "2025-07-31",
  },

  {
    id: 8,
    name: "Rehan van der Merwe",
    title: "DevOps Engineer | AWS Hero",
    company: "Resend",
    avatar: "/testimonials/rehan.png",
    linkedin: "https://www.linkedin.com/in/rehan-van-der-merwe-600b40172/",
    quote:
      "I had the pleasure of working with Tevin at SwipeIx, and he was consistently reliable and hardworking. He adapted quickly to changing priorities and always delivered on time. You could count on him to get the job done without fuss.",

    project: "Accountable & Proactive",
    created_at: "2025-07-31",
  },
  {
    id: 1,
    name: "Kgaogelo Thorn Manganye",
    title: "Frontend Developer",
    company: "Swipe iX",
    avatar: "/testimonials/thorn.png",
    linkedin: "https://www.linkedin.com/in/kgaogelo-thorn-manganye-2b2695a0/",
    quote:
      "I've worked with Tev and honestly, he's one of those rare full stack devs who just gets it. Super sharp, always learning, and genuinely excited about building great things. Whether it's frontend finesse or backend logic, he handles it with ease. On top of that, he's a great teammate and an even better human. Any team would be lucky to have him.",

    project: "Team Leadership",
    created_at: "2025-07-29",
  },
  {
    id: 2,
    name: "Gerrit Vermeulen",
    title: "Snr. Backend Developer",
    company: "Swipe iX",
    avatar: "/testimonials/gerrit.jpg",
    linkedin: "https://www.linkedin.com/in/gerrit-vermeulen-6171141b/",
    quote:
      "I had the pleasure of working with Tevin Morake and it was honestly lekker from start to finish. Tevin has a great mind for problem-solving and our collaboration, especially around Laravel, was not only productive but also a solid opportunity for mutual skill-sharing. We had plenty of thought-provoking chats about AI and how it's changing the world. Tevin also shared valuable insights into AWS services, and it's clear he has a strong understanding of cloud infrastructure and scalable systems. If you're looking for someone who's sharp, collaborative, and always curious about the latest in tech, Tevin is a great choice.",

    project: "System Architecture",
    created_at: "2025-07-19",
  },
  {
    id: 3,
    name: "Beston Mawarire",
    title: "Snr. Software Developer",
    company: "Rapidtrade",
    avatar: "/testimonials/beston.webp",
    linkedin: "https://www.linkedin.com/in/beston-mawarire-b52507137",
    quote:
      "Tevin is a diligent, hardworking, and skilled team lead and developer. He was both a close friend and mentor to me during the time we worked together. We worked on medium to large-scale projects together which were mostly led by him. Tevin's ability to manage difficult customers and high-pressure situations was a major part of our success in delivering well-developed software. He also knows how to manage expectations. I highly recommend Tevin. He learns fast, produces quality work and is great with people.",

    project: "Leadership & Mentorship",
    created_at: "2022-06-28",
  },
  {
    id: 4,
    name: "Gareth Hinde",
    title: "Solutions Architect",
    company: "Swipe iX",
    avatar: "/testimonials/gareth.jpeg",
    linkedin: "https://www.linkedin.com/in/gareth-hinde",
    quote:
      "Tevin has been a joy to work with. There are very few developers that have passion for their craft and Tevin is one of them. Eager to learn and grow, and always surprises with his insight and problem solving skills. Team player and always engaged with any task or project that he tackles. If he were a Springbok, he'd always be in my starting line-up.",

    project: "Insightful & Collaborative",
    created_at: "2025-07-29",
  },
  {
    id: 5,
    name: "Lucien Oppel",
    title: "Senior UX & UI Designer",
    company: "Media24",
    avatar: "/testimonials/lucien.jpg",
    linkedin: "https://www.linkedin.com/in/lucien-oppel",
    quote:
      "I had the pleasure of working with Tevin at a digital agency where we collaborated on multiple software solutions. As a backend developer, Tevin is highly detail-oriented and methodical, not only in his coding but also in his approach to product development. He has a strong understanding of backend dependencies and consistently bridges the gap between design and development with ease. His insight into how designs translate into scalable backend solutions made collaboration smooth and effective. Tevin is always willing to support across teams and brings a thoughtful, collaborative energy to every project. He communicates clearly and adapts his message depending on who is in the room, whether it's designers, developers, or stakeholders. He has also successfully integrated AI tools into his workflows, contributing to the delivery of innovative, forward-thinking products. Tevin is a strong technical contributor with great leadership and mentoring qualities.",

    project: "Bridge-Builder",
    created_at: "2025-07-30",
  },
  {
    id: 6,
    name: "Mariska Pottas",
    title: "Digital Project Manager",
    company: "Swipe iX",
    avatar: "/testimonials/mariska.jpg",
    linkedin: "https://www.linkedin.com/in/mariska-pottas-8912a9a9/",
    quote:
      "Tevin is an incredibly dedicated and talented developer who brings both share technical skills and a strong understanding of the clients needs.  What stands out most is his ability to see the bigger picture - he doesn't just build what is asked for, he thinks ahead and asks the right questions.  He offers thoughtful solutions that truly make a difference.  He's a reliable teammate and absolute pleasure to work with - his contributions have had a real positive impact on all projects he has touched.",

    project: "Client-Centric & Dedicated",
    created_at: "2025-07-29",
  },
  {
    id: 7,
    name: "Zacharia Manyoni",
    title: "DevSecOps Engineer",
    company: "Accenture",
    avatar: "/testimonials/zakes.jpg",
    linkedin: "https://www.linkedin.com/in/zmanyoni",
    quote:
      "I've worked alongside Tevin at Old Mutual Iwyze. During my tenure, he mostly worked on application support and adding enhancements to our already existing codebase. He took ownership of work the he drove over the line and rose to the occasion when he had to perform hotfixes and ad-hoc deployments in the event that there were anomalies in our application. What stood out for me the most is how Tevin was always accountable for his work and being the go-to person when there were some grey areas. I'm confident that Tevin would be a great asset to any team that he joins!",

    project: "Accountable & Proactive",
    created_at: "2022-06-28",
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
    image: "/blogs/default.png",
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
    image: "/blogs/default.png",
  },
];
