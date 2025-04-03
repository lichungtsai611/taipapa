import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ProgressIndicator from "./components/ProgressIndicator";
import PageProgressProvider from "./components/PageProgressProvider";

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
        <PageProgressProvider>
          <CustomCursor color="blue" />
          <ProgressIndicator 
            type="line" 
            position="top" 
            theme="gradient" 
            size="md" 
            hideOnTop={true}
          />
          <Header />
          <main>{children}</main>
          <Footer />
        </PageProgressProvider>
      </body>
    </html>
  );
}
