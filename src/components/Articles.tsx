"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { articles } from "@/data/mockHomeData";

export default function Articles() {
  // Get featured articles
  const featuredArticles = articles.filter(article => article.featured);
  const latestFeatured = featuredArticles.reduce((latest, current) => 
    new Date(current.publishedDate) > new Date(latest.publishedDate) ? current : latest
  );
  
  // Get 3 recent articles excluding the featured one
  const recentArticles = articles
    .filter(article => article.id !== latestFeatured.id)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors = {
      'Architecture': 'bg-blue-100 text-blue-800',
      'DevOps': 'bg-green-100 text-green-800',
      'Database': 'bg-purple-100 text-purple-800',
      'Technology Trends': 'bg-orange-100 text-orange-800',
      'Security': 'bg-red-100 text-red-800',
      'default': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  // Get related articles
  const getRelatedArticles = (currentArticle: typeof articles[0]) => {
    return articles
      .filter(article => 
        article.id !== currentArticle.id && 
        article.category === currentArticle.category
      )
      .slice(0, 2);
  };

  const ArticleImage = ({ 
    article, 
    className = "", 
    isFeatured = false
  }: { 
    article: typeof articles[0], 
    className?: string,
    isFeatured?: boolean
  }) => {
    const [imageError, setImageError] = useState(false);

    if (imageError || !article.image) {
      // Fallback to current placeholder design
      return (
        <div className={`bg-gradient-to-r from-black to-gray-600 relative overflow-hidden ${className}`}>
          {isFeatured && (
            <div className="absolute z-10 top-4 left-4">
              <span className="px-3 py-1 text-xs font-bold text-white bg-black rounded-full font-inter">
                Latest
              </span>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute z-10 top-4 right-4">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`flex items-center justify-center mx-auto mb-4 bg-white rounded-full shadow-sm ${isFeatured ? 'w-20 h-20' : 'w-16 h-16'}`}>
                <svg className={`text-gray-600 ${isFeatured ? 'w-10 h-10' : 'w-8 h-8'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className={`font-medium text-gray-300 font-inter ${isFeatured ? 'text-base' : 'text-sm'}`}>
                {article.category}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`relative overflow-hidden ${className} group`}>
        {isFeatured && (
          <div className="absolute z-10 top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold text-white bg-black rounded-full font-inter">
              Latest
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute z-10 top-4 right-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
        </div>

        <Image
          src={article.image}
          alt={article.title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            article.image.includes('/blogs/default.png') ? 'grayscale group-hover:grayscale-0' : ''
          }`}
          onError={() => setImageError(true)}
          priority={isFeatured}
          loading={isFeatured ? "eager" : "lazy"}
        />
      </div>
    );
  };

  return (
    <section className="px-4 py-20 bg-white sm:px-6 lg:px-8 lg:py-24" id="blog">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="mb-6 text-black font-inter articles-header">
            Latest Articles
          </h2>
          <p className="max-w-3xl mx-auto font-inter articles-subheader">
            Insights on modern development practices, architecture patterns, 
            and the evolving landscape of technology.
          </p>
        </div>

        {/* Featured Article */}
        <article className="mb-12 overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-gray-200 group">
          <div className="md:flex">
            {/* Featured Article Image */}
            <div className="md:w-1/2">
              <ArticleImage 
                article={latestFeatured} 
                className="aspect-[3/2]"
                isFeatured={true}
              />
            </div>

                {/* Featured Article Content */}
                <div className="p-8 md:w-1/2">
                  {/* Article Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted font-inter">
                      {formatDate(latestFeatured.publishedDate)}
                    </span>
                    <span className="text-sm font-medium text-muted font-inter">
                      {latestFeatured.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="mb-4 text-3xl font-bold text-black transition-colors font-inter group-hover:text-gray-700">
                    {latestFeatured.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p className="mb-6 text-lg font-normal leading-relaxed font-inter text-muted">
                    {latestFeatured.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center mb-6 space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                      <span className="text-sm font-bold text-gray-600">TM</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">Tevin Morake</p>
                      <p className="text-xs text-gray-500">Senior Full-Stack Developer</p>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <Link
                    href={`/articles/${latestFeatured.slug}`}
                    onClick={() => {
                      // Set session variable to indicate we came from homepage
                      if (typeof window !== 'undefined') {
                        sessionStorage.setItem('fromHome', 'true');
                      }
                    }}
                    className="inline-flex items-center text-base font-bold text-black transition-colors hover:text-gray-700 font-inter"
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* Recent Articles Grid */}
            <div className="grid gap-8 mb-12 md:grid-cols-3">
              {recentArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-gray-200 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Article Image */}
                  <ArticleImage 
                    article={article} 
                    className="aspect-[4/3]"
                    isFeatured={false}
                  />

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Article Meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium font-inter text-muted">
                        {formatDate(article.publishedDate)}
                      </span>
                      <span className="text-sm font-medium font-inter text-muted">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="mb-3 text-xl font-bold text-black transition-colors font-inter group-hover:text-gray-700">
                      {article.title}
                    </h3>

                    {/* Article Excerpt */}
                    <p className="mb-4 text-base font-normal leading-relaxed font-inter text-muted">
                      {article.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center mb-4 space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                        <span className="text-xs font-bold text-gray-600">TM</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-black">Tevin Morake</p>
                      </div>
                    </div>
                    
                    {/* Read More Link */}
                    <Link
                      href={`/articles/${article.slug}`}
                      onClick={() => {
                        // Set session variable to indicate we came from homepage
                        if (typeof window !== 'undefined') {
                          sessionStorage.setItem('fromHome', 'true');
                        }
                      }}
                      className="inline-flex items-center text-sm font-bold text-black transition-colors hover:text-gray-700 font-inter"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>

                    {/* Related Articles */}
                    {getRelatedArticles(article).length > 0 && (
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        <p className="mb-2 text-xs font-medium text-gray-500">Related:</p>
                        <div className="space-y-1">
                          {getRelatedArticles(article).map((relatedArticle) => (
                            <Link
                              key={relatedArticle.id}
                              href={`/articles/${relatedArticle.slug}`}
                              onClick={() => {
                                // Set session variable to indicate we came from homepage
                                if (typeof window !== 'undefined') {
                                  sessionStorage.setItem('fromHome', 'true');
                                }
                              }}
                              className="block text-xs text-gray-600 truncate transition-colors hover:text-black"
                            >
                              {relatedArticle.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

        {/* View All Articles Button */}
        <div className="mb-12 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center px-6 py-3 text-base font-bold text-black transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white hover:scale-105 font-inter focus:ring-4 focus:ring-black/20"
          >
            View all articles
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
