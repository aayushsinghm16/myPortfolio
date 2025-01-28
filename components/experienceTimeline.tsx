import { experienceData } from "../data/experience";

const experienceTimeline: React.FC = () => {
    return <div>
        {experienceData.map((experience, index) => (
            <ol key={index} className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6" key={experience.company}>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {experience.role} - {experience.company}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {experience.period}
                    </time>
                    <ul className="pb-6 text-base font-normal text-gray-500 dark:text-gray-400">
                        {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="list-disc ml-4 mb-2 text-justify">
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </li>
            </ol>
        ))}
    </div>
}

export default experienceTimeline;