"use client";

import { articles } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import Footer from "@/components/Footer";

type SortField = 'title' | 'category' | 'publishedDate' | 'readTime';
type SortOrder = 'asc' | 'desc';
type ArticleFilter = 'all' | 'featured' | 'recent';

export default function ArticlesPage() {
  const [filters, setFilters] = useState({
    category: '',
    type: 'all' as ArticleFilter,
    searchTerm: '',
  });
  const [sortField, setSortField] = useState<SortField>('publishedDate');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Get unique categories for filters
  const categories = useMemo(() => {
    return Array.from(new Set(articles.map(a => a.category).filter(Boolean))).sort();
  }, []);

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    const filtered = articles.filter(article => {
      // Category filter
      if (filters.category && article.category !== filters.category) return false;
      
      // Type filter
      if (filters.type === 'featured' && !article.featured) return false;
      if (filters.type === 'recent') {
        const monthsAgo = new Date();
        monthsAgo.setMonth(monthsAgo.getMonth() - 3);
        if (new Date(article.publishedDate) < monthsAgo) return false;
      }
      
      // Search term filter
      if (filters.searchTerm && filters.searchTerm.trim()) {
        const searchTerm = filters.searchTerm.toLowerCase().trim();
        const searchableText = [
          article.title,
          article.excerpt,
          article.category || ''
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(searchTerm)) return false;
      }
      
      return true;
    });

    return filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'category':
          aValue = (a.category || '').toLowerCase();
          bValue = (b.category || '').toLowerCase();
          break;
        case 'publishedDate':
          aValue = new Date(a.publishedDate).getTime();
          bValue = new Date(b.publishedDate).getTime();
          break;
        case 'readTime':
          aValue = parseInt(a.readTime.replace(/\D/g, '')) || 0;
          bValue = parseInt(b.readTime.replace(/\D/g, '')) || 0;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filters, sortField, sortOrder]);

  const clearFilters = () => {
    setFilters({ category: '', type: 'all', searchTerm: '' });
    setSortField('publishedDate');
    setSortOrder('desc');
  };

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

  const ArticleImage = ({ 
    article, 
    className = "", 
    priority = false
  }: { 
    article: typeof articles[0], 
    className?: string,
    priority?: boolean
  }) => {
    const [imageError, setImageError] = useState(false);

    if (imageError || !article.image) {
      // Fallback to gradient placeholder
      return (
        <div className={`bg-gradient-to-r from-black to-gray-600 relative overflow-hidden ${className}`}>
          {article.featured && (
            <div className="absolute z-10 top-4 left-4">
              <span className="px-3 py-1 text-xs font-bold text-white bg-black/80 backdrop-blur-sm rounded-full font-inter">
                Featured
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
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-sm">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300 font-inter">
                {article.category}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`relative overflow-hidden ${className} group`}>
        {article.featured && (
          <div className="absolute z-10 top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold text-white bg-black/80 backdrop-blur-sm rounded-full font-inter">
              Featured
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
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="text-white">
            <h4 className="font-bold text-lg mb-1">{article.title}</h4>
            <p className="text-sm text-white/90 line-clamp-2">{article.excerpt}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-black font-inter hero-title">
              All Articles
            </h1>
            <p className="max-w-3xl mx-auto leading-relaxed font-inter section-subheader" style={{fontSize: '27px', letterSpacing: '-0.06em'}}>
              Deep dives into modern development practices, architecture patterns, and the evolving 
              landscape of technology. Insights from real-world experience building scalable solutions.
            </p>
          </div>

          {/* Enhanced Filter & Sort Controls */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={filters.searchTerm}
                  onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                  className="w-full px-4 py-3 pl-10 text-sm text-black placeholder-gray-500 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <button
                onClick={() => setFilters(prev => ({ ...prev, category: '' }))}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all font-inter ${
                  !filters.category 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilters(prev => ({ ...prev, category }))}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all font-inter ${
                    filters.category === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Type Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {(['all', 'featured', 'recent'] as ArticleFilter[]).map(type => (
                <button
                  key={type}
                  onClick={() => setFilters(prev => ({ ...prev, type }))}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all font-inter ${
                    filters.type === type
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'All Articles' : 
                   type === 'featured' ? 'Featured' : 
                   'Recent (3 months)'}
                </button>
              ))}
            </div>

            {/* Sort Controls & Results */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 font-inter">Sort by:</span>
                <div className="flex items-center gap-2">
                  {(['publishedDate', 'title', 'category', 'readTime'] as SortField[]).map(field => (
                    <button
                      key={field}
                      onClick={() => setSortField(field)}
                      className={`px-3 py-1 text-sm font-medium rounded-lg transition-all font-inter ${
                        sortField === field
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {field === 'publishedDate' ? 'Date' : 
                       field === 'readTime' ? 'Read Time' :
                       field.charAt(0).toUpperCase() + field.slice(1)}
                    </button>
                  ))}
                  <button
                    onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                    className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-all font-inter"
                    title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {sortOrder === 'asc' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 font-inter">
                  {filteredAndSortedArticles.length} article{filteredAndSortedArticles.length !== 1 ? 's' : ''}
                </span>
                {(filters.category || filters.type !== 'all' || filters.searchTerm || sortField !== 'publishedDate' || sortOrder !== 'desc') && (
                  <button
                    onClick={clearFilters}
                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors font-inter"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedArticles.map((article, index) => (
              <article
                key={article.id}
                className="relative overflow-hidden transition-all duration-500 group bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:border-gray-200 hover:-translate-y-2"
              >
                {/* Enhanced Article Image */}
                <ArticleImage 
                  article={article} 
                  className="aspect-[4/3]"
                  priority={index < 6}
                />

                {/* Enhanced Article Content */}
                <div className="p-6">
                  {/* Article Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500 font-inter">
                      {formatDate(article.publishedDate)}
                    </span>
                    <span className="text-sm font-medium text-gray-500 font-inter">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors font-inter group-hover:text-gray-700">
                    {article.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p className="mb-4 text-base font-normal leading-relaxed font-inter text-muted line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Enhanced Article Actions */}
                  <div className="flex items-center justify-between">
                    <a
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center text-sm font-bold text-black transition-colors hover:text-gray-700 font-inter"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    
                    {article.featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Link
                href="/#contact"
                className="group inline-flex items-center px-8 py-4 text-base font-bold text-black transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 font-inter"
              >
                Let&apos;s Work Together
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-sm text-gray-600 font-inter">
                Ready to discuss your next project?
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
