"use client";

import { motion } from "framer-motion";
import { BookMarked, ExternalLink, Link2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section id="publications" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="05"
        label="PUBLICATIONS"
        title="Research"
        subtitle="Peer-reviewed publications on automated evaluation systems and AI-assisted legal support."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, i) => (
          <motion.article
            key={pub.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative flex flex-col rounded-xl p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[11px] font-medium text-[var(--color-cyan-soft)]">
                <BookMarked size={13} />
                {pub.venue.replace("Published in ", "")}
              </span>
              <Link2 size={14} className="text-[var(--color-muted)]" />
            </div>

            <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-[1.4rem]">
              {pub.title}
            </h3>

            <div className="mt-5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Key Contributions
              </p>
              <ul className="space-y-1.5">
                {pub.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text)]/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-cyan)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {pub.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 px-3 py-1 text-[11px] text-[var(--color-text)]/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={pub.doi.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)]"
              >
                <Link2 size={12} /> DOI
              </a>
              <a
                href={pub.paper.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold text-[#04050a] transition-transform hover:scale-[1.02]"
              >
                View Paper <ExternalLink size={12} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
