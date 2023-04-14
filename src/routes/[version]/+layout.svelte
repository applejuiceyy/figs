<script type="ts">
    // Suggestion (check code before using, and possibly convert to data.X access later):
    // /** @type {import('./$types').LayoutData} */
    // export let data;
    // $: ({ docs, version, base } = data);


    import {base as b} from "$app/paths";

    export let data: import('./$types').LayoutData;
</script>

<slot/>

<!-- required for the prerenderer crawler -->
<a href="{b}{data.base}search" style:display="none">dummy</a>