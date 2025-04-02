import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "台灣人工智慧推廣協會",
  description: "透過教育、分享與合作，推動台灣AI發展的民間組織",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Header 
          links={[
            { name: "首頁", href: "/" },
            { name: "關於我們", href: "/about" },
            { name: "協會任務", href: "/mission" },
            { name: "最新消息", href: "/news" },
            { name: "活動資訊", href: "/events" },
            { name: "參考資源", href: "/resources" },
            { name: "聯絡我們", href: "/contact" },
          ]} 
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
