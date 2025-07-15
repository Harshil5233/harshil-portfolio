'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThemeAwareText from './ThemeAwareText';

const experience = {
  title: 'Officer – Center of Excellence',
  company: 'Sun Pharma',
  period: '2020 – 2024',
  location: 'India',
  responsibilities: [
    'Quality Assurance & Production oversight',
    'QAMS implementation',
    'Quality Check protocols and documentation',
    'Regulatory compliance and validation processes'
  ]
};

const education = [
  { degree: 'MSc IT – Cloud Computing', institution: 'Parul University', period: '2024 – 2026', cgpa: '8.64/10', icon: '🎓' },
  { degree: 'B.Pharm', institution: 'Parul Institute of Pharmacy', period: '2016 – 2020', cgpa: '7.07/10', icon: '💊' },
  { degree: '12th GSEB', institution: 'Gujarat State Board', period: '2016', cgpa: '61.53%', icon: '📚' },
  { degree: '10th GSEB', institution: 'Gujarat State Board', period: '2014', cgpa: '81.33%', icon: '🏫' }
];

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 cinematic-bg">
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
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-aqua-accent dark:bg-neon-cyan mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-rajdhani font-bold mb-8 flex items-center gap-3">
                <ThemeAwareText variant="accent">💼 Professional Experience</ThemeAwareText>
              </h3>
              
              <div className="glass rounded-xl p-8 hover-lift">
                <div className="mb-6">
                  <h4 className="text-xl font-rajdhani font-bold mb-2">
                    <ThemeAwareText variant="title">{experience.title}</ThemeAwareText>
                  </h4>
                  <p className="font-semibold text-lg">
                    <ThemeAwareText variant="accent">{experience.company}</ThemeAwareText>
                  </p>
                  <div className="flex items-center gap-4 text-sm mt-2">
                    <span>📅 {experience.period}</span>
                    <span>📍 {experience.location}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-rajdhani font-semibold mb-4">
                    <ThemeAwareText variant="title">Key Responsibilities:</ThemeAwareText>
                  </h5>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((resp, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-aqua-accent dark:text-neon-cyan mt-1">•</span>
                        <ThemeAwareText variant="primary">{resp}</ThemeAwareText>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-rajdhani font-bold mb-8 flex items-center gap-3">
                <ThemeAwareText variant="accent">🎓 Education</ThemeAwareText>
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="glass rounded-xl p-6 hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{edu.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-rajdhani font-bold mb-1">
                          <ThemeAwareText variant="title">{edu.degree}</ThemeAwareText>
                        </h4>
                        <p className="font-medium mb-2">
                          <ThemeAwareText variant="accent">{edu.institution}</ThemeAwareText>
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span>
                            <ThemeAwareText variant="secondary">{edu.period}</ThemeAwareText>
                          </span>
                          <span className="font-semibold">
                            <ThemeAwareText variant="accent">{edu.cgpa}</ThemeAwareText>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}