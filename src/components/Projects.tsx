"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="03"
        label="PROJECTS"
        title="Holographic Room"
        subtitle="Selected works. Click a hologram to enter the project."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-surface-2)]/40 to-[var(--color-bg-elevated)]/60 p-8 transition-colors duration-300 hover:border-[var(--color-cyan)]/40"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: "radial-gradient(circle, var(--color-cyan), transparent 70%)" }}
            />

            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Project {String(i + 1).padStart(2, "0")}
              </span>
              {p.badge && (
                <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--color-cyan-soft)]">
                  {p.badge}
                </span>
              )}
            </div>

            <h3 className="relative font-display text-2xl font-bold text-white sm:text-[1.65rem]">{p.title}</h3>

            <p className="relative mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-cyan)]/25 bg-[var(--color-cyan)]/5 px-3 py-1 text-[11px] font-medium text-[var(--color-cyan-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="relative mt-4 text-[11px] uppercase tracking-wide text-[var(--color-muted-2)]">
              {p.stack.join("  ·  ")}
            </p>

            <div className="relative mt-7 flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#04050a] transition-transform hover:scale-105"
              >
                View Details
                <ArrowUpRight size={13} />
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-xs font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)]"
              >
                <Github size={13} /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
