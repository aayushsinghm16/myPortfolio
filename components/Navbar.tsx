'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../lib/ThemeContext';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
];

/**
 * Header, rebuilt on semantic tokens.
 *
 * Notes on what changed and why:
 * - backdrop-blur-xl removed: blurring a full-width fixed strip re-samples the
 *   page behind it on every scroll frame, and the bar is opaque anyway.
 * - The scroll listener is passive and now drives a real visual change (the
 *   bottom rule appears once you leave the top) rather than 8px of padding.
 * - focus:outline-none is gone; the global :focus-visible rule in globals.css
 *   handles focus for every control here.
 */
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { setIsThemeSelectorOpen } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] btn"
            >
                Skip to main content
            </a>

            <header
                role="banner"
                className={`fixed inset-x-0 top-0 z-50 bg-ground ${scrolled ? 'border-b border-rule' : ''}`}
            >
                <div className="max-w-[1080px] mx-auto px-4 lg:px-8">
                    <div className="flex justify-between items-center h-14">
                        {/* Accessible name matches the visible text exactly (WCAG 2.5.3) */}
                        <Link href="/" className="font-mono text-sm font-bold text-ink tracking-tight">
                            AAYUSH SINGH
                        </Link>

                        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors duration-fast"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => setIsThemeSelectorOpen(true)}
                                aria-label="Open theme settings"
                                className="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors duration-fast"
                            >
                                Theme
                            </button>
                            <Link href="/contact" className="btn">Hire me</Link>
                        </nav>

                        <button
                            className="md:hidden font-mono text-xs uppercase tracking-[0.1em] text-ink px-2 py-1 border border-rule-strong"
                            onClick={() => setIsOpen(v => !v)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        >
                            {isOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <nav
                        id="mobile-menu"
                        aria-label="Mobile"
                        className="md:hidden border-t border-rule bg-panel"
                    >
                        <ul className="max-w-[1080px] mx-auto px-4 py-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-3 font-mono text-xs uppercase tracking-[0.1em] text-body border-b border-rule"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="py-3">
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn w-full">
                                    Hire me
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Navbar;
