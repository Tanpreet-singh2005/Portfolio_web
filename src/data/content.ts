// ─────────────────────────────────────────────────────────────────────────────
// src/data/content.ts
// Single source-of-truth for all site content.
// Every section component imports from here.
// ─────────────────────────────────────────────────────────────────────────────

export interface ProfileLinks {
  github: string;
  linkedin: string;
  gfg: string;
  email: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  email: string;
  resumeUrl: string;
  cgpa: string;
  dsaCount: string;
  projectsCount: string;
  internshipCompany: string;
  links: ProfileLinks;
}

export interface Certification {
  title: string;
  issuer: string;
  detail: string;
  date?: string;
  badge?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  grade: string;
  period: string;
  highlights?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  type?: "remote" | "onsite" | "hybrid";
  location?: string;
  period: string;
  category: string;
  summary: string;
  metrics: { label: string; value: string }[];
  bullets: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  category: string;
  role?: string;
  period?: string;
  tags: string[];
  bullets: string[];
  githubUrl: string;
  liveUrl?: string;
  featuredMetric?: { label: string; value: string };
}

export interface TechCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  category: string;
  metric?: string;
  bullets: string[];
}

// ─── Profile ─────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Tanpreet Singh",
  role: "Full-Stack Software Engineer",
  headline: "Computer Science Undergraduate (CGPA 9.29) & Ex-Software Developer Intern at Grasim Industries (Aditya Birla Group). Experienced in building scalable full-stack applications with React, Node.js, Express, MongoDB, and AWS.",
  email: "tanpreetsingh7007@gmail.com",
  resumeUrl: "/Tanpreet_Singh_Resume.pdf", // or direct link
  cgpa: "9.29",
  dsaCount: "160+",
  projectsCount: "3",
  internshipCompany: "Grasim Industries (Aditya Birla Group)",
  links: {
    github: "https://github.com/Tanpreet-singh2005",
    linkedin: "https://linkedin.com/in/tanpreet-singh-422a04328/",
    gfg: "https://www.geeksforgeeks.org/user/tanpreetsingh7007/",
    email: "mailto:tanpreetsingh7007@gmail.com",
  },
};

// ─── Education ───────────────────────────────────────────────────────────────

