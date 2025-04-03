'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import { 
  SparklesIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Mock data for AI tools
const aiTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: '由OpenAI開發的大型語言模型，可用於自然語言處理、文本生成、對話系統等多種應用。',
    category: '文字生成',
    rating: 4.8,
    useCases: ['客服自動回覆', '內容創作', '程式碼輔助', '語言翻譯'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    link: 'https://chat.openai.com',
    isPro: false,
    difficulty: '入門',
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 2,
    name: 'Midjourney',
    description: '強大的AI圖像生成工具，可根據文字描述創造出高品質、富有藝術感的圖像，適合設計師和創意工作者使用。',
    category: '圖像生成',
    rating: 4.7,
    useCases: ['概念藝術', '產品設計', '品牌視覺', '插畫創作'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png',
    link: 'https://www.midjourney.com',
    isPro: true,
    difficulty: '中級',
    color: 'from-indigo-500 to-purple-400'
  },
  {
    id: 3,
    name: 'Notion AI',
    description: 'Notion整合的AI助手，可協助撰寫、編輯和改進文本，提高工作效率，支持多種寫作風格和格式。',
    category: '寫作輔助',
    rating: 4.5,
    useCases: ['筆記整理', '內容摘要', '寫作構思', '文案優化'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    link: 'https://www.notion.so',
    isPro: false,
    difficulty: '入門',
    color: 'from-gray-600 to-gray-500'
  },
  {
    id: 4,
    name: 'Line Chatbot',
    description: 'Line平台上的聊天機器人開發工具，可以創建智能客服、自動回覆系統，適合企業與用戶進行即時互動。',
    category: '聊天機器人',
    rating: 4.6,
    useCases: ['客戶服務', '自動回覆', '產品諮詢', '行銷活動'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg',
    link: 'https://developers.line.biz/en/services/messaging-api/',
    isPro: false,
    difficulty: '中級',
    color: 'from-green-500 to-lime-400'
  },
  {
    id: 5,
    name: 'Cursor',
    description: '基於AI的程式碼編輯器，整合大型語言模型協助開發者更高效地編寫和理解程式碼，提供智能代碼補全和重構建議。',
    category: '程式開發',
    rating: 4.8,
    useCases: ['程式碼生成', 'Bug修復', '程式碼解釋', '重構輔助'],
    imageUrl: 'https://www.cursor.so/apple-touch-icon.png',
    link: 'https://cursor.sh',
    isPro: false,
    difficulty: '中級',
    color: 'from-blue-600 to-blue-400'
  },
  {
    id: 6,
    name: 'Canva',
    description: '結合AI功能的設計平台，提供文字到圖像生成、設計魔術師、背景移除等智能工具，幫助用戶快速創建專業設計。',
    category: '設計輔助',
    rating: 4.7,
    useCases: ['社群圖片', '簡報設計', '行銷素材', '品牌設計'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Canva_logo.png',
    link: 'https://www.canva.com',
    isPro: false,
    difficulty: '入門',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 7,
    name: 'GitHub Copilot',
    description: 'Microsoft與OpenAI合作開發的程式碼輔助工具，可根據註釋和現有程式碼提供智能建議，提高開發效率。',
    category: '程式開發',
    rating: 4.7,
    useCases: ['程式碼自動完成', 'API使用建議', '函數生成', '程式碼最佳化'],
    imageUrl: 'https://github.blog/wp-content/uploads/2023/05/GitHub-Copilot-logo.png',
    link: 'https://github.com/features/copilot',
    isPro: true,
    difficulty: '進階',
    color: 'from-purple-600 to-pink-400'
  },
];

// Get unique categories for filtering
const categories = Array.from(new Set(aiTools.map(tool => tool.category)));
const difficulties = ['入門', '中級', '進階'];

export default function ToolsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-100">
            生產力工具
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI工具推薦
            </span>
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            我們精選了一系列實用的AI工具，協助您在各個領域提升效率和創造力。
            從文字生成、圖像創作到音頻處理，這些工具能幫助您更輕鬆地完成各種任務。
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {aiTools.map((tool) => (
            <motion.article 
              key={tool.id}
              className="flex flex-col items-start overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${tool.color}`}/>
                <div 
                  className="aspect-square w-full bg-gray-100 bg-cover bg-center relative group-hover:scale-105 transition-transform duration-500 ease-out overflow-hidden"
                  style={{ backgroundImage: `url('${tool.imageUrl}')` }}
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  {tool.isPro && (
                    <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-1 text-xs font-medium text-white shadow-md backdrop-blur-sm">
                      <div className="flex items-center">
                        <SparklesIcon className="h-3 w-3 mr-1" />
                        專業版
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 bg-white w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-x-4 text-xs mb-3">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      {tool.category}
                    </span>
                    <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-indigo-700/10 bg-gradient-to-r ${tool.color}`}>
                      {tool.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold leading-7 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </h3>
                  
                  <div className="flex items-center mt-2 mb-4">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={`h-4 w-4 flex-shrink-0 ${
                            tool.rating > rating ? 'text-amber-400' : 'text-gray-200'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-2 text-sm font-medium text-gray-600">{tool.rating}</p>
                  </div>
                  
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{tool.description}</p>
                  
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                      <AdjustmentsHorizontalIcon className="h-4 w-4 mr-1.5 text-indigo-500" />
                      適用場景
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {tool.useCases.map((useCase) => (
                        <span key={useCase} className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 border border-gray-100">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center rounded-xl bg-gradient-to-r ${tool.color} px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 w-full justify-center`}
                  >
                    前往使用
                    <svg className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="mx-auto mt-24 max-w-none rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 overflow-hidden shadow-xl border border-indigo-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="px-8 py-12 md:px-12 md:py-16 md:flex items-center justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
            <div className="absolute right-20 bottom-10 w-60 h-60 bg-indigo-400 rounded-full opacity-10"></div>
            <div className="absolute left-10 top-40 w-20 h-20 bg-purple-300 rounded-full opacity-20"></div>
            
            <div className="md:w-3/5 mb-8 md:mb-0 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">想了解更多AI工具嗎？</h3>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                訂閱我們的電子報，定期收到最新AI工具推薦、使用教學和行業應用案例分享。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="請輸入您的電子郵件" 
                  className="px-5 py-3.5 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto sm:flex-1 shadow-lg"
                />
                <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  訂閱
                </button>
              </div>
              <p className="text-indigo-200 text-sm mt-4">
                我們尊重您的隱私，隨時可以取消訂閱。
              </p>
            </div>
            <div className="md:w-2/5 relative z-10">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white opacity-15 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 