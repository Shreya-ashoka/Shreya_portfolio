"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, CircleDot, Layers3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experience, type ExperienceItem } from "@/lib/data";

type TechStack = NonNullable<ExperienceItem["techStack"]>;
type ExperienceProject = NonNullable<ExperienceItem["projects"]>[number];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
      {children}
    </h4>
  );
}

function ContributionList({ contributions }: { contributions: string[] }) {
  return (
    <div className="mt-6">
      <SectionLabel>Key Contributions</SectionLabel>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 grid gap-3"
      >
        {contributions.map((contribution) => (
          <motion.li
            key={contribution}
            variants={itemVariants}
            className="flex gap-3 text-sm font-medium leading-relaxed text-[var(--color-text)]/85 transition duration-300 hover:translate-x-1 hover:text-white"
          >
            <span className="mt-0.5 shrink-0 text-[var(--color-cyan-soft)]">&gt;</span>
            <span>{contribution}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function TechStackGroups({ techStack }: { techStack: TechStack }) {
  return (
    <div className="mt-7">
      <SectionLabel>Tech Stack</SectionLabel>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {techStack.map((group) => (
          <div key={group.group}>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={`${group.group}-${skill}`}
                  className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-[var(--color-text)]/82 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-cyan)]/30 hover:text-white hover:shadow-[0_10px_28px_-18px_rgba(78,203,240,0.8)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetails({ project }: { project: ExperienceProject }) {
  return (
    <article className="rounded-xl border border-white/[0.06] bg-black/10 p-4 transition duration-300 hover:border-[var(--color-violet)]/25 hover:bg-white/[0.025]">
      <div className="flex items-start gap-3">
        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-violet)]/12 text-[var(--color-cyan-soft)]">
          <Layers3 aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
        <div>
          <h5 className="font-display text-sm font-semibold text-white">{project.title}</h5>
          {project.subprojects && (
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.subprojects.map((subproject) => (
                <li
                  key={subproject}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] text-[var(--color-cyan-soft)]/85"
                >
                  {subproject}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/76">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={`${project.title}-${technology}`}
                className="rounded-full bg-white/[0.045] px-2.5 py-1 text-[11px] font-medium text-[var(--color-muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ExpandedDetails({ item }: { item: ExperienceItem }) {
  if (!item.projects && !item.coreResponsibilities && !item.metrics) {
    return null;
  }

  return (
    <motion.div
      id={`${item.id}-details`}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className="mt-7 border-t border-white/[0.08] pt-7">
        {item.techStack && <TechStackGroups techStack={item.techStack} />}

        {item.projects && (
          <div className="mt-8">
            <SectionLabel>Projects Worked On</SectionLabel>
            <div className="mt-4 grid gap-3">
              {item.projects.map((project) => (
                <ProjectDetails key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}

        {item.coreResponsibilities && (
          <div className="mt-8">
            <SectionLabel>Core Responsibilities</SectionLabel>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {item.coreResponsibilities.map((responsibility) => (
                <div
                  key={responsibility}
                  className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.025] px-3 py-2 text-xs font-medium text-[var(--color-text)]/80"
                >
                  <CircleDot aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-cyan-soft)]" />
                  {responsibility}
                </div>
              ))}
            </div>
          </div>
        )}

        {item.metrics && (
          <div className="mt-8 rounded-xl border border-[var(--color-cyan)]/12 bg-[var(--color-cyan)]/[0.025] p-4">
            <div className="grid gap-2 sm:grid-cols-2">
              {item.metrics.map((metric) => (
                <div key={metric} className="flex items-center gap-2 text-xs font-semibold text-white/82">
                  <Check aria-hidden="true" className="h-4 w-4 text-emerald-400" />
                  {metric}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = Boolean(item.projects || item.coreResponsibilities || item.metrics);

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-7">
      {item.current && (
        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
          {item.statusLabel ?? "Now"}
        </div>
      )}
      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{item.role}</h3>
      <p className="mt-1 text-sm font-medium text-[var(--color-cyan-soft)]">{item.company}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-muted)]">{item.period}</p>

      {item.keyContributions && <ContributionList contributions={item.keyContributions} />}

      {item.bullets && (
        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-[var(--color-text)]/85">
              <span className="mt-1 text-[var(--color-cyan-soft)]">&gt;</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {hasDetails && (
        <>
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={`${item.id}-details`}
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-cyan-soft)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-cyan)]/35 hover:bg-white/[0.055] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            {isExpanded ? "Hide Details" : "View Details"}
            <ChevronDown
              aria-hidden="true"
              className={`h-4 w-4 transition duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>{isExpanded && <ExpandedDetails item={item} />}</AnimatePresence>
        </>
      )}
    </div>
  );
}

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
              <ExperienceCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
