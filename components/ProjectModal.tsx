import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-primary/20 dark:border-primary/30">
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-500 dark:text-gray-400">
            {project.categories.map((category) => (
              <span key={category} className="inline-block mr-2 text-sm bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 px-2 py-0.5 rounded-full">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">About this project</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.github && (
            <Button variant="outline" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            </Button>
          )}
          {project.liveDemo && (
            <Button asChild>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Demo
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
