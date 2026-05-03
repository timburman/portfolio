"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data/portfolio";
import Modal from "./ui/Modal";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedAchievements = showAll ? achievements : achievements.slice(0, 3);

  return (
    <div className="bento-card h-full" ref={ref}>
      <div className="section-label mb-5">Achievements</div>
      <h2
        className="text-xl font-bold mb-6"
        style={{ color: "var(--text-primary)" }}
      >
        Recognition & Papers
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {displayedAchievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              padding: "0.75rem",
              borderRadius: "12px",
              background: "rgba(57,255,20,0.02)",
              border: "1px solid rgba(57,255,20,0.06)",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(57,255,20,0.05)";
              e.currentTarget.style.borderColor = "rgba(57,255,20,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(57,255,20,0.02)";
              e.currentTarget.style.borderColor = "rgba(57,255,20,0.06)";
            }}
          >
            <span className="text-xl flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </span>
            <div className="flex-1">
              <h3
                className="font-semibold text-sm transition-colors duration-200 group-hover:text-[var(--neon)]"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs mt-1.5 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.desc}
              </p>
              
              {item.expandedContent && (
                <div className="mt-2 text-[10px] font-mono transition-colors duration-200 group-hover:text-[var(--neon)]" style={{ color: "var(--text-muted)" }}>
                  [Click to read more]
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {achievements.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-6 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-mono transition-colors duration-200 hover:text-[var(--neon)]"
            style={{ color: "var(--text-muted)" }}
          >
            {showAll ? "[Show Less]" : "[View All Achievements]"}
          </button>
        </motion.div>
      )}

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || "Achievement"}
      >
        {selectedItem && (
          <div className="flex flex-col gap-5 p-2">
            <div className="flex items-start gap-4">
              {selectedItem.icon && <span className="text-3xl mt-1">{selectedItem.icon}</span>}
              <p className="text-base font-medium leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {selectedItem.desc}
              </p>
            </div>
            
            {selectedItem.expandedContent && (
              <div className="pt-5 border-t border-[rgba(57,255,20,0.1)]">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)", lineHeight: "1.8" }}>
                  {selectedItem.expandedContent}
                </p>
              </div>
            )}
            
            {selectedItem.link && (
              <div className="pt-3">
                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon btn-neon-outline text-xs py-2 px-4 inline-flex items-center gap-2"
                >
                  View Publication ↗
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
