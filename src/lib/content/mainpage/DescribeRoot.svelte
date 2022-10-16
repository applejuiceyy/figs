<script type="ts">
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

    export let forceSmall: boolean;

    export let id: string | null = null;
    export let classi: DocsInterface;
    export let example: Example | null = null;
</script>

<Background>
    <div class="method-root" class:force-small={example === null}>
        <slot name="title" />

        {#if id !== null}
            <StarToggle favouriteId={id}/>
        {/if}

        {#if example !== null}
            <div tabindex="0" class="code-example" class:force-small={forceSmall}>
                <PopupDisabler enabled={!$state.examplePopupEnabled}>
                    <Code style="height: 100%; box-sizing: border-box;">
                        <svelte:fragment slot="title">Example{example.author ? ` by ${example.author}` : ""}:</svelte:fragment>
                        <Intertweener text={example.content} properties={[generateHighlightChunks(example.content), generateHints(example.content, classi)]}/>
                    </Code>
                </PopupDisabler>
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
</style>