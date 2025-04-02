'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Mock data for case studies
const caseStudies = [
  {
    id: 1,
    title: '台積電導入AI預測性維護系統',
    description: '台積電成功導入AI預測性維護系統，透過即時感測器數據分析和機器學習，預測設備故障時間，大幅降低突發停機風險，提升生產效率。系統整合後，設備故障率下降35%，維護成本降低28%，年度節省達數億台幣。',
    longDescription: `台積電面臨的挑戰是如何在不影響生產的情況下，提前預測和預防設備故障。傳統的定期維護模式既耗費人力又無法完全避免突發故障。

    解決方案為建立基於機器學習的預測性維護系統。系統從工廠內數萬個感測器即時收集數據，透過自訂演算法分析設備運行參數的微小變化，預測潛在故障。系統還會根據歷史維護記錄不斷優化預測準確度。

    導入結果顯示，設備故障預測準確率達到88%，平均提前72小時預警，大幅降低突發停機風險。設備故障率下降35%，維護成本降低28%，年度節省達數億台幣。此外，產線效率提升12%，晶圓良率提高2.5個百分點。`,
    outcomes: [
      '設備故障預測準確率達88%',
      '平均提前72小時預警潛在故障',
      '設備故障率下降35%',
      '維護成本降低28%',
      '產線效率提升12%',
      '晶圓良率提高2.5個百分點'
    ],
    industry: '半導體製造',
    aiSolution: '預測性維護',
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1594970078455-710d3e75d56d?q=80&w=1200&auto=format&fit=crop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tsmc.svg/1200px-Tsmc.svg.png',
    featured: true,
  },
  {
    id: 2,
    title: '玉山銀行客服智能機器人升級',
    description: '玉山銀行升級客服智能機器人系統，整合NLP和知識圖譜技術，提升複雜問題處理能力。新系統可處理90%以上常見查詢，準確率達95%，客戶滿意度提升30%，同時減少25%人工客服負擔。',
    longDescription: `玉山銀行原有的客服系統難以處理複雜問題，客戶往往需要等待人工客服，造成服務延遲和客戶體驗下降。尤其在疫情期間，遠端金融服務需求激增，進一步加劇這一問題。

    解決方案是開發新一代智能客服機器人，整合自然語言處理(NLP)和知識圖譜技術。系統能理解複雜問句和多輪對話，精確識別客戶意圖，並連接內部知識庫提供專業回覆。同時，系統具備學習能力，透過真實對話持續優化。

    導入新系統後，智能機器人可處理90%以上的常見查詢，平均回覆時間從45秒降至5秒，回答準確率達95%。客服中心人力需求減少25%，每年節省營運成本約2,500萬台幣。客戶滿意度調查顯示，滿意度提升30%，平均解決時間減少60%。`,
    outcomes: [
      '智能機器人處理90%以上常見查詢',
      '回覆準確率達95%',
      '客服中心人力需求減少25%',
      '年節省營運成本約2,500萬台幣',
      '客戶滿意度提升30%',
      '平均解決時間減少60%'
    ],
    industry: '金融服務',
    aiSolution: '智能客服',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/E.SUN_FHC_logo.svg/1200px-E.SUN_FHC_logo.svg.png',
    featured: true,
  },
  {
    id: 3,
    title: '全聯導入AI商品補貨預測系統',
    description: '全聯在全台門市導入AI商品補貨預測系統，分析銷售趨勢、季節變化、活動影響等因素，精準預測各門市商品需求。系統導入後，商品缺貨率降低40%，過剩庫存減少25%，生鮮食品浪費降低32%。',
    longDescription: `全聯面臨的挑戰是全台超過1,000家門市的庫存管理。不同地區、不同時段的銷售模式差異大，導致頻繁出現部分商品缺貨或庫存過剩情況，尤其是生鮮食品的損耗率高。

    解決方案是開發AI商品補貨預測系統，整合多方數據源，包括歷史銷售記錄、季節變化、天氣預報、促銷活動、節假日和區域人口特性等。系統使用機器學習演算法，針對每家門市、每個商品類別建立獨特的需求預測模型。

    系統實施後，商品補貨準確率提高到92%，門市缺貨率降低40%，過剩庫存減少25%。生鮮食品浪費降低32%，大幅減少損耗。總體來看，系統優化了整體供應鏈效率，提升銷售額8%，同時減少庫存成本15%，年度節省成本超過1億台幣。`,
    outcomes: [
      '商品補貨準確率提高到92%',
      '門市缺貨率降低40%',
      '過剩庫存減少25%',
      '生鮮食品浪費降低32%',
      '銷售額提升8%',
      '庫存成本減少15%'
    ],
    industry: '零售',
    aiSolution: '需求預測',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/PX_Pay_Logo.svg/1200px-PX_Pay_Logo.svg.png',
    featured: false,
  },
  {
    id: 4,
    title: '台北榮總AI醫學影像診斷輔助系統',
    description: '台北榮總導入AI醫學影像診斷輔助系統，協助醫師判讀X光、CT和MRI影像，提高肺結節、腦中風等疾病診斷準確度。系統導入後，診斷準確率提升15%，診斷時間縮短40%，早期發現率提高22%。',
    longDescription: `台北榮總每日需處理大量醫學影像，醫師工作負擔重，且某些細微病變容易被忽略。醫院需要提高診斷效率和準確性，特別是在肺結節、腦中風等時效性高的疾病診斷方面。

    解決方案是引入基於深度學習的醫學影像AI輔助診斷系統，該系統經過數十萬張醫學影像訓練，能夠識別肺部結節、腦出血、骨折等多種病變特徵。系統整合到醫院PACS（影像儲存與通訊系統），醫師判讀影像時，AI同步分析並標記可疑區域，輔助醫師做出判斷。

    系統實施一年後，診斷準確率提升15%，假陽性率降低20%，診斷時間平均縮短40%。肺癌、腦中風等疾病的早期發現率提高22%，有效改善治療預後。醫師報告，工作效率提升，96%的醫師表示系統確實提供臨床決策有價值的輔助。`,
    outcomes: [
      '診斷準確率提升15%',
      '假陽性率降低20%',
      '診斷時間平均縮短40%',
      '早期疾病發現率提高22%',
      '緊急案例反應時間縮短35%',
      '96%醫師認可系統臨床價值'
    ],
    industry: '醫療',
    aiSolution: '醫學影像分析',
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/ROC_Veterans_Affairs_Council_Seal.svg/1200px-ROC_Veterans_Affairs_Council_Seal.svg.png',
    featured: false,
  },
  {
    id: 5,
    title: '王品集團導入AI顧客體驗優化系統',
    description: '王品集團在旗下餐廳導入AI顧客體驗優化系統，分析顧客行為、偏好與評價，提供個性化服務建議。系統整合後，顧客滿意度提升18%，回客率增加23%，營收增長12%，同時提升了營運效率。',
    longDescription: `王品集團擁有多個餐飲品牌，面臨的挑戰是如何在保持品質的同時，提供個性化顧客體驗，並最大化餐廳營運效率。傳統方式難以捕捉顧客細微需求變化，影響整體滿意度。

    解決方案是開發AI顧客體驗優化系統，整合多個數據源，包括訂位記錄、消費習慣、用餐時間、點餐偏好、網路評價和社交媒體反饋等。系統運用自然語言處理分析顧客評論，辨識滿意和不滿意因素；利用機器學習建立顧客偏好模型，預測最適合的菜單推薦和服務選項。

    系統導入一年後，顧客滿意度提升18%，回客率增加23%。餐廳平均營收增長12%，平均消費額提高15%。菜單優化減少了9%的食材浪費，人力調度優化提升了服務效率和員工滿意度。總體來看，系統成功在增加收入和提升顧客體驗之間取得平衡。`,
    outcomes: [
      '顧客滿意度提升18%',
      '回客率增加23%',
      '平均消費額提高15%',
      '餐廳營收增長12%',
      '食材浪費減少9%',
      '服務效率提升20%'
    ],
    industry: '餐飲',
    aiSolution: '顧客體驗優化',
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1200&auto=format&fit=crop',
    logo: 'https://www.wow-group.com.tw/images/logo.svg',
    featured: false,
  },
  {
    id: 6,
    title: '台灣高鐵實施AI預測性維護',
    description: '台灣高鐵導入AI預測性維護系統，持續監測車輛和軌道狀態，預測設備故障時間和位置。系統導入後，運行中斷事件減少35%，維護成本降低25%，設備使用壽命延長15%，同時確保了更高的安全性。',
    longDescription: `台灣高鐵的挑戰在於如何維持高速列車系統的穩定性和安全性。傳統的定期檢修模式難以捕捉設備運行中的微小異常，有時導致計畫外停運，影響服務品質。

    解決方案是導入AI預測性維護系統，在車輛和軌道上安裝數千個物聯網感測器，即時監測溫度、震動、噪音、壓力等參數。系統利用機器學習分析這些數據，識別出可能導致故障的異常模式。當系統偵測到潛在問題，會自動警示維修團隊，並建議最佳維修時間和方法。

    系統實施兩年後，非計畫性運行中斷事件減少35%，維護團隊處理緊急維修的時間減少50%。預防性維護取代了部分緊急維修，使維護成本整體降低25%。同時，設備使用壽命平均延長15%，每年節省維修成本超過6,000萬台幣，同時提高了旅客安全和服務準時率。`,
    outcomes: [
      '非計畫性運行中斷事件減少35%',
      '緊急維修時間減少50%',
      '維護成本降低25%',
      '設備使用壽命延長15%',
      '列車準時率提高5%',
      '年節省維修成本超過6,000萬'
    ],
    industry: '交通運輸',
    aiSolution: '預測性維護',
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Taiwan_High_Speed_Rail_logo.svg/1200px-Taiwan_High_Speed_Rail_logo.svg.png',
    featured: false,
  },
];

