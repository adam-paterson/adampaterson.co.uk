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
    <Particles className="absolute w-100 inset-0 -z-10" />
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
          Technical Solution Engineer with 14 years of experience in e-commerce development.
          Exploring the intersection of AI and digital commerce to create innovative shopping experiences.
        </p>
        <div className="flex flex-wrap gap-6">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-neutral-900 dark:bg-neutral-700 text-white 
                     hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-all duration-300 shadow-lg"
          >
            View Services
          </motion.a>
          <motion.a
            href="mailto:hello@adampaterson.co.uk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border-2 border-neutral-600 dark:border-neutral-400
                     text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/10
                     transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default Hero;
