import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Tevin Morake",
  description: "Explore my portfolio of innovative web applications, mobile apps, and software solutions built with modern technologies like React, Next.js, Node.js, and AI integration.",
  keywords: [
    "Tevin Morake Projects",
    "Portfolio",
    "Web Applications",
    "Mobile Apps",
    "React Projects",
    "Next.js",
    "Node.js",
    "AI Integration",
    "Full Stack Projects",
    "Software Development",
    "Open Source"
  ],
  alternates: {
    canonical: "https://tevin-morake.github.io/projects",
  },
  openGraph: {
    title: "Projects Portfolio - Tevin Morake",
    description: "Explore innovative web applications, mobile apps, and software solutions built with modern technologies.",
    url: "https://tevin-morake.github.io/projects",
    siteName: "Tevin Morake Portfolio",
    type: "website",
    images: [
      {
        url: "/projects/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Tevin Morake - Projects Portfolio",
        type: "image/png",
      }
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio - Tevin Morake",
    description: "Explore innovative web applications, mobile apps, and software solutions built with modern technologies.",
    images: ["/projects/portfolio.png"],
    creator: "@tevinmorake",
    site: "@tevinmorake",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
