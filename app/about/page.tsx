"use client";

import Timeline from "@/components/Timeline";
import { IconDownload } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";

function AboutPage() {
  const handleClick = () => {
    window.open("/Resume.pdf", "_blank");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen mb-8 px-4">
      {/* About Me Section */}
      <motion.div
        className="max-w-4xl w-full mx-auto mb-12 px-4 mt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-lime-500 mb-6 text-center md:text-left">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Personal Statement */}
          <div className=" text-gray-700 dark:text-gray-300 text-lg">
            <p className="mb-4">
              Graduated with Masters degree in software Engineering, I am
              passionate about web technologies and creating digital experiences
              that are both engaging and impactful. My professional journey
              spans front-end development at Aro Software, freelance projects in
              e-commerce and content platforms, and personal projects where I
              merge creativity with functionality.
            </p>
            <p>
              Based in Brisbane, I am eager to contribute to innovative teams
              and take on challenging projects that allow me to grow as a
              developer. With hands-on experience in React.js, Next.js,
              TypeScript, Tailwind CSS, and UI/UX design, I focus on delivering
              clean, scalable, and user-friendly web applications while
              continuously expanding my skills.
            </p>
          </div>
        </div>
      </motion.div>
      {/* Resume Button */}
      <motion.button
        className="flex bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mb-8 items-center space-x-2 hover:scale-110 duration-200"
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <IconDownload className="text-white" />
        <span> Download Resume</span>
      </motion.button>

      {/* Skills Section */}
      <Skills />

      {/* Divider */}
      <div className="w-96 h-1 bg-lime-500 my-8 mx-auto" />

      {/* Timeline Title */}
      <motion.h1
        className="text-4xl text-lime-500 mb-4 text-center md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Professional.
        <span className="text-neutral-700 dark:text-neutral-300">Timeline</span>
      </motion.h1>

      {/* Timeline Section */}
      <motion.div
        className="border-2 border-lime-900 mx-4 md:mx-8 flex flex-col shadow-lg w-full md:w-2/3 rounded-lg overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <Timeline />
        </div>
      </motion.div>

      {/* Future Content Placeholder */}
      <div className="flex flex-row gap-4 p-8"></div>
      <div className="flex flex-row gap-4 p-8">
        {/* Add more sections/cards here later */}
      </div>
    </div>
  );
}

export default AboutPage;
