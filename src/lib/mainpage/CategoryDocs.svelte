<script type="ts">
    import Category from "./Article.svelte";
import CategoryItemsDocs from "./CategoryItemsDocs.svelte";

    export let name: string;
    export let docs: any;
</script>

<Category>
    <h1>{name}</h1>
    <CategoryItemsDocs content={docs} title={2} />
</Category>