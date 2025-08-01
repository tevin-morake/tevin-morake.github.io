"use client";

import { useState } from "react";
import { contact } from "@/data/mockHomeData";
import Footer from "@/components/Footer";
import { trackEvent, event } from "@/utils/analytics";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "booking">("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const maxMessageLength = 500;
  const messageLength = formData.message.length;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // Track form submission start
    trackEvent.contactFormSubmit(activeTab === "contact" ? "Contact Form" : "Booking Form");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle form submission here
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      
      // Track successful submission
      event({
        action: "submit_success",
        category: "Contact Form",
        label: activeTab === "contact" ? "Contact Form" : "Booking Form"
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      
      // Track form error
      trackEvent.contactFormError("Submission Failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case "github":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case "twitter":
      case "x":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case "email":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-black font-inter hero-title">
              {contact.title}
            </h1>
            <p className="max-w-3xl mx-auto mb-4 font-inter hero-subtitle">
              {contact.subtitle}
            </p>
            <p className="max-w-2xl mx-auto mb-16 font-inter text-muted">
              {contact.description}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-white rounded-full shadow-sm">
              <button
                onClick={() => {
                  setActiveTab("contact");
                  event({
                    action: "tab_switch",
                    category: "Contact Form",
                    label: "Contact Tab"
                  });
                }}
                className={`px-8 py-3 text-base font-bold rounded-full font-inter transition-all duration-200 ${
                  activeTab === "contact"
                    ? "bg-black text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => {
                  setActiveTab("booking");
                  event({
                    action: "tab_switch",
                    category: "Contact Form",
                    label: "Booking Tab"
                  });
                }}
                className={`px-8 py-3 text-base font-bold rounded-full font-inter transition-all duration-200 ${
                  activeTab === "booking"
                    ? "bg-black text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "contact" && (
            <div className="max-w-4xl mx-auto">
              {/* Contact Form */}
              <div className="p-8 bg-white shadow-sm rounded-3xl">
                <div className="mb-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-black font-inter">
                    Send Me a Message
                  </h3>
                  <p className="text-lg font-normal font-inter form-description">
                    Whether you have a project in mind, need technical consultation, or just want to say hello, 
                    I&apos;d love to hear from you.
                  </p>
                  <div className="response-time-badge">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Typically respond within 24 hours
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block form-label font-inter">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => trackEvent.contactFormStart()}
                        className="w-full px-4 py-3 text-base rounded-xl font-inter form-input placeholder-muted focus:outline-none"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block form-label font-inter">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base rounded-xl font-inter form-input placeholder-muted focus:outline-none"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block form-label font-inter">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base rounded-xl font-inter form-input placeholder-muted focus:outline-none"
                        placeholder="Your company or organization"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block form-label font-inter">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base rounded-xl font-inter form-input placeholder-muted focus:outline-none"
                        placeholder="What's this about?"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block form-label font-inter">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-base resize-none rounded-xl font-inter form-input placeholder-muted focus:outline-none"
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                      maxLength={maxMessageLength}
                      disabled={isSubmitting}
                    />
                    <div className={`character-count ${messageLength > maxMessageLength * 0.9 ? messageLength >= maxMessageLength ? 'error' : 'warning' : ''}`}>
                      {messageLength}/{maxMessageLength} characters
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting || messageLength > maxMessageLength}
                      className={`inline-flex items-center gap-2 px-12 py-4 text-base font-bold rounded-full font-inter transition-all duration-200 ${
                        isSubmitting || messageLength > maxMessageLength
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                          : submitStatus === 'success'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-black text-white hover:bg-gray-800 hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          Message Sent!
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    
                    {submitStatus === 'error' && (
                      <p className="mt-4 text-sm text-red-600 font-inter">
                        There was an error sending your message. Please try again.
                      </p>
                    )}
                    
                    <p className="privacy-note font-inter">
                      Your information is secure and will never be shared with third parties.
                    </p>
                  </div>
                </form>

                {/* Social Media Section - Bottom of Contact Form */}
                <div className="pt-8 mt-12 text-center border-t border-gray-100">
                  <h4 className="mb-6 text-lg font-bold text-black font-inter">
                    Connect With Me
                  </h4>
                  <div className="flex justify-center space-x-6">
                    {contact.socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full bg-gray-50 hover:bg-gray-100 hover:scale-110"
                        aria-label={social.name}
                        onClick={() => trackEvent.externalLink(social.url, `Contact Form ${social.name}`)}
                      >
                        <div className="text-black hover:text-gray-600">
                          {getSocialIcon(social.icon)}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Booking Tab Content */}
          {activeTab === "booking" && (
            <div className="max-w-4xl mx-auto">
              <div className="p-8 bg-white shadow-sm rounded-3xl">
                <div className="mb-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-black font-inter">
                    Schedule a Consultation
                  </h3>
                  <p className="text-lg font-normal font-inter form-description">
                    Book a 30-minute consultation to discuss your project needs, get technical advice, 
                    or explore collaboration opportunities. Choose a time that works best for you.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div className="flex items-center gap-2 px-3 py-2 text-sm text-blue-700 rounded-lg bg-blue-50">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      30 minutes
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-sm text-green-700 rounded-lg bg-green-50">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Free consultation
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-sm text-purple-700 rounded-lg bg-purple-50">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                      Video call
                    </div>
                  </div>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="booking-placeholder aspect-[4/3] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-black to-gray-600">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="mb-4 text-lg font-bold text-black font-inter">
                      Calendly Integration
                    </p>
                    <p className="mb-6 text-base font-normal font-inter form-description">
                      Interactive calendar will be embedded here
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Available slots updated in real-time
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Automatic timezone detection
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Calendar invites sent automatically
                      </div>
                    </div>
                    <a
                      href={contact.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-800 hover:scale-105 font-inter"
                      onClick={() => trackEvent.externalLink(contact.calendlyUrl, "Calendly Booking")}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Open Calendly
                    </a>
                  </div>
                </div>

                {/* Social Media Section - Bottom of Booking Form */}
                <div className="pt-8 mt-12 text-center border-t border-gray-100">
                  <h4 className="mb-6 text-lg font-bold text-black font-inter">
                    Connect With Me
                  </h4>
                  <div className="flex justify-center space-x-6">
                    {contact.socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full bg-gray-50 hover:bg-gray-100 hover:scale-110"
                        aria-label={social.name}
                        onClick={() => trackEvent.externalLink(social.url, `Booking Form ${social.name}`)}
                      >
                        <div className="text-black hover:text-gray-600">
                          {getSocialIcon(social.icon)}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
