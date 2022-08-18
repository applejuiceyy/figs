import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import ViteYaml from "@modyfi/vite-plugin-yaml";

import stripper from "./plugins/translationStripper.js";
import processor from "./plugins/docsProcessor.js";

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

        vite: {
            ptimizeDeps: ["markdown", "matter-js", "luaparse"],

            plugins: [ViteYaml(), stripper(), processor()],
            build: {
                assetsInlineLimit: 0
            }
        },
    },
};

export default config;
