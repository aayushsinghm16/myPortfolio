'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { useLocalValue, useIsDark, writeLocal } from '@/lib/browserStore';
import { ACCENT_PRESETS, ACCENT_KEY, APPEARANCE_KEY, type AccentPreset } from '@/lib/accentPresets';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';

/**
 * Accent + appearance picker.
 *
 * Rewritten onto the token system. Two things changed beyond styling:
 *
 * 1. It now writes --color-accent (the semantic token) rather than --primary.
 *    --primary aliases --color-accent, so both keep working, but the semantic
 *    layer is the real source of truth.
 *
 * 2. The free hex picker is gone. It could produce an accent that fails
 *    contrast against --color-accent-ink (pick yellow and every button becomes
 *    white-on-yellow), and the design deliberately spends one accent. These
 *    presets were each checked against both themes instead.
 */


export default function ThemeSelector() {
  const { isThemeSelectorOpen, setIsThemeSelectorOpen } = useTheme();

  // Both derived from external stores rather than copied into state on mount.
  // The saved preset comes from localStorage; isDark comes from the class on
  // <html> via a MutationObserver, so it stays correct no matter which code
  // path flips the appearance — including one outside this component.
  const saved = useLocalValue(ACCENT_KEY);
  const active = saved && ACCENT_PRESETS.some(p => p.name === saved) ? saved : ACCENT_PRESETS[0].name;
  const isDark = useIsDark();

  const apply = (preset: AccentPreset) => {
    const root = document.documentElement;
    const dark = root.classList.contains('dark');
    root.style.setProperty('--color-accent', dark ? preset.dark : preset.light);
    root.style.setProperty('--color-accent-hover', dark ? preset.light : preset.dark);
    root.style.setProperty('--color-accent-ink', preset.ink);
    root.style.setProperty('--color-focus', dark ? preset.dark : preset.light);
    // The write notifies the store, which re-renders with the new active preset.
    writeLocal(ACCENT_KEY, preset.name);
  };

  const toggleAppearance = () => {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    root.classList.toggle('light', !next);
    writeLocal(APPEARANCE_KEY, next ? 'dark' : 'light');
    // No setIsDark: toggling the class above is itself the state change, and
    // the MutationObserver behind useIsDark picks it up.
    // re-apply so the accent picks the right variant for the new ground
    const preset = ACCENT_PRESETS.find(p => p.name === active);
    if (preset) {
      root.style.setProperty('--color-accent', next ? preset.dark : preset.light);
      root.style.setProperty('--color-accent-hover', next ? preset.light : preset.dark);
      root.style.setProperty('--color-focus', next ? preset.dark : preset.light);
    }
  };

  const reset = () => {
    const root = document.documentElement;
    ['--color-accent', '--color-accent-hover', '--color-accent-ink', '--color-focus']
      .forEach(v => root.style.removeProperty(v));
    writeLocal(ACCENT_KEY, null);
  };

  return (
    <Dialog open={isThemeSelectorOpen} onOpenChange={setIsThemeSelectorOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-ink">Appearance</DialogTitle>
          <DialogDescription className="text-sm text-muted">
            The accent is spent deliberately — one element per section. Each option below
            is contrast-checked against both light and dark grounds.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-5">
          <h3 className="label-mono mb-3">Accent</h3>
          <ul className="flex flex-col gap-2">
            {ACCENT_PRESETS.map(p => (
              <li key={p.name}>
                <button
                  onClick={() => apply(p)}
                  aria-pressed={active === p.name}
                  className={`w-full flex items-center gap-3 p-3 border transition-colors duration-fast ${
                    active === p.name ? 'border-accent bg-accent-wash' : 'border-rule hover:border-rule-strong'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="w-5 h-5 border border-rule shrink-0"
                    style={{ background: isDark ? p.dark : p.light }}
                  />
                  <span className="font-mono text-sm text-ink">{p.name}</span>
                  {active === p.name && (
                    <span className="ml-auto font-mono text-2xs uppercase tracking-[0.1em] text-accent">
                      Active
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 pt-5 border-t border-rule flex flex-wrap gap-3 justify-between items-center">
          <button onClick={toggleAppearance} className="btn btn-ghost">
            {isDark ? 'Switch to light' : 'Switch to dark'}
          </button>
          <button
            onClick={reset}
            className="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors duration-fast"
          >
            Reset to default
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
