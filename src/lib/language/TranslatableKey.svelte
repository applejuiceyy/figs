<script context="module" type="ts">
    import type { Writable } from "svelte/store";
    import { writable } from "svelte/store";
</script>

<script type="ts">
    import ChunkedText from "$lib/ChunkedText.svelte";

    import pool from "./translator";

    export let key: string;

    export let warn: boolean = false;
    export let focus: boolean = false;

    let store: ReturnType<typeof pool["createStore"]>;

    $: store = pool.createStore(key);
</script>


{#if $store.type === "PROCESSING"}
    Loading...
{:else if $store.type === "NOTFOUND"}
    <span>{key}</span>
{:else if $store.type === "FALLBACK"}
    {#if warn}
        <span>Using a fallback language</span><br>
    {/if}
    {#if focus}
        <ChunkedText value={$store.result} />
    {:else}
        {$store.result}
    {/if}
{:else}
    {#if focus}
        <ChunkedText value={$store.result} />
    {:else}
        {$store.result}
    {/if}
{/if}

<style>
    span {
        opacity: 0.5;
    }
</style>