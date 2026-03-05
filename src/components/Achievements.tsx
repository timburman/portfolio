"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bento-card h-full" ref={ref}>
      <div className="section-label mb-5">Achievements</div>
      <h2
        className="text-xl font-bold mb-6"
        style={{ color: "var(--text-primary)" }}
      >
        Recognition
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              padding: "0.75rem",
              borderRadius: "12px",
              background: "rgba(57,255,20,0.02)",
              border: "1px solid rgba(57,255,20,0.06)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(57,255,20,0.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(57,255,20,0.02)")
            }
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <div>
              <h3
                className="font-semibold text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs mt-0.5 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
