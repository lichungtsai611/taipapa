'use client';

import { useState, useEffect, Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon, 
  UserGroupIcon, 
  NewspaperIcon, 
  LightBulbIcon,
  InformationCircleIcon,
  UsersIcon,
  CalendarIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  BookOpenIcon,
  HandRaisedIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navigation = [
  {
    name: '課程服務',
    href: '/courses',
    icon: <AcademicCapIcon className="h-5 w-5 mr-1" />
  },
  {
    name: 'AI資源',
    href: '#',
    icon: <LightBulbIcon className="h-5 w-5 mr-1" />,
    submenu: [
      { name: 'AI學習資源', href: '/resources', icon: <AcademicCapIcon className="h-4 w-4 mr-1" /> },
      { name: 'AI工具推薦', href: '/tools', icon: <WrenchScrewdriverIcon className="h-4 w-4 mr-1" /> },
      { name: 'AI好書分享', href: '/publications', icon: <BookOpenIcon className="h-4 w-4 mr-1" /> },
    ]
  },
  {
    name: '最新消息',
    href: '#',
    icon: <NewspaperIcon className="h-5 w-5 mr-1" />,
    submenu: [
      { name: 'AI前沿科技', href: '/news', icon: <NewspaperIcon className="h-4 w-4 mr-1" /> },
      { name: '協會活動', href: '/events', icon: <CalendarIcon className="h-4 w-4 mr-1" /> },
    ]
  },
  {
    name: '關於我們',
    href: '#',
    icon: <UserGroupIcon className="h-5 w-5 mr-1" />,
    submenu: [
      { name: '協會簡介', href: '/about', icon: <InformationCircleIcon className="h-4 w-4 mr-1" /> },
      { name: '組織成員', href: '/team', icon: <UsersIcon className="h-4 w-4 mr-1" /> },
    ]
  },
];

// Create a magnetic hover effect component
const MagneticLink = ({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link href={href} className="relative inline-block">
        {children}
        <span className={`absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-blue-500 transition-transform duration-300 ${isHovered ? 'scale-x-100' : ''}`}></span>
      </Link>
    </motion.div>
  );
};

// Define the navigation item type
type NavItemType = {
  name: string;
  href: string;
  icon: React.ReactNode;
  submenu?: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
};

// Create a nav item component that handles both dropdown and regular items
const NavItem = ({ item, index }: { item: NavItemType, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // For regular items without submenu (like 課程服務)
  if (!item.submenu) {
    return (
      <div className="relative">
        <Link 
          href={item.href}
          className="flex items-center text-sm font-semibold leading-6 text-gray-900 focus:outline-none hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="flex items-center"
          >
            {item.icon}
            {item.name}
          </motion.div>
          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 transition-transform duration-300 scale-x-0 hover:scale-x-100"></span>
        </Link>
      </div>
    );
  }
  
  // For dropdown items with submenu
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href={item.href}
        className={`flex items-center text-sm font-semibold leading-6 text-gray-900 focus:outline-none ${isOpen ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors duration-300 whitespace-nowrap`}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="flex items-center"
        >
          {item.icon}
          {item.name}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDownIcon className={`ml-1 h-4 w-4 transition-colors duration-300 ${isOpen ? 'text-blue-600' : ''}`} aria-hidden="true" />
          </motion.div>
        </motion.div>
        <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 transition-transform duration-300 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}></span>
      </Link>

      <AnimatePresence>
        {isOpen && item.submenu && (
          <motion.div
            className="absolute z-10 mt-3 w-screen max-w-[220px] rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-2">
              {item.submenu.map((subItem, subIndex) => (
                <motion.div
                  key={subItem.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * subIndex }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={subItem.href.includes('#') && !window.location.pathname.includes('/courses') ? 
                      subItem.href.split('#')[0] : subItem.href}
                    className="block py-2 text-base leading-7 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    onClick={(e) => {
                      // Only for course links with hash when not already on courses page
                      if (subItem.href.includes('/courses#') && !window.location.pathname.includes('/courses')) {
                        e.preventDefault();
                        
                        // Store the hash in sessionStorage for the courses page to use
                        const hash = subItem.href.split('#')[1];
                        sessionStorage.setItem('courseScrollTarget', hash);
                        
                        // Navigate to the courses page without hash
                        window.location.href = '/courses';
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {subItem.icon}
                      {subItem.name}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between p-3 lg:px-4 max-w-7xl mx-auto" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="-m-1.5 p-1.5 flex items-center group">
            <span className="sr-only">台灣人工智慧實務應用推廣協會</span>
            <div className="flex items-center transition-all duration-300">
              <motion.div 
                className="transform group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
              >
                <Logo />
              </motion.div>
              <motion.span 
                className="ml-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                AI for Taiwan
              </motion.span>
            </div>
          </Link>
        </motion.div>
        
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">開啟選單</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
        
        <motion.div 
          className="hidden lg:flex lg:gap-x-6 lg:justify-center lg:flex-1 flex-nowrap whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            staggerChildren: 0.1
          }}
        >
          {navigation.map((item, index) => (
            <NavItem key={item.name} item={item} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 opacity-75 blur-md"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <Link 
              href="/#invitation" 
              className="relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-base font-bold text-white shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
              data-cursor-hover
              data-cursor-text="課程方案"
            >
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ 
                  textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="flex items-center text-lg"
              >
                <HandRaisedIcon className="h-5 w-5 mr-1.5" />
                合作邀約
              </motion.span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ 
                  x: [0, 3, 0],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <motion.div 
              className="fixed inset-0 z-50 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <motion.div
                className="h-full"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <span className="sr-only">台灣人工智慧實務應用推廣協會</span>
                    <div className="flex items-center">
                      <Logo />
                      <span className="ml-3 text-lg font-semibold text-gray-900">AI for Taiwan</span>
                    </div>
                  </Link>
                  <motion.button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">關閉選單</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </motion.button>
                </div>
                
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Link
                          href="/"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          首頁
                        </Link>
                      </motion.div>
                      
                      {navigation.map((item, index) => (
                        <motion.div 
                          key={item.name} 
                          className="space-y-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * index }}
                        >
                          {/* Show direct link for items without submenu (like 課程服務) */}
                          {!item.submenu ? (
                            <Link
                              href={item.href}
                              className="-mx-3 flex w-full items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex items-center">
                                {item.icon}
                                {item.name}
                              </div>
                            </Link>
                          ) : (
                            <>
                              <motion.button
                                className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <div className="flex items-center">
                                  {item.icon}
                                  {item.name}
                                </div>
                                <motion.div
                                  animate={{ rotate: activeSubmenu === item.name ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDownIcon className="h-5 w-5" />
                                </motion.div>
                              </motion.button>
                              
                              <AnimatePresence>
                                {activeSubmenu === item.name && item.submenu && (
                                  <motion.div 
                                    className="ml-4 space-y-1 border-l-2 border-gray-100 pl-6"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {item.submenu.map((subItem, subIndex) => (
                                      <motion.div
                                        key={subItem.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * subIndex }}
                                        whileHover={{ x: 5 }}
                                      >
                                        <Link
                                          href={subItem.href.includes('#') && !window.location.pathname.includes('/courses') ? 
                                            subItem.href.split('#')[0] : subItem.href}
                                          className="block py-2 text-base leading-7 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                          onClick={(e) => {
                                            // Close mobile menu when clicking any link
                                            setMobileMenuOpen(false);
                                            
                                            // Only for course links with hash when not already on courses page
                                            if (subItem.href.includes('/courses#') && !window.location.pathname.includes('/courses')) {
                                              e.preventDefault();
                                              
                                              // Store the hash in sessionStorage for the courses page to use
                                              const hash = subItem.href.split('#')[1];
                                              sessionStorage.setItem('courseScrollTarget', hash);
                                              
                                              // Navigate to the courses page without hash
                                              window.location.href = '/courses';
                                            }
                                          }}
                                        >
                                          <div className="flex items-center">
                                            {subItem.icon}
                                            {subItem.name}
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          )}
                        </motion.div>
                      ))}
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        custom={navigation.length}
                        className="relative"
                      >
                        <motion.div
                          className="absolute -inset-2 rounded-md bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 opacity-75 blur-md"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                        <Link
                          href="/#invitation"
                          className="relative mt-4 -mx-3 block rounded-md bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2.5 text-base font-bold text-white shadow-sm hover:from-blue-700 hover:to-blue-800 focus:outline-none transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                          data-cursor-text="課程方案"
                        >
                          <div className="flex items-center justify-center">
                            <motion.span
                              initial={{ opacity: 1 }}
                              animate={{ 
                                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0)"]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop"
                              }}
                              className="flex items-center text-lg"
                            >
                              <HandRaisedIcon className="h-5 w-5 mr-1.5" />
                              合作邀約
                            </motion.span>
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 ml-2" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              animate={{ 
                                x: [0, 3, 0],
                                opacity: [1, 0.8, 1]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                              }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </motion.svg>
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
} 