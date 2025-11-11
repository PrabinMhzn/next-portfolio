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
import { SiShadcnui, SiTypescript, SiFreecodecamp } from "react-icons/si";

interface Skill {
  title: string;
  icon: React.ReactNode;
  link?: string;
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
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const Skills: React.FC = () => {
  return (
    <section className=" mx-auto p-6">
      <h2 className="text-3xl font-bold text-lime-400 mb-10 text-center">
        Skills & Tools
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.a
            key={skill.title}
            href={skill.link || "#"}
            target={skill.link ? "_blank" : "_self"}
            className="w-28 h-28 flex flex-col items-center justify-center rounded-xl bg-neutral-50 dark:bg-neutral-800 shadow-md cursor-pointer p-3 transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-lime-600 group"
            variants={cardVariants}
          >
            {skill.icon}
            <h4 className="text-sm md:text-base font-semibold mt-2 text-neutral-900 dark:text-neutral-50 group-hover:text-white text-center">
              {skill.title}
            </h4>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
