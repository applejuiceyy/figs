<script type="ts">
    import NavBarButton from "./NavBarButton.svelte";
    import { getContext } from "svelte";

    export let button: HTMLButtonElement | null = null;

    let state = getContext("navbar") as any;

    function handleClick() {
        $state.expanded = !$state.expanded;
    }
</script>

<div class="expand-button">
    <NavBarButton bind:button={button} on:click={handleClick}>
        <slot/>
    </NavBarButton>
</div>

<style lang="less">
    @import "./constants.less";

    @media only screen and (min-width: (@collapse-width + 0.5px)) {
        .expand-button {
            display: none;
        }
    }
</style>