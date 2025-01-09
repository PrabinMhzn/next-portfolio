import Timeline from "@/components/Timeline";
import React from "react";

function Resume() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen mb-8 ">
      <h1 className="text-4xl text-lime-500">
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
