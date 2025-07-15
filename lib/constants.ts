export const COLORS = {
  deepSpace: '#050510',
  neonCyan: '#00FFFF',
  electricPurple: '#8A2BE2',
  vividMagenta: '#FF0080',
  highlightGold: '#FFD700',
  glowCyan: 'rgba(0, 255, 255, 0.3)',
  glowPurple: 'rgba(138, 43, 226, 0.3)',
  glowMagenta: 'rgba(255, 0, 128, 0.3)',
} as const;

export const PERSONAL_INFO = {
  name: 'Harshil Shah',
  title: 'Cloud & AI Innovator',
  roles: ['Cloud & AI Innovator', 'Bot Developer', 'Tech Builder', 'Neural Network Architect'],
  tagline: 'I Build AI That Thinks Ahead',
  hook: 'Experience My Mind',
  email: 'harshil@example.com',
  phone: '+1234567890',
  location: 'Your Location',
  social: {
    github: 'https://github.com/harshilshah',
    linkedin: 'https://linkedin.com/in/harshilshah',
    telegram: 'https://t.me/harshilshah',
    whatsapp: 'https://wa.me/1234567890',
  },
} as const;

export const DOPAMINE_COPY = {
  cta: {
    primary: 'Tap In',
    secondary: 'Decrypt Me',
    tertiary: 'Push the Limit',
    contact: 'Let\'s Build',
  },
  hooks: {
    scroll: 'Keep going…',
    reveal: 'The real magic starts here',
    curiosity: 'Why I built an AI bot that broke my inbox',
    challenge: 'I Dare You to Click This',
  },
  rewards: {
    hover: 'Nice move',
    click: 'You found it',
    scroll: 'Getting warmer...',
  },
} as const;

export const SKILLS = {
  programming: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  ai: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow'],
  cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  devops: ['CI/CD', 'Jenkins', 'Git', 'Linux', 'Monitoring'],
} as const;

export const PROJECTS = [
  {
    id: 1,
    title: 'Telegram Bot Framework',
    description: 'Advanced bot development framework with AI integration',
    tech: ['Python', 'Telegram API', 'AI/ML'],
    github: 'https://github.com/harshilshah/telegram-bot',
    demo: 'https://demo-link.com',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Resume Parser AI',
    description: 'Intelligent resume parsing system using NLP',
    tech: ['Python', 'NLP', 'Machine Learning'],
    github: 'https://github.com/harshilshah/resume-parser',
    demo: 'https://demo-link.com',
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Universal Ren\'Py Player',
    description: 'iOS game player for Ren\'Py visual novels',
    tech: ['Swift', 'iOS', 'Game Development'],
    github: 'https://github.com/harshilshah/renpy-player',
    demo: 'https://apps.apple.com/app/renpy-player',
    image: '/project3.jpg',
  },
] as const;

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
} as const;