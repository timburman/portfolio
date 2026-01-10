import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#212121]">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-4xl">
        <div className="flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/40 rounded-full px-6 py-3">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <span className="text-2xl font-bold text-white">AK</span>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              {project.name}
            </h1>
            <p className="text-xl text-white/60 mb-6">{project.tagline}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.live && (
                <Button
                  asChild
                  className="bg-[#fa375e] hover:bg-[#fa375e]/90 text-white border-none"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}

              {project.github && (
                <Button
                  asChild
                  className="bg-transparent border border-white/40 text-white hover:bg-white/10"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}

              {project.paper && (
                <Button
                  asChild
                  className="bg-transparent border border-white/40 text-white hover:bg-white/10"
                >
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Research Paper
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Image / Visual */}
          <div className="mb-12 rounded-lg overflow-hidden border border-white/20 bg-black/40">
            <img
              src={project.images[0]?.src || "/placeholder.svg"}
              alt={project.name}
              className="w-full h-auto"
            />
          </div>

          {/* Description */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Overview
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-white/70 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Key Features
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="text-[#376efa] mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Role & Timeline */}
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black/40 border border-white/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Role
              </h3>
              <p className="text-white/70">{project.role}</p>
            </div>
            <div className="bg-black/40 border border-white/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Timeline
              </h3>
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
