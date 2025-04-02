'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:pt-0 bg-white lg:bg-transparent pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block">台灣人工智慧</span>{' '}
                <span className="block text-blue-600">實務應用推廣協會</span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
              </motion.p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="rounded-md shadow">
                  <Link
                    href="/join"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                  >
                    加入我們
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/about"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:py-4 md:px-10 md:text-lg"
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
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 mix-blend-multiply opacity-90"></div>
          <Image
            src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop"
            alt="AI Technology"
            fill
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
} 