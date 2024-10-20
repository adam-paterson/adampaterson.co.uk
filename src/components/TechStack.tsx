import React, { useState } from "react";
import {
  FaReact,
  FaPhp,
  FaJs,
  FaPython,
  FaAws,
  FaDocker,
  FaShopify,
  FaMagento,
  FaWordpress,
  FaCode,
  FaShoppingBag,
  FaBook,
  FaBrain,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiTailwindcss,
  SiBigcommerce,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
  domain: string;
}

const skills: Skill[] = [
  { name: "React", icon: FaReact, category: "Frontend", domain: "Technology" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    domain: "Technology",
  },
  { name: "PHP", icon: FaPhp, category: "Language", domain: "Technology" },
  {
    name: "JavaScript",
    icon: FaJs,
    category: "Language",
    domain: "Technology",
  },
  {
    name: "Python",
    icon: FaPython,
    category: "Language",
    domain: "Technology",
  },
  { name: "AWS", icon: FaAws, category: "Cloud", domain: "Technology" },
  { name: "Docker", icon: FaDocker, category: "DevOps", domain: "Technology" },
  { name: "MySQL", icon: SiMysql, category: "Database", domain: "Technology" },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    domain: "Technology",
  },
  { name: "Redis", icon: SiRedis, category: "Database", domain: "Technology" },
  {
    name: "Elasticsearch",
    icon: SiElasticsearch,
    category: "Search",
    domain: "Technology",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    domain: "Technology",
  },
  {
    name: "Shopify",
    icon: FaShopify,
    category: "Platform",
    domain: "E-commerce",
  },
  {
    name: "Magento",
    icon: FaMagento,
    category: "Platform",
    domain: "E-commerce",
  },
  {
    name: "BigCommerce",
    icon: SiBigcommerce,
    category: "Platform",
    domain: "E-commerce",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    category: "CMS",
    domain: "Brochureware",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    category: "Framework",
    domain: "AI/ML",
  },
  { name: "PyTorch", icon: SiPytorch, category: "Framework", domain: "AI/ML" },
];

const domains = [
  { name: "Technology", icon: FaCode },
  { name: "E-commerce", icon: FaShoppingBag },
  { name: "Brochureware", icon: FaBook },
  { name: "AI/ML", icon: FaBrain },
];

const categories = Array.from(new Set(skills.map((skill) => skill.category)));

const TechStack: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState("Technology");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="my-12 w-50 bg-off-white dark:bg-gray-800 rounded-lg p-6">
      <h3 className="text-3xl text-center tracking-tight font-bold font-handwriting mb-6 text-not-quite-black dark:text-white">
        Skills & Tech Stack
      </h3>

      {/* Domain Buttons */}
      <div className="flex flex-wrap justify-center mb-8">
        {domains.map((domain) => (
          <button
            key={domain.name}
            onClick={() => {
              setActiveDomain(domain.name);
              setActiveCategory("All");
            }}
            className={`flex flex-col items-center p-4 m-2 rounded-lg transition-all duration-300 w-32
              ${
                activeDomain === domain.name
                  ? "bg-highlight dark:bg-dark-highlight text-white shadow-md transform scale-105"
                  : "bg-gray-200 opacity-45 text-not-quite-black dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            <domain.icon className="text-4xl mb-2" />
            <span className="text-xs font-handwriting font-semibold">
              {domain.name}
            </span>
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <label
          htmlFor="category-select"
          className="block text-sm font-medium text-not-quite-black dark:text-gray-300 mb-2"
        >
          Filter by Category:
        </label>
        <select
          id="category-select"
          onChange={(e) => setActiveCategory(e.target.value)}
          value={activeCategory}
          className="w-full md:w-64 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          {categories
            .filter((category) =>
              skills.some(
                (skill) =>
                  skill.domain === activeDomain && skill.category === category
              )
            )
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills
          .filter(
            (skill) =>
              skill.domain === activeDomain &&
              (activeCategory === "All" || skill.category === activeCategory)
          )
          .map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <skill.icon className="text-4xl mb-2 text-highlight dark:text-dark-highlight" />
              <span className="text-sm text-center text-not-quite-black dark:text-gray-300 font-medium">
                {skill.name}
              </span>
              <span className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">
                {skill.category}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TechStack;
