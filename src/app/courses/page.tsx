'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserGroupIcon, AcademicCapIcon, CheckIcon } from '@heroicons/react/24/outline';

// Mock data for courses
const courses = [
  {
    id: 1,
    title: 'AI基礎入門課程',
    description: '針對AI初學者設計的基礎課程，介紹人工智能的核心概念、應用領域和發展趨勢。不需要程式設計背景，適合各行業專業人士了解AI如何應用於其領域。',
    level: '初級',
    duration: '12小時',
    format: '線上課程',
    sessions: 6,
    price: 'NT$4,800',
    startDate: '2023年9月15日',
    instructor: '林教授',
    category: 'AI基礎',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop',
    topics: [
      'AI發展歷史與現況',
      '機器學習基本原理',
      '深度學習簡介',
      '自然語言處理應用',
      '電腦視覺應用',
      'AI倫理與隱私議題',
    ],
    benefits: [
      '獲得AI領域的基礎知識',
      '了解AI在各行業的應用場景',
      '能夠評估AI技術對自身領域的潛在影響',
      '具備與AI專家溝通的基本語言',
    ],
  },
  {
    id: 2,
    title: '生成式AI實務應用',
    description: '本課程聚焦於當前最熱門的生成式AI技術，包括文本生成、圖像生成和音樂生成等。學員將學習如何有效使用ChatGPT、Midjourney等工具，並了解如何將這些技術整合到工作流程中。',
    level: '中級',
    duration: '16小時',
    format: '實體課程',
    sessions: 4,
    price: 'NT$8,500',
    startDate: '2023年10月7日',
    instructor: '王博士',
    category: '生成式AI',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1675271591211-930cbaf08d26?q=80&w=2670&auto=format&fit=crop',
    topics: [
      '生成式AI技術概述',
      'Large Language Models原理與應用',
      'Prompt Engineering最佳實踐',
      '圖像生成技術與工具',
      '內容創作與AI輔助工作流程',
      '生成式AI的商業應用案例',
    ],
    benefits: [
      '掌握高效的Prompt設計技巧',
      '了解如何將AI工具整合到創意流程',
      '提高工作效率和創意產出',
      '能夠評估和選擇適合自身需求的AI工具',
    ],
  },
  {
    id: 3,
    title: '產業AI轉型策略',
    description: '專為企業決策者和管理層設計的策略課程，探討如何規劃和實施AI轉型策略。課程涵蓋技術評估、資源配置、人才培養和變革管理等關鍵議題。',
    level: '高級',
    duration: '20小時',
    format: '混合課程',
    sessions: 5,
    price: 'NT$12,000',
    startDate: '2023年11月4日',
    instructor: '陳執行長',
    category: '企業策略',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    topics: [
      'AI轉型策略制定框架',
      '企業AI成熟度評估',
      'AI技術選型與整合路徑',
      '數據策略與數據治理',
      'AI專案管理與ROI評估',
      '人才策略與組織文化建設',
      '變革管理與實施路線圖',
    ],
    benefits: [
      '制定符合企業需求的AI策略',
      '評估和選擇適合的AI技術和解決方案',
      '規劃AI轉型的實施路線',
      '建立AI人才培養和留任策略',
      '管理AI轉型過程中的變革和風險',
    ],
  },
  {
    id: 4,
    title: 'Python機器學習實務',
    description: '這門課程專注於使用Python實現機器學習算法。學員將從基礎開始，學習數據處理、模型訓練、評估和部署的完整流程。課程包括大量實操練習和真實案例分析。',
    level: '中級',
    duration: '24小時',
    format: '實體課程',
    sessions: 8,
    price: 'NT$9,600',
    startDate: '2023年9月23日',
    instructor: '張博士',
    category: '程式開發',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop',
    topics: [
      'Python數據分析基礎',
      '機器學習算法概述',
      '監督學習：分類與迴歸',
      '非監督學習：聚類與降維',
      '模型評估與優化',
      '特徵工程與選擇',
      '實戰項目：預測分析',
    ],
    benefits: [
      '掌握Python數據分析技能',
      '理解並應用常見機器學習算法',
      '能夠從數據中提取有價值的見解',
      '建立端到端機器學習解決方案',
    ],
  },
  {
    id: 5,
    title: 'AI專案管理實務',
    description: '本課程針對需要管理AI專案的專業人士，提供從需求分析、資源規劃到專案執行和評估的全方位指導。特別關注AI專案的獨特挑戰和解決策略。',
    level: '中高級',
    duration: '16小時',
    format: '線上課程',
    sessions: 4,
    price: 'NT$7,500',
    startDate: '2023年10月12日',
    instructor: '林專案總監',
    category: '專案管理',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2670&auto=format&fit=crop',
    topics: [
      'AI專案特性與挑戰',
      '需求分析與範圍定義',
      '資源評估與團隊組建',
      'AI專案時程與成本管理',
      '數據獲取與品質管理',
      '風險管理與應對策略',
      '專案成效評估方法',
    ],
    benefits: [
      '了解AI專案的獨特性和挑戰',
      '制定合理的AI專案計劃和時程',
      '有效管理跨領域AI團隊',
      '處理AI專案中的數據和模型相關問題',
      '評估AI專案的商業價值和投資回報',
    ],
  },
  {
    id: 6,
    title: 'AI倫理與法規遵循',
    description: '隨著AI技術廣泛應用，相關的倫理和法規問題日益重要。本課程探討AI應用中的倫理考量、隱私保護、公平性和法規遵循等關鍵議題，幫助組織負責任地開發和部署AI系統。',
    level: '進階',
    duration: '12小時',
    format: '線上課程',
    sessions: 3,
    price: 'NT$6,800',
    startDate: '2023年11月18日',
    instructor: '蔡律師',
    category: '法規遵循',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop',
    topics: [
      'AI倫理框架與原則',
      '數據隱私和保護',
      'AI系統的公平性和偏見問題',
      '透明度與可解釋性',
      '全球AI法規概況',
      '台灣AI法規環境',
      'AI治理與風險管理',
    ],
    benefits: [
      '了解AI應用中的關鍵倫理考量',
      '識別和減輕AI系統中的偏見',
      '設計符合隱私保護要求的AI解決方案',
      '建立負責任的AI治理框架',
      '確保AI應用符合相關法規要求',
    ],
  },
];

