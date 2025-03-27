import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLvAwait from 'vite-plugin-top-level-await';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		wasm(),
		topLvAwait(),
	],
	server: {
		open: '/.',
	},
	optimizeDeps: {
		exclude: [
			
		],
	}
});
