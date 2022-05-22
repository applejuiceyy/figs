<script type="ts">
import Category from "./Article.svelte";

import ItemFieldsDocs from "./field/ItemFieldsDocs.svelte";

import ItemMethodsDocs from "./method/ItemMethodsDocs.svelte";

    export let docs: any;
    export let title = 1;
</script>

<Category>
    <svelte:element this={"h" + title}>
        {docs.name}
    </svelte:element>

    {docs.description}

    {#if docs.methods.length > 0}
        <section aria-label="Methods">
            <ItemMethodsDocs content={docs.methods} title={title + 1}/>
        </section>
    {/if}
    {#if docs.fields.length > 0}
        <section aria-label="Fields">
            <ItemFieldsDocs content={docs.fields} title={title + 1}/>
        </section>
    {/if}
</Category>
