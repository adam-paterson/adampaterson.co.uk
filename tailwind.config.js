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
        sans: ['"Monaspace Xenon"', "monospace"],
        mono: ['"Monaspace Argon"', "monospace"],
        body: ['"Monaspace Neon"', "monospace"],
        display: ['"Monaspace Krypton"', "monospace"],
        handwriting: ['"Monaspace Radon"', "monospace"],
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
