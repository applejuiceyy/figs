<script lang="ts">
    import type { Snippet } from "svelte";

    let {children}: {
        children: Snippet
    } = $props();
</script>

<div class="nav-floater">
    {@render children()}
</div>

<style lang="less">
    @import "./constants.less";

    .nav-floater {
        margin-left: auto;
        .inline-flex();
    }
</style>