"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const experiences = [
    {
        company: "Sigfig, Noida",
        role: "Software Development Engineer 2 - Frontend",
        period: "March 2022 - December 2024",
        achievements: [
            "Modernized loading screen using React.js Suspense, reducing loading times by 45% and decreasing user drop rates by 35%.",
            "Integrated Vite into core module, reducing development build times by 30% and accelerating feature implementation by 25%.",
            "Created new modules for brokerage and fund transfers, supporting 30-40% of user base.",
            "Enhanced investment dashboard UI, increasing customer engagement by 20% and Implemented WCAG accessibility best practices.",
        ]
    },
    {
        company: "Core Value Technologies Pvt. Ltd., Noida",
        role: "Senior Frontend Developer",
        period: "July 2021 - Feb 2022",
        achievements: [
            "Developed a robust and user-friendly dashboard using React.js to empower e-commerce merchants to create dynamic, personalized content for their online stores, which increased engagement by 35%.",
            "Increased user engagement and merchant revenue by 15% and 25% through internationalization support and e-commerce plugin development."
        ]
    },
    {
        company: "RBJ Technologies Pvt. Ltd., Hyderabad",
        role: "Senior Frontend Developer",
        period: "April 2019 - July 2021",
        achievements: [
            "Mentored and led front-end development teams, creating reusable and scalable components from scratch to production-ready, while developing and maintaining front-end user interfaces for Foyr's 3D visualization platform using Vue.js, Nuxt.js, and Vuex.",
            "Integrated real-time data and user interactions with the 3D environment using WebSockets, increasing engagement by 35% and providing real-time rendering updates and completion notifications.",
            "Improved user experience by 30% by increasing the loading speed of 3D models and implementing reusable components, leading to a 25% increase in user satisfaction."
        ]
    },
];

export default function ExperienceCarousel() {
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <div className="relative w-full py-12 overflow-hidden">
            <div className="flex items-center justify-center">
                <div
                    className="flex transition-all duration-500 ease-in-out gap-4 px-4 slides"

                >
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`
                               slide
                                 ${index === currentIndex ? 'current' : index < currentIndex ? 'prev' : 'next'}
                            `}
                            style={{ zIndex: index === currentIndex ? 10 : experiences.length - Math.abs(currentIndex - index) }}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <div className={`
                                bg-white rounded-xl shadow-lg p-6 h-[500px] 
                                transform transition-all duration-500
                               
                            `}>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold pb-8">{experience.company}</h3>
                                    <h4 className="text-xl text-blue-600  pb-8">{experience.role}</h4>
                                    <p className="text-gray-600  pb-8">{experience.period}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {experience.achievements.map((achievement, idx) => (
                                            <li key={idx} className="text-gray-700 text-sm" style={{ textAlign: 'justify' }}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
                {experiences.map((_, index) => (
                    <button
                        key={index}
                        className={`
                            w-3 h-3 rounded-full transition-all duration-300
                            ${index === currentIndex
                                ? 'bg-blue-600 w-6'
                                : 'bg-gray-300 hover:bg-blue-400'
                            }
                        `}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
} 