import React from 'react';
import Header from './components/header';
import './globals.css';
import Footer from './components/footer';
import { Roboto } from 'next/font/google'


const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <Header />
                <div className="min-h-[calc(100vh-73px)] grid">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}