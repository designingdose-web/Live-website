
import React, { useState, useRef } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [position, setPosition] = useState<'left' | 'center' | 'right'>('center');
  const containerRef = useRef<HTMLSpanElement>(null);

  const adjustPosition = () => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Approximate width of the tooltip (w-48 is 12rem ~ 192px + padding/border)
    // We use a safe threshold of ~110px from the edge (half width + margin)
    const threshold = 110; 

    // Check distance to edges
    const spaceLeft = rect.left;
    const spaceRight = viewportWidth - rect.right;

    // Logic: If too close to left edge, align left. If too close to right, align right. Else center.
    if (spaceLeft < threshold) {
      setPosition('left');
    } else if (spaceRight < threshold) {
      setPosition('right');
    } else {
      setPosition('center');
    }
  };

  return (
    <span 
      ref={containerRef}
      className="relative group inline-block cursor-pointer align-middle"
      onMouseEnter={adjustPosition}
      onTouchStart={adjustPosition}
      onClick={(e) => e.stopPropagation()} // Prevents accidental clicks on underlying elements
    >
      {children}
      
      {/* 
        Smart Tooltip Body 
        - 'bottom-full' & 'mb-2': Puts it above the icon
        - Dynamic classes based on 'position' state to prevent clipping
      */}
      <span 
        className={`
          invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200
          absolute bottom-full mb-2 z-50
          w-48 p-3
          bg-brand-secondary/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl
          text-white text-xs leading-relaxed whitespace-normal
          md:w-64 md:text-sm
          
          ${position === 'left' ? 'left-0' : ''}
          ${position === 'right' ? 'right-0' : ''}
          ${position === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
        `}
      >
        {text}
        
        {/* 
           Smart Arrow 
           - Slides along the bottom of the tooltip to always point at the icon
           - Uses the same position logic but inverted placement
        */}
        <svg 
          className={`
            absolute top-full h-2 w-4 text-brand-secondary/95 fill-current
            ${position === 'left' ? 'left-2' : ''}
            ${position === 'right' ? 'right-2' : ''}
            ${position === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
          `} 
          x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"
        >
            <polygon points="0,0 127.5,127.5 255,0"/>
        </svg>
      </span>
    </span>
  );
};

export default Tooltip;
