export interface Experience {
    company: string;
    role: string;
    period: string;
    /** Employment type as it appears on LinkedIn — keep the two in sync. */
    type?: string;
    /** One line of scope: what the product was and who it served. */
    context?: string;
    achievements: string[];
    skills?: string[];
}

// NOTE: titles, companies and dates below follow the LinkedIn profile, which is the
// public record recruiters verify against. Where the résumé uses a functional title,
// the official title is kept in parentheses.
export const experienceData: Experience[] = [
    {
        company: "Publicis Sapient — client: Goodyear",
        role: "Lead Frontend Engineer (Senior Experience Engineer)",
        period: "August 2025 - March 2026",
        type: "Contract",
        context: "US retail e-commerce platform · Gurugram, India (Hybrid)",
        achievements: [
            "Engineered the platform infrastructure behind an NX monorepo serving 5 brands across 12 locales — multi-locale/brand API configuration, CSRF protection, a GraphQL proxy keeping service credentials server-side, and React Query SSR with HydrationBoundary — shared foundations consumed by every delivery pod.",
            "Joined one of five delivery pods and was asked to lead it within weeks, owning solution design and architectural planning and presenting designs for senior-architect review before rollout.",
            "Architected the authentication domain end-to-end on Next.js 15, TypeScript and GraphQL — sign-in across both overlay and full-page surfaces, registration, forgot/reset password, Remember Me cookie logic, Cloudflare Turnstile, and centralized token refresh.",
            "Owned Order Details across three fulfilment types with divergent data models and financial rules — rebate system, partner savings, mixed-cart summaries, jump navigation and guest order status — built on the shared Design System rather than as one-off screens.",
            "Diagnosed a re-render cascade across the account tree to Context identity churn and migrated global state to Zustand for fine-grained subscriptions.",
            "Instrumented analytics across all authenticated routes — page views, click tracking, form submission and abandonment, and hashed-email identity resolution.",
            "Delivered WCAG 2.1 AA compliance with zero audit violations, treating accessibility as a build-time guardrail with focus management and ARIA rather than a remediation pass.",
            "Drove API contract definition across frontend, backend and product teams, and unblocked engineers across the pod on debugging and complex design problems."
        ],
        skills: ["Next.js 15", "React 18", "TypeScript", "GraphQL", "NX Monorepo", "Zustand", "React Query", "SSR / Hydration", "Design Systems", "WCAG 2.1 AA"]
    },
    {
        company: "Independent — Frontend & GenAI Engineering",
        role: "Career Focus Period",
        period: "January 2025 - August 2025",
        type: "Independent",
        context: "Deliberate upskilling block between engagements",
        achievements: [
            "Went deep on GenAI engineering — Model Context Protocol, Claude Code, LLM workflow design and prompt engineering — and shipped QuizKode, an AI-powered quiz platform on Next.js and TypeScript with real-time code evaluation.",
            "Adopted AI-assisted development as a working practice with review gates, so generated code clears the same bar as hand-written code."
        ],
        skills: ["Next.js", "TypeScript", "Model Context Protocol", "LLM Workflows", "Prompt Engineering", "Supabase", "Vercel"]
    },
    {
        company: "SigFig",
        role: "Software Development Engineer 2 — Frontend",
        period: "March 2022 - January 2025",
        type: "Full-time",
        context: "Digital wealth-management & robo-advisory platform — 1M+ end users via banking partners · Remote",
        achievements: [
            "Re-engineered the local-development and release layer so the shared core repository and the per-partner repositories run from a single folder structure under Vite, then rebuilt the CI/CD pipeline to drive both from one place — deploying a partner repo now triggers the core pipeline automatically, removing manual release sequencing.",
            "Architected a per-partner repo model in which banking partners inherit shared features from the core repo with per-bank modifications layered on top; delivered builds for two new partners on it.",
            "Rebuilt the questionnaire 'playback' module against a hard 100-object Contentstack limit by migrating from an object-based to an array-of-objects model, restoring scalable detail rendering.",
            "Built schema-driven questionnaires and forms with React Hook Form and TypeScript for investment, suitability and regulatory flows, with field-level validation and error handling.",
            "Delivered core fintech modules consumed by every banking partner — employer-sponsored plans, brokerage 'add funds' and new-client onboarding — covering 30–40% of the user base.",
            "Cut application load times ~45% via code-splitting, React.memo and client-side caching, reducing landing-page drop-off by 35%; the Vite migration cut build times 30% and new bank onboarding by 40%.",
            "Built a React-PDF generator so users can export their portfolio and proposal documents, and held WCAG 2.1 AA and strong Jest/RTL coverage through TDD."
        ],
        skills: ["React.js", "TypeScript", "Vite", "GraphQL", "React Hook Form", "CI/CD", "Jest / RTL", "TDD", "Material UI", "WCAG 2.1 AA"]
    },
    {
        company: "CoreValue Technologies",
        role: "Web Development Engineer II",
        period: "July 2021 - March 2022",
        type: "Full-time",
        context: "E-commerce SaaS · Noida, India (Remote)",
        achievements: [
            "Built a React.js merchant dashboard with real-time analytics that let e-commerce merchants compose dynamic, personalized storefront content, lifting engagement 35%.",
            "Cut delivery time 20% by introducing a reusable component library, and grew the addressable user base 25% by implementing internationalization with react-intl across 12 locales."
        ],
        skills: ["React.js", "TypeScript", "Redux", "react-intl / i18n", "Material UI", "REST APIs"]
    },
    {
        company: "Foyr (RBJ Technologies)",
        role: "Senior Frontend Developer",
        period: "April 2019 - July 2021",
        type: "Full-time",
        context: "Browser-based real-time 3D interior-design platform — 100K+ designers across 30+ countries · Hyderabad, India",
        achievements: [
            "Designed a bidirectional middleware between the Vue interaction layer and the Three.js engine: a property change in Vue — object height, for instance — invokes the 3D engine to update the 3D/2D canvas in real time, and engine-side changes propagate back to the UI.",
            "Main frontend engineer for the core product, built from scratch to production on Vue.js, Nuxt.js and Vuex — frontend authentication wired to the backend, dashboards and every primary application surface.",
            "Created a molecules-and-components design system that eliminated duplicate UI and became the shared vocabulary for feature teams.",
            "Integrated Algolia-powered search so designers can find and drop objects straight into the canvas, and built a render/image enhancer for brand logos, filters and export edits.",
            "Wired real-time data and user interaction into the 3D environment over WebSockets, driving live rendering updates and completion notifications; improved 3D model load speed ~30%.",
            "Trained and mentored two junior engineers, guiding architecture decisions, code review and sprint planning."
        ],
        skills: ["Vue.js", "Nuxt.js", "Vuex", "Three.js", "WebSockets", "Design Systems", "Algolia", "JavaScript", "Element UI"]
    },
    {
        company: "Grarri",
        role: "Senior Developer",
        period: "February 2018 - March 2019",
        type: "Full-time",
        context: "Template & configuration platform · Hyderabad, India",
        achievements: [
            "Led development of multiple high-impact projects across Angular.js, Node.js and MongoDB.",
            "Increased template adaptability 50% and expanded the template library 40%, widening the range of projects the platform could serve."
        ],
        skills: ["Angular.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Bootstrap"]
    },
    {
        company: "Freelance",
        role: "Web Developer",
        period: "November 2016 - January 2018",
        type: "Freelance",
        context: "End-to-end web applications for small-business clients · New Delhi, India",
        achievements: [
            "Built and operated a hybrid application on Meteor.js with SASS, MongoDB, Google APIs and Heroku — owning the work end to end from build through deployment and maintenance."
        ],
        skills: ["Meteor.js", "Node.js", "MongoDB", "SASS", "Google APIs", "Heroku"]
    },
    {
        company: "Indian Institute of Technology, Delhi",
        role: "Software Developer",
        period: "June 2015 - September 2016",
        type: "Full-time",
        context: "Rural Housing Knowledge Network — national portal commissioned by the Ministry of Rural Development",
        achievements: [
            "Led development of the national RHKN portal, giving rural users access to housing designs tailored to their region.",
            "Built a Google Maps and Matplotlib interface letting researchers define new regions and associate housing designs with them, resolving locations by coordinate-within-polygon lookup."
        ],
        skills: ["Python", "Flask", "MongoDB", "Google Maps API", "Matplotlib", "JavaScript", "jQuery"]
    },
    {
        company: "Ericsson · Schmid Telecom AG",
        role: "Engineer — Telecom / RF",
        period: "December 2012 - June 2014",
        type: "Full-time",
        context: "Pre-software career in telecommunications and network infrastructure",
        achievements: [
            "Worked on telecommunications systems and network infrastructure before pivoting to software — the analytical grounding that still shapes how I approach systems and failure modes."
        ],
        skills: ["Network Infrastructure", "RF Engineering", "Troubleshooting"]
    }
];