export const educations: EducationItem[] = [
  {
    institution: "VIT Bhopal University",
    location: "Bhopal, Madhya Pradesh",
    degree: "B.Tech in Computer Science and Engineering",
    grade: "CGPA: 9.29",
    period: "Aug 2023 – May 2027",
    highlights: [
      "Consistent academic excellence with 9.29 CGPA",
      "Core focus on Data Structures, Algorithms, Distributed Systems & Full-Stack Development",
      "Active problem solver: 160+ DSA problems solved on GeeksforGeeks",
    ],
  },
  {
    institution: "Fatima Convent H.S. School",
    location: "Nagda, Madhya Pradesh",
    degree: "Senior Secondary (Class XII) & High School (Class X)",
    grade: "Class XII: 91.4% | Class X: 95.6%",
    period: "2020 – 2023",
    highlights: [
      "Class XII: 91.4% (2022 – 2023)",
      "Class X: 95.6% (2020 – 2021)",
      "Strong foundation in Mathematics and Computer Science",
    ],
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    detail: "Validated foundational cloud architecture, security, compute, storage, and IAM management skills.",
    badge: "Cloud Architecture",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google via Coursera",
    detail: "Comprehensive understanding of TCP/IP, DNS, subnetting, network troubleshooting, and transport protocols.",
    badge: "Computer Networks",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL (IIT Madras)",
    detail: "Elite Certificate (Score: 72%) covering foundational ML algorithms, classification, regression, and optimization.",
    badge: "Elite Certificate",
  },
  {
    title: "Marketing Analytics",
    issuer: "NPTEL (IIT Kharagpur)",
    detail: "Elite + Gold Certificate (Score: 97%) — Awarded Top 5% Performer nationwide.",
    badge: "Top 5% Performer",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    company: "Grasim Industries Pvt. Ltd.",
    role: "Software Developer Intern",
    type: "onsite",
    location: "Aditya Birla Group · Nagda, India",
    period: "Jun 2026 – Jul 2026",
    category: "ENTERPRISE ENGINEERING",
    summary: "Engineered critical internal web applications and optimized high-throughput database queries for 50+ engineers within Aditya Birla Group.",
    metrics: [
      { label: "API Response Speed", value: "+35%" },
      { label: "Release Stability", value: "99.2%" },
      { label: "Modules Built", value: "3+" },
      { label: "Active Engineers", value: "50+" },
    ],
    bullets: [
      "Built and maintained 3+ internal web application modules using React, Node.js, and MongoDB, supporting daily workflows for 50+ technical team members.",
      "Optimized backend query logic and database indexing across 3+ modules, reducing API response times by 35% and cutting server payload overhead.",
      "Implemented JWT authentication and role-based authorization (RBAC) across 10+ user-facing endpoints, closing critical security vulnerabilities.",
      "Partnered with a cross-functional team of 6 engineers throughout a 2-month internship, delivering key deliverables across 4 Agile sprint cycles.",
      "Executed structured testing and bug-fixing cycles across every release, resolving 30+ edge-case defects pre-deployment to achieve 99.2% release stability.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "Agile/Scrum"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Zerodha Trading Simulator",
    subtitle: "Distributed Real-Time Stock & Portfolio Trading Platform",
    category: "Full Stack FinTech",
    role: "Full-Stack Architect & Developer",
    period: "May 2026 – Jun 2026",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "Vercel"],
    bullets: [
      "Architected a distributed trading platform featuring 2 independent React frontends with a centralized Node/Express backend handling 1,000+ state updates.",
      "Engineered cross-domain JWT authentication with HTTP-only cookies, securing user sessions across 2 independently hosted domains with 0% session drops.",
      "Developed a real-time portfolio engine processing simulated trades, dynamically updating MongoDB records in under 150ms response latency.",
      "Enabled 100+ active test users to execute and track simulated trades in real-time across synchronized frontends with instant ledger sync.",
    ],
    githubUrl: "https://github.com/Tanpreet-singh2005",
    liveUrl: "https://zerodha-7xzj.vercel.app/",
    featuredMetric: { label: "Execution Latency", value: "<150ms" },
  },
  {
    title: "TanRoam",
    subtitle: "Vacation Rental & Property Booking Platform",
    category: "Full Stack Travel / Rental",
    role: "Full-Stack Developer",
    period: "Oct 2025 – Nov 2025",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "State Management", "Render"],
    bullets: [
      "Developed a full-stack vacation rental platform inspired by Airbnb, managing 3 core data models (users, properties, bookings) supporting 100+ listings.",
      "Designed responsive React.js UIs and optimized state management, boosting client-side page load speed by 30%.",
      "Streamlined property discovery and booking workflows into a unified platform, reducing average end-user booking completion time by 40%.",
      "Architected robust server endpoints and schema validations ensuring reliable property searches, booking requests, and host reservation management.",
    ],
    githubUrl: "https://github.com/Tanpreet-singh2005",
    liveUrl: "https://tanroam.onrender.com/",
    featuredMetric: { label: "Page Load Boost", value: "+30%" },
  },
  {
    title: "Job Portal Web Application",
    subtitle: "Role-Based Career Hub & Recruiter Management Engine",
    category: "Full Stack Platform",
    role: "Full-Stack Developer",
    period: "Jan 2025 – Feb 2025",
    tags: ["React.js", "Vite", "Node.js", "Express", "MongoDB", "RBAC", "Vercel"],
    bullets: [
      "Built a full-stack job portal supporting 2 distinct user roles (recruiters and applicants), efficiently processing over 50+ active job listings.",
      "Designed role-based access control (RBAC) securing 8+ critical recruiter/applicant action workflows against unauthorized access.",
      "Reduced the job posting-to-application workflow from 5 manual steps down to 2 clicks, boosting platform usability score by 25%.",
      "Implemented streamlined applicant filtering, candidate resume reviews, and instantaneous status notification updates.",
    ],
    githubUrl: "https://github.com/Tanpreet-singh2005",
    liveUrl: "https://job-portal-beige-eta.vercel.app/",
    featuredMetric: { label: "Workflow Reduction", value: "5 to 2 Clicks" },
  },
];

