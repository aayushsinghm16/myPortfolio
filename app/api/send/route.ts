import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';

const resend = new Resend(process.env.API_KEY_SEND);

async function verifyCaptcha(token: string) {
    try {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            {
                method: 'POST',
            }
        );
        const data = await response.json();

        // Check if the score is above your threshold (0.5 is moderate)
        return {
            success: data.success && data.score > 0.5,
            score: data.score
        };
    } catch (error) {
        console.error('Error verifying captcha:', error);
        return { success: false, score: 0 };
    }
}

export async function POST(req: Request) {
    try {
        const { name, email, message, captchaToken } = await req.json();

        // Verify CAPTCHA
        const { success, score } = await verifyCaptcha(captchaToken);
        if (!success) {
            return NextResponse.json(
                { error: 'Security check failed. Please try again.' },
                { status: 400 }
            );
        }

        // Log the score (optional)
        console.log(`reCAPTCHA score: ${score}`);

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'aayushsinghm16@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            react: EmailTemplate({ name: name, email: email, message: message }),
        });
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error in send route:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
