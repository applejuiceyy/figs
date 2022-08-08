<script context="module" type="ts">
    import type { Load } from "./fav";
    import { prerendering } from '$app/env';

    let load: Load = function ({stuff, url}) {
        let docs = (stuff as any).docs;
        import.meta.env.MODE
        return {
            props: {
                query: prerendering ? null : url.searchParams.get("q"),
                docs,
                base: (stuff as any).base
            }
        };
    };

    export { load };
</script>

<script type="ts">
    import stats from "$lib/docs/statistics";
    import type { Docs } from "$lib/docs/rewrite_docs";
    import { onDestroy, onMount } from "svelte";
    import pool from "$lib/language/translator";
    import state from "$lib/state/stores";

    export let query: string | null;
    export let docs: Docs;
    export let base: string;

    let s = new stats(docs);
    let searcher: ReturnType<stats["search"]> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;
    
    let entries: any = [];
    let waitingFetch: boolean = false;

    let lang = "";

    $: {
        if (lang !== $state.language) {
            searcher = null;
            entries = [];
            lang = $state.language;

            if (query !== null) {
                searcher = s.search(query);
            }
        }
    }

    function stepSearcher() {
        if (searcher !== null) {
            if (pool.activeTransfers.length > 0) {
                waitingFetch = true;
                return;
            }

            waitingFetch = false;

            let ret = searcher.next();

            if (ret.done) {
                searcher = null;
            }
            else {
                entries = [...entries, ret.value];
            }
        }
    }

    onMount(() => {
        interval = setInterval(stepSearcher, 1);
    })

    onDestroy(() => {
        if (interval !== null) {
            clearInterval(interval);
        }
    })
</script>

{#if waitingFetch}
    Waiting for the pool to finish fetching languages
{/if}
{#each entries as entry}
    <svelte:component this={entry.this} {...entry} classi={s} setId={false} path={base}></svelte:component>
{/each}