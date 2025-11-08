<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    let {href, inline = false, external = false, onclick, children}: {
        href: string,
        inline?: boolean,
        external?: boolean,
        onclick?: HTMLAnchorAttributes["onclick"],
        children: Snippet
    } = $props();
</script>

<a href={href} rel={external ? "external" : ""} class:inline onclick={onclick}>
    {@render children()}
</a>

<style lang="less">
    @import "./constants.less";

    a {
        text-decoration: none;
        text-align: center;
        .nav-item();
    }

    .inline {
        display: inline-block;
        flex-grow: unset;
    }
</style>