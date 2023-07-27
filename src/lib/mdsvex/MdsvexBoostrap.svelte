<script>

    // do not convert to ts
    // https://github.com/pngwn/MDsveX/issues/485
    import { MetaTags } from "svelte-meta-tags";

    /** @type {string | undefined} */
    export let title = undefined;
    /** @type {string | null} */
    export let description = null;
    /** @type {string | null} */
    export let author = null;

    //@ts-ignore
    $: complete = author === null ? (description === null ? undefined : description) : (description === null ? "" : description + "\n\n") + "Written by " + author
</script>

<slot/>

<MetaTags title={title} description={complete}/>
