"use client";
import React, { Suspense, useRef, useState } from "react";
import { SocialFloatingDock } from "@/components/Socials";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import portfolioAvatar from "@/public/images/portfolioAvatar.png";
import ParticleBackground from "@/components/ParticleBackground";

// Example sticker image
import sticker1 from "@/public/images/stickers/skull-sticker.png";
import sticker2 from "@/public/images/stickers/cartman.png";
import sticker3 from "@/public/images/stickers/chromedr.png";
import sticker4 from "@/public/images/stickers/nein.png";

//aRRay of sticker images to choose from
const stickerImages = [sticker1.src, sticker2.src, sticker3.src, sticker4.src];

const Portfolio = React.lazy(() => import("./portfolio/page"));
const Skills = React.lazy(() => import("@/components/Skills"));

// Type for individual slap stickers
interface Sticker {
  id: number;
  x: number;
  y: number;
  src: string;
  rotate: number;
  scale: number;
}

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Motion values for avatar movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useTransform(y, [-50, 50], [50, -50]);
  const rotateY = useTransform(x, [-50, 50], [-50, 50]);

  // Logic for interactive slap stickers
  const [stickers, setStickers] = useState<Sticker[]>([]); // Array of current stickers
  const [counter, setCounter] = useState(0); // Unique ID counter for stickers

  // Handle mouse movement over avatar
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Animate avatar smoothly following cursor
    animate(x, -offsetX / 3, { type: "spring", stiffness: 200, damping: 2 });
    animate(y, -offsetY / 3, { type: "spring", stiffness: 200, damping: 2 });
  };

  // Handle avatar returning to center when mouse leaves
  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 60, damping: 14 });
    animate(y, 0, { type: "spring", stiffness: 60, damping: 14 });
  };

  // Handle clicking on hero section to create a slap sticker
  const handleHeroClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left - 32; // center sticker
    const y = e.clientY - rect.top - 32;

    //Pick Random sticker image
    const randomStickerIndex = Math.floor(Math.random() * stickerImages.length);

    //random rotation and scale for sticker
    const randomRotate = Math.random() * 60 - 35; // -15 to +15 degrees
    const randomScale = Math.random() * 0.5 + 0.75; // 0.75 to 1.25 scale

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

    // Remove sticker automatically after 2 seconds
    setTimeout(() => {
      setStickers((prev) => prev.filter((s) => s.id !== id));
    }, 2000);
  };

  return (
    // Hero main container
    <motion.main
      className="flex flex-col space-y-20 @md:mt-8 items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onClick={handleHeroClick} // Click anywhere in the hero to slap a sticker
    >
      <motion.section
        className="w-full mx-auto flex flex-col items-center min-h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        variants={itemVariants}
      >
        {/* Background particles */}
        <ParticleBackground />

        {/* Main heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold  sm:mb-6 text-center uppercase"
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
          className="font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center"
          variants={itemVariants}
        >
          Software Engineer | Full Stack Developer
        </motion.h2>

        {/* Avatar with motion */}
        <div
          className="relative w-[500px] h-96 flex items-center justify-center perspective-[1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={ref}
            style={{ x, y, rotateX, rotateY }}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 sm:mb-8 rounded-full overflow-hidden shadow-[0_0_25px_5px_rgba(163,230,53,0.3)] "
            variants={itemVariants}
          >
            <motion.img
              src={portfolioAvatar.src}
              className="w-full h-full object-cover bg-neutral-300  "
              alt="Prabin Avatar Image"
            />
            <motion.div
              className="absolute inset-0 bg-lime-500 mix-blend-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Social links dock */}
        <motion.div variants={itemVariants}>
          <SocialFloatingDock />
        </motion.div>

        {/* AnimatePresence handles stickers fading in/out */}
        <AnimatePresence>
          {stickers.map((s) => (
            <motion.img
              key={s.id}
              src={s.src}
              alt="Sticker"
              className="absolute w-36 h-36 object-contain select-none pointer-events-none"
              style={{ left: s.x, top: s.y }}
              initial={{ scale: 0, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            />
          ))}
        </AnimatePresence>
      </motion.section>

      {/* Portfolio section */}
      <motion.section variants={itemVariants}>
        <Suspense fallback={<div>Loading...</div>}>
          <Portfolio />
        </Suspense>
      </motion.section>

      {/* Skills section */}
      <motion.section variants={itemVariants}>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
      </motion.section>
    </motion.main>
  );
};

export default Home;
