
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/FinQor_Logo.png"
        alt="FinQor Technologies"
        className="h-full w-auto object-contain max-w-none"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // If image fails to load, we show a clean text fallback so the UI doesn't break
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.logo-fallback')) {
            const span = document.createElement('span');
            span.className = 'logo-fallback font-black text-2xl tracking-tighter text-primary';
            span.innerText = 'FinQor';
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
};
