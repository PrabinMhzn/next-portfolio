"use client";
import PortfolioCard from "@/components/PortfolioCard";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
}

const Portfolio: React.FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<PortfolioItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    fetch("/data/portfolios.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPortfolios(data))
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);

  const handleOpenDrawer = (portfolio: PortfolioItem) => {
    setSelectedPortfolio(portfolio);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col justify-center  mb-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <motion.div
          className="pb-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-lime-400">
            Portfolio
          </p>
          <p className="py-4">Check out my works here</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-0">
          {portfolios.map((portfolio) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <PortfolioCard
                {...portfolio}
                onClick={() => handleOpenDrawer(portfolio)}
                onButtonClick={handleButtonClick}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="flex justify-center items-center">
          <DrawerHeader>
            <DrawerTitle>{selectedPortfolio?.title}</DrawerTitle>
            <DrawerDescription>
              {selectedPortfolio?.description}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="outline" onClick={handleCloseDrawer}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Portfolio;