// Get unique categories
const categories = Array.from(new Set(courses.map(course => course.category)));

// Get unique levels
const levels = Array.from(new Set(courses.map(course => course.level)));

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [activeLevel, setActiveLevel] = useState('全部');
  
  // Filter courses based on active filters
  const filteredCourses = courses.filter(course => {
    const categoryMatch = activeCategory === '全部' || course.category === activeCategory;
    const levelMatch = activeLevel === '全部' || course.level === activeLevel;
    return categoryMatch && levelMatch;
  });
  
  // Get featured courses
  const featuredCourses = courses.filter(course => course.featured);

  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI培訓課程</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            無論您是想要了解AI基礎知識，還是深入特定AI技術領域，我們提供全面的課程，
            助您掌握人工智能技能，應對數位轉型帶來的挑戰和機遇。
          </p>
        </motion.div>

        {/* Featured courses section */}
        <motion.div 
          className="mx-auto mt-16 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">熱門課程</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {featuredCourses.map((course, idx) => (
              <motion.div 
                key={course.id} 
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.coverImage} 
                    alt={course.title} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {course.category}
                    </span>
                    <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-600 line-clamp-3">{course.description}</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <ClockIcon className="mr-1.5 h-4 w-4 text-gray-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1.5 h-4 w-4 text-gray-400" />
                      {course.startDate}
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="mr-1.5 h-4 w-4 text-gray-400" />
                      {course.format}
                    </div>
                    <div className="flex items-center font-medium text-blue-600">
                      {course.price}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link 
                      href={`/courses/${course.id}`} 
                      className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      課程詳情
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All courses section with filters */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">所有課程</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <label htmlFor="category" className="sr-only">類別</label>
                <select
                  id="category"
                  name="category"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  <option>全部</option>
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="level" className="sr-only">難度</label>
                <select
                  id="level"
                  name="level"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                >
                  <option>全部</option>
                  {levels.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredCourses.map((course, idx) => (
              <motion.div 
                key={course.id} 
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * (idx % 6) }}
                viewport={{ once: true }}
              >
                <div className="aspect-h-3 aspect-w-5 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <div className="flex items-center gap-x-2">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {course.category}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{course.description}</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <ClockIcon className="mr-1.5 h-4 w-4 text-gray-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1.5 h-4 w-4 text-gray-400" />
                      {course.format}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-medium text-blue-600">{course.price}</span>
                    <Link 
                      href={`/courses/${course.id}`} 
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      了解更多 <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom training CTA */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl rounded-3xl bg-blue-50 p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">企業客製化培訓</h2>
              <p className="mt-4 text-lg text-gray-600">
                我們提供專為企業需求打造的AI培訓方案，根據貴公司的產業特性、技術需求和學習目標，
                設計最適合的課程內容和教學方式。
              </p>
              
              <ul className="mt-6 space-y-3">
                {[
                  '針對企業特定需求設計課程內容',
                  '靈活的授課時間和地點',
                  '實操案例結合企業真實數據',
                  '培訓後的技術支持與諮詢',
                  '可銜接至實際專案的學習路徑',
                ].map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="h-6 w-6 flex-none text-blue-600" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex items-center lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                聯絡我們討論需求
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Why choose our courses */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">為什麼選擇我們的課程</h2>
          
          <div className="mt-8 grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <AcademicCapIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">業界頂尖講師</h3>
              <p className="mt-2 text-gray-600">
                我們的講師都是AI領域的資深專家，擁有豐富的實務經驗和教學經驗，能夠將複雜的技術概念轉化為易於理解的內容。
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">實用性為重</h3>
              <p className="mt-2 text-gray-600">
                所有課程內容都著重於實際應用，學員可以學到真正有用的技能和知識，並能立即應用於工作或研究中。
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">持續更新</h3>
              <p className="mt-2 text-gray-600">
                AI技術發展迅速，我們的課程內容會定期更新，確保學員能夠學習到最新的技術和趨勢。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact section */}
        <motion.div 
          className="mt-20 mx-auto max-w-3xl rounded-2xl bg-blue-50 p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">有課程相關問題？</h2>
            <p className="mt-4 text-lg text-gray-600">
              如果您對我們的課程有任何疑問或需要客製化的培訓方案，歡迎與我們聯繫。
              我們的課程顧問將盡快回覆您的諮詢。
            </p>
            <div className="mt-8">
              <Link
                href="/courses/contact"
                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                填寫課程諮詢表單
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-500 flex justify-center space-x-6">
              <span className="flex items-center">
                <span className="font-medium mr-1">電話：</span>
                <a href="tel:0937358433" className="hover:text-blue-600">0937-358-433</a>
              </span>
              <span className="flex items-center">
                <span className="font-medium mr-1">Email：</span>
                <a href="mailto:taipapa.ai@gmail.com" className="hover:text-blue-600">taipapa.ai@gmail.com</a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 