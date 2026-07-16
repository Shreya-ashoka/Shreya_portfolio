"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
      <SectionHeading
        index="04"
        label="EXPERIENCE"
        title="The Pathway"
        subtitle="A glowing timeline of stops on my journey."
      />

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-cyan)] via-[var(--color-violet)] to-transparent sm:left-3" />

        <div className="flex flex-col gap-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span
                className={`absolute -left-[38px] top-2 h-3 w-3 rounded-full sm:-left-[42px] ${
                  item.current
                    ? "bg-[var(--color-cyan)] shadow-[0_0_16px_4px_rgba(78,203,240,0.7)]"
                    : "bg-[var(--color-muted-2)]"
                }`}
              />
              <div className="glass-panel rounded-2xl p-6 sm:p-7">
                {item.current && (
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
                    Now
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-cyan-soft)]">{item.company}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-muted)]">{item.period}</p>

                {item.bullets && (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text)]/85">
                        <span className="mt-1 text-[var(--color-cyan-soft)]">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
