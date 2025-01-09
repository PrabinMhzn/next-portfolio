"use client";

import React from "react";
import Portfolio from "./portfolio/page";
import { SocialFloatingDock } from "@/components/Socials";
import { motion } from "framer-motion";

import Skills from "@/components/Skills";
import About from "@/components/About";

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

  return (
    <motion.main
      className="flex flex-col space-y-20 mt-8 items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className=" max-w-screen-lg mx-auto flex flex-col items-center h-screen sm:mt-8 mt-20"
        variants={itemVariants}
      >
        <motion.h1
          className="text-4xl sm:text-6xl text-gray-300 font-bold mb-2 text-center uppercase p-8"
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

        <motion.h2
          className="font-bold text-2xl mb-8 text-center"
          variants={itemVariants}
        >
          Software Engineer | Full Stack Developer
        </motion.h2>

        <motion.div
          className="relative w-64 h-64 mb-8 rounded-full overflow-hidden"
          variants={itemVariants}
        >
          <motion.img
            src="../images/portfolioAvatar.png"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-lime-400 mix-blend-overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialFloatingDock />
        </motion.div>
      </motion.section>
      <motion.section variants={itemVariants}>
        <Portfolio />
      </motion.section>

      <motion.section variants={itemVariants}>
        <About />
      </motion.section>

      <motion.section variants={itemVariants}>
        <Skills />
      </motion.section>
    </motion.main>
  );
};

export default Home;
