import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

const projectData: Record<string, any> = {
  "defi-governance-protocol": {
    name: "DeFi Governance Protocol",
    tagline: "Decentralized governance with token-weighted voting",
    description:
      "A comprehensive DAO governance system that enables token holders to participate in protocol decisions through secure, transparent, and automated processes.",
    fullDescription:
      "This project implements a complete decentralized autonomous organization (DAO) governance framework. Token holders can create proposals, vote with their token weight, and automatically execute approved decisions on-chain. The system includes advanced features like quadratic voting to prevent whale dominance, delegation mechanisms for proxy voting, and timelock contracts for security.",
    technologies: ["Solidity", "Hardhat", "OpenZeppelin", "Ethers.js", "React", "Next.js", "TypeScript"],
    features: [
      "Token-weighted voting with quadratic mechanisms",
      "Proposal creation and automated execution",
      "Vote delegation and proxy voting",
      "Timelock security for critical operations",
      "On-chain proposal history and audit trail",
      "Gas-optimized smart contracts",
    ],
    role: "Lead Smart Contract Developer",
    timeline: "6 months",
    github: "https://github.com/yourusername/defi-governance",
    demo: "https://defi-governance-demo.vercel.app",
    image: "/blockchain-governance-dashboard.jpg",
  },
  "multi-sig-treasury-management": {
    name: "Multi-Sig Treasury Management",
    tagline: "Secure treasury operations with multi-signature approval",
    description:
      "A battle-tested multi-signature wallet system designed for DAOs and organizations to manage treasury funds with enhanced security and transparency.",
    fullDescription:
      "This treasury management system provides enterprise-grade security for managing digital assets. Multiple signers must approve transactions before execution, with customizable thresholds and role-based permissions. The platform includes time-locked transactions for added security, emergency recovery mechanisms, and comprehensive audit logging for compliance.",
    technologies: ["Solidity", "Gnosis Safe", "Web3.js", "Next.js", "TailwindCSS", "Supabase"],
    features: [
      "Multi-signature transaction approval",
      "Time-locked transactions for security",
      "Role-based access control (RBAC)",
      "Emergency recovery mechanisms",
      "Transaction batching for gas efficiency",
      "Comprehensive audit logs",
    ],
    role: "Full-Stack Blockchain Developer",
    timeline: "4 months",
    github: "https://github.com/yourusername/multisig-treasury",
    demo: "https://multisig-treasury-demo.vercel.app",
    image: "/cryptocurrency-wallet-dashboard.jpg",
  },
  "nft-staking-platform": {
    name: "NFT Staking Platform",
    tagline: "Earn rewards by staking your NFTs",
    description:
      "An innovative NFT staking protocol that allows users to stake their NFTs and earn token rewards based on rarity, collection, and staking duration.",
    fullDescription:
      "This platform revolutionizes NFT utility by enabling holders to stake their assets and earn passive rewards. The protocol uses dynamic reward algorithms that factor in NFT rarity, collection floor price, and staking duration. Users can employ composable staking strategies, combining multiple NFTs for bonus multipliers. The system is fully non-custodial and integrates with major NFT marketplaces.",
    technologies: ["Solidity", "ERC-721", "Chainlink", "React", "Wagmi", "RainbowKit", "IPFS"],
    features: [
      "Dynamic reward distribution based on rarity",
      "Rarity-based reward multipliers",
      "Composable staking strategies",
      "Multi-collection support",
      "Non-custodial staking mechanism",
      "Real-time reward tracking",
    ],
    role: "Blockchain Developer & Protocol Designer",
    timeline: "5 months",
    github: "https://github.com/yourusername/nft-staking",
    demo: "https://nft-staking-demo.vercel.app",
    image: "/nft-digital-art-staking.jpg",
  },
}

export function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({
    id: id,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const project = projectData[id];

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#212121]">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-4xl">
        <div className="flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/40 rounded-full px-6 py-3">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <Link href="/" className="text-2xl font-bold text-white">
            AK
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">{project.name}</h1>
            <p className="text-xl text-white/60 mb-6">{project.tagline}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild className="bg-[#fa375e] hover:bg-[#fa375e]/90 text-white border-none">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12 rounded-lg overflow-hidden border border-white/20">
            <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-auto" />
          </div>

          {/* Description */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-white/70 leading-relaxed mb-4">{project.description}</p>
            <p className="text-white/70 leading-relaxed">{project.fullDescription}</p>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <Badge key={index} className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="text-[#376efa] mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Role & Timeline */}
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black/40 border border-white/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Role</h3>
              <p className="text-white/70">{project.role}</p>
            </div>
            <div className="bg-black/40 border border-white/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
              <p className="text-white/70">{project.timeline}</p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/#portfolio"
              className="inline-flex items-center text-white hover:text-[#376efa] transition-colors font-medium group text-lg"
            >
              View More Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
