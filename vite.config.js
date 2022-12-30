import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		'import.meta.vitest': 'undefined'
	},
	test: {
		globals: true,
		include: ['src/lib/helpers/**/*.{js,ts}', 'src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			provider: 'c8'
		}
	}
};

export default defineConfig(config);
