"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { trackEvent } from "@/utils/analytics";

interface Message {
  id: string;
  content: string;
  sender: "user" | "abuti";
  timestamp: Date;
  typing?: boolean;
}

interface ChatbotProps {
  onSendMessage?: (message: string) => Promise<string>;
}

export default function AbutiChatbot({ onSendMessage }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show chatbot after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      setIsVisible(scrollY > heroHeight * 0.6);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Initial welcome message when chat first opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Bring Abuti online when chat opens
      setIsOnline(true);
      
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: "Hey there! 👋 I'm Abuti, Tevin's AI assistant. I know everything about his work, projects, and experience. What would you like to know?",
        sender: "abuti",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Track user message
    trackEvent.chatbotMessage("user");

    try {
      // Use the API route for RAG integration
      const response = onSendMessage 
        ? await onSendMessage(currentMessage)
        : await callChatAPI(currentMessage);

      const abutiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "abuti",
        timestamp: new Date(),
      };

      setTimeout(() => {
        setMessages(prev => [...prev, abutiMessage]);
        setIsTyping(false);
        // Track bot message
        trackEvent.chatbotMessage("bot");
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm having trouble right now. Please try again or contact Tevin directly through the contact page.",
        sender: "abuti",
        timestamp: new Date(),
      };
      
      setTimeout(() => {
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const callChatAPI = async (message: string): Promise<string> => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.response || data.error || "I couldn't process that request.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
    }`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 h-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 text-white bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/abuti.png"
                  alt="Abuti AI Assistant"
                  width={48}
                  height={48}
                  className="object-cover border-2 rounded-full border-white/20"
                />
                <div className={`absolute w-5 h-5 border-2 border-white rounded-full shadow-sm -bottom-1 -right-1 ${
                  isOnline ? 'bg-green-400' : 'bg-gray-400'
                }`}>
                  <div className={`w-full h-full rounded-full ${
                    isOnline ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                  }`}></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold font-inter">Abuti</h3>
                <p className="text-sm text-gray-300 font-inter">
                  AI Assistant • {isOnline ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 transition-colors rounded-full hover:bg-white/10 group"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} group`}
              >
                {/* Abuti Avatar for bot messages */}
                {message.sender === "abuti" && (
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      src="/abuti.png"
                      alt="Abuti"
                      width={32}
                      height={32}
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
                
                <div
                  className={`max-w-[75%] ${
                    message.sender === "user"
                      ? "bg-black text-white rounded-[20px] rounded-br-[8px]"
                      : "bg-white text-gray-900 rounded-[20px] rounded-bl-[8px] border border-gray-200 shadow-sm"
                  } p-4 transition-all duration-200 group-hover:shadow-md`}
                >
                  <p className="text-sm leading-relaxed font-inter">{message.content}</p>
                  <p className={`text-xs mt-2 ${
                    message.sender === "user" ? "text-gray-300" : "text-gray-500"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start group">
                <div className="flex-shrink-0 mr-3">
                  <Image
                    src="/abuti.png"
                    alt="Abuti"
                    width={32}
                    height={32}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-[20px] rounded-bl-[8px] p-4 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 font-inter">Abuti is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex items-end gap-3">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 rounded-2xl font-inter focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white caret-black"
                  disabled={isTyping}
                />
                {inputValue && (
                  <div className="absolute text-xs text-gray-400 transform -translate-y-1/2 right-3 top-1/2">
                    {inputValue.length}/500
                  </div>
                )}
              </div>
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white transition-all duration-200 bg-black rounded-full shadow-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Tell me about projects", "What's Tevin's experience?", "How to contact?"].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(suggestion)}
                  className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-inter"
                  disabled={isTyping}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <div className="relative">
        <button
          onClick={() => {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            if (newIsOpen) {
              trackEvent.chatbotOpen();
            }
          }}
          className={`group relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black/20 ${
            isOpen ? 'rotate-0' : ''
          }`}
          aria-label={isOpen ? "Close chat" : "Open chat with Abuti"}
        >
          {isOpen ? (
            <svg className="transition-transform duration-200 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <Image
                src="/abuti.png"
                alt="Abuti"
                width={40}
                height={40}
                className="object-cover border-2 rounded-full border-white/20"
              />
              {/* Notification Dot */}
              <div className={`absolute w-5 h-5 border-2 border-white rounded-full shadow-sm -top-1 -right-1 ${
                isOnline ? 'bg-green-400' : 'bg-gray-400'
              }`}>
                <div className={`w-full h-full rounded-full ${
                  isOnline ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                }`}></div>
              </div>
            </>
          )}

          {/* Subtle glow effect instead of pulse */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-black/20 to-gray-900/20"></div>
          )}
        </button>

        {/* Enhanced Tooltip */}
        {!isOpen && (
          <div className="absolute right-0 px-4 py-2 mb-3 text-sm font-medium text-white transition-all duration-200 bg-black shadow-lg opacity-0 pointer-events-none bottom-full rounded-xl group-hover:opacity-100 whitespace-nowrap font-inter">
            💬 Chat with Abuti
            <div className="absolute w-0 h-0 border-t-4 border-l-4 border-r-4 top-full right-4 border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        )}
      </div>
    </div>
  );
}
