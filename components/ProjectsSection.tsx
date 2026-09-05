import React from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';

/**
 * §03 Case records.
 *
 * Projects render as decision records rather than cards: constraint, the
 * decision including what was rejected, and the outcome. The rejected-
 * alternative column is the part that reads as Staff rather than Senior, and
 * the old card format had nowhere to put it.
 *
 * Server component — no hover state needs JS, and nothing is hidden at rest.
 */

/** Split "Neo — Foyr" into its product name; tolerate either dash. */
const productName = (title: string) => title.split(/\s[—-]\s/)[0];

/** Show the domain, not the raw URL. */
const hostOf = (url: string) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return url; }
};

export default function ProjectsSection() {
  const featured = projects.filter(p => p.architecture).slice(0, 3);

  return (
    <section id="projects" className="px-4 lg:px-8 mt-9" aria-labelledby="work-heading">
      <div className="max-w-[1080px] mx-auto">
        <div className="section-head">
          <span className="label-mono">§ 03 — Case records</span>
          <h2 id="work-heading" className="section-title">Selected work</h2>
        </div>
        <p className="text-sm text-muted mt-3 max-w-[62ch]">
          Read as decision records: the constraint, what was rejected and why, what it bought.
        </p>

        <div className="mt-5 flex flex-col gap-4">
          {featured.map(p => (
            <article key={p.id} className="panel">
              <div className="flex flex-wrap gap-3 justify-between items-start p-5 border-b border-rule">
                <div>
                  <h3 className="text-md font-semibold text-ink">{productName(p.title)}</h3>
                  {p.context && <p className="font-mono text-sm text-muted mt-1">{p.context}</p>}
                </div>
                <a
                  href={p.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 whitespace-nowrap hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
                >
                  {hostOf(p.liveDemo)} <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-rule">
                <div className="p-5 border-b lg:border-b-0 lg:border-r border-rule">
                  <p className="label-mono mb-2">Scope</p>
                  <p className="text-sm text-body">{p.description}</p>
                </div>
                <div className="p-5 border-b lg:border-b-0 lg:border-r border-rule">
                  <p className="label-mono mb-2">Constraint &amp; decision</p>
                  <p className="text-sm text-body">{p.architecture}</p>
                </div>
                <div className="p-5">
                  <p className="label-mono mb-2">Outcome</p>
                  <ul className="flex flex-col gap-2">
                    {(p.impact ?? []).map(i => (
                      <li key={i} className="text-sm text-body">{i}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 p-4">
                {p.tags.map((t, i) => (
                  <li key={t} className={`chip ${i === 0 ? 'chip-accent' : ''}`}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-block mt-5 font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
        >
          All projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
