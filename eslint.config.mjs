// ESLint flat config.
//
// Replaces .eslintrc.json, which had stopped working on two counts at once:
//
//   1. `next lint` was removed in Next 16. With it gone, `next lint` parsed
//      "lint" as a directory argument and failed with "Invalid project
//      directory provided, no such directory: .../lint".
//   2. ESLint 9 only reads eslint.config.* by default, so even calling eslint
//      directly failed with "couldn't find an eslint.config.(js|mjs|cjs) file".
//
// eslint-config-next 16 exports native flat-config arrays, so this spreads them
// directly rather than going through @eslint/eslintrc's FlatCompat shim.

import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

const config = [
  {
    // Flat config has no .eslintignore, so ignores live here. Build output and
    // the generated next-env.d.ts are not ours to lint.
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'node_modules/**',
      'next-env.d.ts',
      'public/**',
      // Gitignored private outreach scripts — not part of the repo, and plain
      // CommonJS, so the TS rules do not apply to them.
      'scripts/add-companies*.js',
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default config;
