<script context="module" type="ts">
    import type { HintContent } from "$lib/typings/examples_typings";
    import { onDestroy } from "svelte";

    export const activePopups: Writable<(HintContent & {id: number, span: Element})[]> = writable([]);
</script>

<script type="ts">
    import {base} from "$app/paths";
import { writable, type Writable } from "svelte/store";


    export let type: HintContent["type"];
    export let name: string;
    export let travel: string | undefined;
    export let path: string;

    let currentID: number | null = null;
    let span: HTMLSpanElement;


    function handleMouseOver() {
        if (currentID !== null) {
            handleMouseOut();
        }

        currentID = Math.random();
        $activePopups = [...$activePopups, {type, name, id: currentID, span}]
    }

    function handleMouseOut() {
        $activePopups = $activePopups.filter(ev => currentID !== ev.id);
        currentID = null;
    }

    onDestroy(() => {
        handleMouseOut();
    })

    function noop(){return}
</script>

<svelte:element href={travel === undefined ? undefined : `${base}${path}${travel}`} this={travel === undefined ? "span" : "a"} bind:this={span} class="hint" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} on:blur={noop} on:focus={noop}><slot/></svelte:element>

<style>
    .hint :global(.token) {
        text-decoration: underline dotted currentColor;

    }

    .hint {
        color: inherit;
        text-decoration: none;
    }
</style>