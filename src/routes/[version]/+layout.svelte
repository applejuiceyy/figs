<script lang="ts">
    // Suggestion (check code before using, and possibly convert to data.X access later):
    // /** @type {import('./$types').LayoutData} */
    // export let data;
    // $: ({ docs, version, base } = data);


    import {base as b} from "$app/paths";
    import type { Snippet } from "svelte";

    let {data, children}: {data: import('./$types').LayoutData, children: Snippet} = $props();
</script>

{@render children()}

<!-- required for the prerenderer crawler -->
<a href="{b}{data.base}search" style:display="none">a</a>
<a href="{b}{data.base}meta/docs.json" style:display="none">a</a>