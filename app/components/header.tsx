import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLaptopCode } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow fixed w-full bg-white/90 backdrop-blur-sm border-b z-50">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                    <Image
                        src="/student.png"
                        alt="Portfolio Logo"
                        width={32}
                        height={32}
                        className="w-full h-full"
                    />
                </div>
                <h1 className="text-xl font-bold">Aayush Singh</h1>
            </div>

            <nav className="space-x-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
