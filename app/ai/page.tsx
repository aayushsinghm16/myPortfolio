import React from 'react';
import Link from 'next/link';
import { aiIntro, aiRecords, aiToolingFacts, skillExhibit, guardrailMatrix, otherAiRepos } from '../../data/ai';
import { GuardrailFlowDiagram, McpBoundaryDiagram, AgentLoopDiagram } from '../../components/AiDiagrams';

/**
 * /ai — the full AI & agentic systems page.
 *
 * Server component, no client JS. Structure mirrors the rest of the site:
 * numbered sections, panels, hairline rules, one accent per section.
 */
export default function AiPage() {
  return (
    <div className="px-4 lg:px-8 pt-[88px] pb-10">
      <div className="max-w-[1080px] mx-auto">

        <header className="panel panel-strong p-6 lg:p-8">
          <p className="label-mono mb-4">AI &amp; agentic systems</p>
          <h1 className="text-2xl font-semibold text-ink mb-3">Building the layer around the model</h1>
          <p className="text-md text-body max-w-[66ch]">{aiIntro}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="chip chip-accent">MCP server design</span>
            <span className="chip">Agentic workflows</span>
            <span className="chip">LLM guardrails</span>
            <span className="chip">Claude Code skills &amp; hooks</span>
            <span className="chip">Model evaluation</span>
          </div>
        </header>

        {/* ── §01 Scope ──────────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="scope-heading">
          <div className="section-head">
            <span className="label-mono">§ 01 — Scope</span>
            <h2 id="scope-heading" className="section-title">What has shipped</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 panel mt-5">
            {aiToolingFacts.map((f, i) => (
              <div key={f.k} className="p-5 border-r border-b border-rule last:border-r-0">
                <p className={`figure-value text-xl ${i === 0 ? 'text-accent' : ''}`}>{f.v}</p>
                <p className="label-mono mt-2">{f.k}</p>
                <p className="text-sm text-muted mt-1 leading-snug">{f.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── §02 Records ────────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="records-heading">
          <div className="section-head">
            <span className="label-mono">§ 02 — Case records</span>
            <h2 id="records-heading" className="section-title">Systems</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[64ch]">
            Same shape as the rest of the site: the constraint, what was rejected and why, what it bought.
          </p>

          <div className="mt-5 flex flex-col gap-4">
            {aiRecords.map(r => (
              <article key={r.id} className="panel">
                <div className="flex flex-wrap gap-3 justify-between items-start p-5 border-b border-rule">
                  <div>
                    <h3 className="text-md font-semibold text-ink">{r.name}</h3>
                    <p className="font-mono text-sm text-muted mt-1">{r.context}</p>
                  </div>
                <div className="flex flex-col items-end gap-2">
                  {r.demo && (
                    <a
                      href={r.demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn whitespace-nowrap"
                    >
                      {r.demo.label} <span aria-hidden="true">↗</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                  {r.link ? (
                    <a
                      href={r.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 whitespace-nowrap hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
                    >
                      Source <span aria-hidden="true">↗</span>
                      <span className="sr-only">— {r.link.label}, opens in a new tab</span>
                    </a>
                  ) : (
                    <span className="chip whitespace-nowrap">{r.status}</span>
                  )}
                </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-rule">
                  <div className="p-5 border-b lg:border-b-0 lg:border-r border-rule">
                    <p className="label-mono mb-2">Constraint &amp; decision</p>
                    <p className="text-sm text-body">{r.constraint}</p>
                  </div>
                  <div className="p-5">
                    <p className="label-mono mb-2">Outcome</p>
                    <ul className="flex flex-col gap-2">
                      {r.outcome.map(o => <li key={o} className="text-sm text-body">{o}</li>)}
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
        </section>

        {/* ── §02b Also public ───────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="other-heading">
          <div className="section-head">
            <span className="label-mono">§ 02b — Also public</span>
            <h2 id="other-heading" className="section-title">Shipped elsewhere</h2>
          </div>
          <ul className="panel mt-5">
            {otherAiRepos.map(r => (
              <li key={r.name} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] border-b border-rule last:border-b-0">
                <div className="p-5 sm:border-r border-rule">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-accent border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
                  >
                    {r.name} <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
                <div className="p-5 pt-0 sm:pt-5">
                  <p className="text-sm text-body">{r.what}</p>
                  <ul className="flex flex-wrap gap-2 mt-3">
                    {r.tags.map(t => <li key={t} className="chip">{t}</li>)}
                  </ul>
                  {r.demo && (
                    <a
                      href={r.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
                    >
                      Live demo <span aria-hidden="true">↗</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── §03 Guardrails ─────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="guardrail-heading">
          <div className="section-head">
            <span className="label-mono">§ 03 — Guardrails</span>
            <h2 id="guardrail-heading" className="section-title">{guardrailMatrix.title}</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[66ch]">{guardrailMatrix.caption}</p>

          <figure className="panel mt-5 p-5 lg:p-6">
            <GuardrailFlowDiagram />
            <figcaption className="label-mono mt-4">
              Fig. — the refusal path is a first-class branch, not an error case
            </figcaption>
          </figure>

          <div className="panel mt-4 overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <caption className="sr-only">
                SQL statements an agent might send, and how the server responds
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="label-mono text-left p-3 border-b border-rule">Attempt</th>
                  <th scope="col" className="label-mono text-left p-3 border-b border-rule">Result</th>
                  <th scope="col" className="label-mono text-left p-3 border-b border-rule">Why</th>
                </tr>
              </thead>
              <tbody>
                {guardrailMatrix.rows.map(r => (
                  <tr key={r.attempt}>
                    <td className="p-3 border-b border-rule font-mono text-sm text-ink align-top">{r.attempt}</td>
                    <td className="p-3 border-b border-rule align-top">
                      <span className={`chip ${r.result === 'Rejected' ? 'chip-accent' : ''}`}>{r.result}</span>
                    </td>
                    <td className="p-3 border-b border-rule text-body align-top">{r.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── §04 Workflow ───────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="workflow-heading">
          <div className="section-head">
            <span className="label-mono">§ 04 — Workflow</span>
            <h2 id="workflow-heading" className="section-title">{skillExhibit.title}</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[66ch]">{skillExhibit.caption}</p>

          <figure className="panel mt-5 p-5 lg:p-6">
            <AgentLoopDiagram />
            <figcaption className="label-mono mt-4">
              Fig. — the reject branch is why this can run without a human
            </figcaption>
          </figure>

          <div className="panel mt-4">
            <p className="label-mono p-4 border-b border-rule bg-panel-alt">
              SKILL.md — excerpt, generalised
            </p>
            <pre className="p-5 overflow-x-auto font-mono text-sm text-body leading-relaxed">
              <code>{skillExhibit.code}</code>
            </pre>
          </div>
        </section>

        {/* ── §05 Boundary ───────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="boundary-heading">
          <div className="section-head">
            <span className="label-mono">§ 05 — Boundary</span>
            <h2 id="boundary-heading" className="section-title">What the model never gets</h2>
          </div>
          <figure className="panel mt-5 p-5 lg:p-6">
            <McpBoundaryDiagram />
            <figcaption className="label-mono mt-4">
              Fig. — credentials stay server-side; only typed, bounded results cross back
            </figcaption>
          </figure>
        </section>

        <div className="panel panel-strong p-6 lg:p-8 mt-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-lg font-semibold text-ink mb-2">The assistant on this page is one of these</h2>
            <p className="text-sm text-muted max-w-[52ch]">
              Bottom right. Grounded in this site&apos;s own data, rate limited per IP, with input
              sanitisation and bot detection in front of it. Ask it something.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn">View all work</Link>
            <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
