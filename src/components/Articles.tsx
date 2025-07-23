"use client";

// Mock articles data - replace with CMS/API data in the future
const articles = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt: "A comprehensive guide to architecting microservices that can handle enterprise-level traffic while maintaining code quality and developer experience.",
    publishedDate: "2024-12-15",
    readTime: "8 min read",
    category: "Architecture",
    slug: "scalable-microservices-nodejs-docker",
    featured: true
  },
  {
    id: 2,
    title: "The Future of Full-Stack Development in 2025",
    excerpt: "Exploring emerging technologies, frameworks, and methodologies that will shape how we build web applications in the coming year.",
    publishedDate: "2024-12-08",
    readTime: "6 min read",
    category: "Technology Trends",
    slug: "future-fullstack-development-2025",
    featured: false
  },
  {
    id: 3,
    title: "Implementing Zero-Downtime Deployments with CI/CD",
    excerpt: "Learn how to implement robust deployment strategies that ensure your applications remain available during updates and releases.",
    publishedDate: "2024-11-28",
    readTime: "10 min read",
    category: "DevOps",
    slug: "zero-downtime-deployments-cicd",
    featured: false
  },
  {
    id: 4,
    title: "Database Optimization Strategies for High-Traffic Applications",
    excerpt: "Performance tuning techniques and architectural patterns to handle millions of requests while maintaining data consistency.",
    publishedDate: "2024-11-20",
    readTime: "12 min read",
    category: "Database",
    slug: "database-optimization-high-traffic",
    featured: true
  },
  {
    id: 5,
    title: "Security Best Practices for Modern Web Applications",
    excerpt: "Essential security measures every developer should implement to protect applications from common vulnerabilities and attacks.",
    publishedDate: "2024-11-10",
    readTime: "9 min read",
    category: "Security",
    slug: "security-best-practices-web-apps",
    featured: false
  },
  {
    id: 6,
    title: "From Monolith to Microservices: A Migration Strategy",
    excerpt: "A step-by-step approach to breaking down monolithic applications into scalable, maintainable microservices without disrupting business operations.",
    publishedDate: "2024-10-25",
    readTime: "15 min read",
    category: "Architecture",
    slug: "monolith-to-microservices-migration",
    featured: false
  }
];

export default function Articles() {
  // Get the latest article as featured
  const featuredArticle = articles.reduce((latest, current) => 
    new Date(current.publishedDate) > new Date(latest.publishedDate) ? current : latest
  );
  
  // Get 3 recent articles excluding the featured one
  const recentArticles = articles
    .filter(article => article.id !== featuredArticle.id)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="min-h-screen px-4 py-16 bg-white sm:px-6 lg:px-8" id="blog">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter">
            Latest Articles
          </h2>
          <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
            Insights on modern development practices, architecture patterns, 
            and the evolving landscape of technology.
          </p>
        </div>

        {/* Featured Article */}
        <article className="mb-12 overflow-hidden bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-gray-200 transition-all duration-300">
          <div className="md:flex">
            {/* Featured Article Image */}
            <div className="md:w-1/2 aspect-[3/2] bg-gradient-to-r from-black to-gray-600 relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-bold text-white bg-black rounded-full font-inter">
                  Latest
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-sm">
                    <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-300 font-inter">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Article Content */}
            <div className="md:w-1/2 p-8">
              {/* Article Meta */}
              <div className="flex items-center justify-between mb-4 text-sm font-medium font-inter" style={{ color: '#999999' }}>
                <span>{formatDate(featuredArticle.publishedDate)}</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              {/* Article Title */}
              <h3 className="mb-4 text-3xl font-bold text-black font-inter">
                {featuredArticle.title}
              </h3>

              {/* Article Excerpt */}
              <p className="mb-6 text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                {featuredArticle.excerpt}
              </p>
              
              {/* Read More Link */}
              <a
                href={`/articles/${featuredArticle.slug}`}
                className="inline-flex items-center text-base font-bold text-black transition-colors hover:text-gray-700 font-inter"
              >
                Read Article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Recent Articles Grid */}
        <div className="grid gap-8 mb-12 md:grid-cols-3">
          {recentArticles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden bg-white border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-gray-200"
            >
              {/* Article Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-r from-black to-gray-600 relative overflow-hidden">
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

              {/* Article Content */}
              <div className="p-6">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-3 text-sm font-medium font-inter" style={{ color: '#999999' }}>
                  <span>{formatDate(article.publishedDate)}</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Article Title */}
                <h3 className="mb-3 text-xl font-bold text-black font-inter">
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p className="mb-4 text-base font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
                  {article.excerpt}
                </p>
                
                {/* Read More Link */}
                <a
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-sm font-bold text-black transition-colors hover:text-gray-700 font-inter"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center">
          <a
            href="/articles"
            className="inline-block px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
