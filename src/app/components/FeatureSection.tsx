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
      className="relative bg-white py-28 sm:py-32 lg:py-40 overflow-hidden"
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
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-blue-600 mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            協會任務
          </motion.h2>
          <motion.p 
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            全方位推動
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              style={{ backgroundSize: "200% 200%" }}
              animate={{ 
                backgroundPosition: ['0% center', '100% center', '0% center'] 
              }}
              transition={gradientTransition}
            > AI普及應用</motion.span>
          </motion.p>
          <motion.p 
            className="mt-8 text-xl leading-8 text-gray-600"
            variants={titleVariants}
          >
            台灣人工智慧實務應用推廣協會致力於協助全民理解並運用AI工具，
            提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
          </motion.p>
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