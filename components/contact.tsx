"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  {
    name: "X",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    url: "#",
  },
  { name: "Email", icon: Mail, url: "mailto:hello@aryankaushik.dev" },
]

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 md:py-24 lg:py-32 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center text-balance">
          {"Let's "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-[#fa375e] px-3 py-1 rounded">Connect</span>
            <span className="absolute inset-0 bg-[#fa375e] blur-2xl opacity-40 -z-10" />
          </span>
        </h2>

        <p className="text-lg text-white/70 text-center mb-12 max-w-2xl mx-auto text-pretty">
          I'm always interested in hearing about new projects, opportunities, and collaborations in the Web3 space. Feel
          free to reach out through any of these channels.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <a
                key={idx}
                href={link.url}
                className="w-12 h-12 rounded-full border border-white/40 bg-white/5 hover:bg-white/10 hover:border-white/60 flex items-center justify-center transition-all group"
                aria-label={link.name}
              >
                <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#fa375e] hover:bg-[#fa375e]/90 text-white font-bold transition-colors">
            See Full Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
