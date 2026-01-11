"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"

export function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12 text-center text-balance">
          {"Take a look at my "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-[#376efa] px-3 py-1 rounded">
              project portfolio
            </span>
            <span className="absolute inset-0 bg-[#376efa] blur-2xl opacity-40 -z-10" />
          </span>
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="bg-black/40 border-white/20 backdrop-blur-sm overflow-hidden group hover:border-white/40 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-white text-xl flex items-start justify-between gap-3 group-hover:text-white/90 transition-colors">
                    <span>{project.name}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </CardTitle>

                  <p className="text-white/50 text-sm">
                    {project.year} • {project.category}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <p className="text-white/60 leading-relaxed text-sm">
                    {project.shortDescription}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-white/10 text-white border-white/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/#portfolio"
            className="inline-flex items-center text-white hover:text-[#376efa] transition-colors font-medium group text-lg"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
