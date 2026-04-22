import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sitemap-test-em5.pages.dev', // Replaced at deploy time
  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    format: 'directory'
  }
});
