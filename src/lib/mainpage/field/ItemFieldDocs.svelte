<script type="ts">
    import Code from "$lib/Code.svelte";
import type { Field } from "$lib/rewrite_docs";
import Category from "../Article.svelte";

    export let field: Field;
</script>

<Category tag="section" aria-label={field.name}>
    <Code>
        {field.editable?"":"readonly "}{field.name}: {field.type}
    </Code>

    <p>{field.description}</p>
</Category>