'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  AcademicCapIcon, 
  WrenchScrewdriverIcon, 
  DocumentTextIcon, 
  NewspaperIcon, 
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowDownCircleIcon,
  ChevronRightIcon,
  LightBulbIcon,
  StarIcon,
  InformationCircleIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8 } 
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

// Circular blob animation for background decorations
const BlobDecoration = ({ className }: { className: string }) => (
  <motion.div 
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{ 
      scale: [1, 1.2, 1],
      rotate: [0, 10, 0],
      opacity: [0.2, 0.3, 0.2]
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity,
      repeatType: "reverse"
    }}
  />
);

// Navigation dots for courses
const CourseNavigation = ({ courses, activeSection }: { courses: any[], activeSection: string }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // 不再更新URL
      // window.history.pushState(null, "", `#${id}`);
      
      // Smooth scroll with header offset
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
        <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {courses.map((course) => (
        <motion.a
          key={course.id}
          href={`#${course.id}`}
          data-cursor-text={course.title}
          data-cursor-magnetic="0.2"
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === course.id 
              ? 'bg-blue-600 scale-125'
              : 'bg-gray-300 hover:bg-blue-400'
          }`}
          whileHover={{ scale: 1.5 }}
          onClick={(e) => handleSmoothScroll(e, course.id)}
        />
      ))}
        </motion.div>
  );
};

// Animated course card image replacement
const CourseImageAnimation = ({ theme, title }: { theme: string, title: string }) => {
  const getGradient = (theme: string) => {
    switch(theme) {
      case 'blue':
        return 'from-blue-400 to-indigo-600';
      case 'purple':
        return 'from-indigo-500 to-purple-600';
      case 'green':
        return 'from-emerald-400 to-cyan-500';
      case 'orange':
        return 'from-orange-400 to-amber-600';
      default:
        return 'from-blue-400 to-indigo-600';
    }
  };

  const getSecondaryGradient = (theme: string) => {
    switch(theme) {
      case 'blue':
        return 'from-cyan-300 to-blue-500';
      case 'purple':
        return 'from-violet-300 to-indigo-500';
      case 'green':
        return 'from-teal-300 to-emerald-500';
      case 'orange':
        return 'from-yellow-300 to-orange-500';
      default:
        return 'from-cyan-300 to-blue-500';
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Moving particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getGradient(theme)}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.4,
              scale: 0.5 + Math.random() * 1
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      {/* Gradient main blob */}
      <motion.div 
        className={`absolute w-48 h-48 rounded-full bg-gradient-to-r ${getGradient(theme)} opacity-40 blur-2xl`}
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "mirror"
        }}
        style={{ left: '40%', top: '40%', transformOrigin: 'center' }}
      />
      
      {/* Secondary gradient blob */}
      <motion.div 
        className={`absolute w-40 h-40 rounded-full bg-gradient-to-r ${getSecondaryGradient(theme)} opacity-30 blur-xl`}
        animate={{ 
          x: [0, -25, 0], 
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
        style={{ right: '30%', bottom: '25%', transformOrigin: 'center' }}
      />

      {/* Small floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Triangle */}
        <motion.div
          className="absolute"
          style={{ 
            left: '25%', 
            top: '20%',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: `20px solid #${theme === 'blue' ? '3b82f6' : theme === 'purple' ? '8b5cf6' : theme === 'green' ? '10b981' : 'f97316'}`,
            opacity: 0.6
          }}
          animate={{
            rotate: [0, 360],
            y: [0, 15, 0],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Square */}
        <motion.div
          className={`absolute w-5 h-5 bg-gradient-to-r ${getSecondaryGradient(theme)} rounded-sm`}
          style={{ 
            right: '20%', 
            top: '30%',
            opacity: 0.6
          }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.7, 0.6]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Circle */}
        <motion.div
          className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${getGradient(theme)}`}
          style={{ 
            left: '65%', 
            bottom: '25%',
            opacity: 0.7
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Plus sign */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ 
            left: '30%', 
            bottom: '30%',
            opacity: 0.7
          }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`w-6 h-1.5 bg-gradient-to-r ${getGradient(theme)} rounded-full`}></div>
          <div className={`w-1.5 h-6 bg-gradient-to-r ${getGradient(theme)} rounded-full absolute`}></div>
        </motion.div>
      </div>
      
      {/* Course icon and text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Icon circle with shadow and glow effect */}
        <motion.div 
          className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 relative`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {/* Glow effect behind icon */}
          <div className={`absolute w-full h-full rounded-full bg-gradient-to-r ${getGradient(theme)} opacity-20 blur-md`}></div>
          
          {/* Center gradient circle with icon */}
          <motion.div 
            className={`w-14 h-14 rounded-full bg-gradient-to-r ${getGradient(theme)} flex items-center justify-center text-white shadow-md relative z-10`}
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {theme === 'blue' && <AcademicCapIcon className="h-7 w-7" />}
            {theme === 'purple' && <VideoCameraIcon className="h-7 w-7" />}
            {theme === 'green' && <WrenchScrewdriverIcon className="h-7 w-7" />}
            {theme === 'orange' && <NewspaperIcon className="h-7 w-7" />}
          </motion.div>
        </motion.div>
        
        {/* Course title with animated gradient border */}
        <div className="relative animate-float">
          <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${getGradient(theme)} blur-md opacity-50 animate-pulse-custom`}></div>
          
          <motion.div 
            className="relative bg-white/90 backdrop-blur-sm px-5 py-2 rounded-lg shadow-sm border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-sm font-medium text-gray-800 max-w-[180px] text-center">
              {title}
            </p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Light ray effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className={`absolute top-1/2 left-1/2 w-[200%] h-1 bg-gradient-to-r ${getGradient(theme)} opacity-40 blur-sm transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow`}></div>
        <div className={`absolute top-1/2 left-1/2 w-1 h-[200%] bg-gradient-to-b ${getGradient(theme)} opacity-40 blur-sm transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow`}></div>
      </div>
      
      {/* Subtle vignette overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.2) 100%)'
        }}
      ></div>
    </div>
  );
};

const CourseCard = ({ course, index }: { course: any, index: number }) => {
  return (
              <motion.div 
                key={course.id} 
      id={course.id}
      className="scroll-mt-36 mb-24 md:mb-32"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        offscreen: { y: 100, opacity: 0 },
        onscreen: { 
          y: 0, 
          opacity: 1,
          transition: { duration: 0.8, delay: index * 0.1 } 
        }
      }}
    >
      <div className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white">
        <div className="md:flex">
          {/* Animated course visual instead of image */}
          <motion.div 
            className="md:w-2/5 h-64 md:h-auto relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <CourseImageAnimation theme={course.theme} title={course.title} />
          </motion.div>
          
          {/* Course details */}
          <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
            <div className="mb-4 flex justify-between items-start">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              
              {/* Course metadata */}
              <div className="flex flex-col items-end">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      {course.level}
                    </span>
                  </div>
                </div>
            
            <p className="text-gray-600 mb-6">{course.description}</p>
            
            {/* Feature list */}
            <div className="mb-6 flex-grow">
              <h4 className="font-medium text-gray-900 mb-3">課程重點：</h4>
              <ul className="space-y-2">
                {course.features.slice(0, 4).map((feature: string, i: number) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
                  </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-auto">
                    <Link 
                href="#invitation" 
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                    >
                <InformationCircleIcon className="w-4 h-4 mr-2" />
                      課程詳情
                    </Link>
            </div>
          </div>
                  </div>
                </div>
              </motion.div>
  );
};

const InvitationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      id="plan" 
      ref={ref}
      className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-xl p-10 border border-blue-100/50 mb-20 scroll-mt-36 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-400 rounded-full opacity-5"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-400 rounded-full opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,rgba(255,255,255,0)_60%)]"></div>
      </div>
      
      <motion.div 
        className="relative z-10"
        variants={fadeIn}
      >
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg mb-6">
            <LightBulbIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            精選課程方案
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-center max-w-2xl">
            依據您的需求選擇最適合的課程方案，從個人進修到企業培訓，我們都能提供專業且客製化的服務
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {[
            {
              title: "企業內訓",
              description: "為您的團隊量身打造專屬訓練課程，提升工作效率與競爭力",
              icon: <UserGroupIcon className="h-8 w-8" />,
              color: "from-blue-600 to-blue-800",
              features: [
                "客製化課程內容",
                "彈性時間安排",
                "實際案例演練",
                "依企業需求調整教學方向",
                "提供課後諮詢服務"
              ]
            },
            {
              title: "公開課程",
              description: "定期舉辦多元主題公開課程，讓您隨時學習最新技能",
              icon: <CalendarIcon className="h-8 w-8" />,
              color: "from-indigo-600 to-purple-600",
              features: [
                "多樣化課程主題",
                "小班制精緻教學",
                "實作演練與互動",
                "認識各領域專業人士",
                "課程證書頒發"
              ]
            },
            {
              title: "單位邀請",
              description: "學校、協會、社團等單位專屬課程，打造知識交流平台",
              icon: <AcademicCapIcon className="h-8 w-8" />,
              color: "from-purple-600 to-pink-600",
              features: [
                "針對特定族群設計課程",
                "理論與實務並重",
                "多元互動教學",
                "跨領域知識整合",
                "講師資源推薦"
              ]
            }
          ].map((item, index) => (
        <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 group relative overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:h-2"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 transition-all duration-500 group-hover:opacity-30"></div>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md`}
                  whileHover={{ rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-center mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
              
              <ul className="space-y-3 relative">
                {item.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start" 
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className={`p-1 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0 mr-2 mt-0.5`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircleIcon className="h-3 w-3 text-white" />
                    </motion.div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-8 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                    <Link 
                  href="/#invitation"
                  className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${item.color} shadow-md hover:shadow-lg transition-shadow duration-300`}
                    >
                  了解更多
                    </Link>
              </motion.div>
              </motion.div>
            ))}
          </div>


      </motion.div>
        </motion.div>
  );
};

export default function CoursesPage() {
  const [filter, setFilter] = useState<string>("all");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeSection, setActiveSection] = useState("courses-intro");
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);
              // 移除自動更新URL哈希的行為
              // window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    
    document.querySelectorAll('[id]').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  // Special effect for handling direct URL with hash and sessionStorage target
  useEffect(() => {
    let scrollAttempts = 0;
    const maxAttempts = 5;
    
    const handleInitialScroll = () => {
      // First, always scroll to top of page briefly
      window.scrollTo(0, 0);
      
      // Check for stored target from Header component
      const storedTarget = sessionStorage.getItem('courseScrollTarget');
      const targetId = storedTarget || (window.location.hash ? window.location.hash.substring(1) : null);
      
      // Clear stored target
      if (storedTarget) {
        sessionStorage.removeItem('courseScrollTarget');
      }
      
      // If we have a target, scroll to it after a brief delay
      if (targetId) {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          
          if (element) {
            // Cancel any previous scroll animations
            window.stop();
            
            // Force calculation of element position
            element.getBoundingClientRect();
            
            // Apply offset to account for fixed header
            const yOffset = -120;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            
            // Smooth scroll to target
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
            
            // 只有在用戶直接訪問帶有錨點的URL時才保留錨點
            // 如果是從其他頁面導航過來的，不添加錨點到URL
            // if (!window.location.hash || window.location.hash.substring(1) !== targetId) {
            //   window.history.pushState(null, '', `#${targetId}`);
            // }
            
            return true; // Successfully scrolled
          }
          
          // Element not found yet, try again if haven't exceeded max attempts
          if (scrollAttempts < maxAttempts) {
            scrollAttempts++;
            setTimeout(handleInitialScroll, 200 * scrollAttempts); // Increasing delay
            return false;
          }
        }, 300);
      }
      
      return true;
    };
    
    // Start the process when component is mounted
    handleInitialScroll();
    
  }, []);
  
  // Handle hash changes after initial load
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // Always show top of page briefly
          window.scrollTo(0, 0);
          
          // Then scroll to target after a brief delay
          setTimeout(() => {
            // Apply offset to account for fixed header
            const yOffset = -120;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
          }, 300);
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  useEffect(() => {
    // Check if we have a stored scroll target from Header component
    const scrollTarget = sessionStorage.getItem('courseScrollTarget');
    if (scrollTarget) {
      // First ensure we're at the top of the page to see the header content
      window.scrollTo(0, 0);
      
      // Wait a moment for the page to render before scrolling
      setTimeout(() => {
        const targetElement = document.getElementById(scrollTarget);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the stored target
        sessionStorage.removeItem('courseScrollTarget');
      }, 500);
    }
  }, []);
  
  const courses = [
    {
      id: "courses-intro",
      title: "AI 工具基礎課程",
      description: "掌握 AI 工具的基本技能，學習如何運用 AI 提升工作效率、創意思考和解決問題的能力。",
      theme: "blue", // Theme for animation
      level: "入門到進階",
      duration: "8週課程",
      rating: 4.8,
      features: [
        "多種 AI 工具實際操作專案",
        "每週與業界專家線上直播互動",
        "專業導師個人化指導與回饋",
        "完成課程後頒發結業證書"
      ]
    },
    {
      id: "courses-ai-video",
      title: "AI 影片製作",
      description: "利用 AI 技術創建專業影片，學習腳本撰寫、配音生成、剪輯與發布，運用最新的 AI 工具。",
      theme: "purple", // Theme for animation
      level: "進階課程",
      duration: "10週課程",
      rating: 4.9,
      features: [
        "使用高級 AI 影片生成工具",
        "創建引人入勝的 AI 輔助內容指導",
        "建立個人 AI 影片製作作品集",
        "一對一專業指導課程"
      ]
    },
    {
      id: "courses-web-design",
      title: "AI 網頁設計",
      description: "透過 AI 輔助更快設計出令人驚艷的網站，掌握 UI/UX 原則並應用 AI 工具實現設計。",
      theme: "green", // Theme for animation
      level: "適合各級學員",
      duration: "6週課程",
      rating: 4.7,
      features: [
        "設計系統與元件庫建置",
        "響應式網頁設計技巧",
        "AI 輔助原型設計與迭代",
        "客戶展示策略與技巧"
      ]
    },
    {
      id: "courses-plan",
      title: "AI 數位行銷",
      description: "革新您的行銷策略，學習如何使用 AI 工具創建活動、分析數據並優化績效。",
      theme: "orange", // Theme for animation
      level: "初學者到專家",
      duration: "12週課程",
      rating: 4.6,
      features: [
        "AI 驅動的市場研究技術",
        "自動化內容創建工作流程",
        "績效分析與優化策略",
        "多渠道行銷活動管理"
      ]
    }
  ];
  
  return (
    <div className="courses-page bg-gradient-to-b from-gray-50 to-white py-12 pt-28 md:py-20 md:pt-36 relative overflow-hidden">
      {/* Background decorations */}
      <BlobDecoration className="bg-blue-400/20 w-[500px] h-[500px] top-0 right-0 -translate-x-1/3 -translate-y-1/3" />
      <BlobDecoration className="bg-indigo-400/20 w-[600px] h-[600px] bottom-0 left-0 translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Course navigation */}
      <CourseNavigation courses={courses} activeSection={activeSection} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-20 scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.3
              } 
            }
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            專為<span className="text-blue-600">現代專業人士</span>打造的 AI 課程
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            透過我們精心設計的課程提升您的技能。學習 AI 工具的實際應用，改變您的工作方式。
          </p>
        </motion.div>
        
        {/* Course listings */}
        <div className="mb-20">
          {courses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              index={index} 
            />
          ))}
        </div>
        
        <InvitationSection />
      </div>
    </div>
  );
} 