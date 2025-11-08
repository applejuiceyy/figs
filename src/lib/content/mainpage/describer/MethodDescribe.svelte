<script lang="ts">
    import type { Class, Method, Parameter } from "$lib/typings/rewrite_docs";

    import method_src from "$lib/resource/method.webp?url";
    import StyledItem from "$lib/content/sidebar/StyledItem.svelte";
    import {base} from "$app/paths";
    
    import Code from "$lib/Code.svelte";
    import type DocsInterface from "$lib/docs/statistics";

    import { extractIdentifiers } from "../typePicker";
    import DescribeRoot from "../DescribeRoot.svelte";

    import SlottedTranslatableKey from "$lib/language/SlottedTranslatableKey.svelte";
    import Intertweener, { type Property, type Range } from "$lib/intertween/Intertweener.svelte";
    import { generateChunks } from "$lib/intertween/chunker";
    import Highlight from "$lib/intertween/highlight/Highlight.svelte";
    import { generateHighlightChunks } from "$lib/intertween/tokenize/highlight";
    import PopupDisabler from "$lib/intertween/highlight/PopupDisabler.svelte";

    import state from "$lib/state/stores";
    import UserDeselector from "$lib/intertween/UserDeselector.svelte";
    import ParametersDescriber from "$lib/docs/ParametersDescriber.svelte";
    import GhostText from "$lib/intertween/GhostText.svelte";

    let {hostClass, method, classi, forceSmall = false, setId = true, path, titleProperties = [], descriptionProperties = []}: {
        hostClass: Class,
        method: Method,

        classi: DocsInterface,

        forceSmall?: boolean,
        setId?: boolean,

        path: string,

        titleProperties?: Property<any>[];
        descriptionProperties?: Property<any>[];
    } = $props();



    let shouldShowClass = $derived(hostClass.name !== "globals");
    let qualifiedName = $derived((shouldShowClass ? hostClass.name + "." : "") + method.name);

    function processOverload(overload: Parameter[], returns: string, easyInfo: boolean): [string, Property<any>[]] {
        let ret = "";
        let hints: Range<any>[] = [];
        let deselector: Range<any>[] = [];
        let ghost: Range<any>[] = [];

        let shouldUseColon = !method.static;

        if (shouldShowClass) {
                    
            let accessor = hostClass.name;
            let shouldGhost = false;

            if (easyInfo) {
                console.log()
                for (let i = 0; i < classi.globalVariables.length; i++) {
                    if (classi.globalVariables[i].type === hostClass.name) {
                        accessor = classi.globalVariables[i].name;
                        shouldGhost = true;
                        break;
                    }
                }
            }
            if (shouldGhost) {
                ghost.push({
                    start: 0,
                    stop: accessor.length,
                    props: {}
                })
            }

            ret += accessor + (shouldUseColon ? ":" : ".");
        }

        ret += method.name;
        ret += "(";

        for (let i = 0; i < overload.length; i++) {
            ret += overload[i].name;
            let start = ret.length;
            if (!easyInfo) {
                ret += ": ";

                hints = hints.concat(extractIdentifiers(classi, overload[i].type, ret.length))
                ret += overload[i].type;

                deselector.push({
                    start: start,
                    stop: ret.length,
                    props: {}
                });
            }

            if (i !== overload.length - 1) {
                ret += ", ";
            }
        }

        ret += ")"

        if (!easyInfo) {
            ret += ": ";

            let start = ret.length - 2;

            hints = hints.concat(extractIdentifiers(classi, returns, ret.length))

            ret += returns;

            deselector.push({
                start: start,
                stop: ret.length,
                props: {}
            })
        }


        return [ret, [{component:UserDeselector, ranges: deselector}, {component:Highlight, ranges: hints}, {component: GhostText, ranges: ghost}]];
    }


    let superclass = $derived(classi.isFromSuperClass(hostClass, method));
</script>

<DescribeRoot example={method.example} classi={classi} forceSmall={forceSmall} id={qualifiedName}>
    {#snippet title()}
        <StyledItem src={method_src} href={base + path + qualifiedName} wrap="h1" color="dark" id={setId ? qualifiedName : undefined} style={superclass === null ? "" : "margin-bottom: 0px;"}>
            <Intertweener text={qualifiedName} properties={titleProperties}/>
        </StyledItem>
        {#if superclass !== null}
            <p style:margin-left="5px" style:padding-bottom="5px" style:margin-top="0" style:margin-bottom="25px">
                Inherited from <Intertweener text={superclass} properties={[{component: Highlight, ranges: [{start: 0, stop: superclass.length, props:{type: "docs", name: superclass, travel: classi.findFromQualifiedName(superclass) !== null ? superclass : undefined}}]}]}/>
            </p>
        {/if}
    {/snippet}

    <div>
        <SlottedTranslatableKey key={method.description} warn>
            {#snippet children(value)}
                <Intertweener text={value} properties={[generateChunks(value), ...descriptionProperties]}/>
            {/snippet}
        </SlottedTranslatableKey>
    </div>
    <PopupDisabler enabled={!$state.signaturePopupEnabled}>
        <div class="code-example filled" style:margin-top="50px">
            {#each method.parameters as overload, idx}
            {@const processed = processOverload(overload, method.returns[idx], !$state.skilled)}
                {#snippet addendum()}
                    <ParametersDescriber classi={classi} describer={[...overload.map(val => ({name: val.name + " accepts", type: val.type})), {name: "Return Value", type: method.returns[idx]}]}/>
                {/snippet}


                <div style:margin-top="10px">
                    <Code addendum={$state.skilled ? undefined : addendum}>
                        {#snippet title()}
                            overload {idx + 1}:
                        {/snippet}
                        <span style="user-select: all;">
                            <Intertweener text={processed[0]} properties={[generateHighlightChunks(processed[0]), ...processed[1]]}/>
                        </span>
                    </Code>
                </div>
            {/each}
        </div>
    </PopupDisabler>
</DescribeRoot>

<style lang="less">
    .code-example.filled {
        margin: 10px;
        padding: 10px;
        overflow: hidden;
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