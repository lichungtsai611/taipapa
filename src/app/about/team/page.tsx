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
    imageUrl: '/images/team/Richard.webp',
    website: 'https://richard-info.com/',
    links: {
      linkedin: 'https://www.linkedin.com/in/richard-tsai-4474994a/',
    },
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
  },
  {
    id: 2,
    name: '王慧龍',
    title: '教育顧問',
    organization: '敏逆創新顧問',
    expertise: 'AI教育訓練',
    imageUrl: '/images/team/Larry.webp',
  },
  {
    id: 3,
    name: '唐璽',
    title: '美術顧問',
    organization: '快找整合顧問有限公司',
    expertise: 'AI視覺設計',
    imageUrl: '/images/team/Tang.webp',
  },
  {
    id: 4,
    name: '潘柏瑜',
    title: '行銷顧問',
    organization: '花火教育學院',
    expertise: 'AI行銷策略',
    imageUrl: '/images/team/Ryan.webp',
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
                    {person.website && (
                      <li>
                        <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">個人網站</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                          </svg>
                        </a>
                      </li>
                    )}
                    {person.links.linkedin && (
                      <li>
                        <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
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