import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const PortfolioFooter = () => {
  return (
    <footer className=" bg-neutral-800 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">
              Prabin<span>.</span>
            </h2>
            <p className="text-sm">
              Web Developer | Designer | Creative Thinker
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/PrabinMhzn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors "
              aria-label="GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/prabin-maharjan93/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>

            {/* Need to change the href. */}
            <a
              href="mailto:satyrikonme.gmail.com"
              className="hover:text-gray-400 transition-colors"
              aria-label="Email"
            >
              <LuMail className="h-8 w-auto" />
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Prabin. </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
