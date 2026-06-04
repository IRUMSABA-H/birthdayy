import { useMemo } from "react";

const COLORS = ["#ec4899", "#a855f7", "#f472b6", "#c084fc", "#ff6ec7"];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function Stars({ count = 60 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: `${rand(0, 100)}%`,
        top: `${rand(0, 100)}%`,
        size: rand(1, 3),
        delay: rand(0, 4),
        dur: rand(2, 5),
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            boxShadow: "0 0 6px rgba(255,255,255,0.9)",
          }}
        />
      ))}
    </div>
  );
}

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: `${rand(0, 100)}%`,
        size: rand(14, 34),
        delay: rand(0, 12),
        dur: rand(8, 16),
        drift: `${rand(-60, 60)}px`,
        color: COLORS[Math.floor(rand(0, COLORS.length))],
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="absolute bottom-0"
          style={{
            left: h.left,
            fontSize: h.size,
            color: h.color,
            ["--drift" as string]: h.drift,
            animation: `float-up ${h.dur}s linear ${h.delay}s infinite`,
            filter: "drop-shadow(0 0 8px currentColor)",
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}

export function Balloons({ count = 12 }: { count?: number }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: `${rand(0, 100)}%`,
        size: rand(34, 60),
        delay: rand(0, 14),
        dur: rand(12, 22),
        drift: `${rand(-40, 40)}px`,
        color: COLORS[Math.floor(rand(0, COLORS.length))],
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: b.left,
            ["--drift" as string]: b.drift,
            animation: `float-up ${b.dur}s linear ${b.delay}s infinite`,
          }}
        >
          <div
            style={{
              width: b.size,
              height: b.size * 1.2,
              background: `radial-gradient(circle at 35% 30%, #fff6, ${b.color})`,
              borderRadius: "50%",
              boxShadow: `0 0 18px ${b.color}99`,
            }}
          />
          <div
            className="mx-auto"
            style={{ width: 1, height: b.size * 0.7, background: "rgba(255,255,255,0.3)" }}
          />
        </div>
      ))}
    </div>
  );
}

export function Confetti({ count = 60 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: `${rand(0, 100)}%`,
        w: rand(5, 10),
        h: rand(8, 16),
        delay: rand(0, 8),
        dur: rand(4, 9),
        color: COLORS[Math.floor(rand(0, COLORS.length))],
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-0"
          style={{
            left: p.left,
            width: p.w,
            height: p.h,
            background: p.color,
            borderRadius: 2,
            animation: `confetti-fall ${p.dur}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
