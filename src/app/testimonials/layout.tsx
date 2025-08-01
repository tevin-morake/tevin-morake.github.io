import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - Tevin Morake",
  description: "Read testimonials and reviews from clients, colleagues, and partners who have worked with Tevin Morake on various software development projects.",
  keywords: [
    "Tevin Morake Testimonials",
    "Client Reviews",
    "Developer Reviews",
    "Software Development Testimonials",
    "Project Feedback",
    "Client Satisfaction",
    "Professional References",
    "Work Reviews"
  ],
  alternates: {
    canonical: "https://tevin-morake.github.io/testimonials",
  },
  openGraph: {
    title: "Testimonials - What People Say About Tevin Morake",
    description: "Read testimonials and reviews from clients, colleagues, and partners who have worked with Tevin on software development projects.",
    url: "https://tevin-morake.github.io/testimonials",
    siteName: "Tevin Morake Portfolio",
    type: "website",
    images: [
      {
        url: "/og-testimonials.png",
        width: 1200,
        height: 630,
        alt: "Testimonials for Tevin Morake - Full-Stack Developer",
        type: "image/png",
      }
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials - What People Say About Tevin Morake",
    description: "Read testimonials and reviews from clients and colleagues who have worked with Tevin.",
    images: ["/og-testimonials.png"],
    creator: "@tevinmorake",
    site: "@tevinmorake",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
