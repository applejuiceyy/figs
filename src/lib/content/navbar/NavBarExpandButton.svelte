<script lang="ts">
    import NavBarButton from "./NavBarButton.svelte";
    import { getContext, type Snippet } from "svelte";

    let {button = $bindable(), children}: {
        button?: HTMLButtonElement;
        children: Snippet
    } = $props();

    let state = getContext("navbar") as any;

    function handleClick() {
        $state.expanded = !$state.expanded;
    }
</script>

<div class="expand-button">
    <NavBarButton bind:button={button} onclick={handleClick} children={children}>
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