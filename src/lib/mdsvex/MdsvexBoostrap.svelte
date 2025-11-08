<script>
    // do not convert to ts
    // https://github.com/pngwn/MDsveX/issues/485
    import { MetaTags } from "svelte-meta-tags";

    /** @type {{title?: string | undefined, description?: string | null, author?: string | null, children: import("svelte").Snippet}} */
    let {title = undefined, description = null, author = null, children} = $props();

    let complete = $derived(author === null ? (description === null ? undefined : description) : (description === null ? "" : description + "\n\n") + "Written by " + author);
</script>

{@render children()}

<MetaTags title={title} description={complete}/>
