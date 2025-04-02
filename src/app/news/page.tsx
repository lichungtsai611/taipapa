'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const newsArticles = [
  {
    id: 1,
    title: '2023台灣AI技術應用高峰會圓滿落幕',
    description: '本次高峰會匯集國內外AI領域專家，分享最新AI技術發展與實務應用案例，吸引超過500位產學專業人士參與。現場展示了多項AI創新應用，包括自動化客服系統、智慧零售解決方案、醫療影像分析等多元領域的實例，展現AI技術的廣泛應用潛力。',
    date: '2023年12月15日',
    category: '活動',
    author: '協會秘書處',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '本協會與台灣科技大學簽署產學合作備忘錄',
    description: '為促進AI技術研發與人才培育，本協會與台灣科技大學簽署產學合作MOU，共同推動AI技術的研究與實務應用。雙方將合作開發AI課程、舉辦工作坊、提供學生實習機會，並共同執行產業應用研究計畫，促進學術研究與產業需求的結合。',
    date: '2023年11月20日',
    category: '合作',
    author: '協會理事長',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '企業AI轉型免費諮詢服務正式上線',
    description: '本協會推出企業AI轉型免費諮詢服務，由AI專家團隊為企業提供專業建議，協助企業評估AI導入的可行性與效益。服務內容包括AI轉型策略規劃、適用工具評估、人員培訓建議等，幫助企業降低AI導入門檻，提升數位競爭力。',
    date: '2023年10月5日',
    category: '服務',
    author: '數位轉型部門',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: '協會舉辦第一屆「AI實務應用創新競賽」',
    description: '為鼓勵AI創新應用，本協會舉辦首屆「AI實務應用創新競賽」，徵求具有實際應用價值的AI解決方案。競賽分為教育應用、商業創新、社會福利三大類別，獲勝團隊將獲得獎金支持及業師輔導，協助作品商業化。',
    date: '2023年9月12日',
    category: '活動',
    author: '創新競賽籌備小組',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'AI素養教育計畫將走入全台50所高中',
    description: '本協會與教育部合作推動「高中AI素養提升計畫」，預計在2024年走入全台50所高中，舉辦AI應用工作坊，介紹AI技術基礎知識與實用工具，培養學生的AI素養與應用能力，為數位時代做好準備。',
    date: '2023年8月28日',
    category: '教育',
    author: '教育推廣組',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: '「AI助理實務應用手冊」正式出版',
    description: '本協會出版「AI助理實務應用手冊」，詳細介紹目前市面上主流AI助理工具的特性、應用場景與使用技巧，幫助一般民眾快速上手各類AI工具，提升工作效率與創意表達。本手冊提供電子版與實體版，會員可享優惠價格。',
    date: '2023年7月15日',
    category: '出版',
    author: '出版組',
    imageUrl: 'https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function NewsPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">最新消息</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            了解協會最新動態、活動資訊與AI發展趨勢
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {newsArticles.map((article, idx) => (
            <motion.article 
              key={article.id} 
              className="flex flex-col items-start overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-0.5 text-sm font-medium text-white">
                    {article.category}
                  </span>
                </div>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${article.imageUrl}')` }}
                ></div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href={`/news/${article.id}`} className="group">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={article.date} className="text-gray-500">{article.date}</time>
                      <span className="text-gray-500">{article.author}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.description}</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/news/${article.id}`}
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
        </div>

        <motion.div 
          className="mx-auto mt-20 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">訂閱最新消息</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              訂閱我們的電子報，獲取協會活動、AI技術與應用的最新資訊。
            </p>
            <div className="mt-6">
              <form className="sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  電子郵件地址
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:w-64 sm:text-sm sm:leading-6"
                  placeholder="請輸入您的電子郵件"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    訂閱
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 