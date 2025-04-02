'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 pt-20 lg:pt-24 bg-white lg:bg-transparent pb-12 sm:pb-20 md:pb-24 lg:w-full lg:max-w-2xl lg:pb-32 xl:pb-36">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-12 max-w-6xl px-6 sm:mt-16 sm:px-8 md:mt-20 lg:mt-24 lg:px-12 xl:mt-32">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block mb-4">台灣人工智慧</span>{' '}
                <span className="block text-blue-600">實務應用推廣協會</span>
              </motion.h1>
              <motion.p 
                className="mt-8 text-lg text-gray-600 sm:mx-auto sm:mt-10 sm:max-w-xl sm:text-xl md:mt-10 md:text-2xl lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
              </motion.p>
              <motion.div 
                className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-10 py-4 text-lg font-medium text-white hover:bg-blue-700 md:py-5 md:px-12 md:text-xl"
                  >
                    聯絡我們
                  </Link>
                </div>
                <div className="w-full sm:w-auto">
                  <Link
                    href="/about"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-10 py-4 text-lg font-medium text-blue-700 hover:bg-blue-200 md:py-5 md:px-12 md:text-xl"
                  >
                    了解更多
                  </Link>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 mix-blend-multiply opacity-70 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop')" 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
} 