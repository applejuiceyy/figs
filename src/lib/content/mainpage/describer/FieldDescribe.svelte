<script type="ts">
    import type { Class, Field } from "$lib/docs/rewrite_docs";

    import StyledItem from "$lib/content/sidebar/StyledItem.svelte";

    import field_src from "$lib/resource/field.webp?url";

    import { base } from "$app/paths";

    import Highlight from "$lib/highlighter/Highlight.svelte";
    import Code from "$lib/Code.svelte";

    import MethodDescribe from "./MethodDescribe.svelte";
    import { pickType } from "../typePicker";

    import DescribeRoot from "../DescribeRoot.svelte";

    import TranslatableKey from "$lib/language/TranslatableKey.svelte";
import type DocsInterface from "$lib/docs/statistics";


    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    export let hostClass: Class;
    export let field: Field;
    export let inlineTypeDocs: boolean = false;

    let shouldShowClass: boolean;
    let qualifiedName: string;

    $: shouldShowClass = hostClass.name !== "globals";
    $: qualifiedName = (shouldShowClass? hostClass.name + "." : "") + field.name;

    export let path: string;
    export let classi: DocsInterface;

    export let highlight: string[] = [];
</script>

<DescribeRoot forceSmall={forceSmall} highlightTitle={highlight.includes("title")}>
    <StyledItem slot="title" src={field_src} href={base + path + qualifiedName} wrap="h1" color="dark" id={setId ? qualifiedName : null}>
        {qualifiedName}
    </StyledItem>

    <div class:highlight={highlight.includes("description")}>
        <TranslatableKey key={field.description} warn focus/>
    </div>

    <div class="code-example filled" style:margin-top="50px">
        <Code>
            <Highlight path={path} code={field.name + ": " + field.type} hoverHighlight={(inlineTypeDocs && field.type in classi.types) ? [] : [{range: [field.name.length + 2, field.name.length + 2 + field.type.length], type: pickType(field.type), name: field.type, travel: pickType(field.type) === "docs" && classi.findFromQualifiedName(field.type) !== null ? field.type : undefined}]}></Highlight>
        </Code>

        {#if inlineTypeDocs && field.type in classi.types}
            {@const v = classi.types[field.type]}
            <div style:outline="2px #777777 solid" style:border-radius="5px" style:margin-right="5px">
                {#each Object.entries(v.methods) as [name, func]}
                    <MethodDescribe classi={classi} method={func} hostClass={v} forceSmall={true} path={path}/>
                {/each}
                
                {#each Object.entries(v.fields) as [name, var_]}
                    <svelte:self classi={classi} field={var_} hostClass={v} forceSmall={true} path={path}/>
                {/each}
            </div>
        {/if}
    </div>
</DescribeRoot>

<style lang="less">
    .code-example.filled {
        margin: 10px;
        padding: 10px;
    }

    @media only screen and (min-width: 1000px) {
        .code-example.filled:not(.force-small)  {
            margin: 0px;
            padding: 0px;
            grid-row: 1 / 3;
            grid-column: 2;
        }
    }

        @import "src/app";

    .highlight {
        .highlig();
    }
</style>