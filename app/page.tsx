"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
const Portfolio = React.lazy(() => import("./portfolio/page"));
const Skills = React.lazy(() => import("@/components/Skills"));
import HeroSection from "@/components/HeroSection";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <motion.main
      className="flex flex-col space-y-20 @md:mt-8 items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection />
      <motion.section>
        <Suspense fallback={<div>Loading...</div>}>
          <Portfolio />
        </Suspense>
      </motion.section>
      <motion.section>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
      </motion.section>
    </motion.main>
  );
};

export default Home;
