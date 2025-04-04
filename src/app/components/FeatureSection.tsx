'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AcademicCapIcon,
  BoltIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  UsersIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: '教育推廣',
    description: '辦理人工智慧教育課程、講座、研討會與工作坊，促進全民AI素養。',
    icon: AcademicCapIcon,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: '學習資源',
    description: '出版與提供人工智慧應用之教材、研究與數位學習資源。',
    icon: BookOpenIcon,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: '實務應用',
    description: '推廣AI技術於教育、生活、職場與產業上的實務應用。',
    icon: BoltIcon,
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'AI導入輔導',
    description: '協助個人與組織導入AI工具，提升工作效率與創新能力。',
    icon: BuildingOffice2Icon,
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'AI倫理推廣',
    description: '提升社會對AI倫理、法律、資料保護與風險意識之認知。',
    icon: ShieldCheckIcon,
    color: 'from-red-400 to-red-600',
  },
  {
    name: '國際交流',
    description: '促進國內外在人工智慧應用領域的經驗交流與跨界合作。',
    icon: GlobeAltIcon,
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: '資源平台',
    description: '建立AI應用資源平台，分享AI工具、案例與學習管道。',
    icon: ServerIcon,
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    name: '支援轉型',
    description: '支援政府、企業與學校推動AI普及教育與轉型計畫。',
    icon: UsersIcon,
    color: 'from-pink-400 to-pink-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeatureSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Gradient animation values
  const gradientTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "linear" as const
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-blue-50 via-white to-indigo-50 py-28 sm:py-32 lg:py-40 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background decoration with animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div 
          className="absolute right-1/2 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-100 opacity-20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div 
          className="absolute left-1/2 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-100 opacity-20 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        ></motion.div>
        
        {/* Enhanced background animations */}
        <motion.div 
          className="absolute left-0 top-1/4 w-full h-[600px] opacity-40 -z-10"
          style={{
            background: "linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(99, 102, 241, 0.05) 100%)"
          }}
          animate={{
            backgroundPosition: ['0% center', '100% center', '0% center']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circle 1 */}
          <motion.div
            className="absolute h-32 w-32 rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 backdrop-blur-3xl"
            style={{ left: '5%', top: '10%' }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating rectangle 1 */}
          <motion.div
            className="absolute h-40 w-24 rounded-xl bg-gradient-to-t from-purple-400/10 to-transparent backdrop-blur-3xl"
            style={{ right: '10%', top: '15%' }}
            animate={{
              y: [0, 40, 0],
              x: [0, -20, 0],
              rotate: [0, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Floating triangle (simulated with CSS) */}
          <motion.div
            className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-b-[80px] border-b-indigo-400/10 border-r-[50px] border-r-transparent backdrop-blur-xl"
            style={{ left: '25%', bottom: '15%' }}
            animate={{
              y: [0, -25, 0],
              x: [0, 25, 0],
              rotate: [0, 30, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Digital circuit pattern - Horizontal lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"
              style={{ 
                top: `${20 + i * 15}%`, 
                left: '5%', 
                right: '5%',
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Digital circuit pattern - Vertical lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute w-[1px] bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent"
              style={{ 
                left: `${30 + i * 20}%`, 
                top: '15%', 
                bottom: '15%',
              }}
              animate={{
                opacity: [0.1, 0.25, 0.1],
                scaleX: [1, 1.5, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7
              }}
            />
          ))}
          
          {/* Digital nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute h-2 w-2 rounded-full bg-blue-400/30"
              style={{ 
                left: `${15 + i * 10}%`, 
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                boxShadow: [
                  '0 0 0px rgba(96, 165, 250, 0)',
                  '0 0 10px rgba(96, 165, 250, 0.3)',
                  '0 0 0px rgba(96, 165, 250, 0)'
                ],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div 
          className="mx-auto max-w-3xl text-center relative p-8 rounded-2xl backdrop-blur-sm"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Animated border effect - 確保邊框完整顯示 */}
          <motion.div 
            className="absolute inset-0 rounded-2xl -z-10 opacity-40"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #6366f1, #3b82f6)',
              backgroundSize: '300% 300%',
            }}
            animate={{
              backgroundPosition: ['0% center', '100% center', '0% center'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* 內部背景使用相同的圓角大小 */}
          <motion.div className="absolute inset-[1px] rounded-2xl bg-white/80 -z-10" />
          
          <motion.div
            className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 mb-4 border border-blue-200"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ['0 0 0 rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.3)', '0 0 0 rgba(59, 130, 246, 0)']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <motion.h2 
              className="text-base font-semibold leading-7 text-blue-600"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              創新使命
            </motion.h2>
          </motion.div>
          <motion.p 
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            讓
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              style={{ backgroundSize: "200% 200%" }}
              animate={{ 
                backgroundPosition: ['0% center', '100% center', '0% center'] 
              }}
              transition={gradientTransition}
            > AI成為你的生活管理者</motion.span>
          </motion.p>
          <motion.p 
            className="mt-8 text-xl leading-8 text-gray-700"
            variants={titleVariants}
          >
            簡化決策、提升效率、釋放潛能。
            我們致力讓AI成為你的得力助手，為生活與工作帶來前所未有的便利與價值。
          </motion.p>
          
          {/* Animated highlights */}
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
            animate={{
              width: ['6rem', '12rem', '6rem'],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.div 
          className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="relative pl-16">
                  <motion.div 
                    className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-rotate-6`}
                    whileHover={{ 
                      rotate: -6,
                      scale: 1.1,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    initial={{ rotate: 0 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: index * 0.5
                      }}
                      className="absolute inset-0 rounded-xl opacity-50 bg-gradient-to-br from-white/20 to-transparent"
                    ></motion.div>
                    <feature.icon className="h-6 w-6 text-white relative z-10" aria-hidden="true" />
                  </motion.div>
                  <motion.dt 
                    className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                  >
                    {feature.name}
                  </motion.dt>
                  <motion.dd 
                    className="mt-3 text-base leading-7 text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                  >
                    {feature.description}
                  </motion.dd>
                </div>
                <motion.div 
                  className="absolute inset-0 -z-10 rounded-2xl transition-colors duration-300 group-hover:bg-blue-50/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Futuristic code lines */}
          <motion.div 
            className="absolute -right-10 top-40 h-[1px] w-40 bg-gradient-to-r from-transparent to-blue-500/30"
            animate={{
              width: [40, 160, 40],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0
            }}
          />
          <motion.div 
            className="absolute -left-10 top-1/3 h-[1px] w-60 bg-gradient-to-r from-purple-500/30 to-transparent"
            animate={{
              width: [60, 240, 60],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute -right-10 bottom-1/4 h-[1px] w-40 bg-gradient-to-r from-transparent to-green-500/30"
            animate={{
              width: [40, 160, 40],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>
      </div>
    </motion.div>
  );
} 