'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TeamRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/about/team');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">正在重定向到新的團隊頁面...</p>
    </div>
  );
}