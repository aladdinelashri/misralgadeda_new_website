'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Drawer } from '../ui/Drawer';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const branchesRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // التأكد من تحميل المكون قبل عرض زر التبديل
  useEffect(() => {
    setMounted(true);
  }, []);

  // قائمة الفروع
  const branches = [
    { title: 'مكتبة مصر الجديدة العامة', href: '/branches/main' },
    { title: 'مكتبة مصر الجديدة للأطفال', href: '/branches/maryland' },
    { title: 'مركز الطفل للحضارة والإبداع', href: '/branches/nuzha' },
    { title: 'مركز العلوم بمتحف الطفل', href: '/branches/matareya' },
    { title: 'مكتبة المستقبل', href: '/branches/nasr-city' },
    { title: 'مكتبة مصر الجديدة بحى الأسمرات', href: '/branches/maadi' },
  ];

  const menuItems = [
    { title: 'الرئيسية', href: '/' },
    { title: 'عن الجمعية', href: '/about' },
    { title: 'الأنشطة', href: '/activities' },
    { title: 'الفعاليات', href: '/events' },
  ];

  // إغلاق القائمة المنسدلة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (branchesRef.current && !branchesRef.current.contains(event.target as Node)) {
        setIsBranchesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="جمعية مصر الجديدة"
                width={225}
                height={75}
                className="h-18 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
            
            {/* قائمة الفروع المنسدلة */}
            <div 
              className="relative" 
              ref={branchesRef}
              onMouseEnter={() => setIsBranchesOpen(true)}
              onMouseLeave={() => setIsBranchesOpen(false)}
            >
              <button
                className="text-gray-700 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200 relative group py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                الفروع
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-dark dark:bg-primary-light transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* القائمة المنسدلة مع مساحة إضافية في الأعلى */}
              <div
                className={`absolute top-full right-0 w-48 transition-all duration-200 transform origin-top ${
                  isBranchesOpen
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {/* مساحة شفافة فوق القائمة لمنع إغلاقها */}
                <div className="h-2"></div>
                
                {/* القائمة نفسها */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 mt-2">
                  {branches.map((branch) => (
                    <Link
                      key={branch.href}
                      href={branch.href}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
                    >
                      {branch.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
            >
              تواصل معنا
            </Link>

            {/* زر تبديل الوضع الداكن */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="تبديل الوضع الداكن"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            )}

            <Button variant="primary">تسجيل الدخول</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            {/* زر تبديل الوضع الداكن للموبايل */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="تبديل الوضع الداكن"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="px-4 py-6 space-y-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          
          {/* قائمة الفروع في القائمة الجانبية للموبايل */}
          <div className="space-y-2">
            <div className="font-medium mb-2">الفروع</div>
            {branches.map((branch) => (
              <Link
                key={branch.href}
                href={branch.href}
                className="block pr-4 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {branch.title}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="block hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            تواصل معنا
          </Link>

          <Button variant="primary" className="w-full">
            تسجيل الدخول
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar; 