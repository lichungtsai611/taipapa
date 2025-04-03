'use client';

import { motion } from 'framer-motion';
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-16 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl flex items-center justify-center">
              <UserGroupIcon className="h-8 w-8 mr-2 text-blue-500" />
              合作、課程邀約
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              無論您有任何關於AI應用的問題或合作提案，我們都樂意與您交流！填寫表單，我們會盡快回覆您的訊息。
            </p>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 mr-2 text-blue-500" />
                與我們聯繫
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
              <p className="text-gray-600 mb-6">填寫表單，我們會盡快回覆您的訊息。無論您有任何關於AI應用的問題或合作提案，我們都樂意與您交流！</p>
              
              <a href="mailto:taipapa.ai@gmail.com" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-500" />
                taipapa.ai@gmail.com
              </a>
              <br />
              <a href="tel:0937358433" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                <PhoneIcon className="h-5 w-5 mr-2 text-blue-500" />
                0937-358-433
              </a>
              <br />
              <div className="inline-flex items-center text-gray-600 font-semibold mt-4">
                <BuildingOfficeIcon className="h-5 w-5 mr-2 text-blue-500" />
                台北市
              </div>
            </div>
            
            <form className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="公司、單位名稱"
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-500 bg-blue-50/30"
                  />
                  <BuildingOfficeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    placeholder="聯絡人姓名*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-500 bg-blue-50/30"
                  />
                  <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="電子郵件*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-500 bg-blue-50/30"
                  />
                  <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="聯絡電話或手機*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-500 bg-blue-50/30"
                  />
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    name="line"
                    id="line"
                    placeholder="LINE ID（優先聯絡方式）*"
                    required
                    className="block w-full rounded-lg border-gray-300 shadow-sm py-3 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-500 bg-blue-50/30"
                  />
                  <ChatBubbleLeftEllipsisIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="needs"
                      value="ai-course"
                      className="h-4 w-4 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    AI工具課程邀約
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="needs"
                      value="web-design"
                      className="h-4 w-4 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    網頁設計課程邀約
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="needs"
                      value="digital-marketing"
                      className="h-4 w-4 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    數位行銷課程邀約
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="needs"
                      value="graphic-design"
                      className="h-4 w-4 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    簡報設計課程邀約
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="needs"
                      value="other"
                      className="h-4 w-4 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    其他
                  </label>
                </div>
              </div>
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  送出表單
                  <PaperAirplaneIcon className="h-5 w-5 ml-2 transform rotate-45" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}