import processor from "./plugins/docsProcessor/index.js";
import { sveltekit } from '@sveltejs/kit/vite';

export default {
    optimizeDeps: ["markdown", "matter-js", "luaparse"],

    plugins: [sveltekit(), await processor()],
    build: {
        assetsInlineLimit: 0
    }
}