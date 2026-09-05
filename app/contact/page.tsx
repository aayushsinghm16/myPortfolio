import React from 'react';
import { contactInfo, socialLinks } from '../../data/contact';
import { personalInfo } from '../../data/personal';
import ContactForm from '../../components/ContactForm';

/**
 * Contact.
 *
 * Server component wrapping the client <ContactForm />, which carries its own
 * reCAPTCHA provider so the script loads on this route only.
 *
 * Heading order previously ran h1 → h3 → h3 → h3 → h2; it now runs h1 → h2 → h3
 * with no skips, and the page no longer renders a second <main>.
 */
export default function ContactPage() {
  return (
    <div className="px-4 lg:px-8 pt-[88px] pb-10">
      <div className="max-w-[1080px] mx-auto">

        <header className="panel panel-strong p-6 lg:p-8">
          <p className="label-mono mb-4">Contact</p>
          <h1 className="text-2xl font-semibold text-ink mb-3">Start a conversation</h1>
          <p className="text-md text-body max-w-[58ch]">
            Open to Staff / Principal and frontend architect roles — remote, or relocation
            with sponsorship. Based in India (IST), overlapping European afternoons and
            US mornings.
          </p>
        </header>

        <section className="mt-9" aria-labelledby="direct-heading">
          <div className="section-head">
            <span className="label-mono">§ 01 — Direct</span>
            <h2 id="direct-heading" className="section-title">Reach me</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 panel mt-5">
            {contactInfo.map(c => (
              <div key={c.title} className="p-5 border-b sm:border-b-0 sm:border-r border-rule last:border-r-0 last:border-b-0">
                <p className="label-mono mb-2">{c.title}</p>
                <a
                  href={c.action}
                  className="text-sm text-ink hover:text-accent transition-colors duration-fast break-words"
                  {...(c.action.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {c.details}
                </a>
              </div>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2 mt-4">
            {socialLinks.map(l => (
              <li key={l.name}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip hover:border-accent hover:text-accent transition-colors duration-fast"
                >
                  {l.name} <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-9" aria-labelledby="form-heading">
          <div className="section-head">
            <span className="label-mono">§ 02 — Message</span>
            <h2 id="form-heading" className="section-title">Send me a message</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[62ch]">
            I usually reply within 24 hours. Prefer email? {' '}
            <a href={`mailto:${personalInfo.email}`} className="text-accent underline underline-offset-2">
              {personalInfo.email}
            </a>
          </p>

          <div className="panel p-6 lg:p-8 mt-5">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
