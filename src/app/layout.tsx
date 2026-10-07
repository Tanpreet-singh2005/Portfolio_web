import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanpreet Singh — Full-Stack Software Engineer",
  description:
    "Portfolio of Tanpreet Singh — Full-Stack Software Engineer & CS undergraduate (CGPA 9.29) at VIT Bhopal. Ex-Software Developer Intern at Grasim Industries. Building scalable web platforms with React, Node.js, Express, MongoDB, and AWS.",
  openGraph: {
    title: "Tanpreet Singh — Full-Stack Software Engineer",
    description:
      "Explore production-grade full-stack projects: Zerodha Trading Simulator, TanRoam vacation rentals, and Job Portal platform. Scalable MERN & AWS engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#080C14] text-[#F8FAFC] antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Subtle noise grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
