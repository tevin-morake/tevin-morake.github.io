'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview, trackEvent, trackPerformance } from '@/utils/analytics';

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view on route change
    if (pathname) {
      pageview(pathname);
      
      // Track page section based on pathname
      const getPageSection = (path: string) => {
        if (path === '/') return 'Homepage';
        if (path.startsWith('/about')) return 'About';
        if (path.startsWith('/projects')) return 'Projects';
        if (path.startsWith('/articles')) return 'Articles';
        if (path.startsWith('/testimonials')) return 'Testimonials';
        if (path.startsWith('/contact')) return 'Contact';
        return 'Other';
      };

      trackEvent.sectionView(getPageSection(pathname), pathname);
    }
  }, [pathname]);

  // Track performance metrics
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            trackPerformance.pageLoadTime(entry.startTime, pathname);
          }
        }
      });
      
      if ('PerformanceObserver' in window) {
        observer.observe({ entryTypes: ['paint'] });
      }

      // Cleanup
      return () => {
        observer.disconnect();
      };
    };

    const cleanup = trackWebVitals();
    return cleanup;
  }, [pathname]);

  return {
    trackEvent,
    trackPerformance,
  };
}
