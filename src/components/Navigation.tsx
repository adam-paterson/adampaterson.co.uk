import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Articles", path: "/articles" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 flex w-full items-center bg-off-white dark:bg-dark-bg z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-not-quite-black dark:text-white hover:text-highlight dark:hover:text-dark-highlight transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-not-quite-black dark:text-white"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-not-quite-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
