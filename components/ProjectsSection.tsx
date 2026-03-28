'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';
import { useScrollReveal, useStaggerReveal } from '../lib/useAnimations';

const ProjectsSection: React.FC = () => {
  const displayProjects = projects.slice(0, 3);
  const headerReveal = useScrollReveal(0.2);
  const cardsReveal = useStaggerReveal(displayProjects.length, 150, 0.1);

  // Map project index to Stitch-style descriptions
  const stitchDescriptions = [
    'Architected a ground-up authentication system and order details engine for a global tire retailer using NX Monorepo.',
    'Improved user retention by 35% through core fintech module optimizations and WCAG 2.1 AA compliance.',
    'Built a micro-frontend architecture serving 100K+ designers with real-time 3D object property panels.',
  ];

  return (
    <section
      id="projects"
      className="py-32 px-8 lg:px-24 bg-[#f7f9fb] dark:bg-slate-950"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerReveal.ref}
          className={`flex justify-between items-end mb-20 transition-all duration-700 ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="text-[var(--primary)] font-heading font-bold text-sm uppercase tracking-widest mb-4 block">
              Selected Experience
            </span>
            <h2
              id="projects-heading"
              className="font-heading text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white"
            >
              Key Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold hover:text-[var(--primary)] transition-colors"
            aria-label="See more projects"
          >
            See More Projects
            {/* arrow_forward icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </div>

        {/* Project Cards Grid - 3 columns */}
        <div ref={cardsReveal.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {displayProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.1)] border border-slate-200/15 dark:border-slate-700/15 ${
                cardsReveal.visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              role="listitem"
              aria-label={`Project: ${project.title}`}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                      role="listitem"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title.split(' - ')[0]}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {stitchDescriptions[index] || project.description}
                </p>

                {/* View Case Study link */}
                <a
                  href={project.liveDemo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-heading font-bold text-sm"
                  aria-label={`View case study for ${project.title}`}
                >
                  View Case Study
                  {/* open_in_new icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
