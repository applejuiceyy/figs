<script lang="ts">
    import type { Snippet } from "svelte";

    let {children}: {
        children: Snippet
    } = $props();
</script>

<div class="partial-background">
    {@render children()}
</div>

<style>
    .partial-background {
        position: relative;
        isolation: isolate;

        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        background-color: #cccccc;
    }

    @media (prefers-color-scheme: dark) {
        .partial-background {
            background-color: #222222;
        }
    }
</style>