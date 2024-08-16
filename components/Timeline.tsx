import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const VerticalTimeline: React.FC = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/data/timeline.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEvents(data))
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
        setError("Error loading timeline data.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      {/* Vertical Line */}

      <div className="relative flex flex-col items-center py-10">
        <div className="w-full flex flex-col items-center space-y-12">
          {events.length === 0 ? (
            <div>Loading...</div>
          ) : (
            events.map((event, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Circle Indicator */}
                <div className="flex gap-8 justify-center items-center">
                  <p className="text-neutral-500 font-bold">{event.date} </p>
                  <div className="w-2 h-16 bg-lime-500 rounded-full flex items-center justify-center"></div>
                </div>

                {/* Event Details */}
                <div className="px-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default VerticalTimeline;
