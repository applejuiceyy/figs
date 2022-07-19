<script type="ts">
    import unlit_star from "$lib/resource/unlit_star.svg";
    import star from "$lib/resource/star.svg";

    import {starglint} from "$lib/actions/starglint"

    export let enabled: boolean;

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

<div class="svg-wrapper" on:mouseenter={() => stop = true} on:mouseleave={() => stop = false}>
    <img src={unlit_star} aria-hidden="true" alt=""/>

    {#if isShowing}
        <img class:enabled={enabled} class="posrel" src={star} aria-hidden="true" alt=""/>
        <svg class:enabled={enabled} class="posrel" width="100%" height="100%" use:starglint={stop}/>
    {/if}
</div>

<style>
    .svg-wrapper {
        position: relative;
    }

    .svg-wrapper:hover {
        filter: hue-rotate(100deg);
    }

    .posrel {
        position: absolute;
        top: 0;
        left: 0;

        mask: url($lib/resource/star.svg);
        mask-position: 50% 50%;

        mask-size: 0% 0%;
        mask-repeat: no-repeat;

        transition: mask-size 0.5s;
    }

    .enabled {
        mask-size: 100% 100%;
    }
</style>