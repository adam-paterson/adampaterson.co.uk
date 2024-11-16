import React from 'react';
import { motion } from 'framer-motion';

const NebulaEffect: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
      animate={{
        background: [
          'radial-gradient(circle at 50% 50%, rgba(123, 97, 255, 0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 60% 40%, rgba(123, 97, 255, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 40% 60%, rgba(123, 97, 255, 0.1) 0%, transparent 50%)',
        ]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default NebulaEffect; 