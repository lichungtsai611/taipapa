'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ToolsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/resources/tools');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">正在重定向到新的工具頁面...</p>
    </div>
  );
}