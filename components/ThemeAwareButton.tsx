'use client';

import { useTheme } from './ThemeProvider';

interface ThemeAwareButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function ThemeAwareButton({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '',
  href,
  target,
  rel
}: ThemeAwareButtonProps) {
  const { theme } = useTheme();

  const getButtonClasses = () => {
    const baseClasses = `font-rajdhani font-semibold transition-all duration-300 hover:scale-105 ${className}`;
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} px-8 py-4 text-white rounded-lg ${
          theme === 'hacker' 
            ? 'btn-glow bg-gradient-to-r from-hacker-card to-hacker-green font-hacker' 
            : 'bg-pink-cta neon-glow'
        }`;
      case 'secondary':
        return `${baseClasses} px-8 py-4 glass border rounded-lg hover-glow ${
          theme === 'hacker'
            ? 'border-hacker-secondary text-hacker-secondary font-hacker'
            : 'border-soft-cyan text-soft-cyan'
        }`;
      case 'outline':
        return `${baseClasses} px-8 py-4 glass border rounded-lg hover-glow ${
          theme === 'hacker'
            ? 'border-hacker-green text-hacker-green font-hacker'
            : 'border-neon-cyan text-neon-cyan'
        }`;
      default:
        return baseClasses;
    }
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={getButtonClasses()}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={getButtonClasses()}
    >
      {children}
    </button>
  );
}