import React from 'react';
import { skillCategories, depthLegend } from '../data/skills';

/**
 * §04 Capability — depth bands against a published benchmark.
 *
 * Replaces the old self-scored percentage bars. "React 98%" invites the
 * question "compared to whom?" and answers it badly; a defined band is a claim
 * an interviewer can actually probe, which is the point.
 *
 * Expert is the only band that takes the accent, so scanning the matrix shows
 * the shape of the expertise at a glance.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 lg:px-8 mt-9" aria-labelledby="capability-heading">
      <div className="max-w-[1080px] mx-auto">
        <div className="section-head">
          <span className="label-mono">§ 04 — Capability</span>
          <h2 id="capability-heading" className="section-title">Depth, against a stated benchmark</h2>
        </div>
        <p className="text-sm text-muted mt-3 max-w-[62ch]">
          Bands, not percentages — so the claim can be interrogated.
        </p>

        <div className="panel mt-5">
          {skillCategories.map(cat => (
            <div key={cat.category} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] border-b border-rule last:border-b-0">
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
      </div>
    </section>
  );
}
