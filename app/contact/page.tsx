'use client'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Head from 'next/head';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    to: 'aayushsinghm16@gmail.com'
                }),
            });

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again later.:' + error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-16">
            <Head>
                <title>Contact Me | Portfolio</title>
                <meta name="description" content="Get in touch with me" />
            </Head>

            <main className=" bg-gradient-to-b from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" style={{ paddingBottom: '0.6rem' }}>
                    <div className="max-w-md mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Have a question or want to work together? Let&apos;s connect!
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg 
                                                shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                transition duration-200"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg 
                                                shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                transition duration-200"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg 
                                                shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                transition duration-200 resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center items-center px-6 py-3 rounded-lg text-white 
                                            font-medium text-lg transition duration-200
                                            ${isSubmitting
                                            ? 'bg-blue-400 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        <div className="mt-8 text-center text-gray-600">
                            <p>You can also reach me directly at:</p>
                            <a
                                href="mailto:aayushsinghm16@gmail.com"
                                className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                                aayushsinghm16@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}