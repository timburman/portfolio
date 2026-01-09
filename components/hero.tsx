"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="px-4 py-20 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance">
            {"I'm "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-[#fa375e] px-3 py-1 rounded">Aryan Kaushik</span>
              <span className="absolute inset-0 bg-[#fa375e] blur-2xl opacity-40 -z-10" />
            </span>
            {", a "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-[#376efa] px-3 py-1 rounded">Web3 Engineer</span>
              <span className="absolute inset-0 bg-[#376efa] blur-2xl opacity-40 -z-10" />
            </span>
            {" building DAO governance & smart contracts"}
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto text-pretty">
            Building decentralized infrastructure and robust smart contract systems that power the future of Web3.
            Specializing in DAO governance mechanisms and secure blockchain solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-medium"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/5 font-medium bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
