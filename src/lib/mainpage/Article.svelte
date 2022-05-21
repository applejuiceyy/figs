<script type="ts">
    export let tag = "article";
    export let title: string | null = null;
    export let heading: 1 | 2 | 3 | 4 | 5 | 6 = 1;
</script>

<svelte:element this={tag} class="indent" {...$$restProps}>
    {#if title !== null}
        <svelte:element this={"h" + heading}>{title}</svelte:element>
    {/if}
    <slot/>
</svelte:element>

<style>
    .indent {
        margin-left: 5px;
        padding-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-left: 5px solid black;
    }

    @media (prefers-color-scheme: dark) {
        .indent {
            border-left-color: #aaaaaa;
        }
    }
</style>