"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('🚀 Navigation Timing:', {
            'DNS Lookup': navEntry.domainLookupEnd - navEntry.domainLookupStart,
            'TCP Connection': navEntry.connectEnd - navEntry.connectStart,
            'Request': navEntry.responseStart - navEntry.requestStart,
            'Response': navEntry.responseEnd - navEntry.responseStart,
            'DOM Processing': navEntry.domContentLoadedEventStart - navEntry.responseEnd,
            'Total Load Time': navEntry.loadEventEnd - navEntry.navigationStart,
          });
        }

        if (entry.entryType === 'paint') {
          console.log(`🎨 ${entry.name}:`, entry.startTime.toFixed(2) + 'ms');
        }

        if (entry.entryType === 'largest-contentful-paint') {
          console.log('📏 LCP:', entry.startTime.toFixed(2) + 'ms');
        }
      });
    });

    // Observe different performance metrics
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

    // Monitor bundle size in development
    if (typeof window !== 'undefined' && 'performance' in window) {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsResources = resources.filter(resource => 
        resource.name.includes('.js') && !resource.name.includes('node_modules')
      );
      
      const totalJSSize = jsResources.reduce((total, resource) => {
        return total + (resource.transferSize || 0);
      }, 0);

      console.log('📦 JavaScript Bundle Size:', (totalJSSize / 1024).toFixed(2) + 'KB');
    }

    return () => observer.disconnect();
  }, []);

  return null;
}