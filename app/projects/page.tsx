'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '../../components/ui/card';
import { projects } from '../../data/projects';
import ProjectModal from '../../components/ProjectModal';

// Define the Project interface to match the updated data structure
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    liveDemo?: string;
    categories: string[];
}

const Projects = () => {
    const [filter, setFilter] = useState<string>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Cast projects to Project[] to use the interface
    const typedProjects = projects as Project[];

    const filteredProjects = filter === "all"
        ? typedProjects
        : typedProjects.filter(project => project.categories.includes(filter));

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <main className="pt-20">
            {/* Projects Hero Section */}
            <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Explore my portfolio of projects showcasing my skills and experience in software development
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Filter */}
            <section className="py-10 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-center mb-10">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setFilter("all")}
                                className={`px-4 py-2 rounded-md transition-colors ${filter === "all"
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                                    }`}
                            >
                                All Projects
                            </button>
                            <button
                                onClick={() => setFilter("web")}
                                className={`px-4 py-2 rounded-md transition-colors ${filter === "web"
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                                    }`}
                            >
                                Web Development
                            </button>
                            <button
                                onClick={() => setFilter("mobile")}
                                className={`px-4 py-2 rounded-md transition-colors ${filter === "mobile"
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                                    }`}
                            >
                                Mobile Apps
                            </button>
                            <button
                                onClick={() => setFilter("ai")}
                                className={`px-4 py-2 rounded-md transition-colors ${filter === "ai"
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                                    }`}
                            >
                                AI/ML Projects
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="overflow-hidden project-card group cursor-pointer"
                                onClick={() => handleProjectClick(project)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400 px-3 py-1 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="bg-gray-50 dark:bg-gray-900 p-4 flex justify-between">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 hover:text-primary dark:text-gray-300"
                                            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking the link
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 hover:text-primary dark:text-gray-300"
                                            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking the link
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400">No projects found in this category</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-500">Please select a different category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Project Collaboration Section */}
            <section className="py-16 bg-primary/10 dark:bg-primary/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Interested in collaborating?</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Let&apos;s Connect
                    </Link>
                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
};

export default Projects;
