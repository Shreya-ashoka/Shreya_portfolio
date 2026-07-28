"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireLayer({
  radius,
  color,
  speed,
  detail = 1,
  rotationOffset = 0,
}: {
  radius: number;
  color: string;
  speed: number;
  detail?: number;
  rotationOffset?: number;
}) {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15 + rotationOffset) * 0.3;
  });

  return (
    <lineSegments ref={ref}>
      <edgesGeometry args={[new THREE.IcosahedronGeometry(radius, detail)]} />
      <lineBasicMaterial color={color} transparent opacity={0.55} />
    </lineSegments>
  );
}

function Satellite() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.4;
    ref.current.position.set(Math.cos(t) * 4.25, Math.sin(t * 0.6) * 1.95, Math.sin(t) * 4.25);
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#bff4ff" />
      </mesh>
      <pointLight color="#7fe0ff" intensity={2} distance={2} />
    </group>
  );
}

export default function PortalOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.6} />
      <WireLayer radius={2.75} color="#4ecbf0" speed={0.12} detail={1} />
      <WireLayer radius={2.1} color="#8b6bf2" speed={-0.18} detail={0} rotationOffset={1.4} />
      <WireLayer radius={3.25} color="#3fae9c" speed={0.07} detail={2} rotationOffset={2.4} />
      <Satellite />
    </Canvas>
  );
}
