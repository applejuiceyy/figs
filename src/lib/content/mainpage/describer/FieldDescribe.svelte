<script lang="ts">
    import type { Class, Field } from "$lib/typings/rewrite_docs";

    import StyledItem from "$lib/content/sidebar/StyledItem.svelte";

    import field_src from "$lib/resource/field.webp?url";

    import { base } from "$app/paths";

    import Code from "$lib/Code.svelte";

    import MethodDescribe from "./MethodDescribe.svelte";
    import { extractIdentifiers } from "../typePicker";

    import DescribeRoot from "../DescribeRoot.svelte";
    
    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import Intertweener, { type Property } from "$lib/intertween/Intertweener.svelte";
    import { generateChunks } from "$lib/intertween/chunker";

    import type DocsInterface from "$lib/docs/statistics";
    import Highlight from "$lib/intertween/highlight/Highlight.svelte";
    import { generateHighlightChunks } from "$lib/intertween/tokenize/highlight";
    import PopupDisabler from "$lib/intertween/highlight/PopupDisabler.svelte";

    import state from "$lib/state/stores";

    import ParametersDescriber from "$lib/docs/ParametersDescriber.svelte";

    import FieldDescribe from "./FieldDescribe.svelte";

    let {forceSmall = false, setId = true, hostClass, field, inlineTypeDocs = false, path, classi, titleProperties = [], descriptionProperties = []}: {
        forceSmall?: boolean,
        setId?: boolean,

        hostClass: Class,
        field: Field,
        inlineTypeDocs?: boolean,

        path: string,
        classi: DocsInterface,

        titleProperties?: Property<any>[],
        descriptionProperties?: Property<any>[]
    } = $props();


    let shouldShowClass = $derived(hostClass.name !== "globals");
    let qualifiedName = $derived((shouldShowClass? hostClass.name + "." : "") + field.name);


</script>

<DescribeRoot example={field.example} classi={classi} forceSmall={forceSmall}>
    {#snippet title()}
        <StyledItem src={field_src} href={base + path + qualifiedName} wrap="h1" color="dark" id={setId ? qualifiedName : undefined}>
            <Intertweener text={qualifiedName} properties={titleProperties}/>
        </StyledItem>
    {/snippet}

    <div>
        <SlottedTranslatableKey key={field.description} warn>
            {#snippet children(value)}
                <Intertweener text={value} properties={[generateChunks(value), ...descriptionProperties]}/>
            {/snippet}
        </SlottedTranslatableKey>
    </div>

    <div class="code-example filled" style:margin-top="50px">
        {#snippet addendum()}
            <ParametersDescriber classi={classi} describer={[{name: "Field Type", type: field.type}]}/>
        {/snippet}
        <PopupDisabler enabled={!$state.signaturePopupEnabled}>
            <Code addendum={$state.skilled ? undefined : addendum}>
                {#snippet title()}
                    field signature:
                {/snippet}
                <Intertweener text={field.name + (!$state.skilled ? "" : ": " + field.type)} properties={$state.skilled ? [generateHighlightChunks(field.name + ": " + field.type), {component: Highlight, ranges: inlineTypeDocs ? [] : [...extractIdentifiers(classi, field.type, field.name.length + 2)]}] : []}/>
            </Code>
        </PopupDisabler>

        {#if inlineTypeDocs && field.type in classi.types}
            {@const v = classi.types[field.type]}
            <div style:outline="2px #777777 solid" style:padding="10px" style:border-radius="5px" style:margin-right="5px" style:margin-top="10px" style:background-color="var(--background)">
                {#each Object.entries(v.methods) as [name, func]}
                    <MethodDescribe classi={classi} method={func} hostClass={v} forceSmall={true} path={path}/>
                {/each}
                
                {#each Object.entries(v.fields) as [name, var_]}
                    <FieldDescribe classi={classi} field={var_} hostClass={v} forceSmall={true} path={path}/>
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
</style>