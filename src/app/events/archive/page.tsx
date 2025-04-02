'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Mock data for past events
const pastEvents = [
  {
    id: 1,
    title: 'AI新創企業成果發表會',
    description: '台灣AI新創企業展示最新技術成果與產品，協助新創企業拓展商機與募資機會。',
    date: '2023/08/12',
    location: '台北市中山區中山北路二段44號',
    category: '發表會',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=1200&auto=format&fit=crop',
    year: 2023,
  },
  {
    id: 2,
    title: 'AI醫療應用專題講座',
    description: '邀請醫療與AI領域專家，分享AI在醫療診斷、藥物研發等領域的最新應用進展。',
    date: '2023/09/18',
    location: '台北醫學大學',
    category: '講座',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    year: 2023,
  },
  {
    id: 3,
    title: 'AI技術社群聚會',
    description: '定期舉辦的AI技術交流活動，邀請社群成員分享實作經驗與技術心得。',
    date: '2023/10/25',
    location: '台北市中正區重慶南路一段122號',
    category: '社群活動',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
    year: 2023,
  },
  {
    id: 4,
    title: '生成式AI實務應用研討會',
    description: '探討ChatGPT、DALL-E等生成式AI工具在企業中的實際應用案例與最佳實踐。',
    date: '2023/11/10',
    location: '台北市松山區敦化北路100號',
    category: '研討會',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
    year: 2023,
  },
  {
    id: 5,
    title: '台灣人工智慧推廣協會成立大會',
    description: '協會正式成立，邀請產官學研各界代表參與，共同見證台灣AI發展的重要里程碑。',
    date: '2023/03/15',
    location: '台北國際會議中心',
    category: '大會',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
    year: 2023,
  },
  {
    id: 6,
    title: 'AI教師培訓工作坊',
    description: '為教育工作者提供AI教學應用培訓，協助將AI知識融入各級學校教學中。',
    date: '2023/04/20',
    location: '國立台灣師範大學',
    category: '工作坊',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    year: 2023,
  },
  {
    id: 7,
    title: 'AI產業趨勢論壇',
    description: '探討全球AI技術發展趨勢與台灣產業機會，邀請國際專家分享最新研究成果。',
    date: '2023/06/08',
    location: '台北南港展覽館',
    category: '論壇',
    imageUrl: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop',
    year: 2023,
  },
  {
    id: 8,
    title: 'AI倫理與法規研討會',
    description: '討論AI發展過程中的倫理考量與法規框架，協助建立台灣AI發展的良好環境。',
    date: '2022/11/18',
    location: '台大法學院',
    category: '研討會',
    imageUrl: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1200&auto=format&fit=crop',
    year: 2022,
  },
  {
    id: 9,
    title: 'AI金融應用座談會',
    description: '探討AI在金融科技領域的應用案例，包括風險評估、智能投顧、詐騙偵測等。',
    date: '2022/09/22',
    location: '台北金融大樓',
    category: '座談會',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
    year: 2022,
  },
  {
    id: 10,
    title: 'AI人才培育論壇',
    description: '討論台灣AI人才現況與未來需求，提出產學合作培育計畫與建議。',
    date: '2022/07/15',
    location: '國立台灣大學',
    category: '論壇',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    year: 2022,
  },
  {
    id: 11,
    title: 'AI農業應用成果展',
    description: '展示AI在農業領域的應用成果，包括智慧灌溉、病蟲害偵測、產量預測等。',
    date: '2022/05/10',
    location: '台中農業展覽館',
    category: '展覽',
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1200&auto=format&fit=crop',
    year: 2022,
  },
  {
    id: 12,
    title: 'AI創新創業分享會',
    description: '邀請AI創業成功者分享經驗，提供創業指導與資源連結，促進產業創新。',
    date: '2022/03/25',
    location: '台北創新中心',
    category: '分享會',
    imageUrl: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1200&auto=format&fit=crop',
    year: 2022,
  },
];

// Get unique categories and years for filters
const categories = Array.from(new Set(pastEvents.map(event => event.category)));
const years = Array.from(new Set(pastEvents.map(event => event.year))).sort((a, b) => b - a);

export default function EventsArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  
  // Filter events based on selected category and year
  const filteredEvents = pastEvents.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || event.year === Number(selectedYear);
    return categoryMatch && yearMatch;
  });
  
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/events" 
            className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            返回活動頁面
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">歷年活動回顧</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            瀏覽台灣人工智慧推廣協會過去舉辦的各類AI相關活動，了解台灣AI發展的歷程。
          </p>
        </motion.div>
        
        <motion.div
          className="mt-10 sm:flex sm:justify-between sm:gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-4">
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700">
                活動類型
              </label>
              <select
                id="category-filter"
                name="category-filter"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">全部類型</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700">
                年份
              </label>
              <select
                id="year-filter"
                name="year-filter"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="all">全部年份</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}年
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="hidden sm:block sm:self-end">
            <p className="text-sm text-gray-500">
              顯示 {filteredEvents.length} 筆活動（共 {pastEvents.length} 筆）
            </p>
          </div>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <motion.article 
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (index % 6) * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
              >
                <div className="aspect-h-1 aspect-w-2 bg-gray-200 sm:aspect-none sm:h-48">
                  <div
                    className="h-full w-full sm:h-full sm:w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.imageUrl})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-x-3 mb-3">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {event.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {event.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  
                  <p className="mt-3 text-sm text-gray-500 flex-grow line-clamp-3">{event.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <MapPinIcon className="mr-1 h-4 w-4" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">沒有符合條件的活動記錄</p>
            </div>
          )}
        </div>
        
        <motion.div
          className="mt-24 bg-blue-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">參與我們的活動</h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-600">
              想要參與更多精彩活動？加入協會成為會員，或訂閱我們的電子報，獲取最新活動資訊。
            </p>
            <div className="mt-6 flex justify-center gap-x-6">
              <Link
                href="/join"
                className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                成為會員
              </Link>
              <Link
                href="/events"
                className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 flex items-center"
              >
                查看即將舉行的活動 <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 