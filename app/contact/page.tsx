'use client';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { contactInfo, socialLinks } from '../../data/contact';
import { useScrollReveal, useStaggerReveal } from '../../lib/useAnimations';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const heroReveal = useScrollReveal(0.1);
    const cardsReveal = useStaggerReveal(contactInfo.length, 150);
    const formReveal = useScrollReveal(0.1);
    const mapReveal = useScrollReveal(0.1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast.success('Message sent! Thank you for reaching out.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    // Map social link icons to SVG paths
    const socialIconMap: Record<string, { icon: React.ReactNode; hoverBg: string }> = {
        LinkedIn: {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
            hoverBg: 'hover:bg-[var(--primary)]',
        },
        GitHub: {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            hoverBg: 'hover:bg-slate-800 dark:hover:bg-white',
        },
        Twitter: {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            hoverBg: 'hover:bg-slate-600',
        },
    };

    return (
        <main className="pt-32 pb-20" role="main">
            {/* Hero Section */}
            <section ref={heroReveal.ref} className="max-w-7xl mx-auto px-8 mb-24">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-end transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="lg:col-span-8">
                        <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
                            Get In <span className="text-[var(--primary)]">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                            I specialize in building high-end digital experiences where technical rigor meets aesthetic sophistication. Let&apos;s collaborate on your next architectural web venture.
                        </p>
                    </div>
                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="h-40 w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Cards Grid */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div ref={cardsReveal.ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactInfo.map((item, index) => {
                        const iconPaths: Record<string, React.ReactNode> = {
                            Email: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            ),
                            Phone: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            ),
                            Location: (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            ),
                        };

                        const bgColors: Record<string, string> = {
                            Email: 'bg-[var(--primary)]/10',
                            Phone: 'bg-blue-100 dark:bg-blue-900/30',
                            Location: 'bg-indigo-100 dark:bg-indigo-900/30',
                        };

                        return (
                            <a
                                key={index}
                                href={item.action}
                                target={item.title === 'Location' ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className={`bg-white dark:bg-slate-800 p-10 rounded-xl group transition-all duration-500 hover:shadow-xl hover:shadow-slate-900/5 border border-slate-200/20 dark:border-slate-700/20 ${cardsReveal.visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                aria-label={`${item.title}: ${item.details}`}
                            >
                                <div className={`w-14 h-14 rounded-full ${bgColors[item.title] || 'bg-slate-100'} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <span className="text-[var(--primary)]">
                                        {iconPaths[item.title]}
                                    </span>
                                </div>
                                <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">{item.title}</h3>
                                <p className="font-heading text-lg font-semibold text-slate-900 dark:text-white break-all">{item.details}</p>
                            </a>
                        );
                    })}
                </div>
            </section>

            {/* Form & Social Section */}
            <section className="bg-[#f2f4f6] dark:bg-slate-900/50 py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div ref={formReveal.ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-20 transition-all duration-700 ${formReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="mb-12">
                                <h2 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Send Me a Message</h2>
                                <p className="text-slate-500 dark:text-slate-400">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact form">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block font-sans text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. John Doe"
                                            required
                                            aria-required="true"
                                            className="w-full bg-white dark:bg-slate-800 border-none rounded-xl py-4 px-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] transition-all placeholder:text-slate-400/50 dark:placeholder:text-slate-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block font-sans text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="e.g. john@company.com"
                                            required
                                            aria-required="true"
                                            className="w-full bg-white dark:bg-slate-800 border-none rounded-xl py-4 px-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] transition-all placeholder:text-slate-400/50 dark:placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="block font-sans text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What are we discussing?"
                                        required
                                        aria-required="true"
                                        className="w-full bg-white dark:bg-slate-800 border-none rounded-xl py-4 px-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] transition-all placeholder:text-slate-400/50 dark:placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block font-sans text-sm font-medium text-slate-500 dark:text-slate-400 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your project details, timeline, and goals..."
                                        required
                                        rows={6}
                                        aria-required="true"
                                        className="w-full bg-white dark:bg-slate-800 border-none rounded-xl py-4 px-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] transition-all placeholder:text-slate-400/50 dark:placeholder:text-slate-600 resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-busy={isSubmitting}
                                    aria-label={isSubmitting ? 'Sending your message' : 'Send your message'}
                                    className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white px-10 py-5 rounded-xl font-heading font-bold text-lg shadow-lg shadow-[var(--primary)]/20 hover:scale-[1.02] active:scale-95 transition-all w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2 justify-center">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Socials & Map */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-8">Connect Digitally</h3>
                                <div className="flex flex-col gap-4">
                                    {socialLinks.map((link, index) => {
                                        const config = socialIconMap[link.name] || socialIconMap.Twitter;
                                        return (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-xl ${config.hoverBg} hover:text-white transition-all duration-300`}
                                                aria-label={`Visit ${link.name} profile`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-white/20">
                                                        <span className="text-[var(--primary)] group-hover:text-white transition-colors">
                                                            {config.icon}
                                                        </span>
                                                    </div>
                                                    <span className="font-heading font-semibold text-slate-900 dark:text-white group-hover:text-white transition-colors">{link.name}</span>
                                                </div>
                                                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        );
                                    })}

                                    {/* Portfolio link */}
                                    <Link
                                        href="/"
                                        className="group flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-xl hover:bg-slate-600 hover:text-white transition-all duration-300"
                                        aria-label="View portfolio"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-white/20">
                                                <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                            <span className="font-heading font-semibold text-slate-900 dark:text-white group-hover:text-white transition-colors">Portfolio</span>
                                        </div>
                                        <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Mini Map */}
                            <div ref={mapReveal.ref} className={`rounded-xl overflow-hidden h-64 relative bg-slate-200 dark:bg-slate-700 transition-all duration-700 ${mapReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <iframe
                                    title="Delhi NCR Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54907729955!2d77.06889754453124!3d28.52725881555816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) brightness(0.75)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-[var(--primary)]/10 mix-blend-multiply pointer-events-none" />
                                <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm pointer-events-none">
                                    <span className="text-xs font-bold font-heading text-[var(--primary)] uppercase tracking-tighter">Current Base</span>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Delhi NCR, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
