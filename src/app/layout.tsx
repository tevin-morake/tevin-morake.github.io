
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalWrapper from "@/components/ConditionalWrapper";
import DisclaimerModal from "@/components/DisclaimerModal";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tevin Morake - Full-Stack Developer & Tech Innovator",
    template: "%s | Tevin Morake"
  },
  description: "Full-stack developer specializing in modern web technologies, AI integration, and scalable solutions. 10+ years experience building innovative software for global startups and enterprises.",
  keywords: [
    "Tevin Morake",
    "Full Stack Developer", 
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Laravel",
    "AI Integration",
    "Web Development",
    "Mobile Development",
    "Cloud Architecture",
    "DevOps",
    "Portfolio",
    "Remote Developer",
    "Global Developer",
    "International Freelancer",
    "Enterprise Software",
    "Startup Technology"
  ],
  authors: [{ name: "Tevin Morake" }],
  creator: "Tevin Morake",
  publisher: "Tevin Morake",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tevin-morake.github.io'),
  alternates: {
    canonical: 'https://tevin-morake.github.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tevin-morake.github.io',
    title: 'Tevin Morake - Full-Stack Developer & Tech Innovator',
    description: 'Full-stack developer specializing in modern web technologies, AI integration, and scalable solutions. 10+ years experience building innovative software for global enterprises.',
    siteName: 'Tevin Morake Portfolio',
    images: [
      {
        url: '/about/abuti.jpg',
        width: 1200,
        height: 630,
        alt: 'Tevin Morake - Full-Stack Developer Portfolio',
        type: 'image/jpeg',
      },
      {
        url: '/about/abuti.jpg',
        width: 1200,
        height: 1200,
        alt: 'Tevin Morake - Full-Stack Developer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tevin Morake - Full-Stack Developer & Tech Innovator',
    description: 'Full-stack developer specializing in modern web technologies, AI integration, and scalable solutions. 10+ years experience.',
    images: ['/about/abuti.jpg'],
    creator: '@tevinmorake', // Replace with your actual Twitter handle
    site: '@tevinmorake', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} antialiased font-inter min-h-full flex flex-col`}
      >
        <GoogleAnalytics />
        <StructuredData type="Person" />
        <StructuredData type="WebSite" />
        <ConditionalHeader />
        <ConditionalWrapper>{children}</ConditionalWrapper>
        <DisclaimerModal />
      </body>
    </html>
  );
}
