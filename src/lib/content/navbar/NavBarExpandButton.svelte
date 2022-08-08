<script>
    import NavBarButton from "./NavBarButton.svelte";
    import { getContext } from "svelte";

    let state = getContext("navbar");

    function handleClick() {
        $state.expanded = !$state.expanded;
    }
</script>

<div class="expand-button">
    <NavBarButton on:click={handleClick}>
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