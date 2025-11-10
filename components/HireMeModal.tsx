"use client";
import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const HireMeModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/70 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="bg-neutral-900 text-neutral-50 border border-neutral-700 rounded-2xl shadow-2xl max-w-lg w-full mx-auto transform transition-all duration-300 animate-fadeIn p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-neutral-700 pb-4 mb-4">
          <h3 className="text-2xl font-semibold tracking-wide uppercase text-white">
            Let&apos;s Collaborate!
          </h3>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-red-500 transition-colors duration-200 focus:outline-none"
            aria-label="Close"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 ">{children}</div>
      </div>
    </div>
  );
};

export default HireMeModal;
