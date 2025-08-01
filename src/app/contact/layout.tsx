import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Tevin Morake",
  description: "Get in touch with Tevin Morake for project collaborations, consulting opportunities, or technical discussions. Available for full-time positions and freelance work.",
  keywords: [
    "Contact Tevin Morake",
    "Hire Developer",
    "Full Stack Developer",
    "Project Collaboration",
    "Technical Consulting",
    "Freelance Developer",
    "Software Development Services",
    "React Developer for Hire",
    "Node.js Consulting"
  ],
  alternates: {
    canonical: "https://tevin-morake.github.io/contact",
  },
  openGraph: {
    title: "Contact Tevin Morake - Let's Build Something Amazing",
    description: "Ready to start your next project? Get in touch with Tevin Morake for collaborations, consulting, or technical discussions.",
    url: "https://tevin-morake.github.io/contact",
    siteName: "Tevin Morake Portfolio",
    type: "website",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Tevin Morake - Full-Stack Developer",
        type: "image/png",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tevin Morake - Let's Build Something Amazing",
    description: "Ready to start your next project? Get in touch for collaborations, consulting, or technical discussions.",
    images: ["/og-contact.png"],
    creator: "@tevinmorake",
    site: "@tevinmorake",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
