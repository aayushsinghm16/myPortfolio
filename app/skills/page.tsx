'use client';
import React from 'react';
import Link from 'next/link';
import {
  programmingLanguages,
  devTools,
} from '../../data/skills';
import { useScrollReveal } from '../../lib/useAnimations';

const Skills = () => {
  const heroReveal = useScrollReveal(0.1);
  const frontendReveal = useScrollReveal(0.1);
  const leadershipReveal = useScrollReveal(0.1);
  const aiReveal = useScrollReveal(0.1);
  const langReveal = useScrollReveal(0.1);
  const securityReveal = useScrollReveal(0.1);
  const backendReveal = useScrollReveal(0.1);
  const cicdReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" role="main">
      {/* Hero Section */}
      <header ref={heroReveal.ref} className={`mb-20 max-w-3xl transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-bold mb-4 block">Senior Frontend Engineering</span>
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
          Technical <span className="text-[var(--primary-dark)]">Excellence</span> in Client Systems.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
          Deep expertise in building scalable frontend architectures, sophisticated user interfaces, and seamless data integration layers with a secondary focus on supporting backend infrastructure.
        </p>
      </header>

      {/* Bento Grid Skills Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
        {/* Frontend Ecosystem - Primary Large Card */}
        <section ref={frontendReveal.ref} className={`md:col-span-8 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-200/20 dark:border-slate-700/20 transition-all duration-700 ${frontendReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Core Frontend Ecosystem</h2>
            </div>
            <span className="hidden sm:block font-sans text-[10px] uppercase tracking-widest text-[var(--primary)]/60 font-bold border border-[var(--primary)]/20 px-3 py-1 rounded-full">Primary Focus</span>
          </div>

          <div className="space-y-12">
            {/* Primary Frameworks */}
            <div className="space-y-8">
              <h3 className="font-heading text-sm font-bold text-[var(--primary)]/80 uppercase tracking-widest">Primary Frameworks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* React Ecosystem */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#61DAFB]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="12" cy="12" r="2.139"/>
                      <ellipse cx="12" cy="12" rx="11" ry="4.222" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <ellipse cx="12" cy="12" rx="11" ry="4.222" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
                      <ellipse cx="12" cy="12" rx="11" ry="4.222" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-heading font-bold text-slate-900 dark:text-white leading-tight mb-3">React &amp; Next.js Ecosystem</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['React 18', 'Next.js 15', 'Hooks', 'Suspense', 'Server Components', 'React Hook Form', 'TanStack Query', 'Zustand', 'Redux', 'Memoization', 'Lazy Loading', 'App Router'].map((item) => (
                        <span key={item} className="px-2.5 py-1 bg-[#61DAFB]/8 text-[10px] font-bold text-[#0C7FA8] dark:text-[#61DAFB] rounded-md border border-[#61DAFB]/15 uppercase tracking-tight">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vue Ecosystem */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#42B883]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#42B883]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M2 3h3.5L12 14.5 18.5 3H22L12 21 2 3zm7 0h2.5L12 4.5 12.5 3H15l-3 5.5L9 3z"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="font-heading font-bold text-slate-900 dark:text-white leading-tight mb-3">Vue.js &amp; Nuxt.js Ecosystem</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Vue 2', 'Vue 3', 'Nuxt.js', 'Composition API', 'Options API', 'Vuex', 'Vue Router', 'Directives', 'Lifecycle Hooks', 'WebSockets', 'Element UI'].map((item) => (
                        <span key={item} className="px-2.5 py-1 bg-[#42B883]/8 text-[10px] font-bold text-[#2E7D5B] dark:text-[#42B883] rounded-md border border-[#42B883]/15 uppercase tracking-tight">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* State & Data Integration */}
            <div className="pt-12 border-t border-slate-200/10 dark:border-slate-700/10">
              <h3 className="font-heading text-sm font-bold text-[var(--primary)]/80 uppercase tracking-widest mb-8">State &amp; Data Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--primary-dark)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <p className="font-heading font-bold text-slate-900 dark:text-white leading-tight">Redux, Vuex &amp; Context API</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Complex state management orchestration for large-scale enterprise applications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--primary-dark)] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <div>
                    <p className="font-heading font-bold text-slate-900 dark:text-white leading-tight">Contentstack &amp; Google APIs</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Headless CMS orchestration and deep integration with Google Cloud ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GraphQL callout */}
          <div className="mt-12 p-6 bg-[var(--primary)]/5 rounded-2xl border border-[var(--primary)]/10 flex items-center gap-6">
            <div className="bg-[var(--primary)] text-white p-3 rounded-xl shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="font-heading font-bold text-slate-900 dark:text-white">GraphQL Integration Expert</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Highly proficient in Apollo Client, schema stitching, and optimizing frontend-to-backend data flows via GraphQL.</p>
            </div>
          </div>
        </section>

        {/* Soft Skills / Technical Leadership - Tall Secondary Card */}
        <section ref={leadershipReveal.ref} className={`md:col-span-4 bg-[#f2f4f6] dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200/20 dark:border-slate-700/20 flex flex-col transition-all duration-700 ${leadershipReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-4 mb-8">
            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Leadership</h2>
          </div>
          <div className="flex-grow space-y-4">
            {[
              { title: 'Mentorship', desc: 'Guiding frontend teams through architectural transitions and code quality standards.' },
              { title: 'System Design', desc: 'Strategizing modular micro-frontend architectures and shared component libraries.' },
              { title: 'Delivery', desc: 'Aligning technical roadmaps with business objectives and modern dev-cycles.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/10 dark:border-slate-700/10">
                <h3 className="font-heading font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modern AI Tooling */}
        <section ref={aiReveal.ref} className={`md:col-span-5 bg-[#f2f4f6] dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200/20 dark:border-slate-700/20 transition-all duration-700 ${aiReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-4 mb-8">
            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Modern AI Tooling</h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">Leveraging state-of-the-art AI capabilities to accelerate development cycles and enhance user experiences.</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Claude & LLMs', sub: 'Prompt Engineering' },
              { name: 'MCP', sub: 'Context Protocols' },
              { name: 'AI Plugins', sub: 'Extensibility' },
              { name: 'AI Skills', sub: 'Agentic Workflows' },
            ].map((item) => (
              <div key={item.name} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/10 dark:border-slate-700/10">
                <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Programming Languages */}
        <section ref={langReveal.ref} className={`md:col-span-7 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-200/20 dark:border-slate-700/20 transition-all duration-700 ${langReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-4 mb-10">
            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Core Languages</h2>
          </div>
          <div className="space-y-8">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-bold text-slate-900 dark:text-white">{lang.name}</span>
                    {lang.proficiency < 50 && (
                      <span className="text-[10px] bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded font-bold text-slate-500 dark:text-slate-400">LIMITED EXPERIENCE / 1 PROJECT</span>
                    )}
                  </div>
                  <span className="font-sans text-sm text-slate-500 dark:text-slate-400 font-medium">{lang.proficiency}%</span>
                </div>
                <div
                  className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-label={`${lang.name} proficiency`}
                  aria-valuenow={lang.proficiency}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-full transition-all ease-out"
                    style={{ width: langReveal.isVisible ? `${lang.proficiency}%` : '0%', transitionDuration: '1200ms', transitionDelay: `${index * 150}ms` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Compliance */}
        <section ref={securityReveal.ref} className={`md:col-span-6 bg-[#f2f4f6] dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200/20 dark:border-slate-700/20 transition-all duration-700 ${securityReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-4 mb-8">
            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white">Security &amp; Compliance</h2>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Captcha / Turnstile', label: 'Bot Protection' },
              { name: 'CSRF Protection', label: 'Request Security' },
              { name: 'XSS Prevention', label: 'Input Sanitization' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 border border-slate-200/20 dark:border-slate-700/20 rounded-lg bg-white/50 dark:bg-slate-800/50">
                <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">{item.name}</span>
                <span className="font-sans text-[10px] uppercase font-bold text-[var(--primary)]/60">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Supporting Knowledge */}
        <section ref={backendReveal.ref} className={`md:col-span-6 bg-[#f2f4f6] dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200/20 dark:border-slate-700/20 transition-all duration-700 ${backendReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-4 mb-8">
            <svg className="w-8 h-8 text-[var(--primary)]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
            <h2 className="font-heading text-xl font-bold tracking-tight text-slate-500 dark:text-slate-400">Supporting Knowledge</h2>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Node.js / Express', label: 'Competent' },
              { name: 'PostgreSQL / MongoDB', label: 'Functional' },
              { name: 'GraphQL Schemas', label: 'Advanced' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 border border-slate-200/20 dark:border-slate-700/20 rounded-lg bg-white/50 dark:bg-slate-800/50">
                <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">{item.name}</span>
                <span className="font-sans text-[10px] uppercase font-bold text-[var(--primary)]/60">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CI/CD & Infrastructure - Full-width dark banner */}
        <section ref={cicdReveal.ref} className={`md:col-span-12 bg-slate-800 dark:bg-slate-900 text-white p-10 md:p-16 rounded-2xl relative overflow-hidden transition-all duration-700 ${cicdReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-4 mb-10">
              <svg className="w-8 h-8 text-[var(--primary-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white">CI/CD &amp; Infrastructure Tools</h2>
            </div>
            <div className="flex flex-wrap gap-4" role="list" aria-label="CI/CD and infrastructure tools">
              {devTools.map((tool, index) => (
                <span
                  key={index}
                  className={`px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md rounded-lg text-lg font-heading font-bold cursor-default ${cicdReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: cicdReveal.isVisible ? `${index * 60}ms` : '0ms', transitionDuration: '500ms' }}
                  role="listitem"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section ref={ctaReveal.ref} className={`mt-32 p-12 md:p-20 bg-[#e6e8ea] dark:bg-slate-800 text-center rounded-2xl border border-slate-200/20 dark:border-slate-700/20 transition-all duration-700 ${ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">Need a specialized frontend architect?</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 text-lg font-medium leading-relaxed">
          Whether you&apos;re building a zero-to-one startup or scaling an enterprise platform, I bring the technical depth and design precision required for success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/Aayush_Singh_Resume.pdf"
            download="Aayush_Singh_Senior_Frontend_Engineer.pdf"
            className="bg-[var(--primary-dark)] text-white px-10 py-4 rounded-xl font-heading font-extrabold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Full Resume
          </a>
          <Link
            href="/contact"
            className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-10 py-4 rounded-xl font-heading font-extrabold border border-slate-200/20 dark:border-slate-600/20 hover:bg-slate-50 dark:hover:bg-slate-600 transition-all"
          >
            Discuss a Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Skills;
