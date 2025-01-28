import Link from 'next/link';
import React from 'react';

export default function Page() {
    return <>
        <div className="flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Aayush Singh</h1>
            <h2 className="text-2xl text-gray-700 mb-6">UI/UX & Frontend Developer</h2>
            <p className="max-w-2xl text-gray-600 leading-relaxed">
                With over 10 years of experience in frontend development and a deep passion for creating
                exceptional user experiences, I specialize in building modern web applications.
                Leveraging 4 years of expertise in React.js, I craft efficient, scalable, and
                user-friendly solutions that combine aesthetic appeal with technical excellence.
            </p>
            <div className="flex gap-4 mt-8">
                <Link href="/projects" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm">
                    View Projects
                </Link>
                <Link href="/about" className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-sm">
                    About me
                </Link>
            </div>
        </div>
    </>
}