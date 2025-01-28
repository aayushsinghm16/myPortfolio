import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Digital Wealth - SigFig",
        description: "SigFig offers a comprehensive digital wealth platform that integrates with existing systems to streamline account opening, client onboarding, and product suitability, enhancing efficiency for financial institutions.",
        technologies: ["React", "TypeScript", "GraphQL", "Material UI", "react-form-hook", "react-pdf", "docusign"],
        imageUrl: "/digitalWealth.png",
        liveUrl: "https://www.sigfig.com/"
    },
    {
        id: 2,
        title: "Prodport - Core Value Technology",
        description: "Enhance e-commerce conversion rates by testing, personalizing, and optimizing content across your site.Focus on impactful elements like product titles and media, analyze key performance metrics, and scale content creation with generative AI.This approach moves beyond superficial changes, delivering meaningful shopping experiences that drive conversions.",
        technologies: ["React", "TypeScript", "Redux", "Material UI"],
        imageUrl: "/prodport.jpg",
        liveUrl: "http://www.prodport.com/"
    },
    {
        id: 3,
        title: "Neo - Foyr",
        description: "Foyr Neo is a user-friendly 3D interior design software that streamlines tasks like mood boards, floor plans, 3D renderings, and 4K video walkthroughs, enabling designers to bring clients' visions to life.",
        technologies: ["Vue", "JavaScript", "Vuex", "Element Ui", "Sass", "algolia"],
        imageUrl: "/neoFoyr.png",
        liveUrl: "https://neo.foyr.com/"
    }, {
        id: 4,
        title: "PandeyG - Grarri",
        description: "PandayG is an online e-commerce platform that enables its users to take their businesses online, connect with their existing customer base and reach to a larger audience",
        technologies: ["Angular", "JavaScript", "Node.js", "Mongodb", "Sass", "Android"],
        imageUrl: "/pandeyG.png",
        liveUrl: "https://grarri.com/"
    }, {
        id: 5,
        title: "RHKN - IIT Delhi",
        description: "RHKN is an open platform created with an aim to foster exchange of knowledge related to rural housing. Rural housing knowledge network (RHKN) promises to keep transparency with respect to source of knowledge and give due credit to contributors. Utmost care has been taken in providing information on housing in India.",
        technologies: ["Flask", "JavaScript", "Python", "Mongodb", "Sass", "Matplotlib"],
        imageUrl: "/rhkn.jpg",
        liveUrl: "https://design.iitd.ac.in/rural-housing-knowledge-network.html"
    }

    // Add more projects here
];

const ProjectsPage: React.FC = () => {
    return (
        <div className="pt-12">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-48 object-cover "
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 px-2 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Project Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
export default ProjectsPage;
