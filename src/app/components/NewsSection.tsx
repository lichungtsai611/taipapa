'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  CalendarIcon, 
  MapPinIcon, 
  UserGroupIcon,
} from '@heroicons/react/24/outline';

// 將類型定義放在本地
type NewsCategory = '活動' | '合作' | '服務';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: NewsCategory;
  imageUrl: string;
  readTime: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  attendees: string;
  featured: boolean;
  url: string;
  status: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    title: '2023台灣AI技術應用高峰會圓滿落幕',
    description: '本次高峰會匯集國內外AI領域專家，分享最新AI技術發展與實務應用案例，吸引超過500位產學專業人士參與。',
    date: '2023年12月15日',
    category: '活動',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    readTime: '3 分鐘',
  },
  {
    id: 2,
    title: '本協會與台灣科技大學簽署產學合作備忘錄',
    description: '為促進AI技術研發與人才培育，本協會與台灣科技大學簽署產學合作MOU，共同推動AI技術的研究與實務應用。',
    date: '2023年11月20日',
    category: '合作',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
    readTime: '4 分鐘',
  },
  {
    id: 3,
    title: '企業AI轉型免費諮詢服務正式上線',
    description: '本協會推出企業AI轉型免費諮詢服務，由AI專家團隊為企業提供專業建議，協助企業評估AI導入的可行性與效益。',
    date: '2023年10月5日',
    category: '服務',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    readTime: '2 分鐘',
  },
];

const categoryColors: Record<NewsCategory, string> = {
  '活動': 'bg-blue-600',
  '合作': 'bg-green-600',
  '服務': 'bg-purple-600',
};

const categoryGlows: Record<NewsCategory, string> = {
  '活動': 'shadow-blue-400/30',
  '合作': 'shadow-green-400/30',
  '服務': 'shadow-purple-400/30',
};

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.7
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

