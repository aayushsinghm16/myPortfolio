import React from 'react';

/**
 * The five short films.
 *
 * All five share one spec on purpose: 1920x1080 @ 60fps, 14.0s, 120 BPM, seven
 * bars. Because they share a tempo grid and a loudness target (-14 LUFS, the
 * level social video is mastered to) they cut together into a single 70s reel
 * with no re-grading, and they can be dropped onto any page in the same way.
 *
 * `alt` is not marketing copy. These films carry their information visually and
 * have no narration, so a viewer using a screen reader gets nothing from the
 * audio track; WCAG 1.2.3 wants a text alternative for exactly that case. Each
 * one below describes what actually happens, in order.
 */
export interface FilmRecord {
  id: string;
  slug: string;
  n: string;
  title: string;
  tagline: string;
  runtime: string;
  /** which route this film reinforces, for the cross-links on /reel */
  home: { label: string; href: string };
  alt: React.ReactNode;
}

export const films: FilmRecord[] = [
  {
    id: 'career',
    slug: '/motion/career',
    n: '01',
    title: 'Same Job, Every Time',
    tagline: 'Nine roles, four industries, one job description.',
    runtime: '14s',
    home: { label: 'Full history', href: '/about' },
    alt: (
      <>
        <p>
          A spine runs along the bottom of the frame for the whole film, carrying a tick for
          every one of nine roles; the five the film stops at are the tall ones. A playhead
          travels it from 2012 to 2026 while a counter reads the years.
        </p>
        <p>
          <strong>2012 — Ericsson · Schmid Telecom.</strong> Engineer, Telecom/RF. A mast
          emitting rings, one of them broken. <em>Routers, gateways, 3am outages.</em>{' '}
          <strong>2015 — IIT Delhi.</strong> A national housing portal for the Ministry of
          Rural Development: a region is drawn on a map and every point inside it resolves.
        </p>
        <p>
          <strong>2019 — Foyr.</strong> A bidirectional bridge between a Vue panel and a
          Three.js canvas, values crossing in both directions. 100K+ designers, 30+ countries,
          ~30% faster 3D model loads. <strong>2022 — SigFig.</strong> Modules stacking onto a
          shared core, consumed by every banking partner. −45% load time, −30% build time,
          +40% faster partner onboarding.
        </p>
        <p>
          <strong>2025 — Publicis Sapient · Goodyear.</strong> One foundation fanning out to
          five brand shells across twelve locales, with a GraphQL proxy keeping credentials
          server-side. The film closes on a full-bleed card: <em>The job never did.</em>
        </p>
      </>
    ),
  },
  {
    id: 'expertise',
    slug: '/motion/expertise',
    n: '02',
    title: 'The Part Underneath',
    tagline: 'Five things, each with the proof attached.',
    runtime: '14s',
    home: { label: 'All skills', href: '/skills' },
    alt: (
      <>
        <p>
          Five domains, each with a diagram that a selection bracket walks through, naming
          each part as it lands. A cross-section strip along the bottom gains a layer per
          domain and keeps that domain&apos;s headline number.
        </p>
        <p>
          <strong>Architecture.</strong> An NX monorepo core feeding five brand shells across
          twelve locales; a GraphQL proxy holds the credentials server-side and React Query
          SSR hydrates. <strong>Design systems.</strong> Atoms, molecules and organisms
          assembling in three linked tiers — built from scratch, twice, cutting delivery time
          20% across the team.
        </p>
        <p>
          <strong>Performance.</strong> Three bars shrinking against their original length:
          −45% application load, −30% build time, +40% faster partner onboarding.{' '}
          <strong>Accessibility.</strong> A focus ring walking a form, and the site&apos;s own
          accent on white measuring 5.18:1 — WCAG 2.1 AA as a build constraint, not a cleanup
          pass.
        </p>
        <p>
          <strong>The AI layer.</strong> A model, a guarded MCP server and a system, with
          typed calls flowing both ways: 2 MCP servers, 4 agents running unattended, 12+
          custom skills. It closes on <em>Nobody sees it. Everybody stands on it.</em>
        </p>
      </>
    ),
  },
  {
    id: 'receipts',
    slug: '/motion/receipts',
    n: '03',
    title: 'Receipts',
    tagline: 'Fourteen numbers. All of them checkable.',
    runtime: '14s',
    home: { label: 'Track record', href: '/about' },
    alt: (
      <>
        <p>
          Fourteen figures land one at a time, accelerating — the first four hold two beats
          each, the middle six a beat and a half, the last four a single beat — while a column
          on the right accumulates everything already shown.
        </p>
        <p>
          100K+ designers on the 3D platform; 30+ countries; 5 brands × 12 locales on one
          monorepo; −45% application load time; −35% landing-page drop-off; −30% build time
          after the Vite migration; +40% faster partner onboarding; +35% merchant engagement;
          +50% template adaptability; −20% delivery time via a shared component library;
          2 MCP servers; 4 agents running unattended; 6,563 questions authored and validated
          by one of them; 100 Lighthouse accessibility on this site.
        </p>
        <p>
          It closes on the only claim that matters:{' '}
          <em>every one of these is on the site, next to the work it came from.</em>
        </p>
      </>
    ),
  },
  {
    id: 'stacks',
    slug: '/motion/stacks',
    n: '04',
    title: 'The Constraint Picks the Stack',
    tagline: 'Six projects. Six answers.',
    runtime: '14s',
    home: { label: 'All projects', href: '/projects' },
    alt: (
      <>
        <p>
          Six projects, each given its constraint <em>first</em>; the stack then resolves out
          of it as chips flying in one at a time. The order is the argument — a logo wall says
          &ldquo;I have used these&rdquo;, constraint-then-stack says &ldquo;this is what
          forced the choice&rdquo;.
        </p>
        <p>
          <strong>Goodyear · Publicis Sapient</strong> — five brands, twelve locales, and
          credentials that must never reach the client → Next.js 15, NX, a GraphQL proxy,
          React Query SSR. <strong>Digital Wealth · SigFig</strong> — regulated fintech
          consumed by every banking partner → React, TypeScript, Vite, React Hook Form,
          Jest/RTL, CI/CD.
        </p>
        <p>
          <strong>Neo · Foyr</strong> — real-time 3D in a browser, two-way with the engine →
          Vue, Nuxt, Vuex, Three.js, WebSockets. <strong>Prodport · CoreValue</strong> — one
          product, twelve languages → React, Redux, react-intl, Material UI.{' '}
          <strong>QuizKode</strong> — content at a scale a human cannot author by hand →
          Next.js, Supabase, Tailwind, LLM workflows. <strong>RHKN · IIT Delhi</strong> —
          resolve every point inside a drawn region → Python, Flask, MongoDB, Maps API.
        </p>
        <p>
          It closes on{' '}
          <em>Same question: what does this actually have to survive?</em>
        </p>
      </>
    ),
  },
  {
    id: 'ai',
    slug: '/motion/ai',
    n: '05',
    title: 'The Right To Be Told No',
    tagline: 'A model asks for something it should not get.',
    runtime: '14s',
    home: { label: 'AI & agentic systems', href: '/ai' },
    alt: (
      <>
        <p>
          A new consumer arrives, and it wants the database. The boundary draws: a model, an
          MCP server holding the guardrails, and the system behind it. The model never holds a
          credential — the secrets stay server-side.
        </p>
        <p>
          What it gets instead is a typed contract: <code>tools/list</code>,{' '}
          <code>tools/call</code>, typed arguments, a bounded result, masked columns, a row
          cap. Same as every consumer before it.
        </p>
        <p>
          The first request, <code>SELECT id, total FROM invoices</code>, is allowed — parsed
          to an AST, not matched with a regex. The second,{' '}
          <code>DELETE FROM invoices</code>, types in and everything stops. A full second of
          silence, then a full-bleed card: <strong>REFUSED</strong>.
        </p>
        <p>
          The reason follows as an AST: four statement types branch from the root and only
          SELECT is lit; INSERT, UPDATE and DELETE are struck through. The film closes on{' '}
          <em>Not a crash. A decision.</em>
        </p>
      </>
    ),
  },
];
