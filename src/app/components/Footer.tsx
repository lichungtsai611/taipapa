'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { 
  ArrowUpRightIcon, 
  InformationCircleIcon, 
  UsersIcon, 
  NewspaperIcon, 
  CalendarIcon, 
  AcademicCapIcon, 
  WrenchScrewdriverIcon, 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  DocumentDuplicateIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftEllipsisIcon,
  MegaphoneIcon,
  HandRaisedIcon,
  UserGroupIcon,
  BookOpenIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

// 統一導航結構
const footerNavigation = [
  {
    name: '課程服務',
    href: '/courses',
    icon: <AcademicCapIcon className="h-5 w-5" />,
    items: [
      { name: 'AI工具課程', href: '/courses', icon: <WrenchScrewdriverIcon className="h-4 w-4" /> },
      { name: 'AI影片製作', href: '/courses', icon: <DocumentTextIcon className="h-4 w-4" /> },
      { name: 'AI網頁設計', href: '/courses', icon: <DocumentTextIcon className="h-4 w-4" /> },
      { name: 'AI數位行銷', href: '/courses', icon: <NewspaperIcon className="h-4 w-4" /> },
      { name: 'AI課程方案', href: '/courses', icon: <HandRaisedIcon className="h-4 w-4" /> }
    ]
  },
  {
    name: 'AI資源',
    href: '/resources',
    icon: <LightBulbIcon className="h-5 w-5" />,
    items: [
      { name: 'AI學習資源', href: '/resources', icon: <AcademicCapIcon className="h-4 w-4" /> },
      { name: 'AI工具推薦', href: '/resources/tools', icon: <WrenchScrewdriverIcon className="h-4 w-4" /> },
      { name: 'AI好書分享', href: '/resources/publications', icon: <BookOpenIcon className="h-4 w-4" /> }
    ]
  },
  {
    name: '最新消息',
    href: '/news',
    icon: <NewspaperIcon className="h-5 w-5" />,
    items: [
      { name: 'AI前沿科技', href: '/news', icon: <NewspaperIcon className="h-4 w-4" /> },
      { name: '協會活動', href: '/news/events', icon: <CalendarIcon className="h-4 w-4" /> }
    ]
  },
  {
    name: '關於我們',
    href: '/about',
    icon: <UserGroupIcon className="h-5 w-5" />,
    items: [
      { name: '協會簡介', href: '/about', icon: <InformationCircleIcon className="h-4 w-4" /> },
      { name: '組織成員', href: '/about/team', icon: <UsersIcon className="h-4 w-4" /> }
    ]
  },
];

