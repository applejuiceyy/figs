<script lang="ts">
    import { setContext, type Snippet } from "svelte";
    import { writable } from "svelte/store";


    let {enabled, children}: {children: Snippet, enabled: boolean} = $props();

    let store = writable(enabled);
    $effect(() => {$store = enabled});

    setContext("highlight-popup", store);
</script>

{@render children()}