import React, { useMemo, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ParticlesProps {
  className?: string;
  parallax?: boolean;
}

const Stars: React.FC<ParticlesProps> = ({ className, parallax = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: "-100px 0px"
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const stars = useMemo(() => {
    const generateStars = (count: number, depth: number) => {
      return Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * (depth === 1 ? 2 : depth === 2 ? 3 : 4);
        const baseOpacity = depth === 1 ? 0.3 : depth === 2 ? 0.4 : 0.5;
        const animationDuration = depth === 1 ? "60s" : depth === 2 ? "45s" : "30s";
        const twinkleSpeed = depth === 1 ? 4 : depth === 2 ? 3 : 2;
        const delay = Math.random() * 2;
        
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
      ...generateStars(75, 1),
      ...generateStars(50, 2),
      ...generateStars(25, 3),
    ];
  }, [isInView]);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 2 }).map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 30;
      const endX = startX + (Math.random() * 50 - 25);
      const endY = startY + (Math.random() * 50 + 30);
      
      return (
        <motion.div
          key={`shooting-star-${i}`}
          className="absolute h-[1px] bg-neutral-600 dark:bg-white"
          style={{
            width: '3px',
            left: `${startX}%`,
            top: `${startY}%`,
            transformOrigin: 'center',
            boxShadow: `
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 0 3px rgba(255, 255, 255, 0.1),
              0 0 8px rgba(255, 255, 255, 0.2)
            `,
          }}
          initial={{ 
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            x: [`0%`, `${endX - startX}%`],
            y: [`0%`, `${endY - startY}%`],
          }}
          transition={{
            duration: 1.5,
            delay: i * 5 + Math.random() * 7,
            repeat: Infinity,
            repeatDelay: Math.random() * 15 + 10,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="absolute right-0 w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: '0 0 3px rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      );
    });
  }, []);

  return (
    <div ref={ref} className={`${className} absolute inset-0 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-transparent pointer-events-none" />
      {parallax ? (
        <motion.div style={{ y }} className="absolute inset-0">
          {stars}
          {shootingStars}
        </motion.div>
      ) : (
        <div className="absolute inset-0">
          {stars}
          {shootingStars}
        </div>
      )}
    </div>
  );
};

export default Stars;
