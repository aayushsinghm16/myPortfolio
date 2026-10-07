'use client';

import { useSyncExternalStore } from 'react';

/**
 * useSyncExternalStore adapters for browser-only state.
 *
 * localStorage, the `dark` class on <html> and the URL query are all external
 * stores: they exist outside React, the server has none of them, and reading
 * them during render would either crash or cause a hydration mismatch. The
 * previous code handled that by reading them in a mount effect and calling
 * setState, which works but costs an extra render pass on every mount and is
 * what react-hooks/set-state-in-effect flags.
 *
 * useSyncExternalStore is the hook built for exactly this shape. Each store
 * supplies a getServerSnapshot, so React renders the server value, hydrates
 * with it, and then swaps to the real client value without a mismatch — no
 * `mounted` flag and no setState-in-effect anywhere.
 *
 * Every accessor is wrapped in try/catch: localStorage throws rather than
 * returning null in a private window or with site data blocked, and a theme
 * preference is not worth taking the page down for.
 */

/* ── localStorage ──────────────────────────────────────────────────
 * One shared listener set. The native `storage` event only fires in OTHER
 * tabs, so same-tab writes have to notify explicitly — that is what writeLocal
 * is for, and why callers must not touch localStorage directly for these keys.
 */
const localListeners = new Set<() => void>();

function emitLocal() {
  for (const l of localListeners) l();
}

// Module-level, so its identity is stable across renders and React does not
// resubscribe on every pass.
function subscribeLocal(onChange: () => void) {
  localListeners.add(onChange);
  window.addEventListener('storage', onChange);
  return () => {
    localListeners.delete(onChange);
    window.removeEventListener('storage', onChange);
  };
}

function readLocal(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/** Write (or, with null, remove) a key and notify this tab's subscribers. */
export function writeLocal(key: string, value: string | null): void {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* private window or blocked storage — fall through and still notify, so the
       UI reflects the intent for this session even if it will not persist */
  }
  emitLocal();
}

/**
 * The current value of a localStorage key, or null.
 *
 * Safe to return a raw string: getSnapshot must be referentially stable between
 * renders when nothing changed, and strings compare by value, so there is no
 * infinite-loop hazard here. Returning a parsed object would need caching.
 */
export function useLocalValue(key: string): string | null {
  return useSyncExternalStore(
    subscribeLocal,
    () => readLocal(key),
    () => null, // server: nothing is persisted there
  );
}

/* ── the `dark` class on <html> ────────────────────────────────────
 * Appearance is toggled by writing a class onto the document element, so the
 * DOM itself is the store. A MutationObserver on that one attribute means any
 * code path that flips the class updates every reader — no manual setState and
 * no risk of two components disagreeing about the current appearance.
 */
function subscribeDarkClass(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

export function useIsDark(): boolean {
  return useSyncExternalStore(
    subscribeDarkClass,
    () => {
      try {
        return document.documentElement.classList.contains('dark');
      } catch {
        return false;
      }
    },
    () => false, // server: assume light, the class is applied client-side
  );
}

/* ── URL query flag ────────────────────────────────────────────────
 * `?theme=true` opens the theme selector on load. popstate covers back/forward;
 * a full navigation remounts anyway.
 */
function subscribeLocation(onChange: () => void) {
  window.addEventListener('popstate', onChange);
  return () => window.removeEventListener('popstate', onChange);
}

export function useQueryFlag(param: string, expected = 'true'): boolean {
  return useSyncExternalStore(
    subscribeLocation,
    () => {
      try {
        return new URLSearchParams(window.location.search).get(param) === expected;
      } catch {
        return false;
      }
    },
    () => false, // server: the flag only matters once the page is interactive
  );
}
