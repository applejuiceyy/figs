<script lang="ts">
    import type { Snippet } from "svelte";

    let {children}: {children: Snippet} = $props();
</script>

<span>{@render children()}</span>

<style>
    span {
        background-color: #888888;
        color: white;
        padding: 3px;
        border-radius: 3px;
    }
    @media (prefers-color-scheme: dark) {
        span {
            background-color: #aaaaaa;
            color: white;
        }
    }
</style>