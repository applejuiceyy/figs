<script type="ts">
    import ItemPropertyDocs from "./ItemFieldDocs.svelte";

    export let content: any;
    export let title: number;
</script>

<svelte:element this={"h" + title}>
    Fields
</svelte:element>

{#each content as field}
    <ItemPropertyDocs field={field}/>
{/each}