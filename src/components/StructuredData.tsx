'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type?: 'Person' | 'WebSite' | 'Article' | 'Organization';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type = 'Person', data }: StructuredDataProps) {
  const getPersonSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tevin Morake',
    jobTitle: 'Full-Stack Developer',
    description: 'Full-stack developer specializing in modern web technologies, AI integration, and scalable solutions with 10+ years of experience.',
    url: 'https://tevin-morake.github.io',
    image: 'https://tevin-morake.github.io/about/abuti.jpg',
    sameAs: [
      'https://github.com/tevin-morake', // Replace with your actual profiles
      'https://linkedin.com/in/tevin-morake',
      'https://twitter.com/tevinmorake',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Laravel',
      'PHP',
      'Python',
      'AI Integration',
      'Cloud Architecture',
      'DevOps',
      'Mobile Development',
      'Web Development',
      'Software Engineering'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full-Stack Developer',
      description: 'Develops web and mobile applications using modern technologies',
      skills: 'JavaScript, TypeScript, React, Node.js, AI Integration, Cloud Architecture'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance/Consulting'
    },
    ...data
  });

  const getWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tevin Morake Portfolio',
    description: 'Full-stack developer portfolio showcasing modern web development projects and technical expertise.',
    url: 'https://tevin-morake.github.io',
    author: {
      '@type': 'Person',
      name: 'Tevin Morake'
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Tevin Morake'
    },
    ...data
  });

  const getArticleSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Person',
      name: 'Tevin Morake',
      url: 'https://tevin-morake.github.io'
    },
    publisher: {
      '@type': 'Person',
      name: 'Tevin Morake'
    },
    inLanguage: 'en-US',
    ...data
  });

  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tevin Morake - Full-Stack Developer',
    description: 'Professional software development services specializing in modern web technologies and AI integration.',
    url: 'https://tevin-morake.github.io',
    logo: 'https://tevin-morake.github.io/logo.png',
    founder: {
      '@type': 'Person',
      name: 'Tevin Morake'
    },
    sameAs: [
      'https://github.com/tevin-morake',
      'https://linkedin.com/in/tevin-morake',
      'https://twitter.com/tevinmorake',
    ],
    ...data
  });

  const getSchema = () => {
    switch (type) {
      case 'WebSite':
        return getWebSiteSchema();
      case 'Article':
        return getArticleSchema();
      case 'Organization':
        return getOrganizationSchema();
      default:
        return getPersonSchema();
    }
  };

  const schema = getSchema();

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
}
