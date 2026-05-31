
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps { text: string; children: React.ReactNode; }

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
    
    const margin = 16;
    const maxWidth = 320;
    const width = Math.min(viewportWidth - (margin * 2), maxWidth);
    const iconCenter = rect.left + rect.width / 2;
    
    let left = iconCenter - width / 2;
    left = Math.max(margin, Math.min(left, viewportWidth - width - margin));

    const spaceAbove = rect.top;
    const spaceBelow = viewportHeight - rect.bottom;
    const placement = (spaceAbove < 120 && spaceBelow > spaceAbove) ? 'bottom' : 'top';
    const top = placement === 'top' ? rect.top - 12 : rect.bottom + 12;
    const arrowLeft = iconCenter - left;

    setStyle({ top, left, width, arrowLeft, placement });
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    if (!isOpen) return;
    const handleGlobalInteraction = () => setIsOpen(false);
    // Use capture phase or just standard listeners; clicking anywhere else closes it.
    window.addEventListener('click', handleGlobalInteraction);
    window.addEventListener('touchstart', handleGlobalInteraction);
    return () => {
      window.removeEventListener('click', handleGlobalInteraction);
      window.removeEventListener('touchstart', handleGlobalInteraction);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    updatePosition();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Improved Mobile interaction:
  // Using onClick instead of onTouchStart ensures standard tap behavior.
  // stopPropagation is CRITICAL so the global 'click' listener doesn't close it instantly.
  const handleTriggerClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
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
      className="inline-flex cursor-pointer align-middle leading-none p-0.5 -m-0.5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTriggerClick}
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
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the tooltip itself
          >
            <span className="block drop-shadow-sm font-medium">{text}</span>
            <svg 
              className={`absolute h-2.5 w-5 text-brand-secondary/95 fill-current drop-shadow-lg ${style.placement === 'top' ? 'top-full' : 'bottom-full'}`} 
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
