
import React from 'react';

const Star = ({ className, fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const TrustBadges: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full bg-brand-secondary/40 backdrop-blur-md border-y border-brand-accent-start/10 py-6 overflow-hidden ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
          
          {/* Trustpilot - Non-clickable */}
          <div className="flex items-center gap-4 group cursor-default transition-all duration-300 hover:scale-105 hover:opacity-100">
             <div className="hidden sm:block">
                <Star className="w-8 h-8 text-[#00b67a]" fill="#00b67a" />
             </div>
             <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xl font-bold text-white tracking-tight">Trustpilot</span>
                  <span className="text-sm text-brand-muted hidden sm:inline-block">Reviews</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-[#00b67a] px-2 py-1 rounded gap-1">
                        {[1, 2, 3, 4].map((i) => (
                            <Star key={i} className="w-4 h-4 text-white" fill="white" />
                        ))}
                         {/* 4.2 Rating: 20% filled star */}
                        <div className="relative w-4 h-4">
                             <Star className="w-4 h-4 text-white/30" fill="currentColor" />
                             <div className="overflow-hidden absolute top-0 left-0 h-full" style={{ width: '20%' }}>
                                <Star className="w-4 h-4 text-white" fill="white" />
                             </div>
                        </div>
                    </div>
                    <span className="text-sm font-medium text-brand-light">
                        <span className="font-bold text-white">4.2</span>
                    </span>
                </div>
             </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-gray-700/50 to-transparent"></div>

          {/* Clutch */}
          <div className="flex items-center gap-3 group cursor-default transition-all duration-300 hover:scale-105 hover:opacity-100">
              <div className="flex flex-col">
                 <div className="flex items-baseline gap-1">
                    <span className="text-white font-extrabold text-xl tracking-tighter">Clutch</span>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                 </div>
                 <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex text-red-500 gap-0.5">
                       {[1, 2, 3, 4, 5].map((i) => (
                           <Star key={i} className="w-3.5 h-3.5" fill="currentColor" />
                       ))}
                    </div>
                    <span className="text-xs text-brand-muted uppercase tracking-wider font-bold ml-1">Top Rated</span>
                 </div>
              </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-gray-700/50 to-transparent"></div>

          {/* Google */}
          <div className="flex items-center gap-3 group cursor-default transition-all duration-300 hover:scale-105 hover:opacity-100">
              <div className="bg-white p-2 rounded-full shadow-lg shadow-black/20">
                 <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.66.81-.18z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                 </svg>
              </div>
              <div className="flex flex-col">
                 <span className="text-white font-bold text-sm leading-none">Google Reviews</span>
                 <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-white font-bold text-sm">4.9</span>
                    <div className="flex text-yellow-400 gap-0.5">
                       {[1, 2, 3, 4, 5].map((i) => (
                           <Star key={i} className="w-3 h-3" fill="currentColor" />
                       ))}
                    </div>
                 </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
