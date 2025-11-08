<script lang="ts">
    import stores from "$lib/state/stores";

    import type { Snippet } from "svelte";

    let {children}: {children: Snippet} = $props();
</script>

<span class:enabled={$stores.readerEnabled}>{@render children()}</span>

<style>
    .enabled {
        opacity: 0.3;
        transition: opacity 0.1s;
    }

    .enabled:hover {
        opacity: 1;
    }

    @media (hover: none) {
        .enabled {
            opacity: 1;
        }
    }
</style>