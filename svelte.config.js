import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";



/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svx"],
    preprocess: [
        preprocess({
            less: {
                paths: ["."]
            }
        }),
        mdsvex({
            extensions: ['.svx']
        })
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
