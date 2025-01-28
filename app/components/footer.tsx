import React from 'react';

import { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                    © 2024 My Portfolio. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/aayushsinghm16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <FaGithub className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/aayushsinghm16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <FaLinkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>

                    <a
                        href="mailto:aayushsinghm16@gmail.com"
                        className="text-gray-400 hover:text-gray-500"
                    >
                        <FaEnvelope className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </footer>
    );
};

export default Footer; 