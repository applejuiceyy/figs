<script lang="ts">
    import stats from "$lib/docs/statistics";
    import { onDestroy, onMount } from "svelte";
    import pool from "$lib/language/translator";
    import _state from "$lib/state/stores";

    let {data}: {data: import('./$types').PageData} = $props();

    let s = new stats(data.docs);
    
    let interval: ReturnType<typeof setInterval> | null = null;
    
    let entries: any = $state([]);
    let waitingFetch: boolean = $state(false);

    let lang = "";
    // the ruuunes
    let visibility: HTMLDivElement = $state(undefined) as any;

    let searcher: ReturnType<stats["search"]> | null = $derived.by(() => {
        entries = [];
        lang = $_state.language;

        if (data.query !== null) {
            return s.search(data.query);
        }
        return null;
    });

    function stepSearcher() {
        if (searcher !== null) {
            if (pool.activeTransfers.length > 0) {
                waitingFetch = true;
                return;
            }

            waitingFetch = false;
            if (visibility.getBoundingClientRect().top < window.innerHeight * 2)
            {
                let ret = searcher.next();

                if (ret.done) {
                    searcher = null;
                }
                else {
                    entries = [...entries, ret.value];
                }
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
    <entry.this {...entry} classi={s} setId={false} path={data.base}/>
{/each}

{#if searcher !== null}
    <div bind:this={visibility} class="visibility-notifier"></div>
{:else if entries.length == 0}
    <h1>Nothing here</h1>
{/if}

<style></style>