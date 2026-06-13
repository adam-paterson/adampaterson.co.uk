// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.adampaterson.co.uk",
  base: "/",
  integrations: [react(), sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
