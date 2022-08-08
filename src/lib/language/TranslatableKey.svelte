<script type="ts">
    import ChunkedText from "$lib/ChunkedText.svelte";
    import SlottedTranslatableKey from "./SlottedTranslatableKey.svelte";

    export let key: string;

    export let warn: boolean = false;
    export let focus: boolean = false;
</script>


<SlottedTranslatableKey key={key} let:value={value}>
    {#if value.type === "PROCESSING"}
        Loading...
    {:else if value.type === "NOTFOUND"}
        <span>{key}</span>
    {:else if value.type === "FALLBACK"}
        {#if warn}
            <span>Using a fallback language</span><br>
        {/if}
        {#if focus}
            <ChunkedText value={value.result} />
        {:else}
            {value.result}
        {/if}
    {:else}
        {#if focus}
            <ChunkedText value={value.result} />
        {:else}
            {value.result}
        {/if}
    {/if}
</SlottedTranslatableKey>

<style>
    span {
        opacity: 0.5;
    }
</style>