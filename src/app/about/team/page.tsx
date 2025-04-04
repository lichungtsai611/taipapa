'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  GlobeAltIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

// 動畫變體
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Mock data for team members
const executives = [
  {
    id: 1,
    name: '蔡立忠',
    title: '理事長',
    description: '曾任台灣最大金控公司數據分析師，現為快找整合顧問有限公司AI工程師。擁有台大統計碩士學位學程畢業，專精於數據分析與AI應用。致力於推動台灣AI產業的實務應用與全民推廣。',
    imageUrl: '/images/team/Richard.webp',
    website: 'https://richard-info.com/',
    links: {
      linkedin: 'https://www.linkedin.com/in/richard-tsai-4474994a/',
    },
    background: 'bg-gradient-to-br from-blue-50 via-white to-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'from-blue-500 to-blue-600',
    skills: ['數據分析', 'AI應用', '專案管理']
  },
  {
    id: 2,
    name: '黃海潮',
    title: '副理事長',
    description: '現任台灣路威股份有限公司儲備幹部，台大統計碩士學位學程畢業。擁有豐富的數據分析經驗，專注於AI技術在企業的實務應用。積極推動AI技術的普及化與大眾化。',
    imageUrl: '/images/team/Eric.webp',
    website: 'http://seawave.tw/',
    links: {
      linkedin: 'https://www.linkedin.com/in/seawave/',
    },
    background: 'bg-gradient-to-br from-purple-50 via-white to-purple-50',
    borderColor: 'border-purple-200',
    accentColor: 'from-purple-500 to-purple-600',
    skills: ['企業應用', '策略規劃', '數據科學']
  },
  {
    id: 3,
    name: '廖文碩',
    title: '秘書長',
    description: '現任快找整合顧問有限公司負責人，10萬追蹤粉專「簡報仙貝」創辦人。擁有豐富的企業管理和網路社群經營經驗，專長於數位行銷與內容策略。致力於將AI知識以淺顯易懂的方式傳達給大眾。',
    imageUrl: '/images/team/Kevin.webp',
    website: 'https://kevin.voyage/',
    links: {
      linkedin: 'https://www.linkedin.com/in/sc-kevin/',
    },
    background: 'bg-gradient-to-br from-indigo-50 via-white to-indigo-50',
    borderColor: 'border-indigo-200',
    accentColor: 'from-indigo-500 to-indigo-600',
    skills: ['數位行銷', '社群經營', '內容策略']
  },
];

const advisors = [
  {
    id: 1,
    name: '張耿瑭',
    title: '產業顧問',
    organization: '言回有限公司',
    expertise: 'AI產業應用',
    imageUrl: '/images/team/Charles.webp',
    icon: BriefcaseIcon,
    color: 'bg-gradient-to-br from-amber-500 to-orange-500'
  },
  {
    id: 2,
    name: '王慧龍',
    title: '教育顧問',
    organization: '敏逆創新顧問',
    expertise: 'AI教育訓練',
    imageUrl: '/images/team/Larry.webp',
    icon: AcademicCapIcon,
    color: 'bg-gradient-to-br from-emerald-500 to-green-500'
  },
  {
    id: 3,
    name: '唐璽',
    title: '美術顧問',
    organization: '快找整合顧問有限公司',
    expertise: 'AI視覺設計',
    imageUrl: '/images/team/Tang.webp',
    icon: LightBulbIcon,
    color: 'bg-gradient-to-br from-rose-500 to-pink-500'
  },
  {
    id: 4,
    name: '潘柏瑜',
    title: '行銷顧問',
    organization: '花火教育學院',
    expertise: 'AI行銷策略',
    imageUrl: '/images/team/Ryan.webp',
    icon: GlobeAltIcon,
    color: 'bg-gradient-to-br from-cyan-500 to-blue-500'
  },
];

