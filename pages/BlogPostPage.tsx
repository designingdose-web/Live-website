
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  return (
    <div className="bg-brand-primary min-h-screen">
        {/* Progress Bar (Optional enhancement for reading) */}
        <div className="fixed top-0 left-0 h-1 bg-brand-accent-start z-50 w-full origin-left scale-x-0 animate-[scrollProgress_linear_1s_both] [animation-timeline:scroll()]"></div>

        {/* Hero Header */}
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/70 to-black/20"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-16">
                <div className="container mx-auto max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-brand-accent-end mb-6 hover:text-white transition-colors font-semibold text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Articles
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-brand-accent-middle/20 text-brand-accent-middle border border-brand-accent-middle/50 rounded-full text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                        <span className="text-gray-400 text-sm font-medium">{post.readTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-accent-start to-brand-accent-end flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {post.author.charAt(0)}
                         </div>
                         <div className="ml-3">
                             <p className="text-white font-semibold">{post.author}</p>
                             {post.role && <p className="text-brand-muted text-xs">{post.role}</p>}
                             <p className="text-brand-muted text-xs mt-0.5">{post.date}</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Body */}
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Article */}
                <article ref={contentRef} className="lg:col-span-8 animate-on-scroll">
                    <div className="prose prose-lg prose-invert max-w-none">
                         {/* Lead Excerpt */}
                         <p className="text-xl text-brand-light leading-relaxed font-medium mb-10 border-l-4 border-brand-accent-start pl-6 italic">
                             {post.excerpt}
                         </p>

                         {/* Dynamic Content Rendering */}
                         <div className="space-y-8">
                             {post.content.map((block, idx) => {
                                 switch (block.type) {
                                     case 'heading':
                                         return <h2 key={idx} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">{block.text}</h2>;
                                     case 'paragraph':
                                         return <p key={idx} className="text-brand-muted leading-relaxed mb-6 text-lg">{block.text}</p>;
                                     case 'image':
                                         return (
                                             <div key={idx} className="my-10">
                                                <img 
                                                    src={block.src} 
                                                    alt={block.alt} 
                                                    className="w-full h-auto rounded-xl shadow-2xl border border-gray-800/50 bg-brand-secondary" 
                                                    loading="lazy" 
                                                />
                                                 {block.alt && <p className="text-center text-sm text-gray-500 mt-3 italic">{block.alt}</p>}
                                             </div>
                                         );
                                     case 'list':
                                         return (
                                             <ul key={idx} className="space-y-3 my-6 bg-brand-secondary/30 p-8 rounded-xl border border-gray-800">
                                                 {block.items?.map((item, i) => (
                                                     <li key={i} className="flex items-start text-brand-light">
                                                         <span className="text-brand-accent-end mr-3 mt-1.5">●</span>
                                                         <span>{item}</span>
                                                     </li>
                                                 ))}
                                             </ul>
                                         );
                                     case 'quote':
                                         return (
                                             <blockquote key={idx} className="border-l-4 border-brand-accent-middle pl-6 py-2 my-10 bg-gradient-to-r from-brand-secondary/50 to-transparent rounded-r-lg">
                                                 <p className="text-xl italic font-serif text-white">"{block.text}"</p>
                                             </blockquote>
                                         );
                                     default:
                                         return null;
                                 }
                             })}
                         </div>
                    </div>

                    {/* Share & Tags */}
                    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                         <div className="flex flex-wrap gap-2">
                             <span className="text-brand-muted text-sm mr-2">Tags:</span>
                             <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">#{post.category.replace(/\s+/g, '')}</span>
                             <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">#DigitalMarketing</span>
                             <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">#DesigningDose</span>
                         </div>
                    </div>
                </article>

                {/* Sidebar / CTA */}
                <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 lg:self-start">
                    {/* Service CTA */}
                    <div className="bg-gradient-to-br from-brand-secondary to-brand-primary p-8 rounded-2xl border border-brand-accent-start/20 shadow-2xl shadow-brand-accent-start/5">
                        <h3 className="text-xl font-bold text-white mb-3">Need help with {post.category}?</h3>
                        <p className="text-brand-muted mb-6 text-sm">
                            Stop reading and start growing. Our expert team can implement these strategies for you today.
                        </p>
                        <Link to="/contact" className="block w-full py-3 bg-white text-brand-primary font-bold text-center rounded-lg hover:bg-brand-accent-light transition-colors mb-3 shadow-lg">
                            Get a Quote
                        </Link>
                        <Link to={ctaLink} className="block w-full py-3 border border-gray-600 text-white font-bold text-center rounded-lg hover:border-brand-accent-end hover:text-brand-accent-end transition-all">
                            View Pricing
                        </Link>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-2">Related Articles</h3>
                            <div className="space-y-4">
                                {relatedPosts.map(rp => (
                                    <Link key={rp.id} to={`/blog/${rp.id}`} className="flex gap-4 group bg-brand-secondary/30 p-3 rounded-xl hover:bg-brand-secondary transition-colors border border-transparent hover:border-gray-700">
                                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                            <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-sm font-bold text-white group-hover:text-brand-accent-start transition-colors line-clamp-2 leading-snug">
                                                {rp.title}
                                            </h4>
                                            <span className="text-xs text-gray-500 mt-1 block">{rp.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    </div>
  );
};

export default BlogPostPage;
