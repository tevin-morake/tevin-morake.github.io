// Google Analytics utility functions
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Check if GA is enabled and measurement ID exists
// Disable in development environment
export const GA_ENABLED =
  GA_MEASUREMENT_ID &&
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "production";

// Debug logging
const debugLog = (message: string, data?: unknown) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[GA Debug - DISABLED] ${message}`, data || "");
  }
};

// Page view tracking
export const pageview = (url: string) => {
  debugLog("Page view called", {
    url,
    GA_ENABLED,
    GA_MEASUREMENT_ID,
    NODE_ENV: process.env.NODE_ENV,
  });

  if (!GA_ENABLED) {
    debugLog(
      "GA disabled in development or not configured - skipping pageview"
    );
    return;
  }

  if (typeof window.gtag === "undefined") {
    debugLog("gtag not available - skipping pageview");
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });

  debugLog("Page view sent", url);
};

// Event tracking interface
interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Generic event tracking
export const event = ({ action, category, label, value }: GtagEvent) => {
  debugLog("Event called", {
    action,
    category,
    label,
    value,
    GA_ENABLED,
    NODE_ENV: process.env.NODE_ENV,
  });

  if (!GA_ENABLED) {
    debugLog("GA disabled in development or not configured - skipping event");
    return;
  }

  if (typeof window.gtag === "undefined") {
    debugLog("gtag not available - skipping event");
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });

  debugLog("Event sent", { action, category, label, value });
};

// Predefined event helpers for common portfolio interactions
export const trackEvent = {
  // Navigation events
  menuClick: (menuItem: string) => {
    event({
      action: "click",
      category: "Navigation",
      label: menuItem,
    });
  },

  // CTA button clicks
  ctaClick: (buttonText: string, location: string) => {
    event({
      action: "click",
      category: "CTA",
      label: `${buttonText} - ${location}`,
    });
  },

  // Project interactions
  projectView: (projectName: string) => {
    event({
      action: "view",
      category: "Project",
      label: projectName,
    });
  },

  projectClick: (projectName: string, action: string) => {
    event({
      action: action,
      category: "Project",
      label: projectName,
    });
  },

  // Contact form interactions
  contactFormStart: () => {
    event({
      action: "start",
      category: "Contact Form",
      label: "Form Started",
    });
  },

  contactFormSubmit: (formType: string) => {
    event({
      action: "submit",
      category: "Contact Form",
      label: formType,
    });
  },

  contactFormError: (errorType: string) => {
    event({
      action: "error",
      category: "Contact Form",
      label: errorType,
    });
  },

  // Resume/CV downloads
  resumeDownload: (source: string) => {
    event({
      action: "download",
      category: "Resume",
      label: source,
    });
  },

  // Article/Blog interactions
  articleView: (articleSlug: string) => {
    event({
      action: "view",
      category: "Article",
      label: articleSlug,
    });
  },

  articleShare: (articleSlug: string, platform: string) => {
    event({
      action: "share",
      category: "Article",
      label: `${articleSlug} - ${platform}`,
    });
  },

  // Testimonial interactions
  testimonialView: (testimonialName: string) => {
    event({
      action: "view",
      category: "Testimonial",
      label: testimonialName,
    });
  },

  // Chatbot interactions
  chatbotOpen: () => {
    event({
      action: "open",
      category: "Chatbot",
      label: "Abuti Opened",
    });
  },

  chatbotMessage: (messageType: "user" | "bot") => {
    event({
      action: "message",
      category: "Chatbot",
      label: messageType,
    });
  },

  // External link clicks
  externalLink: (url: string, context: string) => {
    event({
      action: "click",
      category: "External Link",
      label: `${url} - ${context}`,
    });
  },

  // Scroll depth tracking
  scrollDepth: (percentage: number, page: string) => {
    event({
      action: "scroll",
      category: "Engagement",
      label: `${page} - ${percentage}%`,
      value: percentage,
    });
  },

  // Time on page milestones
  timeOnPage: (seconds: number, page: string) => {
    event({
      action: "time_milestone",
      category: "Engagement",
      label: `${page} - ${seconds}s`,
      value: seconds,
    });
  },

  // Page section visibility
  sectionView: (sectionName: string, page: string) => {
    event({
      action: "section_view",
      category: "Page Sections",
      label: `${page} - ${sectionName}`,
    });
  },
};

// Enhanced ecommerce tracking for goal conversions
export const trackConversion = {
  // Lead generation events
  leadGenerated: (source: string, value?: number) => {
    event({
      action: "generate_lead",
      category: "Conversion",
      label: source,
      value: value,
    });
  },

  // Consultation booking
  consultationBooked: (method: string) => {
    event({
      action: "book_consultation",
      category: "Conversion",
      label: method,
    });
  },

  // Project inquiry
  projectInquiry: (projectType: string) => {
    event({
      action: "project_inquiry",
      category: "Conversion",
      label: projectType,
    });
  },
};

// User session tracking
export const trackSession = {
  sessionStart: () => {
    event({
      action: "session_start",
      category: "Session",
      label: "User Session Started",
    });
  },

  sessionEnd: (duration: number) => {
    event({
      action: "session_end",
      category: "Session",
      label: "User Session Ended",
      value: duration,
    });
  },
};

// Device and performance tracking
export const trackPerformance = {
  pageLoadTime: (loadTime: number, page: string) => {
    event({
      action: "page_load_time",
      category: "Performance",
      label: page,
      value: Math.round(loadTime),
    });
  },

  deviceType: (type: string) => {
    event({
      action: "device_type",
      category: "User Info",
      label: type,
    });
  },
};

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
