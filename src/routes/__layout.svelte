<script context="module" type="ts">
    let load = function ({params: {category, item, property}, url}: {url: any, params: {category: string | undefined, item: string | undefined, property: string | undefined}}) {
        // url is accessed because of params bug, don't worry about it
        // https://stackblitz.com/edit/sveltejs-kit-template-default-pp6sdm?file=src%2Froutes%2F__layout.svelte,src%2Froutes%2F[first]%2Findex.svelte,src%2Froutes%2Findex.svelte,src%2Froutes%2F[first]%2F[second]%2Findex.svelte&terminal=dev
        return {
            props: {
                item: item,
                category: category,
                property: property
            }
        };
    };

    export { load };
</script>

<script type="ts">
    import {base} from "$app/paths";
    import CategoryViewer from "$lib/sidebar/CategoryViewer.svelte";
    import { onDestroy, onMount } from "svelte";

    let interv: any = null;

    onMount(()=> {
        interv = setInterval(()=>
        {document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px")
    })
    })

    onDestroy(() => clearInterval(interv))

    export let item: string | undefined = undefined;
    export let category: string | undefined = undefined;
    export let property: string | undefined = undefined;

    let expanded: boolean = false;
</script>

<div class="root">
    <nav class:expanded class="figura-background">
        <a class="nav-item" href={base + "/"}>FIGS!!</a>
        <a class="nav-item expander" href="javascript:;" aria-label="Expand" on:click={()=>expanded = !expanded}>Expand</a>
    </nav>

    <div class="category figura-background" class:expanded>
        <div class="category-inner">
            <CategoryViewer item={item} category={category} property={property}/>

            <footer>
                Made by applejuice
            </footer>
        </div>
    </div>

    <div class:expanded class="content figura-background">
        <div class="rounding-content-wrapper">
            <slot />
        </div>
    </div>
</div>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    :global(*), :global(*::after), :global(*::before) {
        font-family: Roboto;
    }

    footer {
        margin-top: auto;
        padding-top: 40px;
        padding-bottom: 40px;
        padding-left: 10px;
        padding-right: 10px;

        background-image: linear-gradient(115deg, #ff880088, #55330088);
    }

    .category-inner {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .figura-background {
        background-image: url("$lib/background.png");
        background-size: calc(64px * 4) calc(64px * 4);
        image-rendering: crisp-edges;
        background-attachment: fixed;
    }

    .root {
        display: grid;
        grid-template-rows: min-content 1fr;
        grid-template-columns: 400px 1fr;

        width: calc(100vw - var(--scrollbar-width));
        min-height: 100vh;
    }

    nav {
        display: flex;
        position: sticky;

        top: 0;
        left: 0;
        right: 0;

        color: white;

        height: max-content;
        grid-column: 1 / 3;

        overflow: none;
    }

    nav>* {
        padding: 15px;
        text-decoration: none;
        color: white;
    }

    @keyframes brew {
        from {
            background-position: 0% 0%;
        }

        to {
            background-position: 0% 100%;
        }
    }

    .expander {
        display: none;
    }

    .rounding-content-wrapper {
        min-height: 100%;
        background-color: white;
        border-radius: 15px 0 0 0;
        padding: 5px;

        box-sizing: border-box;

        box-shadow: inset 5px 5px 10px 0 #00000044;
    }

    @media only screen and (max-width: 800px) {
        .content {
            background-image: initial;
        }

        .expander {
            display: block;
        }

        .category {
            display: none;
        }

        .root {
            grid-template-columns: 1fr;
        }

        .category.expanded {
            display: block;
        }

        .content.expanded {
            display: none;
        }

        nav {
            border-radius: 0 0 15px 15px;
        }

        nav.expanded {
            border-radius: initial;
        }
    }

    :global(body) {
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>