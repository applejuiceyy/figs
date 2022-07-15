<script type="ts">
    import {base} from "$app/paths";
    import StyledItem from "./StyledItem.svelte";

    import method from "$lib/resource/method.webp";
    import field from "$lib/resource/field.webp";
    import type { Field, Method } from "$lib/docs/rewrite_docs_typings";
    import { comparer } from "$lib/docs/processor/processed";

    export let klass: import("$lib/docs/rewrite_docs_typings").Class;

    let sortedMethods: Method[];
    let sortedFields: Field[];

    $: sortedMethods = klass.methods.sort(comparer);
    $: sortedFields = klass.fields.sort(comparer);


    export let path: string;
</script>

{#each sortedMethods as function_}
    <StyledItem href={base + path + function_.name} src={method}>{function_.name}</StyledItem>
{/each}

{#each sortedFields as var_}
    <StyledItem href={base + path + var_.name} src={field}>{var_.name}</StyledItem>
{/each}