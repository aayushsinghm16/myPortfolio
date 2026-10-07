import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI & Agentic Systems - MCP Servers, Guardrails, Agent Workflows',
    description:
        'MCP server design, LLM guardrails and scheduled agentic workflows: AST-allowlisted database access with PII masking, a design system exposed to LLMs as typed tools, and agents running unattended with schema-validated output.',
    keywords: [
        'MCP Server', 'Model Context Protocol', 'AI Engineering', 'LLM Guardrails',
        'Agentic Workflows', 'Claude Code Skills', 'Prompt Injection', 'AI Platform Engineer',
        'Anthropic SDK', 'AI Architecture',
    ],
    openGraph: {
        title: 'AI & Agentic Systems - Aayush Singh',
        description:
            'Two MCP servers, four scheduled agents, and the guardrail layer between a language model and a system that matters.',
        url: 'https://aayushsingh.co.in/ai',
    },
    alternates: {
        canonical: 'https://aayushsingh.co.in/ai',
    },
};
