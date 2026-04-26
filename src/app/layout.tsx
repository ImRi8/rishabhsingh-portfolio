import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishabh Singh - Full-Stack Builder & Founder",
  description: "Full-stack builder crafting AI-powered applications, scalable systems, and innovative SaaS products. Proven track record shipping products with real users, deep technical expertise, and entrepreneurial execution.",
  keywords: "full-stack developer, software engineer, AI integration, SaaS, TypeScript, React, Next.js",
  authors: [{ name: "Rishabh Singh" }],
  openGraph: {
    title: "Rishabh Singh - Software Developer & Entrepreneur",
    description: "Building innovative solutions for real-world problems",
    url: "https://rishabhsingh.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Singh - Full-Stack Developer",
    description: "AI-powered applications & scalable systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
