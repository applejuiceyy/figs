<script type="ts">
    import star from "$lib/resource/unlit_star.svg";
import StarToggle from "./StarToggle.svelte";
import write from "$lib/state/stores";

    export let forceSmall: boolean;

    export let favouriteId: string | null = null;

    let favourited: boolean;

    $: favouriteId !== null && (favourited = $write.favourites.includes(favouriteId));

    function changeFavourite() {
        if (favourited) {
            $write.favourites = $write.favourites.filter(val => val !== favouriteId);
        }
        else {
            $write.favourites = [...$write.favourites, favouriteId as string];
        }
    }
</script>

<div class="method-root" class:force-small={forceSmall}>
    {#if favouriteId !== null}
        <button class="favourite-button" class:force-small={forceSmall} on:click={changeFavourite}>
            <StarToggle enabled={favourited}/>
        </button>
    {/if}
    <slot/>
</div>

<style>
    .method-root {
        padding: 10px;
        margin-bottom: 10px;

        position: relative;
    }

    .favourite-button {
        position: absolute;

        top: 50px;
        right: 10px;

        width: 50px;
        height: 50px;

        padding: 0;
        border-radius: 0;

        border: 0;
        background-color: transparent;

        mask: url($lib/resource/star.svg);
    }

    @media only screen and (min-width: 1000px) {
        .method-root:not(.force-small) {
            display: grid;
            grid-template-columns: calc(50% - 5px) 50%;
            padding-right: 0px;
        }

        .favourite-button:not(.force-small) {
            right: calc(10px + 50%);
        }
    }
</style>