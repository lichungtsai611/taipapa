'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// 節流函數
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return function(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

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
  glowing?: boolean;
  connectedTo?: number[];
  isDataNode?: boolean;
  dataNodeColor?: string;
}

// Define data packet properties
interface DataPacket {
  sourceIdx: number;
  targetIdx: number;
  x: number;
  y: number;
  progress: number;
  speed: number;
  width: number;
  color: string;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const clickEffects = useRef<{x: number, y: number, radius: number, maxRadius: number, opacity: number}[]>([]);
  const hoverParticle = useRef<{x: number, y: number, size: number, opacity: number} | null>(null);
  const dataFlowInterval = useRef<NodeJS.Timeout | null>(null);
  const nodeConnections = useRef<{from: number, to: number, progress: number, speed: number, width: number}[]>([]);
  const rafId = useRef<number | null>(null);
  const isInitialized = useRef(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = throttle(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }, 200);
    
    window.addEventListener('resize', handleResize);
    handleResize();

    const createParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 80); 
      
      const colors = [
        'rgba(100, 149, 237, 0.7)',  // 淺藍色
        'rgba(135, 206, 235, 0.7)',  // 天藍色
        'rgba(176, 196, 222, 0.7)',  // 淺鋼藍色
        'rgba(65, 105, 225, 0.7)'    // 皇家藍
      ];

      for (let i = 0; i < particleCount; i++) {
        const pulsing = Math.random() > 0.7;
        const glowing = Math.random() > 0.9;
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          pulsing,
          pulseValue: pulsing ? 0 : undefined,
          pulseSpeed: pulsing ? Math.random() * 0.03 + 0.01 : undefined,
          glowing,
          connectedTo: []
        });
      }

      const nodeCount = 4;
      const nodeColors = ['rgba(70, 130, 180, 0.7)', 'rgba(30, 144, 255, 0.7)', 'rgba(0, 191, 255, 0.7)', 'rgba(0, 0, 139, 0.7)'];
      
      for (let i = 0; i < nodeCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 6 + 3,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: 'rgba(255, 255, 255, 0.8)',
          opacity: 0.9,
          pulsing: true,
          pulseValue: Math.random(),
          pulseSpeed: Math.random() * 0.02 + 0.01,
          glowing: true,
          isDataNode: true,
          dataNodeColor: nodeColors[Math.floor(Math.random() * nodeColors.length)],
          connectedTo: []
        });
      }

      const dataNodes = particles.current.filter(p => p.isDataNode);
      
      dataNodes.forEach((node, idx) => {
        const connections = 1;
        const nodeIndex = particles.current.indexOf(node);
        
        for (let i = 0; i < connections; i++) {
          let targetIdx;
          do {
            targetIdx = Math.floor(Math.random() * dataNodes.length);
          } while (targetIdx === idx);
          
          const targetNode = dataNodes[targetIdx];
          const targetIndex = particles.current.indexOf(targetNode);
          
          node.connectedTo = [...(node.connectedTo || []), targetIndex];
        }
      });

      startDataFlowEffect();
    };

    const startDataFlowEffect = () => {
      if (dataFlowInterval.current) {
        clearInterval(dataFlowInterval.current);
      }

      dataFlowInterval.current = setInterval(() => {
        const dataNodes = particles.current.filter(p => p.isDataNode);
        if (dataNodes.length > 0) {
          const sourceNode = dataNodes[Math.floor(Math.random() * dataNodes.length)];
          const sourceIndex = particles.current.indexOf(sourceNode);
          
          if (sourceNode.connectedTo && sourceNode.connectedTo.length > 0) {
            const targetIndex = sourceNode.connectedTo[Math.floor(Math.random() * sourceNode.connectedTo.length)];
            
            nodeConnections.current.push({
              from: sourceIndex,
              to: targetIndex,
              progress: 0,
              speed: Math.random() * 0.02 + 0.01,
              width: Math.random() * 1.5 + 1
            });
          }
        }
      }, 1500);
    };

    const handleMouseMove = throttle((e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      if (!hoverParticle.current) {
        hoverParticle.current = {
          x: e.clientX,
          y: e.clientY,
          size: 3,
          opacity: 0.7
        };
      }
    }, 20);
    
    const handleClick = throttle((e: MouseEvent) => {
      clickEffects.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 150,
        opacity: 1
      });
      
      const burstCount = 8;
      const colors = ['#60a5fa', '#a78bfa', '#818cf8', '#93c5fd'];
      
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2) * (i / burstCount);
        const speed = 3 + Math.random() * 3;
        
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2.5 + 1.5,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.8,
          pulsing: false
        });
      }
      
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    }, 100);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    createParticles();

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawTechGrid(ctx, canvas.width, canvas.height);
      
      particles.current.forEach((particle, index) => {
        const shouldUpdateThisFrame = index % 2 === frameCount % 2;
        
        if (shouldUpdateThisFrame) {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          if (particle.x < -10) particle.x = canvas.width + 10;
          if (particle.x > canvas.width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = canvas.height + 10;
          if (particle.y > canvas.height + 10) particle.y = -10;
          
          if (particle.pulsing && particle.pulseValue !== undefined && particle.pulseSpeed) {
            particle.pulseValue += particle.pulseSpeed;
            if (particle.pulseValue > 1) {
              particle.pulseValue = 0;
            }
          }
        }
        
        if (particle.isDataNode) {
          drawDataNode(ctx, particle);
        } else {
          drawRegularParticle(ctx, particle, index);
        }
        
        if (particle.size > 2 || particle.isDataNode) {
          handleMouseInteraction(particle);
        }
        
        if (index % 4 === 0 || particle.isDataNode) {
          connectNearbyParticles(ctx, particle, index);
        }
      });
      
      if (hoverParticle.current) {
        hoverParticle.current.x += (mousePosition.current.x - hoverParticle.current.x) * 0.2;
        hoverParticle.current.y += (mousePosition.current.y - hoverParticle.current.y) * 0.2;
        
        ctx.beginPath();
        ctx.arc(hoverParticle.current.x, hoverParticle.current.y, hoverParticle.current.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${hoverParticle.current.opacity})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(hoverParticle.current.x, hoverParticle.current.y, hoverParticle.current.size * 2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${hoverParticle.current.opacity / 3})`;
        ctx.stroke();
      }
      
      drawNodeConnections(ctx);
      
      clickEffects.current.forEach((effect, index) => {
        effect.radius += 3;
        effect.opacity -= 0.02;
        
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99, 102, 241, ${effect.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        if (effect.radius >= effect.maxRadius || effect.opacity <= 0) {
          clickEffects.current.splice(index, 1);
        }
      });
      
      frameCount = (frameCount + 1) % 1000;
      
      rafId.current = requestAnimationFrame(animate);
    };
    
    let frameCount = 0;
    
    const drawTechGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const gridSize = 50;
      
      ctx.strokeStyle = 'rgba(100, 100, 255, 0.03)';
      ctx.lineWidth = 0.5;
      
      const startX = Math.floor(mousePosition.current.x / gridSize) * gridSize - gridSize * 10;
      const endX = startX + gridSize * 20;
      const startY = Math.floor(mousePosition.current.y / gridSize) * gridSize - gridSize * 10;
      const endY = startY + gridSize * 20;
      
      for (let x = startX; x < endX; x += gridSize) {
        if (x < 0 || x > width) continue;
        ctx.beginPath();
        ctx.moveTo(x, Math.max(0, startY));
        ctx.lineTo(x, Math.min(height, endY));
        ctx.stroke();
      }
      
      for (let y = startY; y < endY; y += gridSize) {
        if (y < 0 || y > height) continue;
        ctx.beginPath();
        ctx.moveTo(Math.max(0, startX), y);
        ctx.lineTo(Math.min(width, endX), y);
        ctx.stroke();
      }
    };
    
    const drawRegularParticle = (ctx: CanvasRenderingContext2D, particle: Particle, index: number) => {
      let currentSize = particle.size;
      if (particle.pulsing && particle.pulseValue !== undefined && particle.pulseSpeed !== undefined) {
        particle.pulseValue += particle.pulseSpeed;
        if (particle.pulseValue > 1) {
          particle.pulseValue = 0;
        }
        const pulseFactor = Math.sin(particle.pulseValue * Math.PI * 2);
        currentSize = particle.size * (1 + pulseFactor * 0.2);
      }
      
      currentSize = Math.max(0.1, currentSize);
      
      ctx.beginPath();
      ctx.globalAlpha = particle.opacity;
      
      if (particle.glowing) {
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 4
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, currentSize * 4, 0, Math.PI * 2);
      } else {
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
      }
      
      ctx.fill();
    };
    
    const drawDataNode = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      if (!particle.dataNodeColor) return;
      
      ctx.beginPath();
      ctx.arc(
        particle.x, 
        particle.y, 
        particle.size * 2.5, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = particle.dataNodeColor.replace(/[^,]+(?=\))/, '0.1');
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(
        particle.x, 
        particle.y, 
        particle.size * 1.7, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = particle.dataNodeColor.replace(/[^,]+(?=\))/, '0.2');
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(
        particle.x, 
        particle.y, 
        particle.size, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = particle.dataNodeColor;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(
        particle.x, 
        particle.y, 
        particle.size * 0.4, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
      
      if (particle.pulseValue !== undefined) {
        ctx.beginPath();
        ctx.arc(
          particle.x, 
          particle.y, 
          particle.size * 1.3, 
          0, 
          Math.PI * 2
        );
        ctx.strokeStyle = particle.dataNodeColor.replace(/[^,]+(?=\))/, '0.6');
        ctx.lineWidth = 1;
        ctx.stroke();
        
        const angle = particle.pulseValue * Math.PI * 2;
        const indicatorX = particle.x + Math.cos(angle) * particle.size * 1.3;
        const indicatorY = particle.y + Math.sin(angle) * particle.size * 1.3;
        
        ctx.beginPath();
        ctx.arc(indicatorX, indicatorY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    };
    
    const drawNodeConnections = (ctx: CanvasRenderingContext2D) => {
      const dataNodes = particles.current.filter(p => p.isDataNode);
      dataNodes.forEach(node => {
        if (node.connectedTo && node.connectedTo.length > 0) {
          node.connectedTo.forEach(targetIndex => {
            const target = particles.current[targetIndex];
            if (!target) return;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = 'rgba(100, 130, 255, 0.15)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          });
        }
      });
      
      nodeConnections.current.forEach((connection, index) => {
        const source = particles.current[connection.from];
        const target = particles.current[connection.to];
        
        if (!source || !target) {
          nodeConnections.current.splice(index, 1);
          return;
        }
        
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const x = source.x + dx * connection.progress;
        const y = source.y + dy * connection.progress;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        if (source.dataNodeColor) {
          ctx.fillStyle = source.dataNodeColor;
        } else {
          ctx.fillStyle = 'rgba(100, 200, 255, 0.8)';
        }
        ctx.fill();
        
        const tailLength = 0.1;
        if (connection.progress > tailLength) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          const tailX = source.x + dx * (connection.progress - tailLength);
          const tailY = source.y + dy * (connection.progress - tailLength);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = 'rgba(100, 200, 255, 0.4)';
          ctx.lineWidth = connection.width;
          ctx.stroke();
        }
        
        connection.progress += connection.speed;
        
        if (connection.progress >= 1) {
          nodeConnections.current.splice(index, 1);
          
          if (target.pulseValue !== undefined) {
            target.pulseValue = 0;
          }
        }
      });
    };
    
    const handleMouseInteraction = (particle: Particle) => {
      const dx = mousePosition.current.x - particle.x;
      const dy = mousePosition.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const maxDistance = 200;
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        
        const moveScale = isClicked ? 0.08 : 0.04;
        particle.x -= dx * force * moveScale;
        particle.y -= dy * force * moveScale;
        
        if (distance < 100) {
          if (particle.pulsing && particle.pulseValue !== undefined) {
            particle.pulseValue = Math.min(particle.pulseValue + 0.02, 1);
          }
        }
      }
    };
    
    const connectNearbyParticles = (ctx: CanvasRenderingContext2D, particle: Particle, index: number) => {
      for (let j = index + 1; j < particles.current.length; j++) {
        const otherParticle = particles.current[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const connectionDistance = particle.isDataNode || otherParticle.isDataNode ? 150 : 100;
        
        if (distance < connectionDistance) {
          ctx.beginPath();
          
          if (particle.isDataNode && otherParticle.isDataNode) {
            ctx.strokeStyle = 'rgba(100, 150, 255, 0.25)';
            ctx.lineWidth = 1.2;
          } else if (particle.isDataNode || otherParticle.isDataNode) {
            const dataNode = particle.isDataNode ? particle : otherParticle;
            ctx.strokeStyle = dataNode.dataNodeColor ? 
              dataNode.dataNodeColor.replace(/[^,]+(?=\))/, '0.15') : 
              'rgba(100, 150, 255, 0.15)';
            ctx.lineWidth = 0.8;
          } else {
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, otherParticle.color);
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = (connectionDistance - distance) / connectionDistance * 0.4;
            ctx.lineWidth = 0.6;
          }
          
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (dataFlowInterval.current) {
        clearInterval(dataFlowInterval.current);
      }
    };
  }, [isClicked]);

  return (
    <>
      {isClient ? (
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
      ) : (
        <div className="fixed inset-0 z-0 pointer-events-none bg-black/5"></div>
      )}
    </>
  );
} 