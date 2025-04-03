'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl relative">
          {/* Decorative elements */}
          <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob" />
          <div className="absolute -right-4 -top-4 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="text-center mb-16">
              <motion.h1 
                className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                關於我們
              </motion.h1>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
            </div>
            
            <div className="mt-16 space-y-16">
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-blue-600">協會宗旨</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
                </p>
              </motion.div>
            
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-blue-600">協會任務</h2>
                <p className="mt-4 text-base text-gray-600">
                  本會之任務如下，並依相關法令規定推動及執行：
                </p>
                <ul className="mt-8 space-y-6">
                  {[...Array(8)].map((_, index) => (
                    <motion.li 
                      key={index}
                      className="flex gap-x-4 items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <span className="mt-1 h-6 w-6 flex-none rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-center text-sm font-medium group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </span>
                      <span className="text-base leading-7 text-gray-600">
                        {[
                          "辦理人工智慧教育課程、講座、研討會與工作坊，促進全民AI素養。",
                          "出版與提供人工智慧應用之教材、研究與數位學習資源。",
                          "推廣AI技術於教育、生活、職場與產業上的實務應用。",
                          "協助個人與組織導入AI工具，提升工作效率與創新能力。",
                          "提升社會對AI倫理、法律、資料保護與風險意識之認知。",
                          "促進國內外在人工智慧應用領域的經驗交流與跨界合作。",
                          "建立AI應用資源平台，分享AI工具、案例與學習管道。",
                          "支援政府、企業與學校推動AI普及教育與轉型計畫。"
                        ][index]}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-blue-600">我們的願景</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  打造台灣成為全民皆能應用AI的智慧社會，透過人工智慧工具提升全民生活品質，促進產業發展，增進國家競爭力。我們期望在未來五年內，能協助至少50萬名台灣民眾認識、學習並應用AI工具，成為數位時代的積極參與者。
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-lg text-white hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold tracking-tight">與我們聯繫</h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  無論您是個人、企業、學校或組織，都歡迎與我們聯繫，共同推動台灣AI應用教育與實踐。我們提供AI教育課程、顧問諮詢、資源分享等多項服務。
                </p>
                <div className="mt-10 flex gap-x-6">
                  <a
                    href="#contactSection"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    聯絡我們
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
} 