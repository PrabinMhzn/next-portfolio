"use client";
import React, { Suspense } from "react";
import { SocialFloatingDock } from "@/components/Socials";
import { motion } from "framer-motion";
import portfolioAvatar from "@/public/images/portfolioAvatar.png";

const Portfolio = React.lazy(() => import("./portfolio/page"));

const Skills = React.lazy(() => import("@/components/Skills"));

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
      className="flex flex-col space-y-20 @md:mt-8 items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="max-w-screen-lg mx-auto flex flex-col items-center min-h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        variants={itemVariants}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold mb-4 sm:mb-6 text-center uppercase"
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
          className="font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center"
          variants={itemVariants}
        >
          Software Engineer | Full Stack Developer
        </motion.h2>

        <motion.div
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 sm:mb-8 rounded-full overflow-hidden"
          variants={itemVariants}
        >
          <motion.img
            src={portfolioAvatar.src}
            className="w-full h-full object-cover"
            alt="Prabin Maharjan"
          />
          <motion.div
            className="absolute inset-0 bg-lime-500 mix-blend-overlay"
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
        <Suspense fallback={<div>Loading...</div>}>
          <Portfolio />
        </Suspense>
      </motion.section>

      <motion.section variants={itemVariants}>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
      </motion.section>
    </motion.main>
  );
};

export default Home;
