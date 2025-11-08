<script lang="ts">
    import unlit_star from "$lib/resource/unlit_star.svg";
    import star from "$lib/resource/star.svg";

    import write from "$lib/state/stores";

    import {starglint} from "$lib/actions/starglint"
    import { tick } from "svelte";

    let {favouriteId}: {
        favouriteId?: string
    } = $props();

    let enabled: boolean = $state(false);
    let isShowing = $state(true);

    $effect(() => {
        if(favouriteId !== undefined) {
            if($write.favourites.includes(favouriteId)) {
                isShowing = true;
                tick().then(() => enabled = true);
            }
            else {
                enabled = false;
            }
        }
    });

    function changeFavourite() {
        if (enabled) {
            $write.favourites = $write.favourites.filter(val => val !== favouriteId);
        }
        else {
            $write.favourites = [...$write.favourites, favouriteId as string];
        }
    }

    let stop: boolean = $state(false);




    if (!import.meta.env.SSR) {
        $effect(() => {
            if (enabled) {
                isShowing = true;
            }
            else {
                let timeoutId = setTimeout(() => isShowing = false, 500);
                return () => clearTimeout(timeoutId);
            }
        });
    }
</script>

<button class="favourite-button" onclick={changeFavourite}>
    <div class="svg-wrapper" onmouseenter={() => stop = true} onmouseleave={() => stop = false} role="none">
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

    .enabled {
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
    }
</style>