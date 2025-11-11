"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  src: string;
  demoUrl: string;
  codeUrl: string;
  techStack?: string[];
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  src,
  demoUrl,
  codeUrl,
  techStack = [],
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden"; // prevent scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-neutral-900 text-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-lime-400">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <img
              src={src}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Description */}
            <p className="text-gray-300 mb-4">{description}</p>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lime-400 font-medium mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs border border-lime-400/50 text-lime-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-lime-600 hover:bg-lime-500 text-white rounded-full px-6 py-2">
                  Demo
                </Button>
              </a>
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-lime-600 hover:bg-lime-500 text-white rounded-full px-6 py-2">
                  Code
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
