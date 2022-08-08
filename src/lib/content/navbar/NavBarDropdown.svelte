<script context="module" type="ts">
    let reset = () => {};
</script>

<script type="ts">
import NavBarButton from "./NavBarButton.svelte";

    export let checked = false;

    function handleClick() {
        reset();

        checked = !checked;

        if (checked) {
            reset = () => checked = false;
        }
    }
</script>

<div class="nav-dropdown">
    <NavBarButton on:click={handleClick}>
        <slot/>
    </NavBarButton>

    {#if checked}
        <div class="nav-dropdown-window">
            <slot name="dropdown"/>
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