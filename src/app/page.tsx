"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Terminal from "@/components/Terminal";
import GitHubStats from "@/components/GitHubStats";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function FadeSection({
  children,
  delay = 0,
  className = "",
  id,
  ariaLabel,
  as: Tag = "section",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  ariaLabel?: string;
  as?: "section" | "div";
}) {
  const MotionTag = motion.create(Tag);
  return (
    <MotionTag
      id={id}
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default function Home() {
  return (
    <div
      style={{ background: "var(--bg)", minHeight: "100vh", width: "100%", overflowX: "hidden" }}
    >
      <Navbar />
      <Hero />
      <main className="portfolio-main" aria-label="Portfolio content">

        <FadeSection delay={0} className="section-wrap" ariaLabel="About Aryan Kaushik">
          <About />
        </FadeSection>

        <FadeSection delay={0.05} className="section-grid-2" ariaLabel="Skills and GitHub Stats">
          <Skills />
          <GitHubStats />
        </FadeSection>

        <FadeSection delay={0.05} className="section-wrap" ariaLabel="Work Experience">
          <Experience />
        </FadeSection>

        <FadeSection delay={0.05} className="section-wrap" ariaLabel="Projects">
          <Projects />
        </FadeSection>

        <FadeSection
          delay={0.05}
          id="education"
          className="section-grid-3"
          ariaLabel="Education, Achievements and Terminal"
        >
          <Education />
          <Achievements />
          <Terminal />
        </FadeSection>

        <FadeSection delay={0.05} className="section-wrap" ariaLabel="Blog posts">
          <Blog />
        </FadeSection>

        <FadeSection delay={0.05} className="section-wrap" ariaLabel="Contact">
          <Contact />
        </FadeSection>
      </main>
      <Footer />
    </div>
  );
}
