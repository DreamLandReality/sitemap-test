import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sitemap-test-em5.pages.dev',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page.endsWith('/') // 👈 fix
    })
  ],
  build: {
    format: 'directory'
  }
});
