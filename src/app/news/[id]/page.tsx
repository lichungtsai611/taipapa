'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeftIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

// Mock news data - in a real application this would come from an API or database
const newsArticles = [
  {
    id: 1,
    title: '2023台灣AI技術應用高峰會圓滿落幕',
    fullContent: `
      <p>本次高峰會匯集國內外AI領域專家，分享最新AI技術發展與實務應用案例，吸引超過500位產學專業人士參與。現場展示了多項AI創新應用，包括自動化客服系統、智慧零售解決方案、醫療影像分析等多元領域的實例，展現AI技術的廣泛應用潛力。</p>
      
      <p>高峰會以「AI實務應用與產業創新」為主軸，邀請了來自Google、Microsoft、台灣科技大學等機構的專家學者發表主題演講。演講內容涵蓋了AI在企業轉型、教育創新、醫療健康等領域的應用案例與未來展望，為與會者提供了多元且深入的AI應用視角。</p>
      
      <p>大會也安排了四場專題工作坊，分別聚焦於「AI在教育領域的應用」、「企業AI轉型實務」、「AI與醫療照護創新」及「生活中的AI應用」，讓參與者能根據自身需求選擇參與，深入了解特定領域的AI應用。</p>
      
      <p>本次高峰會最大亮點是「AI實務應用展示區」，共有15家企業及研究機構展示其最新AI應用成果。參觀者可親身體驗各類AI工具，如智慧客服機器人、影像識別系統、自然語言處理應用等，並與開發團隊直接交流，探討實際應用場景與導入方式。</p>
      
      <p>本協會理事長於閉幕致詞中表示：「本次高峰會不僅展現了AI技術的多元應用可能，更重要的是促進了產學研各界的交流與合作。我們期待透過這樣的平台，能持續推動台灣AI應用生態系的發展，提升全民對AI的認識與應用能力，為台灣的數位轉型注入新動能。」</p>
      
      <p>基於本次高峰會的成功舉辦，協會已宣布2024年將擴大舉辦第二屆高峰會，並計劃增加更多互動式工作坊與應用展示，提供更豐富的AI學習與交流機會。</p>
    `,
    date: '2023年12月15日',
    category: '活動',
    author: '協會秘書處',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    tags: ['高峰會', 'AI應用', '產業創新', '技術交流'],
  },
  {
    id: 2,
    title: '本協會與台灣科技大學簽署產學合作備忘錄',
    fullContent: `
      <p>為促進AI技術研發與人才培育，本協會與台灣科技大學簽署產學合作MOU，共同推動AI技術的研究與實務應用。雙方將合作開發AI課程、舉辦工作坊、提供學生實習機會，並共同執行產業應用研究計畫，促進學術研究與產業需求的結合。</p>
      
      <p>此次合作協議的主要內容包括：</p>
      <ul>
        <li>共同開發AI實務應用課程，融合理論與實作，培育具備實戰能力的AI人才</li>
        <li>為在學學生提供業界實習機會，縮短學用落差</li>
        <li>合作執行產業應用研究計畫，解決企業實際問題</li>
        <li>共同舉辦AI應用工作坊、黑客松等活動，促進創新想法的實踐</li>
        <li>建立AI技術與應用的知識共享平台，促進學術與產業的交流</li>
      </ul>
      
      <p>台灣科技大學校長表示：「AI已成為推動產業創新與社會發展的關鍵技術，本校一直致力於AI技術的研究與教學。透過與台灣人工智慧實務應用推廣協會的合作，我們期待能將學術研究成果更有效地轉化為實際應用，為台灣培育更多AI領域的專業人才。」</p>
      
      <p>本協會理事長則指出：「產學合作是推動AI實務應用的重要策略。台灣科技大學在AI技術研究方面具有豐富的學術資源與研究成果，而本協會則擁有廣泛的產業連結與實務經驗。雙方合作將能產生強大的綜效，加速AI技術在台灣各產業的落地應用。」</p>
      
      <p>根據合作規劃，雙方將於2024年第一季推出一系列AI實務應用課程，內容涵蓋機器學習、自然語言處理、電腦視覺等主題，並結合實際案例進行教學。同時，協會會員企業將提供至少20個實習崗位，讓台科大學生有機會將所學知識應用於實際場景。</p>
      
      <p>此外，雙方也計劃共同申請科技部產學合作計畫，針對智慧製造、數位行銷、健康照護等領域的AI應用進行研究開發，為台灣企業提供創新解決方案。</p>
    `,
    date: '2023年11月20日',
    category: '合作',
    author: '協會理事長',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
    tags: ['產學合作', '人才培育', '研究計畫', '台灣科技大學'],
  },
  {
    id: 3,
    title: '企業AI轉型免費諮詢服務正式上線',
    fullContent: `
      <p>本協會推出企業AI轉型免費諮詢服務，由AI專家團隊為企業提供專業建議，協助企業評估AI導入的可行性與效益。服務內容包括AI轉型策略規劃、適用工具評估、人員培訓建議等，幫助企業降低AI導入門檻，提升數位競爭力。</p>
      
      <p>此項免費諮詢服務專為中小企業設計，旨在協助資源有限的企業了解並評估AI技術導入的可行性與潛在效益。服務流程包括：</p>
      
      <ol>
        <li>初步線上評估：企業填寫需求表單，說明目前面臨的挑戰與期望透過AI解決的問題</li>
        <li>專家媒合：根據企業需求，媒合適合的AI領域專家提供諮詢</li>
        <li>一對一諮詢：安排90分鐘的深度諮詢，了解企業現況並提供初步建議</li>
        <li>書面報告：提供評估報告，包含AI導入建議、適用工具、預估成本與效益分析</li>
        <li>後續支援：為有意願進一步導入AI的企業提供資源連結與方案建議</li>
      </ol>
      
      <p>本協會數位轉型部門主任表示：「許多中小企業對AI技術有興趣，但不知從何著手，或擔心投入大量資源後無法獲得預期效益。我們推出這項免費諮詢服務，就是希望降低企業嘗試AI技術的門檻，協助他們找到最適合自身需求的AI應用切入點。」</p>
      
      <p>服務上線首月，協會預計可提供至少30家企業的免費諮詢。目前已與20位來自不同AI領域的專家達成合作，包括機器學習、自然語言處理、電腦視覺、流程自動化等專業人士，能夠針對不同產業與需求提供客製化建議。</p>
      
      <p>有意申請此項服務的企業，可透過協會官網填寫申請表單，或來電洽詢詳細資訊。協會將於收到申請後五個工作日內完成初步評估並安排後續諮詢流程。</p>
    `,
    date: '2023年10月5日',
    category: '服務',
    author: '數位轉型部門',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    tags: ['企業諮詢', 'AI轉型', '免費服務', '數位競爭力'],
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  
  // Find the current news article
  const article = newsArticles.find(article => article.id === id);
  
  // Find previous and next articles for navigation
  const currentIndex = newsArticles.findIndex(article => article.id === id);
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null;
  
  if (!article) {
    return (
      <div className="bg-white py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">找不到此篇文章</h1>
          <p className="mt-6 text-base text-gray-600">您要查看的文章不存在或已被移除</p>
          <div className="mt-8">
            <Link 
              href="/news" 
              className="flex items-center text-blue-600 hover:text-blue-500"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              返回最新消息
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <article>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/news" 
              className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-8"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              返回最新消息
            </Link>
            
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                {article.category}
              </span>
            </div>
            
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {article.title}
            </h1>
            
            <div className="mt-4 flex items-center gap-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1" />
                <span>{article.author}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-gray-50"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${article.imageUrl}')` }}
            ></div>
          </motion.div>
          
          <motion.div 
            className="mt-10 prose prose-lg prose-blue mx-auto"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          <motion.div 
            className="mt-8 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {article.tags?.map(tag => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
              >
                #{tag}
              </span>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 border-t border-gray-200 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-between">
              {prevArticle ? (
                <Link 
                  href={`/news/${prevArticle.id}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-1" />
                  上一篇: {prevArticle.title.length > 20 ? prevArticle.title.substring(0, 20) + '...' : prevArticle.title}
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextArticle ? (
                <Link 
                  href={`/news/${nextArticle.id}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
                >
                  下一篇: {nextArticle.title.length > 20 ? nextArticle.title.substring(0, 20) + '...' : nextArticle.title}
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
} 