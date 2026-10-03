"use client";

import FadeUp from "@/components/FadeUp";

type SkillType = {
  no: string;
  symbol: string;
  name: string;
  sub?: string;
  icon?: any; 
  iconImg: string;
  type: "language" | "ai" | "backend" | "database" | "tools";
  col: number;
  row: number;
  iconColor?: string;
};

const skills: SkillType[] = [
  // ROW 1
  { no: "01", symbol: "Py", name: "Python", iconImg: "/tech-stack/01-python.svg", type: "language", col: 1, row: 1 },
  { no: "02", symbol: "Cpp", name: "C++", iconImg: "/tech-stack/02-cpp.svg", type: "language", col: 2, row: 1 },
  { no: "03", symbol: "C", name: "C", iconImg: "/tech-stack/03-c.svg", type: "language", col: 3, row: 1 },
  { no: "04", symbol: "Ja", name: "Java", sub: "(Intermediate)", iconImg: "/tech-stack/04-java.svg", type: "language", col: 4, row: 1 },
  { no: "05", symbol: "SQL", name: "SQL", iconImg: "/tech-stack/05-sql.svg", type: "language", col: 5, row: 1 },
  
  { no: "06", symbol: "Cn", name: "CNN", iconImg: "/tech-stack/06-cnn.svg", type: "ai", col: 9, row: 1 },
  { no: "07", symbol: "Ls", name: "LSTM", iconImg: "/tech-stack/07-lstm.svg", type: "ai", col: 10, row: 1 },
  { no: "08", symbol: "Gr", name: "GRU", iconImg: "/tech-stack/08-gru.svg", type: "ai", col: 11, row: 1 },

  // ROW 2
  { no: "09", symbol: "Fa", name: "FastAPI", iconImg: "/tech-stack/09-fastapi.svg", type: "backend", col: 1, row: 2 },
  { no: "10", symbol: "Fl", name: "Flask", iconImg: "/tech-stack/10-flask.svg", type: "backend", col: 2, row: 2 },
  { no: "11", symbol: "Lg", name: "Langflow", iconImg: "/tech-stack/11-langflow.svg", type: "backend", col: 3, row: 2 },
  { no: "12", symbol: "Co", name: "Composio", iconImg: "/tech-stack/12-composio.svg", type: "backend", col: 4, row: 2 },
  { no: "13", symbol: "Po", name: "Postman", iconImg: "/tech-stack/13-postman.svg", type: "backend", col: 5, row: 2 },
  { no: "14", symbol: "Api", name: "API Integration", iconImg: "/tech-stack/14-api-integration.svg", type: "backend", col: 6, row: 2 },

  // ROW 3
  { no: "15", symbol: "Pg", name: "PostgreSQL", iconImg: "/tech-stack/15-postgresql.svg", type: "database", col: 1, row: 3 },
  { no: "16", symbol: "My", name: "MySQL", iconImg: "/tech-stack/16-mysql.svg", type: "database", col: 2, row: 3 },
  { no: "17", symbol: "Aw", name: "AWS", sub: "(S3, EC2, IAM)", iconImg: "/tech-stack/17-aws.svg", type: "database", col: 3, row: 3 },
  { no: "18", symbol: "Gc", name: "GCP", iconImg: "/tech-stack/18-gcp.svg", type: "database", col: 4, row: 3 },
  { no: "19", symbol: "Et", name: "ETL", iconImg: "/tech-stack/19-etl.svg", type: "database", col: 5, row: 3 },
  
  { no: "20", symbol: "Gi", name: "Git", iconImg: "/tech-stack/20-git.svg", type: "tools", col: 6, row: 3 },
  { no: "21", symbol: "Gh", name: "GitHub", iconImg: "/tech-stack/21-github.svg", type: "tools", col: 7, row: 3 },
  { no: "22", symbol: "Vs", name: "VS Code", iconImg: "/tech-stack/22-vscode.svg", type: "tools", col: 8, row: 3 },
  { no: "23", symbol: "Ve", name: "Vercel", iconImg: "/tech-stack/23-vercel.svg", type: "tools", col: 9, row: 3 },

  // ROW 4
  { no: "24", symbol: "Do", name: "Docker", iconImg: "/tech-stack/24-docker.svg", type: "tools", col: 7, row: 4 },
  { no: "25", symbol: "Cd", name: "Codex", iconImg: "/tech-stack/25-codex.svg", type: "tools", col: 8, row: 4 },
  { no: "26", symbol: "Cu", name: "Cursor", iconImg: "/tech-stack/26-cursor.svg", type: "tools", col: 9, row: 4 },
  { no: "27", symbol: "Ag", name: "Antigravity", iconImg: "/tech-stack/27-agy.svg", type: "tools", col: 10, row: 4 },
  { no: "28", symbol: "Op", name: "OpenCode", iconImg: "/tech-stack/28-opencode.svg", type: "tools", col: 11, row: 4 },
];

const colors = {
  language: { bg: "rgba(244, 224, 183, 0.42)", border: "rgba(198, 166, 111, 0.28)", accent: "#d5ae61" },
  backend: { bg: "rgba(207, 222, 243, 0.42)", border: "rgba(137, 165, 204, 0.28)", accent: "#6d9ee8" },
  ai: { bg: "rgba(247, 207, 207, 0.42)", border: "rgba(210, 145, 155, 0.30)", accent: "#d68191" },
  database: { bg: "rgba(216, 230, 201, 0.42)", border: "rgba(145, 175, 125, 0.28)", accent: "#86a96f" },
  tools: { bg: "rgba(226, 211, 237, 0.42)", border: "rgba(168, 140, 190, 0.28)", accent: "#9b7ab1" },
};

