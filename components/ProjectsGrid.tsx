'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThemeAwareText from './ThemeAwareText';
import ThemeAwareButton from './ThemeAwareButton';
import SkillPill from './SkillPill';

const projects = [
  {
    title: 'Cinematic Portfolio OS',
    description: 'My own portfolio built as a cinematic single-page app with dark/light theme toggle, animated sections, and Vercel deployment.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    link: 'https://harshil-portfolio-green.vercel.app/',
    icon: '🚀',
    type: 'Web App'
  },
  {
    title: 'DigiPin Bharat App',
    description: 'Privacy-first location sharing mobile application built with Flutter.',
    tech: ['Flutter', 'Dart', 'Privacy-focused', 'Mobile Development'],
    link: 'https://play.google.com/store/apps/details?id=com.digipin.bharat',
    icon: '📱',
    type: 'Mobile App'
  },
  {
    title: 'Telegram File Sharing Bot',
    description: 'AI-powered Telegram bot for secure file sharing with cloud storage integration.',
    tech: ['Python', 'Telegram API', 'Cloud Storage', 'AI Integration'],
    link: 'https://t.me/file_sharing5233_bot?start=3bk0lF5VSLwK',
    icon: '🤖',
    type: 'AI Bot'
  },
  {
    title: 'Universal Ren\'Py iOS Launcher',
    description: 'iOS application launcher for Ren\'Py visual novel games.',
    tech: ['iOS Development', 'Swift', 'Game Engine', 'Cross-platform'],
    link: null,
    icon: '🎮',
    type: 'Game Tool'
  }
];

export default function ProjectsGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 cinematic-bg">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-aqua-accent dark:bg-neon-cyan mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              <ThemeAwareText variant="secondary">
                Real-world applications showcasing expertise in AI, mobile development, 
                and innovative automation solutions
              </ThemeAwareText>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 15 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative"
              >
                <div className="glass rounded-xl overflow-hidden hover-lift h-full">
                  <div className="p-6 border-b border-border-light dark:border-border-dark">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{project.icon}</span>
                      <div>
                        <h3 className="text-xl font-rajdhani font-bold">
                          <ThemeAwareText variant="title">{project.title}</ThemeAwareText>
                        </h3>
                        <span className="text-sm font-medium">
                          <ThemeAwareText variant="accent">{project.type}</ThemeAwareText>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="leading-relaxed mb-6">
                      <ThemeAwareText variant="primary">{project.description}</ThemeAwareText>
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <SkillPill key={techIndex}>
                          {tech}
                        </SkillPill>
                      ))}
                    </div>

                    {project.link ? (
                      <ThemeAwareButton
                        variant="primary"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🚀 View Project
                      </ThemeAwareButton>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-6 py-3 glass border border-border-light dark:border-border-dark rounded-lg">
                        <ThemeAwareText variant="secondary">🔒 Private Project</ThemeAwareText>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glass rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-rajdhani font-bold mb-4">
                <ThemeAwareText variant="accent">🔥 More Projects Coming Soon</ThemeAwareText>
              </h3>
              <p className="mb-6 max-w-2xl mx-auto">
                <ThemeAwareText variant="secondary">
                  Currently working on cloud-native applications, AI automation tools, 
                  and innovative solutions that bridge pharmaceutical expertise with modern technology.
                </ThemeAwareText>
              </p>
              <ThemeAwareButton
                variant="outline"
                href="https://github.com/Harshil5233"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 Explore GitHub
              </ThemeAwareButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
