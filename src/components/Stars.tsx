import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ParticlesProps {
  className?: string;
}

const Stars: React.FC<ParticlesProps> = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stars = useMemo(() => {
    const generateStars = (count: number, depth: number) => {
      return Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * (depth === 1 ? 2 : depth === 2 ? 3 : 4);
        const baseOpacity = depth === 1 ? 0.3 : depth === 2 ? 0.4 : 0.5;
        const animationDuration = depth === 1 ? "60s" : depth === 2 ? "45s" : "30s";
        const twinkleSpeed = depth === 1 ? 4 : depth === 2 ? 3 : 2;
        const delay = Math.random() * 2; // Reduced initial delay
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        const moveRange = depth === 1 ? 1 : depth === 2 ? 1.5 : 2;
        const moveRangeX = (Math.random() - 0.5) * moveRange;
        const moveRangeY = (Math.random() - 0.5) * moveRange;

        return (
          <motion.div
            key={`star-${depth}-${i}`}
            className="absolute rounded-full dark:bg-white bg-neutral-800"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? {
              opacity: [0, baseOpacity],
              scale: [0, 1],
              x: [
                `${moveRangeX}%`,
                `${-moveRangeX}%`,
                `${moveRangeX}%`
              ],
              y: [
                `${moveRangeY}%`,
                `${-moveRangeY}%`,
                `${moveRangeY}%`
              ],
            } : {}}
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              boxShadow: `0 0 ${size * 2}px currentColor`,
            }}
            transition={{
              delay: delay,
              duration: parseInt(animationDuration),
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
              opacity: {
                duration: 1,
                delay: delay,
              },
              scale: {
                duration: 1,
                delay: delay,
              }
            }}
          />
        );
      });
    };

    return [
      ...generateStars(75, 1),  // Background stars
      ...generateStars(50, 2),  // Mid-layer stars
      ...generateStars(25, 3),  // Foreground stars
    ];
  }, [isInView]); // Added isInView dependency

  return (
    <div ref={ref} className={`${className} absolute inset-0 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-transparent pointer-events-none" />
      {stars}
    </div>
  );
};

export default Stars;
