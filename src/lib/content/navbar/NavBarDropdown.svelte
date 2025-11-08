<script lang="ts" module>
    let reset = () => {};
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    import NavBarButton from "./NavBarButton.svelte";

    let {checked = false, button = $bindable(), dropdown, children}: {
        checked?: boolean,
        button?: HTMLButtonElement,
        dropdown: Snippet,
        children: Snippet
    } = $props();

    function handleClick() {
        let state = checked;
        reset();

        if (state === checked)
        {
            checked = !checked;

            if (checked) {
                reset = () => checked = false;
            }
        }
    }
</script>

<div class="nav-dropdown">
    <NavBarButton onclick={handleClick} bind:button={button}>
        {@render children()}
    </NavBarButton>

    {#if checked}
        <div class="nav-dropdown-window">
            {@render dropdown()}
        </div>
    {/if}
</div>

<svelte:window on:click={() => checked = false}/>

<style lang="less">
    @import "./constants.less";

    .nav-dropdown {
        position: relative;

        .itemised-flex();
    }

    .nav-dropdown-window {
        .itemised-flex();

        background-color: #111111;
    }

    @media only screen and (min-width: (@collapse-width + 0.5px)) {
        .nav-dropdown-window {
            position: absolute;

            border-radius: 5px;

            top: 110%;
            left: -50%;
            right: -50%;

            max-height: 50vh;
            overflow-y: auto;
        }
    }
</style>