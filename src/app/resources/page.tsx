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

const resources = [
  {
    title: 'AI入門指南',
    description: '為初學者提供簡單易懂的AI基礎知識，包含基本概念、常見工具和入門應用案例。',
    icon: BookOpenIcon,
    href: '/resources/ai-introduction',
    category: '教材',
  },
  {
    title: 'AI工具應用課程',
    description: '一系列線上課程，教您如何在日常工作和生活中應用各種AI工具提升效率。',
    icon: AcademicCapIcon,
    href: '/resources/ai-courses',
    category: '課程',
  },
  {
    title: '實用AI工具推薦',
    description: '精選各領域實用AI工具，包含文字、圖像、音訊處理等多元應用工具。',
    icon: GlobeAltIcon,
    href: '/resources/ai-tools',
    category: '工具',
  },
  {
    title: 'AI應用案例分享',
    description: '收集各行業成功導入AI的案例分享，提供實際參考與啟發。',
    icon: DocumentTextIcon,
    href: '/resources/case-studies',
    category: '案例',
  },
  {
    title: 'AI技術講座影片',
    description: '由專業講師主講的各類AI技術講座錄影，隨時隨地學習最新AI知識。',
    icon: VideoCameraIcon,
    href: '/resources/video-lectures',
    category: '影片',
  },
  {
    title: 'AI新聞與趨勢',
    description: '定期更新的AI產業新聞與技術趨勢分析，掌握AI發展動向。',
    icon: NewspaperIcon,
    href: '/resources/ai-news',
    category: '新聞',
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI學習資源中心</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我們提供多元的AI學習資源和工具，協助您理解、學習並應用人工智慧技術，提升數位時代的競爭力。
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.title}
              className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-50 px-6 pt-8 pb-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="mb-6 flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    {resource.category}
                  </time>
                </div>
                <div className="flex items-center gap-x-4">
                  <resource.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    <Link href={resource.href}>
                      <span className="absolute inset-0" />
                      {resource.title}
                    </Link>
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{resource.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-x-4">
                <div className="relative flex items-center gap-x-4">
                  <Link
                    href={resource.href}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
                  >
                    了解更多
                    <svg
                      className="ml-1 h-5 w-5"
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
        </div>
        
        <motion.div 
          className="mx-auto mt-16 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">AI資源平台</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            本協會建立AI應用資源平台，分享AI工具、案例與學習管道，協助全民輕鬆學習AI應用。
          </p>
          <div className="mt-8">
            <Link
              href="/resources/platform"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              探索AI資源平台
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-20 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-24 lg:mx-0 lg:flex lg:max-w-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">訂閱AI資源更新</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              訂閱我們的電子報，獲取最新AI學習資源、工具推薦和活動資訊。
            </p>
            <div className="mt-6">
              <form className="sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  電子郵件地址
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:w-64 sm:text-sm sm:leading-6"
                  placeholder="請輸入您的電子郵件"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    訂閱
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 