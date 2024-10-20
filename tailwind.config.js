/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "off-white": "#f7f7f7",
        "dark-bg": "#1a202c",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ['"Monaspace Argon"', "monospace"],
        body: ['"Monaspace Argon"', "monospace"],
      },
      animation: {
        blink: "blink 0.7s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
