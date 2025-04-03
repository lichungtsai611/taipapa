'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">隱私權政策</h1>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="mx-auto max-w-3xl prose prose-blue prose-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <section>
            <p className="lead text-xl text-gray-600">
              台灣人工智慧實務應用推廣協會（以下簡稱「本協會」）致力於保護您的個人資料。本隱私權政策說明我們如何收集、使用、處理及保護您的個人資料。請您詳細閱讀本政策，以了解我們的隱私權保護措施。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">個人資料的收集</h2>
            <p>當您造訪本網站、填寫表單、註冊會員、訂閱電子報、參與我們的活動或研習時，我們可能會收集以下類型的個人資料：</p>
            <ul>
              <li>基本身分識別資料：姓名、電子郵件地址、電話號碼、地址等。</li>
              <li>網站使用資料：IP地址、瀏覽器類型、操作系統、點擊行為、造訪頁面、造訪時間等。</li>
              <li>活動參與資料：報名表中提供的資訊、參與紀錄等。</li>
              <li>會員資料：帳號、密碼（經加密處理）、會員偏好設定等。</li>
              <li>其他您自願提供的資料。</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">個人資料的使用目的</h2>
            <p>我們收集您的個人資料用於以下目的：</p>
            <ul>
              <li>提供您所請求的服務或資訊。</li>
              <li>處理您的會員註冊、活動報名或訂閱請求。</li>
              <li>向您發送與協會相關的通知、最新消息及電子報。</li>
              <li>改善我們的網站、服務及活動內容。</li>
              <li>進行統計分析及研究，以優化用戶體驗。</li>
              <li>辦理協會行政業務及聯繫事宜。</li>
              <li>依法令規定或主管機關要求而為之行為。</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">個人資料的保護措施</h2>
            <p>為保護您的個人資料安全，我們採取以下措施：</p>
            <ul>
              <li>使用安全的技術及程序保存您的個人資料。</li>
              <li>限制有權存取您個人資料的人員範圍。</li>
              <li>要求所有能夠存取個人資料的人員遵守保密義務。</li>
              <li>定期檢視及更新我們的安全措施，以符合最新技術標準。</li>
            </ul>
            <p>但請注意，網際網路傳輸無法保證百分之百的安全。儘管我們致力保護您的個人資料，但無法保證經由網路傳輸的資料絕對安全。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">個人資料的分享與揭露</h2>
            <p>我們不會出售、交換或以其他方式轉讓您的個人資料給第三方，除非：</p>
            <ul>
              <li>經過您的明確同意。</li>
              <li>與提供服務相關的合作夥伴分享（如活動協辦單位）。</li>
              <li>依法律規定必須揭露。</li>
              <li>為保護本協會、網站用戶或公眾的權利、財產或安全。</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cookie的使用</h2>
            <p>本網站使用Cookie和類似技術收集和儲存資訊。Cookie是網站傳送至您瀏覽器的小型文字檔案，儲存在您的電腦中。我們使用Cookie來：</p>
            <ul>
              <li>記住您的偏好設定。</li>
              <li>分析網站流量及使用情況。</li>
              <li>提升網站功能及用戶體驗。</li>
            </ul>
            <p>您可以透過瀏覽器設定來控制或刪除Cookie。但請注意，如果您選擇停用Cookie，可能會影響您使用本網站的某些功能。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">您的權利</h2>
            <p>依據個人資料保護法，您對個人資料有以下權利：</p>
            <ul>
              <li>查詢或請求閱覽您的個人資料。</li>
              <li>請求製給複製本。</li>
              <li>請求補充或更正您的個人資料。</li>
              <li>請求停止蒐集、處理或利用您的個人資料。</li>
              <li>請求刪除您的個人資料。</li>
            </ul>
            <p>如您希望行使上述權利，請透過本網站的聯絡表單或直接聯繫我們。我們將在合理時間內回覆您的請求。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">隱私權政策的變更</h2>
            <p>本協會保留隨時修改本隱私權政策的權利，以反映法律、技術或營運的變更。當我們更新本政策時，會在網站上發布更新的版本，並註明最後更新日期。重大變更可能會透過電子郵件或網站通知的方式告知您。建議您定期查閱本政策，了解我們如何保護您的資訊。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">聯絡我們</h2>
            <p>如果您對本隱私權政策有任何疑問或意見，或想要行使您的個人資料權利，請透過以下方式聯絡我們：</p>
            <p className="mt-4">
              <strong>台灣人工智慧實務應用推廣協會</strong><br />
              地址：台北市<br />
              電話：0937-358-433<br />
              電子郵件：taipapa.ai@gmail.com
            </p>
          </section>

          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">最後更新日期：2023年12月15日</p>
            <Link href="/" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              返回首頁
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}