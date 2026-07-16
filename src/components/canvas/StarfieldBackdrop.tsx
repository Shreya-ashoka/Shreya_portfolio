"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function StarLayer({
  count,
  radius,
  size,
  speed,
  color,
}: {
  count: number;
  radius: number;
  size: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.4 + Math.random() * 0.6);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    return pts;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x += delta * speed * 0.3;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = Math.sin(t * 0.05) * 0.4;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (mouse.current.x * 0.15 - group.current.rotation.y) * 0.02;
    group.current.rotation.x += (mouse.current.y * 0.1 - group.current.rotation.x) * 0.02;
  });

  return (
    <group ref={group}>
      <StarLayer count={900} radius={9} size={0.028} speed={0.012} color="#bcd6ff" />
      <StarLayer count={500} radius={6} size={0.02} speed={0.02} color="#7fe0ff" />
      <StarLayer count={260} radius={4} size={0.035} speed={-0.016} color="#c9a8ff" />
    </group>
  );
}

export default function StarfieldBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-[var(--color-bg)]">
      <div
        className="pointer-events-none absolute -top-1/3 left-1/4 h-[60vw] w-[60vw] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(139,107,242,0.35), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[50vw] w-[50vw] rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(78,203,240,0.3), transparent 65%)" }}
      />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(4,5,10,0.4) 70%, rgba(4,5,10,0.9) 100%)",
        }}
      />
    </div>
  );
}
