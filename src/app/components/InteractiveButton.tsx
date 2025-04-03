'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface InteractiveButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  trailEffect?: boolean;
  cursorText?: string;
  magneticStrength?: string;
}

export default function InteractiveButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  trailEffect = false,
  cursorText = 'Click',
  magneticStrength = '0.3',
}: InteractiveButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [trailPositions, setTrailPositions] = useState<{x: number, y: number, opacity: number, scale: number}[]>([]);

  // Generate classes based on variant and size
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700',
    secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700',
    outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50',
    text: 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const baseClasses = 'relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 overflow-hidden';

  // Handle mouse movement for hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });

    if (trailEffect) {
      setTrailPositions(prev => [
        {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          opacity: 1,
          scale: 1
        },
        ...prev.slice(0, 5).map(pos => ({
          ...pos,
          opacity: pos.opacity * 0.8,
          scale: pos.scale * 0.9
        }))
      ]);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTrailPositions([]);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={() => {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-cursor-text={cursorText}
      data-cursor-magnetic={magneticStrength}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{
        transform: isHovered ? `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` : 'translate(0, 0)',
      }}
    >
      {/* Gradient hover effect */}
      {(variant === 'primary' || variant === 'secondary') && isHovered && (
        <motion.div
          className="absolute inset-0 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.8), transparent 60%)`,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Trail effect */}
      {trailEffect && trailPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 rounded-full bg-white pointer-events-none"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: pos.opacity * 0.3,
            scale: pos.scale * 0.5,
          }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Button content with Link */}
      <Link href={href} className="relative z-10 flex items-center gap-2">
        {children}
      </Link>

      {/* Sparkle effect on hover */}
      {isHovered && (
        <>
          <motion.span
            className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"
            animate={{ 
              x: [0, -10, -5], 
              y: [0, -10, -20], 
              opacity: [1, 0.5, 0] 
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.span
            className="absolute bottom-0 left-0 w-1 h-1 bg-white rounded-full"
            animate={{ 
              x: [0, 10, 5], 
              y: [0, 10, 20], 
              opacity: [1, 0.5, 0] 
            }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </>
      )}
    </motion.button>
  );
} 