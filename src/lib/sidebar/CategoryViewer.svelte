<script type="ts">
    import rewrite_docs from "$lib/rewrite_docs.json";
    import {base} from "$app/paths";
import ItemMethodDocs from "$lib/mainpage/method/ItemMethodDocs.svelte";

    export let category: string | undefined;
    export let item: string | undefined;
    export let property: string | undefined;
</script>

{#each Object.entries(rewrite_docs) as [name, doc]}
    <div class="category-item-root">
        <a class="category-selector" href="{base}/{name}">{name}</a>

        {#if category === name}
            <div class="category-items">
                {#each doc as docitem}
                    <a href="{base}/{name}/{docitem.name}">{docitem.name}</a>

                    {#if item === docitem.name}
                        <div class="category-functions">
                            {#each docitem.methods as method}
                                <a href="{base}/{name}/{docitem.name}/{method.name}" class:selected={method.name === property}>{method.name}</a>
                            {/each}
                        </div>
                        <div class="category-functions">
                            {#each docitem.fields as field}
                            <a href="{base}/{name}/{docitem.name}/{field.name}" class:selected={field.name === property}>{field.name}</a>
                            {/each}
                        </div>
                    {/if}
                {/each}

            </div>
        {/if}
    </div>
{/each}

<style>
    .category-selector {
        text-decoration: none;
        color: black;
        padding: 5px;
        display: block;
        border-radius: 5px 5px 5px 0;
        background-color: darkgray;
    }
    a {
        text-decoration: none;
        color: black;
        display: block;
    }
    .category-item-root {
        margin: 5px;
        padding: 5px;

        background-color: grey;
        border-radius: 5px;
    }

    .category-items {
        padding-left: 10px;
        border-left: 5px darkgray solid;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .category-functions {
        padding-left: 15px;
        margin-top: 5px;
    }

    .selected {
        padding-left: 5px;
        border-left: 5px black solid;
    }
</style>