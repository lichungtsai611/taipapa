'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  CalendarIcon, 
  ArrowLongRightIcon, 
  MagnifyingGlassIcon, 
  ChevronDownIcon,
  TagIcon
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Mock data for AI news
const aiNews = [
  {
    id: 1,
    title: "聽吳恩達怎麼說：DeepSeek、Gemini 升級版要用哪個？",
    excerpt: "Google 發表 Gemini 2.5，DeepSeek-V3 模型升級，百度也開放與 OpenAI 一拚的新模型，基礎模型戰爭不再美國獨領風騷，中國已踏入戰場。看在 AI 大師吳恩達眼裡，基礎模型發展對應用層大有益處，但模型不只是科技真空產物，對社會也會產生影響。他如何解讀美中大模型之爭？他國企業該不該用 DeepSeek？他自己團隊選用模型的策略？可用 AI 打造應用嗎 ？吳恩達 3 月 26 日出席 AI EXPO Taiwan 2025 時都有解答。",
    date: "2025-04-03",
    image: "https://img.technews.tw/wp-content/uploads/2025/03/27163522/199833.jpg",
    category: "AI趨勢",
    tags: ["吳恩達", "DeepSeek", "Gemini", "開源AI"],
    url: "https://technews.tw/2025/04/03/ai-expo-taiwan-2025-andrew-yan-tak-ng/",
    featured: true
  },
  {
    id: 2,
    title: "音樂產業正用 AI 革命：人工智慧是解放者也是毀滅者",
    excerpt: "近年來，人工智慧這股風潮吹進音樂產業，從創作到聆聽體驗都帶來不少變化，生成式 AI 不僅能幫音樂人作曲、編曲，還能分析聽眾喜好打造個人化歌單，甚至改變整個產業的商業模式。不過，這股技術浪潮也帶來了不少爭議，有人看好它能讓音樂更普及，有人卻擔心它會搶走音樂人的飯碗，甚至威脅到創作的靈魂。",
    date: "2025-04-03",
    image: "https://img.technews.tw/wp-content/uploads/2025/03/31095112/james-owen-MuIvHRJbjA8-unsplash-800x533.jpg",
    category: "數位創意",
    tags: ["AI音樂", "音樂產業", "創作工具"],
    url: "https://technews.tw/2025/04/03/ai-musical-industry-evolution/",
    featured: false
  },
  {
    id: 3,
    title: "AI 掀起生存戰！研究：沒被 AI 摧毀的公司，將變得更強大",
    excerpt: "根據歐洲中央銀行（ECB）會議上發表的研究，如果一間公司能熬過人工智慧（AI）帶來的顛覆性變革，從長遠來看，AI 將有助於其長期發展。",
    date: "2025-04-02",
    image: "https://img.technews.tw/wp-content/uploads/2024/04/17081719/AI-chip-800x579.jpg",
    category: "企業科技",
    tags: ["AI轉型", "生產力", "數位轉型"],
    url: "https://technews.tw/2025/04/02/ai-adoption-brings-short-term-pain-but-long-term-gains-study-finds/",
    featured: true
  }
];

// Categories for filtering
const categories = [
  "全部分類",
  "AI趨勢",
  "數位創意",
  "企業科技"
];

// Define types for news data
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  url: string;
  featured: boolean;
}

const NewsCard = ({ news, featured = false }: { news: NewsItem, featured?: boolean }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
    >
      <div className="md:flex">
        <div className="md:w-1/3 relative group">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase shadow-lg backdrop-blur-sm">
            {news.category}
          </div>
        </div>
        <div className="md:w-2/3 p-8 relative">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <CalendarIcon className="h-5 w-5 mr-2 text-indigo-500" />
            <span className="font-medium">{news.date}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 bg-gradient-to-r from-indigo-600 to-purple-700 inline-block text-transparent bg-clip-text">
            {news.title}
          </h3>
          <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
            {news.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {news.tags.map((tag: string, index: number) => (
              <span key={index} className="inline-flex items-center text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-100">
                <TagIcon className="h-3 w-3 mr-1.5" />
                {tag}
              </span>
            ))}
          </div>
          <Link href={news.url} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium hover:underline">
            閱讀更多
            <ArrowLongRightIcon className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部分類');
  
  // Filter news based on search and category
  const filteredNews = aiNews.filter(news => {
    const matchesSearch = 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '全部分類' || news.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-100">
            科技趨勢
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              TechNews 科技新報
            </span>
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            掌握AI最新資訊，了解人工智慧如何改變產業未來與工作模式
          </p>
        </motion.div>
        
        {/* Search and filter section */}
        <motion.div 
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="col-span-1 md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="搜尋AI新聞..."
                className="w-full py-4 pl-14 pr-4 text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-5 top-4 h-6 w-6 text-indigo-400" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative">
              <select
                className="w-full py-4 pl-5 pr-10 text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-4 top-4 h-5 w-5 text-indigo-500 pointer-events-none" />
            </div>
          </div>
        </motion.div>
        
        {/* News section */}
        <div className="mb-20">
          <motion.div 
            className="grid grid-cols-1 gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredNews.length > 0 ? (
              filteredNews.map(news => (
                <NewsCard key={news.id} news={news} featured={news.featured} />
              ))
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
                <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg mb-4">沒有找到符合條件的新聞</p>
                <p className="text-gray-700">請嘗試不同的搜尋關鍵字或分類選項</p>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Newsletter subscription section */}
        <motion.div 
          className="mt-24 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden shadow-xl border border-indigo-500/20"
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
              <h3 className="text-3xl font-bold text-white mb-4">訂閱AI新聞電子報</h3>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                每週接收最新AI發展與應用的重要資訊，不錯過任何突破性的技術進展。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="您的電子郵件" 
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