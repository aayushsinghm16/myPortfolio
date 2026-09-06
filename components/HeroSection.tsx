import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../data/personal';

/**
 * Title block — the engineering-drawing opener.
 *
 * Server component: there is no interactive state here any more. The mouse
 * parallax and the animated counters were removed deliberately — the figures
 * are the point, and they are readable in the first frame rather than counting
 * up from zero or waiting on an observer.
 *
 * Every colour comes from a semantic token; no hex values in this file.
 */

const fields = [
  { k: 'Discipline', v: 'Frontend architecture, design systems, build & release' },
  { k: 'Domains', v: 'Regulated fintech · Enterprise e-commerce · Real-time 3D' },
  { k: 'Core stack', v: 'React · Next.js · TypeScript · GraphQL · NX' },
  { k: 'Based', v: 'Ghaziabad, India (IST) — open to anywhere' },
];

const metrics = [
  { v: '1M+', k: 'Users reached', src: 'SigFig, via banking partners' },
  { v: '5 / 12', k: 'Brands / locales', src: 'Goodyear NX monorepo', hl: true },
  { v: '0', k: 'WCAG AA findings', src: 'Audited, not claimed' },
  { v: '100K+', k: 'Designers served', src: 'Foyr, 30+ countries' },
];

export default function HeroSection() {
  return (
    <>
      {/* ── Title block ─────────────────────────────────────────── */}
      <section className="px-4 lg:px-8 pt-[88px]" aria-labelledby="hero-heading">
        <div className="max-w-[1080px] mx-auto panel panel-strong">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-6 lg:p-8 border-b border-rule">
            <div>
              <p className="label-mono mb-4">{personalInfo.title}</p>
              <h1
                id="hero-heading"
                className="text-3xl md:text-4xl font-semibold text-ink mb-4"
                style={{ letterSpacing: '-0.035em' }}
              >
                {personalInfo.name}
              </h1>
              <p className="text-md text-body max-w-[52ch] leading-snug">
                I architect frontend systems that outlive their original teams —{' '}
                <strong className="text-ink font-semibold">11+ years</strong> setting the
                patterns, build systems and standards that other engineers build on, across
                regulated fintech and enterprise e-commerce.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/projects" className="btn">View work</Link>
                <a
                  href="/Aayush_Singh_Resume.pdf"
                  download="Aayush_Singh_Principal_Staff_Frontend_Architect.pdf"
                  className="btn btn-ghost"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="hidden md:block w-[132px]">
              <div className="relative aspect-[4/5] border border-rule bg-panel-alt overflow-hidden">
                <Image
                  src="/profile2.JPG"
                  alt={`${personalInfo.name}, ${personalInfo.title}`}
                  fill
                  sizes="132px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* title-block fields */}
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {fields.map(f => (
              <div key={f.k} className="p-4 border-r border-t border-rule last:border-r-0">
                <p className="label-mono mb-1">{f.k}</p>
                <p className="text-sm text-ink font-medium">{f.v}</p>
              </div>
            ))}
            <div className="p-4 border-t border-rule">
              <p className="label-mono mb-1">Status</p>
              <p className="text-sm text-ink font-medium">
                <span className="text-accent">Open</span> — remote or relocation, worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── §01 Evidence ────────────────────────────────────────── */}
      <section className="px-4 lg:px-8 mt-9" aria-labelledby="evidence-heading">
        <div className="max-w-[1080px] mx-auto">
          <div className="section-head">
            <span className="label-mono">§ 01 — Evidence</span>
            <h2 id="evidence-heading" className="section-title">Scope, in the units that matter</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[62ch]">
            Every figure traces to a named engagement. Nothing here is self-scored.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 panel mt-5">
            {metrics.map(m => (
              <div key={m.k} className="p-5 border-r border-b border-rule last:border-r-0">
                <p className={`figure-value text-xl ${m.hl ? 'text-accent' : ''}`}>{m.v}</p>
                <p className="label-mono mt-2">{m.k}</p>
                <p className="text-sm text-muted mt-1 leading-snug">{m.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
