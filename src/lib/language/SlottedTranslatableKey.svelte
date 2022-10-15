<script type="ts">
    import value from "docs:all";
    import pool from "./translator";

    export let key: string;
    export let warn: boolean = false;

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
    <slot value={$store.result}/>
{:else}
    <slot value={$store.result}/>
{/if}