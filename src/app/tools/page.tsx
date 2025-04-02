'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';

// Mock data for AI tools
const aiTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: '由OpenAI開發的大型語言模型，可用於自然語言處理、文本生成、對話系統等多種應用。',
    category: '文字生成',
    rating: 4.8,
    useCases: ['客服自動回覆', '內容創作', '程式碼輔助', '語言翻譯'],
    imageUrl: 'https://images.unsplash.com/photo-1677442135073-c496cf557d58?q=80&w=1200&auto=format&fit=crop',
    link: 'https://chat.openai.com',
    isPro: false,
    difficulty: '入門',
  },
  {
    id: 2,
    name: 'Midjourney',
    description: '強大的AI圖像生成工具，可根據文字描述創造出高品質、富有藝術感的圖像，適合設計師和創意工作者使用。',
    category: '圖像生成',
    rating: 4.7,
    useCases: ['概念藝術', '產品設計', '品牌視覺', '插畫創作'],
    imageUrl: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.midjourney.com',
    isPro: true,
    difficulty: '中級',
  },
  {
    id: 3,
    name: 'Notion AI',
    description: 'Notion整合的AI助手，可協助撰寫、編輯和改進文本，提高工作效率，支持多種寫作風格和格式。',
    category: '寫作輔助',
    rating: 4.5,
    useCases: ['筆記整理', '內容摘要', '寫作構思', '文案優化'],
    imageUrl: 'https://images.unsplash.com/photo-1648483424707-ef8b5f9b04f8?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.notion.so',
    isPro: false,
    difficulty: '入門',
  },
  {
    id: 4,
    name: 'DALL-E',
    description: '由OpenAI開發的AI圖像生成模型，可根據文字描述生成多樣化的圖像，支持多種風格和主題。',
    category: '圖像生成',
    rating: 4.6,
    useCases: ['社交媒體素材', '創意發想', '教學說明圖', '市場營銷'],
    imageUrl: 'https://images.unsplash.com/photo-1678391422089-0945775292e8?q=80&w=1200&auto=format&fit=crop',
    link: 'https://openai.com/dall-e-2',
    isPro: false,
    difficulty: '入門',
  },
  {
    id: 5,
    name: 'GitHub Copilot',
    description: 'Microsoft與OpenAI合作開發的程式碼輔助工具，可根據註釋和現有程式碼提供智能建議，提高開發效率。',
    category: '程式開發',
    rating: 4.7,
    useCases: ['程式碼自動完成', 'API使用建議', '函數生成', '程式碼最佳化'],
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop',
    link: 'https://github.com/features/copilot',
    isPro: true,
    difficulty: '進階',
  },
  {
    id: 6,
    name: 'Jasper',
    description: '專業的AI內容創作平台，提供多種寫作工具和模板，協助創建部落格文章、廣告文案、電子郵件等各類內容。',
    category: '寫作輔助',
    rating: 4.5,
    useCases: ['行銷文案', 'SEO文章', '電子報', '社群貼文'],
    imageUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.jasper.ai',
    isPro: true,
    difficulty: '中級',
  },
  {
    id: 7,
    name: 'Runway',
    description: '創意影片製作AI工具，提供影片編輯、動畫生成、視覺效果等功能，適合影像創作者使用。',
    category: '影片生成',
    rating: 4.6,
    useCases: ['短影片創作', '動畫製作', '視覺特效', '內容剪輯'],
    imageUrl: 'https://images.unsplash.com/photo-1616628188540-925609abe696?q=80&w=1200&auto=format&fit=crop',
    link: 'https://runwayml.com',
    isPro: true,
    difficulty: '進階',
  },
  {
    id: 8,
    name: 'Grammarly',
    description: '使用AI技術的寫作輔助工具，可檢查文法、拼寫和風格，提供改進建議，適合各類寫作需求。',
    category: '寫作輔助',
    rating: 4.6,
    useCases: ['論文寫作', '商業郵件', '履歷優化', '內容校對'],
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.grammarly.com',
    isPro: false,
    difficulty: '入門',
  },
  {
    id: 9,
    name: 'Synthesia',
    description: 'AI影片生成平台，可將文字轉換為由虛擬人物呈現的專業影片，支持多種語言和角色選擇。',
    category: '影片生成',
    rating: 4.4,
    useCases: ['教學課程', '企業培訓', '產品演示', '多語言內容'],
    imageUrl: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.synthesia.io',
    isPro: true,
    difficulty: '中級',
  },
  {
    id: 10,
    name: 'Descript',
    description: '全功能的音頻和影片編輯平台，運用AI技術實現轉錄、編輯和生成聲音等功能，簡化影音製作流程。',
    category: '音頻處理',
    rating: 4.5,
    useCases: ['播客製作', '影片剪輯', '逐字稿生成', '配音合成'],
    imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.descript.com',
    isPro: true,
    difficulty: '中級',
  },
  {
    id: 11,
    name: 'Otter.ai',
    description: '智能語音轉文字服務，使用AI技術實時記錄和轉錄會議內容，支持多人識別和關鍵字摘要。',
    category: '音頻處理',
    rating: 4.4,
    useCases: ['會議紀錄', '採訪轉錄', '課堂筆記', '研究資料整理'],
    imageUrl: 'https://images.unsplash.com/photo-1559223607-a43fac952a12?q=80&w=1200&auto=format&fit=crop',
    link: 'https://otter.ai',
    isPro: false,
    difficulty: '入門',
  },
  {
    id: 12,
    name: 'Teachable Machine',
    description: 'Google開發的無程式碼機器學習工具，讓使用者能輕鬆創建和訓練模型，適合教育和快速原型開發。',
    category: '機器學習',
    rating: 4.3,
    useCases: ['影像辨識', '聲音分類', '姿勢檢測', '教育示範'],
    imageUrl: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=1200&auto=format&fit=crop',
    link: 'https://teachablemachine.withgoogle.com',
    isPro: false,
    difficulty: '入門',
  },
];

