"use client";

import Timeline from "@/components/Timeline";
import Portfolio from "./portfolio/page";
import { SocialFloatingDock } from "@/components/Socials";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <main className="flex flex-col mt-8 m-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Heading with bounce effect */}
          <motion.h1
            className="text-4xl sm:text-6xl text-gray-300 font-bold mb-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.3,
              delay: 0.2,
            }}
          >
            Hello! My name is
            <br />
            <span className="text-lime-400 uppercase">Prabin Maharjan</span>.
          </motion.h1>

          {/* Subheading with fade and scale effect */}
          <motion.h2
            className="font-bold text-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
          >
            Software Engineer | Full Stack Developer
          </motion.h2>
          <motion.img
            src="../images/portfolioAvatar.png"
            className="w-96 h-auto rounded-full mx-auto mb-8 shadow-2xl hover:shadow-lime-700 duration-300 "
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              duration: 0.1,
            }}
          />

          <SocialFloatingDock />

          {/* Paragraph with fade and slide effect
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I
          </motion.p> */}
        </div>
      </div>

      <Timeline />
      <Portfolio />
    </main>
  );
};

export default Home;
