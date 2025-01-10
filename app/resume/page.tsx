"use client";

import Timeline from "@/components/Timeline";
import { IconDownload } from "@tabler/icons-react";
import React, { use } from "react";

function Resume() {
  const handleClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen mb-8 ">
      <button
        className="flex bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mb-8 items-center space-x-2 hover:scale-110 duration-200"
        onClick={handleClick}
      >
        <IconDownload className="text-white" />
        <span>Resume </span>
      </button>
      <h1 className="text-4xl text-lime-500 mb-4">
        Prabin.<span className="text-neutral-700"> Timeline</span>
      </h1>
      <div className="border-2 border-lime-900 mx-8 flex flex-col shadow-lg w-2/3">
        <div className="flex flex-col items-center justify-center">
          <Timeline />
        </div>
        <div className="flex flex-row gap-4 p-8"></div>
        <div className="flex flex-row gap-4 p-8">
          {/* Placeholder for future content */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
