'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpenIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  NewspaperIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// 新增動畫粒子效果
const generateRandomParticles = (count = 8) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2, // 2-10px
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 7 + 3, // 3-10秒
    delay: Math.random() * 2,
  }));
};

// 定義類型
interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface Resource {
  title: string;
  description: string;
  icon: any; // 這裡根據實際情況使用具體的圖標類型
  href: string;
  category: string;
  color: string;
  symbolText: string;
  particles: Particle[];
}

const resources = [
  {
    title: 'AI入門指南',
    description: '為初學者提供簡單易懂的AI基礎知識，包含基本概念、常見工具和入門應用案例。',
    icon: BookOpenIcon,
    href: '/resources/ai-introduction',
    category: '教材',
    color: 'from-blue-500 to-cyan-400',
    symbolText: 'AI',
    particles: generateRandomParticles()
  },
  {
    title: 'AI工具應用課程',
    description: '一系列線上課程，教您如何在日常工作和生活中應用各種AI工具提升效率。',
    icon: AcademicCapIcon,
    href: '/resources/ai-courses',
    category: '課程',
    color: 'from-indigo-500 to-purple-500',
    symbolText: 'ML',
    particles: generateRandomParticles()
  },
  {
    title: '實用AI工具推薦',
    description: '精選各領域實用AI工具，包含文字、圖像、音訊處理等多元應用工具。',
    icon: GlobeAltIcon,
    href: '/resources/ai-tools',
    category: '工具',
    color: 'from-green-500 to-teal-400',
    symbolText: '工具',
    particles: generateRandomParticles()
  },
  {
    title: 'AI應用案例分享',
    description: '收集各行業成功導入AI的案例分享，提供實際參考與啟發。',
    icon: DocumentTextIcon,
    href: '/resources/case-studies',
    category: '案例',
    color: 'from-orange-500 to-amber-400',
    symbolText: '案例',
    particles: generateRandomParticles()
  },
  {
    title: 'AI技術講座影片',
    description: '由專業講師主講的各類AI技術講座錄影，隨時隨地學習最新AI知識。',
    icon: VideoCameraIcon,
    href: '/resources/video-lectures',
    category: '影片',
    color: 'from-red-500 to-pink-500',
    symbolText: '影片',
    particles: generateRandomParticles()
  },
  {
    title: 'AI新聞與趨勢',
    description: '定期更新的AI產業新聞與技術趨勢分析，掌握AI發展動向。',
    icon: NewspaperIcon,
    href: '/resources/ai-news',
    category: '新聞',
    color: 'from-purple-500 to-indigo-400',
    symbolText: '新聞',
    particles: generateRandomParticles()
  },
];

// 資源卡片元件
const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <motion.div
      className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-white px-8 pt-10 pb-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 group"
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
    >
      {/* 頂部色條 */}
      <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${resource.color}`}/>
      
      {/* 分類標籤 */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 z-10">
        {resource.category}
      </div>
      
      {/* 背景裝飾效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 網格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-60"></div>
        
        {/* 動態粒子 */}
        {resource.particles.map((particle: Particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-r ${resource.color} opacity-20`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: particle.delay
            }}
          />
        ))}
        
        {/* 背景符號文字 - hover時顯示 */}
        <motion.div
          className="absolute -bottom-4 -right-4 text-8xl font-bold text-gray-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          initial={{ rotate: -10 }}
          whileHover={{ rotate: 0 }}
        >
          {resource.symbolText}
        </motion.div>
      </div>
      
      <div>
        {/* 圖標容器 - 添加hover效果 */}
        <motion.div 
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 p-3 relative overflow-hidden group-hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {/* 圖標背景動效 */}
          <motion.div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${resource.color} rounded-xl`}
            initial={{ scale: 0 }}
            whileHover={{ 
              scale: 1.2,
              rotate: 15
            }}
            transition={{ duration: 0.5 }}
          />
          
          <resource.icon className={`h-8 w-8 text-${resource.color.split('-')[1].split(' ')[0]} relative z-10`} />
        </motion.div>
        
        {/* 標題 - 添加hover效果 */}
        <motion.h3 
          className="text-xl font-bold leading-7 text-gray-900 mb-3"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link href={resource.href} className="hover:text-indigo-600 transition-colors">
            <span className="absolute inset-0" />
            {resource.title}
          </Link>
        </motion.h3>
        
        <p className="mt-4 text-base leading-7 text-gray-600">{resource.description}</p>
      </div>
      
      <div className="mt-6 flex items-center gap-x-4">
        <div className="relative flex items-center gap-x-4">
          <Link
            href="#footer"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center transition-colors group"
          >
            <span className="relative">
              課程邀約
              <motion.span 
                className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </span>
            <motion.svg
              className="ml-1 h-5 w-5"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </motion.svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ResourcesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32 relative w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, 15, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 25, 0],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center justify-center">
              <svg 
                width="50" 
                height="50" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
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
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-100">
                學習成長
              </span>
            </div>
          </Link>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI學習資源中心
            </span>
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            我們提供多元的AI學習資源和工具，協助您理解、學習並應用人工智慧技術，提升數位時代的競爭力。
          </p>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </motion.div>
      </div>
    </div>
  );
} 