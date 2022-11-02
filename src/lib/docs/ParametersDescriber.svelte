<script type="ts">
    import Code from "$lib/Code.svelte";
    import { extractIdentifiers } from "$lib/content/mainpage/typePicker";
    import Intertweener from "$lib/intertween/Intertweener.svelte";
    import type { Parameter } from "$lib/typings/rewrite_docs";
    import type DocsInterface from "./statistics";
    import Highlight from "$lib/intertween/highlight/Highlight.svelte";


    export let overload: Parameter[];
    export let returns: string;
    export let classi: DocsInterface;
</script>

{#each overload as param}
    <Code inline>{param.name}</Code>: accepts <Intertweener text={param.type} properties={[{component: Highlight, ranges: extractIdentifiers(classi, param.type, 0)}]} /><br><br>
{/each}

returns <Intertweener text={returns} properties={[{component: Highlight, ranges: extractIdentifiers(classi, returns, 0)}]} />