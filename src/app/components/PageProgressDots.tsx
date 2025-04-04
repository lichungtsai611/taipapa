'use client';

import { usePathname } from 'next/navigation';
import ProgressIndicator from './ProgressIndicator';

export default function PageProgressDots() {
  const pathname = usePathname();
  
  // Pages that should have the dots progress indicator
  const pagesWithDots = [
    '/',                   // homepage
    '/courses',            // courses
    '/resources',          // resources
    '/resources/tools',    // resources/tools
    '/resources/publications', // resources/publications
    '/news',               // news
    '/news/events',        // news/events
    '/about',              // about
    '/about/team'          // about/team
  ];
  
  // Check if the current path should have dots
  const shouldShowDots = pagesWithDots.includes(pathname);
  
  if (!shouldShowDots) {
    return null;
  }
  
  return (
    <ProgressIndicator 
      type="dots" 
      position="right" 
      theme="gradient" 
      size="md"
      hideOnTop={true}
    />
  );
}
