import { articles } from "@/data/mockHomeData";
import { Metadata } from "next";

interface ArticleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const articleUrl = `https://tevin-morake.github.io/articles/${slug}`;

  return {
    title: `${article.title} | Tevin Morake`,
    description: article.excerpt,
    keywords: [
      article.category, 
      'development', 
      'programming', 
      'technology', 
      'software',
      'Tevin Morake',
      'tutorial',
      'guide',
      'web development',
      'full stack'
    ],
    authors: [{ name: 'Tevin Morake' }],
    creator: 'Tevin Morake',
    publisher: 'Tevin Morake',
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: 'Tevin Morake Portfolio',
      type: 'article',
      publishedTime: article.publishedDate,
      modifiedTime: article.publishedDate,
      authors: ['Tevin Morake'],
      section: article.category,
      tags: [article.category, 'development', 'programming', 'technology'],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
          type: 'image/png',
        },
        {
          url: article.image,
          width: 1200,
          height: 1200,
          alt: article.title,
          type: 'image/png',
        }
      ],
      locale: 'en_ZA',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
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
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return <>{children}</>;
}
