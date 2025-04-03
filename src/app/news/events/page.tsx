'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  UserGroupIcon,
  ArrowLongRightIcon 
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

// Define event type
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

// Mock data for association events
const associationEvents = [
  {
    id: 1,
    title: "實用統計模型",
    description: "專為數據分析領域設計的課程，教授實用統計模型的理論與應用，幫助學員掌握數據分析的基礎工具與方法。",
    date: "2025-03-05",
    time: "09:00 - 17:00",
    location: "NTUDAC",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    attendees: "數據分析師、研究人員、統計學愛好者",
    featured: true,
    url: "/events/practical-statistics",
    status: "past"
  },
  {
    id: 2,
    title: "基礎統計模型",
    description: "介紹統計學的基本概念與模型，適合初學者與希望複習統計基礎的專業人士參與，內容涵蓋描述統計、推論統計等核心知識。",
    date: "2025-05-08",
    time: "09:00 - 17:00",
    location: "NCCUDAC",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    attendees: "學生、教師、初學者",
    featured: false,
    url: "/events/basic-statistics",
    status: "upcoming"
  },
  {
    id: 3,
    title: "生成式 AI 與 ChatGPT 基礎應用",
    description: "探索生成式AI的基礎知識與ChatGPT的實際應用，學習如何有效利用這些工具提升工作效率與創意表達。",
    date: "2025-05-22",
    time: "10:00 - 16:00",
    location: "經濟部經貿人員培訓所",
    image: "https://images.unsplash.com/photo-1711349967160-4173b3fa2c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    attendees: "經濟部人員、企業從業人員、AI愛好者",
    featured: true,
    url: "/events/generative-ai-basics",
    status: "upcoming"
  },
  {
    id: 4,
    title: "進階生成式 AI 應用與多元工具",
    description: "深入探討生成式AI的進階應用場景與多元工具整合，為已掌握基礎知識的學員提供更進階的技術與策略。",
    date: "2025-05-23",
    time: "10:00 - 16:00",
    location: "經濟部經貿人員培訓所",
    image: "https://images.unsplash.com/photo-1702200379393-4528ba921d67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    attendees: "AI專業人士、開發者、企業決策者",
    featured: false,
    url: "/events/advanced-generative-ai",
    status: "upcoming"
  },
  {
    id: 5,
    title: "AI 秒生成設計感爆棚的圖表",
    description: "學習如何利用AI工具快速生成具有專業設計感的數據圖表，大幅提升報告與簡報的視覺吸引力與專業度。",
    date: "2025-05-08",
    time: "13:30 - 17:00",
    location: "新北市工商發展投資策進會",
    image: "https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    attendees: "行銷人員、企業主管、設計師",
    featured: false,
    url: "/events/ai-chart-design",
    status: "upcoming"
  },
  {
    id: 6,
    title: "新興人工智慧技術及產業趨勢商機",
    description: "剖析當前AI技術發展趨勢與市場商機，幫助企業與專業人士把握AI浪潮下的創新與轉型機會。",
    date: "2025-05-14",
    time: "09:30 - 16:30",
    location: "健行科技大學",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    attendees: "企業經營者、投資人、產業研究人員",
    featured: false,
    url: "/events/ai-industry-trends",
    status: "upcoming"
  },
  {
    id: 7,
    title: "AI 秒生成設計感爆棚的圖表",
    description: "專為醫學領域設計的AI圖表生成工作坊，幫助醫療專業人員創建更具說服力的研究成果與臨床數據視覺化圖表。",
    date: "2025-06-11",
    time: "13:00 - 17:00",
    location: "台北醫學大學",
    image: "https://images.unsplash.com/photo-1692607431259-7de54516aa49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
    attendees: "醫學研究人員、醫療工作者、健康產業從業人員",
    featured: false,
    url: "/events/medical-ai-charts",
    status: "upcoming"
  },
  {
    id: 8,
    title: "CANVA 資料視覺化",
    description: "通過CANVA這一直覺易用的設計平台學習資料視覺化技巧，無需專業設計背景也能創建專業級的數據視覺化呈現。",
    date: "2025-07-25",
    time: "09:00 - 16:00",
    location: "台北醫學大學",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    attendees: "醫學專業人員、研究人員、學生",
    featured: false,
    url: "/events/canva-data-visualization",
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
    id: 11,
    title: "解鎖職場探險指南-AI時代求職生存指南",
    description: "提供AI時代職場生存策略與求職技巧，幫助參與者了解如何在AI驅動的就業市場中脫穎而出，掌握未來職場核心競爭力。",
    date: "2025-11-20",
    time: "14:00 - 17:00",
    location: "健行科技大學",
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    attendees: "學生、應屆畢業生、求職者",
    featured: false,
    url: "/events/ai-career-guide",
    status: "upcoming"
  }
];

