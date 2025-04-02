'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, UsersIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Mock data for events
const upcomingEvents = [
  {
    id: 1,
    title: 'AI產業趨勢座談會',
    description: '邀請產業專家分享AI技術最新發展及產業應用案例，探討台灣AI產業的機會與挑戰。',
    date: '2023/12/15',
    time: '14:00-17:00',
    location: '台北市信義區信義路五段7號',
    type: '座談會',
    imageUrl: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop',
    registrationLink: '#'
  },
  {
    id: 2,
    title: 'AI倫理與監管工作坊',
    description: '討論AI技術發展過程中的倫理考量與監管挑戰，協助參與者了解如何在企業中實踐負責任的AI應用。',
    date: '2023/12/22',
    time: '09:30-16:30',
    location: '台北市信義區松高路68號',
    type: '工作坊',
    imageUrl: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1200&auto=format&fit=crop',
    registrationLink: '#'
  },
  {
    id: 3,
    title: '2024台灣AI創新論壇',
    description: '一年一度的大型AI論壇，聚焦於台灣AI技術創新與應用，提供產官學研交流平台。',
    date: '2024/01/20',
    time: '09:00-17:00',
    location: '台北南港展覽館',
    type: '論壇',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
    registrationLink: '#'
  },
];

const pastEvents = [
  {
    id: 4,
    title: '生成式AI實務應用研討會',
    description: '探討ChatGPT、DALL-E等生成式AI工具在企業中的實際應用案例與最佳實踐。',
    date: '2023/11/10',
    location: '台北市松山區敦化北路100號',
    type: '研討會',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'AI技術社群聚會',
    description: '定期舉辦的AI技術交流活動，邀請社群成員分享實作經驗與技術心得。',
    date: '2023/10/25',
    location: '台北市中正區重慶南路一段122號',
    type: '社群活動',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'AI醫療應用專題講座',
    description: '邀請醫療與AI領域專家，分享AI在醫療診斷、藥物研發等領域的最新應用進展。',
    date: '2023/09/18',
    location: '台北醫學大學',
    type: '講座',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'AI新創企業成果發表會',
    description: '台灣AI新創企業展示最新技術成果與產品，協助新創企業拓展商機與募資機會。',
    date: '2023/08/12',
    location: '台北市中山區中山北路二段44號',
    type: '發表會',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function EventsPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">活動訊息</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            台灣人工智慧推廣協會定期舉辦各類AI相關活動，包括研討會、工作坊、論壇等，
            提供產官學研各界交流平台，共同推動台灣AI技術發展與應用。
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">即將舉行的活動</h2>
            
            <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.article 
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
                >
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.imageUrl})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  </div>
                  <div className="flex-1 p-6 pb-8">
                    <div className="flex items-center gap-x-3 mb-4">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {event.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        {event.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold leading-6 text-gray-900">{event.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-3">{event.description}</p>
                    
                    <div className="mt-6 flex flex-col gap-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="mr-2 h-4 w-4 text-gray-400" />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link
                        href={event.registrationLink}
                        className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                      >
                        立即報名 <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">歷年活動回顧</h2>
            
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {pastEvents.map((event, index) => (
                <motion.article 
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${event.imageUrl})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-x-2 text-xs text-white/80 mb-2">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.type}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <MapPinIcon className="mr-1 h-3 w-3" />
                      {event.location}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link
                href="/events/archive"
                className="inline-flex items-center text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                查看所有歷史活動
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-24 bg-blue-50 rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">訂閱活動通知</h2>
                <p className="mt-4 text-base text-gray-600">
                  訂閱我們的電子報，獲取最新活動資訊、講座預告，以及AI產業相關動態。
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border-0 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    placeholder="請輸入您的電子郵件"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    >
                      訂閱
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  我們尊重您的隱私，您可以隨時取消訂閱。
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">活動合作與贊助</h2>
            <p className="mt-4 text-base text-gray-600">
              我們歡迎各界企業與組織進行活動合作或贊助，共同推廣AI技術與應用。
              如您有興趣合作，請聯繫我們的活動團隊。
            </p>
            
            <div className="mt-6 flex items-center">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                聯絡我們
              </Link>
              <Link
                href="/join"
                className="ml-4 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                成為協會會員 <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 