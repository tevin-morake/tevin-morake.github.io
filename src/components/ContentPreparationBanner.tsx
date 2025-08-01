"use client";

import { useState } from "react";

export default function ContentPreparationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-blue-900 font-inter">
                Content Being Prepared
              </h3>
              <div className="mt-1 text-sm text-blue-700 font-inter">
                <p className="leading-relaxed">
                  I sincerely apologize for the mock content you&apos;re currently seeing. This article is being carefully crafted 
                  with real insights and technical depth. Please check back soon for the complete version, or 
                  <a 
                    href="mailto:tevin@tevinmorake.com?subject=Article%20Notification%20Request&body=Hi%20Tevin,%0D%0A%0D%0AI%27d%20like%20to%20be%20notified%20when%20new%20articles%20are%20published.%0D%0A%0D%0AThank%20you!"
                    className="ml-1 font-medium text-blue-800 underline hover:text-blue-900"
                  >
                    subscribe for updates
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex items-center justify-center w-6 h-6 text-blue-400 transition-colors rounded-full hover:text-blue-600 hover:bg-blue-100 flex-shrink-0"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
