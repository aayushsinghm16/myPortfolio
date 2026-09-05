import React from 'react';
import Link from 'next/link';
import { experienceData } from '../data/experience';

/**
 * §05 Track record — experience surfaced on the home page.
 *
 * Previously this lived only on /about, and even there rendered just the first
 * achievement bullet per role. Anyone who landed on / and scrolled never saw
 * eleven years of history at all.
 *
 * Each entry leads with achievements[0], which the data files order so the
 * strongest architectural result is first.
 */
export default function TrackRecordSection() {
  const roles = experienceData.slice(0, 5);

  return (
    <section className="px-4 lg:px-8 mt-9" aria-labelledby="track-heading">
      <div className="max-w-[1080px] mx-auto">
        <div className="section-head">
          <span className="label-mono">§ 05 — Track record</span>
          <h2 id="track-heading" className="section-title">Eleven years, no gaps</h2>
        </div>

        <ol className="panel mt-5">
          {roles.map((r, i) => (
            <li key={r.company} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] border-b border-rule last:border-b-0">
              <div className="p-4 sm:border-r border-rule">
                <p className="font-mono text-sm text-muted tabular leading-snug">{r.period}</p>
                {r.type && (
                  <p className={`font-mono text-2xs uppercase tracking-[0.1em] mt-1 ${i === 0 ? 'text-accent' : 'text-muted'}`}>
                    {r.type}
                  </p>
                )}
              </div>
              <div className="p-4 pt-0 sm:pt-4">
                <h3 className="text-base font-semibold text-ink">{r.role}</h3>
                <p className="text-sm text-muted mt-0.5">{r.company}</p>
                <p className="text-sm text-body mt-3 border-l-2 border-rule pl-3">
                  {r.achievements[0]}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <Link
          href="/about"
          className="inline-block mt-5 font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
        >
          Full history <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
