<script type="ts">
    import Code from "$lib/Code.svelte";

    import examples from "$lib/docs/examples.yaml";

    import type { Example } from "$lib/typings/examples_typings";
    import Highlight from "$lib/highlighter/Highlight.svelte";

    import Background from "./Background.svelte";
    import StarToggle from "./StarToggle.svelte";
import { generateHints } from "$lib/docs/parse";
import type DocsInterface from "$lib/docs/statistics";


    export let forceSmall: boolean;

    export let id: string | null = null;
    export let highlightTitle: boolean = false;
    export let path: string;
    export let classi: DocsInterface;

    let example: Example;

    // @ts-ignore: keeps erroring for some reason and I don't wanna deal with it
    $: example = id in examples ? examples[id] : null;

    let scroll: number;
    let height: number;
    let exampleContainer: HTMLDivElement;
    let exampleElement: HTMLDivElement;

    $: {
        if (!import.meta.env.SSR && exampleContainer !== undefined && exampleElement !== undefined && example !== null && !forceSmall && matchMedia("only screen and (min-width: 1000px)").matches) {
            let bound = exampleContainer.getBoundingClientRect();
            let innerbound = exampleElement.getBoundingClientRect();
            scroll;
            let available = bound.height - innerbound.height;
            let scrollPercentage = 1 - bound.top / height;
            exampleElement.style.top = (Math.min(scrollPercentage, 1) * available) + "px";
            exampleElement.style.position = "absolute";
        }
    }
</script>

<Background forceFilled={forceSmall} percentage={0.7}>
    <div class="method-root" class:force-small={forceSmall}>
        <div class:highlight={highlightTitle}>
            <slot name="title" />
        </div>

        {#if id !== null}
            <StarToggle percentage={0.7} favouriteId={id} forceSmall={forceSmall}/>
        {/if}

        {#if example !== null}
            <div tabindex="0" class="code-example" class:force-small={forceSmall} bind:this={exampleContainer}>
                <div class="code-displace" bind:this={exampleElement}>
                    <Code>
                        <Highlight path={path} code={example.content} hoverHighlight={[...example.hints, ...generateHints(example.content, classi)]}></Highlight>
                    </Code>
                </div>
            </div>
        {:else}
            <div></div>
        {/if}

        <div style:margin="5px">
            <slot />
        </div>
    </div>
</Background>

<style lang="less">
    .method-root {
        padding: 10px;
        margin-bottom: 10px;

        position: relative;
    }

    .code-example {
        margin: 10px;
        padding: 10px;

        box-sizing: border-box;
    }

    @import "src/app";

    .highlight {
        .highlig();
    }

    @media only screen and (min-width: 1000px) {
        .method-root:not(.force-small) {
            display: grid;
            grid-template-columns: calc(70% - 5px) 30%;
            padding-right: 0px;
        }

        .code-example:not(.force-small)  {
            margin: 0px;
            padding: 0px;
            grid-row: 1 / 3;
            grid-column: 2;

            display: flex;
            align-items: center;

            position: relative;
        }

        .code-displace {
            width: 100%;
            
            z-index: 1;
        }

        .code-example:focus-visible {
            outline: 0;
        }
    }
</style>

<svelte:window bind:scrollY={scroll} bind:innerHeight={height}/>