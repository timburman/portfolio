"use client";

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "rgba(57,255,20,0.08)" }}
    >
      <div className="portfolio-container">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold tracking-widest neon-text"
              style={{ letterSpacing: "0.15em" }}
            >
              AK
            </span>
            <span
              className="cursor-blink font-bold"
              style={{ color: "var(--neon)" }}
            >
              _
            </span>
          </div>
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Designed & built by Aryan Kaushik · {new Date().getFullYear()}
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
