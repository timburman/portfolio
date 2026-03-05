"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/portfolio";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bento-card h-full" ref={ref}>
      <div className="section-label mb-5">Education</div>
      <h2
        className="text-xl font-bold mb-6"
        style={{ color: "var(--text-primary)" }}
      >
        Academic Background
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            style={{
              padding: "1rem",
              borderRadius: "12px",
              background: "rgba(57,255,20,0.03)",
              border: "1px solid rgba(57,255,20,0.08)",
            }}
          >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <div>
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--neon)", opacity: 0.8 }}
                >
                  {edu.institution}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {edu.location}
                </p>
              </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {edu.period}
                </div>
                <div
                  className="text-xs font-bold mt-1"
                  style={{ color: "var(--neon)" }}
                >
                  {edu.cgpa}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
