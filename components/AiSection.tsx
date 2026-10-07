import React from 'react';
import Link from 'next/link';
import { aiIntro, aiRecords, aiToolingFacts } from '../data/ai';
import { McpBoundaryDiagram } from './AiDiagrams';

/**
 * §06 AI & agentic systems — home page.
 *
 * Condensed: the facts strip, one diagram, and the three strongest records.
 * The full set, the guardrail matrix and the skill exhibit live on /ai.
 *
 * Server component. Same Scope / Constraint / Outcome shape as §03 so this
 * reads as part of the system rather than a bolt-on.
 */
export default function AiSection() {
  const featured = aiRecords.filter(r =>
    ['harbor-console', 'harbor', 'design-system-mcp'].includes(r.id)
  );

  return (
    <section id="ai" className="px-4 lg:px-8 mt-9" aria-labelledby="ai-heading">
      <div className="max-w-[1080px] mx-auto">
        <div className="section-head">
          <span className="label-mono">§ 06 — AI systems</span>
          <h2 id="ai-heading" className="section-title">Building the layer around the model</h2>
        </div>
        <p className="text-sm text-muted mt-3 max-w-[66ch]">{aiIntro}</p>

        {/* facts strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 panel mt-5">
          {aiToolingFacts.map((f, i) => (
            <div key={f.k} className="p-5 border-r border-b border-rule last:border-r-0">
              <p className={`figure-value text-xl ${i === 0 ? 'text-accent' : ''}`}>{f.v}</p>
              <p className="label-mono mt-2">{f.k}</p>
              <p className="text-sm text-muted mt-1 leading-snug">{f.note}</p>
            </div>
          ))}
        </div>

        {/* diagram */}
        <figure className="panel mt-4 p-5 lg:p-6">
          <McpBoundaryDiagram />
          <figcaption className="label-mono mt-4">
            Fig. — what an MCP server exposes, and what never crosses the boundary
          </figcaption>
        </figure>

        {/* records */}
        <div className="mt-4 flex flex-col gap-4">
          {featured.map(r => (
            <article key={r.id} className="panel">
              <div className="flex flex-wrap gap-3 justify-between items-start p-5 border-b border-rule">
                <div>
                  <h3 className="text-md font-semibold text-ink">{r.name}</h3>
                  <p className="font-mono text-sm text-muted mt-1">{r.context}</p>
                </div>
                {r.link ? (
                  <a
                    href={r.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 whitespace-nowrap hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
                  >
                    {r.status} <span aria-hidden="true">↗</span>
                    <span className="sr-only">— opens {r.link.label} in a new tab</span>
                  </a>
                ) : (
                  <span className="chip whitespace-nowrap">{r.status}</span>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
                <div className="p-5 border-b lg:border-b-0 lg:border-r border-rule">
                  <p className="label-mono mb-2">Constraint &amp; decision</p>
                  <p className="text-sm text-body">{r.constraint}</p>
                </div>
                <div className="p-5">
                  <p className="label-mono mb-2">Outcome</p>
                  <ul className="flex flex-col gap-2">
                    {r.outcome.map(o => (
                      <li key={o} className="text-sm text-body">{o}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 p-4">
                {r.tags.map((t, i) => (
                  <li key={t} className={`chip ${i === 0 ? 'chip-accent' : ''}`}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link
          href="/ai"
          className="inline-block mt-5 font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
        >
          All AI work, guardrails and workflows <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
