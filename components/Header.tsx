"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 📜 Scroll listener to hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // user scrolls down → hide header
        setShowHeader(false);
      } else {
        // user scrolls up → show header
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 
  bg-neutral-900/60 backdrop-blur-xl border-b border-neutral-800/50 
  shadow-[0_2px_10px_rgba(0,0,0,0.2)] 
  transition-transform duration-500 ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4 relative">
        {/* Left: Mode Toggle (always on left) */}
        <div className="flex items-center">
          <ModeToggle />
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-semibold text-lime-500 hover:scale-110 duration-500">
              Prabin<span className="text-lime-300">.</span>
            </h1>
          </Link>
        </div>

        {/* Right: Desktop Nav + Hire Me */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button
            onClick={openModal}
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded text-md"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-3 xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
