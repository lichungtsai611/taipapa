'use client';

import { motion } from 'framer-motion';

export default function MissionPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">使命與願景</h1>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">協會宗旨</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
              </p>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">協會願景</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                打造台灣成為全民皆能應用AI的智慧社會，透過人工智慧工具提升全民生活品質，促進產業發展，增進國家競爭力。我們期望在未來五年內，能協助至少50萬名台灣民眾認識、學習並應用AI工具，成為數位時代的積極參與者。
              </p>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">核心價值</h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <motion.div 
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-lg font-medium text-gray-900">普及性</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    我們相信AI應該是普及且平等的，每個人都能透過適當的教育和工具，受惠於人工智慧技術。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-medium text-gray-900">實用性</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    注重AI技術的實際應用，讓人工智慧能真實地解決日常生活與工作中的問題，創造具體價值。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-lg font-medium text-gray-900">倫理性</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    重視AI應用的倫理考量，推廣負責任的AI使用方式，確保技術發展與人類福祉共存。
                  </p>
                </motion.div>
                
                <motion.div 
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg font-medium text-gray-900">創新性</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    鼓勵創新思維，探索AI技術的多元應用可能性，促進台灣在全球AI領域的競爭力。
                  </p>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">未來展望</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                我們期望透過協會的努力，讓AI成為台灣社會和產業轉型的重要推手，協助台灣在數位時代保持競爭力。同時，我們也致力於確保AI發展的包容性和公平性，讓各年齡層、各職業和各地區的民眾都能享受到AI帶來的便利與價值。
              </p>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-blue-600">加入我們</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                如果您認同我們的使命和願景，歡迎加入我們的行列，一起推動台灣AI應用教育與實踐，共同打造全民AI時代！
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