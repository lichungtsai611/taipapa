'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface PageProgressContextType {
  progress: number;
  sections: string[];
  currentSection: string;
  registerSection: (id: string) => void;
  unregisterSection: (id: string) => void;
}

const PageProgressContext = createContext<PageProgressContextType>({
  progress: 0,
  sections: [],
  currentSection: '',
  registerSection: () => {},
  unregisterSection: () => {},
});

export const usePageProgress = () => useContext(PageProgressContext);

export default function PageProgressProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [progress, setProgress] = useState(0);
  const [sections, setSections] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState('');

  // Register a section to be tracked
  const registerSection = (id: string) => {
    setSections(prev => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  };

  // Unregister a section when component unmounts
  const unregisterSection = (id: string) => {
    setSections(prev => prev.filter(sectionId => sectionId !== id));
  };

  // Handle scroll and calculate progress
  useEffect(() => {
    // Creating a throttled version of the scroll handler for better performance
    const throttleInterval = 100; // ms
    let lastScrollTime = 0;
    
    const handleScroll = () => {
      const now = Date.now();
      
      // Throttle frequent scroll events for better performance
      if (now - lastScrollTime < throttleInterval) return;
      lastScrollTime = now;
      
      // Calculate overall scroll progress
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = window.innerHeight;
      
      const scrollProgress = Math.min(Math.max(scrollTop / (scrollHeight - clientHeight) || 0, 0), 1);
      setProgress(scrollProgress);
      
      // Determine current section (only if there are sections to track)
      if (sections.length > 0) {
        let foundSection = false;
        // Go from bottom to top to find the current section
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Consider a section active when its top part is visible
            // This threshold can be adjusted for different behaviors
            if (rect.top <= clientHeight * 0.4) {
              if (currentSection !== sections[i]) {
                setCurrentSection(sections[i]);
              }
              foundSection = true;
              break;
            }
          }
        }
        
        // If no section is found in view and we're at the top, set the first section
        if (!foundSection && scrollTop < 100 && sections[0]) {
          setCurrentSection(sections[0]);
        }
      }
    };

    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount for initial state
    handleScroll();
    
    // Also add resize listener to recalculate on window resize
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections, currentSection]);

  return (
    <PageProgressContext.Provider 
      value={{ 
        progress, 
        sections, 
        currentSection,
        registerSection,
        unregisterSection
      }}
    >
      {children}
    </PageProgressContext.Provider>
  );
}