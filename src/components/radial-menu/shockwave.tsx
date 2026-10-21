import { motion } from 'motion/react';
import { useEffect } from 'react';

export interface ShockwaveData {
  id: string;
  x: number;
  y: number;
  color: string;
  emoji: string;
  intensity: number;
}

function cameraShake(intensity: number) {
  const el = document.body;
  const originalTransform = el.style.transform;
  const m = 0.5 + intensity * 2; // multiplier: 0.5x at min, 2.5x at max
  const steps = [
    { x: 1.2 * m, y: -0.75 * m },
    { x: -0.9 * m, y: 0.6 * m },
    { x: 0.45 * m, y: -0.3 * m },
    { x: 0, y: 0 },
  ];
  const interval = 90;
  const timers = steps.map(({ x, y }, i) =>
    setTimeout(() => {
      el.style.transform = (x || y) ? `translate3d(${x}px, ${y}px, 0)` : originalTransform;
      if (i === steps.length - 1) {
        el.style.transform = originalTransform;
      }
    }, i * interval)
  );
  return () => {
    timers.forEach(clearTimeout);
    el.style.transform = originalTransform;
  };
}

export function Shockwave({ data }: { data: ShockwaveData }) {
  const int = data.intensity;
  const s = 0.4 + int * 0.8; // size scale: 0.4x–1.2x

  useEffect(() => {
    return cameraShake(int);
  }, [int]);

  return (
    <div
      className="fixed pointer-events-none z-[9998]"
      style={{ left: data.x, top: data.y }}
    >
      {/* Outer ring */}
      <motion.div
        initial={{ scale: 0, opacity: 1, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 0, x: "-50%", y: "-50%" }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute rounded-full"
        style={{
          width: 300 * s,
          height: 300 * s,
          borderWidth: 3,
          borderColor: data.color,
          boxShadow: `0 0 ${40 * s}px ${data.color}80, inset 0 0 ${40 * s}px ${data.color}30`,
        }}
      />

      {/* Mid ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0.8, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 0, x: "-50%", y: "-50%" }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
        className="absolute rounded-full border-2"
        style={{
          width: 200 * s,
          height: 200 * s,
          borderColor: data.color,
          boxShadow: `0 0 ${25 * s}px ${data.color}50`,
        }}
      />

      {/* Inner ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0.6, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 0, x: "-50%", y: "-50%" }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="absolute rounded-full border"
        style={{
          width: 120 * s,
          height: 120 * s,
          borderColor: data.color,
        }}
      />

      {/* Center glow burst */}
      <motion.div
        initial={{ scale: 0, opacity: 0.6, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 0, x: "-50%", y: "-50%" }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute rounded-full"
        style={{
          width: 80 * s,
          height: 80 * s,
          background: `radial-gradient(circle, ${data.color}90 0%, transparent 70%)`,
        }}
      />

      {/* Center emoji flash */}
      <div className="absolute left-0 top-0" style={{ transform: 'translate(-50%, -50%)' }}>
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2 + int * 2, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl"
        >
          {data.emoji}
        </motion.div>
      </div>
    </div>
  );
}
