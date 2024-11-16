import React from 'react';
import { motion } from 'framer-motion';

const OrbitalAccent: React.FC = () => {
  return (
    <div className="absolute -left-2 -top-2 w-12 h-12">
      {/* Orbiting star */}
      <motion.div
        className="absolute"
        animate={{
          transform: [
            'translate(-50%, -50%) rotate(0deg) translateX(15px)',     // Right
            'translate(-50%, -50%) rotate(90deg) translateX(15px)',    // Bottom
            'translate(-50%, -50%) rotate(180deg) translateX(15px)',   // Left
            'translate(-50%, -50%) rotate(270deg) translateX(15px)',   // Top
            'translate(-50%, -50%) rotate(360deg) translateX(15px)',   // Back to right
          ],
        }}
        style={{
          left: '50%',
          top: '50%',
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        {/* Star with glow effect */}
        <motion.div
          className="relative w-2 h-2"
          animate={{
            scale: [1, 1.5, 1, 0.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          {/* Core of the star */}
          <div className="absolute inset-0 rounded-full bg-white dark:bg-white" />
          
          {/* Inner glow */}
          <div className="absolute inset-[-2px] rounded-full bg-white/50 dark:bg-white/50 blur-[1px]" />
          
          {/* Outer glow */}
          <div className="absolute inset-[-4px] rounded-full bg-white/30 dark:bg-white/30 blur-[2px]" />
          
          {/* Sparkle effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            animate={{
              opacity: [1, 0.7, 1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OrbitalAccent; 