'use client';

import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef, useCallback } from 'react';

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

export default function Hero() {
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverButton, setHoverButton] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Interactive text elements
  const [hoveredChar, setHoveredChar] = useState<number | null>(null);
  const titleText = "台灣人工智慧";
  const subtitleText = "實務應用推廣協會";
  
  // 使用固定的字符集合用於數字雨效果
  const digitalRainChars = ['0', '1', 'A', 'I', '智', '慧', '台', '灣', '∞', '♦'];
  
  // Animation effects for background elements
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const translateY = useTransform(scrollY, [0, 300], [0, 100]);
  
  // Gradient animation
  const gradientX = useMotionValue(0);
  const gradientY = useMotionValue(0);
  
  // Mouse event handlers
  const handleMouseMove = useCallback(
    throttle((e: React.MouseEvent) => {
      if (isMobile || !heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mousePositionRef.current = { x, y };
      
      // Update gradient position based on mouse
      gradientX.set(x * 100);
      gradientY.set(y * 100);
      
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }, 50),
    [mouseX, mouseY, gradientX, gradientY, isMobile]
  );
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (isMobile) return;
    // Basic click handling without particle effects
  }, [isMobile]);
  
  // Function to scroll to footer
  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const updateGradient = () => {
      gradientX.set(mousePositionRef.current.x * 100);
      gradientY.set(mousePositionRef.current.y * 100);
    };
    
    updateGradient();
  }, [gradientX, gradientY]);
  
  // Check if device is mobile and if we're on client side
  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
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
  
  // Floating decorative elements - 確保在客戶端渲染
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
  
  const RainDrop = ({ index }: { index: number }) => {
    const isClient = typeof window !== 'undefined';
    
    // 使用確定性值代替隨機值
    const initialX = 100 + (index * 50) % 500;
    const delay = 0.1 + (index * 0.3) % 2;
    const duration = 3 + (index * 0.5) % 3;
    
    return (
      <motion.div
        className="absolute top-0 z-0 bg-gradient-to-b from-cyan-500/30 to-blue-500/10 rounded-full w-1 h-10"
        initial={{ 
          x: initialX, 
          y: -20, 
          opacity: 0 
        }}
        animate={{ 
          y: [null, 200 + (index * 30) % 100],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    );
  };
  
  const DigitalRain = () => {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
      setIsClient(true);
    }, []);
    
    // 使用固定數量元素而非隨機數量
    const elements = Array.from({ length: 15 }, (_, i) => i);
    
    // 僅在客戶端渲染
    if (!isClient) {
      return null;
    }
    
    return (
      <div className="absolute -bottom-10 left-0 right-0 h-60 overflow-hidden z-0 pointer-events-none">
        {elements.map((i) => (
          <RainDrop key={i} index={i} />
        ))}
      </div>
    );
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
      
      {/* Floating elements - 僅客戶端渲染 */}
      {isClient && floatingElements.map((element) => (
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

      {/* Mouse follower spotlight - 僅客戶端渲染 */}
      {isClient && (
        <motion.div
          className="fixed w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
            x: mousePositionRef.current.x * (window?.innerWidth || 0) - 200,
            y: mousePositionRef.current.y * (window?.innerHeight || 0) - 200,
            opacity: isHovering ? 0.8 : 0
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300
          }}
        />
      )}

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
                        rotate: 3
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
            </motion.div>
              <motion.div 
                className="mt-10 mx-auto max-w-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-lg p-6 rounded-xl border border-blue-100/80 shadow-lg relative overflow-hidden"
                variants={textVariants}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Gradient animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5"
                    animate={{ 
                      background: [
                        'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.05) 50%, transparent)',
                        'radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.05) 50%, transparent)',
                        'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.05) 50%, transparent)'
                      ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* 使用確定性位置的粒子效果，而不是隨機值 */}
                  {isClient && [...Array(20)].map((_, i) => {
                    // 使用基於索引的確定性值計算
                    const leftPosition = `${(i * 5) % 100}%`;
                    const topPosition = `${(i * 7) % 100}%`;
                    const yOffset = ((i % 5) * 6) - 15;
                    const xOffset = ((i % 7) * 5) - 15;
                    const opacityValues = [0.2, 0.5, 0.2];
                    const scaleValues = [1, 1 + (i % 5) * 0.1, 1];
                    const duration = 3 + (i % 5);
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-blue-400/30"
                        style={{
                          left: leftPosition,
                          top: topPosition,
                        }}
                        animate={{
                          y: [0, yOffset],
                          x: [0, xOffset],
                          opacity: opacityValues,
                          scale: scaleValues
                        }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}
                  
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                
                {/* Mission title */}
                <motion.h3 
                  className="text-lg font-semibold text-indigo-800 mb-3 relative z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  未來視野
                </motion.h3>
                
                {/* Main mission statement */}
                <motion.div 
                  className="mb-4 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 inline-block" style={{ backgroundSize: '300% 100%' }}>
                    <motion.span
                      animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      style={{ backgroundSize: '300% 100%' }}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700"
                    >
                      AI，為你掌握每一刻
                    </motion.span>
                  </h2>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mt-1"
                    initial={{ width: 0, x: '50%' }}
                    animate={{ width: '100%', x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
                
                {/* Mission description */}
                <motion.p
                  className="text-gray-700 relative z-10 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  智慧決策，高效生活，無限可能。
                  讓AI成為您的專屬生活管家，為每一天創造更多價值與美好。
                </motion.p>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-xl z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl z-0"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                  }}
                />
              </motion.div>
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
                  {/* 使用確定性位置的閃光效果 */}
                  {isClient && [...Array(5)].map((_, i) => {
                    // 確定性位置和動畫時間
                    const leftStart = `${(i * 20) % 100}%`;
                    const leftEnd = `${((i * 20) + 10) % 100}%`;
                    const topStart = `${(i * 18) % 100}%`;
                    const topEnd = `${((i * 18) + 10) % 100}%`;
                    const duration = 1 + (i % 3);
                    const delay = i * 0.4;
                    
                    return (
                      <motion.span 
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-white/40"
                        style={{
                          left: leftStart, 
                          top: topStart
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          left: [leftStart, leftEnd],
                          top: [topStart, topEnd]
                        }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          delay: delay
                        }}
                      />
                    );
                  })}
                  
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
      
      {/* Mouse-triggered ripple effect - 僅客戶端渲染 */}
      <AnimatePresence>
        {isClient && isHovering && !isMobile && (
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