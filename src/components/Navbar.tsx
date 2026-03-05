"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(57,255,20,0.08)] backdrop-blur-xl"
          : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.9)"
          : "transparent",
      }}
    >
      <div className="portfolio-container" style={{ height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group no-underline">
          <span
            className="text-xs font-bold tracking-widest neon-text"
            style={{ letterSpacing: "0.15em" }}
          >
            AK
          </span>
          <span
            className="cursor-blink text-sm font-bold"
            style={{ color: "var(--neon)" }}
          >
            _
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${
                active === item.href.slice(1) ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon btn-neon-outline text-xs py-2 px-4"
            style={{ letterSpacing: "0.1em" }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-secondary)] hover:text-[var(--neon)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className="block h-px transition-all duration-300"
              style={{
                background: mobileOpen ? "var(--neon)" : "currentColor",
                transform: mobileOpen
                  ? "translate(0,6px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                background: mobileOpen ? "var(--neon)" : "currentColor",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                background: mobileOpen ? "var(--neon)" : "currentColor",
                transform: mobileOpen
                  ? "translate(0,-6px) rotate(-45deg)"
                  : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(8,8,8,0.97)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon btn-neon-outline text-xs py-2 px-4 self-start"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