// Filter case studies for featured section
const featuredCases = caseStudies.filter(cs => cs.featured);

// Get unique industries and solutions for filters
const industries = Array.from(new Set(caseStudies.map(cs => cs.industry)));
const aiSolutions = Array.from(new Set(caseStudies.map(cs => cs.aiSolution)));

export default function CasesPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI 應用案例</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            探索台灣企業和組織成功導入AI技術的真實案例，了解AI如何解決實際業務挑戰，
            創造具體價值，並從這些經驗中獲取寶貴啟示。
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <motion.div 
          className="mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">精選案例</h2>
          <div className="mt-8 space-y-16">
            {featuredCases.map((caseStudy, idx) => (
              <motion.div 
                key={caseStudy.id} 
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mt-6 lg:col-span-7 lg:mt-0">
                  <div className="flex items-center">
                    <img 
                      src={caseStudy.logo} 
                      alt={caseStudy.title} 
                      className="h-8 w-auto object-contain mr-3" 
                    />
                    <span className="text-sm text-gray-500">{caseStudy.industry} | {caseStudy.aiSolution}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 lg:text-2xl">{caseStudy.title}</h3>
                  <p className="mt-4 text-base text-gray-600">{caseStudy.description}</p>
                  
                  <div className="mt-5">
                    <h4 className="text-sm font-medium text-gray-900">關鍵成果：</h4>
                    <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {caseStudy.outcomes.slice(0, 4).map((outcome) => (
                        <li key={outcome} className="flex items-center text-sm text-gray-600">
                          <svg className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href={`/cases/${caseStudy.id}`} 
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      閱讀完整案例 <ArrowRightIcon className="inline h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={caseStudy.imageUrl}
                      alt={caseStudy.title}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Case Studies */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">所有案例</h2>
            <div className="flex gap-x-2">
              {/* Future implementation: Filter buttons can be added here */}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {caseStudies.map((caseStudy, idx) => (
              <motion.div 
                key={caseStudy.id} 
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (idx % 6) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-h-3 aspect-w-5 bg-gray-200 sm:aspect-none sm:h-48">
                  <img
                    src={caseStudy.imageUrl}
                    alt={caseStudy.title}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-x-2">
                    <img src={caseStudy.logo} alt={caseStudy.title} className="h-6 w-auto object-contain" />
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {caseStudy.industry}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                      {caseStudy.aiSolution}
                    </span>
                  </div>
                  
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{caseStudy.title}</h3>
                  
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{caseStudy.description}</p>
                  
                  <div className="mt-auto pt-4">
                    <Link 
                      href={`/cases/${caseStudy.id}`} 
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      閱讀完整案例 <ArrowRightIcon className="inline h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Submission CTA */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl rounded-3xl bg-blue-50 p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">分享您的AI成功案例</h2>
              <p className="mt-4 text-base text-gray-600">
                您的組織是否成功應用AI技術解決業務挑戰？我們誠摯邀請您分享您的案例，
                讓更多企業和組織從中獲取啟發，共同推動台灣AI應用生態發展。
              </p>
            </div>
            <div className="mt-8 flex items-center lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                提交您的案例 <ArrowTopRightOnSquareIcon className="ml-2 -mr-0.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Benefits of AI */}
        <motion.div 
          className="mx-auto mt-24 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">AI導入的價值與效益</h2>
          
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">提升營運效率</h3>
              <p className="mt-2 text-gray-600">
                AI能夠自動化重複性任務，優化流程，提高資源利用率。根據我們的案例研究，企業導入AI後平均可提升25-40%的營運效率，大幅降低人力成本和處理時間。
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">數據驅動決策</h3>
              <p className="mt-2 text-gray-600">
                AI分析能力可處理海量數據，發現隱藏模式，提供精準預測和洞察。企業能基於可靠證據做出決策，降低風險，把握市場機會，提高競爭優勢。
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">創新產品與服務</h3>
              <p className="mt-2 text-gray-600">
                AI為產品和服務注入智能特性，創造新的價值主張。透過個性化推薦、智能助理、預測性功能等，企業能提供差異化體驗，滿足客戶不斷變化的需求。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 