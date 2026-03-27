'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo } from '../../data/personal';
import { experienceData } from '../../data/experience';
import { educationHistory } from '../../data/education';
import { useScrollReveal, useStaggerReveal, useCounter } from '../../lib/useAnimations';

const About = () => {
    const heroReveal = useScrollReveal(0.1);
    const expHeaderReveal = useScrollReveal(0.2);
    const expCards = useStaggerReveal(experienceData.length, 150, 0.05);
    const eduReveal = useScrollReveal(0.2);
    const skillsReveal = useScrollReveal(0.1);
    const ctaReveal = useScrollReveal(0.1);
    const yearCounter = useCounter(10, 2000);

    const [showAllExp, setShowAllExp] = useState(false);
    const visibleExperiences = showAllExp ? experienceData : experienceData.slice(0, 3);

    return (
        <main className="pt-32 pb-24" role="main">
            {/* Hero / Bio Section */}
            <section ref={heroReveal.ref} className="max-w-7xl mx-auto px-8 mb-32">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="lg:col-span-7">
                        <h2 className="font-sans text-[var(--primary)] font-semibold tracking-widest uppercase text-xs mb-4">
                            The Architect&apos;s Story
                        </h2>
                        <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
                            Architecting digital <span className="text-[var(--primary)] italic">resilience</span> and precision.
                        </h1>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                            {personalInfo.longBio.slice(0, 2).map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[var(--primary)]/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000" aria-hidden="true" />
                            <Image
                                src="/profile2.JPG"
                                alt="Aayush Singh"
                                width={600}
                                height={750}
                                className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                            <div ref={yearCounter.ref} className="absolute bottom-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-200/20 dark:border-slate-700/20 hidden md:block max-w-[200px]">
                                <p className="font-heading font-bold text-[var(--primary)] text-3xl">{yearCounter.count}+</p>
                                <p className="font-sans text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">Years of Engineering Mastery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work History Timeline */}
            <section className="bg-[#e6e8ea] dark:bg-slate-900/50 py-32">
                <div className="max-w-7xl mx-auto px-8">
                    <div ref={expHeaderReveal.ref} className={`flex flex-col md:flex-row justify-between items-end mb-20 gap-8 transition-all duration-700 ${expHeaderReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="max-w-xl">
                            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Professional Evolution</h2>
                            <p className="text-slate-600 dark:text-slate-400">A non-linear journey through high-stakes engineering environments and scalable frontend systems.</p>
                        </div>
                        <div className="h-[1px] flex-grow bg-slate-300/30 dark:bg-slate-700/30 mx-12 hidden md:block mb-4" aria-hidden="true" />
                    </div>

                    <div ref={expCards.ref} className="space-y-12">
                        {visibleExperiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-1 md:grid-cols-12 gap-8 group transition-all duration-500 ${expCards.visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            >
                                <div className="md:col-span-3">
                                    <span className={`font-sans text-sm font-bold tracking-tighter uppercase ${index === 0 ? 'text-[var(--primary)]' : 'text-slate-500 dark:text-slate-400'}`}>
                                        {exp.period}
                                    </span>
                                    <h3 className="font-heading text-xl font-bold mt-1 text-slate-900 dark:text-white">{exp.role}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{exp.company}</p>
                                </div>
                                <div className="md:col-span-9 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200/20 dark:border-slate-700/20 group-hover:shadow-lg transition-all duration-300">
                                    <p className="text-slate-800 dark:text-slate-200 mb-6 leading-relaxed">
                                        {exp.achievements[0]}
                                    </p>
                                    {exp.skills && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.slice(0, 5).map((skill, i) => (
                                                <span key={i} className="px-3 py-1 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More / View Less Button */}
                    {experienceData.length > 3 && (
                        <div className="mt-16 flex justify-center">
                            <button
                                onClick={() => setShowAllExp(!showAllExp)}
                                className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/20 dark:border-slate-700/20 font-heading font-bold text-slate-700 dark:text-slate-300 hover:text-[var(--primary)] hover:border-[var(--primary)]/30 hover:shadow-lg transition-all duration-300"
                                aria-expanded={showAllExp}
                            >
                                {showAllExp ? 'Show Less' : `View All ${experienceData.length} Positions`}
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${showAllExp ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Academic Background Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-8">
                    <div ref={eduReveal.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center transition-all duration-700 ${eduReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div>
                            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Academic Foundations</h2>
                            <div className="space-y-12">
                                {educationHistory.map((edu, index) => (
                                    <div key={index} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                {index === 0 ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                )}
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                                            <p className="text-slate-500 dark:text-slate-400 mb-2">{edu.institution}, {edu.year}</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div ref={skillsReveal.ref} className={`bg-[#e6e8ea] dark:bg-slate-800 rounded-2xl p-12 relative overflow-hidden transition-all duration-700 ${skillsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
                                <svg className="w-[120px] h-[120px] text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-6 text-slate-900 dark:text-white">Technical Skills Summary</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
                                    <svg className="w-5 h-5 text-[var(--primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Languages: JavaScript ES6+, TypeScript, Python
                                </li>
                                <li className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
                                    <svg className="w-5 h-5 text-[var(--primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Frontend: React, Vue, Next.js 15, Nuxt, Redux, Zustand
                                </li>
                                <li className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
                                    <svg className="w-5 h-5 text-[var(--primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    DevOps: CI/CD, Git, Vercel, Docker, TDD
                                </li>
                                <li className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
                                    <svg className="w-5 h-5 text-[var(--primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Design: Storybook, Figma, Tailwind CSS, WCAG Accessibility
                                </li>
                            </ul>
                            <div className="mt-10 pt-10 border-t border-slate-300/30 dark:border-slate-600/30">
                                <p className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] mb-4">Continuing Education</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed italic">
                                    &ldquo;{personalInfo.philosophy}&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaReveal.ref} className="max-w-7xl mx-auto px-8 mb-16">
                <div className={`bg-[var(--primary)] p-12 md:p-20 rounded-2xl text-center relative overflow-hidden group transition-all duration-700 ${ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
                    <div className="relative z-10">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Let&apos;s build the next iteration.</h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Currently open for strategic consulting roles and high-impact engineering leadership opportunities.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-white text-[var(--primary)] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                            >
                                Start a Conversation
                            </Link>
                            <Link
                                href="/projects"
                                className="bg-[var(--primary-dark)] border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
