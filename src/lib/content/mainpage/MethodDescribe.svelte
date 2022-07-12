<script type="ts">
    import type { Class, Method, Parameter } from "$lib/docs/rewrite_docs_typings";
    import Background from "./Background.svelte";

    import method_src from "$lib/resource/method.webp";
    import StyledItem from "../sidebar/StyledItem.svelte";
    import {base} from "$app/paths";

    import examples from "$lib/docs/examples.yaml";
    import ChunkedText from "$lib/ChunkedText.svelte";
    import Highlight from "$lib/highlighter/Highlight.svelte";
    import Code from "$lib/Code.svelte";
    import type { Example, Hint } from "$lib/docs/examples_typings";
    import { getSupers, isFromSuperClass } from "$lib/docs/processor/processed";
import { pickType } from "./typePicker";

    export let hostClass: Class;
    export let method: Method;

    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    let shouldShowClass = hostClass.name !== "globals";
    let qualifiedName = (shouldShowClass? hostClass.name + "." : "") + method.name;

    let example: Example;

    // @ts-ignore: keeps erroring for some reason and I don't wanna deal with it
    $: example = qualifiedName in examples ? examples[qualifiedName] : null;

    function processOverload(overload: Parameter[], returns: string): [string, Hint[]] {
        let ret = "";
        let hints: Hint[] = [];
        let shouldUseColon = shouldShowClass && overload.length > 0 && (getSupers(hostClass.name).includes(overload[0].type) || overload[0].type === hostClass.name);

        if (shouldUseColon) {
            overload = [...overload];
            overload.shift();
        }

        if (shouldShowClass) {
            ret += hostClass.name + (shouldUseColon ? ":" : ".");
        }

        ret += method.name;
        ret += "(";

        for (let i = 0; i < overload.length; i++) {
            ret += overload[i].name;
            ret += ": ";

            hints.push(
                {
                    range: [ret.length, ret.length + overload[i].type.length - 1],
                    type: pickType(overload[i].type),
                    name: overload[i].type
                }
            )
            ret += overload[i].type;

            if (i !== overload.length - 1) {
                ret += ", ";
            }
        }

        ret += "): "

        hints.push(
            {
                range: [ret.length, ret.length + returns.length],
                type: pickType(returns),
                name: returns
            }
        )

        ret += returns;

        return [ret, hints];
    }

    let superclass = isFromSuperClass(hostClass, method);
</script>

<Background forceFilled={forceSmall}>
    <div class="method-root" class:force-small={forceSmall}>
        <div>
            <StyledItem src={method_src} href={base + "#" + qualifiedName} wrap="h1" color="dark" id={setId ? qualifiedName : null} style={superclass === null ? "" : "margin-bottom: 0px;"}>
                {qualifiedName}
            </StyledItem>
            {#if superclass !== null}
            <p style:margin-left="5px" style:padding-bottom="5px" style:margin-top="0" style:margin-bottom="25px">Inherited from <Code style="display: inline;"><Highlight code={superclass} hoverHighlight={[{range: [0, superclass.length], type: "docs", name: superclass}]}></Highlight></Code></p>
            {/if}
        </div>

        <div class="code-example" class:filled={qualifiedName in examples} class:force-small={forceSmall}>
            {#if example !== null}
                <Code><Highlight code={example.content} hoverHighlight={example.hints}></Highlight></Code>
            {/if}
        </div>

        <div style:margin="5px">

            <ChunkedText value={method.description}/>

            <div class="code-example filled" style:margin-top="50px">
                {#each method.parameters as overload, idx}
                {@const processed = processOverload(overload, method.returns[idx])}
                    <Code>
                        <Highlight code={processed[0]} hoverHighlight={processed[1]}></Highlight>
                    </Code>
                {/each}
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
        overflow: hidden;
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