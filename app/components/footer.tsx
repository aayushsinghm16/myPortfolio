import React from 'react';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 py-12" role="contentinfo" aria-label="Site footer">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-primary mb-2">Aayush Singh</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            Frontend Developer specializing in building modern web applications with focus on performance and user experience
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <nav aria-label="Social media links">
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/aayushsinghm16"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-primary dark:text-gray-300 p-2 rounded-md focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                                    aria-label="Visit Aayush Singh's GitHub profile"
                                >
                                    <FaGithub className="h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/aayushsinghm16"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-primary dark:text-gray-300 p-2 rounded-md focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                                    aria-label="Visit Aayush Singh's LinkedIn profile"
                                >
                                    <FaLinkedin className="h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a
                                    href="mailto:aayushsinghm16@gmail.com"
                                    className="text-gray-700 hover:text-primary dark:text-gray-300 p-2 rounded-md focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                                    aria-label="Send email to Aayush Singh"
                                >
                                    <FaEnvelope className="h-6 w-6" aria-hidden="true" />
                                    <span className="sr-only">Email</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <span aria-label={`Copyright ${currentYear}`}>© {currentYear}</span> Aayush Singh. All rights reserved.
                    </p>

                    <nav className="flex space-x-6 mt-4 md:mt-0" aria-label="Footer navigation">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 text-sm px-2 py-1 rounded hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                            aria-label="Go to Home page"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 text-sm px-2 py-1 rounded hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                            aria-label="Go to About page"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 text-sm px-2 py-1 rounded hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                            aria-label="Go to Projects page"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-primary dark:text-gray-400 text-sm px-2 py-1 rounded hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 focus:outline-none focus:underline focus:decoration-primary focus:decoration-2 focus:underline-offset-4"
                            aria-label="Go to Contact page"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </footer>
    );
};

export default Footer;