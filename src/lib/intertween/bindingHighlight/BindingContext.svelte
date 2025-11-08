<script lang="ts">
    import type { Snippet } from "svelte";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    let {children}: {
        children: Snippet
    } = $props();

    setContext("__binding", writable([]))
</script>

{@render children()}