'use client';
import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'react-hot-toast';

const ContactSection: React.FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      toast.error('ReCAPTCHA not available. Please refresh the page.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get ReCAPTCHA token
      const captchaToken = await executeRecaptcha('contact_form');

      // Send to API
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Message sent successfully! Thank you for reaching out.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: "aayushsinghm16@gmail.com",
      action: "mailto:aayushsinghm16@gmail.com",
      linkLabel: "Send email to Aayush Singh",
      linkText: "Send an email"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: "+91 9582707868",
      action: "tel:+919582707868",
      linkLabel: "Call Aayush Singh",
      linkText: "Call me"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      title: "LinkedIn",
      details: "Connect with me",
      action: "https://linkedin.com/in/aayushsinghm16",
      linkLabel: "Visit LinkedIn profile",
      linkText: "Connect"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title gradient-text">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-professional rounded-full mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out to me using the contact form or through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="glass-card text-center p-6 hover-lift animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 mb-4">{item.details}</p>
              <a
                href={item.action}
                className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
                aria-label={item.linkLabel}
                target={item.title === "LinkedIn" ? "_blank" : undefined}
                rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-slate-700 font-medium">
                  Your Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  aria-required="true"
                  aria-describedby="name-error"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white"
                />
                <span id="name-error" className="sr-only" role="alert"></span>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-slate-700 font-medium">
                  Your Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  aria-required="true"
                  aria-describedby="email-error email-hint"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white"
                />
                <span id="email-hint" className="sr-only">Please enter a valid email address</span>
                <span id="email-error" className="sr-only" role="alert"></span>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-slate-700 font-medium">
                Your Message <span className="text-red-500" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                aria-required="true"
                aria-describedby="message-error"
                rows={5}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white resize-none"
              />
              <span id="message-error" className="sr-only" role="alert"></span>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-label={isSubmitting ? 'Sending your message' : 'Send your message'}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
