import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { films } from '../../data/films';
import { Film } from '../../components/Film';

export const metadata: Metadata = {
  title: 'Motion Reel — Five Short Films',
  description:
    'Five 14-second films on eleven years of frontend architecture, built as deterministic web pages: career, expertise, measured results, stack decisions and the AI layer.',
  openGraph: {
    title: 'Motion Reel — Five Short Films | Aayush Singh',
    description:
      'Five 14-second films, rendered not recorded. Every frame a pure function of its index.',
    images: ['/motion/career-poster.webp'],
  },
};

/**
 * /reel — all five films in one place.
 *
 * Server component, no client JS. Every <video> is preload="none" with a poster,
 * so a page carrying ~13 MB of film downloads about 55 kB of WebP and not one
 * byte of MP4 until someone presses play. That is the only reason it is
 * reasonable to put five films on a single route.
 */
export default function ReelPage() {
  return (
    <div className="px-4 lg:px-8 pt-[88px] pb-10">
      <div className="max-w-[1080px] mx-auto">

        <header className="panel panel-strong p-6 lg:p-8">
          <p className="label-mono mb-4">Motion reel</p>
          <h1 className="text-2xl font-semibold text-ink mb-3">Five films, seventy seconds</h1>
          <p className="text-md text-body max-w-[66ch]">
            Each one is fourteen seconds and makes a single argument. They share a tempo and a
            master level, so they also play as one continuous reel.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="chip chip-accent">120 BPM, locked</span>
            <span className="chip">1920×1080 · 60fps</span>
            <span className="chip">Rendered, not recorded</span>
            <span className="chip">Sound synthesised in code</span>
          </div>
        </header>

        {/* ── §01 How ─────────────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="how-heading">
          <div className="section-head">
            <span className="label-mono">§ 01 — Method</span>
            <h2 id="how-heading" className="section-title">Rendered, not recorded</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[66ch]">
            None of these were shot or edited in a timeline. Each is a web page exposing one
            function, <code>setFrame(n)</code>, which makes every frame a pure function of its
            index — no <code>requestAnimationFrame</code>, no CSS transitions, no wall clock. A
            headless browser steps the frames and screenshots each one; ffmpeg assembles at
            60fps. Because frame <em>n</em> never depends on how the renderer got there, a
            re-render is byte-identical and one bad shot can be redone without re-exporting the
            film.
          </p>
          <p className="text-sm text-muted mt-3 max-w-[66ch]">
            Everything is locked to 120 BPM, so each cut, entrance and number lands on a beat
            and the scores were generated at the same tempo. The sound design is synthesised
            the same way the picture is — oscillators, envelopes and filters written straight to
            a WAV in Node, nothing sampled, so a cue is re-tuned by changing a number.
          </p>
        </section>

        {/* ── §02 The films ───────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="films-heading">
          <div className="section-head">
            <span className="label-mono">§ 02 — Films</span>
            <h2 id="films-heading" className="section-title">One argument each</h2>
          </div>

          {films.map(f => (
            <div key={f.id} className="mt-7 first:mt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-md font-semibold text-ink">
                  <span className="label-mono mr-3">{f.n}</span>
                  {f.title}
                </h3>
                <Link
                  href={f.home.href}
                  className="font-mono text-2xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover hover:border-accent-hover transition-colors duration-fast"
                >
                  {f.home.label} <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="text-sm text-muted mt-1">{f.tagline}</p>
              <Film
                src={`${f.slug}.mp4`}
                poster={`${f.slug}-poster.webp`}
                title={f.title}
                caption={`Fig. ${f.n} — ${f.tagline}`}
                runtime={f.runtime}
                description={f.alt}
              />
            </div>
          ))}
        </section>

        {/* ── §03 All five ────────────────────────────────────────── */}
        <section className="mt-9" aria-labelledby="reel-heading">
          <div className="section-head">
            <span className="label-mono">§ 03 — Full reel</span>
            <h2 id="reel-heading" className="section-title">All five, back to back</h2>
          </div>
          <p className="text-sm text-muted mt-3 max-w-[66ch]">
            Because they share a grid and a loudness target, the five concatenate without
            re-grading — no level jump and no tempo shift across the cuts.
          </p>
          <Film
            src="/motion/reel.mp4"
            poster="/motion/career-poster.webp"
            title="The full reel — all five films"
            caption="Fig. — 70 seconds, five arguments, one continuous grid"
            runtime="70s"
            description={
              <p>
                All five films in sequence: <em>Same Job, Every Time</em> (career),{' '}
                <em>The Part Underneath</em> (expertise), <em>Receipts</em> (measured results),{' '}
                <em>The Constraint Picks the Stack</em> (project decisions) and{' '}
                <em>The Right To Be Told No</em> (the AI layer). Each is described in full
                above.
              </p>
            }
          />
        </section>

        <div className="panel panel-strong p-6 lg:p-8 mt-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-lg font-semibold text-ink mb-2">The work behind the numbers</h2>
            <p className="text-sm text-muted max-w-[52ch]">
              Every figure in these films is on this site, next to the project it came from.
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
