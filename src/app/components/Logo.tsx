'use client';

import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)" />
      
      {/* Geometric AI symbols */}
      <path 
        d="M10 15L20 8L30 15L30 25L20 32L10 25L10 15Z" 
        stroke="white" 
        strokeWidth="1.5" 
        fill="none"
      />
      <path 
        d="M14 18L20 14L26 18L26 24L20 28L14 24L14 18Z" 
        stroke="white" 
        strokeWidth="1" 
        fill="#0ea5e9" 
        fillOpacity="0.4"
      />
      <circle cx="20" cy="20" r="3" fill="white" />
      
      {/* Connecting lines representing neural network */}
      <line x1="20" y1="17" x2="20" y2="11" stroke="white" strokeWidth="0.8" />
      <line x1="20" y1="23" x2="20" y2="29" stroke="white" strokeWidth="0.8" />
      <line x1="17" y1="20" x2="11" y2="20" stroke="white" strokeWidth="0.8" />
      <line x1="23" y1="20" x2="29" y2="20" stroke="white" strokeWidth="0.8" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
} 