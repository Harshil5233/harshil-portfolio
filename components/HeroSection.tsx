'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SystemBootScroll from './SystemBootScroll';
import ThemeAwareText from './ThemeAwareText';
import ThemeAwareButton from './ThemeAwareButton';

const RESUME_URL = 'https://drive.google.com/file/d/1y-lMUZ0k-Ph0C4gQU3X-olBuAlPXLvbR/view?usp=sharing';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative cinematic-bg">
      <div className="particles"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-orbitron font-bold text-glow terminal-cursor"
          >
            Harshil Shah
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl md:text-4xl font-rajdhani font-medium"
          >
            <ThemeAwareText variant="accent">
              <TypeAnimation
                sequence={[
                  'Cloud & AI Developer',
                  2000,
                  'Automation Engineer',
                  2000,
                  'Innovator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </ThemeAwareText>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            <ThemeAwareText variant="secondary">
              MSc IT student specializing in Cloud Computing with 4+ years of pharmaceutical 
              quality experience. Building AI-powered solutions, mobile apps, and automation tools 
              that bridge traditional industries with cutting-edge technology.
            </ThemeAwareText>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <ThemeAwareButton
              variant="outline"
              href="https://github.com/Harshil5233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <span className="flex items-center gap-2">
                💻 GitHub
              </span>
            </ThemeAwareButton>

            <ThemeAwareButton
              variant="secondary"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              📄 Download Resume
            </ThemeAwareButton>

            <ThemeAwareButton
              variant="primary"
              onClick={() => scrollToSection('contact')}
              className="text-lg"
            >
              📧 Contact Me
            </ThemeAwareButton>
          </motion.div>
        </motion.div>

        <SystemBootScroll targetSection="about" />
      </div>
    </section>
  );
}
