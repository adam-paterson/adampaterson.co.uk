import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center">
      <FiSun className="mr-2" style={{ color: "var(--color-soft)" }} size={16} />
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-xs border transition-colors focus:outline-hidden focus:ring-2 focus:ring-offset-2"
        style={{
          background: "var(--color-panel)",
          borderColor: "var(--color-line-strong)",
          outlineColor: "var(--color-signal)",
        }}
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${
            isDark ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-[2px] transition-transform shadow-xs`}
          style={{ background: "var(--color-ink)" }}
        />
      </button>
      <FiMoon className="ml-2" style={{ color: "var(--color-soft)" }} size={16} />
    </div>
  );
};

export default ThemeSwitcher;
