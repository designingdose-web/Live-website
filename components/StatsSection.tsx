
import React, { useEffect, useState, useRef } from 'react';

interface StatProps {
    end: number;
    label: string;
    suffix?: string;
    duration?: number;
    decimals?: number;
}

const StatCounter: React.FC<StatProps> = ({ end, label, suffix = '', duration = 2000, decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const [hasViewed, setHasViewed] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasViewed) {
                    setHasViewed(true);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasViewed]);

    useEffect(() => {
        if (!hasViewed) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function (easeOutExpo): 1 - 2^(-10t)
            // This makes the counter start fast and slow down towards the end
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            const currentVal = ease * end;
            
            if (decimals > 0) {
                setCount(parseFloat(currentVal.toFixed(decimals)));
            } else {
                setCount(Math.floor(currentVal));
            }

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                 setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [hasViewed, end, duration, decimals]);

    return (
        <div ref={elementRef} className="text-center p-6 transform transition-transform duration-300 hover:scale-105 group">
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text mb-3 opacity-0 transition-opacity duration-700 delay-100" style={{ opacity: hasViewed ? 1 : 0 }}>
                {count}{suffix}
            </div>
            <p className="text-brand-muted font-semibold text-sm md:text-base uppercase tracking-widest group-hover:text-white transition-colors">
                {label}
            </p>
        </div>
    );
};

const StatsSection: React.FC = () => {
    const stats = [
        { end: 850, label: 'Clients Served', suffix: '+' },
        { end: 1000, label: 'Projects Completed', suffix: '+' },
        { end: 10, label: 'Years Experience', suffix: '+' },
        { end: 96.7, label: 'Satisfaction Rate', suffix: '%', decimals: 1 },
    ];

    return (
        <section className="py-16 bg-brand-secondary border-y border-gray-800 relative overflow-hidden">
             {/* Background Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-accent-start/20 rounded-full blur-[80px]"></div>
                 <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent-end/20 rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y divide-gray-800 md:divide-y-0 md:divide-x md:divide-gray-800">
                    {stats.map((stat, index) => (
                        <div key={index} className={index % 2 !== 0 ? "border-t border-gray-800 md:border-t-0" : ""}>
                             <StatCounter {...stat} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
