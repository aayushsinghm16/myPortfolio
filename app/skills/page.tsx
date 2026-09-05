import React from 'react';
import Link from 'next/link';
import { skillCategories, depthLegend, leadershipSkills, learningJourneyQuote } from '../../data/skills';

/**
 * Capability matrix.
 *
 * Server component. The previous page rendered 18 elements at opacity:0 behind
 * scroll observers and showed self-scored percentage bars; both are gone.
 * Expert is the only band that takes the accent, so the shape of the expertise
 * reads at a glance.
 */
export default function SkillsPage() {
  return (
    <div className="px-4 lg:px-8 pt-[88px] pb-10">
      <div className="max-w-[1080px] mx-auto">
        <header className="panel panel-strong p-6 lg:p-8">
          <p className="label-mono mb-4">Capability</p>
          <h1 className="text-2xl font-semibold text-ink mb-3">Depth, against a stated benchmark</h1>
          <p className="text-md text-body max-w-[60ch]">
            Bands rather than percentages. A self-assigned 98% asserts nothing; a defined
            band is a claim that can be interrogated in an interview — which is the point.
          </p>
        </header>

        <section className="mt-9" aria-labelledby="matrix-heading">
          <div className="section-head">
            <span className="label-mono">§ 01 — Matrix</span>
            <h2 id="matrix-heading" className="section-title">Technical depth</h2>
          </div>

          <div className="panel mt-5">
            {skillCategories.map(cat => (
              <div key={cat.category} className="grid grid-cols-1 sm:grid-cols-[170px_1fr] border-b border-rule last:border-b-0">
                <h3 className="label-mono p-4 bg-panel-alt border-b sm:border-b-0 sm:border-r border-rule text-ink">
                  {cat.category}
                </h3>
                <ul className="flex flex-wrap gap-2 p-4">
                  {cat.skills.map(s => (
                    <li key={s.name} className={`chip ${s.depth === 'Expert' ? 'chip-accent' : ''}`}>
                      <span className="text-ink">{s.name}</span>
                      <span className="text-2xs uppercase tracking-[0.09em] text-muted">{s.depth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <dl className="flex flex-wrap gap-x-7 gap-y-2 mt-4">
            {(Object.keys(depthLegend) as Array<keyof typeof depthLegend>).map(band => (
              <div key={band} className="flex gap-2 items-baseline">
                <dt className="font-mono text-2xs uppercase tracking-[0.1em] text-ink">{band}</dt>
                <dd className="text-sm text-muted">{depthLegend[band]}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-9" aria-labelledby="leadership-heading">
          <div className="section-head">
            <span className="label-mono">§ 02 — Practice</span>
            <h2 id="leadership-heading" className="section-title">How the work gets led</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[62ch]">
            Practices with evidence behind them, not adjectives.
          </p>
          <ul className="flex flex-wrap gap-2 mt-5">
            {leadershipSkills.map(s => <li key={s} className="chip">{s}</li>)}
          </ul>
        </section>

        <section className="mt-9" aria-labelledby="learning-heading">
          <div className="section-head">
            <span className="label-mono">§ 03 — Outlook</span>
            <h2 id="learning-heading" className="section-title">On keeping current</h2>
          </div>
          <blockquote className="panel p-6 mt-5">
            <p className="text-md text-body max-w-[64ch]">{learningJourneyQuote}</p>
          </blockquote>
        </section>

        <div className="panel panel-strong p-6 lg:p-8 mt-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <p className="text-md text-ink max-w-[46ch]">
            The full decision records behind these are on the work page.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn">View work</Link>
            <a
              href="/Aayush_Singh_Resume.pdf"
              download="Aayush_Singh_Staff_Frontend_Engineer.pdf"
              className="btn btn-ghost"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
