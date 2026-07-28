import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 pb-16 pt-8 text-center">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] font-display text-lg font-bold text-[var(--color-cyan-soft)]">
        {profile.initials}
      </div>
      <h3 className="font-display text-2xl font-semibold text-white">{profile.name}</h3>
      <p className="eyebrow text-[10px]">AI/ML Engineer / Full-Stack Developer</p>
      <p className="mt-4 text-xs text-[var(--color-muted-2)]">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
