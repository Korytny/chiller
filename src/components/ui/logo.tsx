
import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '@/lib/data';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'default', size = 'md' }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-foreground';
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link to="/" className="flex items-center gap-1.5 transition-opacity hover:opacity-90">
      <div className="relative">
        <svg 
          width={size === 'sm' ? 28 : size === 'md' ? 36 : 48} 
          height={size === 'sm' ? 28 : size === 'md' ? 36 : 48} 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="transition-transform duration-1000 ease-in-out hover:rotate-45"
        >
          <path 
            d="M24 4L4 18L4 42L44 42L44 18L24 4Z" 
            fill="none" 
            stroke={variant === 'white' ? '#FFFFFF' : '#DAA520'} 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          <path 
            d="M24 4L14 12V22L24 30L34 22V12L24 4Z" 
            fill="none" 
            stroke={variant === 'white' ? '#FFFFFF' : '#DAA520'} 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className={`font-sans font-semibold ${textColor} ${sizeClasses[size]}`}>
        {companyInfo.name}
      </h1>
    </Link>
  );
};

export default Logo;
