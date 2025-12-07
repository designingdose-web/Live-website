
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Helper to generate optimized URLs for specific widths
const getOptimizedUrl = (url: string, width: number) => {
  if (!url) return '';
  
  // Handle Unsplash
  if (url.includes('unsplash.com')) {
    const cleanUrl = url.split('?')[0];
    return `${cleanUrl}?auto=format&fit=crop&q=75&w=${width}`;
  }
  
  // Handle Cloudinary
  if (url.includes('res.cloudinary.com')) {
    // If we're resizing, we need to inject the width parameter.
    // The url might already have f_auto,q_auto from blogData.ts, or be raw.
    // Strategy: Remove any existing f_auto/q_auto segments to avoid duplication,
    // then insert the full set of params: w_{width},f_auto,q_auto.
    
    // Split at /upload/ to isolate the base from the transforms/id
    const parts = url.split('/upload/');
    if (parts.length === 2) {
      // parts[0] is everything before /upload/
      // parts[1] is the rest. It might start with v123... or f_auto...
      let suffix = parts[1];
      
      // Clean up existing transforms if present to start fresh
      // This regex removes f_auto, q_auto, and their separators if they exist at the start of the suffix
      suffix = suffix.replace(/f_auto,q_auto\/?/, '');
      
      return `${parts[0]}/upload/w_${width},f_auto,q_auto/${suffix}`;
    }
  }
  
  return url;
};

const BlogCard: React.FC<{ post: typeof blogPosts[0]; index: number }> = ({ post, index }) => {
  const cardRef = useScrollAnimation<HTMLAnchorElement>('slide-in-up');
  
  // Generate srcSet for responsive loading
  const srcSet = `
      ${getOptimizedUrl(post.image, 400)} 400w,
      ${getOptimizedUrl(post.image, 600)} 600w,
      ${getOptimizedUrl(post.image, 800)} 800w
  `;

  // Default src for fallback (medium size)
  const imageSrc = getOptimizedUrl(post.image, 600);

  return (
    <Link 
      to={`/blog/${post.id}`}
      ref={cardRef}
      className="group flex flex-col h-full bg-brand-secondary rounded-xl overflow-hidden border border-gray-700 hover:border-brand-accent-start/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent-start/10 animate-on-scroll"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-gray-800">
        <img 
          src={imageSrc}
          srcSet={srcSet}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-accent-middle border border-brand-accent-middle/30">
          {post.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-brand-muted mb-3 space-x-2">
           <span>{post.date}</span>
           <span>•</span>
           <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent-end transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-brand-muted text-sm line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center mt-auto pt-4 border-t border-gray-700/50">
           <span className="text-sm font-medium text-white">{post.author}</span>
           <span className="ml-auto text-brand-accent-start text-sm font-bold group-hover:translate-x-1 transition-transform">Read Article →</span>
        </div>
      </div>
    </Link>
  );
};

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useScrollAnimation('slide-in-up');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Featured post is always the first one
  const featuredPost = blogPosts[0];
  
  const featuredSrcSet = `
    ${getOptimizedUrl(featuredPost.image, 600)} 600w,
    ${getOptimizedUrl(featuredPost.image, 1200)} 1200w,
    ${getOptimizedUrl(featuredPost.image, 1600)} 1600w
  `;

  const featuredImgSrc = getOptimizedUrl(featuredPost.image, 1200);

  return (
    <div className="bg-brand-primary min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative py-16 md:py-20 bg-brand-secondary border-b border-gray-800">
         <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=75&w=1200" 
                alt="Blog Background" 
                className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                loading="eager"
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div ref={headerRef} className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 md:mb-6">
                Insights & <span className="gradient-text">Articles</span>
              </h1>
              <p className="text-base md:text-lg text-brand-muted leading-relaxed">
                Expert advice, industry trends, and actionable strategies to help you grow your digital presence. From SEO to Design, we cover it all.
              </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Featured Article */}
        <div className="mb-12 md:mb-16">
           <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
             <span className="w-2 h-6 md:h-8 bg-brand-accent-start rounded-full mr-3"></span>
             Featured Story
           </h2>
           <Link to={`/blog/${featuredPost.id}`} className="group relative block rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[2.5/1] bg-gray-800">
              <img 
                src={featuredImgSrc} 
                srcSet={featuredSrcSet}
                sizes="(max-width: 768px) 100vw, 80vw"
                alt={featuredPost.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-3xl">
                 <span className="inline-block px-3 py-1 bg-brand-accent-start text-white text-xs font-bold rounded-full mb-3 md:mb-4">
                    {featuredPost.category}
                 </span>
                 <h3 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-3 group-hover:text-brand-accent-end transition-colors leading-tight">
                    {featuredPost.title}
                 </h3>
                 <p className="text-gray-300 mb-4 line-clamp-2 md:line-clamp-none hidden sm:block text-sm md:text-base">
                    {featuredPost.excerpt}
                 </p>
                 <div className="flex items-center text-xs md:text-sm text-gray-400 space-x-3 md:space-x-4">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                 </div>
              </div>
           </Link>
        </div>

        {/* Category Filter */}
        <div className="w-full overflow-x-auto pb-2 mb-8 md:mb-12 scrollbar-hide">
            <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-2 md:gap-3 min-w-min">
            {categories.map((cat, idx) => (
                <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat 
                    ? 'bg-brand-accent-start text-white shadow-lg shadow-brand-accent-start/20' 
                    : 'bg-brand-secondary text-brand-muted hover:text-white border border-gray-700 hover:border-brand-accent-start'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
             <div className="text-center py-20 text-brand-muted">
                <p>No articles found in this category.</p>
             </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
