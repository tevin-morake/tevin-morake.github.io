import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Tevin Morake",
  description: "Learn more about Tevin Morake, a passionate full-stack developer with 10+ years of experience in modern web technologies, AI integration, and scalable solutions.",
  keywords: [
    "About Tevin Morake",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "AI Integration",
    "React Developer",
    "Node.js",
    "Laravel",
    "Portfolio",
    "Experience",
    "Skills"
  ],
  alternates: {
    canonical: "https://tevin-morake.github.io/about",
  },
  openGraph: {
    title: "About Tevin Morake - Full-Stack Developer & Tech Innovator",
    description: "Discover the journey, skills, and philosophy of Tevin Morake, a passionate full-stack developer specializing in modern web technologies and AI integration.",
    url: "https://tevin-morake.github.io/about",
    siteName: "Tevin Morake Portfolio",
    type: "profile",
    images: [
      {
        url: "/about/abuti.jpg",
        width: 1200,
        height: 630,
        alt: "Tevin Morake - About Me Profile",
        type: "image/jpeg",
      }
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tevin Morake - Full-Stack Developer",
    description: "Discover the journey, skills, and philosophy of Tevin Morake, a passionate full-stack developer.",
    images: ["/about/abuti.jpg"],
    creator: "@tevinmorake", // Replace with your actual Twitter handle
    site: "@tevinmorake", // Replace with your actual Twitter handle
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
