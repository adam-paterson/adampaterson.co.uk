import typography from '@tailwindcss/typography';

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};
