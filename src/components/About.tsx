"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  { label: "Focus", value: "Blockchain & Data Systems" },
  { label: "Chain", value: "EVM Ecosystem" },
  { label: "Status", value: "Open to Opportunities" },
  { label: "Location", value: "New Delhi, India" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id="about" className="bento-card" ref={ref}>
        <div className="section-label mb-5">About</div>

        <div className="grid-2">
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Building on-chain.
              <br />
              <span style={{ color: "var(--neon)" }}>Ship first.</span>
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}
            >
              {personalInfo.summary}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", alignItems: "start" }}>
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                style={{
                  padding: "0.875rem",
                  borderRadius: "12px",
                  background: "rgba(57,255,20,0.03)",
                  border: "1px solid rgba(57,255,20,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                <span
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{
                    color:
                      item.label === "Status"
                        ? "var(--neon)"
                        : "var(--text-primary)",
                  }}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  );
}
