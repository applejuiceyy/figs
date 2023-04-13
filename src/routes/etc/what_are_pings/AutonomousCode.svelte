<script type="ts">
    import PopupDisabler from "$lib/intertween/highlight/PopupDisabler.svelte";
    import state from "$lib/state/stores";
    import Code from "$lib/Code.svelte";
    import Intertweener from "$lib/intertween/Intertweener.svelte";
    import { page } from "$app/stores";
    import DocsInterface from "$lib/docs/statistics";

    import { generateHints } from "$lib/intertween/highlight/parse";
    import { generateHighlightChunks } from "$lib/intertween/tokenize/highlight";

    export let value: string;

    let classi: DocsInterface | null;
    $: {
        let docs = $page.data.docs;
        if (docs === undefined) {
            classi = null;
        }
        else {
            classi = new DocsInterface(docs);
        }
    }

    console.log(value);
</script>

<PopupDisabler enabled={!$state.examplePopupEnabled}>
    <Code style="box-sizing: border-box;">
        <Intertweener text={value} properties={classi === null ? [generateHighlightChunks(value)] : [generateHighlightChunks(value), generateHints(value, classi)]}/>
    </Code>
</PopupDisabler>