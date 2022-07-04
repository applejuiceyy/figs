<script type="ts">
    import type { Class, Field } from "$lib/docs/rewrite_docs_typings";

    import Background from "./Background.svelte";
    import StyledItem from "../sidebar/StyledItem.svelte";

    import field_src from "$lib/resource/field.webp";
    import examples from "$lib/docs/examples.json";

    import { base } from "$app/paths";
    import type { Example } from "$lib/docs/examples_typings";
import Highlight from "$lib/highlighter/Highlight.svelte";
import Code from "$lib/Code.svelte";
import ChunkedText from "$lib/ChunkedText.svelte";

    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    export let hostClass: Class;
    export let field: Field;

    let shouldShowClass = hostClass.name !== "globals";
    let qualifiedName = (shouldShowClass? hostClass.name + "." : "") + field.name;

    let example: Example;

    // @ts-ignore
    $: example = qualifiedName in examples ? examples[qualifiedName] : null;
</script>

<Background forceFilled={forceSmall}>
    <div class="method-root" class:force-small={forceSmall}>
        <StyledItem src={field_src} href={base + "#" + qualifiedName} wrap="h1" color="dark" id={setId ? qualifiedName : null}>
            {qualifiedName}
        </StyledItem>

        <div class="code-example" class:filled={qualifiedName in examples} class:force-small={forceSmall}>
            {#if example !== null}
                <Code><Highlight code={example.content} hoverHighlight={example.hints}></Highlight></Code>
            {/if}
        </div>

        <div style:margin="5px">
            <ChunkedText value={field.description}/>
        </div>
    </div>
</Background>

<style>
    .method-root {
        padding: 10px;
        margin-bottom: 10px;
    }

    .code-example.filled {
        margin: 10px;
        padding: 10px;
    }

    @media only screen and (min-width: 1000px) {
        .method-root:not(.force-small) {
            display: grid;
            grid-template-columns: calc(50% - 5px) 50%;
            padding-right: 0px;
        }

        .code-example.filled:not(.force-small)  {
            margin: 0px;
            padding: 0px;
            grid-row: 1 / 3;
            grid-column: 2;
        }
    }
</style>