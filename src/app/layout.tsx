import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna Sharma - Full-Stack Developer & ML Engineer",
  description: "Portfolio of Krishna Sharma - Full-stack developer and ML engineer passionate about building innovative solutions. Expertise in React, Next.js, Python, Machine Learning, and Cloud Technologies.",
  keywords: "Krishna Sharma, Full Stack Developer, Machine Learning Engineer, React, Next.js, Python, AWS, Portfolio",
  authors: [{ name: "Krishna Sharma" }],
  creator: "Krishna Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnasharma.dev",
    title: "Krishna Sharma - Full-Stack Developer & ML Engineer",
    description: "Portfolio of Krishna Sharma - Full-stack developer and ML engineer passionate about building innovative solutions.",
    siteName: "Krishna Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Sharma - Full-Stack Developer & ML Engineer",
    description: "Portfolio of Krishna Sharma - Full-stack developer and ML engineer passionate about building innovative solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
