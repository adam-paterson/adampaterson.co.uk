import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeSwitcher from "./ThemeSwitcher";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact-me" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-xl hairline" style={{ background: "color-mix(in srgb, var(--color-bg) 86%, transparent)" }}>
      <div className="section-shell">
        <div className="flex items-center justify-between h-16">
          <div className="relative group">
            <a href="/" className="flex h-9 w-9 items-center justify-center rounded-sm border font-mono text-sm font-semibold" style={{ borderColor: "var(--color-line-strong)", color: "var(--color-ink)" }} aria-label="Adam Paterson home">
              AP
            </a>
            <span className="absolute left-12 top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-mono text-[0.6rem] uppercase sm:block" style={{ color: "var(--color-soft)", letterSpacing: "0.12em" }}>
              Systems / AI / Commerce
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md border p-2"
                style={{ borderColor: "var(--color-line)", color: "var(--color-ink)" }}
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t backdrop-blur-lg hairline"
              style={{ background: "var(--color-panel-strong)" }}
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block py-3 font-mono text-xs uppercase"
                    style={{ color: "var(--color-muted)", letterSpacing: "0.12em" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
