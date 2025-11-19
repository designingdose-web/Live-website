
import React, { useEffect, useState } from 'react';
import GenericServicePage from './GenericServicePage';
import { servicesData } from '../data/servicesData';
import { GoogleGenAI } from "@google/genai";

// Helper to render markdown-like text (bolding) and handle newlines
const SimpleMarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <div className="space-y-2 text-brand-light/90 leading-relaxed whitespace-pre-line">
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="text-white font-bold text-brand-accent-middle">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </div>
  );
};

const SeoTrendsSection: React.FC = () => {
    const [trends, setTrends] = useState<string>('');
    const [sources, setSources] = useState<{title: string, uri: string}[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTrends = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: 'What are the top 3 emerging SEO trends and statistics for late 2024 and 2025 that businesses must know? Focus on "AI Overviews (SGE)", "Helpful Content / EEAT", and "Video/Visual Search". Provide a concise summary for each. Do not use markdown headers (#).',
                    config: {
                        tools: [{ googleSearch: {} }],
                    },
                });
                
                const text = response.text;
                setTrends(text || 'No specific trends available at the moment.');

                // Extract grounding chunks for sources
                const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
                const extractedSources = chunks
                    .map((chunk: any) => chunk.web)
                    .filter((web: any) => web && web.uri && web.title);
                
                // Deduplicate sources based on URI
                const uniqueSources = Array.from(new Map(extractedSources.map((item: any) => [item.uri, item])).values());
                
                setSources(uniqueSources as {title: string, uri: string}[]);

            } catch (err) {
                console.error("Failed to fetch SEO trends", err);
                setError("Unable to load real-time trends. Please check your connection.");
            } finally {
                setLoading(false);
            }
        };

        fetchTrends();
    }, []);

    return (
        <div className="mt-24 mb-4 relative z-30 w-full max-w-4xl mx-auto">
             <div className="bg-brand-secondary/60 backdrop-blur-md border border-brand-accent-start/30 p-8 rounded-2xl shadow-2xl shadow-brand-accent-start/10 relative overflow-hidden group hover:border-brand-accent-start/50 transition-all duration-500">
                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-accent-start via-brand-accent-middle to-brand-accent-end opacity-80"></div>
                
                <div className="flex items-center mb-6">
                     <div className="bg-brand-accent-start/10 p-3 rounded-full mr-4 border border-brand-accent-start/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-accent-start" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                     </div>
                     <div>
                        <h2 className="text-2xl font-bold text-white">Real-Time SEO Market Insights</h2>
                        <p className="text-xs text-brand-accent-end/80 uppercase tracking-widest font-bold flex items-center gap-1">
                             Powered by Google Search <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        </p>
                     </div>
                </div>

                {loading ? (
                    <div className="animate-pulse space-y-4 py-2">
                        <div className="h-3 bg-gray-700/50 rounded w-1/3 mb-4"></div>
                        <div className="h-2 bg-gray-700/50 rounded w-full"></div>
                        <div className="h-2 bg-gray-700/50 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-700/50 rounded w-4/6"></div>
                        <div className="h-2 bg-gray-700/50 rounded w-full mt-4"></div>
                        <div className="h-2 bg-gray-700/50 rounded w-3/4"></div>
                    </div>
                ) : error ? (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-red-200 text-sm">{error}</p>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        <SimpleMarkdownRenderer text={trends} />
                        
                        {sources.length > 0 && (
                            <div className="mt-8 pt-5 border-t border-gray-700/50">
                                <h4 className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-3">Verified Sources</h4>
                                <div className="flex flex-wrap gap-2">
                                    {sources.map((source, idx) => (
                                        <a 
                                            key={idx} 
                                            href={source.uri} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[11px] flex items-center gap-1 bg-brand-primary/60 hover:bg-brand-accent-start/20 text-gray-400 hover:text-brand-accent-light border border-gray-700 hover:border-brand-accent-start/50 rounded-full pl-2 pr-3 py-1.5 transition-all duration-200 max-w-[220px]"
                                            title={source.title}
                                        >
                                            <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            <span className="truncate">{source.title}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
             </div>
        </div>
    );
}

const SeoPage: React.FC = () => {
  const seoService = servicesData.find(service => service.id === 'seo');

  if (!seoService) {
    return <div className="text-center py-20">SEO services not found.</div>;
  }

  return (
    <GenericServicePage service={seoService}>
        <SeoTrendsSection />
    </GenericServicePage>
  );
};

export default SeoPage;
