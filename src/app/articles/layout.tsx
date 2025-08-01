import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Blog - Tevin Morake",
  description: "Read technical articles, tutorials, and insights on web development, AI integration, cloud architecture, and modern software engineering practices by Tevin Morake.",
  keywords: [
    "Tevin Morake Blog",
    "Technical Articles",
    "Web Development Tutorials",
    "AI Integration",
    "Cloud Architecture",
    "Software Engineering",
    "React Tutorials",
    "Next.js Guide",
    "Node.js Articles",
    "DevOps Articles",
    "Programming Blog"
  ],
  alternates: {
    canonical: "https://tevin-morake.github.io/articles",
  },
  openGraph: {
    title: "Technical Articles & Blog - Tevin Morake",
    description: "Read technical articles, tutorials, and insights on web development, AI integration, and modern software engineering practices.",
    url: "https://tevin-morake.github.io/articles",
    siteName: "Tevin Morake Portfolio",
    type: "website",
    images: [
      {
        url: "/blogs/default.png",
        width: 1200,
        height: 630,
        alt: "Technical Articles by Tevin Morake",
        type: "image/png",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Articles & Blog - Tevin Morake",
    description: "Read technical articles, tutorials, and insights on web development and software engineering.",
    images: ["/blogs/default.png"],
    creator: "@tevinmorake",
    site: "@tevinmorake",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
