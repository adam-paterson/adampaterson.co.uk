import React from "react";
import { motion } from "framer-motion";
import AnimatedRoles from "./AnimatedRoles";
import Particles from "./Particles";
import ScrollIndicator from "./ScrollIndicator";

interface HeroProps {
  roles: string[];
}

const Hero: React.FC<HeroProps> = ({ roles }) => {
  const text = "Hey, I'm Adam";
  const letters = text.split("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-8 -mt-16">
      <Particles />

      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, var(--highlight-color) 0%, transparent 35%)",
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center pb-24 md:pb-0">
        {/* Text content */}
        <div className="text-center md:text-left space-y-6 mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] text-not-quite-black dark:text-white font-handwriting tracking-tight leading-none">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.21, 0.45, 0.27, 0.9],
                }}
                className={`inline-block ${letter === "," ? "-ml-1" : ""} ${
                  letter === " " ? "w-[0.3em]" : ""
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-not-quite-black dark:text-gray-300 font-display"
          >
            I{" "}
            <AnimatedRoles
              roles={roles}
              typingSpeed={150}
              pauseDuration={8000}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-4 hidden md:block"
          >
            <a
              href="#about"
              className="group inline-flex items-center bg-highlight dark:bg-dark-highlight text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
            >
              Learn More
              <motion.svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </a>
          </motion.div>
        </div>

        {/* Image content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <div className="absolute inset-0 bg-highlight dark:bg-dark-highlight rounded-full blur-2xl opacity-20"></div>
            <motion.img
              src="/avatar.jpeg"
              alt="Adam"
              className="relative w-full h-full rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
