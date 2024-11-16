import React from 'react';
import { motion } from 'framer-motion';

const CosmicLoader: React.FC = () => {
  return (
    <motion.div className="relative w-12 h-12">
      <motion.div
        className="absolute inset-0 border-2 border-transparent border-t-neutral-600 dark:border-t-neutral-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-2 border-2 border-transparent border-t-neutral-400 dark:border-t-neutral-600 rounded-full"
        animate={{ rotate: -180 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default CosmicLoader; 