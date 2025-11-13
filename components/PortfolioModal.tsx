"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

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

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden"; // disable background scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset"; // restore scroll
    };
  }, [isOpen, onClose]);

  // Render nothing if modal is closed
  if (!isOpen) return null;

  // Create portal root if it doesn't exist
  let modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key="modal"
          ref={modalRef}
          className="
            bg-neutral-900 text-white rounded-2xl shadow-2xl
            w-full max-w-[90vw] sm:max-w-lg md:max-w-xl
            max-h-[90vh] overflow-hidden
            flex flex-col
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg sm:text-2xl font-bold text-lime-400">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-red-500 text-xl sm:text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <div className="w-full mb-4 flex-shrink-0">
              <Image
                src={src}
                alt={title}
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lime-400 font-medium mb-2 text-sm sm:text-base">
                  Tech Stack
                </h3>
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
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-lime-600 hover:bg-lime-500 text-white rounded-full px-6 py-2 text-sm">
                  Demo
                </Button>
              </a>
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-lime-600 hover:bg-lime-500 text-white rounded-full px-6 py-2 text-sm">
                  Code
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    modalRoot
  );
};

export default PortfolioModal;
