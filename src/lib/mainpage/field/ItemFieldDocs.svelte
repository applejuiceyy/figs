<script type="ts">
    import Code from "$lib/Code.svelte";
import type { Field } from "$lib/rewrite_docs";
import Category from "../Article.svelte";

    export let field: Field;
    export let container: string;
</script>

<Category tag="section" aria-label={field.name}>
    <Code>
        {field.editable?"":"readonly "}{#if container !== "globals"}{container}.{/if}{field.name}: <span style="color: #0000bb">{field.type}</span>
    </Code>

    <p>{field.description}</p>
</Category>