export type Depth = "Expert" | "Advanced" | "Working";

export interface Skill {
  name: string;
  /** Kept for the existing progress-bar components. Single source of truth — do not
   *  restate these numbers anywhere else in this file. */
  proficiency: number;
  depth: Depth;
}

/**
 * How to read `depth` — the benchmark this claims against:
 *   Expert   — production-proven at scale, with architectural responsibility for it.
 *   Advanced — shipped features in it and reviewed other engineers' work in it.
 *   Working  — used it in real projects; not a primary focus.
 */
export const depthLegend = {
  Expert: "Production-proven at scale, with architectural responsibility",
  Advanced: "Shipped features and reviewed others' work",
  Working: "Used in real projects, not a primary focus"
} as const;

export const programmingLanguages: Skill[] = [
  { name: "TypeScript", proficiency: 95, depth: "Expert" },
  { name: "JavaScript (ES6+)", proficiency: 95, depth: "Expert" },
  { name: "HTML5 / CSS3 / SASS", proficiency: 95, depth: "Expert" }
];

export const frontendTechnologies: Skill[] = [
  { name: "React.js", proficiency: 95, depth: "Expert" },
  { name: "Next.js 15", proficiency: 95, depth: "Expert" },
  { name: "Zustand", proficiency: 90, depth: "Expert" },
  { name: "React Query", proficiency: 90, depth: "Advanced" },
  { name: "Vue.js / Nuxt.js", proficiency: 88, depth: "Advanced" },
  { name: "Redux", proficiency: 88, depth: "Advanced" },
  { name: "React Hook Form", proficiency: 88, depth: "Advanced" },
  { name: "Tailwind CSS", proficiency: 90, depth: "Advanced" },
  { name: "Material UI", proficiency: 85, depth: "Advanced" },
  { name: "Storybook", proficiency: 85, depth: "Advanced" }
];

/** The category that carries Staff/Principal signal — keep it first in the UI. */
export const architectureSkills: Skill[] = [
  { name: "Frontend Architecture", proficiency: 95, depth: "Expert" },
  { name: "NX Monorepo", proficiency: 92, depth: "Expert" },
  { name: "Design Systems", proficiency: 92, depth: "Expert" },
  { name: "SSR / Hydration", proficiency: 90, depth: "Expert" },
  { name: "Multi-tenant & Multi-locale Platforms", proficiency: 90, depth: "Expert" },
  { name: "Micro-frontends", proficiency: 88, depth: "Advanced" },
  { name: "System Design", proficiency: 88, depth: "Advanced" }
];

/**
 * Graphics, motion and real-time rendering.
 * Most frontend architects do not have this dimension at all — it is a genuine
 * differentiator and was previously missing from this file entirely, even though
 * the Foyr work is built on it.
 */
export const graphicsMotionSkills: Skill[] = [
  { name: "Canvas / 2D Rendering", proficiency: 90, depth: "Expert" },
  { name: "Three.js Interop", proficiency: 88, depth: "Advanced" },
  { name: "Real-time Sync (WebSockets)", proficiency: 88, depth: "Advanced" },
  { name: "Animation & Motion Systems", proficiency: 88, depth: "Advanced" },
  { name: "Parallax & Scroll Choreography", proficiency: 88, depth: "Advanced" },
  { name: "SVG", proficiency: 85, depth: "Advanced" }
];

export const backendTechnologies: Skill[] = [
  { name: "REST API Design", proficiency: 92, depth: "Expert" },
  { name: "GraphQL", proficiency: 88, depth: "Advanced" },
  { name: "Node.js", proficiency: 85, depth: "Advanced" },
  { name: "Express.js", proficiency: 85, depth: "Advanced" },
  { name: "MongoDB", proficiency: 80, depth: "Working" },
  { name: "Firebase / Supabase", proficiency: 75, depth: "Working" }
];

export const devTools: Skill[] = [
  { name: "Vite", proficiency: 92, depth: "Expert" },
  { name: "Git / GitHub", proficiency: 92, depth: "Expert" },
  { name: "Jest / React Testing Library", proficiency: 90, depth: "Expert" },
  { name: "WCAG 2.1 AA Accessibility", proficiency: 92, depth: "Expert" },
  { name: "Performance Optimization", proficiency: 90, depth: "Expert" },
  { name: "CI/CD Pipelines", proficiency: 85, depth: "Advanced" },
  { name: "Webpack", proficiency: 82, depth: "Advanced" },
  { name: "Docker", proficiency: 72, depth: "Working" },
  { name: "AWS", proficiency: 70, depth: "Working" }
];

/** Leadership presented as practices with evidence, not adjectives. */
export const leadershipSkills = [
  "Solution Design & Architectural Planning",
  "Design Review",
  "Technical Mentoring",
  "Cross-team API Contract Definition",
  "Written Technical Documents / RFCs",
  "Stakeholder Communication",
  "Agile / Scrum"
];

export const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Critical Thinking",
  "Adaptability",
  "Attention to Detail"
];

export const learningJourneyQuote =
  "Technology turns over fast, but judgement compounds. I invest in the parts that transfer — how systems fail, how teams adopt change, how to tell a constraint from a preference — and pick up the frameworks as the work demands them.";

/**
 * Consolidated view for components that want categories.
 * Derived from the arrays above so the two can never drift apart.
 */
export const skillCategories = [
  { category: "Architecture", skills: architectureSkills },
  { category: "Core Frontend", skills: frontendTechnologies },
  { category: "Graphics & Motion", skills: graphicsMotionSkills },
  { category: "Languages", skills: programmingLanguages },
  { category: "Platform & Quality", skills: devTools },
  { category: "APIs & Backend", skills: backendTechnologies }
];
