"use client";

import { motion } from "framer-motion";

interface SlapStickerProps {
  src: string;
  x: number; // position
  y: number; // position
  duration?: number; // how long it lasts
  onComplete?: () => void;
}

export default function SlapSticker({
  src,
  x,
  y,
  duration = 2000,
  onComplete,
}: SlapStickerProps) {
  return (
    <motion.img
      src={src}
      alt="Sticker"
      className="absolute w-16 h-16 object-contain select-none pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0, rotate: -15 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      onAnimationComplete={() => {
        if (onComplete) setTimeout(onComplete, duration);
      }}
    />
  );
}
