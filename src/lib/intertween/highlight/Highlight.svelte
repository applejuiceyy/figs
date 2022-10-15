<script context="module" type="ts">
    import { onDestroy } from "svelte";

    export const activePopups: Writable<({type: string, name: string, id: number, span: Element})[]> = writable([]);
</script>

<script type="ts">
    import {base} from "$app/paths";
    import { writable, type Writable } from "svelte/store";
    import { page } from "$app/stores";

    export let type: string;
    export let name: string;
    export let travel: string | null = null;

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

<svelte:element href={travel === null ? undefined : `${base}${$page.data.base}${travel}`} this={travel === undefined ? "span" : "a"} bind:this={span} class="hint" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} on:blur={noop} on:focus={noop}><slot/></svelte:element>

<style>
    .hint {
        text-decoration: underline dotted currentColor;
        color: inherit;
    }
</style>