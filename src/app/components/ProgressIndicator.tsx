'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

type ProgressIndicatorType = 'line' | 'dots' | 'circle' | 'bar';
type ProgressIndicatorPosition = 'top' | 'bottom' | 'left' | 'right' | 'corner';
type ProgressIndicatorTheme = 'default' | 'light' | 'dark' | 'gradient';

interface ProgressIndicatorProps {
  type?: ProgressIndicatorType;
  position?: ProgressIndicatorPosition;
  theme?: ProgressIndicatorTheme;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hideOnTop?: boolean;
}

export default function ProgressIndicator({
  type = 'line',
  position = 'top',
  theme = 'gradient',
  showPercentage = false,
  size = 'md',
  hideOnTop = true
}: ProgressIndicatorProps) {
  const [isVisible, setIsVisible] = useState(!hideOnTop);
  const { scrollYProgress } = useScroll();
  const [percentageText, setPercentageText] = useState('0%');
  
  // Add spring physics for smooth animation with improved settings
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.0005
  });

  // Listen to scroll progress for percentage text
  useEffect(() => {
    return scrollYProgress.onChange(v => {
      const percentage = Math.round(v * 100);
      setPercentageText(`${percentage}%`);
      
      if (hideOnTop) {
        setIsVisible(percentage > 2);
      }
    });
  }, [scrollYProgress, hideOnTop]);

  // Set theme styles
  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return 'bg-white bg-opacity-70';
      case 'dark':
        return 'bg-gray-800';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600';
      default:
        return 'bg-blue-500';
    }
  };

  // Set size styles
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return type === 'line' ? 'h-1.5' : 'h-8 w-8';
      case 'lg':
        return type === 'line' ? 'h-3' : 'h-16 w-16';
      default:
        return type === 'line' ? 'h-2' : 'h-12 w-12';
    }
  };

  // Set position styles
  const getPositionStyles = () => {
    switch (position) {
      case 'bottom':
        return 'bottom-0 left-0 right-0';
      case 'left':
        return 'left-0 top-0 bottom-0 w-1.5 h-full';
      case 'right':
        return 'right-0 top-0 bottom-0 w-1.5 h-full';
      case 'corner':
        return 'top-4 right-4';
      default:
        return 'top-0 left-0 right-0';
    }
  };

  // Line progress bar
  if (type === 'line') {
    const isVertical = position === 'left' || position === 'right';
    return (
      <motion.div
        className={`fixed ${getPositionStyles()} ${getSizeStyles()} z-[9999] origin-${isVertical ? 'top' : 'left'} ${getThemeStyles()} shadow-sm`}
        style={{ 
          scaleX: isVertical ? 1 : scaleX,
          scaleY: isVertical ? scaleX : 1,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
    );
  }

  // Circle progress indicator
  if (type === 'circle') {
    return (
      <motion.div
        className={`fixed ${position === 'corner' ? 'top-4 right-4' : 'bottom-4 right-4'} z-50 flex items-center justify-center rounded-full shadow-lg ${getSizeStyles()} bg-white`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            className="stroke-current text-gray-200"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            className={`stroke-current ${theme === 'gradient' ? 'text-blue-500' : 'text-blue-600'}`}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="251.2"
            style={{ strokeDashoffset: useSpring(scrollYProgress.get() * 251.2, {
              stiffness: 100,
              damping: 30
            }) }}
          />
        </svg>
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
            {percentageText}
          </div>
        )}
      </motion.div>
    );
  }

  // Dots progress indicator
  if (type === 'dots') {
    // Calculate total dots (5 dots)
    const dots = [0, 0.25, 0.5, 0.75, 1];
    
    return (
      <motion.div
        className={`fixed ${position === 'corner' ? 'top-4 right-4' : 'right-4'} z-50 flex flex-col gap-2`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {dots.map((threshold, i) => (
          <motion.div
            key={i}
            className={`rounded-full ${getSizeStyles() === 'h-8 w-8' ? 'h-2 w-2' : getSizeStyles() === 'h-16 w-16' ? 'h-3 w-3' : 'h-2.5 w-2.5'} 
            ${getThemeStyles()} shadow-sm opacity-30`}
            animate={{
              opacity: scrollYProgress.get() >= threshold ? 1 : 0.3,
              scale: scrollYProgress.get() >= threshold ? 1.2 : 1
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Bar with percentage
  if (type === 'bar') {
    return (
      <motion.div
        className={`fixed ${position === 'corner' ? 'top-4 right-4' : 'top-4 right-4'} z-50 bg-white bg-opacity-80 rounded-full shadow-md px-3 py-1.5 flex items-center`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
          <motion.div
            className={`absolute left-0 top-0 h-full rounded-full ${getThemeStyles()}`}
            style={{ width: `${scrollYProgress.get() * 100}%` }}
          />
        </div>
        {showPercentage && (
          <div className="text-xs font-medium text-gray-700">{percentageText}</div>
        )}
      </motion.div>
    );
  }

  return null;
}