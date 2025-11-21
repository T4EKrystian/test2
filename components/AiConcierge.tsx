import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Loader2, ChevronRight } from 'lucide-react';
import { Message } from '../types';
import { sendMessageStream } from '../services/geminiService';

const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Dobry wieczór. Jestem do Państwa dyspozycji. Czy chciałbyś zarezerwować Tee Time lub stolik w restauracji?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / docHeight;

      if (scrollPercent > 0.15) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Close if user scrolls back to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for global booking events
  useEffect(() => {
    const handleOpenBooking = () => {
      setIsVisible(true); // Force visible
      setIsOpen(true);
    };
    window.addEventListener('open-concierge-booking', handleOpenBooking);
    return () => window.removeEventListener('open-concierge-booking', handleOpenBooking);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      let accumulatedText = '';
      
      await sendMessageStream(userMessage, (chunk) => {
        accumulatedText += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg.role === 'model') {
            lastMsg.text = accumulatedText;
          }
          return newMessages;
        });
        scrollToBottom();
      });

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Przepraszam, wystąpił błąd połączenia. Proszę spróbować ponownie.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans transition-all duration-700 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[550px] bg-[#111] rounded-2xl flex flex-col mb-4 shadow-2xl animate-fade-up border border-white/10 overflow-hidden ring-1 ring-white/5">
          
          {/* Header */}
          <div className="bg-[#0a0a0a] p-4 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="bg-royal-gold/20 p-2 rounded-lg">
                <Sparkles size={16} className="text-royal-gold" />
              </div>
              <div>
                <h3 className="text-white font-display text-sm tracking-wide uppercase">Concierge</h3>
                <div className="flex items-center space-x-1">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   <p className="text-gray-500 text-[10px] uppercase tracking-wider">Online</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-white transition-colors p-2"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-white text-black rounded-2xl rounded-tr-sm font-medium' 
                      : 'bg-[#1a1a1a] text-gray-200 rounded-2xl rounded-tl-sm font-light border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
             {isLoading && (
               <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] p-3 rounded-2xl rounded-tl-sm border border-white/5">
                    <Loader2 size={14} className="animate-spin text-royal-gold" />
                  </div>
               </div>
             )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#0a0a0a] border-t border-white/5">
            <div className="flex items-center space-x-2 bg-[#1a1a1a] rounded-xl px-2 py-2 border border-white/5 focus-within:border-royal-gold/50 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask Concierge..."
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-600 px-3 font-light"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  input.trim() && !isLoading ? 'bg-royal-gold text-black hover:bg-white' : 'text-gray-600'
                }`}
              >
                {input.trim() ? <Send size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group ${isOpen ? 'scale-0' : 'scale-100'} transition-transform duration-300`}
      >
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl transform group-hover:-translate-x-2 whitespace-nowrap">
          Ask Concierge
        </span>
        <div className="w-14 h-14 bg-royal-gold text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_50px_rgba(197,160,89,0.6)] hover:scale-110 transition-all duration-300 z-10">
          <MessageSquare size={24} strokeWidth={1.5} />
        </div>
        <div className="absolute inset-0 rounded-full border border-royal-gold/50 animate-ping opacity-20"></div>
      </button>
    </div>
  );
};

export default AiConcierge;