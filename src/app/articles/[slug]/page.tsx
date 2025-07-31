import ArticleDetailClient from "./ArticleDetailClient";

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  
  return <ArticleDetailClient slug={slug} />;
}

