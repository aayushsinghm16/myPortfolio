import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  // Feature the top 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-slate-50 relative overflow-hidden" aria-labelledby="projects-heading">
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 id="projects-heading" className="section-title gradient-text">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-professional rounded-full mx-auto mt-4 mb-6" aria-hidden="true"></div>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              aria-label={`Project: ${project.title}`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="badge"
                      role="listitem"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-primary flex items-center transition-colors group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
                      aria-label={`View live demo of ${project.title} project (opens in new tab)`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/projects"
            className="btn-primary inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="View all portfolio projects"
          >
            <span className="flex items-center">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
