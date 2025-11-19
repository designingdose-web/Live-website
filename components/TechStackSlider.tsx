
import React from 'react';

// Simple SVG icons for the requested platforms
const icons = {
  shopify: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M23.6 8.6l-3.3-5.8c-.2-.3-.5-.4-.8-.4H4.5c-.3 0-.6.2-.8.5L.4 8.6c-.2.4-.2.8 0 1.2l11 13.6c.2.2.5.4.8.4.3 0 .6-.1.8-.4l10.6-13c.2-.4.2-.8 0-1.2zM12 21.4L2.6 9.8l2.8-4.8h13.2l2.8 4.8L12 21.4z"/>
      <path d="M16.5 11.5c-1.5 0-2.8.8-3.5 2-1.2-1.8-3.8-1.8-5 0-.7-1.2-2-2-3.5-2-2.2 0-4 1.8-4 4s1.8 4 4 4c1.5 0 2.8-.8 3.5-2 1.2 1.8 3.8 1.8 5 0 .7 1.2 2 2 3.5 2 2.2 0 4-1.8 4-4s-1.8-4-4-4z" fillOpacity="0.5"/>
    </svg>
  ),
  wordpress: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12.043 1C5.95 1 1 5.943 1 12.03C1 18.116 5.95 23.06 12.043 23.06C18.123 23.06 23.073 18.116 23.073 12.03C23.073 5.943 18.123 1 12.043 1ZM2.24 11.937C2.24 8.207 4.28 4.927 7.38 3.214L4.626 11.53L2.24 11.937ZM12.043 21.807C9.773 21.807 7.706 21.15 5.99 20.023L8.95 11.19L10.646 16.36L12.043 21.807ZM10.15 10.343L8.423 5.323C9.556 4.73 10.856 4.396 12.233 4.396C14.36 4.396 16.293 5.143 17.836 6.383L14.48 16.316L12.203 9.563L12.866 9.45L11.486 5.323L10.15 10.343ZM14.263 20.536L12.616 15.63L16.453 5.863C19.226 7.343 21.11 10.19 21.39 13.517L14.263 20.536Z"/>
    </svg>
  ),
  squarespace: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M12.2 1.6C11.7 1.4 10.9 1 9.8 1 5 1 2.8 4.5 2.8 8.4c0 3.5 2 5.8 4.7 6.6l4.5 1.4c.6.2.7.4.7.8 0 .6-.7 1-1.8 1-1.4 0-2.4-.6-2.9-.9l-.8 3c.5.3 1.9 1.2 3.9 1.2 4.5 0 7.5-3.2 7.5-7.5 0-3.4-2.3-5.8-5.2-6.7l-4-1.2c-.6-.2-.7-.5-.7-.8 0-.5.7-.8 1.6-.8 1.2 0 2.1.5 2.5.7l.9-3.6z"/>
      <path d="M21.3 8.4c-.5-.3-1.9-1.2-3.9-1.2-4.5 0-7.5 3.2-7.5 7.5 0 3.4 2.3 5.8 5.2 6.7l4 1.2c.6.2.7.5.7.8 0 .5-.7.8-1.6.8-1.2 0-2.1-.5-2.5-.7l-1 3.6c.5.2 1.3.6 2.4.6 4.8 0 7-3.5 7-7.4 0-3.5-2-5.8-4.7-6.6l-4.5-1.4c-.6-.2-.7-.4-.7-.8 0-.6.7-1 1.8-1 1.4 0 2.4.6 2.9.9l.9-3z" opacity="0.5"/>
    </svg>
  ),
  wix: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M8.4 16.9L5.7 6.5h-2l-3.6 14h2.4l2.2-9.6 2.6 9.6h2l2.6-9.6 2.1 9.6h2.3l-3.5-14h-2l-2.7 10.4zM17.5 6.5h2.3v14h-2.3zM18.6 2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM23.6 13.5l-1.8-1.9-1.5 1.5 1.8 1.9-1.9 1.9 1.5 1.5 1.9-1.9 1.8 1.9 1.5-1.5-1.8-1.9 1.8-1.8-1.5-1.5z"/>
    </svg>
  ),
  webflow: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M8.9 18.5L6 8h4.5l1.8 7.5L14 8h4.4l-4.6 14.2c-.6 1.8-1.9 2-2.6 1.9-.9 0-1.8-.7-2.3-2.2L8.9 18.5zM5.3 18.6C4.4 15.3 3.3 11.3 3 8H.4c.4 4.5 1.8 9.5 3.6 12.8.6.9 1.4 1.1 2 1.2.6 0 1.1-.2 1.4-.5-.7-.7-1.6-1.8-2.1-2.9zM21 8l-2.4 8.6c-.4 1.5-.7 2.3-1.4 2.9.4.3 1.1.5 1.8.5.7 0 1.4-.2 2-.7 1.1-1.1 2.2-5.1 2.6-11.3H21z"/>
    </svg>
  ),
  flutter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M14.3 2.3L5 11.6 2.7 9.3 12 0h2.3zM14.3 21.7L9.1 16.5 11.6 14l8 8h-5.3zM16.8 14l-2.5 2.5L19 21.3h2.7L16.8 14z" opacity="0.6"/>
      <path d="M11.6 14l2.7-2.7L24 20.9V24L11.6 14z"/>
      <path d="M14.3 2.3l9.6 9.6v2.8L12 2.8V0h2.3z" opacity="0.6"/>
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
       <path d="M17.6 2.8L19.2.5C19.3.3 19.2 0 19 0c-.1 0-.3.1-.4.2l-1.6 2.3C15.6 1.8 13.9 1.5 12 1.5c-1.9 0-3.6.3-5 .9L5.4.2C5.3.1 5.2 0 5 0c-.3 0-.4.3-.3.5l1.6 2.3C2.7 4.9.5 8.6.5 13h23c0-4.4-2.2-8.1-5.9-10.2zM6.5 8c-.8 0-1.5-.7-1.5-1.5S5.7 5 6.5 5s1.5.7 1.5 1.5S7.3 8 6.5 8zm11 0c-.8 0-1.5-.7-1.5-1.5S16.7 5 17.5 5s1.5.7 1.5 1.5S18.3 8 17.5 8zM.5 14.5h5v9h-5zM18.5 14.5h5v9h-5zM7 14.5h10v9H7z"/>
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M17.1 17.8c-.9 1.2-1.8 2.4-3.2 2.4-1.4 0-1.8-.8-3.4-.8-1.6 0-2.1.8-3.3.8-1.3 0-2.7-1.3-3.7-2.7-1.9-2.7-1.6-7.8 1.9-7.8 1.5 0 2.6 1 3.4 1 .8 0 2.3-1.2 3.9-1.2 1.3 0 2.3.9 3 1.1-2.7 1.6-2.2 5.6.5 6.7-.2.8-.4 1.5-.9 2.3-.1.3-.1.3-.2.2zM15 6.9c.7-1 1.2-2.3 1.1-3.6-1.1.1-2.5.8-3.3 1.7-.7.9-1.3 2.2-1.1 3.5 1.2.1 2.6-.7 3.3-1.6z"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
       <circle cx="12" cy="12" r="2"/>
       <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
       <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
       <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  woocommerce: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
       <path d="M20.6 2.5c-6.3 0-11.6 4.1-12.2 10.5 1.3-1.1 3-1.8 4.8-1.8 4.1 0 7.5 3.4 7.5 7.5 0 1.6-.5 3.1-1.3 4.3 5.8-1.8 9.2-8.4 7.4-14.3C25.6 5.4 23.3 2.5 20.6 2.5zM10.6 14c-2 0-3.8.8-5.1 2.1l2.5 3.9 3.1-2.8 2.6 2.8 2-3.9c-.1-.2-.2-.3-.4-.4-1.2-1.1-2.9-1.7-4.7-1.7zM3.2 2.5C1 4 -.1 6.6.3 9.2c.4 2.6 2.3 4.7 4.8 5.5 0 0 1.7-1.5 1.7-1.5-1.8-.6-3.1-2.1-3.4-4-.3-1.9.8-3.8 2.6-4.6 1.8-.8 3.9-.1 4.9 1.6l1.4-1.2C10.9 3 9.1 1.9 7.1 1.9c-1.4 0-2.7.2-3.9.6z"/>
    </svg>
  )
};

