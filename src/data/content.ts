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
  type?: "remote" | "onsite" | "hybrid";
  location?: string;
  period: string;
  bullets: string[];
  category: string;
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
  headline: "Full Stack Engineer Intern · AI · CSE @ VIT Bhopal",
  email: "aarya.shrivaastava1026@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1b_sfMXHTc-wvIx3mJn5WSCRe6svW5lrs/view?usp=sharing",
  links: {
    github: "https://github.com/AaryaShrivaastava",
    linkedin: "https://linkedin.com/in/aarya-shrivaastava-7b198b2a3",
    codolio: "http://codolio.com/profile/ApexVoyager30",
    x: "https://x.com/Aarya_S30",
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
      title: "Marketing Analytics (IIT Kharagpur)",
      detail: "NPTEL · Elite + Gold Certificate | Score: 99% | Top 1% Performer · May 2026",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      detail: "Google (Coursera) · Nov 2025",
    },
    {
      title: "Introduction to Machine Learning",
      detail: "NPTEL (IIT Madras) · Elite Certificate (71%) · May 2025",
    },
    {
      title: "C++ Programming Internship",
      detail: "CodSoft · Aug 2024",
    },
    {
      title: "Python Programming Internship",
      detail: "CodSoft · Jul 2024",
    },
    {
      title: "Fundamentals Of AI and ML",
      detail: "Vityarthi · May 2024",
    },
    {
      title: "Python Essentials",
      detail: "Vityarthi · May 2024",
    },
    {
      title: "Learn Python: The Complete Python Programming Course",
      detail: "Udemy · Jan 2024",
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
    category: "ENGINEERING",
    bullets: [
      "Building AI-driven platforms and backend systems using Python, Langflow, REST APIs, and cloud technologies.",
      "Working across AI integrations, scalable APIs, databases, and product-focused engineering.",
    ],
  },
  {
    company: "Schoolnet India Pvt Ltd",
    role: "Technology Intern",
    type: "remote",
    location: "Noida, India",
    period: "May 2025 – June 2025",
    category: "TECHNOLOGY",
    bullets: [
      "Supported data privacy, security and risk management controls while analyzing cloud infrastructure for an EdTech platform serving 1M+ users.",
      "Created and maintained technical documentation for enterprise-level system architecture across cloud nodes, reducing developer onboarding time.",
    ],
  },
  {
    company: "AI Club, VIT Bhopal",
    role: "PR & Outreach Lead",
    period: "Nov 2024 – Sep 2026",
    category: "OUTREACH",
    bullets: [
      "Progressed from PR & Outreach Team Member (Nov '24 - Apr '25) to Lead (Apr '25 - Sep '26), coordinating internal and external communication.",
      "Promoted AI Club initiatives and built connections with external speakers and technical communities.",
      "Led outreach activities and supported the planning and execution of club events and technical sessions.",
    ],
  },
  {
    company: "E-Cell, VIT Bhopal",
    role: "Finance & Sponsorship Team Member",
    period: "Nov 2024 – May 2026",
    category: "FINANCE",
    bullets: [
      "Served as Podcast Team Member (Nov '24 - Mar '25) before transitioning to Finance and Sponsorship (Mar '25 - May '26).",
      "Coordinated with external organizations to secure sponsorships and support financial planning for entrepreneurial initiatives.",
      "Conducted outreach to potential sponsors via B2B pitching and maintained communication with key stakeholders.",
      "Hosted podcast episodes and collaborated closely with the core E-Cell team to ensure operational success.",
    ],
  },
  {
    company: "NSS Unit, VIT Bhopal",
    role: "Event Management Team",
    period: "Sep 2024 – Apr 2026",
    category: "EVENT MANAGEMENT",
    bullets: [
      "Supported event planning, logistics, and on-ground coordination for various community and volunteering initiatives.",
      "Collaborated with team members to manage participant coordination and ensure smooth event execution.",
      "Contributed to operational planning and teamwork for campus and community outreach events.",
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
    role: "Marketing Analytics (IIT Kharagpur)",
    period: "May 2026",
    bullets: [
      "NPTEL Elite + Gold Certificate",
      "Score: 99% | Top 1% Performer",
    ],
  },
  {
    role: "HackerRank C++",
    period: "2024",
    bullets: [
      "Achieved 4-Star credential in C++ problem solving.",
    ],
  },
  {
    role: "HackerRank Python",
    period: "2024",
    bullets: [
      "Achieved 3-Star credential in Python problem solving.",
    ],
  },
];
