'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AcademicCapIcon, BookOpenIcon, DocumentTextIcon, NewspaperIcon, ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Sample publications data
const publications = [
  {
    id: 1,
    title: "超有料！職場第一實用的 AI 工作術：用對工具讓生產力全面進化！",
    authors: ["施威銘研究室"],
    publisher: "旗標",
    year: "2024",
    isbn: "9786263334144",
    abstract: "職場上最實用的一本 AI 工作技，比傳統做法快 N 倍，您試過就回不去！不限 ChatGPT！30 大 AI 職場工具，99%「零花費」輕鬆上手！在職場上，舉凡：資料整理、會議抄寫、閱讀資料蒐集、收發信、做簡報、翻譯、客服、合約處理、資料分析、資料視覺化、寫程式、設計廣宣圖像等，都能透過正確的 AI 工具大幅提升效率。",
    category: "專書",
    imageUrl: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/099/66/0010996613.jpg&v=65cf2878&w=348&h=348",
    link: "https://www.books.com.tw/products/0010996613",
    tags: ["AI工具", "職場效率", "人工智慧", "生產力"],
    featured: true
  },
  {
    id: 2,
    title: "ChatGPT全新功能: 4o/o1/o3、Reason、Search、Canvas、Projects、Voice、Sora",
    authors: ["施威銘研究室"],
    publisher: "旗標",
    year: "2024",
    isbn: "9786263334762",
    abstract: "本書詳細介紹 ChatGPT 全新功能，包含文生視訊影片 Sora、AI 實時推理 Reason、網路搜尋 Search、多模態畫布 Canvas、專案管理 Projects、語音對話 Voice 等，助您開創 AI 無限可能！從基礎入門到進階應用，打造個人專屬 GPT，整合 API 開發多元創新服務。",
    category: "專書",
    imageUrl: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/101/41/0011014166.jpg&v=6658bfcc&w=348&h=348",
    link: "https://www.books.com.tw/products/0011014166",
    tags: ["ChatGPT", "AI應用", "Sora", "人工智慧"],
    featured: true
  },
  {
    id: 10,
    title: "ChatGPT一本搞定：讓AI成為你的工作好幫手，徹底打敗拒絕新科技的人【最新增訂版】",
    authors: ["謝孟諺（Mr.GoGo）"],
    publisher: "財經傳訊",
    year: "2024",
    isbn: "9786267263198",
    abstract: "新增AI應用商店簡介，讓你量身打造AI助手！本書採用超級白話解說，Step By Step教會你完整操作 ChatGPT，從基礎設定到進階應用，讓你輕鬆成為數位時代的贏家。書中涵蓋各行各業實用案例，如AI行銷文案、社群貼文、簡報製作、會議紀錄、公文撰寫等，協助你快速提升工作效率。",
    category: "專書",
    imageUrl: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/100/76/0011007639.jpg&v=664288f4&w=348&h=348",
    link: "https://www.books.com.tw/products/0011007639",
    tags: ["ChatGPT", "AI工作術", "數位轉型", "生產力"],
    featured: true
  },
  {
    id: 3,
    title: "30個必學的AI行政工作術：搞定會議、行程、簡報、文書、圖表、影音、資料庫，事半功倍，準時下班！",
    authors: ["王丰俗"],
    publisher: "方舟文化",
    year: "2024",
    isbn: "9786267288818",
    abstract: "本書集結 30 個 AI 行政工作實用技巧，幫助工作者有效處理各類文書、會議、簡報等日常任務。透過精準的 AI 提示詞和工具推薦，讓你輕鬆完成以往耗時的工作，實現準時下班的目標。從文件整理到數據分析，本書提供全方位的 AI 解決方案。",
    category: "專書",
    imageUrl: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/098/49/0010984980.jpg&v=654cd65b&w=348&h=348",
    link: "https://www.books.com.tw/products/0010984980",
    tags: ["AI助理", "行政工作", "效率提升", "數位轉型"],
    featured: false
  },
  {
    id: 4,
    title: "AI行銷引爆術：用AI讓品牌業績翻倍成長",
    authors: ["高培洪"],
    publisher: "樂金文化",
    year: "2024",
    isbn: "9786267284643",
    abstract: "本書介紹如何利用 AI 技術優化行銷策略，從內容創作、數據分析到用戶互動，全面提升品牌營銷效能。作者分享了實用的 AI 工具和案例，幫助行銷人員降低成本同時提高轉換率。特別適合想要在競爭激烈的市場中脫穎而出的企業和個人。",
    category: "專書",
    imageUrl: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/101/04/0011010405.jpg&v=6650d97c&w=348&h=348",
    link: "https://www.books.com.tw/products/0011010405",
    tags: ["AI行銷", "數位行銷", "品牌成長", "業績提升"],
    featured: false
  },
  {
    id: 5,
    title: "AI 駭客養成計畫：用 AI 輔助解析漏洞，打造防禦新工具",
    authors: ["宋彥璋", "蔡松廷"],
    publisher: "電腦人文化",
    year: "2024",
    isbn: "9786263332393",
    abstract: "本書探討如何運用 AI 技術進行網路安全分析，透過實際案例和步驟，教讀者如何使用 AI 工具檢測和修補安全漏洞。書中涵蓋常見的網路攻擊手法、防禦策略，以及如何結合 LLM 模型強化資安工作。適合資安工作者、IT 專業人員或對網路安全有興趣的讀者。",
    category: "專書",
    imageUrl: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/099/30/0010993073.jpg&v=65c31772&w=348&h=348",
    link: "https://www.books.com.tw/products/0010993073",
    tags: ["AI資安", "網路安全", "駭客防禦", "資訊安全"],
    featured: false
  },
  {
    id: 6,
    title: "最強職場助攻！ChatGPT + AI 高效工作術",
    authors: ["鄧君如", "文淵閣工作室"],
    publisher: "碁峰",
    year: "2024",
    isbn: "9786263336209",
    abstract: "本書提供全方位 ChatGPT 與 AI 工作技巧，從基礎設定到進階應用，包含打造三大 AI 助理 GPT 的影音教學。涵蓋高效文案寫作、簡報製作、會議紀錄、資料統整等職場實用技能，並透過實際案例示範如何將 AI 整合到日常工作流程中，大幅提升工作效率。",
    category: "專書",
    imageUrl: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/100/05/0011000539.jpg&v=6635b56a&w=348&h=348",
    link: "https://www.books.com.tw/products/0011000539",
    tags: ["ChatGPT", "AI助理", "職場效率", "影音教學"],
    featured: true
  },
  {
    id: 7,
    title: "生成式AI對台灣創意產業的影響與機會",
    authors: ["鄭光遠", "林雅婷"],
    publisher: "台灣經濟研究院",
    year: "2023",
    abstract: "本報告深入探討生成式AI技術對台灣設計、廣告、媒體、遊戲等創意產業的影響，分析其為傳統創意流程帶來的變革與新機會。報告包含多個台灣本土案例研究，並提出產業轉型策略建議。",
    category: "研究報告",
    imageUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop",
    link: "#",
    tags: ["生成式AI", "創意產業", "藝術設計"],
    featured: false
  },
  {
    id: 8,
    title: "AI驅動下的台灣智慧製造：實踐與前景",
    authors: ["張建華", "許志明", "周莉莉"],
    publisher: "工業技術研究院",
    year: "2024",
    abstract: "本研究報告聚焦於AI技術在台灣製造業的實踐案例，涵蓋預測性維護、智能品質控制、自動化生產規劃等應用領域。報告基於對台灣製造業領導者的深度訪談及工廠實地調查，提出AI驅動下的台灣製造業升級路徑。",
    category: "研究報告",
    imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
    link: "#",
    tags: ["智慧製造", "工業4.0", "供應鏈優化"],
    featured: false
  },
  {
    id: 9,
    title: "人工智慧賦能：台灣中小企業實戰指南",
    authors: ["黃志明", "陳美玲"],
    publisher: "天下文化",
    year: "2023",
    isbn: "978-3-16-148410-5",
    abstract: "本書專為台灣中小企業設計，提供實用的AI導入方法與策略。書中包含多個本土成功案例、實用工具介紹、成本效益分析方法，以及分階段實施計劃。對於資源有限但希望透過AI提升競爭力的中小企業具有重要參考價值。",
    category: "專書",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
    link: "#",
    tags: ["中小企業", "數位轉型", "實戰指南"],
    featured: false
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = Array.from(new Set(publications.map(pub => pub.category)));

  // Filter publications based on active category and search query
  const filteredPublications = publications.filter(pub => {
    const matchesCategory = activeCategory ? pub.category === activeCategory : true;
    const matchesSearch = searchQuery.trim() === '' ? true : 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      pub.authors.join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.tags.join(' ').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured publications
  const featuredPublications = publications.filter(pub => pub.featured);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '期刊論文': return <DocumentTextIcon className="h-5 w-5" />;
      case '專書': return <BookOpenIcon className="h-5 w-5" />;
      case '會議論文': return <AcademicCapIcon className="h-5 w-5" />;
      case '研究報告': return <NewspaperIcon className="h-5 w-5" />;
      default: return <DocumentTextIcon className="h-5 w-5" />;
    }
  };

  const formatCitation = (pub: typeof publications[0]) => {
    const authors = pub.authors.join(', ');
    const year = pub.year;
    const title = pub.title;
    const publisher = pub.publisher;
    const isbn = pub.isbn ? `ISBN: ${pub.isbn}` : '';
    
    return `${authors} (${year}). ${title}. ${publisher}. ${isbn}`;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-100">
            知識分享
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI好書推薦
            </span>
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            精選書籍、文獻與研究報告，協助您深入了解AI技術的前沿發展與應用實踐
          </p>
        </motion.div>
        
        {/* Featured publications */}
        {featuredPublications.length > 0 && (
          <div className="mb-20">
            <motion.h2 
              className="text-2xl font-bold tracking-tight text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                精選推薦
              </span>
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {featuredPublications.map((pub) => (
                <motion.div 
                  key={pub.id}
                  className="flex flex-col overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 transform hover:-translate-y-2"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={pub.imageUrl}
                      alt={pub.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-indigo-700 mb-2 shadow-sm">
                        {pub.category}
                      </span>
                      <h3 className="text-lg font-bold text-white line-clamp-2 drop-shadow-md mb-1">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-white/80 font-medium">
                        {pub.authors.join(', ')} • {pub.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <p className="text-gray-600 line-clamp-3 text-sm mb-6">
                      {pub.abstract}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 border border-indigo-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        了解更多
                        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
        
        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">搜尋出版品</label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    className="block w-full rounded-xl border-0 py-3.5 pl-5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="輸入關鍵字、作者或標籤..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">分類篩選</label>
                <div className="relative">
                  <select
                    id="category"
                    className="block w-full rounded-xl border-0 py-3.5 pl-5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    value={activeCategory || ''}
                    onChange={(e) => setActiveCategory(e.target.value === '' ? null : e.target.value)}
                  >
                    <option value="">全部分類</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Publications List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredPublications.map((pub) => (
                <motion.div
                  key={pub.id}
                  variants={fadeInUp}
                  className="flex flex-col overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={pub.imageUrl}
                      alt={pub.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center mb-2">
                        <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
                          {pub.category}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white line-clamp-2 drop-shadow-sm">
                        {pub.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-sm text-gray-600">
                        {pub.authors.join(', ')} • {pub.year}
                      </div>
                    </div>
                    
                    <p className={`text-sm text-gray-600 ${expandedId === pub.id ? '' : 'line-clamp-3'} mb-4`}>
                      {pub.abstract}
                    </p>
                    
                    {pub.abstract.length > 150 && (
                      <button 
                        onClick={() => toggleExpand(pub.id)}
                        className="text-sm text-indigo-600 hover:text-indigo-800 font-medium mb-4 inline-flex items-center transition-colors"
                      >
                        {expandedId === pub.id ? '顯示較少' : '閱讀更多'}
                        <span className={`ml-1 transition-transform duration-200 ${expandedId === pub.id ? 'rotate-180' : ''}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                    )}
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 border border-gray-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        查看來源
                        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
              <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg mb-4">沒有找到符合條件的出版品</p>
              <p className="text-gray-700">請嘗試不同的搜尋關鍵字或分類選項</p>
            </div>
          )}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-24 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 overflow-hidden shadow-xl border border-indigo-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="px-8 py-12 md:px-12 md:py-16 md:flex items-center justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
            <div className="absolute right-20 bottom-10 w-60 h-60 bg-indigo-400 rounded-full opacity-10"></div>
            <div className="absolute left-10 top-40 w-20 h-20 bg-purple-300 rounded-full opacity-20"></div>
            
            <div className="md:w-3/5 mb-8 md:mb-0 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">想推薦一本好書？</h3>
              <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                如果您有優質的AI相關書籍、論文或研究報告想與我們分享，歡迎聯繫我們將其加入到推薦列表中。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  聯絡我們
                </Link>
              </div>
            </div>
            <div className="md:w-2/5 relative z-10">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white opacity-15 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}