// components/Skills.tsx
import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { cn } from "@/lib/utils";

const initialSkills = [
  {
    title: "JavaScript",
    icon: <FaJsSquare className="text-4xl" />,
    description: "Building interactive and dynamic web applications",
  },
  {
    title: "React",
    icon: <FaReact className="text-4xl" />,
    description:
      "Creating reusable UI components and managing application state",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="text-4xl" />,
    description: "Developing server-side applications and APIs",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="text-4xl" />,
    description:
      "Adding static typing to enhance code quality and maintainability",
  },
  {
    title: "HTML5",
    icon: <FaHtml5 className="text-4xl" />,
    description: "Structuring web content with semantic markup",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt className="text-4xl" />,
    description: "Styling and laying out web pages with modern techniques",
  },
  {
    title: "Git",
    icon: <FaGitAlt className="text-4xl" />,
    description: "Version control and collaborative development",
  },
  {
    title: "Python",
    icon: <FaPython className="text-4xl" />,
    description: "Scripting, data analysis, and backend development",
  },
];

const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Skills: React.FC = () => {
  const [skills, setSkills] = useState(initialSkills);

  const repositionSkills = () => {
    setSkills(shuffleArray(skills));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-lime-400 text-center">
        Skills
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              onClick={repositionSkills}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const SkillCard: React.FC<{ skill: any; onClick: () => void }> = ({
  skill,
  onClick,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      className="p-4 bg-black rounded-lg shadow-lg cursor-pointer "
      layout
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileDrag={{ scale: 1.05, zIndex: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      style={{ x, y }}
    >
      <div className="flex justify-center mb-4">{skill.icon}</div>
      <h4 className="text-zinc-100 font-bold tracking-wide text-center">
        {skill.title}
      </h4>
      <p className="mt-2 text-neutral-400 tracking-wide leading-relaxed text-sm text-center">
        {skill.description}
      </p>
    </motion.div>
  );
};

export default Skills;
