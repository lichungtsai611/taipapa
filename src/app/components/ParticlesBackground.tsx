'use client';

import { useEffect, useRef, useState } from 'react';

// Define particle properties
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulsing?: boolean;
  pulseValue?: number;
  pulseSpeed?: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const clickEffects = useRef<{x: number, y: number, radius: number, maxRadius: number, opacity: number}[]>([]);
  const hoverParticle = useRef<{x: number, y: number, size: number, opacity: number} | null>(null);

  // Initialize and animate particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Create particles
    const createParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 150);
      
      const colors = ['#60a5fa', '#a78bfa', '#818cf8', '#93c5fd', '#c4b5fd'];
      
      for (let i = 0; i < particleCount; i++) {
        const pulsing = Math.random() > 0.7;
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: Math.random() * 0.4 - 0.2,
          speedY: Math.random() * 0.4 - 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          pulsing,
          pulseValue: pulsing ? 0 : undefined,
          pulseSpeed: pulsing ? Math.random() * 0.02 + 0.01 : undefined
        });
      }
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      // Create hover particle that follows cursor
      if (!hoverParticle.current) {
        hoverParticle.current = {
          x: e.clientX,
          y: e.clientY,
          size: 3,
          opacity: 0.7
        };
      }
    };
    
    // Handle click effect
    const handleClick = (e: MouseEvent) => {
      // Create expanding ring effect
      clickEffects.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 100,
        opacity: 1
      });
      
      // Create additional particles on click
      const colors = ['#60a5fa', '#a78bfa', '#818cf8', '#93c5fd'];
      const burstCount = 10;
      
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2) * (i / burstCount);
        const speed = 2 + Math.random() * 2;
        
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2 + 1,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.8,
          pulsing: true,
          pulseValue: 0,
          pulseSpeed: 0.04
        });
      }
      
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw click effects
      clickEffects.current.forEach((effect, index) => {
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(150, 150, 255, ${effect.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Update effect
        effect.radius += 3;
        effect.opacity -= 0.02;
        
        // Remove completed effects
        if (effect.radius > effect.maxRadius || effect.opacity <= 0) {
          clickEffects.current.splice(index, 1);
        }
      });
      
      // Draw hover particle
      if (hoverParticle.current) {
        const hp = hoverParticle.current;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, hp.size + 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 130, 255, 0.2)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, hp.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 130, 255, 0.4)';
        ctx.fill();
        
        // Smoothly move hover particle to mouse position
        hp.x += (mousePosition.current.x - hp.x) * 0.2;
        hp.y += (mousePosition.current.y - hp.y) * 0.2;
      }
      
      // Draw and update regular particles
      particles.current.forEach((particle, index) => {
        // Update pulsing particles
        if (particle.pulsing && particle.pulseValue !== undefined && particle.pulseSpeed) {
          particle.pulseValue += particle.pulseSpeed;
          if (particle.pulseValue > 1 || particle.pulseValue < 0) {
            particle.pulseSpeed = -particle.pulseSpeed;
          }
          // Add variation to the size based on pulse
          const pulseEffect = Math.sin(particle.pulseValue * Math.PI) * 1.5;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size + pulseEffect, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity * 0.5;
          ctx.fill();
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reverse direction when hitting the edge
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
        
        // Interactive effect: particles react to mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const maxDistance = 150;
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          
          // Push particles away from mouse with increased force when clicked
          const moveScale = isClicked ? 0.06 : 0.03;
          particle.x -= dx * force * moveScale;
          particle.y -= dy * force * moveScale;
          
          // Make particles light up when near mouse
          if (distance < 80) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size + 1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.globalAlpha = (80 - distance) / 80 * 0.5;
            ctx.fill();
          }
        }
        
        // Connect nearby particles with lines
        for (let j = index + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, otherParticle.color);
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = (100 - distance) / 1000;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [isClicked]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
} 