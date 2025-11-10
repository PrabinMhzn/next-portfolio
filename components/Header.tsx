"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
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

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert("✅ Message sent successfully!");
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      closeModal();
    }
  };

  return (
    <header className="flex py-8 xl:py-12 text-neutral-200 w-full ">
      <div className="container mx-auto flex  justify-between items-center gap-16">
        <ModeToggle />
        <div>
          <Link href="/">
            <h1 className=" text-3xl sm:text-4xl font-semibold text-lime-500 hover:scale-110 duration-500">
              Prabin<span className="text-lime-300">.</span>
            </h1>
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Button
            onClick={openModal}
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded text-md "
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
