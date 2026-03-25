import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from './components/footer';
import ReCaptchaProvider from '../components/ReCaptchaProvider';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '../lib/ThemeContext';
import PortfolioChat from '../components/PortfolioChat';

export const metadata = {
    title: 'Aayush Singh - Senior Frontend Engineer',
    description: 'Portfolio website of Aayush Singh, a Senior Frontend Engineer with 10+ years of expertise in React, Next.js, TypeScript, and modern web architectures',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <ReCaptchaProvider>
                        <Navbar />
                        <main id="main-content" role="main" className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                        <PortfolioChat />
                        <Toaster position="bottom-right" />
                    </ReCaptchaProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
