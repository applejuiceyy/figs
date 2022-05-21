<script type="ts">
import ItemMethodDocs from "./ItemMethodDocs.svelte";

    export let content: any;
    export let title: number;
</script>

<svelte:element this={"h" + title}>
    Methods
</svelte:element>

{#each content as method}
    <ItemMethodDocs method={method}/>
{/each}