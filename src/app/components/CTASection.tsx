'use client';

import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse movement for gradient effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Move the useMotionTemplate hook outside of the conditional block
  const gradientBackground = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgb(59, 130, 246), transparent 80%)`;
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };
  
  // Generate particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div 
      ref={sectionRef}
      className="relative bg-white py-24 sm:py-32 isolate overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background effects */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated gradient background */}
        <motion.div 
          className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 blur-[80px] -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 blur-[70px] -z-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-500/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "loop",
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Interactive gradient mask that follows cursor */}
      {isInView && (
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none -z-10"
          style={{
            background: gradientBackground,
          }}
        />
      )}

      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="relative mx-auto max-w-2xl text-center"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-block"
              whileHover={{ 
                scale: 1.05, 
                color: "#4F46E5",
                transition: { duration: 0.3 } 
              }}
              transition={{ duration: 0.5 }}
            >
              加入台灣人工智慧實務應用推廣協會
            </motion.span>
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            variants={itemVariants}
          >
            與我們一同推動AI技術在台灣的發展與應用，加入協會成為推動台灣AI發展的重要力量。
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/join"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                data-cursor-text="成為會員"
                data-cursor-magnetic="0.3"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed880_0%,#1e40af80_50%,#1d4ed880_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  成為會員
                </span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/about"
                className="group text-sm font-semibold leading-6 text-gray-900 flex items-center gap-x-2"
                data-cursor-text="了解更多"
                data-cursor-magnetic="0.3"
              >
                了解更多
                <motion.svg
                  className="h-4 w-4 stroke-gray-900 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <path
                    d="M6 12l4-4-4-4"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-y-10 sm:mt-24 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-8 sm:gap-y-16"
          variants={containerVariants}
        >
          {[
            {
              title: "會員權益",
              description: "享有協會舉辦的活動優惠、專業課程折扣，以及與產業領袖交流的機會。",
              icon: (
                <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: "專業資源",
              description: "取得最新AI研究報告、產業白皮書、專業技術諮詢，協助您掌握AI發展趨勢。",
              icon: (
                <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
            },
            {
              title: "合作機會",
              description: "與台灣各領域的AI專家、企業建立合作關係，共同開發創新AI應用方案。",
              icon: (
                <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
            },
          ].map((benefit, index) => (
            <motion.div 
              key={benefit.title} 
              className="group relative"
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -5 }}
              data-cursor-hover
              data-cursor-magnetic="0.1"
            >
              <motion.div 
                className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" 
                }}
              >
                <motion.div 
                  className="text-blue-600"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.5 
                  }}
                >
                  {benefit.icon}
                </motion.div>
              </motion.div>
              <motion.h3 
                className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                {benefit.title}
              </motion.h3>
              <motion.p className="mt-2 text-base leading-7 text-gray-600">
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 