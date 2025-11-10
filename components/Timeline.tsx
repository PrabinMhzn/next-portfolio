"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string | string[];
  type: string; // new field for category like "education", "internship"
}

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    fetch("/data/timeline.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data: TimelineEvent[]) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error loading timeline data.");
        setIsLoading(false);
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (isLoading) return <div className="text-center">Loading...</div>;

  const getBorderColor = (type: string) => {
    switch (type) {
      case "education":
        return "border-lime-500";
      case "internship":
        return "border-blue-500";
      case "bootcamp":
        return "border-purple-500";
      default:
        return "border-gray-500";
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-lime-500 text-white";
      case "internship":
        return "bg-blue-500 text-white";
      case "bootcamp":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto py-20">
      {/* Animated vertical line */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-1/2 top-0 w-1 bg-lime-500 origin-top h-full"
      />

      {/* Timeline items */}
      <div className="space-y-20 relative z-10">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.date}
              className={`relative flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              {/* Event Card */}
              <div
                className={`bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg w-full md:w-5/12 hover:scale-105 transition-transform relative z-10 cursor-pointer border-l-4 ${getBorderColor(
                  event.type
                )}`}
                onClick={() => setSelectedEvent(event)}
              >
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${getBadgeColor(
                    event.type
                  )}`}
                >
                  {event.type.toUpperCase()}
                </span>

                <p className="text-gray-500 dark:text-lime-300 font-semibold mb-1">
                  {event.date}
                </p>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                  {Array.isArray(event.description)
                    ? event.description.join(" ")
                    : event.description}
                </p>
              </div>

              {/* Dot */}
              <div className="w-6 h-6 bg-lime-500 rounded-full absolute left-1/2 -translate-x-1/2 z-20 shadow-lg" />
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-xl max-w-lg w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 dark:hover:text-white font-bold text-lg"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>

            <span
              className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${getBadgeColor(
                selectedEvent.type
              )}`}
            >
              {selectedEvent.type.toUpperCase()}
            </span>

            <p className="text-gray-500 dark:text-lime-300 font-semibold mb-2">
              {selectedEvent.date}
            </p>
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>

            <ul className="list-disc pl-5 text-neutral-700 dark:text-gray-300 space-y-1">
              {Array.isArray(selectedEvent.description)
                ? selectedEvent.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))
                : selectedEvent.description}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Timeline;
