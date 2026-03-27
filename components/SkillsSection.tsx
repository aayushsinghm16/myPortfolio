'use client';
import React from 'react';
import Image from 'next/image';
import { personalInfo } from '../data/personal';
import { useScrollReveal } from '../lib/useAnimations';

// Stitch-design proficiency bars (hardcoded to match the design)
const proficiencyBars = [
  { label: 'React, Next.js & Vue Ecosystem', value: 98 },
  { label: 'TypeScript & JavaScript (ES6+)', value: 96 },
  { label: 'Cloud Architectures & CI/CD', value: 92 },
  { label: 'Backend & API (Node, GraphQL)', value: 90 },
];

const SkillsSection: React.FC = () => {
  const sectionReveal = useScrollReveal(0.15);
  const barsReveal = useScrollReveal(0.2);

  return (
    <section
      id="skills"
      className="py-32 px-8 lg:px-24 bg-[#e6e8ea] dark:bg-slate-900"
      aria-labelledby="skills-heading"
    >
      <div
        ref={sectionReveal.ref}
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 transition-all duration-700 ${
          sectionReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Technical Proficiency */}
        <div>
          <h2
            id="skills-heading"
            className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-12"
          >
            Technical Proficiency
          </h2>
          <div ref={barsReveal.ref} className="space-y-8" role="list" aria-label="Technical proficiency bars">
            {proficiencyBars.map((skill, index) => (
              <div key={index} role="listitem">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-heading font-bold text-slate-900 dark:text-white">
                    {skill.label}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-xs font-bold">
                    {skill.value}%
                  </span>
                </div>
                <div
                  className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-label={`${skill.label} proficiency`}
                  aria-valuenow={skill.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-[var(--primary)] rounded-full transition-all ease-out"
                    style={{
                      width: barsReveal.isVisible ? `${skill.value}%` : '0%',
                      transitionDuration: `${1000 + index * 300}ms`,
                      transitionDelay: `${index * 150}ms`,
                    }}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote Card */}
        <div className="bg-[var(--primary)] p-12 lg:p-16 rounded-[2rem] text-white shadow-2xl shadow-[var(--primary)]/30 flex flex-col justify-center">
          {/* format_quote icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mb-8 opacity-90"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <h2 className="font-heading text-3xl font-bold mb-6 italic leading-snug">
            &ldquo;Great engineering is the bridge between aesthetic intent and functional reality.&rdquo;
          </h2>
          <p className="font-sans text-lg text-white/70 leading-relaxed mb-8">
            {personalInfo.philosophy ||
              "My approach is defined by technical rigor. I believe in building systems that aren't just visually stunning, but also highly performant, accessible (WCAG 2.1 AA), and scalable for millions of users."}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 relative">
              <Image
                src="/profile2.JPG"
                alt="Aayush Singh"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-heading font-bold">{personalInfo.name}</div>
              <div className="text-sm text-white/60">{personalInfo.title}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
