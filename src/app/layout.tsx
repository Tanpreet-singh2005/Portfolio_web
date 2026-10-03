import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarya Shrivaastava — Full Stack Engineer & AI Builder",
  description:
    "Portfolio of Aarya Shrivaastava — Full Stack Engineer Intern specializing in AI, backend systems, and scalable APIs. CSE @ VIT Bhopal.",
  openGraph: {
    title: "Aarya Shrivaastava — Full Stack Engineer & AI Builder",
    description:
      "Portfolio of Aarya Shrivaastava — Full Stack Engineer Intern specializing in AI, backend systems, and scalable APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Subtle film-grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