// ─── Tech Stack Categorized ───────────────────────────────────────────────────

export const techStackCategorized = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", tag: "Core Web", color: "#F7DF1E" },
      { name: "Java", tag: "Object-Oriented & DSA", color: "#ED8B00" },
      { name: "SQL", tag: "Query & Analytics", color: "#00758F" },
      { name: "HTML5 / CSS3", tag: "Semantic & Modern UI", color: "#E34F26" },
    ],
  },
  {
    category: "Frontend Architecture",
    skills: [
      { name: "React.js", tag: "Component Architecture", color: "#61DAFB" },
      { name: "Redux / Redux Toolkit", tag: "Global State Management", color: "#764ABC" },
      { name: "Tailwind CSS", tag: "Modern Styling", color: "#38BDF8" },
      { name: "Responsive Design", tag: "Cross-Device Systems", color: "#10B981" },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js", tag: "Event-Driven Runtime", color: "#339933" },
      { name: "Express.js", tag: "REST API Framework", color: "#FFFFFF" },
      { name: "RESTful APIs", tag: "Microservices & Endpoints", color: "#F97316" },
      { name: "JWT Auth & RBAC", tag: "Session Security & Access Control", color: "#EC4899" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", tag: "NoSQL Document DB", color: "#47A248" },
      { name: "MySQL", tag: "Relational Schema Design", color: "#4479A1" },
      { name: "AWS", tag: "Cloud Infrastructure", color: "#FF9900" },
      { name: "Vercel & Render", tag: "CI/CD & Deployment", color: "#06B6D4" },
    ],
  },
  {
    category: "Developer Tools & Practices",
    skills: [
      { name: "Git & GitHub", tag: "Version Control & Collaboration", color: "#F05032" },
      { name: "Postman", tag: "API Testing & Debugging", color: "#FF6C37" },
      { name: "VS Code", tag: "Development Environment", color: "#007ACC" },
      { name: "Agile & Sprint Cycles", tag: "Engineering Workflow", color: "#8B5CF6" },
    ],
  },
];

// ─── Key Metrics / Achievements ───────────────────────────────────────────────

export const keyAchievements: Achievement[] = [
  {
    title: "160+ DSA Problems Solved",
    subtitle: "GeeksforGeeks",
    category: "Problem Solving",
    metric: "160+",
    bullets: [
      "Rigorous practice across Arrays, Trees, Dynamic Programming, Graphs, and Heaps.",
      "Strong algorithmic foundations applied directly to system design and latency optimizations.",
    ],
  },
  {
    title: "9.29 CGPA at VIT Bhopal",
    subtitle: "B.Tech Computer Science & Engineering",
    category: "Academic Excellence",
    metric: "9.29",
    bullets: [
      "Consistently in the top tier of students in the Department of Computer Science & Engineering.",
      "Coursework in Data Structures, OOPs, DBMS, Operating Systems, Computer Networks, and Cloud Computing.",
    ],
  },
  {
    title: "3 Production-Grade Full-Stack Apps",
    subtitle: "Zerodha Simulator · TanRoam · Job Portal",
    category: "Engineering Delivery",
    metric: "3 Apps",
    bullets: [
      "Architected and deployed full-stack solutions with real-time sync, RBAC, and secure JWT token storage.",
      "Live users actively test and use deployed production instances on Vercel and Render.",
    ],
  },
  {
    title: "Aditya Birla Group SDE Internship",
    subtitle: "Grasim Industries Pvt. Ltd.",
    category: "Enterprise Experience",
    metric: "35% Faster",
    bullets: [
      "Reduced API latency by 35% and achieved 99.2% release stability across 4 Agile sprints.",
      "Delivered 3+ mission-critical modules utilized daily by 50+ technical engineers.",
    ],
  },
];
