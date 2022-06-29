<script type="ts">
    import ChunkedText from "$lib/ChunkedText.svelte";
import Code from "$lib/Code.svelte";
import type { Method } from "$lib/docs/rewrite_docs";
import Category from "../Article.svelte";
import OverloadDocs from "./OverloadDocs.svelte";
import Parameters from "./ParametersDocs.svelte";

    export let method: Method;
    export let container: string;


</script>

<Category tag="section" aria-label={method.name}>
    {#each method.parameters as parameters, idx}
        <OverloadDocs container={container} name={method.name} parameters={parameters} returns={method.returns[idx]} />
    {/each}
    <p><ChunkedText value={method.description} /></p>
</Category>
