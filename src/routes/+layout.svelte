<script type="ts">
    import LayoutNavBar from './LayoutNavBar.svelte';

    import { cheeseSvg } from "$lib/actions/cheese";
    import { onDestroy } from "svelte";

    import { page } from "$app/stores";

    import stores from "$lib/state/stores";
    import SidebarView from "$lib/content/sidebar/SidebarView.svelte";

    import HintOverlay from "$lib/intertween/highlight/HintOverlay.svelte";

    import load from "$lib/state/loading";


    import stats from "$lib/docs/statistics";
    import type DocsInterface from "$lib/docs/statistics";

    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import pool from "$lib/language/translator";

    import {beforeNavigate, afterNavigate} from "$app/navigation";

    let cheeseFalling = false;

    let expanded: boolean = false;

    let classi: DocsInterface | null;

    $: {
        let docs = $page.data.docs;
        if (docs === undefined) {
            classi = null;
        }
        else {
            classi = new stats(docs);
        }
    }

    // loader indicator
    let finishLoad = () => {}
    beforeNavigate(() => {
        finishLoad();
        finishLoad = load.request("Navigation");
    })

    afterNavigate(() => finishLoad())

    onDestroy(() => finishLoad())

    let showStatus = false;
    let showStatusTimer: ReturnType<typeof setTimeout> | null = null;

    $: {
        if ($load.length > 0) {
            if (showStatusTimer === null && !showStatus) {
                showStatusTimer = setTimeout(() => {
                    showStatusTimer = null;
                    showStatus = true;
                }, 1000)
            }
        }
        else
        {
            showStatus = false;

            if (showStatusTimer !== null) {
                clearTimeout(showStatusTimer);
                showStatusTimer = null;
            }
        }
    }

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