function SkillCard({ skill, className = "" }: { skill: SkillType, className?: string }) {
  const Icon = skill.icon;
  const color = colors[skill.type];

  return (
    <div
      className={`group relative rounded-[18px] border p-5 transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: color.bg,
        borderColor: color.border,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 10px 30px rgba(70,45,35,0.05)",
        height: "148px",
        minHeight: "148px",
        maxHeight: "148px",
        width: "100%",
        maxWidth: "185px", // allow up to 185px
        margin: "0 auto",
      }}
    >
      <span
        className="absolute left-5 top-4 text-[12px] tracking-[0.08em]"
        style={{ color: color.accent, fontFamily: "var(--font-mono, monospace)" }}
      >
        {skill.no}
      </span>

      <div className="absolute right-5 top-5 opacity-90 transition-transform duration-300 group-hover:scale-110">
        {skill.iconImg ? (
          <img 
            src={skill.iconImg} 
            alt={`${skill.name} logo`} 
            style={{ width: "32px", height: "32px", objectFit: "contain" }} 
            className="tech-logo"
          />
        ) : (
          Icon && <Icon size={32} strokeWidth={1.5} color={skill.iconColor || color.accent} />
        )}
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <div
          className="text-[31px] leading-none tracking-[-0.04em]"
          style={{ color: "#251b19", fontFamily: "var(--font-display, serif)" }}
        >
          {skill.symbol}
        </div>

        <div className="mt-2.5 font-sans text-[13px] leading-tight text-[#5f5550]">
          {skill.name}

          {skill.sub && (
            <span className="block mt-0.5 text-[10px] text-[#877c75]">
              {skill.sub}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function LegendItem({ type, label }: { type: keyof typeof colors; label: string }) {
  const color = colors[type];

  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap">
      <span
        className="h-3 w-3 rounded-full border"
        style={{
          background: color.bg,
          borderColor: color.accent,
        }}
      />
      <span 
        className="text-[10px] uppercase tracking-[0.16em] text-ink/70"
        style={{ fontFamily: "var(--font-mono, monospace)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-[160px] pb-32"
    >
      <div 
        className="mx-auto"
        style={{ width: "min(92vw, 1500px)" }}
      >
        <FadeUp>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div 
                className="mb-5 text-[11px] uppercase tracking-[0.28em] text-deep-brown/60"
                style={{ fontFamily: "var(--font-mono, monospace)" }}
              >
                02 · Skills
              </div>

              <h2 
                className="text-[58px] leading-none tracking-[-0.055em] text-ink md:text-[68px]"
                style={{ fontFamily: "var(--font-display, serif)", lineHeight: "0.95" }}
              >
                Tech Stack
              </h2>
            </div>

            <div 
              className="hidden pb-2 text-[11px] uppercase tracking-[0.28em] text-deep-brown/50 xl:block"
              style={{ fontFamily: "var(--font-mono, monospace)" }}
            >
              Technologies I build with
              <span className="ml-3">—</span>
            </div>
          </div>
        </FadeUp>

        {/* Desktop Grid (>= 1200px) */}
        <div 
          className="hidden xl:grid gap-3 items-start"
          style={{ 
            gridTemplateColumns: "repeat(11, minmax(0, 1fr))",
            alignItems: "start",
          }}
        >
          {skills.map((skill) => (
            <FadeUp 
              key={skill.no} 
              delay={0.05 + (skill.row * 0.1) + (skill.col * 0.02)}
              className="w-full flex"
              style={{ 
                gridColumnStart: skill.col,
                gridRowStart: skill.row,
                alignSelf: "start",
              }}
            >
              <SkillCard skill={skill} />
            </FadeUp>
          ))}
          
        </div>

        {/* Laptop Grid (900px - 1199px) */}
        <div className="hidden lg:grid xl:hidden grid-cols-8 gap-3 items-start">
          {skills.map((skill) => {
            // Compress 11 cols to 8 cols dynamically for laptop
            let newCol = skill.col;
            let newRow = skill.row;
            if (skill.col > 8) {
              newCol = skill.col - 3;
              newRow = skill.row + (skill.col % 2 === 0 ? 1 : 0);
            }
            return (
              <FadeUp 
                key={skill.no + "-laptop"} 
                delay={0.05 + (newRow * 0.1) + (newCol * 0.02)}
                className="w-full flex"
                style={{ alignSelf: "start" }}
              >
                <SkillCard skill={skill} />
              </FadeUp>
            );
          })}
        </div>

        {/* Tablet / Mobile Grid (< 900px) */}
        <div className="grid lg:hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 items-start">
          {skills.map((skill, i) => (
            <FadeUp key={skill.no + "-mobile"} delay={0.05 + (i * 0.02)} className="w-full flex" style={{ alignSelf: "start" }}>
              <SkillCard skill={skill} />
            </FadeUp>
          ))}
        </div>
        
        {/* Legend */}
        <FadeUp delay={0.4} className="mt-14 flex items-start">
          <div
            className="inline-flex flex-wrap items-center gap-x-7 gap-y-3 rounded-full border px-7 py-4"
            style={{
              background: "rgba(255,255,255,0.28)",
              borderColor: "rgba(170,145,120,0.20)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 10px 35px rgba(75,50,35,0.05)",
            }}
          >
            <LegendItem type="language" label="Languages" />
            <LegendItem type="backend" label="Backend & APIs" />
            <LegendItem type="ai" label="AI / ML" />
            <LegendItem type="database" label="Databases & Cloud" />
            <LegendItem type="tools" label="Tools" />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
