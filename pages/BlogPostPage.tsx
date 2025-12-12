
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

// Helper to generate optimized URLs for specific widths
const getOptimizedUrl = (url: string, width: number) => {
  if (!url) return '';
  
  if (url.includes('unsplash.com')) {
    const cleanUrl = url.split('?')[0];
    return `${cleanUrl}?auto=format&fit=crop&q=75&w=${width}`;
  }
  
  if (url.includes('res.cloudinary.com')) {
    const parts = url.split('/upload/');
    if (parts.length === 2) {
      let suffix = parts[1];
      suffix = suffix.replace(/f_auto,q_auto\/?/, '');
      return `${parts[0]}/upload/w_${width},f_auto,q_auto/${suffix}`;
    }
  }
  
  return url;
};

// Helper to parse text with internal links formatted as [text](/url)
const parseTextWithLinks = (text: string) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <Link 
          key={i} 
          to={match[2]} 
          className="text-brand-accent-start hover:text-brand-accent-middle underline decoration-brand-accent-start/30 underline-offset-2 transition-colors font-semibold"
        >
          {match[1]}
        </Link>
      );
    }
    return part;
  });
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const contentRef = useScrollAnimation('fade-in');

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-primary flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-brand-muted mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="px-6 py-3 bg-brand-accent-start text-white rounded-full hover:bg-brand-accent-middle transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Determine CTA Link - defaults to contact if not specified in post data
  const ctaLink = post.serviceLink || "/contact";
  
  const heroSrcSet = `
    ${getOptimizedUrl(post.image, 600)} 600w,
    ${getOptimizedUrl(post.image, 1200)} 1200w,
    ${getOptimizedUrl(post.image, 1600)} 1600w
  `;

  const defaultHeroSrc = getOptimizedUrl(post.image, 1200);

  // Schema.org JSON-LD for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [defaultHeroSrc],
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Designing Dose",
      "logo": {
        "@type": "ImageObject",
        "url": "https://designingdose.com/favicon.svg"
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
    }
  };

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={defaultHeroSrc}
        keywords={`${post.category}, Designing Dose, Blog, ${post.title.split(' ').slice(0, 5).join(', ')}`}
      />
      <div className="bg-brand-primary min-h-screen flex flex-col">
          {/* SEO Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

          {/* Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-brand-accent-start z-50 w-full origin-left scale-x-0 animate-[scrollProgress_linear_1s_both] [animation-timeline:scroll()]"></div>

          {/* Hero Header */}
          <div className="relative w-full h-[45vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gray-900">
                  <img 
                      src={defaultHeroSrc} 
                      srcSet={heroSrcSet}
                      sizes="100vw"
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-60"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                  />
              </div>
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 lg:pb-20">
                  <div className="container mx-auto max-w-5xl">
                      <Link to="/blog" className="inline-flex items-center text-brand-accent-end mb-4 md:mb-6 hover:text-white transition-colors font-semibold text-sm">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                          Back to Articles
                      </Link>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <span className="px-3 py-1 bg-brand-accent-middle/20 text-brand-accent-middle border border-brand-accent-middle/50 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
                              {post.category}
                          </span>
                          <span className="text-gray-300 text-xs md:text-sm font-medium flex items-center gap-1">
                              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              {post.readTime}
                          </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 md:mb-8 break-words max-w-4xl">
                          {post.title}
                      </h1>
                      <div className="flex items-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-brand-accent-start to-brand-accent-end flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg ring-2 ring-brand-primary">
                              {post.author.charAt(0)}
                          </div>
                          <div className="ml-3 md:ml-4">
                              <p className="text-white font-bold text-base md:text-lg leading-none">{post.author}</p>
                              <div className="flex flex-col sm:flex-row sm:gap-2 text-brand-muted text-xs md:text-sm mt-1">
                                  {post.role && <span>{post.role}</span>}
                                  <span className="hidden sm:inline">•</span>
                                  <span>{post.date}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Content Body */}
          <div className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  {/* Main Article */}
                  <article ref={contentRef} className="lg:col-span-8 animate-on-scroll min-w-0">
                      <div className="prose prose-base md:prose-lg prose-invert max-w-none break-words">
                          {/* Lead Excerpt */}
                          <p className="text-lg md:text-2xl text-brand-light leading-relaxed font-medium mb-8 md:mb-12 border-l-4 border-brand-accent-start pl-4 md:pl-6 italic">
                              {post.excerpt}
                          </p>

                          {/* Dynamic Content Rendering */}
                          <div className="space-y-6 md:space-y-8">
                              {post.content.map((block, idx) => {
                                  switch (block.type) {
                                      case 'heading':
                                          return (
                                              <h2 key={idx} className="text-xl md:text-3xl font-bold text-white mt-8 md:mt-12 mb-4 md:mb-6 relative inline-block">
                                                  {block.text}
                                                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-accent-middle rounded-full"></span>
                                              </h2>
                                          );
                                      case 'paragraph':
                                          return (
                                            <p key={idx} className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                                              {block.text ? parseTextWithLinks(block.text) : null}
                                            </p>
                                          );
                                      case 'list':
                                          return (
                                              <div key={idx} className="my-6 md:my-8 bg-brand-secondary/30 p-5 md:p-8 rounded-2xl border border-gray-800/50">
                                                  <ul className="space-y-4">
                                                      {block.items?.map((item, i) => (
                                                          <li key={i} className="flex items-start text-brand-light text-base md:text-lg">
                                                              <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-accent-end mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                              <span>{parseTextWithLinks(item)}</span>
                                                          </li>
                                                      ))}
                                                  </ul>
                                              </div>
                                          );
                                      case 'quote':
                                          return (
                                              <blockquote key={idx} className="relative my-8 md:my-12 p-6 md:p-8 bg-gradient-to-r from-brand-secondary to-transparent rounded-xl border-l-8 border-brand-accent-middle shadow-xl">
                                                  <svg className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 text-brand-accent-middle opacity-20 transform -translate-x-2 -translate-y-2" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 15.1953 14.5078 17.6562 14.5078C18.3242 14.5078 18.7227 14.7188 19.3438 14.9648C18.4297 12.832 18.4297 11.7539 18.4297 10.6641C18.4297 8.58984 20.0117 7.00781 22.0508 7.00781C23.6133 7.00781 24.5742 8.16797 24.5742 9.57422C24.5742 12.5977 22.1211 19.418 18.0664 20.6836L14.017 21ZM5.01562 21L5.01562 18C5.01562 16.0547 6.19531 14.5078 8.65625 14.5078C9.32422 14.5078 9.72266 14.7188 10.3438 14.9648C9.42969 12.832 9.42969 11.7539 9.42969 10.6641C9.42969 8.58984 11.0117 7.00781 13.0508 7.00781C14.6133 7.00781 15.5742 8.16797 15.5742 9.57422C15.5742 12.5977 13.1211 19.418 9.06641 20.6836L5.01562 21Z" /></svg>
                                                  <p className="text-lg md:text-2xl italic font-serif text-white relative z-10 pl-4 md:pl-6">"{block.text}"</p>
                                              </blockquote>
                                          );
                                      case 'image':
                                          return (
                                              <div key={idx} className="my-8 md:my-12">
                                                {/* Responsive Image Handling */}
                                                {block.src && (
                                                  <img 
                                                      src={getOptimizedUrl(block.src, 1000)}
                                                      srcSet={`
                                                          ${getOptimizedUrl(block.src, 600)} 600w,
                                                          ${getOptimizedUrl(block.src, 1000)} 1000w
                                                      `}
                                                      sizes="(max-width: 768px) 100vw, 800px"
                                                      alt={block.alt || post.title} 
                                                      className="w-full h-auto rounded-xl shadow-lg border border-gray-800"
                                                      loading="lazy"
                                                  />
                                                )}
                                                {block.text && <p className="text-center text-brand-muted text-xs md:text-sm mt-3 italic">{block.text}</p>}
                                              </div>
                                          );
                                      default:
                                          return null;
                                  }
                              })}
                          </div>
                      </div>

                      {/* Share & Tags */}
                      <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-gray-800 flex flex-wrap items-center justify-between gap-6">
                          <div className="flex flex-wrap gap-2 md:gap-3">
                              <span className="text-brand-muted font-bold mr-2 w-full sm:w-auto mb-1 sm:mb-0">Topics:</span>
                              <span className="px-3 md:px-4 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-xs md:text-sm transition-colors cursor-default">#{post.category.replace(/\s+/g, '')}</span>
                              <span className="px-3 md:px-4 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-xs md:text-sm transition-colors cursor-default">#BusinessGrowth</span>
                              <span className="px-3 md:px-4 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-xs md:text-sm transition-colors cursor-default">#DigitalStrategy</span>
                          </div>
                      </div>
                  </article>

                  {/* Sidebar / CTA */}
                  <aside className="lg:col-span-4 space-y-8 md:space-y-10 lg:sticky lg:top-28 lg:self-start">
                      {/* Service CTA */}
                      <div className="bg-gradient-to-b from-brand-secondary to-brand-primary p-6 md:p-8 rounded-2xl border border-brand-accent-start/20 shadow-2xl shadow-brand-accent-start/5 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-start/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                          
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 relative z-10">Scale Your Business with {post.category}</h3>
                          <p className="text-brand-muted mb-6 md:mb-8 text-sm leading-relaxed relative z-10">
                              Don't just read about success—achieve it. Our expert team is ready to implement these exact strategies for your brand today.
                          </p>
                          <Link 
                              to="/contact" 
                              className="relative overflow-hidden group block w-full py-4 bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end text-white font-bold text-center rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:scale-[1.02] transition-all duration-300 mb-4 relative z-10 text-sm md:text-base transform hover:-translate-y-1"
                          >
                              <span className="relative z-10">Get a Free Quote</span>
                              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
                          </Link>
                          <Link 
                              to={ctaLink} 
                              className="block w-full py-4 border border-white/20 text-white font-bold text-center rounded-xl hover:bg-white/5 hover:border-white/50 transition-all relative z-10 text-sm md:text-base backdrop-blur-sm"
                          >
                              View Pricing Plans
                          </Link>
                      </div>

                      {/* Related Posts */}
                      {relatedPosts.length > 0 && (
                          <div>
                              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 border-l-4 border-brand-accent-end pl-4">Related Articles</h3>
                              <div className="space-y-4 md:space-y-6">
                                  {relatedPosts.map(rp => {
                                      const rpSrc = getOptimizedUrl(rp.image, 200);
                                      return (
                                          <Link key={rp.id} to={`/blog/${rp.id}`} className="flex gap-4 group bg-brand-secondary/40 p-3 md:p-4 rounded-2xl hover:bg-brand-secondary transition-all border border-transparent hover:border-gray-700 hover:shadow-lg">
                                              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden relative">
                                                  <img src={rpSrc} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                              </div>
                                              <div className="flex flex-col justify-center">
                                                  <h4 className="text-sm font-bold text-white group-hover:text-brand-accent-start transition-colors line-clamp-2 leading-snug mb-1 md:mb-2">
                                                      {rp.title}
                                                  </h4>
                                                  <span className="text-xs text-gray-500 flex items-center">
                                                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                      {rp.readTime}
                                                  </span>
                                              </div>
                                          </Link>
                                      );
                                  })}
                              </div>
                          </div>
                      )}
                  </aside>
              </div>
          </div>
      </div>
    </>
  );
};

export default BlogPostPage;
