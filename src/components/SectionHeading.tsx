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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="eyebrow mb-4 text-[var(--color-muted)]">
        {index} / {label}
      </span>
      <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
      <p
        className={`mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base ${
          isCenter ? "" : "max-w-2xl"
        }`}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
