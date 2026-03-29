/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { Features } from 'lightningcss';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  server: {
    port: 8000,
  },
  preview: {
    port: 8000,
  },
  test: {
    testTimeout: 30000,
  },
  css: {
    lightningcss: {
      exclude: Features.LightDark,
    },
  },
});
