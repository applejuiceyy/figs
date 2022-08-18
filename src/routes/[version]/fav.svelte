<script context="module" type="ts">
    import type { Load } from "./fav";

    let load: Load = function ({stuff}) {
        return {
            props: {
                docs: (stuff as any).docs,
                base: (stuff as any).base,
            }
        };
    };

    export { load };
</script>

<script type="ts">
    import DescribeAny from "$lib/content/mainpage/DescribeAny.svelte";

    import write from "$lib/state/stores";

    import stats from "$lib/docs/statistics";
    import type { Docs } from "$lib/typings/rewrite_docs";

    export let docs: Docs;
    export let base: string;

    let s = new stats(docs);
</script>

{#each $write.favourites as favourite}
    {@const what = s.findFromQualifiedName(favourite)}

    {#if what !== null}
        <DescribeAny classi={s} what={what} setId={false} path={base}/>
    {/if}
{/each}