// components/InteractiveCodeGuide.tsx
"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeSection {
  code: string;
  explanation: string;
  highlightLines: number[]; // Changed to number[]
}

interface InteractiveCodeGuideProps {
  title: string;
  sections: CodeSection[];
  language: string;
  highlightColor?: string;
  activeBackgroundColor?: string;
  hoverBackgroundColor?: string;
}

const InteractiveCodeGuide: React.FC<InteractiveCodeGuideProps> = ({
  title,
  sections,
  language,
  highlightColor = "rgba(255, 255, 0, 0.2)",
  activeBackgroundColor = "bg-blue-100",
  hoverBackgroundColor = "hover:bg-gray-100",
}) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col md:flex-row">
        {/* this div is for the explaination */}
        <div className="w-full md:w-1/2 p-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`p-4 mb-4 cursor-pointer rounded ${
                activeSection === index
                  ? activeBackgroundColor
                  : hoverBackgroundColor
              }`}
              onClick={() => setActiveSection(index)}
            >
              <h3 className="text-lg font-semibold mb-2">Step {index + 1}</h3>
              <p>{section.explanation}</p>
            </div>
          ))}
        </div>
        {/* code section */}
        <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen overflow-auto p-4">
          <SyntaxHighlighter
            language={language}
            style={tomorrow}
            showLineNumbers={true}
            wrapLines={true}
            lineProps={(lineNumber) => {
              const style: React.CSSProperties = { display: "block" };
              if (
                activeSection !== null &&
                sections[activeSection].highlightLines.includes(lineNumber)
              ) {
                style.backgroundColor = highlightColor;
              }
              return { style };
            }}
          >
            {sections[0].code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCodeGuide;
