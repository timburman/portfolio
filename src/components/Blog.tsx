"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogPosts } from "@/data/portfolio";

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id="blog" ref={ref}>
      <div className="section-label mb-5">Blog</div>
      <h2
        className="text-2xl font-bold mb-7"
        style={{ color: "var(--text-primary)" }}
      >
        Writing
      </h2>

      <div className="grid-3">
        {blogPosts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="bento-card group cursor-pointer"
          >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: "10px" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {post.readTime}
              </span>
            </div>

            <h3
              className="font-bold text-sm mb-2 leading-snug transition-colors duration-200 group-hover:text-[var(--neon)]"
              style={{ color: "var(--text-primary)" }}
            >
              {post.title}
            </h3>

            <p
              className="text-xs leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
            >
              {post.excerpt}
            </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {post.date}
              </span>
              <span
                className="text-xs transition-colors duration-200 group-hover:text-[var(--neon)]"
                style={{ color: "var(--text-muted)" }}
              >
                Read →
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <span
          className="text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          More articles coming soon
          <span className="cursor-blink ml-1">_</span>
        </span>
      </div>
    </div>
  );
}
