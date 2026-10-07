import React from 'react';

/**
 * A short film, embedded without costing the page anything until it is played.
 *
 * `preload="none"` plus a poster is the whole performance story: the browser
 * fetches the poster (a ~10-40 kB WebP) and not one byte of the MP4 until the
 * viewer presses play. That is why two films totalling ~2.9 MB can sit on a
 * route that still has to load fast — they are inert until wanted. No facade
 * component, no click-to-inject <video>, no client JS: the native element
 * already does this, and it comes with keyboard-operable controls for free.
 *
 * `description` is not decoration. These films carry their information visually
 * — numbers, labels, a terminal — and have no narration, so a viewer using a
 * screen reader gets nothing from the audio track. WCAG 1.2.3 wants a text
 * alternative for exactly this case, and it lives in the <details> below the
 * player.
 *
 * It is deliberately NOT wired up with aria-describedby. That was the first
 * thing tried here, and the reason to drop it is not that the text is hidden —
 * checked on this page, the description sits in the accessibility tree whether
 * the disclosure is open or shut, because Chrome keeps closed <details> content
 * live so find-in-page and anchor links keep working. The reason is that
 * aria-describedby flattens its target into a single run announced immediately
 * after the label, which is a hostile way to deliver five paragraphs that the
 * viewer has not asked for yet. A disclosure whose summary names the film makes
 * the alternative identifiable and available on demand, which is what the
 * success criterion actually asks for.
 */
export interface FilmProps {
  /** Path under /public, without extension. */
  src: string;
  poster: string;
  /** Used for the accessible name of the player. */
  title: string;
  /** One line under the player. */
  caption: string;
  /** The text alternative: what a viewer would see and hear. */
  description: React.ReactNode;
  /** Seconds, shown next to the disclosure so the length is known before playing. */
  runtime: string;
}

export function Film({ src, poster, title, caption, description, runtime }: FilmProps) {
  return (
    <figure className="panel mt-5 overflow-hidden">
      <video
        className="w-full block bg-ground"
        src={src}
        poster={poster}
        preload="none"
        controls
        playsInline
        width={1280}
        height={720}
        aria-label={title}
      >
        {/* Reached only if the browser cannot play H.264 at all. */}
        <p className="p-5 text-sm text-body">
          Your browser cannot play this video.{' '}
          <a href={src} className="text-accent underline">
            Download the file
          </a>{' '}
          instead.
        </p>
      </video>

      <figcaption className="p-4 border-t border-rule">
        <p className="label-mono">{caption}</p>
        <details className="mt-3">
          {/* The summary names the film, so the alternative is identifiable out
              of context — a screen reader user tabbing the page hears which
              video this describes, not a bare "what happens in the film". */}
          <summary className="text-sm text-body cursor-pointer marker:text-accent">
            Text alternative: &ldquo;{title.split(/\s+[—-]\s+/)[0]}&rdquo;
            <span className="label-mono ml-2">{runtime}</span>
          </summary>
          <div className="text-sm text-muted mt-3 max-w-[70ch] space-y-2">
            {description}
          </div>
        </details>
      </figcaption>
    </figure>
  );
}
