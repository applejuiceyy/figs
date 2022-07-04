<script type="ts">
    import { tick } from "svelte";
import type { SvelteComponent } from "svelte/internal";

    import { activePopups } from "./Hint.svelte";

    let brutePopupComponents = import.meta.globEager("./popups/*.svelte");

    let popupComponents: {[item: string]: SvelteComponent} = {};

    Object.entries(brutePopupComponents).forEach(([key, val]) => {
        let chunks = key.split("/");
        popupComponents[chunks[chunks.length - 1].split(".")[0]] = val.default;
    })

    console.log(popupComponents);

    let root: HTMLDivElement;
    let active = true;

    let scrollY: number;
    let lastScrollY: number = 0;

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
            let bottom = popups[0].span.getBoundingClientRect().bottom;
            let left = popups[0].span.getBoundingClientRect().left;
            root.style.transition = "top 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s, left 0.2s cubic-bezier(0, 0.55, 0.45, 1) 0s";
            root.style.display = "";
            root.style.top = bottom + 10 + "px";
            root.style.left = left + "px";
            root.style.height = window.innerHeight - bottom - 10 + "px";
            root.style.width = window.innerWidth - left - 40 + "px";

            requestAnimationFrame(() => {
                root.style.top = bottom + "px";
            })

            setTimeout(() => {
                root.style.transition = "";
            }, 200)
        }
    }

    function updatePopups() {
        popups = $activePopups;
        console.log(popups);
    }

    function getPopups() {
        return popups;
    }

    $: {
        if (!import.meta.env.SSR) {
            setTimeout(() => {
                $activePopups;

                if (active || lastScrollY !== scrollY)
                {
                    if (active) {
                        updatePopups();
                    }

                    doStuff();

                    lastScrollY = scrollY;

                    active = active || getPopups().length == 0;
                }
            }, 1);
        }
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div bind:this={root} class="hint-overlay" on:mouseover={() => active = false} on:mouseout={() => active = true}>
    {#each popups as popup (popup.id)}
        <div class="popup">
            <div class="popup-content">
                <svelte:component this={popupComponents[popup.type]} name={popup.name}/>
            </div>
        </div>
    {/each}
</div>

<svelte:window bind:scrollY={scrollY}/>

<style>
    .hint-overlay {
        position: fixed;

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

        border-left: blue 5px solid;
        border-radius: 5px;

        color: white;

        overflow-y: auto;
        overflow-x: auto;

        outline: 1px #222222 solid;

        box-sizing: border-box;
    }
</style>