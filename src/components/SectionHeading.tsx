"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  label,
  title,
  subtitle,
  align = "center",
}: {
  index: string;
  label: string;
  title: string;
  subtitle: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="eyebrow mb-5 flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-1.5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)] shadow-[0_0_8px_2px_rgba(78,203,240,0.8)]" />
        {index} — {label}
      </span>
      <h2 className="font-display text-4xl font-bold text-gradient sm:text-5xl md:text-6xl">{title}</h2>
      <p className={`mt-4 max-w-xl text-[var(--color-muted)] ${isCenter ? "" : "max-w-2xl"}`}>{subtitle}</p>
    </motion.div>
  );
}
