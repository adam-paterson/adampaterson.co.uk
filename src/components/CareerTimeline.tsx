import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineEntry {
  date: string;
  title: string;
  company: string;
  companyLogo: string;
  description: string;
  achievements?: string[];
}

const timeline: TimelineEntry[] = [
  {
    date: "2022 - Present",
    title: "Technical Solutions Engineer",
    company: "IDHL",
    companyLogo: "/logos/weareidhl_logo.jpeg",
    description:
      "Leading technical solutions for enterprise e-commerce clients, specializing in Adobe Commerce, Shopify, and modern headless architectures. Exploring AI integration opportunities for enhanced e-commerce experiences.",
    achievements: [
      "Architected and delivered enterprise-scale e-commerce solutions",
      "Led technical discovery and solution design for major clients",
      "Established modern development practices and CI/CD pipelines",
      "Mentored development teams on best practices and emerging technologies"
    ],
  },
  {
    date: "2021 - 2022",
    title: "Senior Software Engineer",
    company: "Absolute Design",
    companyLogo: "/logos/absolute_design_logo.jpeg",
    description:
      "Led development of complex e-commerce solutions using Adobe Commerce and Shopify, focusing on performance optimization and scalability.",
    achievements: [
      "Delivered high-performance e-commerce solutions for enterprise clients",
      "Implemented automated testing and deployment workflows",
      "Optimized site performance and reduced server costs"
    ],
  },
  {
    date: "2019 - 2021",
    title: "Senior Software Engineer",
    company: "Deploy (Attain Design)",
    companyLogo: "/logos/attain_design_logo.jpeg",
    description:
      "Specialized in Adobe Commerce development and technical architecture, delivering robust e-commerce solutions for mid to large-size retailers.",
    achievements: [
      "Led technical architecture for major e-commerce projects",
      "Implemented performance optimization strategies",
      "Developed custom modules and integrations"
    ],
  },
  {
    date: "2017 - 2019",
    title: "Software Engineer",
    company: "sixbysix",
    companyLogo: "/logos/1631324242009.jpeg",
    description:
      "Focused on building custom e-commerce solutions and integrations using Adobe Commerce and other platforms.",
    achievements: [
      "Developed complex multi-store implementations",
      "Created custom ERP integrations",
      "Improved development workflows and standards"
    ],
  },
  {
    date: "2021 - 2023",
    title: "Lead Software Engineer",
    company: "Space 48",
    companyLogo: "/logos/space_48_logo.jpeg",
    description:
      "Led development teams in building and maintaining large-scale e-commerce platforms, with a focus on Adobe Commerce and modern front-end technologies.",
    achievements: [
      "Managed development teams across multiple projects",
      "Reduced server costs through infrastructure optimization",
      "Implemented new development standards and practices"
    ],
  },
  {
    date: "2015 - 2017",
    title: "Software Engineer",
    company: "Meanbee",
    companyLogo: "/logos/meanbee.jpeg",
    description:
      "Specialized in e-commerce development, building custom solutions and extensions for Adobe Commerce and other platforms.",
    achievements: [
      "Built custom e-commerce extensions and modules",
      "Contributed to open-source e-commerce projects",
      "Implemented automated testing practices"
    ]
  },
  {
    date: "2014 - 2015",
    title: "Lead Developer",
    company: "JH",
    companyLogo: "/logos/jh_logo.jpeg",
    description:
      "Led development of e-commerce solutions using Adobe Commerce, focusing on custom implementations and integrations.",
    achievements: [
      "Managed development team and project delivery",
      "Implemented coding standards and best practices",
      "Delivered complex e-commerce solutions"
    ]
  },
];

const INITIAL_DISPLAY_COUNT = 2;

