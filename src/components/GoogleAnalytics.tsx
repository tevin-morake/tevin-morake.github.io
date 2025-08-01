'use client';

import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/utils/analytics';

export default function GoogleAnalytics() {
  // Don't render if GA is not configured...
  if (!GA_MEASUREMENT_ID) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA Debug] No measurement ID found');
    }
    return null;
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[GA Debug] GoogleAnalytics component rendering with ID:', GA_MEASUREMENT_ID);
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          if (process.env.NODE_ENV === 'development') {
            console.log('[GA Debug] Google Analytics script loaded');
          }
        }}
        onError={(e) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('[GA Debug] Error loading Google Analytics script:', e);
          }
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onLoad={() => {
          if (process.env.NODE_ENV === 'development') {
            console.log('[GA Debug] Google Analytics config script loaded');
            console.log('[GA Debug] gtag available:', typeof window.gtag !== 'undefined');
          }
        }}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              // Enhanced measurement settings
              send_page_view: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: false,
              // Custom parameters for better tracking
              custom_map: {
                'custom_parameter_1': 'user_type',
                'custom_parameter_2': 'traffic_source'
              },
              // Enhanced ecommerce settings
              enhanced_ecommerce: true,
              // Cookie settings for privacy compliance
              cookie_flags: 'SameSite=None;Secure',
              // Optimize loading
              optimize_id: undefined,
              // Debug mode for development
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });

            // Track initial page load performance
            window.addEventListener('load', function() {
              const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
              if (window.gtag && loadTime > 0) {
                gtag('event', 'page_load_time', {
                  event_category: 'Performance',
                  event_label: window.location.pathname,
                  value: Math.round(loadTime)
                });
              }
            });

            // Track scroll depth
            let scrollDepthTracked = [];
            window.addEventListener('scroll', function() {
              const scrollPercentage = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
              );
              
              const milestones = [25, 50, 75, 90];
              milestones.forEach(milestone => {
                if (scrollPercentage >= milestone && !scrollDepthTracked.includes(milestone)) {
                  scrollDepthTracked.push(milestone);
                  if (window.gtag) {
                    gtag('event', 'scroll', {
                      event_category: 'Engagement',
                      event_label: window.location.pathname + ' - ' + milestone + '%',
                      value: milestone
                    });
                  }
                }
              });
            });

            // Track time on page milestones
            const timeOnPageMilestones = [30, 60, 120, 300]; // 30s, 1m, 2m, 5m
            let timeOnPageTracked = [];
            let startTime = Date.now();

            timeOnPageMilestones.forEach(milestone => {
              setTimeout(() => {
                if (!timeOnPageTracked.includes(milestone)) {
                  timeOnPageTracked.push(milestone);
                  if (window.gtag) {
                    gtag('event', 'time_milestone', {
                      event_category: 'Engagement',
                      event_label: window.location.pathname + ' - ' + milestone + 's',
                      value: milestone
                    });
                  }
                }
              }, milestone * 1000);
            });

            // Track session duration on page unload
            window.addEventListener('beforeunload', function() {
              const sessionDuration = Math.round((Date.now() - startTime) / 1000);
              if (window.gtag && sessionDuration > 5) {
                gtag('event', 'session_duration', {
                  event_category: 'Session',
                  event_label: window.location.pathname,
                  value: sessionDuration
                });
              }
            });

            // Track device type
            function getDeviceType() {
              const userAgent = navigator.userAgent;
              if (/tablet|ipad|playbook|silk/i.test(userAgent)) return 'tablet';
              if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\\sce|palm|smartphone|iemobile/i.test(userAgent)) return 'mobile';
              return 'desktop';
            }

            // Send device type on load
            if (window.gtag) {
              gtag('event', 'device_type', {
                event_category: 'User Info',
                event_label: getDeviceType()
              });
            }
          `,
        }}
      />
    </>
  );
}
