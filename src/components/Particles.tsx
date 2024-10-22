import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Particles: React.FC = () => {
  const particlesCount = 30;
  const particles = Array.from({ length: particlesCount });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 1;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute bg-highlight dark:bg-dark-highlight rounded-full"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;
