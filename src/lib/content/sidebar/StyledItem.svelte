<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    let {href, src, wrap, id, color = "dark", style = "", onclick, children}: {
        href: string,
        src: string,
        wrap?: string,
        id?: string,
        color?: "light" | "dark",
        style?: string,
        onclick?: HTMLAnchorAttributes["onclick"],
        children: Snippet
    } = $props();
</script>

<a id={id ?? ""} class:flex={wrap === undefined} href={href} class:dark={color === "dark"} onclick={onclick}>
    {#if wrap === undefined}
        <img src={src} style:object-fit="contain" style:height="1em" style:width="auto" aria-hidden="true" alt=""/>
        {@render children()}
    {:else}
        <svelte:element this={wrap} class="flex" style={style}>
            <img src={src} style:object-fit="contain" style:height="1em" style:width="auto" aria-hidden="true" alt=""/>{@render children()}
        </svelte:element>
    {/if}
</a>

<style>
    a {
        text-decoration: none;
    }
    .flex {
        display: flex;

        align-items: stretch;
        font-family: Consolas;

        word-wrap: anywhere;
    }

    img {
        margin-right: 5px;
    }

    a {
        color: #eeeeee;
    }

    a.dark {
        color: black;
    }

    @media (prefers-color-scheme: dark) {
        a.dark {
            color: #eeeeee;
        }

        a {
            color: black;
        }
    }
</style>