"use client";

import { articles } from "@/data/mockHomeData";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

interface ArticleDetailClientProps {
  slug: string;
}

export default function ArticleDetailClient({ slug }: ArticleDetailClientProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [referrer, setReferrer] = useState<'homepage' | 'listing' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Find the article by slug
  const article = articles.find(a => a.slug === slug);

  // TODO: Replace with API call when CMS is ready
  // const { data: article, isLoading: apiLoading } = useQuery({
  //   queryKey: ['article', slug],
  //   queryFn: () => fetchArticle(slug)
  // });

  useEffect(() => {
    // Determine referrer source for navigation
    const referrerSource = document.referrer;
    
    // More robust referrer detection
    if (referrerSource.includes('/articles') && !referrerSource.includes('#')) {
      // Came from articles listing page
      setReferrer('listing');
    } 
    else if (referrerSource === '' || 
             referrerSource.includes('/#') ||
             referrerSource.includes('#blog') ||
             referrerSource.endsWith('/') ||
             (!referrerSource.includes('/articles') && referrerSource.includes(window.location.origin))) {
      // Came from homepage or homepage blog section
      setReferrer('homepage');
    }
    else {
      // Default to homepage for external links or unknown sources
      setReferrer('homepage');
    }

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Reading progress tracking and scroll to top visibility
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setReadingProgress(scrolled);
      
      // Show scroll to top button after scrolling 300px
      setShowScrollTop(winScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

  const getRelatedArticles = () => {
    if (!article) return [];
    return articles
      .filter(a => a.id !== article.id && a.category === article.category)
      .slice(0, 3);
  };

  const handleBackNavigation = () => {
    // Check session variable first
    const fromHome = typeof window !== 'undefined' ? sessionStorage.getItem('fromHome') : null;
    
    if (fromHome === 'true') {
      // Clear the session variable and go to homepage
      sessionStorage.removeItem('fromHome');
      router.push('/');
    } else if (referrer === 'listing') {
      // Clear session variable and go to articles listing
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('fromHome');
      }
      router.push('/articles');
    } else {
      // Default: clear session variable and go to homepage blog section
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('fromHome');
      }
      router.push('/#blog');
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard?.writeText(window.location.href);
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  if (!article) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-black">Article Not Found</h1>
          <p className="mb-8 text-gray-600">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/articles"
            className="inline-flex items-center px-6 py-3 text-base font-bold text-black transition-all duration-300 border-2 border-black rounded-full hover:bg-black hover:text-white"
          >
            Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        {/* Black Header Background */}
        <div className="fixed top-0 left-0 w-full h-20 bg-black z-40"></div>
        
        <div className="max-w-4xl px-4 pt-24 pb-16 mx-auto sm:px-6 lg:px-8">
          <div className="animate-pulse">
            {/* Header skeleton */}
            <div className="w-3/4 h-8 mb-4 bg-gray-200 rounded-lg"></div>
            <div className="w-1/2 h-4 mb-8 bg-gray-200 rounded"></div>
            
            {/* Image skeleton */}
            <div className="aspect-[16/9] bg-gray-200 rounded-2xl mb-8"></div>
            
            {/* Content skeleton */}
            <div className="space-y-4">
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
              <div className="w-4/5 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Black Header Background */}
      <div className="fixed top-0 left-0 w-full h-20 bg-black z-40"></div>

      {/* Minimal Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-100 z-50">
        <div 
          className="h-full transition-all duration-300 ease-out bg-gradient-to-r from-black via-gray-800 to-black"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Navigation - Positioned in header */}
      <nav className="fixed z-[60] top-6 left-6">
        <button
          onClick={handleBackNavigation}
          className="flex items-center gap-2 px-4 py-2 text-black transition-all bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105"
        >
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium text-black">
            {(() => {
              const fromHome = typeof window !== 'undefined' ? sessionStorage.getItem('fromHome') : null;
              if (fromHome === 'true') return 'Home';
              return referrer === 'listing' ? 'Articles' : 'Blog';
            })()}
          </span>
        </button>
      </nav>

      {/* Share Button - Positioned in header */}
      <div className="fixed z-[60] top-6 right-6">
        <button
          onClick={handleShare}
          className="p-2 transition-all bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md"
          title="Share article"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed z-40 bottom-6 right-6 animate-fadeInUp">
          <button
            onClick={handleScrollToTop}
            className="p-3 text-white transition-all bg-black rounded-full shadow-lg hover:bg-gray-800 hover:scale-105"
            title="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      )}

      {/* Hero Section - Clean and Professional */}
      <section className="relative">
        <div className="max-w-4xl px-4 pt-24 pb-12 mx-auto sm:px-6 lg:px-8">
          {/* Article Meta */}
          <div className="flex items-center gap-4 mb-8">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            {article.featured && (
              <div className="flex items-center gap-2 px-3 py-1 border border-yellow-200 rounded-full bg-yellow-50">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm font-medium text-yellow-800">Featured</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-black md:text-5xl">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="max-w-3xl mb-8 text-xl leading-relaxed text-gray-600">
            {article.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="flex flex-wrap items-center justify-between pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
                <span className="font-bold text-white">TM</span>
              </div>
              <div>
                <h3 className="font-medium text-black">Tevin Morake</h3>
                <p className="text-sm text-gray-500">Senior Full-Stack Developer</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end text-sm text-gray-500">
              <span>{formatDate(article.publishedDate)}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image - Clean */}
      <section className="max-w-4xl px-4 mx-auto mb-12 sm:px-6 lg:px-8">
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className={`object-cover ${
              article.image.includes('/blogs/default.png') ? 'grayscale' : ''
            }`}
            priority
          />
        </div>
      </section>

      {/* Article Content - Medium-style, WYSIWYG Ready */}
      <article className="max-w-2xl px-4 pb-16 mx-auto sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-gray max-w-none">
          {/* 
            WYSIWYG Content Renderer - Ready for CMS Integration
            Replace this section with: <div dangerouslySetInnerHTML={{ __html: article.content }} />
            The CMS will provide rich HTML content from editors like TinyMCE, CKEditor, or Tiptap
          */}
          <div className="leading-relaxed text-gray-900 article-content">
            
            {/* Drop cap introduction */}
            <p className="mb-6 text-lg">
              <span className="float-left mt-1 mr-2 text-6xl font-bold leading-none text-black">I</span>
              n today&apos;s rapidly evolving technological landscape, the principles and practices outlined in this article represent the culmination of years of hands-on experience and deep industry insight. This comprehensive exploration delves into the nuances that separate good implementations from exceptional ones.
            </p>
            
            <p className="mb-6">
              The foundation of any robust system lies in its architectural decisions. When we examine the core principles that drive successful implementations, we find that clarity of purpose and elegance of design are paramount.
            </p>
            
            <h2 className="mt-12 mb-6 text-2xl font-bold text-black">
              Understanding the Fundamentals
            </h2>
            
            <p className="mb-6">
              This isn&apos;t just about writing code that works—it&apos;s about crafting solutions that stand the test of time. The best implementations share common characteristics that transcend specific technologies or frameworks.
            </p>
            
            <ul className="mb-8 space-y-2">
              <li>Clarity of purpose drives design decisions</li>
              <li>Elegant solutions reduce complexity</li>
              <li>Sustainable architecture enables growth</li>
              <li>Performance considerations from day one</li>
            </ul>
            
            <h2 className="mt-12 mb-6 text-2xl font-bold text-black">
              Implementation Strategies
            </h2>
            
            <p className="mb-6">
              Successful implementation requires a methodical approach that balances immediate needs with long-term sustainability. The strategies outlined here have been refined through real-world application across diverse environments and use cases.
            </p>
            
            {/* Code block - WYSIWYG friendly */}
            <div className="p-4 my-8 border border-gray-200 rounded-md bg-gray-50">
              <pre className="overflow-x-auto text-sm text-gray-800"><code>{`// Optimized approach pattern
const scalableArchitecture = {
  principles: {
    modularity: 'high',
    testability: 'comprehensive', 
    performance: 'O(log n)',
    maintainability: 'excellent'
  },
  
  async initialize() {
    return this.bootstrap()
      .then(this.configureServices)
      .then(this.validateIntegrity);
  }
};`}</code></pre>
            </div>
            
            <p className="mb-6">
              The code above demonstrates a clean architectural pattern that prioritizes readability and maintainability. Notice how each method has a single responsibility and the naming convention clearly communicates intent.
            </p>
            
            {/* Quote block - WYSIWYG friendly */}
            <blockquote className="py-2 pl-6 my-8 text-lg italic text-gray-700 border-l-4 border-gray-300">
              &ldquo;The mark of exceptional engineering is not in the complexity of the solution, but in the simplicity achieved through deep understanding of the problem domain.&rdquo;
            </blockquote>
            
            <h2 className="mt-12 mb-6 text-2xl font-bold text-black">
              Future Implications
            </h2>
            
            <p className="mb-6">
              Looking ahead, the landscape continues to evolve at an unprecedented pace. The principles explored in this article provide a solid foundation for adapting to emerging technologies and changing requirements.
            </p>
            
            <p className="mb-6">
              As we move forward, the ability to balance innovation with proven practices becomes increasingly valuable. The most successful teams are those that can embrace new technologies while maintaining the core principles that ensure long-term success.
            </p>
            
            <h3 className="mt-8 mb-4 text-xl font-bold text-black">
              Key Takeaways
            </h3>
            
            <ol className="pl-6 mb-8 space-y-2">
              <li><strong>Balance innovation with stability</strong> — Don&apos;t chase every trend</li>
              <li><strong>Focus on fundamentals first</strong> — Solid foundation enables growth</li>
              <li><strong>Design for change</strong> — Requirements will evolve</li>
              <li><strong>Measure what matters</strong> — Use data to drive decisions</li>
            </ol>
            
            <p className="mb-8">
              By following these principles and maintaining a focus on quality, teams can build systems that not only meet today&apos;s requirements but are positioned to adapt and thrive as technology continues to evolve.
            </p>
            
          </div>
        </div>
      </article>

      {/* Related Articles & Footer */}
      <section className="max-w-4xl px-4 pb-16 mx-auto sm:px-6 lg:px-8">
        {/* Related Articles - Clean */}
        {getRelatedArticles().length > 0 && (
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-black">Related Articles</h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              {getRelatedArticles().map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.slug}`}
                  className="block overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg group hover:shadow-md"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        relatedArticle.image.includes('/blogs/default.png') ? 'grayscale' : ''
                      }`}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="mb-2 font-bold text-black line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedArticle.readTime}</span>
                      <span>{relatedArticle.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Card - Clean */}
        <div className="mb-12">
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-black rounded-full">
                <span className="text-xl font-bold text-white">TM</span>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-xl font-bold text-black">Tevin Morake</h4>
                <p className="mb-4 leading-relaxed text-gray-600">
                  Senior Full-Stack Developer with 10+ years of experience transforming complex business challenges into elegant, scalable solutions. Passionate about architecture patterns, performance optimization, and building systems that stand the test of time.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com/in/tevin-morake" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 transition-all bg-white border border-gray-300 rounded-full hover:text-black hover:border-gray-400"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/tevin-morake" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 transition-all bg-white border border-gray-300 rounded-full hover:text-black hover:border-gray-400"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button - Clean */}
        <div className="text-center">
          <button
            onClick={handleBackNavigation}
            className="inline-flex items-center gap-2 px-6 py-3 text-white transition-colors bg-black rounded-lg hover:bg-gray-800"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {(() => {
              const fromHome = typeof window !== 'undefined' ? sessionStorage.getItem('fromHome') : null;
              if (fromHome === 'true') return 'Back to Home';
              return referrer === 'listing' ? 'Back to All Articles' : 'Back to Blog Section';
            })()}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