export default function TeamPage() {
  const [activeExecutive, setActiveExecutive] = useState<number | null>(null);

  const handleHover = (id: number | null) => {
    setActiveExecutive(id);
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50/70 to-white overflow-hidden">
      {/* 裝飾背景元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>
        
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-30 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute top-40 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply opacity-30 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply opacity-30 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        {/* 頂部視覺效果和標題區域 */}
        <div className="relative mb-24">
          <motion.div 
            className="absolute inset-0 flex items-center justify-center -z-10 opacity-15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
          >
            <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M300 50C411.046 50 500 138.954 500 250C500 361.046 411.046 450 300 450C188.954 450 100 361.046 100 250C100 138.954 188.954 50 300 50Z" stroke="#4F46E5" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M300 100C383.513 100 450 166.487 450 250C450 333.513 383.513 400 300 400C216.487 400 150 333.513 150 250C150 166.487 216.487 100 300 100Z" stroke="#4F46E5" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M300 150C355.228 150 400 194.772 400 250C400 305.228 355.228 350 300 350C244.772 350 200 305.228 200 250C200 194.772 244.772 150 300 150Z" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto text-center relative backdrop-blur-sm bg-white/30 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[2px] w-12 bg-indigo-600"></div>
              <span className="mx-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase">團隊介紹</span>
              <div className="h-[2px] w-12 bg-indigo-600"></div>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                我們的團隊
              </span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              台灣人工智能推廣協會匯聚了各領域的精英專家，致力於推動台灣AI技術應用與發展。
              我們的團隊成員來自學術界、產業界和研究機構，擁有豐富的專業知識和實務經驗。
            </p>

            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <a 
                href="#executives" 
                className="group flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <span>了解更多</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDownIcon className="h-5 w-5" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* 執行團隊區域 */}
        <motion.div 
          id="executives"
          className="relative mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="relative">
            <div className="inline-flex items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">執行團隊</h2>
              <div className="ml-4 h-[1px] w-32 bg-gradient-to-r from-indigo-600 to-transparent"></div>
            </div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              我們的執行團隊由資深學者和產業專家組成，負責協會日常運作和策略方向制定。
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {executives.map((person) => (
              <motion.div
                key={person.id}
                variants={itemVariants}
                className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${person.background} border ${person.borderColor} hover:shadow-xl transform hover:-translate-y-1`}
                onMouseEnter={() => handleHover(person.id)}
                onMouseLeave={() => handleHover(null)}
              >
                {/* 頂部裝飾條 */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${person.accentColor} z-10`}></div>
                
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    {/* 頭像區域 */}
                    <div className="relative mb-6 group">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <img
                        className="h-36 w-36 rounded-full object-cover border-2 border-white shadow-md relative z-10"
                        src={person.imageUrl}
                        alt={person.name}
                      />
                    </div>
                    
                    {/* 姓名和職稱 */}
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-700">
                      {person.name}
                    </h3>
                    <div className="mt-1 mb-4">
                      <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                        {person.title}
                      </span>
                    </div>

                    {/* 專長標籤 */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {person.skills.map((skill, idx) => (
                        <span key={idx} className="inline-block px-3 py-1 text-xs font-medium bg-white/50 backdrop-blur-sm text-gray-700 rounded-full border border-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* 描述 */}
                    <p className="text-gray-600 text-sm mb-6">
                      {person.description}
                    </p>

                    {/* 社交媒體連結 */}
                    <div className="flex justify-center space-x-4">
                      {person.website && (
                        <motion.a 
                          href={person.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-indigo-600 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <span className="sr-only">個人網站</span>
                          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                          </svg>
                        </motion.a>
                      )}
                      {person.links.linkedin && (
                        <motion.a 
                          href={person.links.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-indigo-600 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 顧問團區域 */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="relative mb-16">
            <div className="inline-flex items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">顧問團</h2>
              <div className="ml-4 h-[1px] w-32 bg-gradient-to-r from-indigo-600 to-transparent"></div>
            </div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              我們的顧問團由各領域專家組成，為協會提供專業建議和策略指導。
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.id}
                variants={itemVariants}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${advisor.color}`}></div>
                
                <div className="p-6">
                  <div className="flex flex-col items-center mb-5">
                    {/* 頭像區域 - 改為圓形 */}
                    <div className="relative mb-4 group">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className={`absolute inset-0 rounded-full ${advisor.color} opacity-10`}></div>
                      <img
                        src={advisor.imageUrl}
                        alt={advisor.name}
                        className="h-28 w-28 rounded-full object-cover border-2 border-white shadow-md relative z-10 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* 標題區域 */}
                    <div className="text-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{advisor.name}</h3>
                      <p className="text-sm text-indigo-600">{advisor.title}</p>
                    </div>
                    
                    <div className={`flex items-center justify-center p-2 rounded-full ${advisor.color} bg-opacity-20 mb-4`}>
                      <advisor.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-700 mb-1">
                      <span className="font-medium">組織:</span> {advisor.organization}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">專長:</span> {advisor.expertise}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 