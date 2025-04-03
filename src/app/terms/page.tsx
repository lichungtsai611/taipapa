'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">使用條款</h1>
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
              歡迎使用台灣人工智慧實務應用推廣協會（以下簡稱「本協會」）的網站。以下條款規範您使用本網站及相關服務時應遵守的規則。當您使用本網站，即表示您已同意遵守這些條款。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">網站使用規範</h2>
            <p>使用本網站時，您同意：</p>
            <ul>
              <li>遵守中華民國相關法律規定及網路使用慣例。</li>
              <li>不從事任何可能損害本網站運作的行為。</li>
              <li>不使用任何自動化程式或工具大量擷取本網站內容。</li>
              <li>不冒充他人或提供虛假資訊。</li>
              <li>不侵犯他人的智慧財產權或隱私權。</li>
              <li>不上傳或發布任何含有威脅、誹謗、色情、暴力或違法內容的資料。</li>
            </ul>
            <p>如您違反上述規範，本協會有權暫停或終止您的網站使用權限，且不需事先通知。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">帳號與密碼安全</h2>
            <p>如本網站提供會員註冊功能，您同意：</p>
            <ul>
              <li>提供真實、準確、完整的註冊資訊。</li>
              <li>維護並及時更新您的個人資料以確保其準確性。</li>
              <li>妥善保管您的帳號及密碼，並對使用該帳號進行的所有活動負完全責任。</li>
              <li>發現未經授權使用您帳號的情況時，立即通知本協會。</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">智慧財產權聲明</h2>
            <p>本網站及其包含的所有內容，包括但不限於文字、圖片、音頻、視頻、標誌、設計、軟體等，均受中華民國及國際智慧財產權法律保護。這些內容的所有權歸本協會或授權本協會使用的第三方所有。</p>
            <p>未經本協會書面許可，您不得：</p>
            <ul>
              <li>複製、修改、發布、傳送、展示、分發、商業利用本網站的任何內容。</li>
              <li>移除本網站內容上的著作權或其他所有權聲明。</li>
              <li>將本網站的內容用於任何商業目的或公開展示。</li>
            </ul>
            <p>特定情況下，您可以：</p>
            <ul>
              <li>個人非商業性使用本網站內容。</li>
              <li>適當引用本網站內容，但須註明出處。</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">免責聲明</h2>
            <p>本網站內容僅供參考，本協會將盡力確保內容的準確性，但不保證所有資訊完全無誤。本協會對因使用或無法使用本網站所導致的任何直接或間接損失不承擔責任。</p>
            <p>本網站可能包含連結至第三方網站的連結。這些連結僅為方便用戶而提供，本協會不對這些網站的內容、安全性或隱私政策負責。使用這些連結時，用戶將離開本網站並可能受到不同的使用條款與隱私政策的約束。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">網站內容變更與服務中斷</h2>
            <p>本協會保留以下權利：</p>
            <ul>
              <li>隨時修改、更新或刪除本網站的任何部分，不需事先通知。</li>
              <li>暫時或永久中斷本網站服務，不需事先通知。</li>
              <li>限制或終止特定用戶的網站使用權。</li>
            </ul>
            <p>對於網站維護、升級或其他原因導致的暫時性服務中斷，本協會不承擔任何責任。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">資料保護與隱私</h2>
            <p>我們重視您的隱私。有關我們如何收集、使用和保護您的個人資料，請參閱我們的「隱私權政策」。使用本網站即表示您同意我們根據隱私權政策處理您的個人資料。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">條款修改</h2>
            <p>本協會保留隨時修改本使用條款的權利，修改後的條款將在本網站上公布。繼續使用本網站將視為您已接受修改後的條款。建議您定期查閱本條款，了解任何變更。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">準據法與管轄</h2>
            <p>本使用條款受中華民國法律管轄並依其解釋。任何因使用本網站或本使用條款而引起的爭議，應以台灣台北地方法院為第一審管轄法院。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">聯絡我們</h2>
            <p>如您對本使用條款有任何疑問或建議，請透過以下方式與我們聯絡：</p>
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