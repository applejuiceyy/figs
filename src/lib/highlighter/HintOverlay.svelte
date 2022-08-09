<script type="ts">
    import type DocsInterface from "$lib/docs/statistics";

    import type { SvelteComponent } from "svelte/internal";

    import { activePopups } from "./Hint.svelte";

    export let classi: DocsInterface | null;

    let brutePopupComponents = import.meta.globEager("./popups/*.svelte");

    let popupComponents: {[item: string]: SvelteComponent} = {};

    Object.entries(brutePopupComponents).forEach(([key, val]) => {
        let chunks = key.split("/");
        popupComponents[chunks[chunks.length - 1].split(".")[0]] = val.default;
    })

    let root: HTMLDivElement;
    let active = true;

    let scrollY: number;

    let popups = $activePopups;

    function doStuff() {
        if (root === null) {
            return;
        }
        if (popups.length === 0) {
            root.style.display = "none";
            root.style.transition = "";
            root.style.top = "";
            root.style.left = "";
        }
        else {
            
            root.style.transition = "top 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s, left 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s";
            root.style.display = "";
            
            reposition(10);
            requestAnimationFrame(() => reposition());
        }
    }

    function updatePopups() {
        popups = $activePopups;
    }

    function getPopups() {
        return popups;
    }

    function reposition(offsetY: number = 0) {
        if (root === null || popups.length === 0) {
            return;
        }

        if (popups[0].span.parentElement === null) {
            return;
        }

        let bottom = popups[0].span.getBoundingClientRect().bottom;
        let left = popups[0].span.getBoundingClientRect().left;
        left = Math.min(window.innerWidth - 300, left);
        left = Math.max(10, left);

        root.style.top = bottom + scrollY + offsetY + "px";
        root.style.left = left + "px";
        root.style.height = window.innerHeight - bottom - 10 + "px";
        root.style.width = window.innerWidth - left - 40 + "px";
    }

    let updateTimeout: ReturnType<typeof setTimeout> | null = null;

    $: {
        if (!import.meta.env.SSR) {
            if (updateTimeout !== null) {
                clearTimeout(updateTimeout);
            }

            updateTimeout = setTimeout(() => {
                $activePopups;

                if (active)
                {
                    updatePopups();
                    doStuff();

                    active = active || getPopups().length == 0;
                }
            }, $activePopups.length === 0 ? 100 : 1);
        }
    }

    $: {
        if (!import.meta.env.SSR) {
            scrollY;
            reposition();
        }
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div bind:this={root} class="hint-overlay" on:mouseover={() => active = false} on:mouseout={() => active = true}>
    {#each popups as popup (popup.id)}
        <div class="popup">
            <div class="popup-content">
                <svelte:component this={popupComponents[popup.type]} name={popup.name} classi={classi}/>
            </div>
        </div>
    {/each}
</div>

<svelte:window bind:scrollY={scrollY}/>

<style>
    .hint-overlay {
        position: absolute;

        display: flex;
        flex-direction: column;

        pointer-events: none;
    }

    .popup {
        flex-grow: 1;
        overflow: hidden;
    }

    .popup-content {
        pointer-events: all;

        max-height: 100%;
        max-width: 100%;

        width: fit-content;
        height: fit-content;

        padding: 15px;
        padding-right: 50px;
        padding-bottom: 50px;
        background-color: black;

        border-left: #D157E2 5px solid;
        border-radius: 5px;

        color: white;

        overflow-y: auto;
        overflow-x: auto;

        outline: 1px #222222 solid;

        box-sizing: border-box;
    }
</style>