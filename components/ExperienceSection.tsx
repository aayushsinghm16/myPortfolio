'use client';
import React from 'react';
import { experienceData } from '../data/experience';
import { useScrollReveal, useStaggerReveal } from '../lib/useAnimations';

const ExperienceSection: React.FC = () => {
  const headerReveal = useScrollReveal(0.2);
  const cardsReveal = useStaggerReveal(experienceData.length, 150, 0.05);

  return (
    <section id="experience" className="section-padding bg-slate-50 relative overflow-hidden" aria-labelledby="experience-heading">
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 transition-all duration-700 ${headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm font-semibold tracking-[3px] text-primary uppercase mb-3">Experience</p>
          <h2 id="experience-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Work History</h2>
          <div className="w-20 h-1 bg-gradient-professional mx-auto mt-4 rounded-full" aria-hidden="true"></div>
        </div>

        {/* Timeline */}
        <div ref={cardsReveal.ref} className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-slate-200" aria-hidden="true">
            <div
              className="w-full bg-gradient-to-b from-primary via-primary-400 to-transparent transition-all duration-1000"
              style={{ height: cardsReveal.visibleItems.filter(Boolean).length > 0 ? '100%' : '0%' }}
            />
          </div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const isCurrent = index === 0;
              return (
                <div
                  key={index}
                  className={`relative pl-16 md:pl-20 transition-all duration-600 ${cardsReveal.visibleItems[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-30px]'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-2" aria-hidden="true">
                    {isCurrent ? (
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 w-12 h-12 rounded-full bg-primary animate-ping opacity-20" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center group-hover:border-primary transition-colors">
                        <div className="w-3 h-3 rounded-full bg-slate-300" />
                      </div>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`group rounded-2xl border transition-all duration-500 hover:shadow-soft-lg overflow-hidden ${
                      isCurrent
                        ? 'bg-white border-primary-200 shadow-soft ring-1 ring-primary-100'
                        : 'bg-white border-slate-200 shadow-soft hover:border-primary-200'
                    }`}
                  >
                    {/* Card Header */}
                    <div className={`px-6 md:px-8 pt-6 md:pt-7 pb-4 ${isCurrent ? 'bg-gradient-to-r from-primary-50 to-white' : ''}`}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            {isCurrent && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-primary font-semibold text-sm mt-1.5 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {exp.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 whitespace-nowrap">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 md:px-8 pb-6 md:pb-7">
                      <ul className="space-y-2.5 mb-5" role="list">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed" role="listitem">
                            <span className="mt-1.5 flex-shrink-0" aria-hidden="true">
                              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.skills && (
                        <div className="pt-4 border-t border-slate-100">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</p>
                          <div className="flex flex-wrap gap-2" role="list" aria-label={`Skills used at ${exp.company}`}>
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                                  isCurrent
                                    ? 'bg-primary-100 text-primary border border-primary-200 hover:bg-primary-200'
                                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-primary-50 hover:text-primary hover:border-primary-200'
                                }`}
                                role="listitem"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
