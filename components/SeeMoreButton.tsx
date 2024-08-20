import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface SeeMoreButtonProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  initialVisibleCount?: number;
}
const SeeMoreButton = <T,>({
  items,
  renderItem,
  initialVisibleCount = 4,
}: SeeMoreButtonProps<T>) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMore = () => {
    setVisibleCount(items.length);
    setIsExpanded(true);
  };

  const handleSeeLess = () => {
    setVisibleCount(initialVisibleCount);
    setIsExpanded(false);
  };

  return (
    <div className="flex flex-col items-end gap-8 ">
      <AnimatePresence>
        {items.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </AnimatePresence>
      {visibleCount < items.length && !isExpanded && (
        <button
          className="mt-4 py-2 px-4 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors"
          onClick={handleSeeMore}
        >
          See More
        </button>
      )}
      {isExpanded && (
        <button
          className="mt-4 py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          onClick={handleSeeLess}
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default SeeMoreButton;
