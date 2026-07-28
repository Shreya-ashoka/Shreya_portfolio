"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Navbar() {
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.55);
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: scrolled ? 0 : -80, opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 ${
        scrolled ? "" : "pointer-events-none"
      }`}
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-xl px-4 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-panel shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "glass-panel"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-xs font-bold text-[var(--color-cyan-soft)] font-display">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-[var(--color-muted)] sm:inline">
            SHREYA
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  active === item.href
                    ? "text-[var(--color-cyan-soft)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full border border-[var(--color-cyan)]/50 bg-[var(--color-cyan)]/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)] sm:flex"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)] sm:flex"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-md bg-white px-3.5 py-1.5 text-xs font-semibold text-[#04050a] transition-transform hover:scale-[1.02]"
          >
            <FileText size={13} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
