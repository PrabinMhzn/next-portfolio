"use client";

import Timeline from "@/components/Timeline";
import Portfolio from "./portfolio/page";
import { SocialFloatingDock } from "@/components/Socials";

const Home = () => {
  return (
    <main className="flex flex-col mt-8 m-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <div className="flex flex-col justify-center h-full">
          <img src="" alt="" />

          <h1 className="text-4xl sm:text-6xl text-gray-200 font-bold mb-2 text-left">
            Hello! My name is
            <br />
            <span className="text-lime-400 uppercase">Prabin Maharjan</span>.
          </h1>
          <h2 className="font-bold text-2xl">
            Software Engineer | Full Stack Developer
          </h2>
          <p>I </p>
        </div>
      </div>
      <SocialFloatingDock />
      <Portfolio />
      <Timeline />
    </main>
  );
};

export default Home;
