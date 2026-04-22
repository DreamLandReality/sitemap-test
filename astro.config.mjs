import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://example.com', // Replaced at deploy time
  integrations: [
    tailwind()
  ],
  build: {
    format: 'directory'
  }
});
