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
    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = window.innerHeight;
      
      const scrollProgress = scrollTop / (scrollHeight - clientHeight) || 0;
      setProgress(scrollProgress);
      
      // Determine current section
      if (sections.length > 0) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Consider a section active when it's top is in the upper half of the viewport
            if (rect.top <= clientHeight * 0.5) {
              setCurrentSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

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