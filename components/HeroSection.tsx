"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import portfolioAvatar from "@/public/images/portfolioAvatar.png";
import { SocialFloatingDock } from "@/components/Socials";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollDownArrow from "@/components/ScrollDown";

// Stickers
import sticker1 from "@/public/images/stickers/skull-sticker.png";
import sticker2 from "@/public/images/stickers/cartman.png";
import sticker3 from "@/public/images/stickers/chromedr.png";
import sticker4 from "@/public/images/stickers/nein.png";

const stickerImages = [sticker1.src, sticker2.src, sticker3.src, sticker4.src];

interface Sticker {
  id: number;
  x: number;
  y: number;
  src: string;
  rotate: number;
  scale: number;
}

const HeroSection = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useTransform(y, [-50, 50], [50, -50]);
  const rotateY = useTransform(x, [-50, 50], [-50, 50]);

  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [counter, setCounter] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    animate(x, -offsetX / 3, { type: "spring", stiffness: 200, damping: 2 });
    animate(y, -offsetY / 3, { type: "spring", stiffness: 200, damping: 2 });
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 60, damping: 14 });
    animate(y, 0, { type: "spring", stiffness: 60, damping: 14 });
  };

  const handleHeroClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 32;
    const y = e.clientY - rect.top - 32;
    const randomStickerIndex = Math.floor(Math.random() * stickerImages.length);
    const randomRotate = Math.random() * 60 - 35;
    const randomScale = Math.random() * 0.5 + 0.75;

    const id = counter;
    setCounter((prev) => prev + 1);
    setStickers((prev) => [
      ...prev,
      {
        id,
        x,
        y,
        src: stickerImages[randomStickerIndex],
        rotate: randomRotate,
        scale: randomScale,
      },
    ]);

    setTimeout(() => {
      setStickers((prev) => prev.filter((s) => s.id !== id));
    }, 2000);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("portfolio-section");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      className="relative w-full flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden"
      variants={itemVariants}
      onClick={handleHeroClick}
    >
      <ParticleBackground />

      {/* Main Heading */}
      <motion.h1
        className="text-center text-gray-300 font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text:5xl mb-4 sm:mb-6"
        variants={itemVariants}
      >
        Hello! My name is
        <br />
        <motion.span
          className="text-lime-400 uppercase"
          animate={{
            color: ["#84cc16", "#82c55e", "#84cc16"],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          Prabin Maharjan
        </motion.span>
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-center font-semibold text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10"
        variants={itemVariants}
      >
        Software Engineer | Front End Developer
      </motion.h2>

      {/* Avatar */}
      <div
        className="relative flex items-center justify-center w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-8"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={ref}
          style={{ x, y, rotateX, rotateY }}
          className="rounded-full overflow-hidden shadow-[0_0_25px_5px_rgba(163,230,53,0.3)]"
        >
          <motion.img
            src={portfolioAvatar.src}
            className="w-full h-full object-cover bg-neutral-300"
            alt="Avatar"
          />
          <motion.div
            className="absolute inset-0 bg-lime-500 mix-blend-overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Socials */}
      <motion.div variants={itemVariants} className="mb-10">
        <SocialFloatingDock />
      </motion.div>

      {/* Stickers */}
      <AnimatePresence>
        {stickers.map((s) => (
          <motion.img
            key={s.id}
            src={s.src}
            alt="Sticker"
            className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain select-none pointer-events-none"
            style={{ left: s.x, top: s.y }}
            initial={{ scale: 0, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          />
        ))}
      </AnimatePresence>

      {/* Scroll Down Arrow */}
      <ScrollDownArrow
        onClick={handleScrollDown}
        className="hidden lg:flex absolute bottom-30 sm:bottom-12 left-2/3 transform -translate-x-1/2 "
      />
    </motion.section>
  );
};

export default HeroSection;
