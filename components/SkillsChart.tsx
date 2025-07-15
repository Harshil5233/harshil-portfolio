'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from './ThemeProvider';
import ThemeAwareText from './ThemeAwareText';

const skills = [
  { name: 'Telegram Bots', level: 95, icon: '🤖' },
  { name: 'HTML/CSS', level: 92, icon: '🌐' },
  { name: 'Python Programming', level: 90, icon: '🐍' },
  { name: 'JavaScript', level: 85, icon: '⚡' },
  { name: 'Git & GitHub', level: 82, icon: '📂' },
  { name: 'AWS/Cloud', level: 80, icon: '☁️' },
  { name: 'Database/Storage', level: 78, icon: '💾' },
  { name: 'Flutter/Mobile', level: 75, icon: '📱' },
  { name: 'DevOps Basics', level: 70, icon: '⚙️' }
];

export default function SkillsChart() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 cinematic-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-glow mb-4">
              Technical Arsenal
            </h2>
            <div className={`w-24 h-1 mx-auto mb-6 ${theme === 'hacker' ? 'bg-hacker-green' : 'bg-neon-cyan'}`}></div>
            <p className="text-lg max-w-3xl mx-auto">
              <ThemeAwareText variant="secondary">
                Skills developed through real-world projects, certifications, and professional experience
              </ThemeAwareText>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-rajdhani font-bold text-lg">
                      <ThemeAwareText variant="title">{skill.name}</ThemeAwareText>
                    </h3>
                  </div>
                  <span className="text-2xl font-orbitron font-bold">
                    <ThemeAwareText variant="accent">{skill.level}%</ThemeAwareText>
                  </span>
                </div>

                <div className="relative">
                  <div className={`w-full h-3 rounded-full border overflow-hidden ${
                    theme === 'hacker' 
                      ? 'bg-hacker-card border-border-hacker' 
                      : 'bg-space-dark border-border-dark'
                  }`}>
                    <motion.div
                      className={`h-full rounded-full relative ${
                        theme === 'hacker'
                          ? 'bg-gradient-to-r from-hacker-green to-hacker-accent'
                          : 'bg-gradient-to-r from-neon-cyan to-pink-cta'
                      }`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.5, 
                        duration: 1.5, 
                        ease: [0.6, -0.05, 0.01, 0.99] 
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className={`absolute top-0 h-3 w-1 rounded-full shadow-lg ${
                      theme === 'hacker'
                        ? 'bg-hacker-green shadow-hacker-green/50'
                        : 'bg-neon-cyan shadow-neon-cyan/50'
                    }`}
                    initial={{ left: 0 }}
                    animate={inView ? { left: `${skill.level}%` } : { left: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.5, 
                      duration: 1.5, 
                      ease: [0.6, -0.05, 0.01, 0.99] 
                    }}
                    style={{ transform: 'translateX(-50%)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-rajdhani font-bold mb-4">
                <ThemeAwareText variant="accent">🚀 Continuous Evolution</ThemeAwareText>
              </h3>
              <p className="max-w-3xl mx-auto leading-relaxed">
                <ThemeAwareText variant="secondary">
                  From pharmaceutical quality systems to cutting-edge AI development, 
                  always learning, always building, always innovating.
                </ThemeAwareText>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
