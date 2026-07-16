"use client";

import { useMemo, useState } from "react";

type NNNode = {
  id: string;
  label: string;
  color: string;
  x: number;
  y: number;
  r: number;
  isCore?: boolean;
};

const layerX = [90, 400, 710, 1050];

const layerDefs: { labels: string[]; color: string; r: number }[] = [
  {
    labels: ["Languages", "Frameworks", "AI / ML Tools", "Data & Analytics", "ML Concepts"],
    color: "#7fe0ff",
    r: 30,
  },
  {
    labels: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "React.js", "Next.js", "FastAPI"],
    color: "#4ecbf0",
    r: 15,
  },
  {
    labels: ["LangChain", "Hugging Face", "Fine-tuning", "RAG", "Prompt Engineering", "PostgreSQL", "MongoDB"],
    color: "#8b6bf2",
    r: 15,
  },
  { labels: ["AI Engineer"], color: "#e264c4", r: 34 },
];

function buildNodes(): NNNode[][] {
  return layerDefs.map((layer, li) => {
    const count = layer.labels.length;
    const gap = 560 / (count + 1);
    return layer.labels.map((label, ni) => ({
      id: `L${li}-${ni}`,
      label,
      color: layer.color,
      x: layerX[li],
      y: 40 + gap * (ni + 1),
      r: layer.r,
      isCore: li === 3,
    }));
  });
}

// Deterministic string hash — same output on server and client, unlike Math.random(),
// so it can't cause a hydration mismatch while still looking "shuffled".
function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export default function NeuralNetwork() {
  const layers = useMemo(buildNodes, []);
  const [hovered, setHovered] = useState<string | null>(null);

  const edges = useMemo(() => {
    const list: { id: string; from: NNNode; to: NNNode }[] = [];
    for (let li = 0; li < layers.length - 1; li++) {
      layers[li].forEach((a) => {
        layers[li + 1].forEach((b) => {
          list.push({ id: `${a.id}_${b.id}`, from: a, to: b });
        });
      });
    }
    return list;
  }, [layers]);

  const pulseEdges = useMemo(() => {
    // Deterministic pseudo-shuffle by id hash instead of Math.random().
    // Random() runs independently on the server render and the client render,
    // producing two different orderings and mismatched `path` attrs on
    // <animateMotion> — that's what triggered the hydration error.
    const sorted = [...edges].sort((a, b) => hashString(a.id) - hashString(b.id));
    return sorted.slice(0, 26);
  }, [edges]);

  const allNodes = layers.flat();

  const isEdgeActive = (from: NNNode, to: NNNode) =>
    hovered !== null && (from.id === hovered || to.id === hovered);

  return (
    <div className="relative mx-auto mb-32 mt-10 w-full max-w-6xl px-2 py-10 sm:px-6 xl:max-w-7xl">
      <div className="origin-center transition-transform duration-700 ease-out [transform:rotate(-3deg)_scale(1.08)] hover:[transform:rotate(0deg)_scale(1.1)] sm:[transform:rotate(-4deg)_scale(1.12)] sm:hover:[transform:rotate(0deg)_scale(1.15)]">
        <svg
          viewBox="0 0 1140 640"
          className="h-auto w-full"
          style={{ filter: "drop-shadow(0 0 28px rgba(78,203,240,0.1))" }}
        >
          <defs>
            <radialGradient id="nn-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e264c4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e264c4" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* edges */}
          {edges.map((e) => {
            const active = isEdgeActive(e.from, e.to);
            return (
              <path
                key={e.id}
                id={`edge-${e.id}`}
                d={`M ${e.from.x} ${e.from.y} L ${e.to.x} ${e.to.y}`}
                stroke={active ? "#7fe0ff" : "#3a4256"}
                strokeWidth={active ? 1.6 : 0.7}
                fill="none"
                opacity={active ? 0.9 : 0.28}
                style={{ transition: "opacity 0.3s ease, stroke 0.3s ease" }}
              />
            );
          })}

          {/* animated signal pulses */}
          {pulseEdges.map((e, i) => (
            <circle key={`pulse-${e.id}`} r={2.6} fill="#bff4ff">
              <animateMotion
                dur={`${2.4 + (i % 5) * 0.6}s`}
                begin={`${(i % 10) * 0.3}s`}
                repeatCount="indefinite"
                path={`M ${e.from.x} ${e.from.y} L ${e.to.x} ${e.to.y}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur={`${2.4 + (i % 5) * 0.6}s`}
                begin={`${(i % 10) * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* nodes */}
          {allNodes.map((n) => {
            const active = hovered === n.id;
            const connected = hovered
              ? edges.some((e) => (e.from.id === hovered && e.to.id === n.id) || (e.to.id === hovered && e.from.id === n.id))
              : false;
            const dim = hovered && !active && !connected;
            return (
              <g
                key={n.id}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer", transition: "opacity 0.3s ease" }}
                opacity={dim ? 0.35 : 1}
              >
                {n.isCore && <circle cx={n.x} cy={n.y} r={n.r * 2.2} fill="url(#nn-core-glow)" />}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={active ? n.r * 1.25 : n.r}
                  fill={n.color}
                  opacity={n.isCore ? 1 : 0.9}
                  style={{
                    transition: "r 0.25s ease",
                    filter: active ? `drop-shadow(0 0 10px ${n.color})` : `drop-shadow(0 0 4px ${n.color}66)`,
                  }}
                />
                <text
                  x={n.x}
                  y={n.isCore ? n.y + n.r + 22 : n.y + n.r + 15}
                  textAnchor="middle"
                  fontSize={n.isCore ? 15 : 12}
                  fontWeight={n.isCore ? 700 : 500}
                  fill={active ? "#eef1f8" : "#8892a6"}
                  style={{ transition: "fill 0.25s ease", fontFamily: "var(--font-body)" }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}