<div class="root">
    <LayoutNavBar bind:expanded bind:cheeseFalling />

    <div class="category" class:quiet-category={$page.data.hideTable} class:expanded={expanded || $page.data.forceShowTable}>
        <div class="category-flyover">
            <div class="category-sticker">
                {#if classi === null}
                    <span style:padding="10px">
                        <SlottedTranslatableKey key="version-not-selected" let:value>
                            {value}
                        </SlottedTranslatableKey>
                    </span>
                {:else}
                    <SidebarView classi={classi} everythingSwitch={$page.data.everythingSwitcher} everything={!!$page.data.showingEverything} path={$page.data.base ?? "/"} on:select={() => expanded = false}/>
                {/if}


                <footer>
                    <SlottedTranslatableKey key="made-by-applejuice" let:value>
                        {value}
                    </SlottedTranslatableKey>
                </footer>
            </div>
        </div>
    </div>

    <div class:expanded={expanded || $page.data.forceShowTable} class="content">
        <slot />

        <svg class="cheese-svg" width="100%" height="100%" use:cheeseSvg={cheeseFalling} aria-hidden="true" style:pointer-events="none" style:touch-action="none">

        </svg>
    </div>
</div>

<svg id="root-glasspane" class="glasspane" width="100%" height="100%" style:z-index="99999"></svg>

<HintOverlay classi={classi}/>

<div class="corner-flyer">
    <button class="flyer-section" on:click={() => window.scrollTo(0, 0)}>
        <SlottedTranslatableKey key="jump-to-top" let:value>
            {value}
        </SlottedTranslatableKey>
    </button>
    <noscript class="flyer-section">Warning: most things in this website won't work without javascript</noscript>

    <div class="load-div flyer-section" class:active={showStatus}>
        <div style:width="20px" style:height="20px" style:margin-right="10px" style:position="relative">
            <div class="loader" style:--l="0px" style:--b="#ffffff" style:--v="10">
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" style:--b="#000000"/>
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
            </div>
        
            <div class="loader" style:--l="5px" style:--b="#7700ff" style:--v="9">
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div />
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
                <div class="loader-lit" />
            </div>
        </div>

        <div style:display="flex" style:flex-direction="column">
            {#each $load as l}
                <span>{l}</span>
            {/each}
        </div>
    </div>
</div>




<style lang="less">
    // can't $lib
    @import "src/lib/content/navbar/constants.less";

    :global(:root) {
        --background: #000000;
        --window-background: #222222;
        --landmark-in-window: #52585C;
        --color: #aaaaaa;
        --color-in-landmark: white;

        @media (prefers-color-scheme: light) {
            --background: #ffffff;
            --window-background: #cccccc;
            --landmark-in-window: #aaaaaa;
            --color: black;
            --color-in-landmark: black;
        }
    }

    .load-div.active {
        display: flex;
    }

    .corner-flyer {
        position: fixed;
        bottom: 5px;
        right: 5px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .flyer-section {
        padding: 5px;
        border-radius: 5px;

        margin: 5px;

        background-color: #444444;
        color: #eeeeee;

        border: 0;

        display: block;
    }

    .load-div {
        display: none;
        align-items: center;
    }

    .loader {
        display: grid;

        position: absolute;
        inset: 0;

        z-index: var(--v);
        grid-template-columns: repeat(3, 1fr);

        animation: spin 1s linear infinite;

        outline: black 1px solid;
    }

    .loader-lit {
        background-color: var(--b);
    }

    @keyframes spin {
        from {
            transform: translate(var(--l), 0) rotate(0deg);
        }

        to {
            transform: translate(var(--l), 0) rotate(360deg);
        }
    }

    footer {
        margin-top: auto;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;

        background-color: var(--landmark-in-window);
        color: var(--color-in-landmark);
    }

    .root>:global(*):first-child {
        grid-column: 1 / 3;
    }

    .glasspane {
        position: fixed;
        inset: 0;
        touch-action: none;
        pointer-events: none;
    }

    .root {
        display: grid;
        grid-template-rows: min-content 1fr auto;
        grid-template-columns: auto 1fr;

        min-height: 100vh;
        width: calc(100vw - (100vw - 100%));
    }

    @keyframes navbar {
        from {
            transform: translate(0, 0);
        }

        to {
            transform: translate(0, -100%);
        }
    }

    @keyframes zIndex {
        from {
            z-index: 3;
        }

        to {
            z-index: 1;
        }
    }

    @keyframes brew {
        from {
            background-position: 0% 0%;
        }

        to {
            background-position: 0% 100%;
        }
    }

    .content {
        word-wrap: anywhere;

        padding: 5px;

        position: relative;
        isolation: isolate;

        overflow-x: clip;

        padding-bottom: 0;

        grid-row: 2 / 4;
        grid-column: 2;
    }

    .cheese-svg {
        position: absolute;
        inset: 0;
    }

    .category-flyover {
        background-color: var(--window-background);
    }

    @media only screen and (min-width: 800.5px) {
        .category {
            width: 300px;

            position: relative;

            margin: 5px;

            border-radius: 5px;
        }

        .category.quiet-category:not(.expanded) {
            display: none;
        }

        .category-flyover {
            position: absolute;
            inset: 0;

            z-index: 2;
        }


        .category-sticker {
            position: sticky;
            top: 0;

            display: flex;
            flex-direction: column;
            
            overflow-y: auto;

            height: 100vh;
            max-height: 100%;
        }
    }

    @media only screen and (max-width: 800px) {
        .content {
            background-image: initial;
            grid-column: 1 / 3;
        }

        .root {
            grid-template-columns: 1fr;
        }

        .category.expanded {
            display: block;
        }

        .content.expanded {
            display: none;
        }

        .category {
            display: none;

            width: auto;
            position:initial;
            top: 0;

            overflow-y: visible;

            z-index: 0;
        }
    }

    @media (pointer: coarse) {
        .category :global(a) {
            padding: 20px;
            box-sizing: border-box;
            outline: 1px #777777 solid;
        }
    }

    :global(body) {
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        font-family: Roboto, Arial, Helvetica, sans-serif;

        color: var(--color);
        background-color: var(--background);
    }

    :global(button) {
        // https://gist.github.com/MoOx/9137295
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;

        background: transparent;

        /* inherit font & color from ancestor */
        color: inherit;
        font: inherit;

        /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
        line-height: normal;

        /* Corrects font smoothing for webkit */
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        /* Corrects inability to style clickable `input` types in iOS */
        -webkit-appearance: none;

        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
    }
</style>