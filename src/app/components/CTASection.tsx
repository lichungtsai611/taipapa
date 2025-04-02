'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div 
          className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#3b82f6" />
                <stop offset={1} stopColor="#1e40af" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              成為推動全民AI素養的
              <br />
              一份子
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              加入我們，共同協助全民理解並運用AI工具，提升生活品質與職場競爭力，促進數位轉型與全民科技素養。您將獲得專業資源、活動參與及社群交流等多項權益。
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/join"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                立即加入
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                聯絡我們 <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <motion.div 
              className="absolute left-0 top-0 w-[45rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <div className="grid grid-cols-1 gap-4">
                  <div className="col-span-1">
                    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link href="/join/organization" className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <p className="text-sm font-medium text-gray-900">組織會員</p>
                          <p className="truncate text-sm text-gray-500">適合企業、學校、政府機構，協助組織AI轉型</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link href="/join/individual" className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <p className="text-sm font-medium text-gray-900">個人會員</p>
                          <p className="truncate text-sm text-gray-500">適合一般民眾，增進AI素養與應用能力</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-green-400"></div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link href="/join/education" className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <p className="text-sm font-medium text-gray-900">教育會員</p>
                          <p className="truncate text-sm text-gray-500">適合教師、講師，取得AI教學資源與支援</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 