import React from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/personal';

export default function ContactCta() {
  return (
    <section className="px-4 lg:px-8 mt-9 mb-10" aria-labelledby="cta-heading">
      <div className="max-w-[1080px] mx-auto panel panel-strong p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 id="cta-heading" className="text-lg font-semibold text-ink mb-2">
            Open to Staff / Principal and architect roles
          </h2>
          <p className="text-sm text-muted max-w-[48ch]">
            Based in Ghaziabad, India (IST) and open to anywhere — fully remote, or
            relocation with visa sponsorship. Hours overlap European afternoons
            and US mornings.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn">Get in touch</Link>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-ghost">Email directly</a>
        </div>
      </div>
    </section>
  );
}
