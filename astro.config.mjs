// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://geraldiner.github.io/reuben-sandwiches',
  base: '/reuben-sandwiches/', // required for GitHub Pages
  vite: {
    plugins: [tailwindcss()],
  },
});
