/**
 * Engineering principles — the "how I decide" section.
 *
 * This is the highest-signal content for Staff / Principal screening: interviewers
 * read these to calibrate altitude before they read any project. Each one is tied to
 * real work rather than stated as a generality, so it survives a follow-up question.
 */

export interface Principle {
  /** Short label used as the heading. */
  title: string;
  /** The principle itself, first person, stated as a position. */
  statement: string;
  /** The specific piece of work that earns the claim. */
  evidence: string;
}

export const principles: Principle[] = [
  {
    title: "Standards live in documents, not code review",
    statement:
      "Code review catches one diff at a time. If a standard matters, it belongs in a design review and a written technical document that outlives the person who wrote it.",
    evidence:
      "At Publicis Sapient I presented solution designs for senior-architect review before rollout, and set implementation direction for other engineers in the pod through those documents rather than after the fact."
  },
  {
    title: "Accessibility is a build-time guardrail",
    statement:
      "WCAG AA is not a remediation pass scheduled before launch. It is a constraint you design to from the first component, which is the only way it survives contact with a deadline.",
    evidence:
      "Delivered an enterprise e-commerce platform with zero WCAG 2.1 AA audit violations — focus management and ARIA built into the shared components, not retrofitted."
  },
  {
    title: "The best architecture is the one the team adopts",
    statement:
      "I weight team familiarity and adoption cost as heavily as technical merit. An elegant pattern nobody sustains is a liability with good documentation.",
    evidence:
      "Chose Zustand over Redux Toolkit for the account domain because the ceremony would not have been sustained, then wrote the state-ownership guide so the decision held after I moved on."
  },
  {
    title: "Diagnose before you choose",
    statement:
      "Most architecture arguments are really unmeasured performance arguments. Find the actual cause first; the right tool is usually obvious once you have.",
    evidence:
      "Traced a re-render cascade across an account tree to Context identity churn before touching a state library — the migration was the consequence of the diagnosis, not a preference."
  },
  {
    title: "Build the layer other teams stand on",
    statement:
      "Platform work is leverage. One correct shared foundation is worth more than five well-built features, because it decides how expensive the next hundred features are.",
    evidence:
      "Engineered NX monorepo infrastructure for 5 brands across 12 locales — CSRF protection, a GraphQL proxy keeping credentials server-side, React Query SSR — consumed by every delivery pod."
  }
];
