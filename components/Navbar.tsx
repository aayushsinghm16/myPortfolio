'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
            {/* Skip to main content link for screen readers */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
                Skip to main content
            </a>

            <header
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md py-5'
                }`}
                role="banner"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
                            aria-label="Aayush Singh - Homepage"
                        >
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110" aria-hidden="true">
                                AS
                            </div>
                            <span className="text-2xl font-bold text-primary group-hover:text-primary-700 transition-colors">Aayush Singh</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav
                            className="hidden md:flex space-x-8"
                            role="navigation"
                            aria-label="Main navigation"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 font-medium transition-colors hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                                    aria-current={link.path === '/' ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 transition-colors p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div
                            id="mobile-menu"
                            className="md:hidden mt-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 animate-fadeIn"
                        >
                            <nav
                                className="flex flex-col space-y-4"
                                role="navigation"
                                aria-label="Mobile navigation"
                            >
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                                        onClick={() => setIsOpen(false)}
                                        aria-current={link.path === '/' ? 'page' : undefined}
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
