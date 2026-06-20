import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const getOptimizedUrl = (url: string, width: number) => {
  if (!url) return '';
  if (url.includes('unsplash.com')) {
    const cleanUrl = url.split('?')[0];
    return `${cleanUrl}?auto=format&fit=crop&q=70&w=${width}`;
  }
  if (url.includes('res.cloudinary.com') && url.includes('/upload/')) {
    const parts = url.split('/upload/');
    if (parts.length === 2) {
      let tail = parts[1].replace(/^(f_auto|q_auto(:[a-z]+)?|w_\d+|c_scale)(,[^/]+)*\//, '');
      return `${parts[0]}/upload/w_${width},f_auto,q_auto:eco/${tail}`;
    }
  }
  return url;
};

const BlogCard: React.FC<{ post: typeof blogPosts[0]; index: number; priority?: boolean }> = ({ post, index, priority = false }) => {
  const cardRef = useScrollAnimation<HTMLAnchorElement>('slide-in-up');
  const srcSet = `${getOptimizedUrl(post.image, 400)} 400w, ${getOptimizedUrl(post.image, 600)} 600w, ${getOptimizedUrl(post.image, 800)} 800w`;
  const imageSrc = getOptimizedUrl(post.image, 600);
  const isTargetPost = post.id === 'power-of-visual-storytelling-childrens-books';
  const imageClasses = isTargetPost 
    ? "w-full h-full object-cover transition-transform duration-700 scale-[1.15] group-hover:scale-[1.25] aspect-video"
    : "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 aspect-video";

  return (
    <Link 
      to={`/blog/${post.id}`}
      ref={priority ? null : cardRef}
      className={`group flex flex-col h-full bg-brand-secondary rounded-xl overflow-hidden border border-gray-700 hover:border-brand-accent-start/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent-start/10 ${priority ? '' : 'animate-on-scroll'}`}
      style={priority ? {} : { transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
        <img 
          src={imageSrc}
          srcSet={srcSet}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={post.title} 
          className={imageClasses}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchpriority={priority ? "high" : "auto"}
          width="600"
          height="338"
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
  const [searchQuery, setSearchQuery] = useState('');
  const headerRef = useScrollAnimation('slide-in-up');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    return matchesCategory && (!query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.content.some(block => block.text && block.text.toLowerCase().includes(query)));
  });
  const featuredPost = blogPosts[0];
  const featuredSrcSet = `${getOptimizedUrl(featuredPost.image, 600)} 600w, ${getOptimizedUrl(featuredPost.image, 1200)} 1200w, ${getOptimizedUrl(featuredPost.image, 1600)} 1600w`;
  const featuredImgSrc = getOptimizedUrl(featuredPost.image, 1200);
  const showFeatured = !searchQuery;

  return (
    <>
      <SEO 
        title="Digital Marketing Blog | Web Design & SEO Tips | Designing Dose"
        description="Expert guides on SEO, web design, social media and digital marketing for Irish and global businesses. Updated weekly by the Designing Dose team."
        keywords="Digital Marketing Blog, Web Design Trends 2025, SEO Tips, Dropshipping Guides, Tech News, Business Growth Strategies"
      />
      <div className="bg-brand-primary min-h-screen overflow-x-hidden">
        <div className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-secondary border-b border-gray-800">
           <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img 
                  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=70&w=1200" 
                  alt="Digital technology abstract background for Designing Dose insights blog" 
                  className="w-full h-full object-cover opacity-10 mix-blend-overlay aspect-video"
                  loading="eager"
                  width="1200"
                  height="675"
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
          <div className="flex justify-center mb-12">
              <div className="relative w-full max-w-xl group">
                  <input
                      type="text"
                      placeholder="Search topics, content, or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-brand-secondary/80 border border-gray-700 text-white rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-brand-accent-middle focus:ring-1 focus:ring-brand-accent-middle transition-all shadow-lg placeholder-gray-500 backdrop-blur-sm group-hover:border-gray-600"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-brand-accent-middle transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors" aria-label="Clear search">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                      </button>
                  )}
              </div>
          </div>
          {showFeatured && (
              <div className="mb-12 md:mb-16 animate-fade-in">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-6 md:h-8 bg-brand-accent-start rounded-full mr-3"></span>
                  Featured Story
              </h2>
              <Link to={`/blog/${featuredPost.id}`} className="group relative block rounded-xl md:rounded-2xl overflow-hidden aspect-video md:aspect-[2.5/1] bg-gray-800">
                  <img 
                      src={featuredImgSrc} 
                      srcSet={featuredSrcSet}
                      sizes="(max-width: 768px) 100vw, 80vw"
                      alt={`Featured article: ${featuredPost.title}`} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 aspect-video md:aspect-auto"
                      loading="eager"
                      fetchpriority="high"
                      decoding="sync"
                      width="1200"
                      height="480"
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
          )}
          <div className="w-full overflow-x-auto pb-2 mb-8 md:mb-12 scrollbar-hide">
              <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-2 md:gap-3 min-w-min">
              {categories.map((cat, idx) => (
                  <button key={idx} onClick={() => setActiveCategory(cat)} className={`px-4 md:px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeCategory === cat ? 'bg-brand-accent-start text-white shadow-lg shadow-brand-accent-start/20' : 'bg-brand-secondary text-brand-muted hover:text-white border border-gray-700 hover:border-brand-accent-start'}`}>{cat}</button>
              ))}
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} priority={index < 6} />
            ))}
          </div>
          {filteredPosts.length === 0 && (
               <div className="text-center py-20 text-brand-muted">
                  <p className="text-xl mb-4">No articles found matching your criteria.</p>
                  <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="text-brand-accent-middle hover:text-white font-semibold transition-colors underline underline-offset-4">Clear all filters</button>
               </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;