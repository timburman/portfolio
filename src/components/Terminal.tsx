"use client";

import { useState, useRef, useEffect } from "react";
import { terminalCommands } from "@/data/portfolio";

type Line = {
  type: "input" | "output" | "error" | "system";
  text: string;
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    {
      type: "system",
      text: "aryan@portfolio:~$ — Interactive terminal. Type 'help' to start.",
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, mounted]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [trimmed, ...prev]);
    setHistIdx(-1);

    const newLines: Line[] = [{ type: "input", text: `> ${cmd}` }];

    if (trimmed === "clear") {
      setLines([
        {
          type: "system",
          text: "aryan@portfolio:~$ — Terminal cleared. Type 'help' for commands.",
        },
      ]);
      return;
    }

    const response = terminalCommands[trimmed];
    if (response) {
      response.split("\n").forEach((line) => {
        newLines.push({ type: "output", text: line });
      });
    } else {
      newLines.push({
        type: "error",
        text: `command not found: ${trimmed}. Try 'help'`,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      setInput(history[idx] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : history[idx]);
    }
  };

  return (
    <div className="bento-card h-full">
      <div className="section-label mb-4">Easter Egg</div>
      <div className="terminal">
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: "rgba(57,255,20,0.1)" }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full opacity-80" style={{ background: "var(--neon)" }} />
          <span
            className="ml-2 text-xs tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            aryan@portfolio — bash
          </span>
        </div>

        {/* Output area */}
        <div
          ref={bodyRef}
          className="px-4 py-3 overflow-y-auto cursor-text"
          style={{ height: "220px" }}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className="mb-0.5"
              style={{
                color:
                  line.type === "input"
                    ? "var(--neon)"
                    : line.type === "error"
                    ? "#ff6b6b"
                    : line.type === "system"
                    ? "rgba(57,255,20,0.5)"
                    : "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap",
              }}
            >
              {line.text}
            </div>
          ))}

          {/* Input row */}
          <div className="flex items-center gap-2 mt-1">
            <span style={{ color: "var(--neon)", fontSize: "12px" }}>›</span>
            <input
              ref={inputRef}
              className="terminal-input flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck={false}
              placeholder="type a command..."
            />
          </div>

        </div>
      </div>
    </div>
  );
}
