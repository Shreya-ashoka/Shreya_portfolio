"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GraduationCap, Award, Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        index="01"
        label="ABOUT"
        title="Inside the Lab"
        subtitle="Where research meets production. A glimpse into who I am and what drives my work."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-violet)]/20 text-[var(--color-cyan-soft)]">
              <BrainCircuit size={18} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Bio
            </span>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-[var(--color-text)]/90">
            <p>
              I&apos;m an <span className="text-[var(--color-cyan-soft)]">AI and Machine Learning engineer</span>{" "}
              building intelligent systems that solve real-world problems. As a{" "}
              <span className="text-[var(--color-violet)]">published researcher at Taylor &amp; Francis and IEEE</span>
              , I&apos;ve contributed to advancing AI for judicial systems and automated evaluation — blending deep
              learning, LLMs, and elegant engineering.
            </p>
            <p className="text-[var(--color-muted)]">{about.paragraphs[1]}</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative overflow-hidden rounded-3xl p-6"
          >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
              Currently
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-2)] text-[var(--color-cyan-soft)]">
                <Briefcase size={16} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">AI Engineer</h3>
                <p className="text-sm text-[var(--color-cyan-soft)]">{about.currentRole.title.split(" at ")[1]}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-muted)]">
                  {about.currentRole.period}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-6"
          >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cyan-soft)]">
              <GraduationCap size={13} />
              Education
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{about.education.degree}</h3>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{about.education.school}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide text-[var(--color-muted-2)]">
                {about.education.period}
              </span>
              <span className="rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 px-3 py-1 text-[11px] font-medium text-[var(--color-cyan-soft)]">
                {about.education.detail}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel flex items-center gap-4 rounded-3xl p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-violet)] text-[#04050a]">
              <Award size={20} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Published Researcher</h3>
              <p className="text-sm text-[var(--color-muted)]">• Taylor &amp; Francis • IEEE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
