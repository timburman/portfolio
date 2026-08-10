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
const TITLE = "Aryan Kaushik — Protocol Engineer & Python Systems Developer";
const DESCRIPTION =
  "Official portfolio of Aryan Kaushik — Protocol Engineer and Python Systems Developer. Specialized in EVM architecture, gas optimization, smart contract security, and robust Python backends. Currently Software Engineer Intern at IRC Engineering Services.";

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
  applicationName: "Aryan Kaushik Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Aryan Kaushik",
    "Aryan Kaushik Portfolio",
    "Aryan Kaushik Resume",
    "Aryan Kaushik Protocol Engineer",
    "Aryan Kaushik Smart Contract Engineer",
    "Aryan Kaushik Python Developer",
    "Aryan Kaushik Blockchain Engineer",
    "Aryan Kaushik IRC Engineering Services",
    "Aryan Kaushik VIPS",
    "Aryan Kaushik Amity",
    "0xtimbur",
    "timburman",
    "Solidity Developer India",
    "Foundry",
    "Hardhat",
    "EVM Gas Optimization",
    "Ethereum Smart Contracts",
    "Web3 Protocol Engineer",
    "Python Automation Pipelines",
    "FastAPI Developer",
    "Reactive Governance DAO",
    "Chronos Vault",
    "Xandeum Network Explorer",
    "New Delhi Software Engineer",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aryan Kaushik Portfolio",
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Aryan",
    lastName: "Kaushik",
    username: "0xtimbur",
    gender: "male",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Protocol Engineer & Python Systems Developer`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@0xtimbur",
    site: "@0xtimbur",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-token",
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
