<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    let {button = $bindable(), onclick, children} : {
        button?: HTMLButtonElement,
        onclick: HTMLButtonAttributes["onclick"],
        children: Snippet
    } = $props();
</script>

<button onclick={ev => {ev.stopPropagation(); onclick?.(ev)}} bind:this={button}>
    {@render children()}
</button>

<style lang="less">
    @import "./constants.less";

    button {
        .nav-item();
        position: relative;
    }
</style>