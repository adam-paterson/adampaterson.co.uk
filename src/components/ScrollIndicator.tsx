import React from "react";
import { motion } from "framer-motion";

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-display">
          Scroll
        </span>
        <svg
          className="w-6 h-6 text-highlight dark:text-dark-highlight"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
