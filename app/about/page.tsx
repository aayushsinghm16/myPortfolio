import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../../data/personal';
import { experienceData } from '../../data/experience';
import { educationHistory } from '../../data/education';
import { principles } from '../../data/principles';

/**
 * Full history.
 *
 * Server component. Three fixes carried over from the audit:
 * - the page no longer renders its own <main> (the layout owns that landmark;
 *   there were previously two, nested)
 * - heading order runs h1 → h2 → h3 with no skips and no h2 before the h1
 * - every role shows ALL achievements, not just the first. The old timeline
 *   hid the strongest architectural detail behind a click most visitors
 *   never made.
 */
export default function AboutPage() {
  return (
    <div className="px-4 lg:px-8 pt-[88px] pb-10">
      <div className="max-w-[1080px] mx-auto">

        <header className="panel panel-strong">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-6 lg:p-8">
            <div>
              <p className="label-mono mb-4">The long version</p>
              <h1 className="text-2xl font-semibold text-ink mb-4">
                Architecting digital resilience and precision
              </h1>
              <div className="flex flex-col gap-4 max-w-[64ch]">
                {personalInfo.longBio.map((para, i) => (
                  <p key={i} className="text-sm text-body">{para}</p>
                ))}
              </div>
            </div>
            <div className="hidden md:block w-[150px]">
              <div className="relative aspect-[4/5] border border-rule bg-panel-alt overflow-hidden">
                <Image
                  src="/profile2.JPG"
                  alt={`${personalInfo.name}, ${personalInfo.title}`}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* ── Track record ─────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="history-heading">
          <div className="section-head">
            <span className="label-mono">§ 01 — Track record</span>
            <h2 id="history-heading" className="section-title">Eleven years, no gaps</h2>
          </div>

          <ol className="panel mt-5">
            {experienceData.map((role, i) => (
              <li key={`${role.company}-${role.period}`} className="grid grid-cols-1 sm:grid-cols-[170px_1fr] border-b border-rule last:border-b-0">
                <div className="p-5 sm:border-r border-rule">
                  <p className="font-mono text-sm text-muted tabular leading-snug">{role.period}</p>
                  {role.type && (
                    <p className={`font-mono text-2xs uppercase tracking-[0.1em] mt-1 ${i === 0 ? 'text-accent' : 'text-muted'}`}>
                      {role.type}
                    </p>
                  )}
                </div>

                <div className="p-5 pt-0 sm:pt-5">
                  <h3 className="text-base font-semibold text-ink">{role.role}</h3>
                  <p className="text-sm text-muted mt-0.5">{role.company}</p>
                  {role.context && (
                    <p className="font-mono text-sm text-muted mt-1">{role.context}</p>
                  )}

                  <ul className="flex flex-col gap-2 mt-4">
                    {role.achievements.map(a => (
                      <li key={a} className="text-sm text-body border-l-2 border-rule pl-3">{a}</li>
                    ))}
                  </ul>

                  {role.skills && (
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {role.skills.map(s => <li key={s} className="chip">{s}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Principles ───────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="method-heading">
          <div className="section-head">
            <span className="label-mono">§ 02 — Method</span>
            <h2 id="method-heading" className="section-title">How I decide</h2>
          </div>

          <ol className="panel mt-5">
            {principles.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[40px_1fr] lg:grid-cols-[56px_1fr_1fr] gap-4 lg:gap-6 p-5 border-b border-rule last:border-b-0">
                <span className="font-mono text-xs font-bold text-accent pt-1 tabular">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink leading-snug mb-2">{p.title}</h3>
                  <p className="text-sm text-body">{p.statement}</p>
                </div>
                <div className="col-start-2 lg:col-start-3 border-t lg:border-t-0 lg:border-l border-rule pt-3 lg:pt-0 lg:pl-5">
                  <p className="label-mono mb-2">Evidence</p>
                  <p className="text-sm text-muted">{p.evidence}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Education ────────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="education-heading">
          <div className="section-head">
            <span className="label-mono">§ 03 — Foundations</span>
            <h2 id="education-heading" className="section-title">Education &amp; certification</h2>
          </div>

          <div className="panel mt-5">
            {educationHistory.map(e => (
              <div key={e.degree} className="grid grid-cols-1 sm:grid-cols-[170px_1fr] border-b border-rule last:border-b-0">
                <p className="font-mono text-sm text-muted tabular p-5 sm:border-r border-rule">{e.year}</p>
                <div className="p-5 pt-0 sm:pt-5">
                  <h3 className="text-base font-semibold text-ink">{e.degree}</h3>
                  <p className="text-sm text-muted mt-0.5">{e.institution}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2 mt-4">
            <li className="chip">Cutshort Certified — React.js (Advanced)</li>
            <li className="chip">Cutshort Certified — JavaScript (Advanced)</li>
            <li className="chip">IBM — Generative AI &amp; Prompt Engineering</li>
          </ul>
        </section>

        <div className="panel panel-strong p-6 lg:p-8 mt-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-lg font-semibold text-ink mb-2">Let&apos;s build the next iteration</h2>
            <p className="text-sm text-muted max-w-[48ch]">
              Open to Staff / Principal and architect roles — remote, or relocation with sponsorship.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn">Get in touch</Link>
            <Link href="/projects" className="btn btn-ghost">View work</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
