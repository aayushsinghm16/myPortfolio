'use client';

import dynamic from 'next/dynamic';

/**
 * Floating widgets that are never part of the first paint.
 *
 * Both were previously imported statically — PortfolioChat from the root layout, so its
 * message list, form and reCAPTCHA library were parsed on every route to render one
 * button; ThemeSelector from the home page only, which also left the Navbar's theme
 * button wired to nothing on /about, /projects, /skills and /contact.
 *
 * This is a client component so `ssr: false` is legal (it is not, inside a Server
 * Component). Mounting both here means the layout gets them on every route, lazily.
 */
const PortfolioChat = dynamic(() => import('./PortfolioChat'), { ssr: false });
const ThemeSelector = dynamic(() => import('./ThemeSelector'), { ssr: false });

export default function DeferredWidgets() {
  return (
    <>
      <ThemeSelector />
      <PortfolioChat />
    </>
  );
}
