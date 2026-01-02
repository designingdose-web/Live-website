
import React, { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({ 
    top: 0, 
    left: 0, 
    width: 0,
    arrowLeft: 0,
    placement: 'top' as 'top' | 'bottom'
  });
  
  const triggerRef = useRef<HTMLSpanElement>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Safety margin from screen edges
    const margin = 16;
    // Desktop max width, mobile will be constrained by viewport
    const maxWidth = 320;
    
    // Calculate final width based on viewport
    const width = Math.min(viewportWidth - (margin * 2), maxWidth);
    
    const iconCenter = rect.left + rect.width / 2;
    
    // 1. Determine Horizontal Position (Clamped to viewport)
    let left = iconCenter - width / 2;
    // Clamp to ensure tooltip doesn't go off-screen
    left = Math.max(margin, Math.min(left, viewportWidth - width - margin));

    // 2. Determine Vertical Placement
    // We prefer 'top' unless there's not enough room (approx 120px needed)
    const spaceAbove = rect.top;
    const spaceBelow = viewportHeight - rect.bottom;
    const placement = (spaceAbove < 120 && spaceBelow > spaceAbove) ? 'bottom' : 'top';
    
    const top = placement === 'top' ? rect.top - 12 : rect.bottom + 12;

    // 3. Determine Arrow Position (Relative to the tooltip box)
    // The arrow should always point to iconCenter
    const arrowLeft = iconCenter - left;

    setStyle({
      top,
      left,
      width,
      arrowLeft,
      placement
    });
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, { passive: true });
      window.addEventListener('resize', updatePosition);
    }
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, updatePosition]);

  // Global "click elsewhere" to close tooltip on mobile/touch
  useEffect(() => {
    if (!isOpen) return;
    const handleGlobalClick = () => setIsOpen(false);
    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('touchstart', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('touchstart', handleGlobalClick);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    updatePosition();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleTouch = (e: React.TouchEvent) => {
    e.stopPropagation(); // Prevent immediate closing from the global listener
    if (isOpen) {
      setIsOpen(false);
    } else {
      updatePosition();
      setIsOpen(true);
    }
  };

  return (
    <span 
      ref={triggerRef}
      className="inline-flex cursor-pointer align-middle leading-none p-0.5 -m-0.5" // Slightly expanded hit area
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      {children}
      
      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[99999] pointer-events-none"
          aria-hidden="true"
        >
          <div 
            style={{ 
              top: `${style.top}px`, 
              left: `${style.left}px`,
              width: `${style.width}px`,
              transform: style.placement === 'top' ? 'translateY(-100%)' : 'translateY(0)'
            }}
            className={`
              absolute pointer-events-auto
              p-4 bg-brand-secondary/95 backdrop-blur-2xl border border-white/20 rounded-2xl 
              shadow-[0_20px_50px_rgba(0,0,0,0.95)]
              text-white text-xs md:text-sm leading-relaxed whitespace-normal
              animate-dropdown-enter
            `}
          >
            <span className="block drop-shadow-sm font-medium">{text}</span>
            
            {/* Precision Dynamic Arrow */}
            <svg 
              className={`
                absolute h-2.5 w-5 text-brand-secondary/95 fill-current drop-shadow-lg
                ${style.placement === 'top' ? 'top-full' : 'bottom-full'}
              `} 
              style={{ 
                left: `${style.arrowLeft}px`, 
                transform: `translateX(-50%) ${style.placement === 'bottom' ? 'rotate(180deg)' : ''}` 
              }}
              viewBox="0 0 255 255"
            >
              <polygon points="0,0 127.5,127.5 255,0"/>
            </svg>
          </div>
        </div>,
        document.body
      )}
    </span>
  );
};

export default Tooltip;
