"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioModal from "@/components/PortfolioModal";

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
  techStack?: string[];
}

const Portfolio: React.FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<PortfolioItem | null>(null);

  useEffect(() => {
    fetch("/data/portfolios.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="flex flex-col justify-center items-center min-h-[90vh] w-full px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col justify-center w-full py-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-lime-400 mb-2">
            Portfolio Works
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            A selection of my recent works and projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {portfolios.map((portfolio) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              viewport={{ once: true }}
            >
              <div onClick={() => setSelectedPortfolio(portfolio)}>
                <PortfolioCard {...portfolio} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedPortfolio && (
        <PortfolioModal
          isOpen={!!selectedPortfolio}
          onClose={() => setSelectedPortfolio(null)}
          {...selectedPortfolio}
        />
      )}
    </section>
  );
};

export default Portfolio;
