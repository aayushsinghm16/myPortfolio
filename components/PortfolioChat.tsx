'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Wrapper that lazy-loads reCAPTCHA only when chat is opened
export default function PortfolioChat() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setHasOpened(true);
    setIsVisible(true);
  };

  if (!hasOpened) {
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-accent-ink p-4  shadow-soft transition-colors duration-fast "
        aria-label="Open chat with Aayush's AI assistant"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}>
      <PortfolioChatInner isVisible={isVisible} setIsVisible={setIsVisible} />
    </GoogleReCaptchaProvider>
  );
}

function PortfolioChatInner({ isVisible, setIsVisible }: { isVisible: boolean; setIsVisible: (v: boolean) => void }) {
  const isOpen = isVisible;
  const setIsOpen = setIsVisible;
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Aayush's AI assistant. Feel free to ask me about his experience, skills, projects, or background. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    if (!executeRecaptcha) {
      alert('reCAPTCHA not loaded. Please refresh the page.');
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get reCAPTCHA token
      const token = await executeRecaptcha('chat_message');

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          recaptchaToken: token
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: error instanceof Error ? error.message : 'Sorry, something went wrong. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-accent-ink  p-4 shadow-soft transition-colors duration-fast "
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-panel  shadow-soft flex flex-col border border-rule">
          {/* Header */}
          <div className="bg-accent text-accent-ink p-4 ">
            <h3 className="font-semibold text-lg">Chat with Aayush&apos;s AI</h3>
            <p className="text-xs text-accent-ink">Ask about experience, skills & projects</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%]  p-3 ${
                    message.role === 'user'
                      ? 'bg-accent text-accent-ink'
                      : 'bg-panel-alt text-gray-900 dark:text-gray-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-panel-alt  p-3">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-rule">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-rule-strong   bg-panel dark:text-accent-ink"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-accent hover:bg-accent-hover text-accent-ink p-2  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-muted mt-2">
              Protected by reCAPTCHA
            </p>
          </form>
        </div>
      )}
    </>
  );
}
