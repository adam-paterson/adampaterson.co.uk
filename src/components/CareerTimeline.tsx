import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stars from './Stars';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

const CareerTimeline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = (newDirection: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === timeline.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? timeline.length - 1 : prev - 1;
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative min-h-[600px] overflow-hidden" ref={containerRef}>
      <Stars className="absolute inset-0" />
      
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          disabled={isAnimating}
        >
          <FiChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(1)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          disabled={isAnimating}
        >
          <FiChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Rocket */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`rocket-${currentIndex}-${direction}`}
          className="absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8"
          initial={{ 
            x: direction === 1 ? '-10%' : '110%',
            opacity: 0
          }}
          animate={{ 
            x: direction === 1 ? '110%' : '-10%',
            opacity: [0, 1, 1, 0]
          }}
          exit={{ opacity: 0 }}
          transition={{
            x: { duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.5, times: [0, 0.1, 0.9, 1] }
          }}
        >
          <motion.div
            className="w-full h-full"
            initial={{ rotate: direction === 1 ? 0 : 180 }}
            animate={{ rotate: direction === 1 ? 0 : 180 }}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-full h-full"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
              }}
            >
              <path
                fill="currentColor"
                d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2Z"
              />
              <motion.path
                fill="#FF6B6B"
                d="M4 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2z"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Timeline Cards */}
      <div className="relative pt-16 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ 
              opacity: 0,
              x: direction === 1 ? 100 : -100 
            }}
            animate={{ 
              opacity: 1,
              x: 0 
            }}
            exit={{ 
              opacity: 0,
              x: direction === 1 ? -100 : 100 
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={timeline[currentIndex].companyLogo} 
                  alt={timeline[currentIndex].company}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">{timeline[currentIndex].title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {timeline[currentIndex].company} • {timeline[currentIndex].date}
                  </p>
                </div>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {timeline[currentIndex].description}
              </p>
              {timeline[currentIndex].achievements && (
                <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                  {timeline[currentIndex].achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {timeline.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentIndex 
                  ? 'bg-neutral-800 dark:bg-neutral-200' 
                  : 'bg-neutral-300 dark:bg-neutral-700'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;
