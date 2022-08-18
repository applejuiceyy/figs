<script context="module" type="ts">
    import versions from "docs:all";
    import latest from "docs:latest";

    let load: import('./__layout').Load = async function ({ params }) {
        if (params.version in versions || params.version === "latest") {
            let docs = await versions[params.version === "latest" ? latest : params.version]();

            return {
                stuff: {
                    docs: docs,
                    base: `/${params.version}/`,
                    showingEverything: false,
                    everythingSwitcher: `/${params.version}/all`,
                    version: params.version
                },

                props: {
                    docs: docs,
                    version: params.version,
                    base: `/${params.version}/`
                }
            };
        }

        return {
            status: 404,
            error: "Version not found",
        }
    }

    export {load}
</script>

<script type="ts">
    import type { Docs } from "$lib/typings/rewrite_docs";
    import pool from "$lib/language/translator";
    import {base as b} from "$app/paths";
import { onDestroy } from "svelte";

    export let docs: Docs;
    export let version: string;
    export let base: string;

    let unsub: (() => void) | null = null;
    $: {
        if (unsub !== null) {
            unsub();
        }

        unsub = pool.addProvider(docs.languages, version);
    };

    onDestroy(() => {
        if (unsub !== null) unsub();
    })

</script>

<slot/>

<div class="corner-flyer">
    <button class="top-jumper" on:click={() => window.scrollTo(0, 0)}>
        Jump to top
    </button>
    <noscript>Warning: most things in this website won't work without javascript</noscript>
</div>

<!-- required for the prerenderer crawler -->
<a href="{b}{base}search" style:display="none">dummy</a>

<style>
    .corner-flyer {
        position: fixed;
        bottom: 5px;
        right: 5px;

        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .top-jumper, noscript {
        padding: 5px;
        border-radius: 5px;

        margin: 5px;

        background-color: #444444;
        color: #eeeeee;

        border: 0;

        display: block;
    }
</style>