'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PublicationsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/resources/publications');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">正在重定向到新的出版物頁面...</p>
    </div>
  );
}