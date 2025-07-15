'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsChart from '@/components/SkillsChart';
import ProjectsGrid from '@/components/ProjectsGrid';
import Certifications from '@/components/Certifications';
import HireMeSystem from '@/components/HireMeSystem';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';



export default function Home() {
  useEffect(() => {
    // Console Easter Egg
    console.log(`
    🚀 Welcome to Harshil Shah's Cinematic Portfolio!
    
    Built with:
    • Next.js 14 + TypeScript
    • Tailwind CSS + Framer Motion
    • Cinematic UI/UX Design
    
    Interested in the code? Check out my GitHub!
    https://github.com/Harshil5233
    `);
  }, []);

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-deep-navy text-light-blue overflow-x-hidden"
      >

        
        <ThemeProvider>
          <Header />
          <div className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ExperienceTimeline />
            <SkillsChart />
            <ProjectsGrid />
            <Certifications />
            <HireMeSystem />
            <ContactForm />
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple z-50 origin-left"
          style={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />


      </motion.main>
    </AnimatePresence>
  );
}