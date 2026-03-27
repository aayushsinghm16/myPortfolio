import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f2f4f6] dark:bg-slate-900 w-full" role="contentinfo" aria-label="Site footer">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto w-full">
                <div className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-semibold">
                    &copy; {currentYear} Aayush Singh. All Rights Reserved.
                </div>
                <div className="flex items-center gap-8">
                    <a className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:text-[var(--primary)] underline-offset-4 hover:underline" href="https://linkedin.com/in/aayushsinghm16" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn</a>
                    <a className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:text-[var(--primary)] underline-offset-4 hover:underline" href="https://github.com/aayushsinghm16" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GitHub</a>
                    <a className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:text-[var(--primary)] underline-offset-4 hover:underline" href="/" aria-label="Portfolio">Portfolio</a>
                    <a className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:text-[var(--primary)] underline-offset-4 hover:underline" href="mailto:aayushsinghm16@gmail.com" aria-label="Send email">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
