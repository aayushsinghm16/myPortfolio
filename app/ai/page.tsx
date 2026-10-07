import React from 'react';
import Link from 'next/link';
import { aiIntro, aiRecords, aiToolingFacts, skillExhibit, guardrailMatrix, otherAiRepos } from '../../data/ai';
import { GuardrailFlowDiagram, McpBoundaryDiagram, AgentLoopDiagram } from '../../components/AiDiagrams';
import { Film } from '../../components/Film';
import { films } from '../../data/films';

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

        {/* The page's own argument, as a 14s film. It leads because it makes the
            case faster than the sections below it can, and they then supply the
            evidence. */}
        <Film
          src={films[4].slug + '.mp4'}
          poster={films[4].slug + '-poster.webp'}
          title={films[4].title}
          caption={`Fig. — ${films[4].tagline}`}
          runtime={films[4].runtime}
          description={films[4].alt}
        />

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

          <Film
            src="/motion/agent-run.mp4"
            poster="/motion/agent-run-poster.webp"
            title="A content agent, running on its own — a recording of one unattended run"
            caption="Fig. — one unattended run, real numbers from the pool"
            runtime="12s"
            description={
              <>
                <p>
                  A title card reads <em>A content agent, running on its own — real output from
                  the daily run</em>. It cuts to a terminal. A strip across the top holds the
                  run&apos;s numbers: 6,563 questions in the pool, 779 topics, 20 authored per
                  run, 2 rejected today.
                </p>
                <p>
                  Four commands execute in sequence while a rail on the right advances through
                  five steps. <code>pool-stats</code> reports the pool. <code>list-topics</code>{' '}
                  ranks coverage and Go comes last at 37 topics, flagged{' '}
                  <em>lowest coverage</em>. The agent authors twenty items against a strict
                  schema. The insert script then validates them: 18 valid, 1 rejected because
                  the correct answer did not match any choice, 1 rejected because a distractor
                  was under ten characters.
                </p>
                <p>
                  The run closes on <em>Inserted: 18 · Skipped (dupe): 0 · Failed: 2</em>,
                  verified in the pool and marked done. A line along the bottom states the
                  point: <strong>the validator rejects — it does not repair.</strong>
                </p>
              </>
            }
          />
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

        {/* ── §06 Motion ─────────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="motion-heading">
          <div className="section-head">
            <span className="label-mono">§ 06 — Motion</span>
            <h2 id="motion-heading" className="section-title">Rendered, not recorded</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[66ch]">
            Neither film above was shot or edited in a timeline. Both are web pages. Each
            exposes a single function, <code>setFrame(n)</code>, which makes every frame a pure
            function of its index — no <code>requestAnimationFrame</code>, no CSS transitions,
            no wall clock. A headless browser steps through the frames and screenshots each
            one; ffmpeg assembles them at 60fps. Because frame <em>n</em> never depends on how
            the renderer got there, a re-render is byte-identical and a single bad shot can be
            re-rendered on its own instead of re-exporting the film.
          </p>
          <p className="text-sm text-muted mt-3 max-w-[66ch]">
            The sound is synthesised the same way — oscillators, envelopes and filters written
            straight to a WAV in Node. Nothing is sampled, so a cue is re-tuned by changing a
            number rather than re-sourcing a file. The story film below is 2,790 frames, graded
            shot by shot and re-rendered until each shot held up.
          </p>

          <Film
            src="/motion/the-layer-underneath.mp4"
            poster="/motion/the-layer-underneath-poster.webp"
            title="The Layer Underneath — a short film about infrastructure"
            caption="Fig. — eleven years, nine shots, 2,790 deterministic frames"
            runtime="47s"
            description={
              <>
                <p>
                  Nine shots, each with an animated diagram drawn as SVG on the same design
                  tokens as this site.
                </p>
                <p>
                  <strong>Title.</strong> <em>The Layer Underneath — eleven years of building
                  the thing other things stand on.</em>{' '}
                  <strong>2012.</strong> Telecom and RF: routers, gateways, outages at 3am —
                  you learn what a system is when it is physical.{' '}
                  <strong>2015.</strong> A national housing portal for the Ministry of Rural
                  Development at IIT Delhi; researchers drew a region on a map and the code
                  resolved every point inside it. Same job, different substrate.
                </p>
                <p>
                  <strong>2019, Foyr.</strong> A browser-based 3D design tool, and a
                  bidirectional bridge between the interaction layer and the engine — change a
                  value and the canvas moves, move the canvas and the value follows. 100K+
                  designers, 30+ countries.{' '}
                  <strong>Foundation.</strong> Atoms, molecules, organisms: a shared vocabulary
                  so a team stops re-deciding the same thing. Built from scratch, twice.
                </p>
                <p>
                  <strong>2025, Publicis Sapient.</strong> An NX monorepo serving five brands
                  across twelve locales — CSRF, a GraphQL proxy holding the credentials, SSR
                  with hydration. Nobody sees it; everybody stands on it.
                </p>
                <p>
                  <strong>A new consumer.</strong> The model wants the database, so it gets
                  what every consumer before it got: a typed contract, a boundary it cannot
                  reach past, and the right to be told no.{' '}
                  <strong>The refusal.</strong> A request arrives —{' '}
                  <code>DELETE FROM invoices</code> — and is refused: parsed to an AST, only
                  SELECT is permitted. <em>Not a crash. A decision.</em>{' '}
                  <strong>Close.</strong> <em>Same job. Build the layer underneath.</em>
                </p>
              </>
            }
          />
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
