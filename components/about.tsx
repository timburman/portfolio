export function About() {
  return (
    <section id="about" className="px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center text-balance">
          {"About "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-[#376efa] px-3 py-1 rounded">Me</span>
            <span className="absolute inset-0 bg-[#376efa] blur-2xl opacity-40 -z-10" />
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p className="text-pretty">
              I'm a passionate Web3 engineer with a deep focus on building decentralized systems that empower
              communities and organizations. My journey in blockchain development has led me to specialize in DAO
              governance structures and smart contract architecture.
            </p>

            <p className="text-pretty">
              With extensive experience in Solidity development and a strong understanding of blockchain security
              principles, I create robust, audited smart contracts that handle real-world financial transactions and
              governance decisions.
            </p>

            <p className="text-pretty">
              When I'm not coding, I contribute to open-source blockchain projects and write technical articles to help
              others navigate the evolving Web3 landscape.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 max-w-full rounded-2xl overflow-hidden border-2 border-white/40 bg-gradient-to-br from-[#fa375e]/20 to-[#376efa]/20">
              <img src="/images/image.png" alt="Developer illustration" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
