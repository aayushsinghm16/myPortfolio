export interface Project {
  id: number;
  title: string;
  /** One-line scope: the platform and who it served. */
  context?: string;
  description: string;
  /** The architectural call worth talking about — problem, decision, outcome. */
  architecture?: string;
  /** Headline numbers, rendered as chips where the UI supports it. */
  impact?: string[];
  image: string;
  tags: string[];
  liveDemo: string;
  categories: string[];
}

export const projects: Project[] = [
  {
    id: 7,
    title: "Goodyear E-Commerce — Publicis Sapient",
    context: "US retail e-commerce platform · NX monorepo, 5 brands, 12 locales",
    description:
      "Platform infrastructure and the full authenticated experience for Goodyear's US storefront on Next.js 15 — CSRF protection, a GraphQL proxy keeping service credentials server-side, React Query SSR with HydrationBoundary, and the authentication, account and order domains built on top of them.",
    architecture:
      "Order Details had to serve three fulfilment types with divergent data models and financial rules. Conditional-rendering sprawl breaks down past two types and a shared mega-component is untestable, so each fulfilment owns its own calculation and UI contract against a common interface — a fourth type lands without touching the other three. Separately, a re-render cascade across the account tree traced back to Context identity churn; migrating to Zustand gave fine-grained subscriptions without the ceremony Redux Toolkit would have added.",
    impact: ["5 brands · 12 locales", "Zero WCAG 2.1 AA audit violations", "3 fulfilment types on one contract"],
    image: "/digitalWealth.webp",
    tags: ["Next.js 15", "React 18", "TypeScript", "GraphQL", "NX Monorepo", "Zustand", "React Query"],
    liveDemo: "https://www.goodyear.com/",
    categories: ["web"]
  },
  {
    id: 1,
    title: "Digital Wealth — SigFig",
    context: "Digital wealth-management & robo-advisory platform · 1M+ end users via banking partners",
    description:
      "Core modules of a regulated wealth platform delivered through banking partners — schema-driven investment, suitability and regulatory questionnaires, employer-sponsored plan flows, brokerage funding, new-client onboarding, and a React-PDF proposal generator.",
    architecture:
      "The shared core repo and the per-partner repos were developed and released separately, so every partner deploy needed manual release sequencing. I ran the R&D to run both from a single folder structure under Vite and rebuilt the CI/CD pipeline to drive them from one place — a partner deploy now triggers the core pipeline automatically. Separately, the questionnaire playback module hit a hard 100-object Contentstack ceiling; migrating from an object-based to an array-of-objects model removed the limit and restored scalable detail rendering.",
    impact: ["1M+ end users", "~45% faster load times", "30% faster builds · 40% faster partner onboarding"],
    image: "/digitalWealth.webp",
    tags: ["React", "TypeScript", "Vite", "GraphQL", "React Hook Form", "CI/CD", "Jest / RTL"],
    liveDemo: "https://www.sigfig.com/",
    categories: ["web"]
  },
  {
    id: 3,
    title: "Neo — Foyr",
    context: "Browser-based real-time 3D interior-design platform · 100K+ designers in 30+ countries",
    description:
      "The core user-facing application, built from scratch to production on Vue.js, Nuxt.js and Vuex — authentication, dashboards and every primary surface — for a platform that turns floor plans into 3D renderings and 4K walkthroughs in the browser.",
    architecture:
      "The interaction layer and the rendering engine had to stay in sync in both directions without either owning the other's state. I designed a bidirectional middleware between Vue and Three.js: a property change in Vue — object height, say — invokes the engine to update the 3D/2D canvas in real time, and engine-side changes propagate back to the UI. A molecules-and-components design system built alongside it eliminated duplicate UI and became the shared vocabulary for feature teams.",
    impact: ["100K+ designers · 30+ countries", "~30% faster 3D model loads", "Design system built from scratch"],
    image: "/neoFoyr.webp",
    tags: ["Vue.js", "Nuxt.js", "Vuex", "Three.js", "WebSockets", "Algolia", "Design Systems"],
    liveDemo: "https://neo.foyr.com/",
    categories: ["web"]
  },
  {
    id: 2,
    title: "Prodport — CoreValue Technologies",
    context: "E-commerce content optimization SaaS",
    description:
      "A React merchant dashboard with real-time analytics that lets e-commerce merchants test, personalize and optimize storefront content — product titles, media and layout — and measure the result.",
    architecture:
      "A reusable component library cut delivery time 20% across the team, and internationalization via react-intl across 12 locales opened the product to markets it previously could not serve.",
    impact: ["+35% merchant engagement", "12 locales", "−20% delivery time"],
    image: "/prodport.webp",
    tags: ["React", "TypeScript", "Redux", "react-intl", "Material UI"],
    liveDemo: "http://www.prodport.com/",
    categories: ["web"]
  },
  {
    id: 6,
    title: "QuizKode",
    context: "Personal project · AI-powered coding assessment platform",
    description:
      "An AI-powered quiz platform with real-time code evaluation, built on Next.js and TypeScript during a dedicated GenAI focus period and deployed on Vercel.",
    architecture:
      "Built to work through Model Context Protocol and LLM workflow design hands-on rather than theoretically — real-time evaluation of submitted code meant treating model output as untrusted input and designing the grading path around that.",
    impact: ["Shipped solo, end to end", "Next.js · Supabase · Vercel"],
    image: "/quizkode.webp",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "LLM Workflows"],
    liveDemo: "https://www.quizkode.com/",
    categories: ["web", "ai"]
  },
  {
    id: 5,
    title: "RHKN — IIT Delhi",
    context: "National portal commissioned by the Ministry of Rural Development",
    description:
      "An open platform for exchanging rural housing knowledge with transparent sourcing and contributor credit, giving rural users access to house plans suited to their region.",
    architecture:
      "Researchers needed to define new geographic regions and bind housing designs to them without engineering support. A Google Maps and Matplotlib interface let them draw regions directly, with locations resolved by coordinate-within-polygon lookup.",
    impact: ["National scale deployment", "Ministry of Rural Development"],
    image: "/rhkn.webp",
    tags: ["Python", "Flask", "MongoDB", "Google Maps API", "Matplotlib"],
    liveDemo: "https://design.iitd.ac.in/rural-housing-knowledge-network.html",
    categories: ["web"]
  },
  {
    id: 4,
    title: "PandeyG — Grarri",
    context: "E-commerce platform for small businesses moving online",
    description:
      "A platform letting small businesses take their operations online, keep their existing customer base and reach a wider audience, built on Angular.js with a Node.js and MongoDB backend.",
    impact: ["+50% template adaptability", "+40% template library"],
    image: "/pandeyG.webp",
    tags: ["Angular.js", "JavaScript", "Node.js", "MongoDB"],
    liveDemo: "https://grarri.com/",
    categories: ["mobile", "web"]
  }
];
