<script type="ts">
    import Code from "$lib/Code.svelte";
import type { Method } from "$lib/rewrite_docs";
import Category from "../Article.svelte";

    export let method: Method;
</script>

<Category tag="section" aria-label={method.name}>
    {#each method.parameters as parameters, idx}
        {@const parameter = parameters.map((field) => field.name + ": " + field.type).join(", ") }

        <Code>
            {method.name}({parameter}): {method.returns[idx]}
        </Code>

    {/each}
    <p>{method.description}</p>
</Category>