// Get unique categories for filtering
const categories = Array.from(new Set(aiTools.map(tool => tool.category)));
const difficulties = ['入門', '中級', '進階'];

export default function ToolsPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI工具推薦</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我們精選了一系列實用的AI工具，協助您在各個領域提升效率和創造力。
            從文字生成、圖像創作到音頻處理，這些工具能幫助您更輕鬆地完成各種任務。
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {aiTools.map((tool, idx) => (
            <motion.article 
              key={tool.id} 
              className="flex flex-col items-start overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full">
                <div 
                  className="aspect-[16/9] w-full bg-gray-100 bg-cover bg-center sm:aspect-[16/9]"
                  style={{ backgroundImage: `url('${tool.imageUrl}')` }}
                >
                  {tool.isPro && (
                    <div className="absolute top-4 right-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-medium text-white">
                      專業版
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 bg-white w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-x-4 text-xs mb-2">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {tool.category}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                      {tool.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                    {tool.name}
                  </h3>
                  
                  <div className="flex items-center mt-1 mb-3">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={`h-4 w-4 flex-shrink-0 ${
                            tool.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-500">{tool.rating}</p>
                  </div>
                  
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{tool.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">適用場景：</h4>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {tool.useCases.map((useCase) => (
                        <span key={useCase} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
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
                    className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    前往使用
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="mx-auto mt-20 max-w-7xl rounded-3xl bg-blue-50 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">需要更多AI工具推薦？</h2>
              <p className="mt-2 text-base text-gray-600">加入我們的會員，獲得專業AI工具指南、使用教學與優惠方案。</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link
                href="/join"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                立即加入
              </Link>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">常見問題</h2>
          
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">如何選擇適合的AI工具？</h3>
              <p className="mt-2 text-gray-600">
                選擇AI工具時，應考慮您的具體需求、使用目的、預算限制及使用難度。建議先從免費或試用版開始，熟悉操作後再決定是否升級到專業版。
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">這些AI工具是否安全可靠？</h3>
              <p className="mt-2 text-gray-600">
                我們推薦的工具都經過評估，但在使用任何AI工具時，建議閱讀其隱私政策，了解數據處理方式。對於處理敏感資訊的任務，請選擇有明確隱私保障的服務。
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">我需要技術背景才能使用這些工具嗎？</h3>
              <p className="mt-2 text-gray-600">
                大多數推薦工具都設計得相當直觀，適合無技術背景的使用者。我們也標示了難度等級，您可以從「入門」級別的工具開始嘗試，逐步提升熟練度。
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">協會是否提供這些工具的培訓課程？</h3>
              <p className="mt-2 text-gray-600">
                是的，我們定期舉辦各類AI工具使用工作坊和線上課程，協助會員掌握這些工具的使用技巧。您可以查看我們的<Link href="/courses" className="text-blue-600 hover:text-blue-500">課程頁面</Link>了解詳情。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 