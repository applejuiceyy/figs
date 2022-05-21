<script>
    import rewrite_docs from "$lib/rewrite_docs.json";
import CategoryDocs from "./CategoryDocs.svelte";
</script>

{#each Object.entries(rewrite_docs) as [name, docs]}
    <CategoryDocs name={name} docs={docs}/>
{/each}