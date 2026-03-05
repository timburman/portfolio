"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id="experience" className="bento-card h-full" ref={ref}>
        <div className="section-label mb-5">Experience</div>
        <h2
          className="text-2xl font-bold mb-7"
          style={{ color: "var(--text-primary)" }}
        >
          Work History
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-4"
            style={{ display: "flex", gap: "1rem" }}
            >
              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px" }}>
                <div className="timeline-dot" />
                {i < experience.length - 1 && (
                  <div
                    className="w-px flex-1 min-h-8 my-1"
                    style={{
                      background: "rgba(57,255,20,0.15)",
                      marginTop: "6px",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < experience.length - 1 ? "2.5rem" : "0.5rem", flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "4px" }}>
                  <div>
                    <h3
                      className="font-bold text-base"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {job.company}
                    </h3>
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: "var(--neon)", opacity: 0.85 }}
                    >
                      {job.role}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div
                      className="text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {job.period}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {job.location}
                    </div>
                  </div>
                </div>

                <ul style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none", padding: 0 }}>
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      style={{ color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "12px", display: "flex", alignItems: "flex-start", gap: "8px" }}
                    >
                      <span
                        style={{ color: "var(--neon)", flexShrink: 0, marginTop: "3px" }}
                      >
                        ›
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "0.75rem" }}>
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: "10px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  );
}
