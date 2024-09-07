"use client";
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (formData: FormData) => {
    console.log("Form Submitted", formData);
    // Here you would typically send the form data to your server
    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Let&apos;s Connect.
            </h1>
            {!isFormSubmitted ? (
              <ContactForm onSubmit={handleSubmit} />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lime-600 dark:text-lime-400 text-xl font-semibold"
              >
                Thank you for your message! I will get back to you soon.
              </motion.div>
            )}
          </div>
          <div className="w-full md:w-1/2 bg-gradient-to-br from-lime-500 to-green-600 p-8 text-white flex flex-col justify-between">
            <div className="flex flex-col justify-stretch">
              <h2 className="text-3xl font-bold mb-16">Get in Touch</h2>
              <p className="mb-16">
                I&apos;m always open to new opportunities and interesting
                projects. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-center">
                  <MdEmail className="mr-4 text-2xl" />
                  satyrikonme@gmail.com
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center">
                  <MdLocationOn className="mr-4 text-2xl" /> Brisbane, QLD
                </motion.div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Find me on</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  <FaGithub size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  <FaLinkedin size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  <FaTwitter size={28} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
