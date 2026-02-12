'use client';

import React from "react";

type OrbitLogo = {
  id: string;
  r: number;        // radio (px)
  angle: number;    // grados
  size: number;     // px
  src: string;      // url del logo (svg/png)
};

const logos: OrbitLogo[] = [
  { id: "nodejs", r: 245, angle: 110, size: 60, src: "/logos/nodejs.svg" },
  {
    id: "python",
    r: 245,
    angle: 225,
    size: 55,
    src: "/logos/python.svg",
  },
  { id: "android", r: 312, angle: 30, size: 70, src: "/logos/android.svg" },
  { id: "java", r: 260, angle: 320, size: 64, src: "/logos/java.svg" },
  { id: "apple", r: 310, angle: 260, size: 64, src: "/logos/apple.svg" },
  { id: "html5", r: 315, angle: 148, size: 65, src: "/logos/html5.svg" },
  { id: "aws", r: 175, angle: 160, size: 56, src: "/logos/aws.svg" },
  { id: "gcp", r: 175, angle: 40, size: 56, src: "/logos/gcp.svg" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

export default function OrbitGraphic({
  size = 630,
  centerColor = "#ff4f4f",
  bg = "transparent",
}: {
  size?: number;
  centerColor?: string;
  bg?: string;
}) {
  const padding = 50;
  const totalSize = size + padding * 2;
  const cx = totalSize / 2;
  const cy = totalSize / 2;

  const rings = [
    // Duraciones aumentadas para que las órbitas giren más lento
    { r: 180, dur: 90, dash: "6 10", opacity: 0.55, width: 2, dir: 1 },
    { r: 247.19, dur: 120, dash: "6 10", opacity: 0.45, width: 2, dir: -1 },
    { r: 314, dur: 156, dash: "6 10", opacity: 0.35, width: 2, dir: 1 },
  ];

  const dots = [
    /* { r: 11, x: 357.19 + padding, y: 72 + padding, fill: "#ff9a33" }, */
    { r: 11, x: 548.19 + padding, y: 397 + padding, fill: "#4bb884" },
    { r: 7, x: 91.19 + padding, y: 536 + padding, fill: "#4f84ff" },
    { r: 15, x: 76.19 + padding, y: 262 + padding, fill: "#6b33ff" },
    { r: 13, x: 347.19 + padding, y: 560 + padding, fill: "#6b33ff" },
    { r: 10, x: 281.19 + padding, y: 139 + padding, fill: "#ff4f4f" },
    { r: 7, x: 582.19 + padding, y: 480 + padding, fill: "#ff4f4f" },
    /* { r: 7, x: 556.05 + padding, y: 260.08 + padding, fill: "#ffdc4f" }, */
  ];

  return (
    <div
      className="orbitWrap"
      style={{
        width: totalSize,
        height: totalSize,
        background: bg,
        position: "relative",
        overflow: "visible",
      }}
    >
      <svg width={totalSize} height={totalSize} viewBox={`0 0 ${totalSize} ${totalSize}`}>
        {/* Pulsos del centro */}
        <g className="pulses">
          <circle cx={cx} cy={cy} r={120} fill={centerColor} opacity={0.25} className="pulse p1" />
          <circle cx={cx} cy={cy} r={96} fill={centerColor} opacity={0.25} className="pulse p2" />
          <circle cx={cx} cy={cy} r={70} fill={centerColor} className="core" />
        </g>

        {/* Isotipo Odyssoft en el centro */}
        <g transform={`translate(${cx - 38} ${cy - 35}) scale(0.45)`} opacity={0.95}>
          <g>
            <path fill="#ffffff" d="M145,85c0,6.9-1.2,13.5-3.3,19.7H28.3C26.2,98.6,25,91.9,25,85H3.8c0,44.8,36.4,81.2,81.2,81.2
              s81.2-36.4,81.2-81.2H145z M85,145c-17.3,0-32.9-7.3-43.9-19.1h87.8C117.9,137.6,102.3,145,85,145z"/>
            <path fill="#ffffff" d="M85,77.9c20.4,0,37.1-16.7,37.1-37.1S105.4,3.8,85,3.8S47.9,20.4,47.9,40.9S64.6,77.9,85,77.9z M85,25
              c8.8,0,15.9,7.1,15.9,15.9S93.8,56.8,85,56.8s-15.9-7.1-15.9-15.9S76.2,25,85,25z"/>
          </g>
        </g>

        {/* Anillos punteados que rotan */}
        {rings.map((ring, idx) => (
          <g
            key={idx}
            className={`ring ring-${idx}`}
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              animationDuration: `${ring.dur}s`,
              animationDirection: ring.dir === 1 ? "normal" : "reverse",
            }}
          >
            <circle
              cx={cx}
              cy={cy}
              r={ring.r}
              fill="none"
              stroke="#535b68"
              strokeWidth={ring.width}
              opacity={ring.opacity}
              strokeDasharray={ring.dash}
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Puntos decorativos (fijos) */}
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.fill} />
        ))}
      </svg>

      {/* Logos como "satélites" (HTML sobre el SVG) */}
      {logos.map((l) => {
        const { x, y } = polarToCartesian(cx, cy, l.r, l.angle);
        const left = x - l.size / 2;
        const top = y - l.size / 2;

        return (
          <div
            key={l.id}
            className="logo"
            style={{
              width: l.size,
              height: l.size,
              left,
              top,
            }}
            title={l.id}
          >
            <img src={l.src} alt={l.id} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        );
      })}

      <style jsx>{`
        .logo {
          position: absolute;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 999px;
          padding: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
        }

        .ring {
          animation-name: orbit-rotate;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes orbit-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Pulsos: crecen y desaparecen en loop */
        .pulse {
          transform-origin: ${cx}px ${cy}px;
          animation: pulse 2.6s ease-out infinite;
        }

        .p1 {
          animation-delay: 0s;
        }
        .p2 {
          animation-delay: 1.3s;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.75);
            opacity: 0.35;
          }
          70% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
