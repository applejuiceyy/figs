<script type="ts">
    import star from "$lib/resource/unlit_star.svg";
import StarToggle from "./StarToggle.svelte";


    export let forceSmall: boolean;


</script>

<div class="method-root" class:force-small={forceSmall}>
    <slot/>
</div>

<style>
    .method-root {
        padding: 10px;
        margin-bottom: 10px;

        position: relative;
    }

    @media only screen and (min-width: 1000px) {
        .method-root:not(.force-small) {
            display: grid;
            grid-template-columns: calc(50% - 5px) 50%;
            padding-right: 0px;
        }
    }
</style>