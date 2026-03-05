"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id="projects" ref={ref}>
      <div className="section-label mb-5">Projects</div>
      <h2
        className="text-2xl font-bold mb-7"
        style={{ color: "var(--text-primary)" }}
      >
        What I&apos;ve Built
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bento-card"
            style={{
              borderColor: project.highlight
                ? "rgba(57,255,20,0.25)"
                : "var(--border)",
            }}
          >
            {project.highlight && (
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(57,255,20,0.6), transparent)",
                }}
              />
            )}

            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3
                    className="font-bold text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.name}
                  </h3>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 10px",
                      borderRadius: "999px",
                      fontSize: "11px",
                      fontWeight: 500,
                      background:
                        project.status === "In Progress"
                          ? "rgba(57,255,20,0.12)"
                          : "rgba(255,255,255,0.05)",
                      color:
                        project.status === "In Progress"
                          ? "var(--neon)"
                          : "var(--text-muted)",
                      border: `1px solid ${
                        project.status === "In Progress"
                          ? "rgba(57,255,20,0.2)"
                          : "rgba(255,255,255,0.08)"
                      }`,
                      whiteSpace: "nowrap",
                    }}>
                    {project.status}
                  </span>
                </div>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--neon)", opacity: 0.7 }}
                >
                  {project.tagline}
                </p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", gap: "0.5rem" }}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--neon)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                    aria-label="GitHub"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--neon)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                    aria-label="Demo"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <p
              className="text-xs leading-relaxed mb-3"
              style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
            >
              {project.description}
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "1rem", listStyle: "none", padding: 0 }}>
              {project.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{ color: "var(--text-secondary)", fontSize: "12px", display: "flex", alignItems: "flex-start", gap: "8px" }}
                >
                  <span style={{ color: "var(--neon)", flexShrink: 0 }}>✦</span>
                  {b}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "0.25rem" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag" style={{ fontSize: "10px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
