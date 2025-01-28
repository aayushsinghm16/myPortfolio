import React from 'react';
import Image from 'next/image';

const OtherHome = () => {
    return (
        <div id="main" className="bg-gray-50">
            <header id="header" className="fixed w-full bg-white/90 backdrop-blur-sm border-b z-50">
                <div className="container mx-auto px-6 py-4">
                    <nav className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-800">John.dev</div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
                            <a href="#experience" className="text-gray-600 hover:text-blue-600">Experience</a>
                            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                        </div>
                        <button className="md:hidden text-gray-600">
                            <i className="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </nav>
                </div>
            </header>

            <section id="hero" className="pt-24 h-[800px] flex items-center">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">Senior Frontend Developer</h1>
                            <p className="text-xl text-gray-600 mb-8">Building exceptional digital experiences with modern web technologies for over a decade.</p>
                            <div className="flex space-x-4">
                                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Hire Me</a>
                                <a href="#projects" className="border border-gray-300 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600">View Work</a>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/add3d6dcbf-fc75ee9a4e7bb4077e70.png"
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
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
                    </div>
                </div>
            </section>

            <section id="experience" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Professional Journey</h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                                    <p className="text-blue-600">Tech Solutions Inc.</p>
                                </div>
                                <span className="text-gray-500">2020 - Present</span>
                            </div>
                            <p className="text-gray-600">Led frontend development for enterprise applications, mentored junior developers, and implemented modern CI/CD practices.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">Frontend Team Lead</h3>
                                    <p className="text-blue-600">Digital Innovations Co.</p>
                                </div>
                                <span className="text-gray-500">2017 - 2020</span>
                            </div>
                            <p className="text-gray-600">Managed a team of 5 developers, architected scalable solutions, and delivered high-performance web applications.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                                    <p className="text-blue-600">WebTech Studios</p>
                                </div>
                                <span className="text-gray-500">2015 - 2017</span>
                            </div>
                            <p className="text-gray-600">Developed responsive web applications using React.js and implemented state management solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <Image
                                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/400c793d5a-44a5dacd031d5e66cc8d.png"
                                alt="modern dashboard interface with data visualization, minimal design"
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Enterprise Dashboard</h3>
                                <p className="text-gray-600 mb-4">React.js, TypeScript, GraphQL</p>
                                <span className="text-blue-600 hover:underline cursor-pointer">View Project <i className="fa-solid fa-arrow-right ml-2"></i></span>
                            </div>
                        </div>
                        <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <Image
                                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/087071e8c5-87603df75ccdae1e1018.png"
                                alt="e-commerce mobile app interface, clean modern design"
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                                <p className="text-gray-600 mb-4">Vue.js, Vuex, Node.js</p>
                                <span className="text-blue-600 hover:underline cursor-pointer">View Project <i className="fa-solid fa-arrow-right ml-2"></i></span>
                            </div>
                        </div>
                        <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <Image
                                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/23c004a797-e1fa79df9985878bb388.png"
                                alt="social media analytics dashboard with charts, modern UI"
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                                <p className="text-gray-600 mb-4">React.js, D3.js, GraphQL</p>
                                <span className="text-blue-600 hover:underline cursor-pointer">View Project <i className="fa-solid fa-arrow-right ml-2"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <i className="fa-regular fa-envelope text-blue-600 text-xl w-8"></i>
                                        <span>john@example.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-location-dot text-blue-600 text-xl w-8"></i>
                                        <span>San Francisco, CA</span>
                                    </div>
                                    <div className="flex space-x-4 mt-8">
                                        <a href="#" className="text-gray-600 hover:text-blue-600">
                                            <i className="fa-brands fa-github text-2xl"></i>
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-blue-600">
                                            <i className="fa-brands fa-linkedin text-2xl"></i>
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-blue-600">
                                            <i className="fa-brands fa-twitter text-2xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600" />
                                </div>
                                <div>
                                    <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer" className="bg-gray-900 text-gray-400 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-2xl font-bold mb-4 md:mb-0">John.dev</div>
                        <div className="flex space-x-8">
                            <a href="#about" className="hover:text-white">About</a>
                            <a href="#skills" className="hover:text-white">Skills</a>
                            <a href="#experience" className="hover:text-white">Experience</a>
                            <a href="#projects" className="hover:text-white">Projects</a>
                            <a href="#contact" className="hover:text-white">Contact</a>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p>&copy; 2025 John.dev. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default OtherHome;