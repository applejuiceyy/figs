<script type="ts">
    import stats from "$lib/docs/statistics";
    import { onDestroy, onMount } from "svelte";
    import pool from "$lib/language/translator";
    import state from "$lib/state/stores";

    export let data: import('./$types').PageData;

    let s = new stats(data.docs);
    let searcher: ReturnType<stats["search"]> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;
    
    let entries: any = [];
    let waitingFetch: boolean = false;

    let lang = "";
    let visibility: HTMLDivElement;

    $: {
        if (lang !== $state.language) {
            searcher = null;
            entries = [];
            lang = $state.language;

            if (data.query !== null) {
                searcher = s.search(data.query);
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
            console.log(window.innerHeight);
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
    <svelte:component this={entry.this} {...entry} classi={s} setId={false} path={data.base}></svelte:component>
{/each}

{#if searcher !== null}
    <div bind:this={visibility} class="visibility-notifier"></div>
{/if}

<style></style>