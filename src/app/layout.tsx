import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://aryankaushik.com";
const FULL_NAME = "Aryan Kaushik";
const TITLE = "Aryan Kaushik — Smart Contract Engineer";
const DESCRIPTION =
  "Smart Contract Engineer specializing in EVM blockchain architecture, Solidity, Foundry, OpenZeppelin, gas optimization, and Python data systems. Available for full-time roles and freelance projects.";

export const viewport: Viewport = {
  themeColor: "#39ff14",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Aryan Kaushik",
    "Smart Contract Engineer",
    "Solidity Developer",
    "Foundry",
    "Hardhat",
    "EVM",
    "Ethereum",
    "Web3",
    "Blockchain Architecture",
    "DeFi",
    "OpenZeppelin",
    "Gas Optimization",
    "Python",
    "TypeScript",
    "Portfolio",
    "New Delhi",
    "India",
    "Hire Smart Contract Developer",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: "Technology",
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
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: FULL_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Smart Contract Engineer Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@aryankaushik",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your Google Search Console verification token here when ready:
    // google: "your-google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.variable} suppressHydrationWarning>
      <body className="antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
