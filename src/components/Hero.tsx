"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import { profile } from "@/lib/data";

const PortalOrb = dynamic(() => import("@/components/canvas/PortalOrb"), { ssr: false });

const stats = [
  { value: "2", label: "Publications" },
  { value: "4+", label: "AI Projects" },
];

const heroTags = ["AI Engineer", "Full-stack Developer", "Researcher"];

export default function Hero() {
  const introRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = nameRef.current?.querySelectorAll(".char");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".intro-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".intro-ring",
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          chars || [],
          { opacity: 0, y: 40, rotateX: -60 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.035 },
          "-=0.9"
        )
        .fromTo(
          ".intro-tag",
          { opacity: 0, y: 12, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 },
          "-=0.4"
        )
        .fromTo(
          ".intro-cta",
          { opacity: 0, y: 16, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.3"
        );

      gsap.to(".intro-cta-inner", {
        boxShadow: "0 0 34px 6px rgba(78,203,240,0.45)",
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".home-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#home",
            start: "top 70%",
          },
        }
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  const fullName = "Shreya Ashoka";

  return (
    <div ref={introRef}>
      {/* Splash / Portal intro */}
      <section
        id="intro"
        className="relative flex h-[100svh] min-h-[680px] w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        <div className="intro-ring pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[100vmin] w-[100vmin] max-h-[1120px] max-w-[1120px]">
            <PortalOrb />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="intro-eyebrow eyebrow mb-6">Portfolio / 2026</span>

          <h1
            ref={nameRef}
            className="font-display select-none text-[15vw] font-bold leading-[1.05] text-white sm:text-7xl md:text-8xl"
            style={{ perspective: 600 }}
          >
            <span className="block overflow-hidden">
              {"Hello, I am".split("").map((c, i) => (
                <span key={`l1-${i}`} className="char inline-block" style={{ display: "inline-block" }}>
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </span>
            <span className="block whitespace-nowrap text-[14vw] sm:text-7xl md:text-8xl">
              {fullName.split("").map((c, i) => (
                <span
                  key={`n-${i}`}
                  className="char text-gradient inline-block"
                  style={{ display: "inline-block" }}
                >
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </span>
          </h1>

          <div className="intro-tags mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="intro-tag rounded-md border border-[var(--color-cyan)]/25 bg-[var(--color-surface)]/70 px-4 py-2 text-[11px] font-semibold tracking-wide text-[var(--color-cyan-soft)] backdrop-blur-sm sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="intro-cta mt-10">
            <a
              href="#home"
              className="intro-cta-inner group flex items-center gap-2 rounded-md border border-[var(--color-cyan)]/35 bg-[var(--color-surface)]/75 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-cyan-soft)] backdrop-blur-md transition-transform hover:scale-[1.02]"
            >
              Enter the Portal
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <a
          href="#home"
          aria-label="Scroll down"
          className="absolute bottom-8 z-10 text-[var(--color-muted)] transition-colors hover:text-[var(--color-cyan-soft)]"
        >
          <ChevronDown className="animate-bounce" size={22} />
        </a>
      </section>

      {/* Home content */}
      <section id="home" className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-32 pt-40 text-center">
        <span className="home-reveal eyebrow mb-6 rounded-full border border-[var(--color-border)] px-4 py-1.5 text-[10px]">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle shadow-[0_0_8px_2px_rgba(52,211,153,0.8)]" />          {/* AVAILABLE FOR AI/ML ROLES / BENGALURU */}
        </span>

        <h2 className="home-reveal font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Building
          <br />
          <span className="text-gradient">practical AI</span>
          <br />
          <span className="font-light italic text-[var(--color-muted)]">from models to interfaces.</span>
        </h2>

        <p className="home-reveal mt-8 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          I&apos;m <span className="text-[var(--color-cyan-soft)]">{profile.name}</span>, an AI/ML engineer,
          full-stack developer, and published researcher. I build model pipelines, APIs, and dashboards that make
          complex data easier to use.
        </p>

        <div className="home-reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#04050a] transition-transform hover:scale-[1.02]"
          >
            Explore My Work
            <ArrowRight size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)]"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)]"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-cyan)]/50 hover:text-[var(--color-cyan-soft)]"
          >
            <Mail size={15} /> Contact
          </a>
        </div>

        <div className="home-reveal mx-auto mt-16 grid w-full max-w-xs grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-panel rounded-xl px-4 py-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
