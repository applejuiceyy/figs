<script type="ts">
    import {base} from "$app/paths";
    import version from "$lib/docs/rewrite_version.txt?raw";
    import { cheeseSvg } from "$lib/actions/cheese";
    import { onDestroy, onMount } from "svelte";

    import { page } from "$app/stores";

    import stores from "$lib/state/stores";
    import SidebarView from "$lib/content/sidebar/SidebarView.svelte";

    import HintOverlay from "$lib/highlighter/HintOverlay.svelte";

    import state from "$lib/state/stores";

    import versions from "docs:all";

    import stats from "$lib/docs/statistics";
    import type DocsInterface from "$lib/docs/statistics";

    import NavBar from "$lib/content/navbar/NavBar.svelte";
    import NavBarDropdown from "$lib/content/navbar/NavBarDropdown.svelte";
    import NavBarLink from "$lib/content/navbar/NavBarLink.svelte";
    import NavBarButton from "$lib/content/navbar/NavBarButton.svelte";
import NavBarFloater from "$lib/content/navbar/NavBarFloater.svelte";
import NavBarExpandButton from "$lib/content/navbar/NavBarExpandButton.svelte";
import NavBarSearcher from "$lib/content/navbar/NavBarSearcher.svelte";
import TranslatableKey from "$lib/language/TranslatableKey.svelte";
import pool from "$lib/language/translator";
import latest from "docs:latest";

    let interv: any = null;

    let cheeseFalling = false;

    onMount(()=> {
        let v = ()=>{
            stamina += staminaMomentum;
            stamina = Math.max(stamina, 0);
            staminaMomentum -= 0.001;
            staminaMomentum *= 0.99;

            if(stamina > 20) {
                cheeseFalling = true;
            }

            requestAnimationFrame(v);
        }
        interv = requestAnimationFrame(v);
    })

    onDestroy(() => interv && cancelAnimationFrame(interv));

    function increaseStamina() {
        if(!cheeseFalling) {
            staminaMomentum += 0.1;
        }
    }

    let stamina: number = 0;
    let staminaMomentum: number = 0;

    let expanded: boolean = false;

    let classi: DocsInterface | null;

    $: {
        let docs = ($page.stuff as any).docs;
        if (docs === undefined) {
            classi = null;
        }
        else {
            classi = new stats(($page.stuff as any).docs);
        }
    }

    let stuffs: any;

    $: stuffs = ($page.stuff as any);
</script>

<div class="root">
    <NavBar>
        <NavBarLink inline href={base + "/"}>FIGS!!</NavBarLink>

        <NavBarSearcher destination="{base}{stuffs.base}search"/>


        <NavBarFloater>
            <NavBarExpandButton>
                <TranslatableKey key="content"/>
            </NavBarExpandButton>
        </NavBarFloater>

        <svelte:fragment slot="expanded">
            {#if stuffs.version}
                <NavBarLink href="{base}{stuffs.base}fav">
                    <TranslatableKey key="favourites"/>
                </NavBarLink>
            {/if}
            
            <div class="table-toggle">
                <NavBarButton on:click={()=>expanded = !expanded}>
                    <TranslatableKey key={expanded? "hide-table" : "show-table"}/>
                </NavBarButton>
            </div>

            <NavBarButton on:click={()=>$stores.readerEnabled = !$stores.readerEnabled}>
                <TranslatableKey key={$stores.readerEnabled ? "disable-focus" : "enable-focus"} />
            </NavBarButton>

            <NavBarDropdown>
                {(stuffs.version ?? "Version").toUpperCase()}

                <svelte:fragment slot="dropdown">
                    <NavBarLink href="{base}/latest">LATEST ({latest})</NavBarLink>
                    {#each Object.keys(versions) as version}
                        <NavBarLink href="{base}/{version}">
                            {version.toUpperCase()}
                        </NavBarLink>
                    {/each}
                </svelte:fragment>
            </NavBarDropdown>

            {#if stuffs.version}
                <NavBarDropdown>
                    {$state.language.toUpperCase()}

                    <svelte:fragment slot="dropdown">
                        {#each pool.getAvailableLanguages() as lang}
                            <NavBarButton on:click={() => {$state.language = lang;}}>{lang.toUpperCase()}</NavBarButton>
                        {/each}
                    </svelte:fragment>
                </NavBarDropdown>
            {/if}
            {#if !stuffs.version}
                <button class="nav-item" on:click={increaseStamina} style:font-size={(Math.max(stamina, 10) - 9) + "em"} style:opacity="0.5">No version selected</button>
            {/if}
        </svelte:fragment>
    </NavBar>

    <div class="category" class:expanded>
        <div class="category-flyover">
            <div class="category-sticker">
                {#if classi === null}
                    <span style:padding="10px">A version isn't selected</span>
                {:else}
                    <SidebarView classi={classi} everythingSwitch={stuffs.everythingSwitcher} everything={!!stuffs.showingEverything} path={stuffs.base ?? "/"} on:select={() => expanded = false}/>
                {/if}


                <footer>
                    Made by applejuice
                </footer>
            </div>
        </div>
    </div>

    <div class:expanded class="content">
        <slot />

        <svg class="cheese-svg" width="100%" height="100%" use:cheeseSvg={cheeseFalling} aria-hidden="true" style:pointer-events="none" style:touch-action="none">

        </svg>
    </div>
</div>

<svg id="root-glasspane" class="glasspane" width="100%" height="100%" style:z-index="99999"></svg>

<HintOverlay classi={classi}/>


<style lang="less">
    :global(:root) {
        --background: #000000;
        --window-background: #222222;
        --landmark-in-window: #aaaaaa;
        --color: #aaaaaa;
        --color-in-landmark: black;

        @media (prefers-color-scheme: light) {
            --background: #ffffff;
            --window-background: #cccccc;
            --landmark-in-window: #aaaaaa;
            --color: black;
            --color-in-landmark: black;
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

    .nav-item {
        padding: 10px;
        display: block;

        background-color: transparent;
        cursor:pointer;

        color: inherit;
        margin: 0;

        border: 0px;

        font-family: inherit;
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
            width: 250px;

            position: relative;

            margin: 5px;

            border-radius: 5px;
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

    .table-toggle {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .table-toggle {
            display: contents;
        }
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

    :global(html) {
        scroll-behavior: smooth;
    }
</style>