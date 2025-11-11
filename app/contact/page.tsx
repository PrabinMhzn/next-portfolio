"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import HireMeModal from "@/components/HireMeModal";
import ContactForm from "@/components/ContactForm";

const contactMethods = [
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    color: "text-lime-600 dark:text-lime-400",
  },
  {
    title: "GitHub",
    icon: FaGithub,
    href: "https://github.com/yourusername",
    color: "text-lime-600 dark:text-lime-400",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    color: "text-lime-600 dark:text-lime-400",
  },
];

const skills = [
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: FaReact }, // just for demo
];

const testimonials = [
  {
    name: "Alex Johnson",
    text: "Prabin is highly skilled and reliable. Loved collaborating!",
  },
  {
    name: "Maria Lopez",
    text: "Creative, fast, and professional. Highly recommend!",
  },
];

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (formData: any) => {
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
      console.error(error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-900 w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 flex flex-col gap-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lime-600 dark:text-lime-400 mb-4">
            Let's Connect & Collaborate
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Whether it's a project, idea, or just a friendly hello, I'd love to
            hear from you!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-8 py-3 rounded-full bg-lime-600 dark:bg-lime-400 text-white dark:text-neutral-900 font-semibold hover:scale-105 transition-transform shadow-md"
          >
            Hire Me / Contact
          </button>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={idx}
                whileHover={{ y: -5, scale: 1.05 }}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl shadow-lg bg-lime-50 dark:bg-neutral-800 cursor-pointer transition-all min-h-[140px]"
              >
                <Icon size={36} className={method.color} />
                <span className="font-semibold text-neutral-900 dark:text-neutral-200 text-center text-sm sm:text-base">
                  {method.title}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Skills / Expertise */}
        <motion.div
          className="rounded-2xl p-6 sm:p-8 shadow-md bg-gray-100 dark:bg-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-lime-600 dark:text-lime-400 mb-4">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-lime-50 dark:bg-neutral-800 px-4 py-2 rounded-full shadow"
                >
                  <Icon className="text-lime-600 dark:text-lime-400" />
                  <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="rounded-2xl p-6 sm:p-8 shadow-md bg-white dark:bg-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-lime-600 dark:text-lime-400 mb-4">
            What People Say
          </h2>
          <div className="flex flex-col gap-4">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-lime-50 dark:bg-neutral-700 p-4 rounded-xl shadow-sm"
              >
                <p className="text-neutral-900 dark:text-neutral-200">
                  "{t.text}"
                </p>
                <span className="mt-2 font-semibold text-lime-600 dark:text-lime-400">
                  - {t.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Location & Fun Facts */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-gray-100 dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 shadow-md">
            <h2 className="text-2xl font-bold text-lime-600 dark:text-lime-400 mb-2">
              Availability
            </h2>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
              <li>Mon - Fri: 9am - 6pm (Brisbane time)</li>
              <li>Always up for creative challenges 💡</li>
              <li>Coffee + Code = Best combo ☕💻</li>
              <li>Quick response guaranteed!</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-md text-center">
            <h2 className="text-2xl font-bold text-lime-600 dark:text-lime-400 mb-2">
              Location
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Based in Brisbane, Australia 🌏
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-lime-600 dark:text-lime-400 mb-4">
            Ready to Work Together?
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 rounded-full bg-lime-600 dark:bg-lime-400 text-white dark:text-neutral-900 font-semibold hover:scale-105 transition-transform shadow-md"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Hire Me Modal */}
      {isModalOpen && (
        <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-600 dark:text-lime-400">
              Feel Free to Reach Out!
            </h2>
            <p className="mb-4 text-neutral-300">
              Looking forward to hearing from you! Cheers.
            </p>
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </HireMeModal>
      )}
    </div>
  );
};

export default ContactPage;
