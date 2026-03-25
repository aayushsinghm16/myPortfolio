import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../data/personal';

const HeroSection: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden" aria-labelledby="hero-heading">
            <div className="absolute inset-0 bg-gradient-subtle" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true"></div>

            {/* Subtle floating orbs for depth */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-20 animate-float" aria-hidden="true"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} aria-hidden="true"></div>

            <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 space-y-6 md:pr-12 animate-fade-up">
                        <p className="text-primary font-semibold md:pt-12 text-lg animate-fade-in">Hello, I&apos;m</p>
                        <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                            Aayush Singh
                        </h1>
                        <div className="h-12">
                            <p className="text-2xl md:text-3xl font-medium text-slate-700 typewriter" role="heading" aria-level="2">
                                {personalInfo.title}
                            </p>
                        </div>
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            {personalInfo.bio}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-6">
                            <Link
                                href="/projects"
                                className="btn-primary group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                aria-label="View my portfolio projects"
                            >
                                <span className="flex items-center">
                                    View My Work
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-glass focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                aria-label="Go to contact page"
                            >
                                Contact Me
                            </Link>
                        </div>

                        {/* Social links */}
                        <nav className="flex gap-4 pt-4" aria-label="Social media links">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-card hover:bg-primary-50 text-slate-700 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                                aria-label="Visit my GitHub profile"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-card hover:bg-primary-50 text-slate-700 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                                aria-label="Visit my LinkedIn profile"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="p-3 glass-card hover:bg-primary-50 text-slate-700 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                                aria-label="Send me an email"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="sr-only">Email</span>
                            </a>
                        </nav>
                    </div>

                    <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative group">
                            {/* Professional subtle glow */}
                            <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-professional rounded-full blur-3xl opacity-10 group-hover:opacity-15 transition-opacity" aria-hidden="true"></div>

                            {/* Clean white backdrop */}
                            <div className="absolute inset-4 bg-white/30 backdrop-blur-sm rounded-full" aria-hidden="true"></div>

                            <Image
                                src="/profile2.JPG"
                                alt="Aayush Singh - Frontend Developer profile photo"
                                width={384}
                                height={384}
                                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-soft-xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;