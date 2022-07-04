import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import isoImport from "vite-plugin-iso-import";

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


			plugins: [isoImport()]
		},
	},
};

export default config;