// 服務選項數據
const serviceOptions = [
  { id: "ai-course", label: "AI工具課程", icon: <WrenchScrewdriverIcon className="h-4 w-4" /> },
  { id: "web-design", label: "網頁設計課程", icon: <DocumentTextIcon className="h-4 w-4" /> },
  { id: "digital-marketing", label: "數位行銷課程", icon: <MegaphoneIcon className="h-4 w-4" /> },
  { id: "graphic-design", label: "簡報設計課程", icon: <DocumentDuplicateIcon className="h-4 w-4" /> },
  { id: "other", label: "其他合作", icon: <HandRaisedIcon className="h-4 w-4" /> }
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 relative">
      {/* 簡化背景裝飾 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        {/* 主要內容部分 */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* 協會資訊 */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center group">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Logo />
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                AI for Taiwan
              </span>
            </Link>
            
            <p className="text-gray-600 text-base max-w-md leading-relaxed">
              本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
            </p>
            
            <div className="flex items-center space-x-5">
              <a href="https://www.instagram.com/ai_letsgo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <PhoneIcon className="h-5 w-5 mr-2 text-blue-500" />
                <a href="tel:0937358433" className="hover:text-blue-600 transition-colors duration-300">0937-358-433</a>
              </div>
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-500" />
                <a href="mailto:taipapa.ai@gmail.com" className="hover:text-blue-600 transition-colors duration-300">taipapa.ai@gmail.com</a>
              </div>
            </div>
          </motion.div>
          
          {/* 導航連結 */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerNavigation.map((section) => (
              <motion.div 
                key={section.name} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                    <span className="flex items-center text-blue-600 mr-2">{section.icon}</span>
                    <Link
                      href={section.href}
                      className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    >
                      {section.name}
                    </Link>
                  </div>
                  <div className="w-16 h-0.5 bg-blue-100 mt-2"></div>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div className="group hover:translate-x-1 transition-transform duration-300">
                        <Link
                          href={item.href}
                          className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          <span className="mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">{item.icon}</span>
                          <span>{item.name}</span>
                          <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 聯繫表單部分 */}
        <motion.div 
          id="invitation"
          className="relative overflow-hidden mt-16 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* 簡化背景 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-indigo-50 opacity-95 -z-10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:30px_30px] -z-10"></div>
          
          {/* 主要內容容器 */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative">
            <div className="text-center mb-10">
              {/* 標題 */}
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 inline-flex items-center">
                <span className="mr-3 text-blue-600">
                  <UserGroupIcon className="h-10 w-10 inline-block" />
                </span>
                課程、合作邀約
              </h2>
              
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto my-6" />
              
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                提供專業AI課程與客製化企業合作方案，共同探索AI應用的無限可能
              </p>
            </div>
            
            {/* 卡片設計 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 左側聯絡資訊卡片 */}
              <motion.div 
                className="col-span-1 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl overflow-hidden shadow-xl border border-blue-100/50 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 2px rgba(191, 219, 254, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="p-7 relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                      <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">直接聯繫</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    想更快地聯繫我們？使用以下任一方式，我們的AI顧問團隊將立即回應您的需求
                  </p>
                  
                  <div className="space-y-5">
                    <a 
                      href="mailto:taipapa.ai@gmail.com" 
                      className="group flex items-center p-3 w-full text-left rounded-xl bg-white hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                        <EnvelopeIcon className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <p className="text-base font-semibold text-blue-700">taipapa.ai@gmail.com</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRightIcon className="h-5 w-5 text-blue-600" />
                      </div>
                    </a>
                    
                    <a 
                      href="tel:0937358433" 
                      className="group flex items-center p-3 w-full text-left rounded-xl bg-white hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                        <PhoneIcon className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">電話</p>
                        <p className="text-base font-semibold text-blue-700">0937-358-433</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRightIcon className="h-5 w-5 text-blue-600" />
                      </div>
                    </a>
                    
                    <div className="flex items-center p-3 w-full text-left rounded-xl bg-white border border-transparent">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
                        <BuildingOfficeIcon className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">地點</p>
                        <p className="text-base font-semibold text-gray-800">台北市</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 右側表單部分 */}
              <motion.form 
                className="col-span-2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl overflow-hidden shadow-xl border border-blue-100/50 backdrop-blur-sm relative"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 2px rgba(191, 219, 254, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* 表單標題和內容 */}
                <div className="p-7">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                      <ChatBubbleLeftEllipsisIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">聯繫表單</h3>
                  </div>
                  
                  {/* 表單內容 */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">單位名稱</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white/60 backdrop-blur-sm"
                            placeholder="公司或單位名稱"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">聯絡人姓名 <span className="text-red-500">*</span></label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UsersIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="contact-name"
                            id="contact-name"
                            required
                            className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white/60 backdrop-blur-sm"
                            placeholder="您的姓名"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2 space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">電子郵件 <span className="text-red-500">*</span></label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white/60 backdrop-blur-sm"
                            placeholder="example@company.com"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">聯絡電話 <span className="text-red-500">*</span></label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PhoneIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white/60 backdrop-blur-sm"
                            placeholder="您的聯絡電話"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="line" className="block text-sm font-medium text-gray-700">LINE ID <span className="text-red-500">*</span></label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="line"
                            id="line"
                            required
                            className="block w-full pl-10 pr-3 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white/60 backdrop-blur-sm"
                            placeholder="LINE ID (優先聯絡方式)"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <span className="block text-sm font-medium text-gray-700 mb-3">您感興趣的服務</span>
                        <div className="flex flex-wrap gap-3">
                          {serviceOptions.map((item) => (
                            <label 
                              key={item.id}
                              className="group relative flex items-center px-4 py-2.5 rounded-lg bg-white/60 backdrop-blur-sm cursor-pointer hover:bg-blue-50/80 border border-gray-200/60 hover:border-blue-200 transition-all duration-300"
                            >
                              <input
                                type="checkbox"
                                name="needs"
                                value={item.id}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <div className="ml-2 flex items-center">
                                <span className="text-gray-400 mr-2 group-hover:text-blue-500 transition-colors duration-300">
                                  {item.icon}
                                </span>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                                  {item.label}
                                </span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2 mt-4">
                        <button
                          type="submit"
                          className="relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                        >
                          <span className="relative flex items-center">
                            立即預約課程
                            <span className="ml-2 flex">
                              <PaperAirplaneIcon className="h-6 w-6" />
                            </span>
                          </span>
                        </button>
                        
                        <p className="text-xs text-center text-gray-500 mt-4">
                          點擊送出即表示您同意我們的<Link href="/privacy" className="text-blue-600 hover:underline">隱私權政策</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* 版權部分 */}
      <div className="bg-gray-100/70 backdrop-blur-sm py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} 台灣人工智慧實務應用推廣協會 保留一切權利｜本網站由 <Link href="https://sc-icg.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">快找整合顧問</Link> 建置維護
          </div>
          <div className="flex space-x-6">
            <div className="hover:translate-x-1 transition-transform duration-300">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                <ShieldCheckIcon className="h-4 w-4 mr-1.5 text-blue-500" />
                隱私權政策
              </Link>
            </div>
            <div className="hover:translate-x-1 transition-transform duration-300">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                <DocumentDuplicateIcon className="h-4 w-4 mr-1.5 text-blue-500" />
                使用條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 