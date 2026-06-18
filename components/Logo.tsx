
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div 
      className={`font-extrabold text-brand-light ${className}`} 
      style={{ minHeight: '40px', minWidth: '180px', willChange: 'transform' }}
      role="img" 
      aria-label="Designing Dose Logo"
    >
      <span className="text-2xl tracking-tight">Designing</span>
      <span className="text-2xl gradient-text">Dose</span>
    </div>
  );
};

export default Logo;
