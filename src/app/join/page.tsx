'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const membershipTypes = [
  {
    name: '組織會員',
    slug: 'organization',
    description: '適合企業、學校、政府機構、非營利組織',
    features: [
      '專業AI導入諮詢服務',
      '優先參與協會舉辦的各項活動',
      'AI技術與應用研討會免費參加',
      '專屬AI應用案例分享會',
      '組織成員享有會員價格參與課程',
      '協會出版品優惠',
      '可刊登組織Logo於協會官網',
      '優先媒合產學合作機會',
    ],
    cta: '申請組織會員',
    price: 'NT$30,000 / 年',
  },
  {
    name: '個人會員',
    slug: 'individual',
    description: '適合一般民眾、專業人士、學生',
    features: [
      'AI相關課程會員優惠價',
      '協會活動優先報名權',
      '會員專屬線上學習資源',
      '定期電子報與AI資訊更新',
      '參與會員專屬社群',
      '免費參加月度AI應用分享會',
      '會員專屬問答服務',
      '協會出版品優惠',
    ],
    cta: '申請個人會員',
    price: 'NT$3,000 / 年',
  },
  {
    name: '教育會員',
    slug: 'education',
    description: '適合教師、講師、教育工作者',
    features: [
      'AI教育資源與教材取得',
      '教學用AI工具推薦與指導',
      '教師專屬工作坊',
      'AI教學方法分享社群',
      '協助規劃學校AI課程',
      '教育應用案例分享',
      '學生團體優惠',
      '跨校交流與合作機會',
    ],
    cta: '申請教育會員',
    price: 'NT$5,000 / 年',
  },
];

export default function JoinPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">成為會員</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            加入台灣人工智慧實務應用推廣協會，一起推動全民AI素養，協助民眾理解並運用AI工具，提升生活品質與職場競爭力。我們提供多元的會員類型，滿足不同需求。
          </p>
        </motion.div>

        <motion.div
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {membershipTypes.map((plan, planIdx) => (
            <motion.div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + planIdx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                  <p className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                    {plan.price}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/join/${plan.slug}`}
                className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-24 max-w-4xl rounded-3xl bg-blue-50 px-6 py-16 sm:mt-32 sm:px-8 lg:flex lg:max-w-none lg:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-full max-w-md px-8 lg:w-1/2 lg:max-w-none lg:py-8 lg:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">為什麼加入我們？</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              台灣人工智慧實務應用推廣協會致力於推廣AI技術於社會各領域的實務應用，協助全民提升數位素養，掌握AI時代的關鍵能力。
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                了解更多協會資訊
              </Link>
            </div>
          </div>
          <div className="mt-10 w-full max-w-md px-8 lg:mt-0 lg:w-1/2 lg:max-w-none lg:py-8 lg:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">會員申請流程</h2>
            <ul role="list" className="mt-6 space-y-4 text-base leading-7 text-gray-600">
              <li className="flex gap-x-3">
                <span className="rounded-full bg-blue-600 px-2.5 text-white">1</span> 選擇適合您的會員類型
              </li>
              <li className="flex gap-x-3">
                <span className="rounded-full bg-blue-600 px-2.5 text-white">2</span> 填寫線上申請表格
              </li>
              <li className="flex gap-x-3">
                <span className="rounded-full bg-blue-600 px-2.5 text-white">3</span> 繳交會費
              </li>
              <li className="flex gap-x-3">
                <span className="rounded-full bg-blue-600 px-2.5 text-white">4</span> 審核通過後成為正式會員
              </li>
              <li className="flex gap-x-3">
                <span className="rounded-full bg-blue-600 px-2.5 text-white">5</span> 開始享受會員權益
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">有任何問題嗎？</h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            如果您對會員申請有任何疑問，歡迎聯絡我們。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              聯絡我們
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 