// EventCard 組件 - 從events頁面移植過來
const EventCard = ({ event }: { event: Event }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  // 根據活動標題生成顏色
  const generateGradient = (title: string) => {
    // 基於標題的簡單哈希生成不同的漸變顏色
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue1 = hash % 360;
    const hue2 = (hue1 + 40) % 360;
    const hue3 = (hue2 + 40) % 360;
    
    return {
      gradient: `linear-gradient(135deg, hsl(${hue1}, 80%, 65%), hsl(${hue2}, 80%, 45%))`,
      accent: `hsl(${hue3}, 80%, 45%)`,
      light: `hsl(${hue1}, 80%, 90%)`,
    };
  };
  
  const { gradient, accent, light } = generateGradient(event.title);
  
  return (
    <motion.div
      ref={cardRef}
      className="col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
    >
      <div>
        <div className="relative group h-60" style={{ backgroundColor: light }}>
          {/* 使用動畫背景而非圖片 */}
          <div 
            className="absolute inset-0 opacity-90 transition-all duration-500 group-hover:opacity-100"
            style={{ background: gradient }}
          >
            {/* 添加裝飾性圖形 */}
            <motion.div 
              className="absolute top-5 left-5 w-12 h-12 rounded-full opacity-30 bg-white"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute bottom-8 right-8 w-20 h-20 rounded-full opacity-20 bg-white"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            
            {/* 動畫網格背景 */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            {/* 波浪動畫 */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 h-16 opacity-30"
              style={{
                background: "linear-gradient(0deg, rgba(255,255,255,0.4) 0%, transparent 100%)"
              }}
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* 浮動技術標籤 */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold opacity-10"
              animate={{
                opacity: [0.05, 0.1, 0.05],
                scale: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              AI
            </motion.div>
          </div>
          
          {/* 活動狀態標籤 */}
          <div className="absolute top-4 left-4 bg-white text-gray-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase shadow-lg z-10 flex items-center space-x-2">
            {event.status === 'upcoming' ? (
              <>
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>即將舉行</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <span>已結束</span>
              </>
            )}
          </div>
          
          {/* 活動標題以白色顯示在背景上 */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <motion.h3 
              className="text-2xl font-bold text-white drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {event.title}
            </motion.h3>
          </div>
        </div>
        
        <div className="p-6 relative">
          <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
            {event.description}
          </p>
          <div className="space-y-3 mb-4">
            <motion.div 
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CalendarIcon className="h-5 w-5 mr-3 text-indigo-500" />
              <span className="font-medium">{event.date}</span>
            </motion.div>
            <motion.div 
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MapPinIcon className="h-5 w-5 mr-3 text-indigo-500" />
              <span className="font-medium">{event.location}</span>
            </motion.div>
            <motion.div 
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <UserGroupIcon className="h-5 w-5 mr-3 text-indigo-500" />
              <span className="font-medium">{event.attendees}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function NewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  
  // 獲取最新活動數據
  useEffect(() => {
    async function fetchEvents() {
      try {
        // 在實際應用中，這裡會是一個API調用
        // 由於我們無法直接訪問服務器文件，模擬從/news/events/獲取數據
        // 這裡使用硬編碼的數據，這些數據是從/news/events/page.tsx中複製的
        const associationEvents = [
          {
            id: 11,
            title: "解鎖職場探險指南-AI時代求職生存指南",
            description: "提供AI時代職場生存策略與求職技巧，幫助參與者了解如何在AI驅動的就業市場中脫穎而出，掌握未來職場核心競爭力。",
            date: "2025-05-16",
            time: "14:00 - 17:00",
            location: "健行科技大學",
            image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            attendees: "學生、應屆畢業生、求職者",
            featured: false,
            url: "/events/ai-career-guide",
            status: "upcoming"
          },
          {
            id: 10,
            title: "AI 時代來臨～從跨域尋找新思維",
            description: "探索AI跨領域融合的創新思維與應用模式，激發參與者跳脫傳統框架，發掘AI與各行業結合的無限可能。",
            date: "2025-10-14",
            time: "09:30 - 16:30",
            location: "宜蘭縣政府",
            image: "https://images.unsplash.com/photo-1673469747764-3968710de205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            attendees: "公務人員、教育工作者、創新創業者",
            featured: false,
            url: "/events/ai-cross-domain-thinking",
            status: "upcoming"
          },
          {
            id: 9,
            title: "AI 人工智慧的發展趨勢及產業運用",
            description: "深入探討AI發展的最新趨勢及其在各行業的創新應用，幫助求職者與企業了解AI時代的職場需求與機會。",
            date: "2025-09-05",
            time: "13:30 - 17:00",
            location: "新北市政府就業服務處",
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            attendees: "求職者、職涯轉換者、企業HR",
            featured: true,
            url: "/events/ai-industry-applications",
            status: "upcoming"
          }
        ];
        
        // 獲取最新的三個活動（已經按日期排序）
        setEvents(associationEvents);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-tr from-purple-50 via-white to-blue-50 relative" ref={sectionRef}>
      {/* 網格裝飾背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
      
      {/* 藍色光球裝飾 */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute right-0 bottom-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
              <span>最新動態</span>
              <motion.div 
                className="ml-2 h-1.5 w-1.5 rounded-full bg-blue-700"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8"
            variants={titleVariants}
          >
            最新消息
          </motion.h2>
          <motion.p 
            className="mt-8 text-xl leading-8 text-gray-600"
            variants={titleVariants}
          >
            了解協會最新動態、活動資訊與AI發展趨勢
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {loading ? (
            // 載入中狀態顯示
            Array(3).fill(0).map((_, index) => (
              <motion.div 
                key={index} 
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-200 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="animate-pulse flex flex-col space-y-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </motion.div>
            ))
          ) : (
            // 顯示活動卡片
            events.map(event => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/news/events" className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:-translate-y-1">
            查看更多活動
          </Link>
        </div>
      </div>
    </div>
  );
} 