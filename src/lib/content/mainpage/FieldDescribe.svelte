<script type="ts">
    import type { Class, Field } from "$lib/docs/rewrite_docs_typings";

    import Background from "./Background.svelte";
    import StyledItem from "../sidebar/StyledItem.svelte";

    import field_src from "$lib/resource/field.webp";
    import examples from "$lib/docs/examples.yaml";

    import { base } from "$app/paths";
    import type { Example } from "$lib/docs/examples_typings";
    import Highlight from "$lib/highlighter/Highlight.svelte";
    import Code from "$lib/Code.svelte";
    import ChunkedText from "$lib/ChunkedText.svelte";
    import { types } from "$lib/docs/processor/processed";
    import MethodDescribe from "./MethodDescribe.svelte";
    import { pickType } from "./typePicker";

    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    export let hostClass: Class;
    export let field: Field;
    export let inlineTypeDocs: boolean = false;

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

            <div class="code-example filled" style:margin-top="50px">
                <Code>
                    <Highlight code={field.name + ": " + field.type} hoverHighlight={[{range: [field.name.length + 2, field.name.length + 2 + field.type.length], type: pickType(field.type), name: field.type}]}></Highlight>
                </Code>

                {#if inlineTypeDocs && field.type in types}
                    {@const v = types[field.type]}
                    <div style:outline="2px #777777 solid" style:border-radius="5px" style:margin-right="5px">
                        {#each Object.entries(v.methods) as [name, func]}
                            <MethodDescribe method={func} hostClass={v} forceSmall={true}/>
                        {/each}
                        
                        {#each Object.entries(v.fields) as [name, var_]}
                            <svelte:self field={var_} hostClass={v} forceSmall={true}/>
                        {/each}
                    </div>
                {/if}
            </div>
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