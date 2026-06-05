import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Aarya Shrivaastava | B.Tech CSE Portfolio",
  description:
    "Portfolio of Aarya Shrivaastava — Pre-final year B.Tech CSE student at VIT Bhopal. Proficient in C, C++, Python & OOP. HackerRank 4⭐ in C++. PR & Outreach Lead at AI Club. Open source contributor.",
  keywords: [
    "Aarya Shrivaastava",
    "VIT Bhopal",
    "CSE student",
    "C++ developer",
    "Python programmer",
    "portfolio",
    "software engineer",
    "open source",
  ],
  openGraph: {
    title: "Aarya Shrivaastava | B.Tech CSE Portfolio",
    description:
      "Pre-final year CSE student at VIT Bhopal — HackerRank 4⭐ C++, Open Source Contributor, AI Club PR Lead.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${firaCode.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
