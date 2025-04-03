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

const resources = [
  {
    title: 'AI入門指南',
    description: '為初學者提供簡單易懂的AI基礎知識，包含基本概念、常見工具和入門應用案例。',
    icon: BookOpenIcon,
    href: '/resources/ai-introduction',
    category: '教材',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'AI工具應用課程',
    description: '一系列線上課程，教您如何在日常工作和生活中應用各種AI工具提升效率。',
    icon: AcademicCapIcon,
    href: '/resources/ai-courses',
    category: '課程',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: '實用AI工具推薦',
    description: '精選各領域實用AI工具，包含文字、圖像、音訊處理等多元應用工具。',
    icon: GlobeAltIcon,
    href: '/resources/ai-tools',
    category: '工具',
    color: 'from-green-500 to-teal-400'
  },
  {
    title: 'AI應用案例分享',
    description: '收集各行業成功導入AI的案例分享，提供實際參考與啟發。',
    icon: DocumentTextIcon,
    href: '/resources/case-studies',
    category: '案例',
    color: 'from-orange-500 to-amber-400'
  },
  {
    title: 'AI技術講座影片',
    description: '由專業講師主講的各類AI技術講座錄影，隨時隨地學習最新AI知識。',
    icon: VideoCameraIcon,
    href: '/resources/video-lectures',
    category: '影片',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'AI新聞與趨勢',
    description: '定期更新的AI產業新聞與技術趨勢分析，掌握AI發展動向。',
    icon: NewspaperIcon,
    href: '/resources/ai-news',
    category: '新聞',
    color: 'from-purple-500 to-indigo-400'
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32 relative w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-100">
            學習成長
          </span>
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
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.title}
              className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-white px-8 pt-10 pb-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${resource.color}`}/>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                {resource.category}
              </div>
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 p-3">
                  <resource.icon className={`h-8 w-8 bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-bold leading-7 text-gray-900 mb-3">
                  <Link href={resource.href} className="hover:text-indigo-600 transition-colors">
                    <span className="absolute inset-0" />
                    {resource.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{resource.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="relative flex items-center gap-x-4">
                  <Link
                    href={resource.href}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center transition-colors"
                  >
                    了解更多
                    <svg
                      className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-24 max-w-none rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 overflow-hidden shadow-xl border border-indigo-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="px-8 py-12 md:px-12 md:py-16 md:flex items-center justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
            <div className="absolute right-20 bottom-10 w-60 h-60 bg-indigo-400 rounded-full opacity-10"></div>
            <div className="absolute left-10 top-40 w-20 h-20 bg-purple-300 rounded-full opacity-20"></div>
            
            <div className="md:w-3/5 mb-8 md:mb-0 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">訂閱AI資源更新</h3>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                訂閱我們的電子報，獲取最新AI學習資源、工具推薦和活動資訊。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="請輸入您的電子郵件" 
                  className="px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto sm:flex-1 shadow-lg"
                />
                <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  訂閱
                </button>
              </div>
              <p className="text-indigo-200 text-sm mt-4">
                我們尊重您的隱私，隨時可以取消訂閱。
              </p>
            </div>
            <div className="md:w-2/5 relative z-10">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white opacity-15 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 