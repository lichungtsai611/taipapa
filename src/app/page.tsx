'use client';

import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import NewsSection from './components/NewsSection';
import ParticlesBackground from './components/ParticlesBackground';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

// 添加節流函數
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

export default function Home() {
  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Reference to the main container to detect when sections come into view
  const mainRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  // 優化過的滑鼠移動處理 - 不再更新狀態，只更新ref
  const handleMouseMove = useCallback(throttle((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mousePositionRef.current = { x: clientX, y: clientY };
    
    // 對於磁性效果的元素 - 只對具有特定屬性的元素應用效果
    const target = e.target as HTMLElement;
    const magnetic = target.getAttribute('data-cursor-magnetic');
    
    if (magnetic) {
      const strength = parseFloat(magnetic);
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      target.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
      target.addEventListener('mouseleave', () => {
        target.style.transform = '';
      }, { once: true });
    }
  }, 16), []);  // 約60fps的更新率
  
  // 處理特殊的游標文字 - 節流處理
  const handleCursorText = useCallback(throttle((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.getAttribute('data-cursor-text');
    // 後續處理...
  }, 100), []); // 降低處理頻率，因為游標文字變化不需要即時反應
  
  // 浮動元素的動畫效果 - 預先計算，避免在渲染時計算
  const [floatingElements, setFloatingElements] = useState([
    { id: 1, x: 10, y: 400, size: 30, color: 'bg-blue-400/30', delay: 0 },
    { id: 2, x: 500, y: 200, size: 50, color: 'bg-purple-400/20', delay: 1 },
    { id: 3, x: 300, y: 500, size: 20, color: 'bg-indigo-400/20', delay: 0.5 },
    { id: 4, x: 400, y: 600, size: 40, color: 'bg-cyan-400/30', delay: 1.5 },
    { id: 5, x: 250, y: 300, size: 25, color: 'bg-violet-400/20', delay: 2 },
  ]);
  
  // 在客戶端更新浮動元素位置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFloatingElements([
        { id: 1, x: 10, y: 400, size: 30, color: 'bg-blue-400/30', delay: 0 },
        { id: 2, x: window.innerWidth - 100, y: 200, size: 50, color: 'bg-purple-400/20', delay: 1 },
        { id: 3, x: window.innerWidth / 3, y: 500, size: 20, color: 'bg-indigo-400/20', delay: 0.5 },
        { id: 4, x: window.innerWidth - 200, y: 600, size: 40, color: 'bg-cyan-400/30', delay: 1.5 },
        { id: 5, x: window.innerWidth / 2, y: 300, size: 25, color: 'bg-violet-400/20', delay: 2 },
      ]);
    }
  }, [isMounted]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // 優化滾動處理函數 - 使用節流
    const handleScroll = throttle(() => {
      if (!mainRef.current) return;
      
      const sections = mainRef.current.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.div 
      ref={mainRef}
      className="overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseOver={handleCursorText}
    >
      {/* AI網格背景 */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(50,100,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      </div>
      
      {/* 浮動科技元素 - 僅在客戶端渲染 */}
      {isMounted && floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className={`fixed rounded-full blur-xl ${el.color} z-0 pointer-events-none`}
          initial={{ x: el.x, y: el.y, opacity: 0 }}
          animate={{ 
            x: [el.x - 20, el.x + 20, el.x - 20],
            y: [el.y - 20, el.y + 20, el.y - 20],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            width: el.size, 
            height: el.size,
            opacity: 0  // 初始設置為不可見，動畫會改變它
          }}
        />
      ))}
      
      {/* Main Content */}
      <ParticlesBackground />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="features">
        <FeatureSection />
      </section>
      
      <section id="news">
        <NewsSection />
      </section>
      
      {/* Quick navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {['hero', 'features', 'news'].map((id, index) => (
          <motion.a
            key={id}
            href={`#${id}`}
            data-cursor-text={id === 'hero' ? '首頁' : id === 'features' ? '特色' : id === 'news' ? '新聞' : ''}
            data-cursor-magnetic="0.2"
            className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${
              activeSection === index 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-blue-400'
            }`}
            whileHover={{ scale: 1.5 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.span 
              className="absolute -inset-2 rounded-full bg-blue-400/20 scale-0 group-hover:scale-100 transition-transform duration-300"
              animate={{ scale: activeSection === index ? [1, 1.4, 1] : 0 }}
              transition={{ 
                duration: 2,
                repeat: activeSection === index ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
