"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: random(0, 100),
      y: random(0, 100),
      size: random(2, 6), // smaller, more delicate particles
      delay: random(0, 10),
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-lime-500 blur-sm shadow-[0_0_8px_2px_rgba(163,230,53,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            x: [random(-200, 200), random(-150, 150), random(-100, 100)],
            y: [random(-200, 200), random(-150, 150), random(-100, 100)],
            opacity: [0.8, 1, 0.8],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: random(1, 5),
            repeat: Infinity,
            repeatType: "mirror",
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
