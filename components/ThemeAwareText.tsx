'use client';

import { useTheme } from './ThemeProvider';

interface ThemeAwareTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'title' | 'accent';
  className?: string;
}

export default function ThemeAwareText({ 
  children, 
  variant = 'primary', 
  className = '' 
}: ThemeAwareTextProps) {
  const { theme } = useTheme();

  const getTextClasses = () => {
    const baseClasses = className;
    
    switch (variant) {
      case 'title':
        return `${baseClasses} ${theme === 'hacker' ? 'text-hacker-text font-hacker' : 'text-soft-cyan'}`;
      case 'secondary':
        return `${baseClasses} ${theme === 'hacker' ? 'text-hacker-secondary font-hacker' : 'text-soft-cyan/80'}`;
      case 'accent':
        return `${baseClasses} ${theme === 'hacker' ? 'text-hacker-green font-hacker' : 'text-neon-cyan'}`;
      default:
        return `${baseClasses} ${theme === 'hacker' ? 'text-hacker-text font-hacker' : 'text-soft-cyan'}`;
    }
  };

  return <span className={getTextClasses()}>{children}</span>;
}