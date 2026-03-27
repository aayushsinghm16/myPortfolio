'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../lib/ThemeContext';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setIsThemeSelectorOpen } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Skip to main content */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
                Skip to main content
            </a>

            <header
                className={`fixed w-full z-50 backdrop-blur-xl ${scrolled
                    ? 'bg-[#f7f9fb]/80 shadow-sm py-3'
                    : 'bg-[#f7f9fb]/80 shadow-sm py-5'
                }`}
                style={{ transition: 'padding 0.3s' }}
                role="banner"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
                            aria-label="Aayush Singh - Homepage"
                        >
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110 shadow-sm" aria-hidden="true">
                                AS
                            </div>
                            <span className="text-xl font-bold text-primary group-hover:text-primary-600 transition-colors">
                                Aayush Singh
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex gap-8" role="navigation" aria-label="Main navigation">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className="text-slate-600 hover:text-primary font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all hover:after:w-full focus:outline-none focus:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Theme Toggle */}
                            <button
                                onClick={() => setIsThemeSelectorOpen(true)}
                                className="p-2.5 bg-primary-100 hover:bg-primary-200 rounded-xl transition-colors text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                aria-label="Open theme selector"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </button>

                            {/* Hire Me CTA */}
                            <Link
                                href="/contact"
                                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-600 hover:scale-105 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                                Hire Me
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-3">
                            <button
                                onClick={() => setIsThemeSelectorOpen(true)}
                                className="p-2 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors text-primary"
                                aria-label="Open theme selector"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </button>
                            <button
                                className="text-slate-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-expanded={isOpen}
                                aria-controls="mobile-menu"
                                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            >
                                {isOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div
                            id="mobile-menu"
                            className="md:hidden mt-4 bg-white rounded-2xl shadow-soft-lg p-4 border border-slate-100 animate-fade-in"
                        >
                            <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className="text-slate-600 hover:text-primary font-medium transition-colors px-4 py-3 rounded-xl hover:bg-primary-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Navbar;
