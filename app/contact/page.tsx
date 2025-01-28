'use client'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Head from 'next/head';
import {
    validateEmail,
    validateMessage,
    validateName,
    ERROR_MESSAGES,
    FormErrors,
    FormData
} from '../../utils/formValidation';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCaptchaProvider from '../../components/ReCaptchaProvider';

// Create a separate component for the contact form
const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
    const COOLDOWN_PERIOD = 60000; // 1 minute cooldown
    const [recaptchaError, setRecaptchaError] = useState<string>('');

    const validateForm = (): boolean => {
        let isValid = true;
        const newErrors: FormErrors = {
            name: '',
            email: '',
            message: ''
        };

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = ERROR_MESSAGES.NAME.REQUIRED;
            isValid = false;
        } else if (!validateName(formData.name)) {
            newErrors.name = ERROR_MESSAGES.NAME.INVALID;
            isValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = ERROR_MESSAGES.EMAIL.REQUIRED;
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = ERROR_MESSAGES.EMAIL.INVALID;
            isValid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = ERROR_MESSAGES.MESSAGE.REQUIRED;
            isValid = false;
        } else if (!validateMessage(formData.message)) {
            newErrors.message = ERROR_MESSAGES.MESSAGE.INVALID;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setRecaptchaError('');

        // Check if reCAPTCHA is available
        if (!executeRecaptcha) {
            setRecaptchaError('reCAPTCHA is not initialized. Please refresh the page.');
            toast.error('reCAPTCHA not ready');
            return;
        }

        // Validate form before submission
        if (!validateForm()) {
            toast.error(errors.name || errors.email || errors.message);
            return;
        }

        // Check rate limiting
        const currentTime = Date.now();
        if (currentTime - lastSubmissionTime < COOLDOWN_PERIOD) {
            const remainingTime = Math.ceil((COOLDOWN_PERIOD - (currentTime - lastSubmissionTime)) / 1000);
            toast.error(ERROR_MESSAGES.FORM.RATE_LIMIT(remainingTime));
            return;
        }

        setIsSubmitting(true);

        try {
            // Execute reCAPTCHA with a specific action
            const token = await executeRecaptcha('submit_contact')
                .catch(error => {
                    console.error('reCAPTCHA execution failed:', error);
                    throw new Error('Failed to verify reCAPTCHA. Please try again.');
                });

            if (!token) {
                throw new Error('Failed to get reCAPTCHA token');
            }

            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    captchaToken: token,
                    to: 'aayushsinghm16@gmail.com'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setLastSubmissionTime(currentTime);
            } else {
                // Handle specific reCAPTCHA errors
                if (data.error?.includes('reCAPTCHA')) {
                    setRecaptchaError(data.error);
                }
                toast.error(data.error || 'Failed to send message');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again later.';
            console.error('Error:', error);
            toast.error(errorMessage);
            if (errorMessage.includes('reCAPTCHA')) {
                setRecaptchaError(errorMessage);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
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

                {recaptchaError && (
                    <div className="text-red-500 text-sm mt-2">
                        {recaptchaError}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 text-white rounded-lg transition duration-200
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

// Main Contact page component
export default function Contact() {
    return (
        <ReCaptchaProvider>
            <div className="pt-16">
                <Head>
                    <title>Contact Me | Portfolio</title>
                    <meta name="description" content="Get in touch with me" />
                </Head>

                <main className="bg-gradient-to-b from-gray-50 to-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" style={{ paddingBottom: '0.6rem' }}>
                        <div className="max-w-md mx-auto">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
                                <p className="text-lg text-gray-600 mb-8">
                                    Have a question or want to work together? Let&apos;s connect!
                                </p>
                            </div>

                            <ContactForm />

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
        </ReCaptchaProvider>
    );
}