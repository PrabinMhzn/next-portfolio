"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SeeMoreButton from "./SeeMoreButton";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([
    {
      date: "2023-01-01",
      title: "Default Event",
      description: "This is a default event description.",
    },
  ]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/data/timeline.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} - ${response.statusText} while fetching /data/timeline.json`
          );
        }
        return response.json();
      })
      .then((data: TimelineEvent[]) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error loading timeline data.");
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 w-full">
      <div className="relative flex flex-col items-center py-10 mt-8">
        <div className=" flex flex-col items-center space-y-12 relative z-10 ">
          <SeeMoreButton
            items={events}
            renderItem={(event, index) => (
              <motion.div
                key={event.date}
                className="flex items-center w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div className="flex text-right pr-8">
                  <p className="dark:text-lime-300 text-gray-500 font-bold">
                    {event.date}
                  </p>
                </div>
                <div className="w-4 h-4 bg-lime-500 rounded-full"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            )}
          />
        </div>
      </div>
    </main>
  );
};

export default Timeline;
