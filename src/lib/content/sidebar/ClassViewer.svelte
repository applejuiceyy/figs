<script type="ts">
    import {base} from "$app/paths";
import StyledItem from "./StyledItem.svelte";

import method from "$lib/resource/method.webp";
import field from "$lib/resource/field.webp";

    export let klass: import("$lib/docs/rewrite_docs_typings").Class;
</script>

{#each klass.methods as function_}
    <StyledItem href={base + "#" + function_.name} src={method}>{function_.name}</StyledItem>
{/each}

{#each klass.fields as var_}
    <StyledItem href={base + "#" + var_.name} src={field}>{var_.name}</StyledItem>
{/each}