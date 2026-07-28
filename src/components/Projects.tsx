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
        title="Selected Projects"
        subtitle="A few projects that show how I approach AI, data, and full-stack product work."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-8 transition-colors duration-300 hover:border-[var(--color-cyan)]/35"
          >
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
                  className="rounded-md border border-[var(--color-border)] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text)]/85"
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
                className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-xs font-semibold text-[#04050a] transition-transform hover:scale-[1.02]"
              >
                View Details
                <ArrowUpRight size={13} />
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 text-xs font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)]"
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
