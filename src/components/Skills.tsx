"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import NeuralNetwork from "@/components/NeuralNetwork";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl overflow-visible px-6 py-28 md:py-36">
      <SectionHeading
        index="02"
        label="SKILLS"
        title="Skills & Expertise"
        subtitle="Every skill is a node, every connection a signal. Hover a node to trace its synapses."
      />

      <NeuralNetwork />

      {/* Flat categorized skill list */}
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: ci * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl p-5"
          >
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cyan-soft)]">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 px-3 py-1 text-xs text-[var(--color-text)]/90 transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}