import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.PUBLIC_HOSTNAME || process.env.NEXT_PUBLIC_HOSTNAME || 'https://ymcheung.tw',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Overpass',
      cssVariable: '--font-overpass',
      weights: [300, 400, 600, 800],
      styles: ['normal'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Overpass',
      cssVariable: '--font-overpass',
      weights: [400, 700, 800],
      styles: ['italic'],
    },
  ],
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
