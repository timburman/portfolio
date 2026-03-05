"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryankaushik1",
    href: "https://linkedin.com/in/aryankaushik1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/timburman",
    href: "https://github.com/timburman",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="bento-card" ref={ref}>
        <div className="section-label mb-5">Contact</div>

        <div className="grid-2">
          {/* Left */}
          <div>
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s Build Something
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
            >
              Open to full-time roles, freelance projects, and interesting
              conversations about blockchain architecture, DeFi infrastructure,
              and data systems.
            </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem",
                    borderRadius: "12px",
                    background: "rgba(57,255,20,0.02)",
                    border: "1px solid rgba(57,255,20,0.06)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.2)";
                    e.currentTarget.style.background = "rgba(57,255,20,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.06)";
                    e.currentTarget.style.background = "rgba(57,255,20,0.02)";
                  }}
                >
                  <span style={{ color: "var(--neon)", opacity: 0.7 }}>
                    {item.icon}
                  </span>
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-medium transition-colors duration-200 group-hover:text-[var(--neon)]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — quick actions */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}>
            <button
              onClick={copyEmail}
              className="btn-neon btn-neon-outline"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Email Address
                </>
              )}
            </button>

            <a
              href="/resume.pdf"
              download="Aryan_Kaushik_Resume.pdf"
              className="btn-neon btn-neon-solid"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>

            <div
              style={{
                padding: "1rem",
                borderRadius: "12px",
                textAlign: "center",
                background: "rgba(57,255,20,0.03)",
                border: "1px solid rgba(57,255,20,0.08)",
              }}
            >
              <div
                style={{ color: "var(--text-muted)", fontSize: "11px", marginBottom: "4px" }}
              >
                Response time
              </div>
              <div
                style={{ color: "var(--neon)", fontSize: "13px", fontWeight: 700 }}
              >
                Usually within 24h
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
