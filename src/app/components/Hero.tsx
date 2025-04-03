'use client';

import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverButton, setHoverButton] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    vx: number;
    vy: number;
    life: number;
  }>>([]);
  
  // Interactive text elements
  const [hoveredChar, setHoveredChar] = useState<number | null>(null);
  const titleText = "台灣人工智慧";
  const subtitleText = "實務應用推廣協會";
  
  // Mouse movement tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update mouse position for various effects
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ 
      x: (x / rect.width), 
      y: (y / rect.height) 
    });
    
    // Create particles on mouse move (throttled)
    if (Math.random() > 0.92) {
      createParticle(x, y);
    }
  };
  
  // Create interactive particles
  const createParticle = (x: number, y: number) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const colors = ['#3b82f6', '#8b5cf6', '#6366f1', '#a855f7', '#ec4899'];
    
    const particle = {
      id: Date.now() + Math.random(),
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: Math.random() * 3 + 1
    };
    
    setParticles(prev => [...prev.slice(-30), particle]);
    
    // Remove particle after its lifespan
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== particle.id));
    }, particle.life * 1000);
  };
  
  // Handle click effect - create burst of particles
  const handleClick = (e: React.MouseEvent) => {
    if (isMobile || !heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create a burst of particles
    for (let i = 0; i < 25; i++) {
      setTimeout(() => createParticle(x, y), i * 20);
    }
  };
  
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverButton(null);
  };
  
  // Set up the component
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Create initial particles
    const createInitialParticles = () => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      for (let i = 0; i < 30; i++) {
        createParticle(
          Math.random() * rect.width,
          Math.random() * rect.height
        );
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Create initial particles with delay
    setTimeout(createInitialParticles, 1000);
    
    // Regular particle generation for continuous animation
    const particleInterval = setInterval(() => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        createParticle(
          Math.random() * rect.width,
          Math.random() * rect.height
        );
      }
    }, 200);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(particleInterval);
    };
  }, []);
  
  // Animation effects for background elements
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const translateY = useTransform(scrollY, [0, 300], [0, 100]);
  
  // Gradient animation
  const gradientX = useMotionValue(0);
  const gradientY = useMotionValue(0);
  
  useEffect(() => {
    const updateGradient = () => {
      gradientX.set(mousePosition.x * 100);
      gradientY.set(mousePosition.y * 100);
    };
    
    updateGradient();
  }, [mousePosition, gradientX, gradientY]);
  
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };
  
  // Staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  // Moving background shapes
  const backgroundElements = [
    { 
      id: 1, 
      shape: 'circle',
      color: 'bg-gradient-to-r from-blue-500/30 to-purple-500/30',
      size: 'h-[500px] w-[500px]',
      initialX: "-10%", 
      initialY: "30%",
      blur: 'blur-[80px]',
      animation: {
        x: ['-10%', '10%', '-10%'],
        y: ['30%', '20%', '30%'],
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1]
      },
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    { 
      id: 2, 
      shape: 'circle',
      color: 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20',
      size: 'h-[400px] w-[400px]',
      initialX: "110%", 
      initialY: "60%",
      blur: 'blur-[60px]',
      animation: {
        x: ['110%', '80%', '110%'],
        y: ['60%', '70%', '60%'],
        rotate: [0, -15, 0],
        scale: [1, 1.2, 1]
      },
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    { 
      id: 3, 
      shape: 'rounded-2xl',
      color: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
      size: 'h-[300px] w-[300px]',
      initialX: "70%", 
      initialY: "10%",
      blur: 'blur-[50px]',
      animation: {
        x: ['70%', '60%', '70%'],
        y: ['10%', '20%', '10%'],
        rotate: [0, 30, 0],
        scale: [1, 1.15, 1]
      },
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    { 
      id: 4, 
      shape: 'rounded-2xl',
      color: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
      size: 'h-[250px] w-[250px]',
      initialX: "30%", 
      initialY: "85%",
      blur: 'blur-[40px]',
      animation: {
        x: ['30%', '40%', '30%'],
        y: ['85%', '70%', '85%'],
        rotate: [0, -20, 0],
        scale: [1, 1.1, 1]
      },
      transition: {
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  ];
  
  // Digital rain effect characters
  const digitalRainChars = "01";
  
  // Floating decorative elements
  const floatingElements = [
    { 
      id: 1, 
      content: '✨', 
      initialX: "15%", 
      initialY: "20%", 
      size: "text-3xl text-yellow-400/70",
      animate: {
        y: [0, -20, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.2, 1]
      },
      transition: {
        duration: 4,
        repeat: Infinity,
      }
    },
    { 
      id: 2, 
      content: '🤖', 
      initialX: "80%", 
      initialY: "15%", 
      size: "text-4xl",
      animate: {
        y: [0, 15, 0],
        rotate: [0, -5, 0],
        scale: [1, 1.2, 1]
      },
      transition: {
        duration: 5,
        repeat: Infinity,
      }
    },
    { 
      id: 3, 
      content: '🔍', 
      initialX: "75%", 
      initialY: "75%", 
      size: "text-2xl",
      animate: {
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1]
      },
      transition: {
        duration: 6,
        repeat: Infinity,
      }
    },
    { 
      id: 4, 
      content: '📊', 
      initialX: "25%", 
      initialY: "80%", 
      size: "text-3xl",
      animate: {
        y: [0, 15, 0],
        x: [0, -10, 0],
        rotate: [0, -8, 0],
        scale: [1, 1.15, 1]
      },
      transition: {
        duration: 5.5,
        repeat: Infinity,
      }
    }
  ];
  
  // Function to scroll to footer
  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden bg-[#fafafa] min-h-screen flex items-center justify-center" 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{ 
          background: `radial-gradient(circle at ${gradientX.get()}% ${gradientY.get()}%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1), rgba(255, 255, 255, 0))`,
          opacity
        }}
        transition={{ type: 'spring', damping: 15 }}
      />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.shape} ${element.color} ${element.size} ${element.blur}`}
            style={{ 
              left: element.initialX, 
              top: element.initialY,
              originX: 0.5,
              originY: 0.5
            }}
            animate={element.animation}
            transition={element.transition}
          />
        ))}
      </div>
      
      {/* Background grid pattern */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </motion.div>
      
      {/* Interactive particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: `0 0 ${particle.size / 2}px ${particle.color}`,
            }}
            animate={{
              x: [`${particle.vx * 50}px`, `${particle.vx * 100}px`],
              y: [`${particle.vy * 50}px`, `${particle.vy * 100}px`],
              opacity: [0.8, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: particle.life,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Digital rain background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500/15 text-xs font-mono"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: -20, 
              opacity: 0.3 
            }}
            animate={{
              y: ['-5%', '105%'],
              opacity: [0.15, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {[...Array(Math.floor(Math.random() * 10) + 5)].map((_, j) => (
              <div key={j} className="mb-1">
                {digitalRainChars[Math.floor(Math.random() * digitalRainChars.length)]}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Floating elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} pointer-events-none z-10`}
          style={{ 
            left: element.initialX, 
            top: element.initialY,
          }}
          animate={element.animate}
          transition={element.transition}
        >
          {element.content}
        </motion.div>
      ))}

      {/* Mouse follower spotlight */}
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
          x: mousePosition.x * window.innerWidth - 200,
          y: mousePosition.y * window.innerHeight - 200,
          opacity: isHovering ? 0.8 : 0
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 sm:px-8 lg:py-32">
        <motion.div 
          className="text-center mx-auto max-w-4xl"
          style={{ y: translateY, scale }}
        >
          <motion.div 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textVariants}>
              <motion.span 
                className="inline-block mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  <span>台灣首家AI實務推廣協會</span>
                  <motion.div 
                    className="ml-2 h-2 w-2 rounded-full bg-blue-700"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </motion.span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900">
                <motion.div 
                  className="inline-block mb-4 relative"
                  variants={textVariants}
                >
                  <div className="relative z-0">
                    {titleText.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        className="inline-block relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.5 + index * 0.08,
                          duration: 0.3
                        }}
                        onMouseEnter={() => setHoveredChar(index)}
                        onMouseLeave={() => setHoveredChar(null)}
                        style={{
                          display: 'inline-block',
                          position: 'relative',
                          zIndex: hoveredChar === index ? 1 : 0
                        }}
                      >
                        {char}
                        {hoveredChar === index && (
                          <motion.span
                            className="absolute bottom-0 left-0 w-full h-[4px] bg-blue-500"
                            layoutId="charHighlight"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>{' '}
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                  variants={textVariants}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  style={{ 
                    backgroundSize: '200% 200%',
                  }}
                >
                  {subtitleText.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 1 + index * 0.08,
                        duration: 0.3
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        color: '#4f46e5',
                        textShadow: '0 0 8px rgba(79, 70, 229, 0.6)',
                        rotate: Math.random() * 10 - 5
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
            </motion.div>
              <motion.p 
              className="mt-10 mx-auto max-w-2xl text-xl sm:text-2xl text-gray-600 leading-relaxed"
              variants={textVariants}
              >
                本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
              </motion.p>
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
              variants={containerVariants}
            >
              <motion.div 
                className="w-full sm:w-auto relative"
                variants={textVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => setHoverButton('contact')}
                onMouseLeave={() => setHoverButton(null)}
              >
                {/* Button hover effect */}
                <AnimatePresence>
                  {hoverButton === 'contact' && (
                    <motion.div
                      className="absolute -inset-2 bg-blue-100 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      layoutId="buttonHighlight"
                    />
                  )}
                </AnimatePresence>
                
                <button
                  onClick={scrollToFooter}
                  className="group relative flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-600 px-10 py-4 text-lg font-medium text-white hover:bg-blue-700 md:py-5 md:px-12 md:text-xl overflow-hidden transition-all duration-300"
                  data-cursor-text="聯絡我們"
                  data-cursor-magnetic="0.15"
                >
                  {/* Sparkles animation */}
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-white/40"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        left: [
                          `${Math.random() * 100}%`,
                          `${Math.random() * 100}%`
                        ],
                        top: [
                          `${Math.random() * 100}%`,
                          `${Math.random() * 100}%`
                        ]
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                  
                  <motion.span 
                    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-transform duration-1000 ease-out group-hover:-translate-x-40"
                    animate={{ 
                      x: ['-100%', '200%']
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'linear'
                    }}
                  />
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative flex items-center"
                  >
                    <span className="relative z-10">聯絡我們</span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </motion.svg>
                  </motion.span>
                </button>
              </motion.div>
              
              <motion.div 
                className="w-full sm:w-auto relative"
                variants={textVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => setHoverButton('about')}
                onMouseLeave={() => setHoverButton(null)}
              >
                <AnimatePresence>
                  {hoverButton === 'about' && (
                    <motion.div
                      className="absolute -inset-2 bg-blue-50 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      layoutId="buttonHighlight"
                    />
                  )}
                </AnimatePresence>
                
                  <Link
                    href="/events"
                  className="group relative flex w-full items-center justify-center rounded-lg border-2 border-blue-600 bg-transparent px-10 py-4 text-lg font-medium text-blue-600 hover:bg-blue-50 md:py-5 md:px-12 md:text-xl transition-all duration-300"
                  data-cursor-text="了解更多"
                  data-cursor-magnetic="0.2"
                >
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative z-10"
                  >
                    了解更多
                  </motion.span>
                  <motion.svg
                    className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                  
                  {/* Border animation */}
                  <motion.span
                    className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                      animate={{ 
                        left: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.span>
                  </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mouse-triggered ripple effect */}
      <AnimatePresence>
        {isHovering && !isMobile && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full h-full"
              initial={{ boxShadow: `0 0 0 0 rgba(59, 130, 246, 0)` }}
              animate={{ 
                boxShadow: [
                  `inset 0 0 20px 10px rgba(59, 130, 246, 0)`,
                  `inset 0 0 50px 30px rgba(59, 130, 246, 0.05)`,
                  `inset 0 0 20px 10px rgba(59, 130, 246, 0)`
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Animated bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1,
            ease: "easeOut"
          }}
        >
          <svg 
            viewBox="0 0 1440 120" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full h-full"
          >
            <motion.path 
              d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="rgba(59, 130, 246, 0.1)"
              animate={{ 
                d: [
                  "M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
                  "M0,64L60,53.3C120,43,240,21,360,26.7C480,32,600,64,720,69.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
                  "M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                ]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path 
              d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,96C840,96,960,64,1080,58.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="rgba(59, 130, 246, 0.05)"
              animate={{ 
                d: [
                  "M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,96C840,96,960,64,1080,58.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
                  "M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
                  "M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,96C840,96,960,64,1080,58.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                ]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 