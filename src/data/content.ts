// ─────────────────────────────────────────────────────────────────────────────
// src/data/content.ts
// Single source-of-truth for all site content.
// Every section component must import from here — do not hard-code copy elsewhere.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProfileLinks {
  github: string;
  linkedin: string;
  codolio: string;
  x: string;
}

export interface Profile {
  name: string;
  headline: string;
  email: string;
  resumeUrl: string;
  links: ProfileLinks;
}

export interface Certification {
  title: string;
  detail: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  period: string;
  certifications: Certification[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: "remote" | "onsite" | "hybrid";
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  role?: string;
  tags: string[];
  bullets: string[];
  githubUrl: string;
}

export interface TechCategory {
  category: string;
  skills: string[];
}

export interface Extracurricular {
  role: string;
  period: string;
  bullets: string[];
}

// ─── Profile ─────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Aarya Shrivaastava",
  headline: "Full Stack Engineer Intern · AI & Backend · CSE @ VIT Bhopal",
  email: "aarya.shrivaastava1026@gmail.com",
  resumeUrl: "/Aarya_Shrivaastava_Resume.pdf",
  links: {
    github: "https://github.com/AaryaShrivaastava",
    linkedin: "https://linkedin.com/in/aarya-shrivaastava-7b198b2a3",
    codolio: "TODO_CODOLIO_URL",
    x: "TODO_X_URL",
  },
};

// ─── Education ───────────────────────────────────────────────────────────────

export const education: Education = {
  institution: "VIT Bhopal University",
  location: "Bhopal, Madhya Pradesh",
  degree: "B.Tech in Computer Science and Engineering",
  cgpa: "9.07",
  period: "2023 – 2027",
  certifications: [
    {
      title: "NPTEL Elite + Gold Scholar — Marketing Analytics",
      detail: "99th percentile · Top 1% among 3,495 candidates",
    },
    {
      title: "NPTEL Elite Certificate — Introduction to Machine Learning",
      detail: "Elite Certificate",
    },
    {
      title: "HackerRank — C++",
      detail: "4-Star",
    },
    {
      title: "HackerRank — Python",
      detail: "3-Star",
    },
  ],
};

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    company: "DataObserve LLC",
    role: "Full Stack Engineer Intern",
    type: "remote",
    location: "Houston, Texas, USA",
    period: "June 2026 – Present",
    bullets: [
      "Architecting AI-driven platforms from scratch using Python and Langflow, with 5+ tool integrations to decrease manual processing time.",
      "Collaborated with cross-functional teams to enhance UI components for AI chat applications and support system integration.",
      "Engineered scalable RESTful APIs for high-volume daily requests, integrating core backends with 3 generative AI models.",
      "Tested 15+ API endpoints via Postman, using AI agents to diagnose errors and reduce payload bottlenecks.",
      "Analyzed PostgreSQL and GCP database schemas and large datasets to optimize data retrieval.",
    ],
  },
  {
    company: "Schoolnet India Pvt Ltd",
    role: "Technology Intern",
    type: "remote",
    location: "Noida, India",
    period: "May 2025 – June 2025",
    bullets: [
      "Supported data privacy, security and risk management controls while analyzing cloud infrastructure for an EdTech platform serving 1M+ users.",
      "Created and maintained technical documentation for enterprise-level system architecture across cloud nodes, reducing developer onboarding time.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Gait Guard",
    subtitle: "ML-Based Gait Abnormality Detection",
    role: "Team Lead",
    tags: ["Python", "ETL", "CNN", "LSTM"],
    bullets: [
      "Built ETL pipelines to clean and structure 10,000+ multimodal samples (videos, images, keypoints).",
      "Aggregated clinical data across 5 datasets as a standardized baseline for the ML team.",
      "Contributed to CNN + LSTM integration that improved baseline accuracy by 12%.",
    ],
    githubUrl: "TODO_REPO_URL",
  },
  {
    title: "Job Portal Web Application",
    subtitle: "Frontend, API",
    tags: ["Frontend", "API", "UI"],
    bullets: [
      "Deployed responsive UI components that reduced page load times.",
      "Engineered job listing pages and dashboard layouts.",
      "Refactored an open-source frontend codebase into modular UI elements.",
    ],
    githubUrl: "TODO_REPO_URL",
  },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────

export const techStack: TechCategory[] = [
  {
    category: "Languages",
    skills: ["C++", "Python", "SQL"],
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Flask", "Langflow", "Composio", "Postman", "API Integration"],
  },
  {
    category: "AI / ML",
    skills: ["CNN", "LSTM", "GRU"],
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "AWS (S3, EC2, IAM)", "GCP", "ETL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Docker", "Codex", "Cursor"],
  },
];

// ─── Extracurriculars ─────────────────────────────────────────────────────────

export const extracurriculars: Extracurricular[] = [
  {
    role: "PR & Outreach Lead — AI Club, VIT Bhopal",
    period: "Nov 2024 – Present",
    bullets: [
      "Coordinated 5+ technical events for 200+ attendees.",
      "Onboarded 5+ industry speakers.",
    ],
  },
  {
    role: "Campus Leadership & Community",
    period: "Sep 2024 – Present",
    bullets: [
      "Reached out to 100+ companies and secured sponsorships via B2B pitching for E-Cell.",
      "On-ground NSS volunteering.",
    ],
  },
];
