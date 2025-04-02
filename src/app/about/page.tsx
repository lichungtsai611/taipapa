'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">關於我們</h1>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">協會宗旨</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
              </p>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">協會任務</h2>
              <p className="mt-4 text-base text-gray-600">
                本會之任務如下，並依相關法令規定推動及執行：
              </p>
              <ul className="mt-6 space-y-6">
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">1</span>
                  <span className="text-base leading-7 text-gray-600">
                    辦理人工智慧教育課程、講座、研討會與工作坊，促進全民AI素養。
                  </span>
                </motion.li>
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">2</span>
                  <span className="text-base leading-7 text-gray-600">
                    出版與提供人工智慧應用之教材、研究與數位學習資源。
                  </span>
                </motion.li>
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">3</span>
                  <span className="text-base leading-7 text-gray-600">
                    推廣AI技術於教育、生活、職場與產業上的實務應用。
                  </span>
                </motion.li>
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">4</span>
                  <span className="text-base leading-7 text-gray-600">
                    協助個人與組織導入AI工具，提升工作效率與創新能力。
                  </span>
                </motion.li>
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">5</span>
                  <span className="text-base leading-7 text-gray-600">
                    提升社會對AI倫理、法律、資料保護與風險意識之認知。
                  </span>
                </motion.li>
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">6</span>
                  <span className="text-base leading-7 text-gray-600">
                    促進國內外在人工智慧應用領域的經驗交流與跨界合作。
                  </span>
                </motion.li>
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">7</span>
                  <span className="text-base leading-7 text-gray-600">
                    建立AI應用資源平台，分享AI工具、案例與學習管道。
                  </span>
                </motion.li>
                <motion.li 
                  className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="mt-1 h-5 w-5 flex-none rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">8</span>
                  <span className="text-base leading-7 text-gray-600">
                    支援政府、企業與學校推動AI普及教育與轉型計畫。
                  </span>
                </motion.li>
              </ul>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">我們的願景</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                打造台灣成為全民皆能應用AI的智慧社會，透過人工智慧工具提升全民生活品質，促進產業發展，增進國家競爭力。我們期望在未來五年內，能協助至少50萬名台灣民眾認識、學習並應用AI工具，成為數位時代的積極參與者。
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">加入我們</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                無論您是個人、企業、學校或組織，都歡迎加入我們的行列，共同推動台灣AI應用教育與實踐。加入會員可享有專業課程優惠、活動參與權、資源共享等多項權益。
              </p>
              <div className="mt-8">
                <a
                  href="/join"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  成為會員
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 