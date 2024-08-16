import { Separator } from "@/components/ui/separator";
import React from "react";
import { IoLocationOutline, MdMyLocation } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Resume() {
  return (
    <div className="flex flex-col items-center justify-center w-screen ">
      <div className="border-2 border-lime-900 mx-8 flex flex-col shadow-lg ">
        <div className=" flex-col items-center justify-center ">
          <div className="  flex-col p-4 px-8 text-center bg-yellow-600">
            <h1 className="text-4xl uppercase mb-2">Prabin Maharjan</h1>
            <Separator orientation="horizontal" className="mb-4" />
            <div className="flex h-8 items-center space-x-4 text-sm gap-4">
              <h1 className="text-2xl  mb-2 ">Software Engineer</h1>
              <Separator orientation="vertical " />
              <h1 className="text-2xl  mb-2 ">Fullstack Developer</h1>
            </div>
            <div className="flex gap-8 items-center justify-center mt-8 bg-slate-500 ">
              <div className="">
                <IoLocationOutline size={30} />
                location
              </div>
              <div>
                <LuPhone size={30} />
                Contact
              </div>
              <div>
                <AiOutlineMail size={30} />
                Email
              </div>
              <div>
                <FaLinkedin size={30} />
                LinkedIn
              </div>
              <div>
                <FaGithub size={30} />
                Github
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 p-8 ">
          <div className="flex flex-col">
            <section>Profile </section>
            <section>Skills</section>
          </div>
          <div className="bg-black"></div>
          <div>details</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
