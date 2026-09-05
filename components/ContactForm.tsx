'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  validateName,
  validateEmail,
  validateMessage,
  ERROR_MESSAGES,
  VALIDATION_RULES,
} from '../utils/formValidation';

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: '', email: '', subject: '', message: '' };

// Uses the tokenized .field class from globals.css — square corners, token
// colours, and the global :focus-visible rule handles the focus ring.
const field = 'field';
const fieldError = 'field-invalid';
const labelCls = 'block label-mono mb-1';
const errCls = 'text-sm text-critical mt-1';

function Form() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [data, setData] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
    // clear a field's error as soon as the user starts correcting it
    setErrors(prev => (prev[name as keyof Fields] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!data.name.trim()) next.name = ERROR_MESSAGES.NAME.REQUIRED;
    else if (!validateName(data.name.trim())) next.name = ERROR_MESSAGES.NAME.INVALID;

    if (!data.email.trim()) next.email = ERROR_MESSAGES.EMAIL.REQUIRED;
    else if (!validateEmail(data.email.trim())) next.email = ERROR_MESSAGES.EMAIL.INVALID;

    if (!data.subject.trim()) next.subject = 'Subject is required';

    if (!data.message.trim()) next.message = ERROR_MESSAGES.MESSAGE.REQUIRED;
    else if (!validateMessage(data.message.trim())) next.message = ERROR_MESSAGES.MESSAGE.INVALID;

    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      setStatus(ERROR_MESSAGES.FORM.FIX_ERRORS);
      // move focus to the first invalid control so keyboard users land on it
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    setBusy(true);
    setStatus('Sending your message…');

    try {
      if (!executeRecaptcha) throw new Error('Security check is still loading. Please try again in a moment.');
      const captchaToken = await executeRecaptcha('contact_form');

      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, captchaToken }),
      });

      // Surface the real reason instead of a generic failure.
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Message could not be sent (${res.status}).`);
      }

      toast.success('Message sent — I usually reply within 24 hours.');
      setStatus('Message sent successfully.');
      setData(EMPTY);
      setErrors({});
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please email me directly.';
      toast.error(msg);
      setStatus(msg);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8" aria-label="Contact form">
      {/* single live region: announces validation failures, progress and the result */}
      <p role="status" aria-live="polite" className="sr-only">{status}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className={labelCls}>Full Name</label>
          <input
            id="name" name="name" type="text" autoComplete="name"
            value={data.name} onChange={onChange}
            placeholder="e.g. John Doe"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${field} ${errors.name ? fieldError : ''}`}
          />
          {errors.name && <p id="name-error" className={errCls}>{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelCls}>Email Address</label>
          <input
            id="email" name="email" type="email" autoComplete="email"
            value={data.email} onChange={onChange}
            placeholder="e.g. john@company.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${field} ${errors.email ? fieldError : ''}`}
          />
          {errors.email && <p id="email-error" className={errCls}>{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className={labelCls}>Subject</label>
        <input
          id="subject" name="subject" type="text"
          value={data.subject} onChange={onChange}
          placeholder="What are we discussing?"
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`${field} ${errors.subject ? fieldError : ''}`}
        />
        {errors.subject && <p id="subject-error" className={errCls}>{errors.subject}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea
          id="message" name="message" rows={6}
          value={data.message} onChange={onChange}
          placeholder="Your project details, timeline, and goals…"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          className={`${field} resize-none ${errors.message ? fieldError : ''}`}
        />
        {errors.message ? (
          <p id="message-error" className={errCls}>{errors.message}</p>
        ) : (
          <p id="message-hint" className="text-sm text-muted mt-1">
            {VALIDATION_RULES.MESSAGE.MIN_LENGTH}–{VALIDATION_RULES.MESSAGE.MAX_LENGTH} characters.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={busy}
        aria-busy={busy}
        className="btn w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {busy ? (
          <span className="flex items-center gap-2 justify-center">
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Sending…
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-sm text-muted">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
           className="text-accent underline underline-offset-2">Privacy Policy</a>{' '}and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"
           className="text-accent underline underline-offset-2">Terms of Service</a>{' '}apply.
      </p>
    </form>
  );
}

/**
 * The provider is mounted here rather than in the root layout so the reCAPTCHA
 * script only loads on /contact, not on every route.
 */
export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Without a key the token call would fail silently and every submit would
  // look broken — show the direct route instead of a form that cannot work.
  if (!siteKey) {
    return (
      <p className="text-body">
        The contact form is unavailable right now. Email me directly at{' '}
        <a href="mailto:aayushsinghm16@gmail.com" className="text-accent underline underline-offset-2">
          aayushsinghm16@gmail.com
        </a>.
      </p>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey} scriptProps={{ async: true, defer: true }}>
      <Form />
    </GoogleReCaptchaProvider>
  );
}
