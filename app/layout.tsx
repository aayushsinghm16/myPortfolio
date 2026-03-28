import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '../lib/ThemeContext';
import PortfolioChat from '../components/PortfolioChat';
import type { Metadata } from 'next';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['500', '600', '700'],
});

const SITE_URL = 'https://aayushsingh.co.in';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Aayush Singh - Senior Frontend Engineer | React, Next.js, TypeScript',
        template: '%s | Aayush Singh Portfolio',
    },
    description: 'Senior Frontend Engineer with 10+ years of expertise in React, Next.js, Vue.js, TypeScript. Building enterprise e-commerce platforms at Publicis Sapient (Goodyear), fintech dashboards at SigFig, and 3D visualization at Foyr.',
    keywords: [
        'Aayush Singh', 'Senior Frontend Engineer', 'React Developer', 'Next.js Developer',
        'TypeScript', 'Vue.js', 'Frontend Architect', 'Web Developer India',
        'React.js Expert', 'Full Stack Developer', 'JavaScript Developer',
        'E-commerce Developer', 'Fintech Developer', 'UI Engineer',
        'Publicis Sapient', 'Goodyear', 'SigFig', 'Portfolio',
        'Delhi NCR Developer', 'Hire React Developer',
    ],
    authors: [{ name: 'Aayush Singh', url: SITE_URL }],
    creator: 'Aayush Singh',
    publisher: 'Aayush Singh',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: SITE_URL,
        siteName: 'Aayush Singh Portfolio',
        title: 'Aayush Singh - Senior Frontend Engineer | 10+ Years Experience',
        description: 'Senior Frontend Engineer specializing in React, Next.js, TypeScript. 10+ years building enterprise e-commerce, fintech, and 3D visualization platforms.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Aayush Singh - Senior Frontend Engineer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aayush Singh - Senior Frontend Engineer',
        description: 'Senior Frontend Engineer with 10+ years expertise in React, Next.js, TypeScript. Building enterprise-scale platforms.',
        creator: '@aayushsinghm16',
        images: ['/og-image.jpg'],
    },
    alternates: {
        canonical: SITE_URL,
    },
    category: 'technology',
};

// JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aayush Singh',
    url: SITE_URL,
    image: `${SITE_URL}/profile2.JPG`,
    jobTitle: 'Senior Frontend Engineer',
    worksFor: {
        '@type': 'Organization',
        name: 'Publicis Sapient',
    },
    alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'GRD Institute of Management and Technology',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi NCR',
        addressCountry: 'IN',
    },
    email: 'aayushsinghm16@gmail.com',
    sameAs: [
        'https://github.com/aayushsinghm16',
        'https://linkedin.com/in/aayushsinghm16',
        'https://twitter.com/aayushsinghm16',
    ],
    knowsAbout: [
        'React.js', 'Next.js', 'TypeScript', 'Vue.js', 'JavaScript',
        'Frontend Architecture', 'Web Performance', 'Accessibility',
        'GraphQL', 'Node.js', 'Tailwind CSS',
    ],
    description: 'Senior Frontend Engineer with 10+ years of expertise building enterprise-scale web applications.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body>
                <ThemeProvider>
                    <Navbar />
                    <main id="main-content" role="main" className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                    <PortfolioChat />
                    <Toaster position="bottom-right" />
                </ThemeProvider>
            </body>
        </html>
    );
}
