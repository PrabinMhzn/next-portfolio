// components/About.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = `Hello! I'm Prabin Maharjan, a passionate Full Stack Developer.

Join me on this exciting journey as I continue to grow and create impactful solutions!`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here (lower is faster)

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-lime-400 text-center">
        About Me
      </h2>
      <div className=" rounded-lg p-6 shadow-lg">
        <pre className="text-gray-300 whitespace-pre-wrap">
          {text}
          <span
            className={`inline-block ${
              showCursor ? "border-r-2 border-lime-400" : ""
            }`}
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </pre>
      </div>
      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
