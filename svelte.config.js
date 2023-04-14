import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import hydrateMdsvexRemark from "./plugins/mdsvex/hydrateMdsvexRemark.js"
import hydrateMdsvexRehype from "./plugins/mdsvex/hydrateMdsvexRehype.js"


function highlight(code, lang) {
    return `<Chunk><AutonomousCode value={\`${code}\`}/></Chunk>`;
}


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
            extensions: ['.svx'],

            remarkPlugins: [hydrateMdsvexRemark],
            rehypePlugins: [hydrateMdsvexRehype],

            highlight: {
                highlighter: highlight
            },

            layout: "src/lib/mdsvex/MdsvexBoostrap.svelte"
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
            crawl: true,
        }
    },
};

export default config;
