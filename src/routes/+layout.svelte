<script context="module" type="ts">
    import latest from "docs:latest";
</script>

<script type="ts">
    import {base} from "$app/paths";
    import { cheeseSvg } from "$lib/actions/cheese";
    import { onDestroy, onMount } from "svelte";

    import { page } from "$app/stores";

    import stores from "$lib/state/stores";
    import landmark from "$lib/state/landmark";
    import SidebarView from "$lib/content/sidebar/SidebarView.svelte";

    import HintOverlay from "$lib/intertween/highlight/HintOverlay.svelte";

    import state from "$lib/state/stores";
    import load from "$lib/state/loading";

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
    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import pool from "$lib/language/translator";

    import eh from "$lib/resource/status/eh.png";
    import ok from "$lib/resource/status/ok.png";

    import {beforeNavigate, afterNavigate} from "$app/navigation";

    let interv: any = null;

    let cheeseFalling = false;

    let holdingCtrl: boolean = false;

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
        let docs = $page.data.docs;
        if (docs === undefined) {
            classi = null;
        }
        else {
            classi = new stats(docs);
        }
    }

    let searcher: NavBarSearcher;

    function handleKeyDown (ev: KeyboardEvent) {
        holdingCtrl = ev.ctrlKey;
        // https://stackoverflow.com/questions/34687895/determine-if-a-letter-or-a-number-was-pressed-javascript
        if (!ev.altKey && !ev.ctrlKey && (ev.keyCode >= 48 && ev.keyCode <= 57 || ev.keyCode >= 65 && ev.keyCode <= 90 || ev.keyCode >= 97 && ev.keyCode <= 122)) {
            searcher.focus();
        }
    }

    function handleKeyUp (ev: KeyboardEvent) {
        holdingCtrl = ev.ctrlKey;
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
    <NavBar>
        <NavBarLink on:click={increaseStamina} inline href={base + "/"}><span style:font-size={(Math.max(stamina, 10) - 9) + "em"}>FIGS{"!".repeat(Math.min(10, Math.floor($state.visits)))}</span></NavBarLink>
        <div class="big-display">
            <NavBarLink inline external href="https://github.com/applejuiceyy/figs">Github</NavBarLink>
        </div>

        <NavBarSearcher bind:this={searcher} destination="{base}{$page.data.base}search"/>

        <NavBarFloater>
            <div class="table-toggle" style:display={$page.data.forceShowTable ? "none" : ""}>
                <NavBarButton on:click={()=>expanded = !expanded}>
                    <SlottedTranslatableKey key={expanded? "hide-table" : "show-table"}/>
                </NavBarButton>
            </div>

            <NavBarExpandButton bind:button={$landmark.contentButton}>
                <SlottedTranslatableKey key="content"/>
            </NavBarExpandButton>
        </NavBarFloater>

        <svelte:fragment slot="expanded">
            <NavBarLink href="{base}{$page.data.base}fav">
                <SlottedTranslatableKey key="favourites"/>
            </NavBarLink>

            <NavBarDropdown bind:button={$landmark.preferencesButton}>
                <SlottedTranslatableKey key="preferences"/>

                <svelte:fragment slot="dropdown">
                    <NavBarButton on:click={()=>$stores.readerEnabled = !$stores.readerEnabled}>
                        <SlottedTranslatableKey key={$stores.readerEnabled ? "disable-focus" : "enable-focus"}/>
                    </NavBarButton>
                    <NavBarButton on:click={()=>$stores.signaturePopupEnabled = !$stores.signaturePopupEnabled}>
                        <SlottedTranslatableKey key={($stores.signaturePopupEnabled ? "disable" : "enable") + "-popup-in-signature" }/>
                    </NavBarButton>
                    <NavBarButton on:click={()=>$stores.examplePopupEnabled = !$stores.examplePopupEnabled}>
                        <SlottedTranslatableKey key={($stores.examplePopupEnabled ? "disable" : "enable") + "-popup-in-examples" }/>
                    </NavBarButton>
                    <NavBarButton on:click={()=>$stores.skilled = !$stores.skilled}>
                        <SlottedTranslatableKey key={($stores.skilled ? "new" : "experienced") + "-user-skill-switch" }/>
                    </NavBarButton>
                </svelte:fragment>
            </NavBarDropdown>

            <NavBarDropdown>
                {($page.data.version ?? "Version").toUpperCase()}

                <svelte:fragment slot="dropdown">
                    <NavBarLink href="{base}/latest">LATEST ({latest})</NavBarLink>
                    {#each Object.keys(versions) as version}
                        <NavBarLink href="{base}/{version}">
                            {version.toUpperCase()}
                        </NavBarLink>
                    {/each}
                </svelte:fragment>
            </NavBarDropdown>

            <NavBarDropdown>
                {$state.language.toUpperCase()}

                <svelte:fragment slot="dropdown">
                    {@const stat = pool.getProviderStatistics()}
                    {#each Object.entries(stat.languages) as lang}
                        {#if holdingCtrl || lang[0] !== "en_uwu"}
                            <div class="button-wrapper" style:width="100%" title={lang[1].length < stat.providers.length ? `There is ${stat.providers.length} language providers registered (${stat.providers.join(", ")}) however only ${lang[1].length} of them (${lang[1].join(", ")}) can provide keys for the ${lang[0]} language` : ""}>
                                <NavBarButton on:click={() => $state.language = lang[0]}>
                                    {lang[0].toUpperCase()}
                                    <img style:position="absolute" style:right="10px" style:top="50%" style:transform="translate(0%, -50%)" src={lang[1].length < stat.providers.length ? eh : ok} alt="">
                                </NavBarButton>
                            </div>
                        {/if}
                    {/each}
                </svelte:fragment>
            </NavBarDropdown>
        </svelte:fragment>
    </NavBar>

    {#if !$page.data.hideTable}
        <div class="category" class:expanded={expanded || $page.data.forceShowTable}>
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
    {/if}

    <div class:expanded class="content">
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

<svelte:body on:keydown={handleKeyDown} on:keyup={handleKeyUp}/>


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

    .button-wrapper {
        .inline-flex();
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

    .big-display {
        display: none;
    }

    @media only screen and (min-width: 800.5px) {
        .category {
            width: 300px;

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

        .big-display {
            display: contents;
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