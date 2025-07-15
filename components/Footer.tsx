'use client';

import { motion } from 'framer-motion';
import ThemeAwareText from './ThemeAwareText';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 cinematic-bg border-t border-border-light dark:border-border-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <button
              onClick={scrollToTop}
              className="hover-lift p-3 rounded-full glass border border-border-light dark:border-border-dark hover:border-aqua-accent dark:hover:border-neon-cyan transition-all duration-300"
            >
              <span className="text-2xl">⬆️</span>
            </button>
          </div>

          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-rajdhani font-bold mb-2">
                <ThemeAwareText variant="title">Harshil Shah</ThemeAwareText>
              </h3>
              <p>
                <ThemeAwareText variant="accent">
                  Cloud & AI Developer | Automation Engineer | Innovator
                </ThemeAwareText>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#about"
                className="transition-colors duration-300 hover:text-aqua-accent dark:hover:text-neon-cyan"
              >
                <ThemeAwareText variant="secondary">About</ThemeAwareText>
              </a>
              <span>
                <ThemeAwareText variant="secondary">•</ThemeAwareText>
              </span>
              <a
                href="#skills"
                className="transition-colors duration-300 hover:text-aqua-accent dark:hover:text-neon-cyan"
              >
                <ThemeAwareText variant="secondary">Skills</ThemeAwareText>
              </a>
              <span>
                <ThemeAwareText variant="secondary">•</ThemeAwareText>
              </span>
              <a
                href="#projects"
                className="transition-colors duration-300 hover:text-aqua-accent dark:hover:text-neon-cyan"
              >
                <ThemeAwareText variant="secondary">Projects</ThemeAwareText>
              </a>
              <span>
                <ThemeAwareText variant="secondary">•</ThemeAwareText>
              </span>
              <a
                href="#contact"
                className="transition-colors duration-300 hover:text-aqua-accent dark:hover:text-neon-cyan"
              >
                <ThemeAwareText variant="secondary">Contact</ThemeAwareText>
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/Harshil5233"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift p-3 rounded-full glass border border-border-light dark:border-border-dark hover:border-aqua-accent dark:hover:border-neon-cyan transition-all duration-300"
              >
                <span className="text-xl">💻</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harshil-shah-31848b137"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift p-3 rounded-full glass border border-border-light dark:border-border-dark hover:border-aqua-accent dark:hover:border-neon-cyan transition-all duration-300"
              >
                <span className="text-xl">💼</span>
              </a>
              <a
                href="mailto:2405102070004@paruluniversity.ac.in"
                className="hover-lift p-3 rounded-full glass border border-border-light dark:border-border-dark hover:border-aqua-accent dark:hover:border-neon-cyan transition-all duration-300"
              >
                <span className="text-xl">📧</span>
              </a>
            </div>

            <div className="pt-6 border-t border-border-light dark:border-border-dark">
              <p className="text-sm">
                <ThemeAwareText variant="secondary">
                  © {currentYear} Harshil Shah. Built with React, Next.js & Tailwind CSS.
                </ThemeAwareText>
              </p>
              <p className="text-xs mt-2">
                <ThemeAwareText variant="secondary">
                  Designed for innovation, optimized for impact.
                </ThemeAwareText>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}