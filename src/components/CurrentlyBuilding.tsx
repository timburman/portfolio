"use client";

import { currentlyBuilding } from "@/data/portfolio";

export default function CurrentlyBuilding() {
  const items = [...currentlyBuilding, ...currentlyBuilding];
  return (
    <div
      className="overflow-hidden rounded-xl border"
      style={{
        borderColor: "rgba(57,255,20,0.12)",
        background: "rgba(57,255,20,0.03)",
      }}
    >
      <div className="flex items-center">
        <span
          className="flex-shrink-0 px-4 py-2.5 text-xs font-bold tracking-widest border-r"
          style={{
            borderColor: "rgba(57,255,20,0.12)",
            color: "var(--neon)",
            background: "rgba(57,255,20,0.06)",
            letterSpacing: "0.15em",
          }}
        >
          BUILDING
        </span>
        <div className="overflow-hidden flex-1">
          <div className="ticker-content inline-flex items-center gap-12 py-2.5 px-6">
            {items.map((item, i) => (
              <span
                key={i}
                className="text-xs flex-shrink-0"
                style={{ color: "var(--text-secondary)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
