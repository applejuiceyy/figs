import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import ViteYaml from '@modyfi/vite-plugin-yaml';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		paths: {
			base: "/figs"
		},

		prerender: {
			default: true,
			crawl: true
		},

		trailingSlash: 'always',

		vite: {
			optimizeDeps: ["markdown"],

			plugins: [ViteYaml()]
		},
	},
};

export default config;
