'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border-light dark:border-border-dark">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-orbitron font-bold text-aqua-accent dark:text-neon-cyan hacker:text-hacker-green"
          >
            HS
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-text-secondary dark:text-soft-cyan hacker:text-hacker-text hover:text-aqua-accent dark:hover:text-neon-cyan hacker:hover:text-hacker-green transition-colors duration-300 font-rajdhani hacker:font-hacker font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="theme-toggle p-2 rounded-full glass hover-glow"
            >
              <span className="text-xl">
                {theme === 'dark' ? '🧬' : '🌙'}
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="theme-toggle p-2 rounded-full glass"
            >
              <span className="text-lg">
                {theme === 'dark' ? '🧬' : '🌙'}
              </span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-aqua-accent dark:bg-neon-cyan hacker:bg-hacker-green transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-aqua-accent dark:bg-neon-cyan hacker:bg-hacker-green transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-aqua-accent dark:bg-neon-cyan hacker:bg-hacker-green transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-text-secondary dark:text-soft-cyan hacker:text-hacker-text hover:text-aqua-accent dark:hover:text-neon-cyan hacker:hover:text-hacker-green transition-colors duration-300 font-rajdhani hacker:font-hacker font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}