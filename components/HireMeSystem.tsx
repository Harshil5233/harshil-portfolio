'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

export default function HireMeSystem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1y-lMUZ0k-Ph0C4gQU3X-olBuAlPXLvbR/view?usp=sharing', '_blank');
  };

  return (
    <section className="py-20 cinematic-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 hover-lift border border-neon-aqua/30 dark:border-neon-cyan/30">
            {/* Animated Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-6"
            >
              <TypeAnimation
                sequence={[
                  "Let's Build the Future Together",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-glow"
              />
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-center text-text-secondary dark:text-soft-cyan mb-8 max-w-2xl mx-auto"
            >
              <span className="text-neon-aqua dark:text-neon-cyan font-semibold">Freelance</span> • 
              <span className="text-button-blue dark:text-pink-cta font-semibold"> Internship</span> • 
              <span className="text-neon-aqua dark:text-neon-cyan font-semibold"> Full-Time</span>
              <br />
              I'm ready to contribute and create impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-aqua to-button-blue dark:bg-pink-cta text-white font-rajdhani font-bold text-lg rounded-lg neon-glow transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  💼 Hire Me Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-button-blue to-neon-aqua dark:from-pink-cta dark:to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={downloadResume}
                className="group relative px-8 py-4 glass border border-text-secondary dark:border-soft-cyan text-text-secondary dark:text-soft-cyan font-rajdhani font-bold text-lg rounded-lg hover-glow transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  📄 View Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-aqua/10 to-button-blue/10 dark:from-soft-cyan/10 dark:to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a
                href="https://github.com/Harshil5233"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 glass border border-neon-aqua dark:border-neon-cyan text-neon-aqua dark:text-neon-cyan font-rajdhani font-bold text-lg rounded-lg hover-glow transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  🚀 Explore GitHub
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-aqua/10 to-button-blue/10 dark:from-neon-cyan/10 dark:to-pink-cta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-text-secondary/80 dark:text-soft-cyan/80 max-w-3xl mx-auto">
                <span className="text-neon-aqua dark:text-neon-cyan font-semibold">4+ years</span> of pharmaceutical precision meets 
                <span className="text-button-blue dark:text-pink-cta font-semibold"> cutting-edge AI development</span>. 
                Ready to bridge traditional industries with innovative technology solutions.
              </p>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 text-4xl opacity-20 animate-float">💡</div>
            <div className="absolute -bottom-4 -left-4 text-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>⚡</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

