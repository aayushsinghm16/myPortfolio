'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects';
import ProjectModal from '../../components/ProjectModal';
import { useScrollReveal } from '../../lib/useAnimations';

interface Project {
    id: number; title: string; description: string; image: string;
    tags: string[]; github?: string; liveDemo?: string; categories: string[];
}

const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Development', value: 'web' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'AI/ML Projects', value: 'ai' },
];

const Projects = () => {
    const [filter, setFilter] = useState<string>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const heroReveal = useScrollReveal(0.1);
    const gridReveal = useScrollReveal(0.05);

    const typedProjects = projects as Project[];
    const filteredProjects = filter === 'all' ? typedProjects : typedProjects.filter(p => p.categories.includes(filter));

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <header ref={heroReveal.ref} className={`relative mb-16 md:mb-24 overflow-hidden rounded-3xl bg-[#f2f4f6] dark:bg-slate-900/50 p-8 md:p-16 transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative z-10 max-w-3xl">
                    <span className="inline-block py-1 px-3 mb-6 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] font-sans text-xs font-bold uppercase tracking-widest">
                        Selected Works
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tighter leading-[1.1] mb-8">
                        Turning complex problems into <span className="text-[var(--primary)] italic">elegant</span> digital solutions.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium opacity-80">
                        An editorial showcase of technical rigor and architectural precision in frontend engineering.
                    </p>
                </div>
            </header>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-16 items-center" role="tablist" aria-label="Filter projects by category">
                {filters.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setFilter(f.value)}
                        role="tab"
                        aria-selected={filter === f.value}
                        aria-controls="projects-grid"
                        className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                            filter === f.value
                                ? 'bg-[var(--primary)] text-white font-bold shadow-sm'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Projects Gallery - Stitch Bento Layout */}
            <div ref={gridReveal.ref} id="projects-grid" role="tabpanel" className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {filteredProjects.map((project, index) => {
                    // First project is large (8col), all others are small (4col)
                    const isLarge = index === 0;
                    const colSpan = isLarge ? 'md:col-span-12' : 'md:col-span-4';

                    if (isLarge) {
                        // First project — large vertical card (8col)
                        return (
                            <article
                                key={project.id}
                                className={`${colSpan} group relative flex flex-col md:flex-row bg-white dark:bg-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(25,28,30,0.06)] border border-slate-200/20 dark:border-slate-700/20 cursor-pointer ${gridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                                style={{ transitionDelay: gridReveal.isVisible ? `${index * 100}ms` : '0ms' }}
                                onClick={() => openModal(project)}
                                aria-label={`Project: ${project.title}`}
                            >
                                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="md:w-3/5 p-10 flex flex-col justify-between flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight mb-4">{project.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Technologies used">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 text-slate-600 dark:text-slate-300 rounded-md text-xs font-bold font-sans uppercase" role="listitem">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label={`View live demo of ${project.title}`}
                                            >
                                                Live Demo
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </a>
                                        )}
                                        <button
                                            className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                                            onClick={(e) => { e.stopPropagation(); openModal(project); }}
                                        >
                                            View Case
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    }

                    // Small card
                    return (
                        <article
                            key={project.id}
                            className={`${colSpan} group flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(25,28,30,0.06)] border border-slate-200/20 dark:border-slate-700/20 cursor-pointer ${gridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                            style={{ transitionDelay: gridReveal.isVisible ? `${index * 100}ms` : '0ms' }}
                            onClick={() => openModal(project)}
                            aria-label={`Project: ${project.title}`}
                        >
                            <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight mb-3">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto" role="list" aria-label="Technologies used">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 text-slate-600 dark:text-slate-300 rounded-md text-[10px] font-bold font-sans uppercase" role="listitem">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[var(--primary)]/10 text-[var(--primary)] py-2 rounded-lg font-bold text-xs hover:opacity-80 transition-all text-center"
                                            onClick={(e) => e.stopPropagation()}
                                            aria-label={`Demo of ${project.title}`}
                                        >
                                            Demo
                                        </a>
                                    )}
                                    <button
                                        className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 py-2 rounded-lg font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-600 transition-all text-center"
                                        onClick={(e) => { e.stopPropagation(); openModal(project); }}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-2xl font-bold text-slate-400 mb-2">No projects in this category</p>
                    <p className="text-slate-500">Try selecting a different filter above</p>
                </div>
            )}

            {/* Pagination/Load More */}
            <div className="mt-20 flex flex-col items-center">
                <div className="h-px w-24 bg-slate-300/30 dark:bg-slate-700/30 mb-8" aria-hidden="true" />
                <Link href="/contact" className="group flex items-center gap-3 font-heading font-bold text-slate-500 dark:text-slate-400 hover:text-[var(--primary)] transition-colors">
                    Explore More Projects
                    <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </Link>
            </div>

            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
};

export default Projects;
