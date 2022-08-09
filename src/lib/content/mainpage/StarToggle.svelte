<script type="ts">
    import unlit_star from "$lib/resource/unlit_star.svg";
    import star from "$lib/resource/star.svg";

    import write from "$lib/state/stores";

    import {starglint} from "$lib/actions/starglint"

    export let forceSmall: boolean = false;
    export let percentage: number = 0.5;

    export let favouriteId: string | null = null;

    let enabled: boolean = false;

    $: favouriteId !== null && (enabled = $write.favourites.includes(favouriteId));

    function changeFavourite() {
        if (enabled) {
            $write.favourites = $write.favourites.filter(val => val !== favouriteId);
        }
        else {
            $write.favourites = [...$write.favourites, favouriteId as string];
        }
    }

    let stop: boolean = false;

    let isShowing = true;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    $: {
        if (import.meta.env.SSR) {
            if (timeoutId !== null) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => isShowing = enabled, enabled ? 0 : 500);
        }
    }
</script>

<button class="favourite-button" on:click={changeFavourite} class:force-small={forceSmall} style:--width={(1 - percentage) * 100 + "%"}>
    <div class="svg-wrapper" on:mouseenter={() => stop = true} on:mouseleave={() => stop = false}>
        <img src={unlit_star} aria-hidden="true" alt=""/>

        {#if isShowing}
            <img class:enabled={enabled} class="posrel" src={star} aria-hidden="true" alt=""/>
            <svg class:enabled={enabled} class="posrel" width="100%" height="100%" use:starglint={stop}/>
        {/if}
    </div>
</button>

<style>
    .svg-wrapper {
        position: relative;
    }

    .favourite-button:focus-visible, .favourite-button:hover {
        filter: hue-rotate(100deg) brightness(90%);
    }

    .posrel {
        position: absolute;
        top: 0;
        left: 0;

        mask: url($lib/resource/star.svg);
        mask-position: 50% 50%;

        mask-size: 0% 0%;
        mask-repeat: no-repeat;

        -webkit-mask: url($lib/resource/star.svg);
        -webkit-mask-position: 50% 50%;

        -webkit-mask-size: 0% 0%;
        -webkit-mask-repeat: no-repeat;

        transition: mask-size 0.5s, -webkit-mask-size 0.5s;

        display: block;
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
        -webkit-mask: url($lib/resource/star.svg);
    }

    @media only screen and (min-width: 1000px) {
        .favourite-button:not(.force-small) {
            right: calc(10px + var(--width));
        }
    }

    .enabled {
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
    }
</style>