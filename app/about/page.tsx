'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../../components/ui/card';
import { educationHistory } from '../../data/education';
import { interests } from '../../data/interests';
import { personalInfo } from '../../data/personal';
import { experienceData } from '../../data/experience';

const About = () => {

    return (
        <main className="pt-20">
            {/* About Hero Section */}
            <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            {personalInfo.bio}
                        </p>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/profile2.JPG"
                                alt="Aayush Singh Profile"
                                width={500}
                                height={500}
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </div>
                        <div className="w-full md:w-2/3 space-y-6">
                            <h2 className="text-3xl font-bold">Hi, I&apos;m {personalInfo.name}</h2>
                            <div className="w-20 h-1 bg-primary"></div>
                            {personalInfo.longBio.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 dark:text-gray-300">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
                        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            My professional journey showcases my growth and expertise in software development across various roles and organizations.
                        </p>
                    </div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {experienceData.slice(0, 4).map((exp, index) => (
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

            {/* Education Section */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {educationHistory.map((edu, index) => (
                            <Card key={index} className="shadow-md">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <div className="flex justify-between items-center mt-2 mb-4">
                                        <span className="text-primary">{edu.institution}</span>
                                        <span className="text-gray-600 dark:text-gray-400">{edu.year}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interests Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center">Interests & Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {interests.map((interest, index) => (
                            <Card key={index} className="shadow-md bg-white dark:bg-gray-800">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Philosophy */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        &ldquo;{personalInfo.philosophy}&rdquo;
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;
