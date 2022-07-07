<script type="ts">
    import dirt from "$lib/resource/blocks/dirt.png";
    import grass from "$lib/resource/blocks/grass_block.png";
    import stone from "$lib/resource/blocks/stone.png";
    import sun from "$lib/resource/blocks/sun.png";
import Sign from "./Sign.svelte";

    const map = [
        0, 1, 1, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    ];

    const blocks = [null, grass, dirt, stone];

    let scrollY: number;
    let sunPos: number;
    let visible: boolean = false;

    let root: HTMLDivElement | null = null;

    $: {
        if(!import.meta.env.SSR) {
            visible = root === null ? false : isInViewport(root);

            if(visible)
            sunPos = document.body.offsetHeight - scrollY - window.innerHeight;
        }
    }

    function isInViewport(element: Element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight;
    }

</script>

<div bind:this={root} style:visibility={visible ? 'visible' : 'hidden'} aria-hidden="true" class="sky" style:background-image="linear-gradient(#00000000, rgb(00, {200 - sunPos / 2}, {255 - sunPos / 2}) 80%)">
    {#if visible}    
        <img alt="" class="sun" src={sun} style:transform="translate(calc(20% - {sunPos / 10}px), {Math.pow(sunPos, 3) / 50000}px)" style:opacity={1 - sunPos / 500}>

        {#each map as block}
            {#if block === 4}
                <Sign/>
            {:else if blocks[block] === null}
                <div></div>
            {:else}
                <div class="block">
                    <img alt="" src={blocks[block]} style:width="100%" preload="true"/>
                </div>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .sky {
        margin-top: 50vh;
        padding-top: calc(50vh + 5vw);
        display: grid;
        grid-template-columns: repeat(20, 1fr);

        position: relative;
    }


    .sky>:global(*) {
        width: 100%;
        image-rendering: crisp-edges;
        position: relative;
    }

    .sky>:global(.block)::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: linear-gradient(#00000000 70%, #000000);
        background-attachment: fixed;
        pointer-events: none;
    }

    img {
        display: block;
    }

    .sun {
        position: absolute;
        mix-blend-mode: screen;
        top: 0;
        left: 0;
        width: 30%;
    }
</style>

<svelte:window bind:scrollY={scrollY}/>