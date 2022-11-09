<script type="ts">
    import Code from "$lib/Code.svelte";
    import { extractIdentifiers, pickType } from "$lib/content/mainpage/typePicker";
    import Intertweener from "$lib/intertween/Intertweener.svelte";
    import type { Parameter } from "$lib/typings/rewrite_docs";
    import type DocsInterface from "./statistics";
    import Highlight from "$lib/intertween/highlight/Highlight.svelte";
    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import BindingHighlight from "$lib/intertween/bindingHighlight/BindingHighlight.svelte";
    import BindingContext from "$lib/intertween/bindingHighlight/BindingContext.svelte";
    import { generateHighlightChunks } from "$lib/intertween/tokenize/highlight";


    export let describer: {name: string, type: string}[];
    export let classi: DocsInterface;

    function hash(str: string): number {
        let hash = 0, i, chr;

        if (str.length === 0) return hash;

        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }

        return hash;
    }

    function transformHints(hints: any) {
        return hints.map((v: any) => ({start: v.start, stop: v.stop, props: {
                            type: pickType(v.name),
                            name: v.name,
                            travel: pickType(v.name) === "docs" && classi.findFromQualifiedName(v.name) !== null ? v.name : undefined
                        }}))
                    }
    
</script>

<!--<Intertweener text={param.type} properties={[{component: Highlight, ranges: extractIdentifiers(classi, param.type, 0)}]} />-->
<table>
    <tr>
        <th> Method Property </th>
        <th> Fluent Description </th>
        <th> Representation </th>
    </tr>

    {#each describer as entry}
        <tr>
            <td>
                {entry.name}
            </td>
            <BindingContext>
                <SlottedTranslatableKey
                    key={"typings." + hash(entry.type)}
                    let:value
                >
                    <td>
                        <Intertweener
                            text={value.string}
                            properties={[
                                {
                                    component: BindingHighlight,
                                    ranges: value.mapping,
                                },
                                {
                                    component: Highlight,
                                    ranges: transformHints(value.hints)
                                },
                            ]}
                        />
                    </td>
                    <td>
                        <Code inline
                            ><Intertweener
                                text={entry.type}
                                properties={[
                                    {
                                        component: BindingHighlight,
                                        ranges: value.ogmap,
                                    },
                                    generateHighlightChunks(entry.type),
                                    {component: Highlight, ranges: [...extractIdentifiers(classi, entry.type, 0)]}
                                ]}
                            /></Code
                        >
                    </td>
                </SlottedTranslatableKey>
            </BindingContext>
        </tr>
    {/each}
</table>

<style>
    table,
    th,
    td {
        border: 1px solid #999;
    }

    th,
    td {
        padding: 5px;
    }
</style>
