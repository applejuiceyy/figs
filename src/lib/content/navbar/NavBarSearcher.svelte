<script type="ts">
    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
import pool from "$lib/language/translator";
    export let destination: string;

    export function focus() {
        input.focus();
    }

    let input: HTMLInputElement;
</script>

<div class="search-root" style:flex-grow="1">
    <form class="sizer" action={destination} method="get">
        <input bind:this={input} required name="q" style:min-width="0" style:flex-grow="1" style:flex-shrink="1">
        <SlottedTranslatableKey key="search" let:value={value}>
            <input type="submit" value={pool.getPresentableValueFromResult(value, "search")}>
        </SlottedTranslatableKey>
    </form>
</div>

<style>
    .sizer {
        width: max(80%, 50px);
        height: 70%;

        display: flex;
        align-items: stretch;
        justify-content: stretch;
    }

    .search-root {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>