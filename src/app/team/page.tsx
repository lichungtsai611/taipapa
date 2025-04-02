'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Mock data for team members
const executives = [
  {
    id: 1,
    name: '蔡立忠',
    title: '理事長',
    description: '曾任台灣最大金控公司數據分析師，現為快找整合顧問有限公司AI工程師。擁有台大統計碩士學位學程畢業，專精於數據分析與AI應用。致力於推動台灣AI產業的實務應用與全民推廣。',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    links: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 2,
    name: '黃海潮',
    title: '副理事長',
    description: '現任台灣路威股份有限公司儲備幹部，台大統計碩士學位學程畢業。擁有豐富的數據分析經驗，專注於AI技術在企業的實務應用。積極推動AI技術的普及化與大眾化。',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    links: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 3,
    name: '廖文碩',
    title: '秘書長',
    description: '現任快找整合顧問有限公司負責人，10萬追蹤粉專「簡報仙貝」創辦人。擁有豐富的企業管理和網路社群經營經驗，專長於數位行銷與內容策略。致力於將AI知識以淺顯易懂的方式傳達給大眾。',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    links: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

const advisors = [
  {
    id: 1,
    name: '張耿瑭',
    title: '產業顧問',
    organization: '言回有限公司',
    expertise: '產業應用',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    id: 2,
    name: '王慧龍',
    title: '教育顧問',
    organization: '敏逆創新顧問',
    expertise: 'AI教育訓練',
    imageUrl: 'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    id: 3,
    name: '唐璽',
    title: '美術顧問',
    organization: '快找整合顧問有限公司',
    expertise: 'AI視覺設計',
    imageUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    id: 4,
    name: '潘柏瑜',
    title: '行銷顧問',
    organization: '花火教育學院',
    expertise: 'AI行銷策略',
    imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">我們的團隊</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            台灣人工智能推廣協會匯聚了各領域的精英專家，致力於推動台灣AI技術應用與發展。
            我們的團隊成員來自學術界、產業界和研究機構，擁有豐富的專業知識和實務經驗。
          </p>
        </motion.div>

        {/* Executive team section */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">執行團隊</h2>
          <p className="mt-4 text-gray-600">
            我們的執行團隊由資深學者和產業專家組成，負責協會日常運作和策略方向制定。
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {executives.map((person, index) => (
              <motion.div 
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      className="object-cover object-center transition duration-300 ease-in-out group-hover:scale-105"
                      src={person.imageUrl}
                      alt={person.name}
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                    <span className="ml-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {person.title}
                    </span>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{person.description}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    {person.links.twitter && (
                      <li>
                        <a href={person.links.twitter} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    )}
                    {person.links.linkedin && (
                      <li>
                        <a href={person.links.linkedin} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors section */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">顧問團</h2>
          <p className="mt-4 text-gray-600">
            我們的顧問團由各領域專家組成，為協會提供專業建議和策略指導。
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {advisors.map((person, index) => (
              <motion.div 
                key={person.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * (index % 4) }}
                viewport={{ once: true }}
                className="border-t border-gray-200 pt-4"
              >
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{person.name}</h3>
                    <p className="text-sm font-medium text-blue-600">{person.title}</p>
                    <p className="text-sm text-gray-600">{person.organization}</p>
                    <p className="text-sm text-gray-500">專長: {person.expertise}</p>
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