"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type GHStats = {
  public_repos: number;
  followers: number;
  following: number;
};

const GITHUB_USER = "timburman";

const languages = [
  { name: "Solidity", color: "#AA6746", pct: 42 },
  { name: "Python", color: "#3572A5", pct: 31 },
  { name: "TypeScript", color: "#3178c6", pct: 15 },
  { name: "JavaScript", color: "#f1e05a", pct: 12 },
];

export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [stats, setStats] = useState<GHStats | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.public_repos !== undefined) setStats(d);
      })
      .catch(() => {});
  }, []);

  const statItems = [
    { label: "Repos", value: stats?.public_repos ?? "—" },
    { label: "Followers", value: stats?.followers ?? "—" },
    { label: "Following", value: stats?.following ?? "—" },
    { label: "Commits", value: "200+" },
  ];

  return (
    <div className="bento-card h-full" ref={ref}>
      <div className="section-label mb-4">GitHub</div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <div
          style={{ background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.2)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--neon)">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </div>
        <div>
          <div
            className="text-sm font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            @{GITHUB_USER}
          </div>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
            style={{ color: "var(--neon)", opacity: 0.7 }}
          >
            github.com/{GITHUB_USER} ↗
          </a>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid-stats">
        {statItems.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            style={{
              padding: "0.75rem 0.5rem",
              borderRadius: "12px",
              textAlign: "center",
              background: "rgba(57,255,20,0.04)",
              border: "1px solid rgba(57,255,20,0.08)",
            }}
          >
            <div
              className="text-xl font-bold"              style={{ color: "var(--neon)" }}
            >
              {item.value}
            </div>
            <div
              style={{ color: "var(--text-muted)", fontSize: "11px", marginTop: "2px", display: "block" }}
            >
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Language breakdown */}
      <div className="section-label mb-3" style={{ fontSize: "9px" }}>TOP LANGUAGES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {languages.map((lang) => (
          <div key={lang.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{ background: lang.color, width: "8px", height: "8px", borderRadius: "50%", display: "inline-block", flexShrink: 0 }}
                />
                <span
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {lang.name}
                </span>
              </div>
              <span
                className="text-xs font-bold"
                style={{ color: "var(--text-muted)" }}
              >
                {lang.pct}%
              </span>
            </div>
            <div className="stat-bar-bg">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${lang.color}, ${lang.color}88)`,
                  height: "100%",
                }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
