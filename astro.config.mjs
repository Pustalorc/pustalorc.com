import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import internalLinks from './src/data/links/internal.ts';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  site: internalLinks.base,
  build: {
    format: 'file'
  },
  integrations: [icon(), sitemap()],
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  }
});
