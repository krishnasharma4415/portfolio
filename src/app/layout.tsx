import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/layout/ClientProviders";

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
});

export const metadata: Metadata = {
  title: "Krishna Sharma - Full-Stack Developer & ML Engineer",
  description: "Portfolio of Krishna Sharma - Full-stack developer and ML engineer passionate about building innovative solutions. Expertise in React, Next.js, Python, Machine Learning, and Cloud Technologies.",
  keywords: "Krishna Sharma, Full Stack Developer, Machine Learning Engineer, React, Next.js, Python, AWS, Portfolio, SRM University, Cybersecurity, Data Science",
  authors: [{ name: "Krishna Sharma" }],
  creator: "Krishna Sharma",
  metadataBase: new URL("https://krishnasharma.dev"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnasharma.dev",
    title: "Krishna Sharma - Full-Stack Developer & ML Engineer",
    description: "Portfolio of Krishna Sharma - Full-stack developer and ML engineer passionate about building innovative solutions.",
    siteName: "Krishna Sharma Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Krishna Sharma - Full-Stack Developer & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Sharma - Full-Stack Developer & ML Engineer",
    description: "Portfolio of Krishna Sharma - Full-stack developer and ML engineer passionate about building innovative solutions.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Krishna Portfolio" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground magnetic-cursor`}
      >
        <ClientProviders />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
