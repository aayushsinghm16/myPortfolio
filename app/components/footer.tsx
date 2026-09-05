import React from 'react';
import Link from 'next/link';
import { personalInfo } from '../../data/personal';
import { socialLinks } from '../../data/contact';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative z-[1] w-full border-t border-rule bg-ground mt-10"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                <div>
                    <p className="font-mono text-sm font-bold text-ink tracking-tight">AAYUSH SINGH</p>
                    <p className="label-mono mt-1">{personalInfo.title}</p>
                </div>

                <nav aria-label="Footer" className="flex flex-wrap items-center gap-5">
                    {socialLinks.map(l => (
                        <a
                            key={l.name}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors duration-fast"
                        >
                            {l.name}
                            <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    ))}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors duration-fast"
                    >
                        Email
                    </a>
                    <Link
                        href="/contact"
                        className="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors duration-fast"
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            <div className="border-t border-rule">
                <p className="max-w-[1080px] mx-auto px-4 lg:px-8 py-4 label-mono">
                    &copy; {currentYear} Aayush Singh — built with Next.js, deployed on Vercel
                </p>
            </div>
        </footer>
    );
};

export default Footer;
