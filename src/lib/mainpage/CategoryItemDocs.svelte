<script type="ts">
import Category from "./Article.svelte";

import ItemFieldsDocs from "./field/ItemFieldsDocs.svelte";

import ItemMethodsDocs from "./method/ItemMethodsDocs.svelte";

    export let docs: any;
    export let title = 1;
</script>

<Category>
    <svelte:element this={"h" + title} style:margin-bottom={docs.parent === "AnyType"? "initial":"0px"}>
        {docs.name}
    </svelte:element>
    {#if "parent" in docs}
        Inherits {docs.parent}<br>
    {/if}

    <p>{docs.description}</p>

    {#if docs.methods.length > 0}
        <section aria-label="Methods">
            <ItemMethodsDocs container={docs.name} content={docs.methods} title={title + 1}/>
        </section>
    {/if}
    {#if docs.fields.length > 0}
        <section aria-label="Fields">
            <ItemFieldsDocs container={docs.name} content={docs.fields} title={title + 1}/>
        </section>
    {/if}
</Category>
