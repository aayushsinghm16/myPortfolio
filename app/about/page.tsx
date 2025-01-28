import React from 'react';
import Image from 'next/image';
import { FaCode, FaPalette, FaMobile } from 'react-icons/fa';
import Link from 'next/link';
import ExperienceTimeline from '../../components/experienceTimeline';
const About: React.FC = () => {
    return (
        <div className=" py-12">
            <section id="hero" className="pt-2 h-[700px] flex items-center bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">Senior Frontend Developer</h1>
                            <p className="text-xl text-gray-600 mb-8">Building exceptional digital experiences with modern web technologies for over a decade.</p>
                            <div className="flex space-x-4">
                                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Hire Me</Link>
                                <Link href="/projects" className="border border-gray-300 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600">View Work</Link>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/profile.jpg"
                                alt="professional portrait of a male software developer in modern office setting, minimalist style, high quality"
                                width={500}
                                height={500}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section id="skills" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Technical Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <i className="fa-brands fa-react text-4xl text-blue-500 mb-4"></i>
                            <h3 className="font-bold mb-2">React.js</h3>
                            <p className="text-gray-600">Advanced state management, hooks, and performance optimization</p>
                        </div>
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <i className="fa-brands fa-vuejs text-4xl text-green-500 mb-4"></i>
                            <h3 className="font-bold mb-2">Vue.js</h3>
                            <p className="text-gray-600">Component architecture, Vuex, and Vue Router</p>
                        </div>
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <i className="fa-brands fa-node-js text-4xl text-green-600 mb-4"></i>
                            <h3 className="font-bold mb-2">Node.js</h3>
                            <p className="text-gray-600">REST APIs, Express.js, and server-side rendering</p>
                        </div>
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <i className="fa-brands fa-git-alt text-4xl text-orange-600 mb-4"></i>
                            <h3 className="font-bold mb-2">Git & CI/CD</h3>
                            <p className="text-gray-600">Version control and deployment automation</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 ">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <FaCode className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                            <p className="text-gray-600">
                                Expertise in React.js, Next.js, and modern JavaScript, creating responsive and performant web applications.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <FaPalette className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                            <p className="text-gray-600">
                                Creating intuitive user interfaces with a focus on user experience and modern design principles.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <FaMobile className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                            <p className="text-gray-600">
                                Building mobile-first websites that provide excellent user experience across all devices.
                            </p>
                        </div>
                    </div>
                    {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-blue-600 flex items-center justify-center">
                                <span className="text-2xl font-bold">95%</span>
                            </div>
                            <span className="mt-4 font-semibold">TypeScript</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-green-600 flex items-center justify-center">
                                <span className="text-2xl font-bold">90%</span>
                            </div>
                            <span className="mt-4 font-semibold">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-purple-600 flex items-center justify-center">
                                <span className="text-2xl font-bold">85%</span>
                            </div>
                            <span className="mt-4 font-semibold">GraphQL</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border-4 border-pink-600 flex items-center justify-center">
                                <span className="text-2xl font-bold">92%</span>
                            </div>
                            <span className="mt-4 font-semibold">CSS/SASS</span>
                        </div>
                    </div> */}
                </div>
            </section>
            <section id="experience" className="py-20 bg-gray-50">

                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Professional Journey</h2>
                    <ExperienceTimeline />
                </div>


            </section>

            <section id="getInTouch" className="py-20 bg-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        I'm always interested in new projects and collaborations. Feel free to reach out if you'd like to work together
                        or just want to say hello!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
export default About;
