'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorProps {
  color?: 'blue' | 'red' | 'green' | 'purple';
}

type ColorScheme = {
  dot: string;
  text: string;
  ripple: string;
  trail: string;
};

const colorSchemes: Record<string, ColorScheme> = {
  blue: {
    dot: 'bg-gradient-to-br from-blue-500 to-purple-500',
    text: 'bg-blue-500 text-white',
    ripple: 'bg-blue-500/20',
    trail: 'bg-blue-400/30'
  },
  red: {
    dot: 'bg-gradient-to-br from-red-500 to-orange-500',
    text: 'bg-red-500 text-white',
    ripple: 'bg-red-500/20',
    trail: 'bg-red-400/30'
  },
  green: {
    dot: 'bg-gradient-to-br from-green-500 to-emerald-500',
    text: 'bg-green-500 text-white',
    ripple: 'bg-green-500/20',
    trail: 'bg-green-400/30'
  },
  purple: {
    dot: 'bg-gradient-to-br from-purple-500 to-pink-500',
    text: 'bg-purple-500 text-white',
    ripple: 'bg-purple-500/20',
    trail: 'bg-purple-400/30'
  }
};

export default function CustomCursor({ color = 'blue' }: CursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicked, setIsClicked] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [trails, setTrails] = useState<{x: number, y: number, scale: number, opacity: number, id: number}[]>([]);
  const nextId = useRef(0);
  const targetRef = useRef<HTMLElement | null>(null);
  const magnetStrength = useRef(0);

  // Get color scheme based on the color prop
  const colorClasses = colorSchemes[color] || colorSchemes.blue;

  useEffect(() => {
    // Show cursor after a brief delay to avoid initial position jumps
    const timeout = setTimeout(() => setIsVisible(true), 500);

    const updateMousePosition = (e: MouseEvent) => {
      // Apply magnetic effect if there's a target element
      if (targetRef.current && magnetStrength.current > 0) {
        const rect = targetRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to center of element
        const distX = centerX - e.clientX;
        const distY = centerY - e.clientY;
        
        // Apply magnetic pull (negative values pull towards element center)
        const pullX = distX * magnetStrength.current;
        const pullY = distY * magnetStrength.current;
        
        setPosition({ 
          x: e.clientX + pullX, 
          y: e.clientY + pullY
        });
      } else {
        setPosition({ x: e.clientX, y: e.clientY });
      }
      
      // Add trailing dots with staggered fade-out effect
      if (Math.random() > 0.5) {
        const id = nextId.current++;
        setTrails(prev => [
          ...prev, 
          { 
            x: e.clientX, 
            y: e.clientY, 
            scale: 1, 
            opacity: 0.6,
            id
          }
        ].slice(-10)); // Keep only the last 10 trails
        
        // Remove trail after animation
        setTimeout(() => {
          setTrails(prev => prev.filter(t => t.id !== id));
        }, 800);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Check if hovering over a clickable element
    const handlePointerCursor = () => {
      // Reset magnetic effect
      targetRef.current = null;
      magnetStrength.current = 0;
      
      const hoveredElement = document.querySelectorAll(':hover');
      const lastHoveredElement = hoveredElement[hoveredElement.length - 1] as HTMLElement;
      
      if (lastHoveredElement) {
        const computedStyle = window.getComputedStyle(lastHoveredElement);
        const isClickable = 
          computedStyle.cursor === 'pointer' || 
          lastHoveredElement.tagName === 'A' || 
          lastHoveredElement.tagName === 'BUTTON' ||
          lastHoveredElement.onclick !== null ||
          lastHoveredElement.getAttribute('role') === 'button';
        
        setIsPointer(isClickable);
        
        // Check for data attributes for custom cursor behavior
        if (lastHoveredElement.dataset.cursorText) {
          setCursorText(lastHoveredElement.dataset.cursorText);
        } else if (isClickable) {
          setCursorText('Click');
        } else {
          setCursorText(null);
        }
        
        // Apply magnetic effect if element has data-cursor-magnetic
        if (lastHoveredElement.dataset.cursorMagnetic) {
          targetRef.current = lastHoveredElement;
          magnetStrength.current = parseFloat(lastHoveredElement.dataset.cursorMagnetic) || 0.05;
        }
      } else {
        setIsPointer(false);
        setCursorText(null);
      }
    };

    // Handle mouse leaving the window
    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrails([]);
    };

    // Handle mouse entering the window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handlePointerCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.documentElement.style.cursor = 'none';

    // Add data-cursor-text and data-cursor-magnetic attributes to buttons and links
    const addCursorAttributes = () => {
      // Add magnetic effect to buttons
      document.querySelectorAll('button, a').forEach(el => {
        if (!el.getAttribute('data-cursor-magnetic')) {
          el.setAttribute('data-cursor-magnetic', '0.1');
        }
      });
      
      // Add text to specific elements
      document.querySelectorAll('a').forEach(el => {
        if (!el.getAttribute('data-cursor-text') && !el.querySelector('img')) {
          el.setAttribute('data-cursor-text', 'View');
        }
      });
    };
    
    // Run once after a delay to ensure DOM is ready
    setTimeout(addCursorAttributes, 1000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handlePointerCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      // Restore default cursor
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail dots */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className={`fixed top-0 left-0 rounded-full ${colorClasses.trail} z-[9997] pointer-events-none`}
            initial={{ 
              x: trail.x - 4, 
              y: trail.y - 4, 
              opacity: trail.opacity,
              scale: trail.scale,
              width: "10px",
              height: "10px"
            }}
            animate={{ 
              opacity: 0,
              scale: 0.2
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </AnimatePresence>

      {/* Main cursor dot */}
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full ${colorClasses.dot} z-[9999] pointer-events-none`}
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicked ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 1000,
          damping: 30,
          duration: 0.03
        }}
      />

      {/* Text label */}
      <AnimatePresence>
        {cursorText && (
          <motion.div
            className={`fixed top-0 left-0 rounded-full px-3 py-1 text-xs font-medium ${colorClasses.text} z-[9999] pointer-events-none`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              x: position.x - 20,
              y: position.y + 20
            }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              type: "spring",
              mass: 0.3,
              stiffness: 200,
              damping: 20
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click ripple effect */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className={`fixed top-0 left-0 w-12 h-12 rounded-full ${colorClasses.ripple} z-[9998] pointer-events-none`}
            initial={{ 
              x: position.x - 24, 
              y: position.y - 24, 
              scale: 0,
              opacity: 0.5 
            }}
            animate={{ 
              scale: 1.5,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </>
  );
} 