/**
 * Accent presets — the single source of truth.
 *
 * These live here, outside the component, because two things need them: the
 * ThemeSelector UI, and the blocking restore script injected into <head>. The
 * script is generated from this array at build time, so the hex values cannot
 * drift between what the picker offers and what a reload restores.
 *
 * Each preset carries a light and a dark variant rather than one colour: the
 * dark ground needs more luminance for the same perceived weight, and the pair
 * was checked against --color-accent-ink in both appearances.
 */
export type AccentPreset = {
  name: string;
  /** light-mode accent */
  light: string;
  /** dark-mode accent — lighter, since the dark ground needs more luminance */
  dark: string;
  /** text colour that sits ON the accent */
  ink: string;
};

export const ACCENT_PRESETS: AccentPreset[] = [
  { name: 'Safety Orange', light: '#D9480F', dark: '#FF7A45', ink: '#FFFFFF' },
  { name: 'Signal Red',    light: '#B42318', dark: '#F97066', ink: '#FFFFFF' },
  { name: 'Deep Indigo',   light: '#003FAB', dark: '#7FA6FF', ink: '#FFFFFF' },
  { name: 'Forest',        light: '#0F7B54', dark: '#3ECF9B', ink: '#FFFFFF' },
  { name: 'Graphite',      light: '#3A4553', dark: '#AFBBC9', ink: '#FFFFFF' },
];

/** localStorage keys the theme system owns. */
export const ACCENT_KEY = 'accentPreset';
export const APPEARANCE_KEY = 'appearance';
