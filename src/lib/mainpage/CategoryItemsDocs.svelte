<script type="ts">
    import CategoryItemDocs from "./CategoryItemDocs.svelte";

    export let content: any;
    export let title = 1;
</script>

{#each content as item}
    <CategoryItemDocs docs={item} title={title}/>
{/each}