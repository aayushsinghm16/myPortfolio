import React from 'react';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '../lib/ThemeContext';
import DeferredWidgets from '../components/DeferredWidgets';
import NetworkBackground from '../components/NetworkBackground';
import type { Metadata } from 'next';

// IBM Plex Sans — Swiss-influenced, engineering-grade. Static-only on Google
// Fonts, so weights are explicit. 300 is unused today but kept for the light
// display treatment in the title block.
const plex = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-plex',
    weight: ['300', '400', '500', '600', '700'],
});

// JetBrains Mono ships a variable font: omitting `weight` pulls one file
// covering the whole range instead of three static cuts.
const mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mono',
});

const SITE_URL = 'https://aayushsingh.co.in';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Aayush Singh - Staff Frontend Engineer & Frontend Architect | React, Next.js, TypeScript',
        template: '%s | Aayush Singh Portfolio',
    },
    description: 'Frontend architect with 11+ years defining technical direction for large React and TypeScript platforms — NX monorepos across 5 brands and 12 locales, design systems, micro-frontends and SSR. Regulated fintech and enterprise e-commerce serving 1M+ users.',
    keywords: [
        'Aayush Singh', 'Staff Frontend Engineer', 'Principal Frontend Engineer',
        'Frontend Architect', 'React Architect', 'Frontend Platform Engineer',
        'React Developer', 'Next.js Developer', 'TypeScript', 'Vue.js',
        'Design Systems', 'Micro-frontends', 'NX Monorepo', 'SSR', 'GraphQL',
        'Frontend System Design', 'Web Accessibility WCAG', 'Performance Optimization',
        'E-commerce Developer', 'Fintech Developer',
        'Publicis Sapient', 'Goodyear', 'SigFig', 'Foyr',
        'Delhi NCR Developer', 'Remote Frontend Engineer', 'Hire Staff Frontend Engineer',
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
        title: 'Aayush Singh - Staff Frontend Engineer | 11+ Years Experience',
        description: 'Staff Frontend Engineer specializing in React, Next.js, TypeScript. 11+ years building enterprise e-commerce, fintech, and 3D visualization platforms.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Aayush Singh - Staff Frontend Engineer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aayush Singh - Staff Frontend Engineer',
        description: 'Staff Frontend Engineer with 11+ years expertise in React, Next.js, TypeScript. Building enterprise-scale platforms.',
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
    jobTitle: 'Staff Frontend Engineer',
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
    ],
    knowsAbout: [
        'React.js', 'Next.js', 'TypeScript', 'Vue.js', 'JavaScript',
        'Frontend Architecture', 'Web Performance', 'Accessibility',
        'GraphQL', 'Node.js', 'Tailwind CSS',
    ],
    description: 'Staff Frontend Engineer with 11+ years of expertise building enterprise-scale web applications.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${plex.variable} ${mono.variable}`}>
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
                    <NetworkBackground />
                    <Navbar />
                    <main id="main-content" tabIndex={-1} className="relative z-[1] min-h-screen scroll-mt-28 outline-none">
                        {children}
                    </main>
                    <Footer />
                    <DeferredWidgets />
                    <Toaster position="bottom-right" />
                </ThemeProvider>
            </body>
        </html>
    );
}
