const skills = [
  { name: "Solidity", category: "primary", size: "large" },
  { name: "Ethereum", category: "primary", size: "medium" },
  { name: "Smart Contracts", category: "primary", size: "large" },
  { name: "DAO Governance", category: "specialization", size: "large" },
  { name: "Web3.js", category: "primary", size: "small" },
  { name: "Ethers.js", category: "primary", size: "small" },
  { name: "Next.js", category: "framework", size: "medium" },
  { name: "React", category: "framework", size: "medium" },
  { name: "TypeScript", category: "framework", size: "medium" },
  { name: "Hardhat", category: "tool", size: "small" },
  { name: "Foundry", category: "tool", size: "small" },
  { name: "DeFi", category: "specialization", size: "medium" },
  { name: "NFTs", category: "specialization", size: "small" },
  { name: "OpenZeppelin", category: "tool", size: "small" },
  { name: "IPFS", category: "tool", size: "small" },
  { name: "The Graph", category: "tool", size: "small" },
  { name: "Security Auditing", category: "specialization", size: "large" },
  { name: "Token Economics", category: "specialization", size: "medium" },
]

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 md:py-24 lg:py-32 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center text-balance">
          {"Technologies & "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-[#fa375e] px-3 py-1 rounded">Skills</span>
            <span className="absolute inset-0 bg-[#fa375e] blur-2xl opacity-40 -z-10" />
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[80px]">
          {skills.map((skill, idx) => {
            const sizeClasses = {
              small: "col-span-1 row-span-1",
              medium: "col-span-2 row-span-1",
              large: "col-span-2 row-span-2",
            }

            const categoryColors = {
              primary: "border-[#376efa]/60 bg-[#376efa]/10 hover:bg-[#376efa]/20",
              framework: "border-[#fa375e]/60 bg-[#fa375e]/10 hover:bg-[#fa375e]/20",
              tool: "border-white/40 bg-white/5 hover:bg-white/10",
              specialization: "border-[#fa375e]/60 bg-[#fa375e]/10 hover:bg-[#fa375e]/20",
            }

            return (
              <div
                key={idx}
                className={`${sizeClasses[skill.size as keyof typeof sizeClasses]} ${
                  categoryColors[skill.category as keyof typeof categoryColors]
                } border-2 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-default`}
              >
                <span className="text-white font-semibold text-center px-4 text-sm md:text-base group-hover:scale-110 transition-transform">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
