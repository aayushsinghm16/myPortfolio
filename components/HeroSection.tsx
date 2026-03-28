'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../data/personal';
import { useMouseParallax, useCounter } from '../lib/useAnimations';

const HeroSection: React.FC = () => {
    const mouse = useMouseParallax(0.015);
    const years = useCounter(10, 1800);
    const apps = useCounter(15, 1600);
    const deployments = useCounter(120, 2200);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative min-h-[870px] flex items-center overflow-hidden px-8 lg:px-24"
                aria-labelledby="hero-heading"
            >
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-7 z-10">
                        <span className="inline-block px-4 py-1.5 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] font-heading text-xs font-bold uppercase tracking-widest mb-6">
                            {personalInfo.title}
                        </span>
                        <h1
                            id="hero-heading"
                            className="font-heading text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-8"
                            style={{ textWrap: 'balance' } as React.CSSProperties}
                        >
                            Aayush <span className="text-[var(--primary)]">Singh</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mb-12">
                            Delivering <span className="text-slate-900 dark:text-white">10+ years</span> of expertise in architecting high-performance e-commerce and fintech applications for global brands.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/projects"
                                className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white px-8 py-4 rounded-xl font-heading font-bold text-base shadow-lg shadow-[var(--primary)]/20 hover:scale-[1.02] transition-transform"
                                aria-label="View Projects"
                            >
                                View Projects
                            </Link>
                            <a
                                href="/Aayush_Singh_Resume.pdf"
                                download="Aayush_Singh_Senior_Frontend_Engineer.pdf"
                                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-heading font-bold px-8 py-4 rounded-xl border border-slate-200/15 dark:border-slate-700/15 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                                aria-label="Download CV"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right - Profile Image */}
                    <div className="lg:col-span-5 relative">
                        <div
                            className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 ease-out"
                            style={{ transform: `translate(${-mouse.x}px, ${-mouse.y}px)` }}
                        >
                            <Image
                                src="/profile2.JPG"
                                alt="Aayush Singh Portrait"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="w-full h-full object-cover transition-all duration-700"
                                priority
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -z-0" aria-hidden="true"></div>
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-2xl -z-0" aria-hidden="true"></div>
                    </div>
                </div>
            </section>

            {/* Built for Scale - Experience Summary */}
            <section className="bg-[#f2f4f6] dark:bg-slate-900/50 py-24 px-8 lg:px-24" aria-label="Experience summary">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                        <div className="lg:col-span-1">
                            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                                Built for <br />Scale.
                            </h2>
                            <div className="w-16 h-1 bg-[var(--primary)] rounded-full" aria-hidden="true"></div>
                        </div>
                        <div className="lg:col-span-2">
                            <p className="font-sans text-2xl text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                                Specializing in <span className="text-[var(--primary)] font-bold">React &amp; Next.js</span>, I build robust frontend architectures that reduce load times by up to 45% and support millions of users across enterprise-grade platforms.
                            </p>
                            <div ref={years.ref} className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                <div>
                                    <div className="text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-1">
                                        {years.count}yr+
                                    </div>
                                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                        Experience
                                    </div>
                                </div>
                                <div ref={apps.ref}>
                                    <div className="text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-1">
                                        {apps.count}+
                                    </div>
                                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                        Enterprise Apps
                                    </div>
                                </div>
                                <div ref={deployments.ref}>
                                    <div className="text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-1">
                                        {deployments.count}+
                                    </div>
                                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                        Deployments
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
