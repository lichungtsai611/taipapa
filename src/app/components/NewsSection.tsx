'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const news = [
  {
    id: 1,
    title: '2023台灣AI技術應用高峰會圓滿落幕',
    description: '本次高峰會匯集國內外AI領域專家，分享最新AI技術發展與實務應用案例，吸引超過500位產學專業人士參與。',
    date: '2023年12月15日',
    category: '活動',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '本協會與台灣科技大學簽署產學合作備忘錄',
    description: '為促進AI技術研發與人才培育，本協會與台灣科技大學簽署產學合作MOU，共同推動AI技術的研究與實務應用。',
    date: '2023年11月20日',
    category: '合作',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '企業AI轉型免費諮詢服務正式上線',
    description: '本協會推出企業AI轉型免費諮詢服務，由AI專家團隊為企業提供專業建議，協助企業評估AI導入的可行性與效益。',
    date: '2023年10月5日',
    category: '服務',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function NewsSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">最新消息</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            了解協會最新動態、活動資訊與AI發展趨勢
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {news.map((item) => (
            <motion.article 
              key={item.id} 
              className="flex flex-col items-start overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-0.5 text-sm font-medium text-white">
                    {item.category}
                  </span>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href={`/news/${item.id}`} className="group">
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.description}</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/news/${item.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
                  >
                    閱讀更多
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
            </motion.article>
          ))}
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/news"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            查看更多新聞
            <svg
              className="ml-2 -mr-1 h-5 w-5"
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
        </motion.div>
      </div>
    </div>
  );
} 