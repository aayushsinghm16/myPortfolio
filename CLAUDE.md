# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (Next.js)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint-fix` - Run ESLint with auto-fix

## Architecture Overview

This is a **Next.js 15 portfolio website** for Aayush Singh (Frontend Developer) using TypeScript and React 18. The project follows a modular component-based architecture with App Router.

### Tech Stack

- **Framework**: Next.js 15.1.3 with App Router
- **UI**: React 18, Tailwind CSS 3.4 + Tailwind v4 PostCSS (`@tailwindcss/postcss ^4.0.0`), Radix UI components
- **Forms**: React Hook Form with reCAPTCHA v3 integration
- **Email**: Resend API (`resend ^4.1.1`) for contact form submissions
- **Notifications**: react-hot-toast for toast notifications
- **Icons**: Lucide React (`^0.507.0`) and React Icons (`^5.4.0`)
- **Utilities**: clsx, tailwind-merge, class-variance-authority for className management
- **Routing**: Next.js App Router (react-router-dom is in deps but not actively used)

### Project Structure

```
/app                          # Next.js App Router
├── api/
│   ├── send/route.ts         # Contact form email API (Resend + reCAPTCHA)
│   └── chat/route.ts         # AI chat API (rate limiting + bot detection)
├── about/page.tsx            # About page (education, experience, interests)
├── contact/page.tsx          # Contact page (form, social links, map)
├── projects/page.tsx         # Projects page (filtering & modal)
├── skills/page.tsx           # Skills page (proficiency bars)
├── components/
│   ├── header.tsx
│   └── footer.tsx
├── layout.tsx                # Root layout (ThemeProvider, ReCaptchaProvider, Navbar, Footer)
├── page.tsx                  # Home page (composite of all sections)
├── globals.css               # Global CSS with Tailwind directives & custom classes
└── otherHome/page.tsx        # Alternate home layout

/components                   # Reusable components
├── HeroSection.tsx           # Animated hero with CTA, gradient text, profile image
├── AboutSection.tsx          # Bio paragraphs from personal data
├── SkillsSection.tsx         # Proficiency bars by category
├── ProjectsSection.tsx       # Project cards with hover effects
├── ExperienceSection.tsx     # Experience carousel wrapper
├── ExperienceCarousel.tsx    # Carousel for work history
├── experienceTimeline.tsx    # Timeline variant for experience
├── ContactSection.tsx        # Contact form with validation
├── Navbar.tsx                # Fixed header with mobile menu, scroll detection, skip-to-content
├── PortfolioChat.tsx         # Floating AI chat widget (bottom-right)
├── ProjectModal.tsx          # Modal for detailed project view
├── ThemeSelector.tsx         # Theme customization dialog (10 presets + custom color)
├── ReCaptchaProvider.tsx     # Wraps app with reCAPTCHA v3 context
├── email-template.tsx        # Resend email HTML template
└── ui/                       # Shadcn/Radix UI primitives
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    ├── dialog.tsx
    ├── input.tsx
    ├── progress.tsx
    └── textarea.tsx

/data                         # Portfolio data (TypeScript modules)
├── index.ts                  # Re-export all data
├── personal.ts               # Name, title, bio, longBio[], philosophy
├── projects.ts               # 6 projects with tags, categories (web/mobile/ai), links
├── skills.ts                 # Proficiency data: languages, frontend, backend, devTools, softSkills
├── experience.ts             # 7 positions with achievements and skills
├── education.ts              # B.Tech + High School
├── contact.ts                # Contact info, social links (GitHub, LinkedIn, Twitter)
└── interests.ts              # 6 professional interests with descriptions

/lib                          # Utilities & context
├── ThemeContext.tsx           # Theme provider (localStorage, CSS variables, SSR-safe)
├── themes.ts                 # 10 preset color themes + generateThemeFromHex()
└── utils.ts                  # cn() utility (clsx + tailwind-merge)

/utils
└── formValidation.ts         # Validation: name (2-50 chars), email (regex), message (10-1000 chars)

/public                       # Static assets (profile images, project screenshots)
```

### Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Composite of Hero, About, Skills, Projects, Experience, Contact sections |
| `/about` | About | Education, experience timeline, interests |
| `/contact` | Contact | Form with reCAPTCHA, social links, embedded map |
| `/projects` | Projects | Filterable grid (web/mobile/ai) with detail modal |
| `/skills` | Skills | Proficiency bars organized by category |
| `/api/send` | API | POST - Contact form email (Resend + reCAPTCHA verification) |
| `/api/chat` | API | POST - AI chat (rate limiting: 10 req/min, bot detection, reCAPTCHA) |

### Key Implementation Details

1. **Contact Form**: reCAPTCHA v3 with server-side verification (score threshold > 0.5). Sends email via Resend from `onboarding@resend.dev` to `aayushsinghm16@gmail.com`.
2. **AI Chat Bot**: Rule-based responses using portfolio data. Security includes rate limiting (10 req/min per IP), bot pattern detection (URLs, SQL injection, repeated chars), and reCAPTCHA v3.
3. **Theme System**: 10 preset color themes (Indigo default) + custom hex color picker. Stored in localStorage. CSS variables: `--primary`, `--primary-dark`, `--primary-light`, `--primary-rgb`. URL param `?theme=true` opens selector on load.
4. **Environment Variables Required**:
   - `API_KEY_SEND`: Resend API key
   - `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA secret key
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Google reCAPTCHA site key (client-side)
5. **TypeScript**: Non-strict mode (`strict: false`). Path aliases: `@/*`, `@/lib/*`, `@/components/*`, `@/data/*`, `@/app/*`
6. **Dark Mode**: Class-based (`darkMode: 'class'` in tailwind.config.js)
7. **Remote Images**: Allowed from `storage.googleapis.com` (next.config.ts)

### Styling & Animations

- **Fonts**: Inter (sans-serif body), Poppins (headings)
- **Custom CSS classes** in `globals.css`: `.glass-card`, `.gradient-text`, `.btn-primary`, `.btn-secondary`, `.btn-glass`, `.section-title`, `.section-subtitle`
- **Tailwind animations**: fade-in, fade-up, fade-down, slide-in-right, slide-in-left, scale-up, shimmer, float, pulse-slow
- **Custom shadows**: soft, soft-lg, soft-xl, inner-soft, glow, glow-lg
- **Custom gradients**: gradient-professional, gradient-subtle, gradient-dark, grid-pattern, dots-pattern
- **Keyframes**: typing, blink-caret, shimmer

### Component Architecture Pattern

- `'use client'` directive on interactive components
- UI primitives use `React.forwardRef` with `displayName`
- Data sourced from `/data` directory (centralized, easy to update)
- Responsive design with mobile-first Tailwind classes
- All components support dark mode via Tailwind's `dark:` prefix

### Accessibility

- Skip-to-content link in Navbar
- ARIA labels on interactive elements
- Semantic HTML (`role="main"`, `role="banner"`, `role="navigation"`)
- Screen reader text (`sr-only`)
- Focus outlines on interactive elements
- Keyboard navigation support
