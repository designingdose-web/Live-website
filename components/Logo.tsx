import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div 
      className={`font-extrabold text-brand-light ${className}`}
      role="img"
      aria-label="Designing Dose Logo"
      style={{
        minHeight: '40px',
        minWidth: '180px',
        width: '180px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5rem',
        lineHeight: '40px',
        willChange: 'auto',
        contain: 'strict'
      }}
    >
      <span style={{ color: '#E6EDF3' }}>Designing</span>
      <span style={{ background: 'linear-gradient(to right, #8B5CF6, #EC4899, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Dose</span>
    </div>
  );
};

export default Logo;
