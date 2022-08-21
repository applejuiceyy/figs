<script type="ts">
    // Suggestion (check code before using, and possibly convert to data.X access later):
    // /** @type {import('./$types').LayoutData} */
    // export let data;
    // $: ({ docs, version, base } = data);

    import pool from "$lib/language/translator";
    import {base as b} from "$app/paths";
    import { onDestroy } from "svelte";
    import TranslatableKey from "$lib/language/TranslatableKey.svelte";


    export let data: import('./$types').LayoutData;

    let unsub: (() => void) | null = null;
    $: {
        if (unsub !== null) {
            unsub();
        }

        unsub = pool.addProvider(data.docs.languages, data.version);
    };

    onDestroy(() => {
        if (unsub !== null) unsub();
    })

</script>

<slot/>

<div class="corner-flyer">
    <button class="top-jumper" on:click={() => window.scrollTo(0, 0)}>
        <TranslatableKey key="jump-to-top"/>
    </button>
    <noscript>Warning: most things in this website won't work without javascript</noscript>
</div>

<!-- required for the prerenderer crawler -->
<a href="{b}{data.base}search" style:display="none">dummy</a>

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