'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navigation = [
  { name: '首頁', href: '/' },
  { name: '關於我們', href: '/about' },
  { name: '最新消息', href: '/news' },
  { name: '活動資訊', href: '/events' },
  { name: '會員專區', href: '/members' },
  { name: '聯絡我們', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/80 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">台灣人工智慧實務應用推廣協會</span>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <span className="ml-3 text-xl font-semibold text-gray-900">台灣人工智慧協會</span>
            </div>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">開啟選單</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <motion.div 
          className="hidden lg:flex lg:gap-x-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 relative group"
            >
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-blue-500 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </motion.div>
        <motion.div 
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/login"
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors"
          >
            登入 <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">台灣人工智慧實務應用推廣協會</span>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <span className="ml-3 text-lg font-semibold text-gray-900">台灣人工智慧協會</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">關閉選單</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  登入
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
} 