const CareerTimeline: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showAllEntries, setShowAllEntries] = useState(false);

  const displayedTimeline = showAllEntries
    ? timeline
    : timeline.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <div className="relative">
      {/* Timeline Line - centered on mobile */}
      <div className="absolute left-1/2 md:left-1/2 h-full w-px bg-gradient-to-b from-neutral-400/50 via-neutral-600 to-neutral-400/50 dark:from-neutral-500/50 dark:via-neutral-400 dark:to-neutral-500/50 transform -translate-x-1/2" />

      {/* Timeline Entries */}
      <AnimatePresence mode="wait">
        {displayedTimeline.map((entry, index) => (
          <motion.div
            key={entry.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } mb-12 md:mb-24 timeline-entry`}
          >
            {/* Date bubble with pulse effect - centered on mobile */}
            <div className="absolute left-1/2 md:left-1/2 w-8 h-8 bg-neutral-800 dark:bg-neutral-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-white dark:bg-neutral-900 rounded-full" />
              <div className="absolute w-12 h-12 bg-neutral-800 dark:bg-neutral-400 rounded-full opacity-20 animate-ping" />
            </div>

            {/* Content - centered on mobile */}
            <div
              className={`w-full md:w-5/12 ${
                index % 2 === 0 ? "md:pl-12" : "md:pr-12"
              } pl-0 md:pl-0 ml-auto mr-auto md:ml-0 md:mr-0 max-w-[calc(100%-3rem)] md:max-w-none`}
            >
              <motion.div
                className="bg-white dark:bg-neutral-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl 
                           transition-all duration-300 relative overflow-hidden group backdrop-blur-sm
                           border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                whileHover={{ scale: 1.02 }}
                onClick={() =>
                  setExpandedCard(expandedCard === index ? null : index)
                }
              >
                {/* Company Logo with improved styling */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-neutral-50 dark:bg-neutral-700/50 
                                rounded-xl flex items-center justify-center transform group-hover:scale-110 
                                transition-transform duration-300 backdrop-blur-sm border border-neutral-200 dark:border-neutral-600">
                  <img
                    src={entry.companyLogo}
                    alt={`${entry.company} logo`}
                    className="w-12 h-12 object-contain p-1"
                  />
                </div>

                {/* Date Badge with gradient */}
                <span className="inline-block text-sm text-white font-mono bg-gradient-to-r 
                                 from-neutral-800 to-neutral-600 dark:from-neutral-600 dark:to-neutral-700 
                                 px-3 py-1 rounded-full mb-3">
                  {entry.date}
                </span>

                {/* Title and Company */}
                <h3 className="text-xl font-bold mt-2 mb-1 pr-20">
                  {entry.title}
                </h3>
                <h4 className="text-lg text-slate-600 dark:text-slate-400 mb-3">
                  {entry.company}
                </h4>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {entry.description}
                </p>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCard === index && entry.achievements && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <h5 className="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-400">
                        Key Achievements
                      </h5>
                      <ul className="list-disc list-inside mb-4 space-y-2">
                        {entry.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-slate-700 dark:text-slate-300"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand/Collapse Indicator */}
                {entry.achievements && (
                  <motion.div
                    className="absolute bottom-4 right-4 text-neutral-600 dark:text-neutral-400"
                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  >
                    ↓
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* "View More" Button */}
        {!showAllEntries && timeline.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center mt-12 relative z-10"
          >
            <motion.button
              onClick={() => setShowAllEntries(true)}
              className="group relative inline-flex items-center gap-2 bg-neutral-900 dark:bg-neutral-700 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Journey Further Back</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}

        {/* "Show Less" Button */}
        {showAllEntries && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => {
                setShowAllEntries(false);
                // Smooth scroll to the last visible entry
                document
                  .querySelectorAll(".timeline-entry")
                  [INITIAL_DISPLAY_COUNT - 1]?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="group inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Show Recent Positions</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{
                  y: [0, 3, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient Overlay at the bottom */}
      {!showAllEntries && timeline.length > INITIAL_DISPLAY_COUNT && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white dark:from-dark-bg to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default CareerTimeline;
