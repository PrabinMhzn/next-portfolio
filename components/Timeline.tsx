import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-9 md:gap-4">
      <div className="timeline-item md:col-start-1 md:col-end-3 mb-10">
        <div className="flex items-center justify-end">
          <div className="bg-blue-500 text-white p-4 rounded-full w-8 h-8 flex items-center justify-center">
            1
          </div>
          <div className="bg-gray-100 p-6 rounded-lg ml-4 shadow-lg">
            <div className="text-sm text-gray-500">2024 - Present</div>
            <h3 className="text-lg font-semibold">
              Front-End Developer at ABC Corp
            </h3>
            <p className="text-gray-700 mt-2">
              Led the redesign of the company’s main product, resulting in a 20%
              increase in user engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline-item md:col-start-3 md:col-end-7 mb-10">
        <div className="flex items-center justify-start">
          <div className="bg-blue-500 text-white p-4 rounded-full w-8 h-8 flex items-center justify-center">
            2
          </div>
          <div className="bg-gray-100 p-6 rounded-lg ml-4 shadow-lg">
            <div className="text-sm text-gray-500">2022 - 2024</div>
            <h3 className="text-lg font-semibold">
              Barista at The Coffee Emporium
            </h3>
            <p className="text-gray-700 mt-2">
              Managed customer service and developed a system to streamline
              order processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
