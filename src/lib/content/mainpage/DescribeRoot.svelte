<script lang="ts">
    import Code from "$lib/Code.svelte";

    import Background from "./Background.svelte";
    import StarToggle from "./StarToggle.svelte";
    import { generateHints } from "$lib/intertween/highlight/parse";
    import type DocsInterface from "$lib/docs/statistics";
    import Intertweener from "$lib/intertween/Intertweener.svelte";
    import { generateHighlightChunks } from "$lib/intertween/tokenize/highlight";
    import PopupDisabler from "$lib/intertween/highlight/PopupDisabler.svelte";

    import state from "$lib/state/stores";
    import type { Example } from "$lib/typings/examples_typings";
    import type { Snippet } from "svelte";

    let {forceSmall, id, classi, example, title, children}: {
        forceSmall: boolean,
        id?:string,
        classi: DocsInterface,
        example?: Example,
        title: Snippet,
        children: Snippet
    } = $props();
</script>

<Background>
    <div class="method-root" class:force-small={example === null}>
        {@render title()}

        {#if id !== null}
            <StarToggle favouriteId={id}/>
        {/if}

        {#if example !== undefined}
            <div class="code-example" class:force-small={forceSmall}>
                <PopupDisabler enabled={!$state.examplePopupEnabled}>
                    <Code style="box-sizing: border-box;">
                        {#snippet title()}Example{example.author ? ` by ${example.author}` : ""}:{/snippet}
                        <Intertweener text={example.content} properties={[generateHighlightChunks(example.content), generateHints(example.content, classi)]}/>
                    </Code>
                </PopupDisabler>
            </div>
        {:else}
            <div></div>
        {/if}

        <div style:margin="5px">
            {@render children()}
        </div>
    </div>
</Background>

<style lang="less">
    .method-root {
        position: relative;
    }

    .code-example {
        margin: 10px;
        padding: 10px;

        box-sizing: border-box;
    }

    @import "src/app";
</style>