"use client";

import { useState } from "react";
import { contact } from "@/data/mockHomeData";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "booking">("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form or show success message
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
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl lg:text-6xl font-inter">
              {contact.title}
            </h1>
            <p className="max-w-3xl mx-auto text-xl font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              {contact.subtitle}
            </p>
            <p className="max-w-2xl mx-auto mt-4 text-lg font-normal leading-relaxed font-inter" style={{ color: '#999999' }}>
              {contact.description}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-white rounded-full shadow-sm">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-8 py-3 text-base font-bold rounded-full font-inter transition-all duration-200 ${
                  activeTab === "contact"
                    ? "bg-black text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab("booking")}
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
              <div className="p-8 bg-white rounded-3xl shadow-sm">
                <div className="mb-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-black font-inter">
                    Send Me a Message
                  </h3>
                  <p className="text-lg font-normal font-inter" style={{ color: '#999999' }}>
                    Whether you have a project in mind, need technical consultation, or just want to say hello, 
                    I&apos;d love to hear from you. I typically respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-bold text-black font-inter">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl font-inter focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-bold text-black font-inter">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl font-inter focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block mb-2 text-sm font-bold text-black font-inter">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl font-inter focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your company or organization"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-bold text-black font-inter">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl font-inter focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-bold text-black font-inter">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl font-inter focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block px-12 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                {/* Social Media Section - Bottom of Contact Form */}
                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
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
                        className="flex items-center justify-center w-12 h-12 transition-all duration-200 bg-gray-50 rounded-full hover:bg-gray-100 hover:scale-110"
                        aria-label={social.name}
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
              <div className="p-8 bg-white rounded-3xl shadow-sm">
                <div className="mb-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-black font-inter">
                    Schedule a Consultation
                  </h3>
                  <p className="text-lg font-normal font-inter" style={{ color: '#999999' }}>
                    Book a 30-minute consultation to discuss your project needs, get technical advice, 
                    or explore collaboration opportunities. Choose a time that works best for you.
                  </p>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-black to-gray-600">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="mb-4 text-lg font-bold text-black font-inter">
                      Calendly Integration
                    </p>
                    <p className="mb-6 text-base font-normal font-inter" style={{ color: '#999999' }}>
                      Calendar scheduling widget will be embedded here
                    </p>
                    <a
                      href={contact.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-4 text-base font-bold text-white transition-colors bg-black rounded-full hover:bg-gray-800 font-inter"
                    >
                      Open Calendly
                    </a>
                  </div>
                </div>

                {/* Social Media Section - Bottom of Booking Form */}
                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
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
                        className="flex items-center justify-center w-12 h-12 transition-all duration-200 bg-gray-50 rounded-full hover:bg-gray-100 hover:scale-110"
                        aria-label={social.name}
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
    </main>
  );
}
