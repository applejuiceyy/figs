<script context="module" lang="ts">
    import { getContext, hasContext, onDestroy, type Snippet } from "svelte";

    export const activePopups: Writable<({type: string, name: string, id: number, span: Element})[]> = writable([]);
</script>

<script lang="ts">
    import {base} from "$app/paths";
    import { readable, writable, type Writable } from "svelte/store";
    import { page } from "$app/stores";

    let {type, name, travel = null, children}: {
        type: string,
        name: string,
        travel?: string | null,
        children: Snippet
    } = $props();

    let currentID: number | null = null;
    let span: HTMLSpanElement;

    let popupDisabler: any = hasContext("highlight-popup")? getContext("highlight-popup") : readable(true);

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

<svelte:element href={travel === null ? undefined : `${base}${$page.data.base}${travel}`} this={travel === undefined ? "span" : "a"} bind:this={span} class="hint" onmouseover={$popupDisabler ? undefined : handleMouseOver} onmouseout={$popupDisabler ? undefined : handleMouseOut} onblur={noop} onfocus={noop}>{@render children()}</svelte:element>

<style>
    .hint {
        text-decoration: underline dotted currentColor;
        color: inherit;
    }
</style>