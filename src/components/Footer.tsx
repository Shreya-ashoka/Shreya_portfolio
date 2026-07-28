import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 pb-16 pt-8 text-center">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-violet)] font-display text-lg font-bold text-[#04050a]">
        {profile.initials}
        <span className="absolute inset-0 -z-10 rounded-full bg-[var(--color-cyan)] opacity-40 blur-xl" />
      </div>
      <h3 className="font-display text-2xl font-bold text-gradient">{profile.name}</h3>
      <p className="eyebrow text-[10px]">Building Intelligent Systems</p>
      <p className="mt-4 text-xs text-[var(--color-muted-2)]">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
