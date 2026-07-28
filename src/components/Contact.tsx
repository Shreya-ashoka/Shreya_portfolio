"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile, contact } from "@/lib/data";

const cards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: Phone },
  {
    label: "LinkedIn",
    value: "/shreya-ashoka",
    href: profile.linkedin,
    icon: Linkedin,
  },
  { label: "GitHub", value: "/Shreya-ashoka", href: profile.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
      <SectionHeading index="07" label="CONTACT" title="Contact" subtitle={contact.body} />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-xl p-6 sm:p-10"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)]/40 px-5 py-4 transition-colors duration-300 hover:border-[var(--color-cyan)]/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface)] text-[var(--color-cyan-soft)]">
                <c.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {c.label}
                </p>
                <p className="truncate text-sm font-semibold text-white">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-[#04050a] transition-transform hover:scale-[1.02]"
          >
            Say Hello
            <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
