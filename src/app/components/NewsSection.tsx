'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

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

export default function NewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Futuristic tech decoration lines
  const decorationLines = Array.from({ length: 4 }, (_, i) => ({
    width: Math.floor(Math.random() * 60) + 40,
    top: `${Math.floor(Math.random() * 80) + 10}%`,
    left: i % 2 === 0 ? "-10px" : undefined,
    right: i % 2 === 0 ? undefined : "-10px",
    delay: i * 0.5,
    duration: Math.floor(Math.random() * 2) + 3,
    from: i % 2 === 0 ? "purple-500" : "blue-500",
    to: i % 2 === 0 ? "transparent" : "transparent",
  }));

  return (
    <motion.div 
      ref={sectionRef}
      className="relative bg-gray-50 py-28 sm:py-32 lg:py-40 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div 
          className="absolute left-1/2 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-100 opacity-20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute right-1/2 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-100 opacity-20 blur-[100px]"
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
        />
      </div>

      {/* Futuristic tech decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {decorationLines.map((line, index) => (
          <motion.div 
            key={index}
            className={`absolute h-[1px] bg-gradient-to-r from-${line.from}/30 to-${line.to}`}
            style={{
              width: line.width,
              top: line.top,
              left: line.left,
              right: line.right,
            }}
            animate={{
              width: [line.width, line.width * 4, line.width],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: line.delay
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-12">
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
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {news.map((item, index) => (
            <motion.article 
              key={item.id} 
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="absolute inset-0 -z-10 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
                animate={{
                  background: ["linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.4) 60%, rgba(17, 24, 39, 0))", 
                              "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5) 65%, rgba(17, 24, 39, 0.1))"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <motion.span 
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${categoryColors[item.category]} text-white mr-2 shadow-lg`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: `0 0 12px 0 ${categoryColors[item.category]}` 
                  }}
                  layout
                >
                  {item.category}
                </motion.span>
                <time dateTime={item.date} className="mr-8">{item.date}</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
              <motion.h3 
                className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-200 transition-colors duration-300"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Link href={`/news/${item.id}`}>
                  <span className="absolute inset-0" />
                  {item.title}
                </Link>
              </motion.h3>
              <motion.p 
                className="mt-3 text-sm leading-6 text-gray-300 line-clamp-3"
                variants={titleVariants}
              >
                {item.description}
              </motion.p>
              
              {/* Futuristic hover effects */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border border-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  border: `1px solid ${categoryColors[item.category]}30`,
                  boxShadow: `0 0 20px 0 ${categoryColors[item.category]}20 inset, 0 0 10px 0 ${categoryColors[item.category]}15`
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </motion.div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/news"
            className="group relative inline-flex items-center gap-x-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition-all duration-300 hover:ring-gray-900/20 hover:shadow-md overflow-hidden"
          >
            <motion.span 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            查看更多新聞
            <motion.svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
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
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
} 