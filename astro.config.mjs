// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  root: "./src",
  integrations: [tailwind(), icon()],
  base: "/lms",
});