import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../data/personal';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-dots opacity-5" aria-hidden="true"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate-fade-up">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-80 md:h-96 bg-gradient-professional rounded-xl opacity-10" aria-hidden="true"></div>
              <Image
                src="/about-image.jpg"
                alt="Aayush Singh working on a laptop in a modern workspace"
                width={600}
                height={400}
                className="w-full h-80 md:h-96 object-cover rounded-xl shadow-soft-lg relative z-10"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h2 id="about-heading" className="section-title gradient-text">About Me</h2>
            <div className="w-20 h-1 bg-gradient-professional rounded-full" aria-hidden="true"></div>
            {personalInfo.longBio.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <Link
                href="/about"
                className="btn-primary inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Learn more about Aayush Singh"
              >
                <span className="flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