const brands = [
  { name: 'Shopify', icon: icons.shopify },
  { name: 'WordPress', icon: icons.wordpress },
  { name: 'Squarespace', icon: icons.squarespace },
  { name: 'Wix', icon: icons.wix },
  { name: 'Webflow', icon: icons.webflow },
  { name: 'Flutter', icon: icons.flutter },
  { name: 'React Native', icon: icons.react },
  { name: 'iOS', icon: icons.apple },
  { name: 'Android', icon: icons.android },
  { name: 'WooCommerce', icon: icons.woocommerce },
];

const TechStackSlider: React.FC = () => {
  return (
    <div className="py-16 bg-brand-secondary border-t border-brand-primary overflow-hidden relative">
       {/* Fade Overlay for seamless look */}
       <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-brand-secondary to-transparent z-10 pointer-events-none"></div>
       <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-secondary to-transparent z-10 pointer-events-none"></div>

       <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-brand-muted uppercase tracking-widest text-sm font-bold">Powered By Industry-Leading Technologies</p>
       </div>

      <div className="flex w-full overflow-hidden">
        {/* Inner container for scrolling */}
        <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div key={`brand-${index}`} className="flex flex-col items-center justify-center mx-12 group min-w-[100px]">
              <div className="text-brand-muted group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">
                {brand.icon}
              </div>
              <span className="mt-3 text-xs font-medium text-brand-muted group-hover:text-brand-accent-middle transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                {brand.name}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div key={`brand-dup-${index}`} className="flex flex-col items-center justify-center mx-12 group min-w-[100px]">
              <div className="text-brand-muted group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">
                {brand.icon}
              </div>
              <span className="mt-3 text-xs font-medium text-brand-muted group-hover:text-brand-accent-middle transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline style for the keyframe since we can't easily modify global CSS files in this context without overwriting them entirely */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TechStackSlider;
