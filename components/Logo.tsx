
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`font-extrabold text-brand-light ${className}`} role="img" aria-label="Designing Dose Logo">
      <span className="text-2xl tracking-tight">Designing</span>
      <span className="text-2xl gradient-text">Dose</span>
    </div>
  );
};

export default Logo;
