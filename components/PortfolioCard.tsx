"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCardProps {
  src: string;
  title: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
  techStack?: string[];
  onClick?: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  src,
  title,
  description,
  demoUrl,
  codeUrl,
  techStack = [],
  onClick,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={onClick}
      className="relative w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[360px] [perspective:1200px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-xl bg-neutral-900 border border-lime-500/30 [backface-visibility:hidden] flex flex-col">
          {/* Image takes most of the space */}
          <div className="w-full flex-1 overflow-hidden rounded-t-xl">
            <Image
              src={src}
              alt={title}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>

          {/* Title area */}
          <div className="p-3 sm:p-4 text-center">
            <h1 className="text-base sm:text-sm md:text-base font-semibold text-lime-300">
              {title}
            </h1>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-xl bg-black border border-lime-500/40 text-white flex flex-col justify-center items-center p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl z-10">
          <h1 className="text-lime-400 font-semibold text-lg mb-3">{title}</h1>

          <p className="text-xs text-gray-300 leading-snug text-center mb-4">
            {description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </p>

          {techStack.length > 0 && (
            <>
              <h3 className="text-lime-400 font-medium text-sm mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs border border-lime-400/50 text-lime-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-center items-center gap-4 mt-auto">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-neutral-300 text-black hover:bg-lime-500 font-medium rounded-full text-xs sm:text-sm px-6 py-1.5 transition-all duration-300 hover:scale-125 ">
                Demo
              </Button>
            </a>

            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-neutral-300 text-black hover:bg-lime-500 font-medium rounded-full text-xs sm:text-sm px-6 py-1.5 transition-all duration-300 hover:scale-125">
                Code
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
