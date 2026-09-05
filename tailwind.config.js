/** @type {import('tailwindcss').Config} */

/**
 * Tailwind reads the SEMANTIC layer of the token system only (app/tokens.css).
 * Nothing here hardcodes a colour value — every entry points at a CSS variable,
 * so dark mode, the ThemeSelector, and any future re-theme all work without
 * touching this file or any component.
 *
 * Components should use role names (`bg-panel`, `text-ink`, `border-rule`)
 * rather than palette names (`bg-white`, `text-slate-900`).
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // IBM Plex Sans: Swiss-influenced, engineering-grade. One family for
        // both headings and body — Swiss discipline, weight does the work.
        sans: ['var(--font-plex)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plex)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },

      colors: {
        /* surfaces */
        ground: 'var(--color-ground)',
        panel: {
          DEFAULT: 'var(--color-panel)',
          alt: 'var(--color-panel-alt)',
          sunken: 'var(--color-panel-sunken)',
        },
        /* lines */
        rule: {
          DEFAULT: 'var(--color-rule)',
          strong: 'var(--color-rule-strong)',
        },
        /* text */
        ink: 'var(--color-ink)',
        body: 'var(--color-body)',
        muted: 'var(--color-muted)',
        /* accent */
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          ink: 'var(--color-accent-ink)',
          wash: 'var(--color-accent-wash)',
        },
        /* status — deliberately separate from accent */
        positive: 'var(--color-positive)',
        critical: 'var(--color-critical)',

        /* Back-compat alias so components still on `primary` keep rendering
           while they migrate to `accent`. Remove once nothing references it. */
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
      },

      borderColor: { DEFAULT: 'var(--color-rule)' },
      ringColor: { DEFAULT: 'var(--color-focus)' },

      fontSize: {
        '2xs': ['var(--text-2xs)', { lineHeight: '1.4' }],
        xs:    ['var(--text-xs)',  { lineHeight: '1.45' }],
        sm:    ['var(--text-sm)',  { lineHeight: '1.55' }],
        base:  ['var(--text-base)',{ lineHeight: '1.6' }],
        md:    ['var(--text-md)',  { lineHeight: '1.55' }],
        lg:    ['var(--text-lg)',  { lineHeight: '1.35' }],
        xl:    ['var(--text-xl)',  { lineHeight: '1.25' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.12' }],
        '3xl': ['var(--text-3xl)', { lineHeight: '1.05' }],
        '4xl': ['var(--text-4xl)', { lineHeight: '1' }],
      },

      spacing: {
        1: 'var(--space-1)',  2: 'var(--space-2)',  3: 'var(--space-3)',
        4: 'var(--space-4)',  5: 'var(--space-5)',  6: 'var(--space-6)',
        7: 'var(--space-7)',  8: 'var(--space-8)',  9: 'var(--space-9)',
        10:'var(--space-10)',
      },

      borderRadius: {
        none: 'var(--radius-none)',
        sm:   'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        full: 'var(--radius-full)',
      },

      transitionDuration: {
        instant: 'var(--dur-instant)',
        fast:    'var(--dur-fast)',
        base:    'var(--dur-base)',
      },
      transitionTimingFunction: { out: 'var(--ease-out)' },

      // Swiss direction: separation comes from rules, not elevation.
      // A single soft shadow is kept for the one case that needs lift.
      boxShadow: {
        none: 'none',
        soft: '0 1px 2px rgba(11,15,20,.04), 0 8px 24px -12px rgba(11,15,20,.10)',
      },

      animation: {
        'fade-in': 'fadeIn var(--dur-base) var(--ease-out)',
        'fade-up': 'fadeUp var(--dur-base) var(--ease-out)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
