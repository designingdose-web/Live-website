
import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <span className="relative group inline-block">
      {children}
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-brand-primary text-white text-sm rounded-lg shadow-lg border border-gray-700/50">
        {text}
        <svg className="absolute text-brand-primary h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
        </svg>
      </span>
    </span>
  );
};

export default Tooltip;
