<script lang="ts">
    import pool from "./translator";
    import type { Snippet } from "svelte";

    let {key, warn = false, children}: {
        key: string,
        warn?: boolean,
        children?: Snippet<[string, "FALLBACK" | "RESULT"]>
    } = $props();

    let store = $derived(pool.createStore(key));
</script>


{#snippet fallback(value: string)}
    {value}
{/snippet}

{#if $store.type === "PROCESSING"}
    Loading...
{:else if $store.type === "NOTFOUND"}
    <span>{key}</span>
{:else if $store.type === "FALLBACK"}
    {#if warn}
        <span>Using a fallback language</span><br>
    {/if}
    {@render (children ?? fallback)($store.result, "FALLBACK")}
{:else}
    {@render (children ?? fallback)($store.result, "RESULT")}
{/if}

<style>
    span {
        opacity: 0.6;
    }
</style>