'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SectionProgressBarProps {
  sections?: string[];  // Optional array of section IDs to track
  height?: string;      // Optional height of the progress bar
  position?: 'top' | 'bottom' | 'left' | 'right';  // Optional position
  showLabels?: boolean; // Whether to show section labels
}

export default function SectionProgressBar({
  sections = [],
  height = '8px',
  position = 'top',
  showLabels = false
}: SectionProgressBarProps) {
  const [activeSection, setActiveSection] = useState('');
  const [progress, setProgress] = useState(0);
  const [sectionPoints, setSectionPoints] = useState<{id: string, position: number}[]>([]);

  // Initialize section positions and set up scrolling logic
  useEffect(() => {
    // Find all sections if none provided
    let sectionElements: HTMLElement[] = [];
    
    if (sections.length > 0) {
      sectionElements = sections
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
    } else {
      // Get all section elements with IDs if no specific sections provided
      sectionElements = Array.from(document.querySelectorAll('section[id], div[id]'))
        .filter((el): el is HTMLElement => !!el.id) as HTMLElement[];
    }
    
    // Calculate section points
    const points = sectionElements.map(section => ({
      id: section.id,
      position: section.offsetTop / (document.body.scrollHeight - window.innerHeight)
    }));
    
    setSectionPoints(points);

    const handleScroll = () => {
      // Calculate current progress
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentProgress = scrollPosition / totalHeight;
      
      setProgress(currentProgress);
      
      // Find active section
      for (let i = points.length - 1; i >= 0; i--) {
        if (currentProgress >= points[i].position - 0.03) {
          setActiveSection(points[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Position styling
  const getPositionStyle = () => {
    switch (position) {
      case 'top':
        return 'top-0 left-0 right-0 w-full';
      case 'bottom':
        return 'bottom-0 left-0 right-0 w-full';
      case 'left':
        return 'left-0 top-0 bottom-0 h-full';
      case 'right':
        return 'right-0 top-0 bottom-0 h-full';
      default:
        return 'top-0 left-0 right-0 w-full';
    }
  };

  const isVertical = position === 'left' || position === 'right';

  return (
    <div className={`fixed ${getPositionStyle()} z-50`}>
      <div 
        className={`relative ${isVertical ? 'h-full w-2' : `w-full h-[${height}]`} bg-gray-200 bg-opacity-30`}
      >
        <motion.div
          className="absolute bg-gradient-to-r from-blue-500 to-purple-500"
          style={
            isVertical 
              ? { height: `${progress * 100}%`, width: '100%' } 
              : { width: `${progress * 100}%`, height: '100%' }
          }
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        
        {/* Section markers */}
        {sectionPoints.map((point) => (
          <div 
            key={point.id}
            className={`absolute ${isVertical ? 'w-full h-2' : 'h-full w-2'} ${
              activeSection === point.id ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            style={
              isVertical 
                ? { top: `${point.position * 100}%` }
                : { left: `${point.position * 100}%` }
            }
          />
        ))}
        
        {/* Section labels (optional) */}
        {showLabels && sectionPoints.map((point) => (
          <div 
            key={`label-${point.id}`}
            className={`absolute ${
              activeSection === point.id ? 'text-blue-600' : 'text-gray-400'
            } text-xs font-bold transform ${
              isVertical 
                ? 'translate-y-[-50%] left-3' 
                : 'translate-x-[-50%] top-4'
            }`}
            style={
              isVertical 
                ? { top: `${point.position * 100}%` }
                : { left: `${point.position * 100}%` }
            }
          >
            {point.id}
          </div>
        ))}
      </div>
    </div>
  );
}