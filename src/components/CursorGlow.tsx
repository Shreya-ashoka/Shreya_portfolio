"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    let raf: number;
    const tick = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 250}px, ${
          current.current.y - 250
        }px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 -z-[5] h-[500px] w-[500px] rounded-full opacity-[0.15] mix-blend-screen will-change-transform hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(78,203,240,0.9) 0%, rgba(139,107,242,0.5) 40%, transparent 70%)",
        filter: "blur(10px)",
      }}
    />
  );
}
