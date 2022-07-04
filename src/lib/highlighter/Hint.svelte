<script context="module" type="ts">
    import type { HintContent } from "$lib/docs/examples_typings";
import { onDestroy } from "svelte";

    export const activePopups: Writable<(HintContent & {id: number, span: Element})[]> = writable([]);
</script>

<script type="ts">
import { writable, type Writable } from "svelte/store";


    export let type: HintContent["type"];
    export let name: string;

    let currentID: number | null = null;
    let span: HTMLSpanElement;

    function handleMouseOver() {
        if (currentID !== null) {
            handleMouseOut();
        }

        currentID = new Date().getMilliseconds();
        $activePopups = [...$activePopups, {type, name, id: currentID, span}]
    }

    function handleMouseOut() {
        $activePopups = $activePopups.filter(ev => currentID !== ev.id);
        currentID = null;
    }

    onDestroy(() => {
        if (currentID !== null) {
            handleMouseOut();
        }
    })

    function noop(){}
</script>

<span bind:this={span} class="hint" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} on:blur={noop} on:focus={noop}><slot/></span>

<style>
    .hint :global(.token) {
        text-decoration: underline dotted currentColor;
    }
</style>