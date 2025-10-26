import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://geraldiner.github.io',
  base: '/reuben-sandwiches',
  vite: {
    plugins: [tailwindcss()],
  },
});
