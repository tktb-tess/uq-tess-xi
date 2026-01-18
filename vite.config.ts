/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
  server: {
    port: 8000,
  },
  preview: {
    port: 8000,
  },
  test: {
    testTimeout: 15000,
  },
});
