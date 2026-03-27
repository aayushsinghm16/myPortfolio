'use client';
import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github, Globe } from 'lucide-react';
import { contactInfo, socialLinks } from '../data/contact';

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
      const captchaToken = await executeRecaptcha('contact_form');

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

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: contactInfo[0].details,
      action: contactInfo[0].action,
      linkLabel: "Send email to Aayush Singh",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: contactInfo[1].details,
      action: contactInfo[1].action,
      linkLabel: "Call Aayush Singh",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: contactInfo[2].details,
      action: contactInfo[2].action,
      linkLabel: "View location",
    },
  ];

  const socialIcons: Record<string, React.ReactNode> = {
    LinkedIn: <Linkedin className="w-5 h-5" />,
    GitHub: <Github className="w-5 h-5" />,
    Twitter: <Globe className="w-5 h-5" />,
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-5" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm font-semibold tracking-[3px] text-primary uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In <em className="italic font-bold not-italic" style={{ fontStyle: 'italic' }}>Touch</em>
          </h2>
          <div className="w-20 h-1 bg-gradient-professional rounded-full mx-auto mt-4 mb-6" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s create something exceptional together.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((item, index) => (
            <a
              key={index}
              href={item.action}
              target={item.title !== 'Location' ? '_blank' : undefined}
              rel={item.title !== 'Location' ? 'noopener noreferrer' : undefined}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={item.linkLabel}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-primary group-hover:text-white transition-colors">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.details}</p>
            </a>
          ))}
        </div>

        {/* Two-Column Layout: Form + Connect Digitally */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {/* Left: Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 md:p-10 shadow-soft">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
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
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50 dark:bg-slate-700 dark:text-white hover:bg-white dark:hover:bg-slate-600 transition-colors text-sm"
                  />
                  <span id="name-error" className="sr-only" role="alert" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
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
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50 dark:bg-slate-700 dark:text-white hover:bg-white dark:hover:bg-slate-600 transition-colors text-sm"
                  />
                  <span id="email-hint" className="sr-only">Please enter a valid email address</span>
                  <span id="email-error" className="sr-only" role="alert" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
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
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50 dark:bg-slate-700 dark:text-white hover:bg-white dark:hover:bg-slate-600 transition-colors resize-none text-sm"
                />
                <span id="message-error" className="sr-only" role="alert" />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label={isSubmitting ? 'Sending your message' : 'Send your message'}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 justify-center">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Connect Digitally */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Connect Digitally</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              Feel free to connect with me on any of these platforms. I&apos;m always open to discussing new projects, ideas, or opportunities.
            </p>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-primary hover:text-white hover:border-primary hover:shadow-soft transition-all duration-300 group"
                  aria-label={`Visit ${link.name} profile`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="text-primary group-hover:text-white transition-colors">
                      {socialIcons[link.name] || <Globe className="w-5 h-5" />}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-white transition-colors text-sm">{link.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-white/80 transition-colors">
                      {link.name === 'GitHub' ? 'View my repositories' : link.name === 'LinkedIn' ? 'Professional network' : 'Follow me'}
                    </p>
                  </div>
                  <svg className="w-4 h-4 ml-auto text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Quick info */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium uppercase tracking-wider">Response Time</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I typically respond within 24 hours. For urgent inquiries, please reach out via phone.
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-soft border border-slate-200 dark:border-slate-700 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <iframe
            title="Delhi NCR Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54907729955!2d77.06889754453124!3d28.52725881555816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
