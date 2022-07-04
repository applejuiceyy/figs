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

    let popups = $activePopups;

    function doStuff() {
        if (root === null) {
            return;
        }
        if (popups.length === 0) {
            root.style.display = "none";
            root.style.transition = "";
        }
        else {
            let bottom = popups[0].span.getBoundingClientRect().bottom;
            root.style.transition = "top 0.2s";
            root.style.display = "block";
            root.style.top = bottom + 10 + "px";
            root.style.left = popups[0].span.getBoundingClientRect().left + "px";


            requestAnimationFrame(() => {
                root.style.top = bottom + "px";
            })
        }
    }

    $: {
        if (!import.meta.env.SSR) {
            setTimeout(() => {
                if (active)
                {
                    popups = $activePopups;

                    doStuff();
                }
            }, 1);
        }
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div bind:this={root} class="hint" on:mouseover={() => active = false} on:mouseout={() => active = true}>
    {#each popups as popup (popup.id)}
        <div class="popup" style:max-height={50 / popups.length + "vh"}>
            <svelte:component this={popupComponents[popup.type]} name={popup.name}/>
        </div>
    {/each}
</div>

<style>
    .hint {
        position: fixed;
    }

    .popup {
        padding: 15px;
        padding-right: 50px;
        padding-bottom: 50px;
        background-color: black;

        border-left: blue 5px solid;
        border-radius: 5px;

        color: white;

        overflow-y: auto;
    }
</style>