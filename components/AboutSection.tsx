'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import ThemeAwareText from './ThemeAwareText';

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 cinematic-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              <TypeAnimation
                sequence={['ABOUT ME', 1000, 'MY JOURNEY', 1000, 'MY BLUEPRINT', 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-glow"
              />
            </h2>
            <div className="w-24 h-1 bg-aqua-accent dark:bg-neon-cyan mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="particles absolute inset-0"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full glass border-2 border-aqua-accent dark:border-neon-cyan flex items-center justify-center">
                  <div className="text-6xl animate-float">🧠</div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <h3 className="flex items-center gap-3 text-xl font-rajdhani font-bold mb-4">
                  <ThemeAwareText variant="accent">🧠 My Mission</ThemeAwareText>
                </h3>
                <p className="leading-relaxed">
                  <ThemeAwareText variant="primary">
                    I solve real-world problems using automation, cloud, and AI.
                  </ThemeAwareText>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <h3 className="flex items-center gap-3 text-xl font-rajdhani font-bold mb-4">
                  <ThemeAwareText variant="accent">⚙️ My Transition</ThemeAwareText>
                </h3>
                <p className="leading-relaxed">
                  <ThemeAwareText variant="primary">
                    After 4 years in pharmaceutical industry, I transitioned into tech — 
                    blending precision with software to build automation that helps real users.
                  </ThemeAwareText>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <h3 className="flex items-center gap-3 text-xl font-rajdhani font-bold mb-4">
                  <ThemeAwareText variant="accent">💡 My Focus</ThemeAwareText>
                </h3>
                <p className="leading-relaxed">
                  <ThemeAwareText variant="primary">
                    Cloud-powered bots, mobile apps, and digital tools that scale fast, 
                    work clean, and look sharp.
                  </ThemeAwareText>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}