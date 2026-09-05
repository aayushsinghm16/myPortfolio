import React from 'react';
import { principles } from '../data/principles';

/**
 * §02 Method — the highest-signal section for Staff/Principal screening.
 * Each position is paired with the work that earns it, so it survives a
 * follow-up question. Numbering is meaningful here: this is an ordered list.
 */
export default function PrinciplesSection() {
  return (
    <section className="px-4 lg:px-8 mt-9" aria-labelledby="principles-heading">
      <div className="max-w-[1080px] mx-auto">
        <div className="section-head">
          <span className="label-mono">§ 02 — Method</span>
          <h2 id="principles-heading" className="section-title">How I decide</h2>
        </div>
        <p className="text-sm text-muted mt-3 max-w-[62ch]">
          Each position is paired with the work that earns it.
        </p>

        <ol className="panel mt-5">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="grid grid-cols-[40px_1fr] lg:grid-cols-[56px_1fr_1fr] gap-4 lg:gap-6 p-5 border-b border-rule last:border-b-0"
            >
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
      </div>
    </section>
  );
}
