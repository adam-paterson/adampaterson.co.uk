import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, SiVuedotjs, SiPhp, SiPython, SiAmazon, 
  SiGooglecloud, SiDocker, SiKubernetes, SiShopify,
  SiMagento, SiLaravel, SiSymfony, SiJavascript,
  SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiPytorch, SiTensorflow, SiOpenai,
  SiMicrosoft,
  SiParrotsecurity,
  SiBigcommerce,
  SiRuby,
  SiZerodha,
  SiZend,
  SiPuppeteer,
  SiTerraform
} from "react-icons/si";
import Stars from "./Stars";

interface TechItem {
  name: string;
  icon: React.ElementType;
  x: number;  // Percentage position
  y: number;  // Percentage position
}

interface Constellation {
  name: string;
  items: TechItem[];
}

const constellations: Constellation[] = [
  {
    name: "AI & ML",
    items: [
      { name: "Python", icon: SiPython, x: 20, y: 20 },
      { name: "PyTorch", icon: SiPytorch, x: 25, y: 25 },
      { name: "TensorFlow", icon: SiTensorflow, x: 15, y: 30 },
      { name: "OpenAI", icon: SiOpenai, x: 30, y: 30 },
      { name: "AutoGen", icon: SiMicrosoft, x: 40, y: 25 },
      { name: "Anthropic", icon: SiPython, x: 45, y: 30 },

    ]
  },
  {
    name: "Frontend",
    items: [
      { name: "JavaScript", icon: SiJavascript, x: 60, y: 15 },
      { name: "TypeScript", icon: SiTypescript, x: 65, y: 20 },
      { name: "React", icon: SiReact, x: 70, y: 25 },
      { name: "Vue.js", icon: SiVuedotjs, x: 55, y: 30 },
      { name: "Next.js", icon: SiNextdotjs, x: 75, y: 15 },
      { name: "TailwindCSS", icon: SiTailwindcss, x: 50, y: 25 },
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "PHP", icon: SiPhp, x: 20, y: 60 },
      { name: "Node.js", icon: SiNodedotjs, x: 25, y: 65 },
      { name: "Laravel", icon: SiLaravel, x: 15, y: 70 },
      { name: "Symfony", icon: SiSymfony, x: 30, y: 75 },
      { name: "Ruby", icon: SiRuby, x: 35, y: 80 },
      { name: "Ruby on Rails", icon: SiRuby, x: 35, y: 80 },
      { name: "Zend", icon: SiZend, x: 40, y: 85 },
    ]
  },
  {
    name: "Infrastructure",
    items: [
      { name: "AWS", icon: SiAmazon, x: 70, y: 60 },
      { name: "Docker", icon: SiDocker, x: 75, y: 65 },
      { name: "Kubernetes", icon: SiKubernetes, x: 65, y: 70 },
      { name: "Terraform", icon: SiTerraform, x: 85, y: 80 },
    ]
  },
  {
    name: "E-commerce",
    items: [
      { name: "Shopify", icon: SiShopify, x: 85, y: 60 },
      { name: "Magento", icon: SiMagento, x: 90, y: 65 },
      { name: "BigCommerce", icon: SiBigcommerce, x: 95, y: 70 },
    ]
  }
];

const TechStack: React.FC = () => {
  const [hoveredConstellation, setHoveredConstellation] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden">
      <Stars className="absolute inset-0" parallax={true} />
      
      {/* Title centered */}
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-2xl font-bold gradient-text">Technology Constellations</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mt-4">
          Navigate through my technical universe
        </p>
      </div>

      {/* Constellations container */}
      <div className="relative w-full h-[500px]">
        {/* Constellation names */}
        {constellations.map((constellation) => (
          <motion.div
            key={constellation.name}
            className="absolute text-sm font-mono text-neutral-600 dark:text-neutral-400"
            style={{
              left: `${constellation.items[0].x}%`,
              top: `${constellation.items[0].y - 8}%`,
              zIndex: 20,
            }}
            animate={{
              opacity: hoveredConstellation === constellation.name ? 1 : 0.5,
            }}
          >
            {constellation.name}
          </motion.div>
        ))}

        {/* Constellation lines and icons */}
        {constellations.map((constellation) => (
          <div
            key={constellation.name}
            className="absolute inset-0"
            onMouseEnter={() => setHoveredConstellation(constellation.name)}
            onMouseLeave={() => setHoveredConstellation(null)}
          >
            {/* Constellation lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
              {constellation.items.slice(0, -1).map((item, index) => (
                <motion.line
                  key={index}
                  x1={`${item.x}%`}
                  y1={`${item.y}%`}
                  x2={`${constellation.items[index + 1].x}%`}
                  y2={`${constellation.items[index + 1].y}%`}
                  stroke={hoveredConstellation === constellation.name 
                    ? "rgba(115, 115, 115, 0.5)" 
                    : "rgba(115, 115, 115, 0.2)"}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    filter: hoveredConstellation === constellation.name 
                      ? ["blur(0px)", "blur(2px)", "blur(0px)"] 
                      : "blur(0px)",
                  }}
                  transition={{
                    pathLength: { duration: 1.5, ease: "easeInOut" },
                    filter: {
                      duration: 2,
                      repeat: Infinity,
                    }
                  }}
                />
              ))}
            </svg>

            {/* Tech icons */}
            {constellation.items.map((tech) => (
              <div
                key={tech.name}
                className="absolute"
                style={{
                  left: `${tech.x}%`,
                  top: `${tech.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                }}
              >
                <motion.div 
                  className="group relative flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  style={{ transformOrigin: 'center center' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <tech.icon 
                    className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300
                      ${hoveredConstellation === constellation.name 
                        ? 'text-neutral-800 dark:text-neutral-200' 
                        : 'text-neutral-600 dark:text-neutral-400'}`}
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-200 text-xs text-neutral-600 dark:text-neutral-400 
                                 whitespace-nowrap pointer-events-none z-40">
                    {tech.name}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
