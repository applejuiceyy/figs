<script type="ts">
    import ItemFieldDocs from "./ItemFieldDocs.svelte";

    export let content: any;
    export let container: string;
    export let title: number = 1;
</script>

<svelte:element this={"h" + title}>
    Fields
</svelte:element>

{#each content as field}
    <ItemFieldDocs container={container} field={field}/>
{/each}