'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SystemBootScrollProps {
  targetSection: string;
}

export default function SystemBootScroll({ targetSection }: SystemBootScrollProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setShouldPulse(true);
      setTimeout(() => setShouldPulse(false), 1000);
    }, 5000);

    return () => clearInterval(pulseInterval);
  }, []);

  const handleClick = () => {
    document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
      {/* Desktop Version */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden md:block relative"
        animate={shouldPulse ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="glass border border-neon-aqua dark:border-neon-cyan rounded-lg px-6 py-3 hover-glow transition-all duration-300">
          <motion.div
            initial={false}
            animate={{ width: isHovered ? 'auto' : 'auto' }}
            className="flex items-center gap-3"
          >
            <span className="text-2xl">↘️</span>
            <span className="font-orbitron font-semibold text-sm uppercase text-neon-aqua dark:text-neon-cyan">
              {isHovered ? '⏳ Initializing System...' : 'Start My Journey'}
            </span>
          </motion.div>
        </div>
        
        {/* Hover Glow Ring */}
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.3 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan to-pink-cta blur-md -z-10"
          />
        )}
      </motion.button>

      {/* Mobile Version */}
      <motion.button
        onClick={handleClick}
        className="md:hidden w-80 max-w-[90vw]"
        animate={shouldPulse ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="glass border border-neon-aqua dark:border-neon-cyan rounded-lg px-6 py-4 hover-glow">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">↓</span>
            <span className="font-orbitron font-semibold text-sm uppercase text-neon-aqua dark:text-neon-cyan">
              Swipe to Begin Journey
            </span>
          </div>
        </div>
      </motion.button>
    </div>
  );
}