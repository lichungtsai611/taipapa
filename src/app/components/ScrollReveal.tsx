'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  once?: boolean;
  className?: string;
  distance?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
  scale?: boolean;
  cursorEffect?: boolean;
  cursorText?: string;
}

// Define fixed variants
const fixedVariants = {
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  } as Variants,
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  } as Variants,
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  } as Variants,
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  } as Variants
};

// Create direction variants as functions
function getDirectionVariant(direction: string, distance: number): Variants {
  switch (direction) {
    case 'up':
      return {
        hidden: { y: distance, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      };
    case 'down':
      return {
        hidden: { y: -distance, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      };
    case 'left':
      return {
        hidden: { x: -distance, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      };
    case 'right':
      return {
        hidden: { x: distance, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      };
    default:
      return fixedVariants.none;
  }
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  threshold = 0.1,
  once = true,
  className = '',
  distance = 50,
  staggerChildren = false,
  staggerDelay = 0.1,
  scale = false,
  cursorEffect = false,
  cursorText = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Determine which variant to use
  const variant = scale 
    ? fixedVariants.scale 
    : (staggerChildren 
      ? fixedVariants.staggerContainer 
      : getDirectionVariant(direction, distance));

  const transition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
  };

  // Add cursor attributes
  const cursorAttributes = cursorEffect ? {
    'data-cursor-hover': true,
    'data-cursor-text': cursorText || undefined,
    'data-cursor-magnetic': '0.05',
  } : {};

  if (staggerChildren) {
    // If staggering children, map each child to a motion div
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={fixedVariants.staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={transition}
        {...cursorAttributes}
      >
        {Array.isArray(children) ? 
          children.map((child, index) => (
            <motion.div
              key={index}
              variants={fixedVariants.staggerItem}
              custom={index * staggerDelay}
            >
              {child}
            </motion.div>
          )) 
          : 
          <motion.div variants={fixedVariants.staggerItem}>
            {children}
          </motion.div>
        }
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={transition}
      {...cursorAttributes}
    >
      {children}
    </motion.div>
  );
} 