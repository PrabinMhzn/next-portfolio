"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface DocumentationSectionProps {
  title: string;
  description: string;
  code: string;
  language: string;
}

const DocumentationSection: React.FC<DocumentationSectionProps> = ({
  title,
  description,
  code,
  language,
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <button
        onClick={() => setIsCodeVisible(!isCodeVisible)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {isCodeVisible ? "Hide Code" : "Show Code"}
      </button>
      {isCodeVisible && (
        <SyntaxHighlighter language={language} style={tomorrow}>
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default DocumentationSection;
