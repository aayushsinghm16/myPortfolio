import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';

const resend = new Resend(process.env.API_KEY_SEND);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'aayushsinghm16@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            react: EmailTemplate({ name: name, email: email, message: message }),
        });
        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
