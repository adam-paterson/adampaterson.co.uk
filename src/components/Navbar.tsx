import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-900 dark:text-white text-lg">
                  Adam's Portfolio
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="py-4 px-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="/projects"
              className="py-4 px-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="/about"
              className="py-4 px-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="py-4 px-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
