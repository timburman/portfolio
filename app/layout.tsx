import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Aryan Kaushik — Web3 Engineer & DAO Governance",
    template: "%s | Aryan Kaushik",
  },
  description:
    "Web3 engineer specializing in DAO governance, smart contracts, and decentralized systems. Research-driven builder with production and open-source experience.",

  metadataBase: new URL("https://aryankaushik.com"),

  openGraph: {
    title: "Aryan Kaushik — Web3 Engineer & DAO Governance",
    description:
      "Web3 engineer building DAO governance systems, smart contracts, and decentralized infrastructure.",
    url: "https://aryankaushik.com",
    siteName: "Aryan Kaushik",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aryan Kaushik — Web3 Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aryan Kaushik — Web3 Engineer",
    description:
      "DAO governance, smart contracts, and Web3 research.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
