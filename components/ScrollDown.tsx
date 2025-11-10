"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { TooltipProvider } from "@radix-ui/react-tooltip";
interface ScrollDownArrowProps {
  onClick: () => void;
  className?: string;
  tooltipText?: string;
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({
  onClick,
  className,
  tooltipText = "Know More",
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            onClick={onClick}
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-lime-400 hover:bg-lime-500 text-black shadow-lg transition-all duration-300 ${className}`}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={36} />
          </motion.button>
        </TooltipTrigger>
        <TooltipContent> Know more </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ScrollDownArrow;
