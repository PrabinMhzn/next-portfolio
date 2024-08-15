// components/PortfolioCard.tsx
import React from "react";
import { Button } from "./ui/button";

interface PortfolioCardProps {
  src: string;
  title: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
  onClick: () => void;
  onButtonClick: (url: string) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  src,
  title,
  description,
  demoUrl,
  codeUrl,
  onClick,
  onButtonClick,
}) => {
  return (
    <div className="max-w-xs rounded-xl transform transition-transform duration-700 hover:scale-105 bg-white hover:shadow-lime-500 shadow-xl pb-4 ">
      <div
        className="max-w-xs max-h-60 rounded-xl duration-500 bg-lime-600 p-8 shadow-black hover:shadow-xl hover:translate-x-3 hover:translate-y-3 hover:cursor-pointer"
        onClick={onClick}
      >
        <img
          className="w-full h-48 object-cover rounded-xl hover:scale-110 duration-200 hover:shadow-xl hover:translate-y-3"
          src={src}
          alt={title}
        />
      </div>

      <div className="px-6 py-4">
        <div className="h-auto mb-4">
          <h1 className="font-bold text-xl mb-2 text-gray-800 mt-4 underline">
            {title}
          </h1>
        </div>

        <div className="flex px-6 pt-4 pb-2 items-center justify-center p-4 space-x-8">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-black text-lime-400 hover:text-black hover:font-bold rounded-full text-xl"
              onClick={() => onButtonClick(demoUrl)}
            >
              Demo
            </Button>
          </a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-black text-lime-400 hover:text-black hover:font-bold rounded-full text-xl"
              onClick={() => onButtonClick(codeUrl)}
            >
              Code
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
