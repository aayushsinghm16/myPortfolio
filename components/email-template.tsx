import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
    <div style={{
        backgroundColor: '#f6f9fc',
        padding: '40px 0',
        fontFamily: 'Arial, sans-serif',
    }}>
        <div style={{
            backgroundColor: '#ffffff',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
            <h1 style={{
                color: '#333',
                fontSize: '24px',
                marginBottom: '16px',
                textAlign: 'center',
            }}>New Message Received!</h1>

            <div style={{
                marginBottom: '24px',
                borderBottom: '1px solid #eee',
                paddingBottom: '16px',
            }}>
                <h2 style={{
                    color: '#666',
                    fontSize: '18px',
                    marginBottom: '8px',
                }}>From: {name}</h2>
                <p style={{
                    color: '#666',
                    fontSize: '16px',
                    margin: '4px 0',
                }}>Email: {email}</p>
            </div>

            <div style={{
                backgroundColor: '#f9f9f9',
                padding: '16px',
                borderRadius: '4px',
            }}>
                <h3 style={{
                    color: '#666',
                    fontSize: '16px',
                    marginBottom: '8px',
                }}>Message:</h3>
                <p style={{
                    color: '#444',
                    fontSize: '14px',
                    lineHeight: '1.6',
                }}>{message}</p>
            </div>
        </div>
    </div>
);
