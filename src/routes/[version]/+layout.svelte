<script type="ts">
    // Suggestion (check code before using, and possibly convert to data.X access later):
    // /** @type {import('./$types').LayoutData} */
    // export let data;
    // $: ({ docs, version, base } = data);

    import pool from "$lib/language/translator";
    import {base as b} from "$app/paths";
    import { onDestroy } from "svelte";

    export let data: import('./$types').LayoutData;

    let unsub: (() => void) | null = null;
    $: {
        if (unsub !== null) {
            unsub();
        }

        unsub = pool.addProvider(data.docs.languages, data.version);
    };

    onDestroy(() => {
        if (unsub !== null) unsub();
    })

</script>

<slot/>

<!-- required for the prerenderer crawler -->
<a href="{b}{data.base}search" style:display="none">dummy</a>