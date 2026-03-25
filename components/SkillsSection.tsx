import React from 'react';
import { skillCategories } from '../data/skills';

const SkillsSection: React.FC = () => {

  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-dots opacity-5" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 id="skills-heading" className="section-title gradient-text">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-professional mx-auto mt-4 mb-6 rounded-full" aria-hidden="true"></div>
          <p className="section-subtitle">
            I&apos;ve worked with a variety of technologies across the full development stack. Here&apos;s an overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }} role="listitem">
              <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-5" role="list" aria-label={`${category.category} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group" role="listitem">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold" aria-label={`${skill.proficiency} percent proficiency`}>
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.proficiency}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar-fill transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
