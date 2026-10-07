import React from 'react';

/**
 * System diagrams for the AI section.
 *
 * Inline SVG rather than generated raster: ~2KB each, sharp at any zoom,
 * re-themes with the design tokens automatically, and readable by a screen
 * reader through role="img" + <title>/<desc>. Every colour comes from a
 * semantic token so these follow light/dark without a second asset.
 *
 * Each diagram draws the REFUSAL or REJECT path as a first-class branch —
 * that branch is the point of the system being illustrated.
 */

const L = 'var(--color-rule-strong)';
const INK = 'var(--color-ink)';
const MUTED = 'var(--color-muted)';
const ACCENT = 'var(--color-accent)';
const PANEL = 'var(--color-panel)';
const ALT = 'var(--color-panel-alt)';

const mono = 'var(--font-mono), ui-monospace, monospace';

function Frame({
  title, desc, viewBox, children,
}: { title: string; desc: string; viewBox: string; children: React.ReactNode }) {
  return (
    <svg viewBox={viewBox} role="img" className="w-full h-auto block" style={{ maxWidth: '100%' }}>
      <title>{title}</title>
      <desc>{desc}</desc>
      <defs>
        <marker id="arw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={L} />
        </marker>
        <marker id="arwAccent" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={ACCENT} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

const Box = ({ x, y, w = 132, h = 44, label, sub, accent = false }: {
  x: number; y: number; w?: number; h?: number; label: string; sub?: string; accent?: boolean;
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill={accent ? 'var(--color-accent-wash)' : PANEL}
          stroke={accent ? ACCENT : L} strokeWidth="1" />
    <text x={x + w / 2} y={sub ? y + h / 2 - 3 : y + h / 2 + 4} textAnchor="middle"
          fontFamily={mono} fontSize="10.5" fill={accent ? ACCENT : INK} letterSpacing="0.4">
      {label}
    </text>
    {sub && (
      <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle"
            fontFamily={mono} fontSize="8.5" fill={MUTED} letterSpacing="0.3">
        {sub}
      </text>
    )}
  </g>
);

/* ── 1. harbor: what happens to a statement ───────────────────────── */
export function GuardrailFlowDiagram() {
  return (
    <Frame
      viewBox="0 0 880 300"
      title="How harbor-mcp-server handles an incoming SQL statement"
      desc="An agent sends SQL. It is parsed into an abstract syntax tree, then checked against a table allowlist. Statements that fail are refused with a hint naming the cause. Statements that pass are row-capped, have personal data masked, and the result is returned. Every request is written to an audit log the agent cannot read."
    >
      <text x="0" y="14" fontFamily={mono} fontSize="9" fill={MUTED} letterSpacing="1.2">AGENT REQUEST</text>

      <Box x={0} y={28} label="SQL in" sub="from the agent" />
      <line x1={132} y1={50} x2={168} y2={50} stroke={L} markerEnd="url(#arw)" />

      <Box x={172} y={28} label="Parse to AST" sub="not regex" accent />
      <line x1={304} y1={50} x2={340} y2={50} stroke={L} markerEnd="url(#arw)" />

      <Box x={344} y={28} label="Allowlist" sub="tables + clauses" />

      {/* refusal branch — drawn as first class */}
      <path d="M410,72 L410,132" stroke={ACCENT} fill="none" markerEnd="url(#arwAccent)" strokeDasharray="4 3" />
      <Box x={344} y={136} label="Refuse" sub="+ hint naming cause" accent />
      <text x="344" y="200" fontFamily={mono} fontSize="8.5" fill={MUTED}>stacking · comments · banned fn</text>
      <text x="344" y="213" fontFamily={mono} fontSize="8.5" fill={MUTED}>unbounded scan · introspection</text>

      {/* pass branch */}
      <line x1={476} y1={50} x2={512} y2={50} stroke={L} markerEnd="url(#arw)" />
      <Box x={516} y={28} label="Row cap" sub="clamp to 500" />
      <line x1={648} y1={50} x2={684} y2={50} stroke={L} markerEnd="url(#arw)" />
      <Box x={688} y={28} label="Mask PII" sub="on the way out" />

      <path d="M754,72 L754,112" stroke={L} fill="none" markerEnd="url(#arw)" />
      <Box x={688} y={116} label="Result" sub="to the agent" />

      {/* audit rail */}
      <rect x={0} y={248} width={880} height={40} fill={ALT} stroke={L} />
      <text x={14} y={266} fontFamily={mono} fontSize="10" fill={INK} letterSpacing="0.4">Audit log</text>
      <text x={14} y={279} fontFamily={mono} fontSize="8.5" fill={MUTED}>every request, allowed or refused — the agent has no read access to this table</text>
      <path d="M410,200 L410,246" stroke={L} fill="none" strokeDasharray="3 3" markerEnd="url(#arw)" />
      <path d="M754,160 L754,246" stroke={L} fill="none" strokeDasharray="3 3" markerEnd="url(#arw)" />
    </Frame>
  );
}

/* ── 2. MCP boundary ──────────────────────────────────────────────── */
export function McpBoundaryDiagram() {
  return (
    <Frame
      viewBox="0 0 880 236"
      title="What an MCP server exposes and what it keeps back"
      desc="Claude talks to an MCP server over typed tool calls. The server holds the credentials and the connection to the underlying system — a database or a design system library — and only typed, bounded results cross back. The raw system is never exposed to the model."
    >
      <text x="0" y="14" fontFamily={mono} fontSize="9" fill={MUTED} letterSpacing="1.2">MODEL</text>
      <text x="340" y="14" fontFamily={mono} fontSize="9" fill={ACCENT} letterSpacing="1.2">BOUNDARY YOU OWN</text>
      <text x="720" y="14" fontFamily={mono} fontSize="9" fill={MUTED} letterSpacing="1.2">SYSTEM</text>

      <Box x={0} y={76} w={150} h={52} label="Claude" sub="no credentials" />

      <line x1={150} y1={92} x2={330} y2={92} stroke={L} markerEnd="url(#arw)" />
      <text x={170} y={86} fontFamily={mono} fontSize="8.5" fill={MUTED}>typed tool call</text>
      <line x1={330} y1={116} x2={150} y2={116} stroke={L} markerEnd="url(#arw)" />
      <text x={170} y={131} fontFamily={mono} fontSize="8.5" fill={MUTED}>bounded, masked result</text>

      {/* the server */}
      <rect x={334} y={28} width={212} height={176} fill="var(--color-accent-wash)" stroke={ACCENT} />
      <text x={440} y={50} textAnchor="middle" fontFamily={mono} fontSize="10.5" fill={ACCENT} letterSpacing="0.4">MCP SERVER</text>
      <Box x={350} y={62} w={180} h={32} label="Tool schemas" />
      <Box x={350} y={100} w={180} h={32} label="Guardrails" accent />
      <Box x={350} y={138} w={180} h={32} label="Credentials" sub="never leave here" />

      <line x1={546} y1={116} x2={712} y2={116} stroke={L} markerEnd="url(#arw)" />
      <Box x={716} y={76} w={160} h={52} label="Database / library" sub="unchanged" />

      <text x={0} y={224} fontFamily={mono} fontSize="8.5" fill={MUTED}>
        The model never holds a credential and never sees the raw system — only what a tool chose to return.
      </text>
    </Frame>
  );
}

/* ── 3. Agent loop ────────────────────────────────────────────────── */
export function AgentLoopDiagram() {
  return (
    <Frame
      viewBox="0 0 880 250"
      title="How the scheduled authoring agent runs unattended"
      desc="On a schedule the agent queries pool statistics to find the language with the lowest coverage, authors a batch against a strict schema, and passes it to a validator. Invalid items are rejected rather than repaired and never reach the database. Valid items are inserted and the result is verified before the run is marked complete."
    >
      <text x="0" y="14" fontFamily={mono} fontSize="9" fill={MUTED} letterSpacing="1.2">DAILY · UNATTENDED</text>

      <Box x={0} y={34} w={120} label="Schedule" sub="16:00 daily" />
      <line x1={120} y1={56} x2={152} y2={56} stroke={L} markerEnd="url(#arw)" />
      <Box x={156} y={34} w={140} label="Pool stats" sub="lowest coverage" />
      <line x1={296} y1={56} x2={328} y2={56} stroke={L} markerEnd="url(#arw)" />
      <Box x={332} y={34} w={140} label="Author batch" sub="20 items" />
      <line x1={472} y1={56} x2={504} y2={56} stroke={L} markerEnd="url(#arw)" />
      <Box x={508} y={34} w={140} label="Validate" sub="schema, strict" accent />

      {/* reject path */}
      <path d="M578,78 L578,130" stroke={ACCENT} fill="none" strokeDasharray="4 3" markerEnd="url(#arwAccent)" />
      <Box x={508} y={134} w={140} label="Reject" sub="never repaired" accent />
      <text x={508} y={196} fontFamily={mono} fontSize="8.5" fill={MUTED}>malformed output stops here</text>

      {/* accept path */}
      <line x1={648} y1={56} x2={680} y2={56} stroke={L} markerEnd="url(#arw)" />
      <Box x={684} y={34} w={120} label="Insert" sub="Postgres" />
      <path d="M744,78 L744,130" stroke={L} fill="none" markerEnd="url(#arw)" />
      <Box x={684} y={134} w={120} label="Verify" sub="then done" />

      <rect x={0} y={214} width={880} height={32} fill={ALT} stroke={L} />
      <text x={14} y={234} fontFamily={mono} fontSize="8.5" fill={MUTED}>
        Nothing is marked done until the result is confirmed. A failed step reports and stops — it does not retry blind.
      </text>
    </Frame>
  );
}
