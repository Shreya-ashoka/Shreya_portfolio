"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="06"
        label="CERTIFICATIONS"
        title="Certificates"
        subtitle="Recent credentials across analytics, cloud, machine learning, and engineering tools."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel group rounded-xl p-5 transition-colors duration-300 hover:border-[var(--color-cyan)]/40"
          >
            <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-cyan-soft)]">
              <Award size={16} />
            </span>
            <h3 className="font-display text-sm font-semibold leading-snug text-white">{cert.title}</h3>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
              {cert.issuer}
            </p>
            <p className="mt-1 text-[11px] text-[var(--color-muted-2)]">
              {cert.issued}
              {cert.expires ? ` / Expires ${cert.expires}` : ""}
            </p>
            {cert.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cert.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] font-medium text-[var(--color-cyan-soft)]/80">
                    #{tag.replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
