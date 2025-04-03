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
  FlagIcon,
  MegaphoneIcon,
  UserPlusIcon,
  BookOpenIcon,
  HandRaisedIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-12">
        {/* Main Content and Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Association Info */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <Logo />
              <span className="ml-4 text-xl font-semibold text-gray-900">台灣人工智慧實務應用推廣協會</span>
            </div>
            <p className="text-gray-500 text-sm mt-4 max-w-md leading-relaxed">
              本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
            </p>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/ai_letsgo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:0937358433" className="hover:text-blue-600 transition-colors duration-300">0937-358-433</a>
              </div>
              <div className="flex items-center text-gray-600">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:taipapa.ai@gmail.com" className="hover:text-blue-600 transition-colors duration-300">taipapa.ai@gmail.com</a>
              </div>
              </div>
          </motion.div>
        
          {/* Navigation Links - Four columns in one area */}
          <motion.div 
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Navigation Column 1 - About */}
            <div className="group md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase group-hover:text-blue-600 transition-colors duration-300">課程服務</h3>
              <ul role="list" className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                <li>
                  <Link 
                    href="/courses#ai-tools" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <WrenchScrewdriverIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                    <span className="whitespace-nowrap">AI工具課程</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/courses#ai-video" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <ClockIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                    <span className="whitespace-nowrap">AI短影音製作教學</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/courses#web-design" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <DocumentTextIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                    <span className="whitespace-nowrap">AI網頁設計課程</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/courses#digital-marketing" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <NewspaperIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                    <span className="whitespace-nowrap">AI數位行銷課程</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/courses#courses-plan" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <HandRaisedIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                    <span className="whitespace-nowrap">AI課程方案</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Navigation Column 2 - AI Resources */}
            <div className="group">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase group-hover:text-blue-600 transition-colors duration-300">AI資源</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link 
                    href="/resources" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <AcademicCapIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>AI學習資源</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tools" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <WrenchScrewdriverIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>AI工具推薦</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/publications" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <BookOpenIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>AI好書分享</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Navigation Column 3 - News */}
            <div className="group">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase group-hover:text-blue-600 transition-colors duration-300">最新消息</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link 
                    href="/news" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <NewspaperIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>AI前沿科技</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/events" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <CalendarIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>協會活動</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Navigation Column 4 - About Us */}
            <div className="group">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase group-hover:text-blue-600 transition-colors duration-300">關於我們</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link 
                    href="/about" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <InformationCircleIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>協會簡介</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/team" 
                    className="text-base text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <UsersIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span>組織成員</span>
                    <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Contact Form Section */}
        <motion.div 
          id="invitation"
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl flex items-center justify-center">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <UserGroupIcon className="h-8 w-8 mr-2 text-blue-500" />
              </motion.div>
              合作、課程邀約
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              無論您有任何關於AI應用的問題或合作提案，我們都樂意與您交流！填寫表單，我們會盡快回覆您的訊息。
            </p>
          </div>
          
          <motion.div 
            className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10"
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:col-span-1 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 mr-2 text-blue-500" />
                與我們聯繫
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
              <p className="text-gray-600 mb-6">填寫表單，我們會盡快回覆您的訊息。無論您有任何關於AI應用的問題或合作提案，我們都樂意與您交流！</p>
              
              <motion.a 
                href="mailto:taipapa.ai@gmail.com" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-500" />
                taipapa.ai@gmail.com
              </motion.a>
              <br />
              <motion.a 
                href="tel:0937358433" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <PhoneIcon className="h-5 w-5 mr-2 text-blue-500" />
                0937-358-433
              </motion.a>
              <br />
              <div className="inline-flex items-center text-gray-600 font-semibold mt-4">
                <BuildingOfficeIcon className="h-5 w-5 mr-2 text-gray-600" />
                台北市
              </div>
            </div>
            
            <motion.form 
              className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white p-8 rounded-xl shadow-lg border border-blue-100"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="sm:col-span-1">
                <div className="relative">
                  <motion.input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="公司、單位名稱"
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-700 bg-blue-50/30"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <motion.div
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <BuildingOfficeIcon className="h-5 w-5 text-gray-600" />
                  </motion.div>
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="relative">
                  <motion.input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    placeholder="聯絡人姓名*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-700 bg-blue-50/30"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <motion.div
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <UsersIcon className="h-5 w-5 text-gray-600" />
                  </motion.div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="電子郵件*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-700 bg-blue-50/30"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <motion.div
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <EnvelopeIcon className="h-5 w-5 text-gray-600" />
                  </motion.div>
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="relative">
                  <motion.input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="聯絡電話或手機*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-700 bg-blue-50/30"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <motion.div
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <PhoneIcon className="h-5 w-5 text-gray-600" />
                  </motion.div>
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="relative">
                  <motion.input
                    type="text"
                    name="line"
                    id="line"
                    placeholder="LINE ID（優先聯絡方式）*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-700 bg-blue-50/30"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <motion.div
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-600" />
                  </motion.div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex flex-wrap gap-4">
                  {[
                    { id: "ai-course", label: "AI工具課程邀約" },
                    { id: "web-design", label: "網頁設計課程邀約" },
                    { id: "digital-marketing", label: "數位行銷課程邀約" },
                    { id: "graphic-design", label: "簡報設計課程邀約" },
                    { id: "other", label: "其他" }
                  ].map((checkboxItem) => (
                    <motion.label 
                      key={checkboxItem.id}
                      className="flex items-center text-sm text-gray-700 bg-blue-50/50 px-3 py-2 rounded-lg cursor-pointer"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(219, 234, 254, 0.8)" 
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.input
                        type="checkbox"
                        name="needs"
                        value={checkboxItem.id}
                        className="h-4 w-4 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        whileHover={{ scale: 1.2 }}
                      />
                      {checkboxItem.label}
                    </motion.label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2 mt-2">
                <motion.button
                  type="submit"
                  className="relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -2px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span className="relative flex items-center">
                    送出表單
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      <PaperAirplaneIcon className="h-5 w-5 ml-2 transform rotate-45" />
                    </motion.div>
                  </motion.span>
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} 台灣人工智慧實務應用推廣協會. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center">
              <ShieldCheckIcon className="h-4 w-4 mr-1" />
              隱私權政策
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center">
              <DocumentDuplicateIcon className="h-4 w-4 mr-1" />
              使用條款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 