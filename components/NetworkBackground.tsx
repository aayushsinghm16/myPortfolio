import React from 'react';

/**
 * Ambient network layer.
 *
 * Server component — pure markup, no client JS. `position: fixed` (set by the
 * .netbg utility) means it never repaints during scroll, unlike a
 * background-attachment: fixed image. Colour and opacity come from the
 * --net-* tokens so it re-themes with everything else.
 *
 * Decorative only: aria-hidden, and the .netbg::after vignette fades it out
 * behind the reading column so it never costs text contrast.
 */
export default function NetworkBackground() {
  return (
    <div className="netbg" aria-hidden="true">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block"
      >
        <g stroke="var(--net-line)" strokeWidth="1.1" fill="none">
          <path d="M60,150 L230,90 L400,190 L560,120 L720,240 L880,150 L1040,270 L1210,180 L1380,300 L1540,210" />
          <path d="M40,420 L210,340 L380,470 L540,380 L700,510 L860,400 L1020,540 L1190,430 L1350,560 L1530,450" />
          <path d="M80,700 L250,630 L420,760 L580,660 L740,800 L900,690 L1060,820 L1230,710 L1390,840 L1560,730" />
          <path d="M230,90 L210,340 M400,190 L380,470 M560,120 L540,380 M720,240 L700,510 M880,150 L860,400 M1040,270 L1020,540 M1210,180 L1190,430 M1380,300 L1350,560" />
          <path d="M210,340 L250,630 M380,470 L420,760 M540,380 L580,660 M700,510 L740,800 M860,400 L900,690 M1020,540 L1060,820 M1190,430 L1230,710 M1350,560 L1390,840" />
          <path d="M400,190 L540,380 M720,240 L860,400 M1040,270 L1190,430 M380,470 L580,660 M700,510 L900,690" />
        </g>
        <g fill="var(--net-node)">
          <circle cx="60" cy="150" r="6" /><circle cx="230" cy="90" r="7" /><circle cx="400" cy="190" r="6" />
          <circle cx="560" cy="120" r="7" /><circle cx="720" cy="240" r="6" /><circle cx="880" cy="150" r="7" />
          <circle cx="1040" cy="270" r="6" /><circle cx="1210" cy="180" r="7" /><circle cx="1380" cy="300" r="6" /><circle cx="1540" cy="210" r="6" />
          <circle cx="40" cy="420" r="6" /><circle cx="210" cy="340" r="7" /><circle cx="380" cy="470" r="8" />
          <circle cx="540" cy="380" r="7" /><circle cx="700" cy="510" r="8" /><circle cx="860" cy="400" r="7" />
          <circle cx="1020" cy="540" r="8" /><circle cx="1190" cy="430" r="7" /><circle cx="1350" cy="560" r="6" /><circle cx="1530" cy="450" r="6" />
          <circle cx="80" cy="700" r="6" /><circle cx="250" cy="630" r="7" /><circle cx="420" cy="760" r="6" />
          <circle cx="580" cy="660" r="7" /><circle cx="740" cy="800" r="6" /><circle cx="900" cy="690" r="7" />
          <circle cx="1060" cy="820" r="6" /><circle cx="1230" cy="710" r="7" /><circle cx="1390" cy="840" r="6" /><circle cx="1560" cy="730" r="6" />
        </g>
      </svg>
    </div>
  );
}
