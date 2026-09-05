'use client';

import React, { useState, useMemo } from 'react';
import { projects } from '../../data/projects';

/**
 * Case records index.
 *
 * The previous version used a role="tablist"/role="tab" pattern for what are
 * really filter toggles — that pattern requires roving tabIndex and arrow-key
 * handling, neither of which existed, and it pointed four tabs at a single
 * panel. These are now plain buttons with aria-pressed, and the results region
 * is aria-live so the count change is announced.
 *
 * Cards are no longer click targets. Previously <article onClick> opened a modal
 * with no role, tabIndex or key handler, so the whole grid was mouse-only; the
 * links inside each record are the affordance now.
 */

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'ai', label: 'AI' },
  { value: 'mobile', label: 'Mobile' },
] as const;

const productName = (t: string) => t.split(/\s[—-]\s/)[0];
const hostOf = (url: string) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');

  const shown = useMemo(
    () => (filter === 'all' ? projects : projects.filter(p => p.categories.includes(filter))),
    [filter]
  );

  return (
    <div className="px-4 lg:px-8 pt-[88px] pb-10">
      <div className="max-w-[1080px] mx-auto">
        <header className="panel panel-strong p-6 lg:p-8">
          <p className="label-mono mb-4">Case records</p>
          <h1 className="text-2xl font-semibold text-ink mb-3">Selected work</h1>
          <p className="text-md text-body max-w-[60ch]">
            Read as decision records: the constraint, what was rejected and why, and what
            the choice bought.
          </p>
        </header>

        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2 mt-6"
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`font-mono text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-fast ${
                filter === f.value
                  ? 'bg-accent text-accent-ink border-accent'
                  : 'bg-panel text-body border-rule hover:border-rule-strong'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="mt-4">
          <p className="label-mono">
            {shown.length} {shown.length === 1 ? 'record' : 'records'}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {shown.map(p => (
            <article key={p.id} className="panel">
              <div className="flex flex-wrap gap-3 justify-between items-start p-5 border-b border-rule">
                <div>
                  <h2 className="text-md font-semibold text-ink">{productName(p.title)}</h2>
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

              <div className={`grid grid-cols-1 ${p.architecture ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} border-b border-rule`}>
                <div className="p-5 border-b lg:border-b-0 lg:border-r border-rule">
                  <p className="label-mono mb-2">Scope</p>
                  <p className="text-sm text-body">{p.description}</p>
                </div>
                {p.architecture && (
                  <div className="p-5 border-b lg:border-b-0 lg:border-r border-rule">
                    <p className="label-mono mb-2">Constraint &amp; decision</p>
                    <p className="text-sm text-body">{p.architecture}</p>
                  </div>
                )}
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
      </div>
    </div>
  );
}
