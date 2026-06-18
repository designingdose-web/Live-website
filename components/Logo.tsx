import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div 
      className={`font-extrabold text-brand-light ${className}`} 
      style={{ 
        minHeight: '40px', 
        minWidth: '180px', 
        willChange: 'transform',
        display: 'block',
        lineHeight: '1'
      }}
      role="img" 
      aria-label="Designing Dose Logo"
    >
      <span style={{ fontSize: '1.5rem', letterSpacing: '-0.025em', display: 'inline' }}>Designing</span>
      <span style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, #8B5CF6, #EC4899, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline' }}>Dose</span>
    </div>
  );
};

export default Logo;
