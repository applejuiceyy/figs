<script lang="ts">
    import type { Snippet } from "svelte";

    let {children}: {children: Snippet} = $props();
</script>

<span>{@render children()}</span>

<style>
    span {
        color: #ffff00;
        font-weight: bold;
    }

    @media (prefers-color-scheme: light) {
        span {
            color: #cc0000;
        }
    }
</style>