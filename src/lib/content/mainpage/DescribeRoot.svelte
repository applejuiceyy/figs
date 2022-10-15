<script type="ts">
    import Code from "$lib/Code.svelte";

    import Background from "./Background.svelte";
    import StarToggle from "./StarToggle.svelte";
    import { generateHints } from "$lib/intertween/highlight/parse";
    import type DocsInterface from "$lib/docs/statistics";
    import Intertweener from "$lib/intertween/Intertweener.svelte";
    import { generateHighlightChunks } from "$lib/intertween/tokenize/highlight";


    export let forceSmall: boolean;

    export let id: string | null = null;
    export let highlightTitle: boolean = false;
    export let classi: DocsInterface;
    export let example: string | null = null;
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
            <div tabindex="0" class="code-example" class:force-small={forceSmall}>
                <div class="code-displace">
                    <Code>
                        <Intertweener text={example} properties={[generateHighlightChunks(example), generateHints(example, classi)]}/></Code>
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