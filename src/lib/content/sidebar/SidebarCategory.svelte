<script type="ts">
    import type { Class } from "$lib/typings/rewrite_docs";
    import { createEventDispatcher } from "svelte";

    import {base} from "$app/paths";

    import StyledItem from "./StyledItem.svelte";
    
    import klass_src from "$lib/resource/class.webp";


    export let name: string;
    export let clss: Class[];
    export let path: string;

    let dispatcher = createEventDispatcher();

    let show = false;
</script>

<section class="category">
    <button style:margin-bottom={show ? "5px" : ""} on:click={() => show = !show}><h1 class="tab">{name}</h1></button>

    <div class="category-items" class:active={show}>
        {#each clss as cls}
            <StyledItem on:click={() => dispatcher("select")} href="{base}{path}{cls.name}" src={klass_src}>{cls.name}</StyledItem>
        {/each}
    </div>
</section>

<style lang="less">
    @import "src/app.less";

    .tab {
        padding: 5px;
        display: block;

        text-align: center;

        margin: 0;

        background-color: var(--landmark-in-window);
        color: var(--color-in-landmark);
    }

    .category {
        border: 2px var(--landmark-in-window) solid;
        margin: 5px;
        margin-left: 10px;
        margin-right: 10px;
    }

    button {
        width: 100%;

        &:focus-visible {
            outline: 5px grey solid;
        }

        cursor: pointer;
    }

    .category-items {
        display: none;
    }

    .category-items.active {
        display: block;
    }
</style>