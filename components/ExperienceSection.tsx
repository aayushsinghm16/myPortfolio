import React from 'react';
import { experienceData } from '../data/experience';

const ExperienceSection: React.FC = () => {

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey showcases my growth and expertise in software development across various roles and organizations.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="text-gray-600 dark:text-gray-400 mb-4 list-disc pl-5 space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>

              {exp.skills && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
