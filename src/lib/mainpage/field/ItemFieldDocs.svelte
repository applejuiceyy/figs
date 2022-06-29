<script type="ts">
    import ChunkedText from "$lib/ChunkedText.svelte";
import Code from "$lib/Code.svelte";
import type { Field } from "$lib/docs/rewrite_docs";
import Category from "../Article.svelte";

    export let field: Field;
    export let container: string;
</script>

<Category tag="section" aria-label={field.name}>
    <Code>
        {field.editable?"":"readonly "}{#if container !== "globals"}{container}.{/if}{field.name}: <span style="color: #0000bb">{field.type}</span>
    </Code>

    <p><ChunkedText value={field.description}/></p>
</Category>