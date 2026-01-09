"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "defi-governance-protocol",
    name: "DeFi Governance Protocol",
    description:
      "Built a comprehensive DAO governance system with token-weighted voting, proposal creation, and automated execution.",
  },
  {
    id: "multi-sig-treasury-management",
    name: "Multi-Sig Treasury Management",
    description:
      "Developed a secure multi-signature wallet system for treasury management with time-locked transactions and role-based access control.",
  },
  {
    id: "nft-staking-platform",
    name: "NFT Staking Platform",
    description:
      "Created an NFT staking protocol with dynamic reward distribution, rarity-based multipliers, and composable staking strategies.",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12 text-center text-balance">
          {"Take a look at my "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-[#376efa] px-3 py-1 rounded">project portfolio</span>
            <span className="absolute inset-0 bg-[#376efa] blur-2xl opacity-40 -z-10" />
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`}>
              <Card className="bg-black/40 border-white/20 backdrop-blur-sm overflow-hidden group hover:border-white/40 transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center justify-between group-hover:text-white/90 transition-colors">
                    <span>{project.name}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 leading-relaxed text-sm">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {/* </CHANGE> */}

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-white hover:text-[#376efa] transition-colors font-medium group text-lg"
          >
            View Full Portfolio
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
