'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EventsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/news/events');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">正在重定向到新的活動頁面...</p>
    </div>
  );
}