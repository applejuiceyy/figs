<script type="ts">
import ItemMethodDocs from "./ItemMethodDocs.svelte";

    export let content: any;
    export let container: string;
    export let title: number = 1;
</script>

<svelte:element this={"h" + title}>
    Methods
</svelte:element>

{#each content as method}
    <ItemMethodDocs container={container} method={method}/>
{/each}