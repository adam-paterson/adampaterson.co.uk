import React from "react";
import { motion } from "framer-motion";
import AnimatedRoles from "./AnimatedRoles";
import Particles from "./Stars";
import ScrollIndicator from "./ScrollIndicator";

interface HeroProps {
  roles: string[];
}

const Hero: React.FC<HeroProps> = ({ roles }) => {
  return (
    <>
    <Particles className="absolute w-100 inset-0 -z-10" parallax={true} />
    <section className="relative min-h-[85vh] flex items-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto px-4"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-300 dark:to-neutral-400">
          Hi, I'm Adam
        </h1>
        <div className="mb-8 text-2xl sm:text-3xl md:text-4xl text-slate-700 dark:text-slate-300">
          I <AnimatedRoles roles={roles} />
        </div>
        <p className="text-lg sm:text-xl max-w-2xl mb-12 text-slate-600 dark:text-slate-400 leading-relaxed">
          I'm a full stack developer with experience across web, mobile apps, and game development. Currently
          focused on building intelligent applications powered by Large Language Models and exploring new frontiers in AI.
        </p>
        <div className="flex flex-wrap gap-6">
          <motion.a
            href="#services"
            whileHover={{ 
              y: -4,
              boxShadow: "0 10px 20px -10px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 rounded-lg bg-neutral-900 dark:bg-neutral-700 text-white 
                     hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors duration-300"
          >
            <motion.span
              className="absolute inset-0 rounded-lg bg-white/10"
              animate={{
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            View Services
          </motion.a>
          
          <motion.a
            href="mailto:hello@adampaterson.co.uk"
            whileHover={{ 
              y: -4,
              boxShadow: "0 10px 20px -10px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 rounded-lg border-2 border-neutral-600 dark:border-neutral-400
                     text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/10
                     transition-colors duration-300"
          >
            <motion.span
              className="absolute inset-0 rounded-lg bg-neutral-600/10 dark:bg-neutral-400/10"
              animate={{
                opacity: [0, 0.1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default Hero;
