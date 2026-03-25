import { NextRequest, NextResponse } from 'next/server';
import { personalInfo } from '@/data/personal';
import { projects } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { skillCategories, programmingLanguages, frontendTechnologies, backendTechnologies, devTools, softSkills } from '@/data/skills';
import { educationHistory } from '@/data/education';
import { interests } from '@/data/interests';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per minute

// Track message patterns for bot detection
const patternMap = new Map<string, number>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIp || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

function detectBotPatterns(message: string, ip: string): boolean {
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /(.)\1{10,}/, // Repeated characters
    /^[^a-zA-Z0-9\s]{20,}$/, // Too many special characters
    /(http|https):\/\//gi, // URLs
    /<script/gi, // Script injection
    /sql|drop|insert|delete|update|select.*from/gi, // SQL injection attempts
    /eval\(|function\(|=>/gi, // Code injection
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(message)) {
      return true;
    }
  }

  // Check message length (too short or too long)
  if (message.length < 2 || message.length > 500) {
    return true;
  }

  // Track identical messages (potential spam)
  const messageHash = message.toLowerCase().trim();
  const count = patternMap.get(`${ip}:${messageHash}`) || 0;
  patternMap.set(`${ip}:${messageHash}`, count + 1);

  if (count > 2) {
    return true; // Same message repeated 3+ times
  }

  return false;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('RECAPTCHA_SECRET_KEY not configured');
    return true; // Allow if not configured (for development)
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

function buildProfileContext(): string {
  return `
You are an AI assistant representing Aayush Singh's portfolio. Your role is to answer questions ONLY about Aayush's professional background, skills, projects, and experience.

STRICT RULES:
1. ONLY answer questions about Aayush Singh's portfolio, career, skills, projects, and professional background
2. DO NOT answer general questions, current events, coding help, or anything unrelated to Aayush
3. DO NOT engage in conversations about politics, religion, or controversial topics
4. DO NOT provide code solutions or technical tutorials
5. If asked something unrelated, politely redirect: "I can only answer questions about Aayush Singh's portfolio, experience, and skills. What would you like to know about his work?"
6. Keep responses concise (2-4 sentences) and professional
7. Use the provided data ONLY - do not make up information

PROFILE DATA:

Name: ${personalInfo.name}
Title: ${personalInfo.title}
Email: ${personalInfo.email}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}

Bio: ${personalInfo.bio}

Long Bio: ${personalInfo.longBio.join(' ')}

Philosophy: ${personalInfo.philosophy}

EXPERIENCE:
${experienceData.map(exp => `
Company: ${exp.company}
Role: ${exp.role}
Period: ${exp.period}
Achievements:
${exp.achievements.map(a => `- ${a}`).join('\n')}
Skills: ${exp.skills?.join(', ')}
`).join('\n')}

PROJECTS:
${projects.map(p => `
${p.title}: ${p.description}
Technologies: ${p.tags.join(', ')}
Live Demo: ${p.liveDemo}
`).join('\n')}

SKILLS:
Programming Languages: ${programmingLanguages.map(s => `${s.name} (${s.proficiency}%)`).join(', ')}
Frontend: ${frontendTechnologies.map(s => `${s.name} (${s.proficiency}%)`).join(', ')}
Backend: ${backendTechnologies.map(s => `${s.name} (${s.proficiency}%)`).join(', ')}
Dev Tools: ${devTools.map(s => `${s.name} (${s.proficiency}%)`).join(', ')}
Soft Skills: ${softSkills.join(', ')}

EDUCATION:
${educationHistory.map(e => `${e.degree} from ${e.institution} (${e.year})`).join('\n')}

INTERESTS:
${interests.map(i => `${i.title}: ${i.description}`).join('\n')}
  `.trim();
}

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  const context = buildProfileContext();

  // Check if question is off-topic
  const offTopicKeywords = [
    'weather', 'news', 'politics', 'recipe', 'joke', 'game',
    'cryptocurrency', 'stock', 'medical', 'legal', 'write code',
    'help me code', 'debug', 'fix my', 'what is', 'how to',
    'explain', 'tutorial', 'current events', 'latest news'
  ];

  const isOffTopic = offTopicKeywords.some(keyword => lowerMessage.includes(keyword));

  if (isOffTopic) {
    return "I can only answer questions about Aayush Singh's portfolio, professional experience, skills, and projects. What would you like to know about his work?";
  }

  // Handle specific questions about Aayush
  if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
    return `Aayush has over 10 years of frontend development experience, currently working as a Senior Frontend Engineer at Publicis Sapient on the Goodyear e-commerce platform. He previously worked at SigFig India (SDE 2), Core Value Technologies, RBJ Technologies (Foyr), Grarri, and IIT Delhi. His expertise includes React, Next.js 15, Vue.js, TypeScript, Zustand, React Query, and GraphQL.`;
  }

  if (lowerMessage.includes('skill') || lowerMessage.includes('technologies') || lowerMessage.includes('tech stack')) {
    return `Aayush specializes in JavaScript/TypeScript with React.js (98%), Next.js (95%), Vue.js (90%), and Nuxt.js (85%). He's proficient in Node.js, Express.js, MongoDB, GraphQL, and modern dev tools like Vite, Docker, and CI/CD. He also has strong soft skills including problem-solving, team collaboration, and project management.`;
  }

  if (lowerMessage.includes('project')) {
    return `Aayush has worked on diverse projects including the Goodyear E-Commerce platform at Publicis Sapient (Next.js 15, Zustand, GraphQL), Digital Wealth platform at SigFig, Prodport e-commerce optimization tool, Foyr Neo 3D interior design software, PandeyG e-commerce platform, RHKN rural housing portal at IIT Delhi, and QuizKode coding quiz platform. Each project showcases his expertise across different domains and technologies.`;
  }

  if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study')) {
    return `Aayush holds a B.Tech in Electronics and Communication Engineering from GRD Institute of Management and Technology, Dehradun (2012). He also completed his Higher Secondary Education in Science from DAV Public School (2008).`;
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return `You can reach Aayush at aayushsinghm16@gmail.com or connect via GitHub (github.com/aayushsinghm16) and LinkedIn (linkedin.com/in/aayushsinghm16). He's open to discussing opportunities and collaborations.`;
  }

  if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplish')) {
    return `At SigFig, Aayush reduced loading times by 45% using React Suspense, integrated Vite reducing build times by 30%, and enhanced investment dashboards increasing engagement by 20%. He's passionate about performance optimization and accessibility (WCAG compliance).`;
  }

  if (lowerMessage.includes('interest') || lowerMessage.includes('passion')) {
    return `Aayush is passionate about Frontend Performance Optimization, Scalable UI Architecture, AI-Powered Web Applications, Developer Mentorship, and Cross-Platform Accessible Design. He's particularly interested in integrating AI features and modern tooling to create exceptional user experiences.`;
  }

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return `Hello! I'm here to help you learn about Aayush Singh's professional background. Feel free to ask about his experience, skills, projects, education, or how to contact him.`;
  }

  // Default response for unrecognized questions
  return `I can help you learn about Aayush's professional experience (10+ years in frontend), technical skills (React, Next.js, Vue, TypeScript, GraphQL), projects (Goodyear, SigFig, Foyr, QuizKode), education, or how to contact him. What would you like to know?`;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { message, recaptchaToken } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Bot detection
    if (detectBotPatterns(message, ip)) {
      return NextResponse.json(
        { error: 'Suspicious activity detected. Please try a different message.' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const isValid = await verifyRecaptcha(recaptchaToken);
      if (!isValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 403 }
        );
      }
    }

    // Generate response
    const response = generateResponse(message);

    return NextResponse.json({ message: response });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
