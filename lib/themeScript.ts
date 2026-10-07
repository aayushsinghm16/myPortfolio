import { ACCENT_PRESETS, ACCENT_KEY, APPEARANCE_KEY } from './accentPresets';

/**
 * The blocking restore script for <head>.
 *
 * Why this exists: picking an accent wrote it to localStorage, but nothing ever
 * read it back on load. The selector showed the right preset as "Active" while
 * the page rendered in the default accent — the preference was cosmetic after a
 * reload. Dark mode had the same hole.
 *
 * Why it is inline and blocking rather than an effect: React code runs after
 * hydration, which is after first paint. Restoring there means every visit
 * flashes the default accent (and, worse, a light page) before snapping to the
 * saved one. A synchronous script in <head> runs before the body is painted, so
 * there is nothing to flash. This is the same approach next-themes takes, for
 * the same reason.
 *
 * It is generated from ACCENT_PRESETS rather than hand-written, so the colours
 * here cannot drift from the ones the picker offers.
 *
 * Deliberately NOT self-correcting beyond its own scope:
 * - If no appearance is stored, it adds no class at all, leaving the
 *   prefers-color-scheme rule in tokens.css to decide. Forcing `light` here
 *   would override the OS preference for anyone who has never opened the picker.
 * - Its dark test mirrors the CSS selector exactly — explicit class first, then
 *   the media query — so the accent variant and the ground can never disagree.
 */
export function themeRestoreScript(): string {
  const byName = Object.fromEntries(
    ACCENT_PRESETS.map(p => [p.name, { l: p.light, d: p.dark, i: p.ink }]),
  );

  // Minified by hand: this ships in every HTML document, and it is small enough
  // that a build step would cost more than it saves.
  return `(function(){try{
var e=document.documentElement,s=localStorage;
var a=s.getItem(${JSON.stringify(APPEARANCE_KEY)});
if(a==="dark"){e.classList.add("dark");e.classList.remove("light")}
else if(a==="light"){e.classList.add("light");e.classList.remove("dark")}
var k=e.classList.contains("dark")||(!e.classList.contains("light")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);
var p=(${JSON.stringify(byName)})[s.getItem(${JSON.stringify(ACCENT_KEY)})];
if(p){var c=k?p.d:p.l;
e.style.setProperty("--color-accent",c);
e.style.setProperty("--color-accent-hover",k?p.l:p.d);
e.style.setProperty("--color-accent-ink",p.i);
e.style.setProperty("--color-focus",c)}
}catch(_){}})();`.replace(/\n/g, '');
}