const EventCard = ({ event, featured = false }: { event: Event, featured?: boolean }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      className={`${featured ? 'col-span-3' : 'col-span-3 md:col-span-1'} bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : 'w-full'} relative group`}>
          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase shadow-lg backdrop-blur-sm">
            {event.status === 'upcoming' ? '即將舉行' : '已結束'}
          </div>
        </div>
        <div className={`${featured ? 'md:w-1/2' : 'w-full'} p-6 relative`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 bg-gradient-to-r from-indigo-600 to-purple-700 inline-block text-transparent bg-clip-text">
            {event.title}
          </h3>
          <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
            {event.description}
          </p>
          <div className="space-y-3 mb-4">
            <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <CalendarIcon className="h-5 w-5 mr-3 text-indigo-500" />
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <ClockIcon className="h-5 w-5 mr-3 text-indigo-500" />
              <span className="font-medium">{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <MapPinIcon className="h-5 w-5 mr-3 text-indigo-500" />
              <span className="font-medium">{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <UserGroupIcon className="h-5 w-5 mr-3 text-indigo-500" />
              <span className="font-medium">{event.attendees}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function EventsPage() {
  // Filter events based on upcoming or past and sort upcoming events by date
  const upcomingEvents = associationEvents
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const pastEvents = associationEvents.filter(event => event.status === 'past');
  
  // Featured events (for both upcoming and past)
  const featuredUpcoming = upcomingEvents.filter(event => event.featured);
  const regularUpcoming = upcomingEvents.filter(event => !event.featured);
  
  const featuredPast = pastEvents.filter(event => event.featured);
  const regularPast = pastEvents.filter(event => !event.featured);
  
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
            活動與研討會
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              協會活動與最新消息
            </span>
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            了解協會最新動態，參與我們舉辦的各類AI相關活動，共同推動台灣AI發展。
          </p>
        </motion.div>
        
        {/* Upcoming events section */}
        <div className="mb-28">
          <motion.div 
            className="flex items-center justify-between mb-12"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              即將舉行的活動
              <div className="absolute -bottom-3 left-0 w-2/3 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </h2>
            {upcomingEvents.length > 3 && (
              <Link href="/events/upcoming" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                查看全部
              </Link>
            )}
          </motion.div>
          
          {upcomingEvents.length > 0 ? (
            <div className="space-y-12">
              {/* Display all upcoming events in a 3-column grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {upcomingEvents.map(event => (
                  <EventCard key={event.id} event={event} featured={false} />
                ))}
              </motion.div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
              <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg mb-4">目前沒有即將舉行的活動</p>
              <p className="text-gray-700">請稍後再查看，或訂閱我們的電子報獲取最新活動通知</p>
            </div>
          )}
        </div>
        
        {/* Past events section */}
        <div className="mb-28">
          <motion.div 
            className="flex items-center justify-between mb-12"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              過往活動回顧
              <div className="absolute -bottom-3 left-0 w-2/3 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </h2>
            {pastEvents.length > 3 && (
              <Link href="/events/past" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                查看全部
              </Link>
            )}
          </motion.div>
          
          {pastEvents.length > 0 ? (
            <div className="space-y-12">
              {/* Display all past events in a 3-column grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {pastEvents.map(event => (
                  <EventCard key={event.id} event={event} featured={false} />
                ))}
              </motion.div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
              <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg mb-4">目前沒有過往活動記錄</p>
              <p className="text-gray-700">請稍後再查看，活動結束後將更新於此處</p>
            </div>
          )}
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
              <h3 className="text-3xl font-bold text-white mb-4">訂閱AI協會活動電子報</h3>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                獲取最新活動通知、行業洞察及專屬會員優惠，不錯過任何AI相關資訊！
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="請輸入您的電子郵件" 
                  className="px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto sm:flex-1 shadow-lg"
                />
                <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  立即訂閱
                </button>
              </div>
              <p className="text-indigo-200 text-sm mt-4">
                您的信息安全對我們很重要，我們承諾不會分享您的個人資料。
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