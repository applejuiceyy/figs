<script type="ts">
    export let href: string;

    export let src: string;

    export let wrap: string | null = null;
    export let id: string | null = null;

    export let color: "light" | "dark" = "dark";

    export let style = "";
</script>

<a id={id ?? ""} class:flex={wrap === null} href={href} class:dark={color === "dark"} on:click>
    {#if wrap === null}
        <img src={src} style:object-fit="contain" style:height="1em" style:width="auto" aria-hidden="true" alt=""/>
        <slot/>
    {:else}
        <svelte:element this={wrap} class="flex" style={style}>
            <img src={src} style:object-fit="contain" style:height="1em" style:width="auto" aria-hidden="true" alt=""/><slot/>
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