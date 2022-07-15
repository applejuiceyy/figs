<script type="ts">
    import {base} from "$app/paths";
    import version from "$lib/docs/rewrite_version.txt?raw";
    import { cheeseSvg } from "$lib/actions/cheese";
    import { onDestroy, onMount } from "svelte";

    import { page } from "$app/stores";

    import stores from "$lib/state/stores";
    import SidebarView from "$lib/content/sidebar/SidebarView.svelte";

    import HintOverlay from "$lib/highlighter/HintOverlay.svelte";

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

    let hashedNavigation: boolean;
    $: hashedNavigation = ($page.stuff as {navigation: string}).navigation === "hashed";
</script>

<div class="root">
    <nav class:expanded class="figura-background">
        <a class="nav-item" href={base + "/"}>FIGS!!</a>
        <a class="nav-item expander" href="javascript:;" aria-label="Expand" on:click={()=>expanded = !expanded}>{expanded? "Hide Table" : "Show Table"}</a>
        <a class="nav-item better-reader-button" href="javascript:;" style:margin-left="auto" on:click={()=>$stores.readerEnabled = !$stores.readerEnabled}>{$stores.readerEnabled ? "Disable" : "Enable"} Better Reader</a>
        <a class="nav-item" href="javascript:;"  on:click={increaseStamina} style:font-size={(Math.max(stamina, 10) - 9) + "em"} style:opacity="0.5">{version}</a>
    </nav>

    <div class="category figura-background" class:expanded>
        <div class="category-inner">


            <SidebarView everything={hashedNavigation} path={hashedNavigation ? '/all#' : '/'}/>

            <footer>
                Made by applejuice
            </footer>
        </div>
    </div>

    <div class:expanded class="content">
        <slot />

        <svg class="cheese-svg" width="100%" height="100%" use:cheeseSvg={cheeseFalling} aria-hidden="true" style:pointer-events="none" style:touch-action="none">

        </svg>
    </div>
</div>

<svg id="root-glasspane" class="glasspane" width="100%" height="100%" style:z-index="99999"></svg>

<HintOverlay/>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    footer {
        margin-top: auto;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;

        background-color: #bbbbbb;
    }

    .glasspane {
        position: fixed;
        inset: 0;
        touch-action: none;
        pointer-events: none;
    }

    .category-inner {
        height: 100vh;
        width: 250px;
        display: flex;
        flex-direction: column;

        position: sticky;
        top: 0;

        overflow-y: auto;
    }

    .figura-background {
        background-image: url("$lib/resource/background.png");
        background-size: calc(64px * 4) calc(64px * 4);
        image-rendering: crisp-edges;
        background-attachment: fixed;

        animation: brew 60s linear 0s infinite;
    }

    .root {
        display: grid;
        grid-template-rows: min-content 1fr;
        grid-template-columns: 250px 1fr;

        min-height: 100vh;
        width: calc(100vw - (100vw - 100%));
    }

    nav {
        display: flex;
        position: sticky;

        top: 0;
        left: 0;
        right: 0;

        color: white;

        height: max-content;
        grid-column: 1 / 3;
    }

    nav>* {
        padding: 10px;
        text-decoration: none;
        color: white;
    }

    @keyframes brew {
        from {
            background-position: 0% 0%;
        }

        to {
            background-position: 0% 100%;
        }
    }

    .expander {
        display: none;
    }

    .content {
        word-wrap: anywhere;

        background-color: white;
        padding: 5px;

        position: relative;
        isolation: isolate;

        overflow: hidden;

        padding-bottom: 0;
    }

    .cheese-svg {
        position: absolute;
        inset: 0;
    }

    @media (prefers-color-scheme: dark) {
        .content {
            background-color: black;
            color: #bbbbbb;
        }

        :global(body) {
            background-color: #111111;
        }
    }

    @media only screen and (max-width: 800px) {
        .content {
            background-image: initial;
        }

        .expander {
            display: block;
        }

        .category {
            display: none;
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

        nav {
            border-radius: 0 0 15px 15px;
            z-index: 1;
        }

        nav.expanded {
            border-radius: initial;
        }

        .category-inner {
            width: auto;
            position:initial;
            top: 0;

            overflow-y: visible;
        }
    }

    @media (pointer: coarse) {
        .category-inner :global(a) {
            padding: 20px;
            box-sizing: border-box;
            outline: 1px #777777 solid;
        }
    }

    :global(body) {
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        font-family: Roboto;

        
    }

    :global(html) {
        scroll-behavior: smooth;
    }

    @media (hover: none) {
        .better-reader-button {
            visibility: hidden;
        }

        nav>* {
            padding: 20px;
        }
    }
</style>