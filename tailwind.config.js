/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "off-white": "#f5f5f5",
        "dark-bg": "#1a202c",
        "not-quite-black": "#444444",
        highlight: "#E63946",
        "dark-highlight": "#D62839",
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
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
