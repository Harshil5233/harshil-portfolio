'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThemeAwareText from './ThemeAwareText';
import ThemeAwareButton from './ThemeAwareButton';

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: '2405102070004@paruluniversity.ac.in',
    link: 'mailto:2405102070004@paruluniversity.ac.in'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91-7874453551',
    link: 'tel:+917874453551'
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'harshil-shah-31848b137',
    link: 'https://www.linkedin.com/in/harshil-shah-31848b137'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'Harshil5233',
    link: 'https://github.com/Harshil5233'
  },
  {
    icon: '🤖',
    label: 'Telegram Bot',
    value: 'File Sharing Bot',
    link: 'https://t.me/file_sharing5233_bot?start=3bk0lF5VSLwK'
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Vadodara, Gujarat, India',
    link: null
  }
];

export default function ContactForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-20 cinematic-bg">
      <div className="particles"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-glow mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-aqua-accent dark:bg-neon-cyan mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              <ThemeAwareText variant="secondary">
                Ready to collaborate on innovative projects? Let's discuss how we can 
                create impactful solutions together.
              </ThemeAwareText>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                {contact.link ? (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block glass rounded-xl p-6 hover-lift h-full"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{contact.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-rajdhani font-bold mb-1">
                          <ThemeAwareText variant="accent">{contact.label}</ThemeAwareText>
                        </h3>
                        <p className="mb-2">
                          <ThemeAwareText variant="primary">{contact.value}</ThemeAwareText>
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-xl p-6 hover-lift h-full">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{contact.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-rajdhani font-bold mb-1">
                          <ThemeAwareText variant="accent">{contact.label}</ThemeAwareText>
                        </h3>
                        <p className="mb-2">
                          <ThemeAwareText variant="primary">{contact.value}</ThemeAwareText>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="glass rounded-xl p-8 hover-lift">
              <h3 className="text-3xl font-rajdhani font-bold mb-4">
                <ThemeAwareText variant="accent">🚀 Ready to Innovate Together?</ThemeAwareText>
              </h3>
              <p className="mb-8 max-w-3xl mx-auto leading-relaxed">
                <ThemeAwareText variant="secondary">
                  I'm actively seeking opportunities in AI, cloud computing, automation, and innovative 
                  technology solutions. Let's create something extraordinary.
                </ThemeAwareText>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ThemeAwareButton
                  variant="primary"
                  href="mailto:2405102070004@paruluniversity.ac.in"
                >
                  📧 Send Email
                </ThemeAwareButton>
                <ThemeAwareButton
                  variant="outline"
                  href="https://www.linkedin.com/in/harshil-shah-31848b137"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼 Connect on LinkedIn
                </ThemeAwareButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}