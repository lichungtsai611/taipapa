'use client';

import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import NewsSection from './components/NewsSection';
import CTASection from './components/CTASection';
import ParticlesBackground from './components/ParticlesBackground';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Reference to the main container to detect when sections come into view
  const mainRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      
      const sections = mainRef.current.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.div 
      ref={mainRef}
      className="overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Main Content */}
      <ParticlesBackground />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="features">
        <FeatureSection />
      </section>
      
      <section id="news">
        <NewsSection />
      </section>
      
      <section id="cta">
        <CTASection />
      </section>
      
      {/* Quick navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {['hero', 'features', 'news', 'cta'].map((id, index) => (
          <motion.a
            key={id}
            href={`#${id}`}
            data-cursor-text={id === 'hero' ? '首頁' : id === 'features' ? '特色' : id === 'news' ? '新聞' : id === 'cta' ? '加入' : ''}
            data-cursor-magnetic="0.2"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-blue-400'
            }`}
            whileHover={{ scale: 1.5 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
