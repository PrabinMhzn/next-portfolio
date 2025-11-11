// components/Skills.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiShadcnui, SiTypescript } from "react-icons/si";

interface Skill {
  title: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { title: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
  { title: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },

  {
    title: "JavaScript",
    icon: <FaJsSquare className="text-5xl text-yellow-400" />,
  },
  { title: "React", icon: <FaReact className="text-5xl text-blue-400" /> },
  { title: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" /> },
  {
    title: "TypeScript",
    icon: <SiTypescript className="text-5xl text-blue-600" />,
  },

  { title: "Git", icon: <FaGitAlt className="text-5xl text-red-500" /> },
  { title: "Python", icon: <FaPython className="text-5xl text-blue-400" /> },
  {
    title: "Shadcn UI",
    icon: <SiShadcnui className="text-5xl text-lime-400" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const Skills: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-lime-400 text-center">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            className="w-32 h-32 bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-lg flex flex-col items-center justify-center cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          >
            {skill.icon}
            <h4 className="text-neutral-900 dark:text-neutral-50 font-semibold mt-2 text-lg text-center">
              {skill.title}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
