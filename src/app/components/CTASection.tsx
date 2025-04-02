'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-gray-900 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-12 lg:py-40 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            成為推動全民AI素養的
            <br />
            一份子
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            加入我們，共同協助全民理解並運用AI工具，提升生活品質與職場競爭力，促進數位轉型與全民科技素養。您將獲得專業資源、活動參與及社群交流等多項權益。
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="flex w-full sm:w-auto items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow hover:bg-gray-100"
            >
              聯絡我們
            </Link>
            <Link 
              href="/about"
              className="flex w-full sm:w-auto items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              了解更多 →
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 mix-blend-multiply" />
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
} 