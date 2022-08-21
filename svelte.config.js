import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";



/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            less: {
                paths: ["."]
            }
        }),
    ],

    kit: {
        adapter: adapter({
            fallback: "404.html"
        }),

        paths: {
            base: "/figs",
        },

        prerender: {
            default: true,
            crawl: true,
        },

        trailingSlash: "always",
    },
};

export default config;
