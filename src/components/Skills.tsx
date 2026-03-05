"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillLevels } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id="skills" className="bento-card h-full" ref={ref}>
        <div className="section-label mb-5">Skills</div>
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Tech Stack
        </h2>

        {/* Category groups */}
        <div className="flex flex-col gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <div
                className="text-xs mb-3 font-semibold tracking-wider"
                style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
              >
                {category.toUpperCase()}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="gradient-hr" />

        {/* Proficiency bars */}
        <div className="section-label mb-4">Proficiency</div>
        <div className="flex flex-col gap-4">
          {Object.entries(skillLevels).map(([skill, level]) => (
            <div key={skill}>
              <div className="flex justify-between items-center mb-1.5">
                <span
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {skill}
                </span>
                <span
                  className="text-xs font-bold"
                  style={{ color: "var(--neon)" }}
                >
                  {level}%
                </span>
              </div>
              <div className="stat-bar-bg">
                <motion.div
                  className="stat-bar-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
