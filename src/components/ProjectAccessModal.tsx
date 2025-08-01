"use client";

import { useState, useEffect } from "react";

interface ProjectAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export default function ProjectAccessModal({ isOpen, onClose, projectName }: ProjectAccessModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEmailContact = () => {
    window.open('mailto:tevin@tevinmorake.com?subject=Project Access Request&body=Hi Tevin,%0D%0A%0D%0AI would like to request access to your projects, specifically interested in viewing your work.%0D%0A%0D%0AThank you!', '_blank');
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        className={`relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-inter">
                Private Project Access
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 transition-colors rounded-full hover:text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="mb-4">
            <h4 className="mb-2 text-base font-semibold text-gray-900 font-inter">
              {projectName ? `"${projectName}"` : 'This project'} is currently private
            </h4>
            <p className="text-sm leading-relaxed text-gray-600 font-inter">
              My project repositories are kept private to protect proprietary client work and intellectual property. 
              However, I&apos;m happy to provide access for legitimate inquiries such as:
            </p>
          </div>

          <div className="mb-6">
            <ul className="space-y-2 text-sm text-gray-600 font-inter">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Job interview processes
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Potential collaboration opportunities
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Technical discussions and code reviews
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-sm text-gray-700 font-inter">
              <strong>Want to see my work?</strong> Send me an email with details about your request, 
              and I&apos;ll be happy to provide access or schedule a code walkthrough.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50 font-inter"
          >
            Close
          </button>
          <button
            onClick={handleEmailContact}
            className="flex-1 px-4 py-2 text-sm font-medium text-white transition-colors bg-black rounded-lg hover:bg-gray-800 font-inter"
          >
            Request Access
          </button>
        </div>
      </div>
    </div>
  );
}
