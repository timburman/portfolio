"use client"

import { Button } from "@/components/ui/button"
import DeveloperIllustration from "./illustrations/DeveloperIllustration"

export function Hero() {
  return (
    <section
      id="home"
      className="
        px-4
        pt-24 pb-24
        sm:pt-28 sm:pb-28
        md:pt-20 md:pb-32
        lg:pt-16 lg:pb-32
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight text-balance">
              {"I'm "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-[#fa375e] px-3 py-1 rounded">
                  Aryan Kaushik
                </span>
                <span className="absolute inset-0 bg-[#fa375e] blur-2xl opacity-40 -z-10" />
              </span>
              {", a "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-[#376efa] px-3 py-1 rounded">
                  Web3 Engineer
                </span>
                <span className="absolute inset-0 bg-[#376efa] blur-2xl opacity-40 -z-10" />
              </span>
              {" building DAO governance & smart contracts"}
            </h1>

            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Building decentralized infrastructure and robust smart contract
              systems that power the future of Web3. Specializing in DAO
              governance mechanisms and secure blockchain solutions.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-medium"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Portfolio
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/5 font-medium bg-transparent"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex items-center justify-end">
            <DeveloperIllustration className="w-full max-w-md text-white/80" />
          </div>
        </div>
      </div>
    </section>
  )
}
