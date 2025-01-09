"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";
import HireMeModal from "../components/HireMeModal";
import ContactForm from "./ContactForm";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (formData: FormData) => {
    console.log("Form Submitted", formData);
    closeModal();
  };

  return (
    <header className="flex py-8 xl:py-12 text-gray-400 w-screen ">
      <div className="container mx-auto flex  justify-between items-center gap-8">
        <ModeToggle />
        <div>
          <Link href="/">
            <h1 className=" text-4xl sm:text-5xl font-semibold text-lime-400 hover:scale-110 duration-500">
              Prabin<span className="text-lime-200">.</span>
            </h1>
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Button
            onClick={openModal}
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
          >
            Hire Me
          </Button>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      <HireMeModal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onSubmit={handleSubmit} />
      </HireMeModal>
    </header>
  );
};

export default Header;
