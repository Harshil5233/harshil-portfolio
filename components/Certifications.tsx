'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    title: 'Python Logic Development',
    issuer: 'Parul University',
    year: '2025',
    type: 'Programming',
    icon: '🐍',
    description: 'Advanced Python programming concepts, algorithms, and problem-solving techniques'
  },
  {
    title: 'IT Specialist – HTML & CSS',
    issuer: 'Certiport',
    year: '2025',
    type: 'Frontend',
    icon: '🌐',
    description: 'Professional certification in modern HTML5 and CSS3 development practices'
  },
  {
    title: 'IT Specialist – JavaScript',
    issuer: 'Pearson',
    year: '2025',
    type: 'Programming',
    icon: '⚡',
    description: 'Comprehensive JavaScript programming including DOM manipulation and modern ES6+'
  },
  {
    title: 'AWS CloudVerse 2025',
    issuer: 'Cloud + AI Seminars',
    year: '2025',
    type: 'Cloud',
    icon: '☁️',
    description: 'Latest AWS services, cloud architecture patterns, and serverless computing'
  },
  {
    title: 'DevOps Meets AI',
    issuer: 'AWS Cloud Club',
    year: '2025',
    type: 'DevOps',
    icon: '🤖',
    description: 'Integration of AI/ML workflows with DevOps practices and cloud infrastructure'
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 cinematic-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-glow-dark dark:text-glow-dark mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-neon-cyan mx-auto mb-6"></div>
            <p className="text-lg text-soft-cyan dark:text-soft-cyan max-w-3xl mx-auto">
              Industry-recognized certifications and specialized training programs 
              validating expertise across multiple domains
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 45 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                className="group"
              >
                <div className="glass-dark dark:glass-dark rounded-xl p-6 hover-lift h-full">
                  {/* Cert Header */}
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 rounded-full glass-dark dark:glass-dark border border-neon-cyan/30 mb-4 group-hover:border-neon-cyan/60 transition-colors duration-300">
                      <span className="text-3xl">{cert.icon}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 text-xs font-rajdhani font-bold mb-4 inline-block">
                      {cert.type.toUpperCase()}
                    </div>
                  </div>

                  {/* Cert Content */}
                  <div className="text-center">
                    <h3 className="font-rajdhani font-bold text-lg text-soft-cyan dark:text-soft-cyan mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-neon-cyan font-medium mb-2">{cert.issuer}</p>
                    <p className="text-pink-cta font-rajdhani font-bold mb-4">{cert.year}</p>
                    
                    <p className="text-soft-cyan/80 dark:text-soft-cyan/80 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan/5 to-pink-cta/5"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass-dark dark:glass-dark rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-rajdhani font-bold text-neon-cyan mb-6">
                📜 Continuous Learning Journey
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">
                    {certifications.length}
                  </div>
                  <div className="text-sm text-soft-cyan/70 dark:text-soft-cyan/70">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-pink-cta mb-2">2025</div>
                  <div className="text-sm text-soft-cyan/70 dark:text-soft-cyan/70">Latest Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">4</div>
                  <div className="text-sm text-soft-cyan/70 dark:text-soft-cyan/70">Domains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-pink-cta mb-2">100%</div>
                  <div className="text-sm text-soft-cyan/70 dark:text-soft-cyan/70">Verified</div>
                </div>
              </div>

              <p className="text-soft-cyan dark:text-soft-cyan mt-6 max-w-3xl mx-auto">
                Committed to staying at the forefront of technology through continuous learning 
                and professional development. Each certification represents hands-on expertise 
                and validated skills in cutting-edge technologies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}